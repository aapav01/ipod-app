import { BatteryFullIcon } from "lucide-react";
import React from "react";

export default function Display() {
  const locale = "en";
  const [today, setDate] = React.useState(new Date());
  React.useEffect(() => {
    const timer = setInterval(() => {
      setDate(new Date());
    }, 60 * 1000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  const time = today.toLocaleTimeString(locale, {
    hour: "numeric",
    hour12: true,
    minute: "numeric",
  });

  return (
    <div className="flex min-h-44 w-full bg-black rounded-lg">
      {/* Status Bar of iPod */}
      <div className="flex flex-row justify-between w-full h-6 bg-slate-400 text-xs p-1 rounded-t-lg">
        <h1 className="font-base font-serif">Apavayan's IPod</h1>
        <div className="flex flex-row gap-1">
          <BatteryFullIcon size={16} className=" fill-lime-400" />
          <p className="font-semibold text-black">{time}</p>
        </div>
      </div>
    </div>
  );
}
