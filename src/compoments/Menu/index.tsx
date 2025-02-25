interface MenuProps {
  items: string[];
  selectedIndex: number;
}

export default function Menu({ items, selectedIndex }: MenuProps) {
  return (
    <div className="flex flex-col w-full">
      {items.map((item, index) => (
        <div
          key={index}
          className={`p-2 ${
            index === selectedIndex
              ? " bg-gradient-to-t from-0% from-purple-700 via-50% via-violet-700 to-100% to-purple-700 text-white"
              : ""
          }`}
        >
          {item}
        </div>
      ))}
    </div>
  );
}
