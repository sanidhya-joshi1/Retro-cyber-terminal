import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Typewriter from "../components/Typewriter.jsx";

const WELCOME = [
  "BOOT SEQUENCE: OK",
  "INIT VIDEO: CRT_MODE=ON",
  "LOADING MODULES: MATRIX, GLITCH, ASCII",
  "ACCESS TERMINAL: AUTH NOT REQUIRED",
  "",
  "Type 'help' to list commands."
];

export default function Home() {
  const [lines, setLines] = useState([]);
  const [input, setInput] = useState("");
  const inputRef = useRef(null);
  const nav = useNavigate();

  useEffect(() => {
    // Intro boot sequence
    let i = 0;
    const addNext = () => {
      if (i < WELCOME.length) {
        setLines((prev) => [...prev, WELCOME[i++]]);
        setTimeout(addNext, i === 1 ? 400 : 160);
      }
    };
    addNext();
    inputRef.current?.focus();
  }, []);

  function print(s = "") {
    setLines((prev) => [...prev, s]);
  }

  // Add sound function
  function playSound(type) {
    const audio = new Audio();
    switch(type) {
      case 'keypress':
        audio.src = 'data:audio/wav;base64,UklGRnoGAABXQVZFZm10IBAAAAABAAEAQB8AAEAfAAABAAgAZGF0YQoGAACBhYqFbF1fdJivrJBhNjVgodDbq2EcBj+a2/LDciUFLIHO8tiJNwgZaLvt559NEAxQp+PwtmMcBjiR1/LMeSwFJHfH8N2QQAoUXrTp66hVFApGn+DyvmAcBDuR2O7Hc..';
        break;
      case 'success':
        // Generate success beep
        const successCtx = new AudioContext();
        const successOsc = successCtx.createOscillator();
        successOsc.frequency.setValueAtTime(800, successCtx.currentTime);
        successOsc.connect(successCtx.destination);
        successOsc.start();
        successOsc.stop(successCtx.currentTime + 0.1);
        break;
    }
  }

  function onCommand(cmdRaw) {
    const cmd = cmdRaw.trim().toLowerCase();
    if (!cmd) return;

    playSound('keypress');
    print("> " + cmd);

    switch (cmd) {
      case "help":
        print("commands: help, about, hint, source, cls, contact, whoami, ps, ls, date, hack");
        print("tip: real hackers read the source…");
        break;
      case "about":
        print("Retro Cyber World — 1990s terminal aesthetics, neon & glitches.");
        break;
      case "hint":
        print("The path you seek is encoded where HTML comments dwell.");
        print("Decode wisely. (base64 is a friend.)");
        break;
      case "source":
        print("Right-click → View Source / Inspect. Clues hide in plain sight.");
        break;
      case "cls":
        setLines([]);
        break;
      case "contact":
        print("Operator: root@retro.local  |  Frequency: 1337 MHz");
        break;
      case "unlock":
        print("Nice try. Only those who decode the path may proceed.");
        break;
      case "whoami":
        print("root@retro-cyber | ACCESS_LEVEL: GUEST | STATUS: ONLINE");
        break;
      case "ps":
        print("PID    CMD");
        print("1337   matrix_rain.exe");
        print("2048   glitch_engine.dll");
        print("9999   hidden_service ???");
        print("1984   surveillance.gov [BLOCKED]");
        break;
      case "ls":
        print("secrets/  logs/  backdoor*  readme.txt  .hidden_clues");
        break;
      case "date":
        print(new Date().toISOString() + " [NEON TIME]");
        break;
      case "hack":
      case "hack mainframe":
        print("Initiating hack sequence...");
        setTimeout(() => print("ACCESS DENIED: Try being more... creative."), 1000);
        break;
      case "cat readme.txt":
        print("README.TXT - CLASSIFIED");
        print("═══════════════════════════");
        print("Welcome to the underground network.");
        print("Find all secret keys to unlock the digital vault.");
        print("The path is hidden in plain sight...");
        break;
      case "nmap":
        print("Scanning localhost...");
        print("PORT    STATE    SERVICE");
        print("22/tcp  open     ssh");
        print("80/tcp  open     http");
        print("1337/tcp open    elite");
        print("9999/tcp filtered ???");
        break;
      case "go /hidden":
      case "open /hidden":
        nav("/hidden");
        break;
        
      default:
        if (cmd.startsWith("key ")) {
          if (cmd.slice(4).trim() === "CYB3R-PUNK-199X") {
            print("Key accepted. ACCESS LEVEL ∞ GRANTED.");
            print("Redirecting to vault...");
            playSound('success');
            setTimeout(() => nav("/vault"), 1500);
          } else {
            print("Invalid key. Try again.");
          }
        } else {
          print("Unknown command. Try 'help'.");
        }
    }
  }

  function onSubmit(e) {
    e.preventDefault();
    const cmd = input;
    setInput("");
    onCommand(cmd);
  }

  return (
    <section className="rounded-2xl border border-neon-green/40 bg-black/40 p-4 shadow-neon backdrop-blur">
      <div className="mb-4 text-neon-green">
        <Typewriter text=">> RETRO CYBER TERMINAL ONLINE" speed={12} />
      </div>

      <div className="min-h-[300px] whitespace-pre-wrap text-sm leading-relaxed">
        {lines.map((l, i) => (
          <div key={i}>{l}</div>
        ))}
      </div>

      <form onSubmit={onSubmit} className="mt-4 flex items-center gap-2">
        <span className="caret text-neon-green">$</span>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="w-full bg-transparent outline-none placeholder:text-neon-green/40"
          placeholder="type a command..."
          aria-label="terminal input"
        />
        <button className="btn-neon rounded px-3 py-1" type="submit">
          run
        </button>
      </form>

      <div className="mt-6 text-xs opacity-60">
        Hover the neon dot for a vibe:
        <span
          title="Nothing to see here... or is there?"
          className="ml-2 inline-block h-2 w-2 animate-pulse rounded-full"
          style={{ background: "#39FF14", boxShadow: "0 0 12px #39FF14" }}
        />
      </div>
    </section>
  );
}
