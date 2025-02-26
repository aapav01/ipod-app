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

// To Change the Sensitivity of the ClickWheel
const PAN_THRESHOLD = 5; // pixels
const ANGLE_THRESHOLD = Math.PI / 12; // 15 degrees

export default function ClickWheel({
  onMenuClick,
  onCenterClick,
  onSelectIndexChange,
  selectedIndex,
  N,
}: ClickWheelProps) {
  const wheelRef = useRef<HTMLDivElement>(null);
  const [isDragging, setIsDragging] = useState(false);
  const accumulatedDeltaRef = useRef(0);
  const previousAngleRef = useRef(0);
  const initialPositionRef = useRef({ x: 0, y: 0 });

  const handleMouseDown = (event: React.MouseEvent<HTMLDivElement>) => {
    const target = event.target as HTMLElement;
    if (target.closest('button')) return;

    const wheel = wheelRef.current;
    if (!wheel) return;

    const rect = wheel.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    initialPositionRef.current = { x: mouseX, y: mouseY };
    previousAngleRef.current = Math.atan2(mouseY - centerY, mouseX - centerX);
    accumulatedDeltaRef.current = 0;
    setIsDragging(true);
  };

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !wheelRef.current) return;

    // Check pan threshold
    const dx = event.clientX - initialPositionRef.current.x;
    const dy = event.clientY - initialPositionRef.current.y;
    if (Math.sqrt(dx * dx + dy * dy) < PAN_THRESHOLD) return;

    const rect = wheelRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const currentAngle = Math.atan2(
      event.clientY - centerY,
      event.clientX - centerX
    );

    let delta = currentAngle - previousAngleRef.current;
    delta = ((delta + Math.PI) % (2 * Math.PI)) - Math.PI;
    accumulatedDeltaRef.current += delta;

    // Calculate steps based on accumulated angle change
    const steps = Math.floor(accumulatedDeltaRef.current / ANGLE_THRESHOLD);
    if (steps !== 0) {
      const newIndex = Math.min(
        Math.max(selectedIndex + steps, 0),
        N - 1
      );

      if (newIndex !== selectedIndex) {
        onSelectIndexChange(newIndex);
        accumulatedDeltaRef.current -= steps * ANGLE_THRESHOLD;
      }
    }

    previousAngleRef.current = currentAngle;
  };

  const handleMouseUp = () => {
    setIsDragging(false);
    previousAngleRef.current = 0;
  };

  return (
    <div
      className="relative bg-gray-300 h-40 w-40 rounded-full text-gray-500 border border-gray-400 transition-transform duration-200"
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
