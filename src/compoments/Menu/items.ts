/**
 * TODO: Add ReactNode type to the menuScreens object
 * @type {Object.<string, string[]>}
 */
const menuScreens: {
  [key: string]: string[];
} = {
  main: ["Music", "Games", "Settings"],
  music: ["All songs", "Artists", "Albums", "Playlists"],
  settings: ["Shuffle", "Repeat", "Sound Check"],
};

export default menuScreens;
