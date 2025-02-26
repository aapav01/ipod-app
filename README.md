# iPod Classic Interface 🎵

![React](https://img.shields.io/badge/React-19.0.0-61DAFB?logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.7.2-3178C6?logo=typescript)

A modern recreation of the classic iPod interface built with React.js and TypeScript. Relive the nostalgic click wheel experience in your browser!

**Live Demo**: [Coming Soon]
**GitHub Repository**: [https://github.com/aapav01/ipod-app](https://github.com/aapav01/ipod-app)


## Features 🚀

- 🎛️ Circular click wheel navigation
- 📱 Retro-styled LCD display
- 🎮 Functional sub-menu system
- ⚙️ Settings and Games screens
- 🕒 Real-time clock and battery indicator
- 📱 Mobile-responsive design

## Installation 💻

1. Clone the repository:
```bash
git clone https://github.com/aapav01/ipod-app.git
cd ipod-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

## Usage 🎧

- **Click Wheel**:
  - ← → : Navigate through menu items
  - MENU : Return to previous screen
  - CENTER : Select highlighted item
  - PLAY/PAUSE : Toggle playback (simulated) (WIP)

- **Menu Navigation**:
  - Main Menu: Music, Games, Settings
  - Music Sub-Menus: All Songs, Artists, Albums
  - Games Screen: Retro-style game placeholder
  - Settings Screen: Device information

## Project Structure 🗂️

```
ipod-app/
├── src/
│   ├── components/         # React components
│   │   ├── ClickWheel.tsx  # Interactive wheel component
│   │   ├── Display/        # Screen display component
│   │   └── Menu/           # Menu system components
│   │   └── LeafScreen/      # Different app screens
│   │       ├── index.tsx
│   │       ├── Games.tsx
│   │       └── Settings.tsx
│   └── App.tsx          # Main application component
├── public/              # Static assets
└── package.json         # Project dependencies
```

## Roadmap 🗺️

- [ ] Add music playback functionality
- [ ] Create actual playable games maybe?
- [ ] Include animations for menu transitions
- [ ] Add dark mode/light mode toggle?

## Contributing 🤝

Contributions are welcome! Here's how you can help:

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Please report bugs and feature requests using [GitHub Issues](https://github.com/aapav01/ipod-app/issues).

## Acknowledgements 🙏

- Inspired by Apple's iconic iPod Classic
- Built with [Create React App](https://create-react-app.dev/)
- Icons by [Lucide](https://lucide.dev/)
- Special thanks to the React community

---

**Relive the magic of digital music revolution!** 🍎🎶
