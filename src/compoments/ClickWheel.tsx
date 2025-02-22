import {
  PauseIcon,
  PlayIcon,
  SkipBackIcon,
  SkipForwardIcon,
} from "lucide-react";

export default function ClickWheel() {
  const buttonSize = 24;
  return (
    <div className="relative bg-gray-300 h-40 w-40 rounded-full text-gray-500 broder border-gray-400 max-h-56 cursor-pointer">
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 translate-y-3">
        <h2 className="uppercase font-sans font-bold text-sm">MENU</h2>
      </div>
      <SkipBackIcon
        size={buttonSize}
        className="absolute top-1/2 left-0 transform translate-x-2 -translate-y-1/2"
      />
      <SkipForwardIcon
        size={buttonSize}
        className="absolute top-1/2 right-0 transform -translate-x-2 -translate-y-1/2"
      />
      <div className="flex absolute bottom-0 left-1/2 transform -translate-x-1/2 -translate-y-3">
        <PlayIcon size={buttonSize - 2} />
        <PauseIcon size={buttonSize - 2} />
      </div>
      <div className="absolute top-[25%] left-[25%] bg-gray-200 min-h-20 min-w-20 rounded-full border border-gray-400/50"></div>
    </div>
  );
}
