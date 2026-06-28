import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useLocation } from 'react-router-dom';

export function Cursor() {
  const [position, setPosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => setIsVisible(false);

    const handleMouseEnterElement = () => setIsHovering(true);
    const handleMouseLeaveElement = () => setIsHovering(false);

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseleave', handleMouseLeave);

    // Dynamic search for interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .work-card.interactive, .service-row, .brand, .social-link');
    interactiveElements.forEach((el) => {
      el.addEventListener('mouseenter', handleMouseEnterElement);
      el.addEventListener('mouseleave', handleMouseLeaveElement);
    });

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseleave', handleMouseLeave);
      interactiveElements.forEach((el) => {
        el.removeEventListener('mouseenter', handleMouseEnterElement);
        el.removeEventListener('mouseleave', handleMouseLeaveElement);
      });
      setIsHovering(false); // Reset state on cleanup
    };
  }, [location]);

  if (!isVisible) return null;

  return (
    <motion.div
      className="fixed pointer-events-none z-[999999] w-7 h-7"
      animate={{
        x: position.x,
        y: position.y,
        scale: isHovering ? 1.4 : 1,
        rotate: isHovering ? 45 : 0,
      }}
      transition={{
        type: 'spring',
        damping: 20,
        stiffness: 250,
        mass: 0.5,
        rotate: { duration: 0.25 },
        scale: { duration: 0.25 }
      }}
      style={{ translateX: '-50%', translateY: '-50%' }}
    >
      <svg viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M2 8 L2 2 L8 2" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 2 L26 2 L26 8" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M2 20 L2 26 L8 26" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M20 26 L26 26 L26 20" stroke="#0066ff" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
        <circle cx="14" cy="14" r="1.5" fill="#0066ff"/>
      </svg>
    </motion.div>
  );
}

