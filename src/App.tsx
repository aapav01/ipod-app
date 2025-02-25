// App.tsx
import { useState } from "react";
import Display from "./compoments/Display";
import ClickWheel from "./compoments/ClickWheel";
import menuScreens from "./compoments/Menu/items";

export default function App() {
  const [screenStack, setScreenStack] = useState(["main"]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const currentScreen = screenStack[screenStack.length - 1];
  const isMenu = menuScreens[currentScreen] !== undefined;
  const N = isMenu ? menuScreens[currentScreen].length : 0;

  const onMenuClick = () => {
    if (screenStack.length > 1) {
      setScreenStack(screenStack.slice(0, -1));
      setSelectedIndex(0);
    }
  };

  const onCenterClick = () => {
    if (isMenu) {
      const selectedItem = menuScreens[currentScreen][selectedIndex];
      setScreenStack([...screenStack, selectedItem]);
      setSelectedIndex(0);
    }
  };

  const onSelectIndexChange = (newIndex: number) => {
    if (isMenu) {
      setSelectedIndex(newIndex);
    }
  };

  return (
    // TODO: animate background color change
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="flex flex-col bg-gray-200 h-full w-64 rounded-2xl border border-gray-300 p-4 items-center">
        <Display screenStack={screenStack} selectedIndex={selectedIndex} />
        <div className="mt-4">
          <ClickWheel
            onMenuClick={onMenuClick}
            onCenterClick={onCenterClick}
            onSelectIndexChange={onSelectIndexChange}
            selectedIndex={selectedIndex}
            N={N}
          />
        </div>
      </div>
    </div>
  );
}
