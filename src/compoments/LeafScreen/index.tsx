/**
 * TODO: LeafScreen render a screen with a title or get ReactNode
 * @param {string} title - The title of the screen
 * @returns ReactElement
 */

import Menu from "../Menu";

type LeafScreenProps = {
  title: string;
  submenus?: string[];
  selectedIndex: number;
};

function LeafScreen({ title, submenus, selectedIndex }: LeafScreenProps) {
  return (
    <div>
      {submenus ? (
        <Menu items={submenus} selectedIndex={selectedIndex} />
      ) : (
        <>
          <h1 className="text-2xl font-semibold text-black">{title}</h1>
          <p className="text-gray-500">This is a leaf screen</p>
        </>
      )}
    </div>
  );
}

export default LeafScreen;
