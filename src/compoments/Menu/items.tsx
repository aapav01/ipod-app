import React from "react";
import Settings from "../LeafScreen/Settings";
import Games from "../LeafScreen/Games";

interface MenuScreens {
  [key: string]: string[] | React.ReactNode;
}

/**
 * Menu screens configuration
 *
 * @type {MenuScreens}
 * @property {string[]} main - Main menu items
 * @property {string[]} music - Music menu items
 * @property {string[]} settings - Settings menu items
 * @property {string[]} games - Games menu items
 */

const menuScreens: MenuScreens = {
  main: ["Music", "Games", "Settings"],
  music: ["All songs", "Artists", "Albums", "Playlists"],
  settings: <Settings />,
  games: <Games />,
};

export default menuScreens;
