# 🌟 Retro Cyber Terminal

> *A nostalgic journey into the world of 1990s hacker aesthetics with neon glows, Matrix rain, and interactive puzzles*

![Retro Cyber Terminal](https://img.shields.io/badge/Status-Live-brightgreen) ![React](https://img.shields.io/badge/React-18.x-blue) ![Vite](https://img.shields.io/badge/Vite-5.x-purple) ![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-teal)

## 🎮 Features

### 🖥️ **Interactive Terminal**
- **10+ Terminal Commands**: `help`, `whoami`, `ps`, `ls`, `nmap`, `hack`, and more!
- **Real-time Command Processing** with typewriter effects
- **Sound Effects** for authentic retro experience
- **Command History** and auto-focus functionality

### 🔍 **Puzzle & Treasure Hunt System**
- **Multi-level Puzzle Flow**: HTML clues → Hidden pages → Key collection → Vault unlocking
- **Base64 Encoded Clues** hidden in page source
- **Secret Key Assembly**: Find PART-1 and PART-2 to unlock the digital vault
- **Easter Eggs** scattered throughout the experience

### 🎨 **Retro Aesthetics**
- **Matrix Digital Rain** background animation
- **CRT Scanlines** with subtle flicker effects  
- **Glitch Text Effects** with multi-colored shadows
- **Neon Glow** buttons and UI elements
- **Custom Cursor** with blinking terminal caret
- **Responsive Design** that works on all devices

### 🚀 **Advanced Features**
- **React Router** for seamless page navigation
- **Framer Motion** animations for smooth transitions
- **Custom Sound Engine** with WebAudio API
- **ASCII Art Components** for retro visual flair
- **Dynamic Content Loading** with typewriter effects

## 🎯 How to Play

### Step 1: Investigate
1. Open the terminal at the home page
2. Type `help` to see available commands
3. Use `hint` or `source` for clues about hidden content
4. **Pro Tip**: Check the page source for Base64 encoded secrets!

### Step 2: Decode & Navigate  
1. Find the Base64 string in HTML comments: `Z28gdG8gL2hpZGRlbg==`
2. Decode it to reveal the hidden path
3. Navigate to the secret location to find **PART-1** of the key

### Step 3: Explore the Void
1. Visit a non-existent page (like `/ghost` or `/test`) to trigger the 404
2. Collect **PART-2** of the secret key
3. Combine both parts: `CYB3R-` + `PUNK-199X`

### Step 4: Unlock the Vault
1. Return to the terminal
2. Type: `key CYB3R-PUNK-199X`
3. Watch as the digital vault unlocks with your rewards! 🏆

## 🛠️ Installation & Setup

```bash
# Clone the repository
git clone <your-repo-url>
cd retro-cyber-terminal

# Install dependencies
npm install

# Start the development server
npm run dev

# Open your browser to http://localhost:5173
```

## 🎮 Terminal Commands

| Command | Description |
|---------|-------------|
| `help` | Display all available commands |
| `about` | Learn about the project |
| `whoami` | Show current user info |
| `ps` | List running processes |
| `ls` | Show directory contents |
| `nmap` | Scan network ports |
| `date` | Display current neon time |
| `hack` | Attempt system breach |
| `cat readme.txt` | Read classified information |
| `hint` | Get puzzle solving hints |
| `source` | Instructions for finding clues |
| `cls` | Clear terminal screen |
| `key <secret>` | Submit the assembled secret key |

## 🏗️ Tech Stack

- **Frontend Framework**: React 18+ with Hooks
- **Build Tool**: Vite for lightning-fast development
- **Styling**: TailwindCSS + Custom CSS for retro effects
- **Routing**: React Router DOM for SPA navigation
- **Animations**: Framer Motion for smooth transitions
- **Audio**: Web Audio API for retro sound effects
- **Typography**: JetBrains Mono for authentic terminal feel

## 📁 Project Structure

```
src/
├── components/
│   ├── Matrix.jsx          # Digital rain background
│   ├── Typewriter.jsx      # Text animation component
│   └── AsciiArt.jsx        # ASCII art renderer
├── pages/
│   ├── Home.jsx            # Main terminal interface
│   ├── Hidden.jsx          # Secret puzzle page
│   ├── NotFound.jsx        # 404 page with key part
│   └── Vault.jsx           # Final victory page
├── App.jsx                 # Main app with routing
├── main.jsx                # React entry point
└── index.css               # Custom styles & animations
```

## 🌟 Screenshots

*Terminal Interface with Matrix Rain*
*Hidden Puzzle Page*  
*Digital Vault Unlocked*

## 🔮 Future Enhancements

- [ ] **Mini-Games**: Snake, Binary guessing, Password cracking
- [ ] **Advanced Puzzles**: Multi-step encryption, QR codes
- [ ] **File System Simulation**: Full `cd`, `mkdir`, `rm` support
- [ ] **Network Simulation**: `ping`, `traceroute`, `ssh`
- [ ] **AI Chatbot**: Virtual hacker assistant
- [ ] **Multiplayer**: Real-time collaboration on puzzles
- [ ] **Achievement System**: Unlock badges and rewards
- [ ] **Custom Themes**: Switch between different retro palettes

## 🤝 Contributing

Contributions are welcome! Whether it's:
- 🐛 Bug fixes
- ✨ New commands or features  
- 🎨 Visual improvements
- 🧩 Additional puzzles
- 📚 Documentation updates

Feel free to open an issue or submit a pull request!

## 📜 License

MIT License - Feel free to use this project for learning, inspiration, or building your own cyber adventures!

## 🎪 Credits

- **Matrix Rain Effect**: Inspired by the iconic "Matrix" movies
- **CRT Effects**: Nostalgic nod to vintage computer terminals
- **Typography**: JetBrains Mono font for authentic coding feel
- **Color Palette**: Classic green-on-black hacker aesthetic

---

*"The Matrix has you... but now you have the tools to bend it to your will."* 🕶️

**Made with 💚 and lots of neon dreams**
