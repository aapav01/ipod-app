
import Games from "../LeafScreen/Games";
import Settings from "../LeafScreen/Settings";
import Song from "../LeafScreen/Song";

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
  "song 1": <Song title="Song 1" artist="Artist 1" album="Album 1" year={2021} duration={180} genre="Pop" lyrics="Lyrics" cover="" />,
  "song 2": <Song title="Song 2" artist="Artist 2" album="Album 2" year={2021} duration={180} genre="Pop" lyrics="Lyrics" cover="" />,
  "song 3": <Song title="Song 3" artist="Artist 3" album="Album 3" year={2021} duration={180} genre="Pop" lyrics="Lyrics" cover="" />,
  "artist 1": "Artist 1 content",
  "artist 2": "Artist 2 content",
  "artist 3": "Artist 3 content",
  "album 1": "Album 1 content",
  "album 2": "Album 2 content",
  "album 3": "Album 3 content",
};

export default menuScreens;
