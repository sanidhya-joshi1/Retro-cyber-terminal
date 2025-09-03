import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function Vault() {
  return (
    <motion.section
      initial={{ y: 10, opacity: 0, scale: 0.95 }}
      animate={{ y: 0, opacity: 1, scale: 1 }}
      className="space-y-6"
    >
      {/* Main vault container */}
      <div 
        className="relative rounded-2xl border-2 p-8 text-center"
        style={{
          borderColor: '#00ff00',
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          boxShadow: '0 0 30px rgba(0, 255, 0, 0.3)',
        }}
      >
        {/* Success header */}
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.5, type: "spring" }}
          className="mb-6"
        >
          <div 
            className="glitch text-4xl font-bold mb-2"
            data-text="VAULT UNLOCKED"
            style={{ color: '#00ff00' }}
          >
            VAULT UNLOCKED
          </div>
          <div style={{ color: '#39ff14', fontSize: '18px' }}>
            ACCESS LEVEL ∞ CONFIRMED
          </div>
        </motion.div>

        {/* ASCII art vault */}
        <motion.pre 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="text-sm mb-6"
          style={{ color: '#00ff00', lineHeight: 1.2 }}
        >
{`    ╔═══════════════════╗
    ║  ████████████████  ║
    ║  █              █  ║
    ║  █  DIGITAL     █  ║
    ║  █   VAULT      █  ║
    ║  █   OPENED     █  ║
    ║  █              █  ║
    ║  ████████████████  ║
    ╚═══════════════════╝`}
        </motion.pre>

        {/* Rewards section */}
        <motion.div
          initial={{ x: -20, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
        >
          <div 
            className="border rounded-lg p-4"
            style={{ 
              borderColor: 'rgba(0, 255, 255, 0.5)',
              backgroundColor: 'rgba(0, 0, 0, 0.6)' 
            }}
          >
            <div style={{ color: '#00ffff', fontWeight: 'bold', marginBottom: '8px' }}>
              💎 CRYPTO REWARD
            </div>
            <div style={{ color: '#39ff14' }}>
              1337.42 NEON COINS
            </div>
          </div>

          <div 
            className="border rounded-lg p-4"
            style={{ 
              borderColor: 'rgba(255, 0, 255, 0.5)',
              backgroundColor: 'rgba(0, 0, 0, 0.6)' 
            }}
          >
            <div style={{ color: '#ff00ff', fontWeight: 'bold', marginBottom: '8px' }}>
              🏆 ACHIEVEMENT
            </div>
            <div style={{ color: '#39ff14' }}>
              "Code Breaker"
            </div>
          </div>
        </motion.div>

        {/* Congratulatory message */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 2 }}
          className="space-y-4"
        >
          <p style={{ color: '#39ff14', fontSize: '16px' }}>
            Congratulations, cyber operative! 
          </p>
          <p style={{ color: '#39ff14', fontSize: '14px' }}>
            You've successfully navigated the digital maze,
            <br />
            decoded hidden clues, and unlocked the vault.
          </p>
          <p style={{ color: '#00ffff', fontSize: '14px', fontStyle: 'italic' }}>
            The matrix bends to your will. Welcome to the underground.
          </p>
        </motion.div>

        {/* Back to terminal button */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="mt-8"
        >
          <Link 
            to="/" 
            className="btn-neon rounded-lg px-6 py-3 inline-block"
            style={{ 
              border: '2px solid #00ff00',
              color: '#00ff00',
              textDecoration: 'none',
              transition: 'all 0.3s ease'
            }}
          >
            Return to Terminal
          </Link>
        </motion.div>
      </div>

      {/* Credits */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="text-center text-xs opacity-60"
        style={{ color: '#39ff14' }}
      >
        Powered by retro nostalgia & neon dreams
      </motion.div>
    </motion.section>
  );
}
