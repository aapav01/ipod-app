import React from "react";
import Settings from "../LeafScreen/Settings";
import Games from "../LeafScreen/Games";

/**
 * TODO: Add ReactNode type to the menuScreens object
 * @type {Object.<string, string[]>}
 */
const menuScreens: {
  [key: string]: string[] | React.ReactNode;
} = {
  main: ["Music", "Games", "Settings"],
  music: ["All songs", "Artists", "Albums", "Playlists"],
  settings: <Settings />,
  games: <Games />,
};

export default menuScreens;
