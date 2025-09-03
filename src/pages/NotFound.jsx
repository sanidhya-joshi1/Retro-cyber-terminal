import { useEffect, useState } from "react";
import Typewriter from "../components/Typewriter.jsx";
import { Link } from "react-router-dom";

export default function NotFound() {
  const [showKey, setShowKey] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setShowKey(true), 1400);
    return () => clearTimeout(id);
  }, []);

  return (
    <section className="space-y-4 rounded-2xl border border-neon-blue/40 bg-black/50 p-6 text-neon-green"
             style={{
               borderColor: 'rgba(0, 128, 255, 0.4)',
               backgroundColor: 'rgba(0, 0, 0, 0.5)',
               color: '#39ff14'
             }}>
      <div className="text-neon-blue" style={{ color: '#0080ff' }}>
        <Typewriter text="ERROR 404 — PATH NOT FOUND" speed={14} />
      </div>
      <p className="text-neon-green" style={{ color: '#39ff14' }}>The network forks into darkness. But mistakes sometimes reveal truth…</p>

      {showKey ? (
        <div className="rounded border border-neon-green/30 bg-black/40 p-4"
             style={{
               borderColor: 'rgba(57, 255, 20, 0.3)',
               backgroundColor: 'rgba(0, 0, 0, 0.4)'
             }}>
          <div className="text-sm text-neon-green" style={{ color: '#39ff14' }}>SECRET KEY // PART-2</div>
          <div className="mt-1 text-xl font-bold text-neon-green" style={{ color: '#39ff14' }}>PUNK-199X</div>
        </div>
      ) : (
        <div className="text-neon-green/70 text-sm" style={{ color: 'rgba(57, 255, 20, 0.7)' }}>listening…</div>
      )}

      <div className="pt-2 text-sm text-neon-green" style={{ color: '#39ff14' }}>
        Combine PART-1 and PART-2. Return <Link className="underline text-neon-cyan" style={{ color: '#00ffff' }} to="/">home</Link> to submit it.
      </div>
    </section>
  );
}
