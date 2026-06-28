import { useRef, ReactNode } from 'react';
import { motion, useInView } from 'motion/react';

interface RevealProps {
  children: ReactNode;
  direction?: 'up' | 'left';
  delay?: number;
  key?: string | number;
}

export function Reveal({ children, direction = 'up', delay = 0 }: RevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <motion.div
      ref={ref}
      className="will-change-[opacity,transform]"
      initial={{ 
        opacity: 0, 
        y: direction === 'up' ? 30 : 0, 
        x: direction === 'left' ? -30 : 0,
        scale: 0.98
      }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0, 
        x: 0,
        scale: 1
      } : {}}
      transition={{ 
        duration: 0.9, 
        delay, 
        ease: [0.16, 1, 0.3, 1] // Custom quintic ease-out
      }}
    >
      {children}
    </motion.div>
  );
}
