import React, { useRef } from 'react';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';
import { useTheme } from '../../context/ThemeContext';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const controls = useAnimation();

  // Base cord length
  const BASE_LENGTH = 60;

  // Calculate the exact length of the cord based on the handle's x and y distance from the origin
  const cordHeight = useTransform([x, y], ([latestX, latestY]) => {
    const dy = Math.max(BASE_LENGTH + latestY, 20); 
    return Math.sqrt(latestX * latestX + dy * dy);
  });

  // Calculate the rotation angle so the cord always points precisely at the handle
  const cordRotate = useTransform([x, y], ([latestX, latestY]) => {
    const dy = Math.max(BASE_LENGTH + latestY, 20);
    return (Math.atan2(-latestX, dy) * 180) / Math.PI; // -latestX because transform origin is top
  });

  const handleDragEnd = async (event, info) => {
    // If pulled down past the threshold (40px)
    if (info.offset.y > 40) {
      toggleTheme();
    }
    // Snap back to origin with a very springy pendulum feel
    controls.start({ 
      x: 0, 
      y: 0, 
      transition: { 
        type: 'spring', 
        stiffness: 400, 
        damping: 10,
        mass: 1 
      } 
    });
  };

  return (
    <div className="relative flex flex-col items-center w-12 h-full z-50">
      {/* Ceiling anchor */}
      <div className="absolute top-0 w-3 h-1 bg-zinc-800 dark:bg-zinc-900 rounded-b-full z-20" />
      
      {/* Container for cord and handle */}
      <div className="absolute top-0 flex flex-col items-center z-10 cursor-pointer" onClick={() => toggleTheme()}>
        {/* Dynamic Cord */}
        <motion.div 
          className="w-[1px] bg-zinc-300 dark:bg-zinc-700 origin-top pointer-events-none"
          style={{ 
            height: cordHeight,
            rotate: cordRotate
          }}
        />
        
        {/* Pill Handle */}
        <motion.div
          drag
          dragConstraints={{ top: 0, bottom: 100, left: -50, right: 50 }}
          dragElastic={0.4}
          onDragEnd={handleDragEnd}
          onTap={(e) => {
            e.stopPropagation(); // Prevent the parent onClick from firing
            toggleTheme();
          }}
          animate={controls}
          style={{ x, y }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="w-6 h-10 bg-zinc-950 dark:bg-zinc-50 rounded-full cursor-pointer flex items-center justify-center shadow-lg border border-zinc-800 dark:border-zinc-200 absolute touch-none z-30"
          // We position the handle so its top attaches to the bottom of the base cord length visually
          initial={{ top: BASE_LENGTH }}
        >
          {/* Inner circle or icon indicator */}
          <div className={`w-2 h-2 rounded-full transition-colors duration-300 ${theme === 'dark' ? 'bg-zinc-950' : 'bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]'}`} />
        </motion.div>
      </div>
    </div>
  );
}
