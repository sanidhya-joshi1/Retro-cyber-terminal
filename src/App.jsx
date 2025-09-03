import { Routes, Route, Link } from "react-router-dom";
import { motion } from "framer-motion";
import Matrix from "./components/Matrix.jsx";
import Home from "./pages/Home.jsx";
import Hidden from "./pages/Hidden.jsx";
import Vault from "./pages/Vault.jsx";
import NotFound from "./pages/NotFound.jsx";

export default function App() {
  return (
    <div className="crt relative min-h-screen overflow-hidden">
      <Matrix />
      <motion.header
        className="pointer-events-none absolute inset-x-0 top-0 flex items-center justify-between p-4"
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        <h1 className="pointer-events-auto font-mono text-lg text-neon-green/90">
          <span className="glitch font-bold text-2xl" data-text="█▓▒░ Retro Cyber World ░▒▓█">
            █▓▒░ Retro Cyber World ░▒▓█
          </span>
        </h1>
        <nav className="pointer-events-auto space-x-4">
          <Link to="/" className="btn-neon rounded px-3 py-1">Home</Link>
          <Link to="/404" className="btn-neon rounded px-3 py-1">404 Test</Link>
        </nav>
      </motion.header>

      <main className="relative z-10 mx-auto max-w-4xl px-4 pt-24 pb-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/hidden" element={<Hidden />} />
          <Route path="/vault" element={<Vault />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>

      <footer className="pointer-events-none absolute inset-x-0 bottom-0 p-3 text-xs opacity-60">
        <div className="pointer-events-auto">
          © {new Date().getFullYear()} Retro Cyber — Green-on-Black forever.
        </div>
      </footer>
    </div>
  );
}
