import React from "react";
import Menu from "../Menu";

type LeafScreenProps = {
  submenus?: string[] | React.ReactNode;
  selectedIndex: number;
};

/**
 * LeafScreen component
 * @param {string[] | React.ReactNode} submenus
 * @param {number} selectedIndex
 * @returns ReactElement
 */
function LeafScreen({ submenus, selectedIndex }: LeafScreenProps) {
  if (Array.isArray(submenus)) {
    return <Menu items={submenus} selectedIndex={selectedIndex} />;
  } else if (React.isValidElement(submenus)) {
    return submenus;
  } else {
    return <div>No content available.</div>;
  }
}

export default LeafScreen;
