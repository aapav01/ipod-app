import ClickWheel from "./compoments/ClickWheel";
import Display from "./compoments/Display";

export default function App() {
  return (
    // TODO: animate background color change
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="flex flex-col bg-gray-200 h-full w-64 rounded-2xl border border-gray-300 p-4 items-center">
        <Display />
        <div className="mt-4">
          <ClickWheel />
        </div>
      </div>
    </div>
  );
}
