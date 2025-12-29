import { motion } from "framer-motion";

export const AnimatedBackground = () => {
  return (
    <div className="bg-container" style={{ position: 'absolute', width: '100%', height: '100%', zIndex: -1, overflow: 'hidden', background: '#0a192f' }}>
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          style={{
            position: 'absolute',
            width: Math.random() * 15 + 5,
            height: Math.random() * 15 + 5,
            borderRadius: '50%',
            backgroundColor: '#64ffda',
            opacity: 0.3,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50, 0],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: Math.random() * 10 + 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      ))}
    </div>
  );
};