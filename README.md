# 🐭 Community MouseHunt Guide

A comprehensive, community-driven guide for the MouseHunt game, built with modern web technologies and organized by rank progression.

## 📖 About

This guide provides a step-by-step walkthrough for MouseHunt, reflecting the latest changes that older guides often miss. It focuses on practical strategy and decision-making rather than just raw data. For hard facts like crafting recipes, loot tables, and stats, players are directed to the official wiki.

## ✨ Features

- **Rank-Based Organization**: Content organized by MouseHunt ranks from Novice to Fabled
- **Modern Web Interface**: Built with Astro for fast, static site generation
- **Responsive Design**: Works seamlessly on desktop and mobile devices
- **Dark/Light Theme**: Automatic theme switching with system preference detection
- **Search Functionality**: Full-text search powered by Pagefind
- **Accessibility**: Built with accessibility best practices in mind

## 🏗️ Project Structure

```
src/
├── content/guide/           # Guide content organized by rank
│   ├── 01-Fabled/          # Highest rank guides
│   ├── 02-Sage/
│   ├── 03-Elder/
│   ├── 04-Viceroy/
│   ├── 05-Archduke/
│   ├── 06-Grand Duke/
│   ├── 07-Duke/
│   ├── 08-Count/
│   ├── 09-Baron/
│   ├── 10-Lord/
│   ├── 11-Knight/
│   ├── 12-Hero/
│   ├── 13-Legendary/
│   ├── 14-Grandmaster/
│   ├── 15-Master/
│   ├── 16-Journeyman/
│   ├── 17-Initiate/
│   ├── 18-Apprentice/
│   ├── 19-Recruit/
│   └── 20-Novice/          # Lowest rank guides
├── components/              # Reusable UI components
├── layouts/                 # Page layout templates
├── pages/                   # Route definitions
└── styles/                  # Global CSS and styling
```

## 🎯 Rank Progression

The guide follows the official MouseHunt rank progression:

1. **Novice** → Meadow
2. **Recruit** → Town of Gnawnia
3. **Apprentice** → Windmill
4. **Initiate** → Harbour
5. **Journeyman** → Mountain
6. **Master** → Laboratory, Mousoleum, Calm Clearing, Great Gnarled Tree
7. **Grandmaster** → Training Grounds, Bazaar, Dojo, Meditation Room, Pinnacle Chamber, Lagoon
8. **Legendary** → SSIV, Cape Clawed, Nerg Plains, Derr Dunes, Elub Shore
9. **Hero** → Jungle of Dread, Catacombs, Forbidden Grove, Acolyte Realm
10. **Knight** → Dracano
11. **Lord/Lady** → Seasonal Garden, Zugzwang's Tower, Slushy Shoreline, Iceberg, Claw Shot City
12. **Baron/Baroness** → Fort Rox, Fiery Warpath, Muridae Market, Living Garden
13. **Count/Countess** → Queso River, Queso Geyser, Gnawnia Rift, Sunken City
14. **Duke/Duchess** → Fungal Cavern, Labyrinth, Zokor, Burroughs Rift, Whisker Woods Rift
15. **Grand Duke/Duchess** → Moussu Picchu, Furoma Rift, Bristle Woods Rift
16. **Archduke/Archduchess** → Floating Islands, Foreward Farm, Prologue Pond, Table of Contents, Valour Rift
17. **Viceroy+** → Bountiful Beanstalk, School of Sorcery, Draconic Depths, Afterword Arces, Epilogue Falls

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/kuhmann/CMHG.git
cd cd CMHG
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open [http://localhost:4321](http://localhost:4321) in your browser

## 📝 Adding Content

### Creating a New Guide Post

1. Navigate to the appropriate rank folder in `src/content/guide/`
2. Create a new `.mdx` file with the following frontmatter:

```mdx
---
title: "Your Guide Title"
description: "Brief description of the guide"
date: "2024-01-15"
rank: "Apprentice"  # Must match one of the defined ranks
area: "Forest"      # The hunting area this guide covers
order: 1            # Optional: for custom ordering within areas
---
```

### Content Guidelines

- Use clear, concise language
- Focus on practical strategies and decision-making
- Include relevant tips and warnings using the Callout component
- Structure content with proper headings (H2, H3, etc.)
- Keep guides focused on specific areas or mechanics

## 🛠️ Technology Stack

- **Framework**: [Astro](https://astro.build/) - Static site generator
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- **Search**: [Pagefind](https://pagefind.app/) - Static search library
- **Fonts**: [Geist Sans](https://vercel.com/font) - Modern, readable typography
- **Icons**: Custom SVG icons and emojis

## 🤝 Contributing

We welcome contributions from the MouseHunt community! Here's how you can help:

### Ways to Contribute

1. **Content Creation**: Write guides for specific ranks or areas
2. **Content Updates**: Keep existing guides current with game changes
3. **Bug Reports**: Report issues or inconsistencies
4. **Feature Requests**: Suggest improvements or new features
5. **Code Contributions**: Help improve the website functionality

### Contribution Process

1. Fork the repository
2. Create a branch: `git checkout -b guide/edits-made`
3. Make your changes
4. Commit your changes: `git commit -m 'edited some guide'`
5. Push to the branch: `git push origin guide/edits-made`
6. Submit a pull request

## 🔗 Useful Resources

- **[MouseHunt Wiki](https://mhwiki.hitgrab.com/wiki/index.php/MouseHunt_Wiki)** - Official game data and statistics
- **[Tsitu's MouseHunt Tools](https://tsitu.github.io/MH-Tools/)** - Player-made tools and calculators
- **[MHCT](https://www.mhct.win/)** - MouseHunt Community Tools
- **[MouseHunt Forums](https://www.mousehuntgame.com/forum)** - Official game forums
- **[MouseHunt Discord](https://discord.gg/mousehunt)** - Community Discord server
- **[MouseHunt Subreddit](https://www.reddit.com/r/mousehunt/)** - Reddit community

## 🙏 Acknowledgments

Special thanks to all who have helped: contributors, Discord community members, and everyone else who has supported this project.

This guide was inspired by:
- [Mousehunt Basics](https://mousehuntbasics.wordpress.com/) by Phil
- [Mozka's Definite MouseHunt Guide](https://adefinitivemhguide.wordpress.com/)
- [MHCommunity](https://guide.mouse.rip/)

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## ⚠️ Disclaimer

This is a community-created guide for the game MouseHunt. All MouseHunt images and content included here are the properties of HitGrab Inc. This guide is not affiliated with or endorsed by HitGrab Inc.

---

**Built with ❤️ by the MouseHunt community**