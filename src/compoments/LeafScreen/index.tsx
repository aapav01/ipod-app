/**
 * LeafScreen component
 * @param {string[] | React.ReactNode} submenus
 * @param {number} selectedIndex
 * @returns ReactElement
 */

import Menu from "../Menu";

type LeafScreenProps = {
  submenus?: string[] | React.ReactNode;
  selectedIndex: number;
};

function LeafScreen({ submenus, selectedIndex }: LeafScreenProps) {
  if (Array.isArray(submenus)) {
    return <Menu items={submenus} selectedIndex={selectedIndex} />;
  } else {
    return submenus;
  }
}

export default LeafScreen;
