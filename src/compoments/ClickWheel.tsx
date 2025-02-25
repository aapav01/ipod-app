import {
  PauseIcon,
  PlayIcon,
  SkipBackIcon,
  SkipForwardIcon,
} from "lucide-react";
import { useRef, useState } from "react";

interface ClickWheelProps {
  onMenuClick: () => void;
  onCenterClick: () => void;
  onSelectIndexChange: (index: number) => void;
  selectedIndex: number;
  N: number;
}

export default function ClickWheel({
  onMenuClick,
  onCenterClick,
  onSelectIndexChange,
  selectedIndex,
  N,
}: ClickWheelProps) {
  const wheelRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [totalAngleChange, setTotalAngleChange] = useState(0);
  const previousAngleRef = useRef(0);
  const lastReportedIndexRef = useRef(selectedIndex);


  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.target === wheelRef.current) {
      const wheel = wheelRef.current;
      const rect = wheel.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const angle = Math.atan2(mouseY - centerY, mouseX - centerX);
      setIsDragging(true);
      setTotalAngleChange(0);
      previousAngleRef.current = angle;
      lastReportedIndexRef.current = selectedIndex;
    }
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (isDragging) {
      const wheel = wheelRef.current;
      if (!wheel) return;
      const rect = wheel.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mouseX = event.clientX;
      const mouseY = event.clientY;
      const currentAngle = Math.atan2(mouseY - centerY, mouseX - centerX);
      let delta = currentAngle - previousAngleRef.current;
      if (delta > Math.PI) delta -= 2 * Math.PI;
      else if (delta < -Math.PI) delta += 2 * Math.PI;
      setTotalAngleChange((prev) => prev + delta);
      previousAngleRef.current = currentAngle;
      const threshold = Math.PI / 12; // 15 degrees
      const steps = Math.floor(totalAngleChange / threshold);
      const newIndex = Math.min(Math.max(selectedIndex + steps, 0), N - 1);
      if (newIndex !== lastReportedIndexRef.current) {
        onSelectIndexChange(newIndex);
        lastReportedIndexRef.current = newIndex;
      }
    }
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  return (
    <div
      className="relative bg-gray-300 h-40 w-40 rounded-full text-gray-500 border border-gray-400"
      ref={wheelRef}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <button
        onClick={onMenuClick}
        className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-3 uppercase font-sans font-bold text-sm"
      >
        MENU
      </button>
      <SkipBackIcon
        size={24}
        className="absolute top-1/2 left-0 transform translate-x-2 -translate-y-1/2"
      />
      <SkipForwardIcon
        size={24}
        className="absolute top-1/2 right-0 transform -translate-x-2 -translate-y-1/2"
      />
      <div className="flex absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-3">
        <PlayIcon size={22} />
        <PauseIcon size={22} />
      </div>
      <div
        onClick={onCenterClick}
        className="absolute top-[25%] left-[25%] bg-gray-200 transition-all hover:inset-shadow-sm inset-shadow-gray-500 min-h-20 min-w-20 rounded-full border border-gray-400/50"
      ></div>
    </div>
  );
}
