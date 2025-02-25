import { BatteryFullIcon } from "lucide-react";
import React from "react";

const menuScreens: {
  [key: string]: string[];
} = {
  main: ["Music", "Games", "Settings"],
  music: ["All songs", "Artists", "Albums", "Playlists"],
  settings: ["Shuffle", "Repeat", "Sound Check"],
};

function Menu({
  items,
  selectedIndex,
}: {
  items: string[];
  selectedIndex: number;
}) {
  return (
    <div className="menu p-2 text-white">
      {items.map((item, index) => (
        <div
          key={index}
          className={`p-1 ${index === selectedIndex ? "bg-blue-600" : ""}`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}

function LeafScreen({ title }: { title: string }) {
  return <div className="leaf-screen p-2 text-white">{title}</div>;
}

export default function Display({
  screenStack,
  selectedIndex,
}: {
  screenStack: string[];
  selectedIndex: number;
}) {
  const currentScreen = screenStack[screenStack.length - 1];
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
    <div className="flex min-h-44 w-full bg-black rounded-lg flex-col">
      <div className="flex flex-row justify-between w-full h-6 bg-slate-400 text-xs p-1 rounded-t-lg">
        <h1 className="font-base font-serif">Apavayan's IPod</h1>
        <div className="flex flex-row gap-1">
          <BatteryFullIcon size={16} className="fill-lime-400" />
          <p className="font-semibold text-black">{time}</p>
        </div>
      </div>
      <div className="screen flex-1">
        {menuScreens[currentScreen] ? (
          <Menu
            items={menuScreens[currentScreen]}
            selectedIndex={selectedIndex}
          />
        ) : (
          <LeafScreen title={currentScreen} />
        )}
      </div>
    </div>
  );
}
