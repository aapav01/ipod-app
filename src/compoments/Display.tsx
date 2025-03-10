import { BatteryFullIcon } from "lucide-react";
import React from "react";
import menuScreens from "./Menu/items";
import LeafScreen from "./LeafScreen";

export default function Display({
  screenStack,
  selectedIndex,
}: {
  screenStack: string[];
  selectedIndex: number;
}) {
  const currentScreen = screenStack[screenStack.length - 1].toLowerCase();
  const menuContent = menuScreens[currentScreen];
  const locale = "en";
  const [today, setDate] = React.useState(new Date());

  React.useEffect(() => {
    const timer = setInterval(() => setDate(new Date()), 60 * 1000);
    return () => clearInterval(timer);
  }, []);

  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });

  return (
    <div className="flex min-h-44 max-h-44 w-full bg-white rounded-lg flex-col">
      <div className="flex flex-row justify-between w-full h-6 bg-slate-400 text-xs p-1 rounded-t-lg">
        <h1 className="font-base font-sans">Apavayan's IPod</h1>
        <div className="flex flex-row gap-1">
          <BatteryFullIcon size={16} className="fill-lime-400" />
          <p className="font-semibold text-black">{time}</p>
        </div>
      </div>
      <div
        className="overflow-auto flex-1 flex justify-center items-center overflow-y-auto [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-track]:rounded-full
      [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300"
      >
        <LeafScreen submenus={menuContent} selectedIndex={selectedIndex} />
      </div>
    </div>
  );
}
