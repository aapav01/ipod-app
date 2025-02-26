import Games from "../LeafScreen/Games";
import Settings from "../LeafScreen/Settings";

interface MenuScreens {
  [key: string]: string[] | React.ReactNode;
}

/**
 * Menu screens configuration
 * @type {Object}
 * @property {string[]} main - Main menu items
 * @property {string[]} music - Music menu items
 * @property {string[]} games - Games menu items
 * @property {string[]} settings - Settings menu items
 * @property {string[]} all songs - All songs menu items
 * @property {string[]} artists - Artists menu items
 * @property {string[]} albums - Albums menu items
 */
const menuScreens: MenuScreens = {
  main: ["Music", "Games", "Settings"],
  music: ["All Songs", "Artists", "Albums"],
  games: <Games />,
  settings: <Settings />,
  "all songs": ["Song 1", "Song 2", "Song 3"],
  artists: ["Artist 1", "Artist 2", "Artist 3"],
  albums: ["Album 1", "Album 2", "Album 3"],
};

export default menuScreens;
