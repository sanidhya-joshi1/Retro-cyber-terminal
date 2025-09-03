import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function Hidden() {
  console.log('Hidden component is rendering!');
  
  return (
    <motion.section
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      style={{
        padding: '24px',
        borderRadius: '16px',
        border: '2px solid #ff00ff',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        color: '#39ff14',
        fontFamily: 'JetBrains Mono, monospace',
        lineHeight: '1.6'
      }}
    >
      <h2 className="glitch" data-text="ACCESS LEVEL 1 GRANTED"
          style={{ 
            color: '#39ff14',
            fontSize: '24px',
            fontWeight: 'bold',
            marginBottom: '16px'
          }}>
        ACCESS LEVEL 1 GRANTED
      </h2>
      
      <p style={{ color: '#39ff14', marginBottom: '16px' }}>
        Decrypt successful. You have found the hidden chamber.
      </p>
      
      <div style={{
        padding: '16px',
        border: '1px solid rgba(57, 255, 20, 0.5)',
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderRadius: '8px',
        marginBottom: '16px'
      }}>
        <div style={{ color: '#39ff14', fontSize: '14px', marginBottom: '8px' }}>SECRET KEY // PART-1</div>
        <div style={{ color: '#39ff14', fontSize: '20px', fontWeight: 'bold' }}>CYB3R-</div>
      </div>

      <p style={{ color: '#39ff14', fontSize: '14px', marginBottom: '16px' }}>
        The other half is lost in the void… those who wander may stumble upon it.
        Try a <em>nonexistent</em> path to awaken the <strong>void</strong>.
      </p>

      <div style={{ color: '#39ff14', fontSize: '14px' }}>
        Example: <code style={{ 
          backgroundColor: 'rgba(0, 0, 0, 0.6)', 
          padding: '4px 8px', 
          borderRadius: '4px',
          color: '#39ff14'
        }}>/ghost</code> or{" "}
        <Link to="/404" style={{ 
          color: '#00ffff', 
          textDecoration: 'underline'
        }}>/404</Link>
      </div>
    </motion.section>
  );
}
