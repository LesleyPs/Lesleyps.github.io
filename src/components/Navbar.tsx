import { Link, useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { ArrowLeft } from 'lucide-react';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [logoSrc, setLogoSrc] = useState("https://github.com/LesleyPs/old-protflio/blob/main/assets/favicons/apple-touch-icon.png?raw=true");
  const [logoErrorCount, setLogoErrorCount] = useState(0);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogoError = () => {
    if (logoErrorCount === 0) {
      setLogoSrc("https://raw.githubusercontent.com/LesleyPs/old-protflio/main/assets/favicons/apple-touch-icon.png");
      setLogoErrorCount(1);
    } else if (logoErrorCount === 1) {
      setLogoSrc("https://lesleyps.github.io/assets/favicons/apple-touch-icon.png");
      setLogoErrorCount(2);
    } else {
      setLogoErrorCount(3);
    }
  };

  return (
    <nav className={`fixed top-0 left-[16px] sm:left-[30px] lg:left-[60px] right-[16px] sm:right-[30px] lg:right-[60px] z-[999] flex items-center justify-between px-10 h-[72px] border-x border-blue transition-all duration-400 ${isScrolled ? 'bg-cream/60 backdrop-blur-[20px] saturate-180 shadow-[0_1px_40px_rgba(0,102,255,0.06)]' : 'bg-cream/15 backdrop-blur-0 saturate-100'}`}>
      <div className="absolute bottom-0 left-[-60px] right-[-60px] h-[1px] bg-blue pointer-events-none" />
      
      <div className="flex items-center gap-2">
        {location.pathname !== '/' && (
          <Link to="/" className="text-blue hover:opacity-65 transition-opacity">
            <ArrowLeft size={22} strokeWidth={2.5} />
          </Link>
        )}
        <Link to="/" className="flex items-center gap-2.5 text-blue hover:opacity-65 transition-opacity">
          <div className="w-11 h-11 flex items-center justify-center shrink-0 rounded-lg overflow-hidden select-none">
            {logoErrorCount < 3 ? (
              <img 
                src={logoSrc} 
                alt="Lesley Piercefield Avatar" 
                onError={handleLogoError}
                className="w-full h-full object-contain"
                referrerPolicy="no-referrer"
              />
            ) : (
              <span className="font-sans font-black text-[16px] text-blue tracking-tighter">
                L
              </span>
            )}
          </div>
          <span className="font-sans font-bold text-[17px] tracking-[-0.3px]">
            Lesley<span className="font-medium text-blue/70 ml-1 hidden sm:inline">Piercefield</span>
          </span>
        </Link>
      </div>

      <div className="flex items-center gap-2">
        <Link 
          to="/projects" 
          className="relative font-sans font-semibold text-[15px] tracking-[-0.5px] text-blue bg-transparent hover:bg-transparent focus:outline-none focus:bg-transparent active:bg-transparent px-[18px] py-[7px] rounded-[60px] border border-transparent hover:border-blue transition-all"
        >
          Gallery
          {location.pathname === '/projects' && (
            <div className="absolute left-1/2 bottom-1 w-5 h-[2px] bg-blue/80 -translate-x-1/2 rounded-full" />
          )}
        </Link>
        <Link 
          to="/about" 
          className="relative font-sans font-semibold text-[15px] tracking-[-0.5px] text-blue bg-transparent hover:bg-transparent focus:outline-none focus:bg-transparent active:bg-transparent px-[18px] py-[7px] rounded-[60px] border border-transparent hover:border-blue transition-all"
        >
          About
          {location.pathname === '/about' && (
            <div className="absolute left-1/2 bottom-1 w-5 h-[2px] bg-blue/80 -translate-x-1/2 rounded-full" />
          )}
        </Link>
        <a href="mailto:lpiercefield@icloud.com" className="font-sans font-semibold text-[15px] tracking-[-0.5px] bg-blue text-cream px-5 py-[7px] rounded-[60px] hover:opacity-85 hover:scale-[1.03] transition-all relative overflow-hidden group">
          Contact
          <div className="absolute top-0 left-[-100%] w-[55%] h-full pointer-events-none bg-linear-to-r from-transparent via-white/25 to-transparent -skew-x-18 group-hover:left-[160%] transition-all duration-500" />
        </a>
      </div>
    </nav>
  );
}
