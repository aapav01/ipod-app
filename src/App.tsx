export default function App() {
  return (
    // TODO: animate background color change
    <div className="flex min-h-screen w-full items-center justify-center">
      <div className="flex flex-col bg-gray-200 h-96 w-64 rounded-2xl border border-gray-300 p-4 items-center">
        <div className="flex bg-white min-h-40 w-full rounded-lg">
          {/* TODO: Add Display Comp Contralled by Controller */}
          <h1 className="text-2xl font-bold">Hello World</h1>
        </div>
        <div className="mt-4">
          {/* TODO: add Controller to Navigate */}
          <div className="flex items-center justify-center bg-gray-300 h-40 w-40 rounded-full">
            <div className="bg-gray-200 h-20 w-20 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
