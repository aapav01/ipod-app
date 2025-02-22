import {
  PauseIcon,
  PlayIcon,
  SkipBackIcon,
  SkipForwardIcon,
} from "lucide-react";
import Display from "./compoments/Display";

export default function App() {
  const buttonSize = 24;
  return (
    // TODO: animate background color change
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="flex flex-col bg-gray-200 h-full w-64 rounded-2xl border border-gray-300 p-4 items-center">
        <Display />
        <div className="mt-4">
          {/* TODO: add Controller to Navigate */}
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
            {/* Black Space in center */}
            <div className="absolute top-[25%] left-[25%] bg-gray-200 min-h-20 min-w-20 rounded-full cursor-default border border-gray-400/50"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
