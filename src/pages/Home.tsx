import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Reveal } from '../components/Reveal';
import { BrandMarquee } from '../components/BrandMarquee';
import { ArrowUpRight, Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
// @ts-ignore
import markMamberAvatar from '../assets/images/mark_mamber_avatar_1779762406713.png';

const HOME_SLIDES = [
  {
    url: "https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Tiki-Tab-Unit-Gallery@2x.webp?raw=true",
    title: "Tiki Tab Unit Ecosystem",
    agency: "Clicktripz Ad Tech",
    zoom: true,
    zoomDirection: "in",
    effect: "blue-light-leak",
    isDarkBg: false
  },
  {
    url: "https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Donkey-Donkey-AI-Hero@2x.webp?raw=true",
    title: "Donkey AI Conversational Assistant",
    agency: "Donkey Donkey AI",
    zoom: true,
    zoomDirection: "out",
    effect: "shutter-flash",
    isDarkBg: false
  },
  {
    url: "https://github.com/LesleyPs/old-protflio/blob/main/Envoy-DPR-Tiki@2x.webp?raw=true",
    title: "Tiki Envoy Conversational UI",
    agency: "Tiki Ad Tech",
    zoom: true,
    zoomDirection: "pan-up",
    effect: "blue-light-leak",
    isDarkBg: false
  },
  {
    url: "https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Crackle-Xbox-TV-Screen.png?raw=true",
    title: "Sony Crackle TV Platform",
    agency: "Crackle Connected TV",
    zoom: false,
    zoomDirection: "none",
    effect: "tv-glitch",
    isDarkBg: true
  },
  {
    url: "https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Tiki-control-tower-metrics_2x.png?raw=true",
    title: "Control Tower Yield Analytics",
    agency: "Clicktripz Enterprise",
    zoom: true,
    zoomDirection: "pan-right",
    effect: "blue-slide-over",
    isDarkBg: false
  }
];

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0); // -1 for left, 1 for right
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPreloading, setIsPreloading] = useState(true);
  const [preloadPercent, setPreloadPercent] = useState(0);

  const isDark = HOME_SLIDES[currentSlide]?.isDarkBg || false;

  // Cinematic preloader increment logic
  useEffect(() => {
    let timer: NodeJS.Timeout;
    let count = 0;
    const interval = setInterval(() => {
      const randInc = Math.floor(Math.random() * 14) + 6;
      count = Math.min(100, count + randInc);
      setPreloadPercent(count);
      if (count >= 100) {
        clearInterval(interval);
        timer = setTimeout(() => {
          setIsPreloading(false);
        }, 500);
      }
    }, 60);

    return () => {
      clearInterval(interval);
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (!isPlaying || isPreloading) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % HOME_SLIDES.length);
    }, 3600);
    return () => clearInterval(interval);
  }, [isPlaying, isPreloading]);

  const handleNext = useCallback(() => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % HOME_SLIDES.length);
  }, []);

  const handlePrev = useCallback(() => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + HOME_SLIDES.length) % HOME_SLIDES.length);
  }, []);

  return (
    <div className="pt-[72px]">
      {/* Cinematic Studio Preloader */}
      <AnimatePresence>
        {isPreloading && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ 
              opacity: 0,
              filter: "blur(20px)",
              transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] }
            }}
            className="fixed inset-0 bg-zinc-950 z-50 flex flex-col justify-between p-8 select-none"
          >
            {/* Top Info Header */}
            <div className="flex justify-between font-mono text-[9px] text-blue/70 tracking-[2px] uppercase">
              <div>LP.DSGN // PORTFOLIO MEDIA ARCHIVE</div>
              <div className="flex items-center gap-1.5 animate-pulse">
                <span className="w-1.5 h-1.5 bg-blue rounded-full" />
                <span>REC_SYSTEM: LIVE</span>
              </div>
            </div>

            {/* Central HUD / Meter */}
            <div className="flex flex-col items-center justify-center gap-6">
              <div className="w-[180px] h-[1px] bg-blue/15 relative overflow-hidden">
                <motion.div 
                  initial={{ left: "-100%" }}
                  animate={{ left: "100%" }}
                  transition={{ repeat: Infinity, duration: 1.2, ease: "easeInOut" }}
                  className="absolute top-0 bottom-0 w-1/2 bg-gradient-to-r from-transparent via-blue to-transparent"
                />
              </div>

              <div className="flex flex-col items-center gap-1">
                <motion.span 
                  className="font-mono text-[70px] font-thin leading-none tracking-[-3px] text-blue select-none tabular-nums"
                  initial={{ scale: 0.95 }}
                  animate={{ scale: [0.95, 1, 0.95] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                >
                  {preloadPercent.toString().padStart(3, '0')}%
                </motion.span>
                <div className="font-mono text-[10px] text-blue/40 tracking-[4px] uppercase h-4 overflow-hidden relative w-[220px] text-center">
                  <AnimatePresence mode="popLayout">
                    <motion.div
                      key={preloadPercent < 40 ? "reading" : preloadPercent < 80 ? "compiling" : "rendering"}
                      initial={{ y: 15, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      exit={{ y: -15, opacity: 0 }}
                      transition={{ duration: 0.25 }}
                    >
                      {preloadPercent < 40 ? "READING ARCHIVE DATA" : preloadPercent < 80 ? "CACHING SCREEN REELS" : "READY FOR PLAYBACK"}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Graphical loading segment cells */}
              <div className="flex gap-[4px] mt-1">
                {Array.from({ length: 12 }).map((_, i) => {
                  const isActive = preloadPercent >= (i + 1) * (100 / 12);
                  return (
                    <div 
                      key={i} 
                      className={`w-[12px] h-[4px] border border-blue/20 transition-all duration-300 ${
                        isActive ? "bg-blue shadow-[0_0_8px_rgba(0,102,255,0.7)] border-blue" : "bg-transparent"
                      }`} 
                    />
                  );
                })}
              </div>
            </div>

            {/* Bottom watermark metadata info */}
            <div className="flex justify-between items-end">
              <div className="font-mono text-[8px] text-blue/30 leading-relaxed max-w-[200px] uppercase">
                CT-TV // SONY CRACKLE // DONKEY AI // CLICKTRIPZ // MYLIFE.COM // SYSTEMS ACTIVE
              </div>
              <div className="font-mono text-[8.5px] text-blue/70 tracking-[1px] uppercase text-right">
                REEL PLAYBACK SPEED: 3.6S<br />
                CODEC: WEB-COMPILATION-2026
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* HERO */}
      <section className="relative w-full aspect-[16/8.7] overflow-hidden border-b border-blue bg-zinc-950">
        {/* The Slideshow Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden mb-[-1px]">
          <AnimatePresence initial={true} custom={{ direction, slideIndex: currentSlide }} mode="popLayout">
            {!isPreloading && (
              <motion.img 
                key={currentSlide}
                src={HOME_SLIDES[currentSlide].url} 
                alt={HOME_SLIDES[currentSlide].title} 
                custom={{ direction, slideIndex: currentSlide }}
                variants={{
                  initial: ({ direction: dir, slideIndex: idx }) => {
                    const s = HOME_SLIDES[idx] || HOME_SLIDES[0];
                    let initialScale = 1.0;
                    let initialX = dir * 45;
                    let initialY = 0;
                    let initialRotation = 0;

                    if (s.zoom) {
                      if (s.zoomDirection === "in") {
                        initialScale = 1.0;
                      } else if (s.zoomDirection === "out") {
                        initialScale = 1.15;
                      } else if (s.zoomDirection === "pan-up") {
                        initialScale = 1.06;
                        initialY = 12;
                      } else if (s.zoomDirection === "pan-right") {
                        initialScale = 1.06;
                        initialX = dir * 45 - 15;
                      }
                    }

                    // On starting, let it do a gorgeous blur & fade-in transition
                    return {
                      opacity: 0,
                      scale: initialScale,
                      x: initialX,
                      y: initialY,
                      rotate: initialRotation,
                      filter: "blur(22px) brightness(1.2)"
                    };
                  },
                  animate: ({ slideIndex: idx }) => {
                    const s = HOME_SLIDES[idx] || HOME_SLIDES[0];
                    let animateScale = 1.0;
                    let animateX = 0;
                    let animateY = 0;
                    let animateRotation = 0;

                    if (s.zoom) {
                      if (s.zoomDirection === "in") {
                        animateScale = 1.08;
                      } else if (s.zoomDirection === "out") {
                        animateScale = 1.01;
                      } else if (s.zoomDirection === "pan-up") {
                        animateScale = 1.06;
                        animateY = -12;
                      } else if (s.zoomDirection === "pan-right") {
                        animateScale = 1.06;
                        animateX = 15;
                      }
                    }

                    return {
                      opacity: 1,
                      scale: animateScale,
                      x: animateX,
                      y: animateY,
                      rotate: animateRotation,
                      filter: "blur(0px) brightness(1)",
                      transition: {
                        x: { type: "spring", damping: 28, stiffness: 120 },
                        opacity: { duration: 0.85, ease: "easeInOut" },
                        scale: { duration: 3.6, ease: "linear" },
                        y: { duration: 3.6, ease: "linear" },
                        rotate: { duration: 3.6, ease: "linear" },
                        filter: { duration: 0.75, ease: "easeOut" }
                      }
                    };
                  },
                  exit: ({ direction: dir, slideIndex: idx }) => {
                    const s = HOME_SLIDES[idx] || HOME_SLIDES[0];
                    let exitScale = 1.0;
                    let exitX = -dir * 45;
                    let exitY = 0;

                    if (s.zoom) {
                      if (s.zoomDirection === "in") {
                        exitScale = 1.12;
                      } else if (s.zoomDirection === "out") {
                        exitScale = 0.95;
                      } else if (s.zoomDirection === "pan-up") {
                        exitScale = 1.06;
                        exitY = -24;
                      } else if (s.zoomDirection === "pan-right") {
                        exitScale = 1.06;
                        exitX = -dir * 45 + 24;
                      }
                    }

                    return {
                      opacity: 0,
                      scale: exitScale,
                      x: exitX,
                      y: exitY,
                      filter: "blur(18px) brightness(0.8)",
                      transition: {
                        x: { duration: 0.55, ease: "easeInOut" },
                        y: { duration: 0.55, ease: "easeInOut" },
                        opacity: { duration: 0.45, ease: "easeInOut" },
                        scale: { duration: 0.55, ease: "easeInOut" },
                        filter: { duration: 0.45, ease: "easeInOut" }
                      }
                    };
                  }
                }}
                initial="initial"
                animate="animate"
                exit="exit"
                className="absolute inset-0 w-full h-full object-cover select-none pointer-events-none"
                referrerPolicy="no-referrer"
              />
            )}
          </AnimatePresence>

          {/* Master Blue/Chromatic Dynamic Transition Overlays */}
          <AnimatePresence mode="popLayout">
            {!isPreloading && HOME_SLIDES[currentSlide].effect === "blue-wipe" && (
              <motion.div
                key={`wipe-${currentSlide}`}
                initial={{ x: "-110%", skewX: -15 }}
                animate={{ x: "210%", skewX: -15 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.9, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-x-0 top-0 bottom-0 w-[170%] h-full bg-gradient-to-r from-transparent via-blue/80 via-50% to-transparent z-10 pointer-events-none mix-blend-screen opacity-90"
              />
            )}
            {!isPreloading && HOME_SLIDES[currentSlide].effect === "shutter-flash" && (
              <motion.div
                key={`shutter-${currentSlide}`}
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.45, ease: "easeOut" }}
                className="absolute inset-0 bg-white z-10 pointer-events-none mix-blend-screen flex items-center justify-center opacity-95"
              >
                <div className="absolute inset-0 bg-gradient-radial from-white via-blue/10 to-transparent opacity-80" />
              </motion.div>
            )}
            {!isPreloading && HOME_SLIDES[currentSlide].effect === "blue-light-leak" && (
              <motion.div
                key={`leak-${currentSlide}`}
                initial={{ opacity: 0, x: "-30%" }}
                animate={{ 
                  opacity: [0, 0.85, 0.4, 0],
                  x: "40%"
                }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.6, ease: "easeInOut" }}
                className="absolute inset-y-0 -left-1/4 w-3/2 bg-gradient-to-r from-transparent via-blue/40 via-cyan-400/20 to-transparent z-10 pointer-events-none mix-blend-screen blur-3xl"
              />
            )}
            {!isPreloading && HOME_SLIDES[currentSlide].effect === "blue-slide-over" && (
              <motion.div
                key={`slideover-${currentSlide}`}
                initial={{ x: "-100%" }}
                animate={{ 
                  x: ["-100%", "0%", "0%", "100%"]
                }}
                exit={{ x: "100%" }}
                transition={{ 
                  duration: 2.2, 
                  times: [0, 0.25, 0.75, 1.0],
                  ease: [0.76, 0, 0.24, 1] 
                }}
                className="absolute inset-0 bg-black/60 backdrop-blur-[12px] z-30 pointer-events-none flex items-center justify-center overflow-hidden border-l border-r border-cyan-400/20"
              >
                {/* Embedded Glow scanner wave edge on leading side */}
                <div className="absolute right-0 top-0 bottom-0 w-[4px] bg-gradient-to-l from-cyan-400 via-blue to-transparent shadow-[0_0_24px_rgba(6,182,212,0.8),-5px_0_15px_rgba(0,102,255,0.4)] z-40" />
                
                {/* Embedded Glow scanner wave edge on tailing side */}
                <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-cyan-400/20 z-40" />

                {/* Internal scanline pattern overlay just within the sweeping pane */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,102,255,0)_50%,rgba(0,102,255,0.12)_50%)] bg-[size:100%_6px] mix-blend-overlay opacity-40 pointer-events-none" />

                {/* Subtly moving light reflection inside the sweeping pane */}
                <motion.div 
                  initial={{ opacity: 0, x: "-50%" }}
                  animate={{ opacity: [0, 0.3, 0], x: "150%" }}
                  transition={{ duration: 2.2, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12"
                />

                {/* HUD Camera Target Corners */}
                <div className="absolute top-6 left-6 w-3 h-3 border-t border-l border-cream/30" />
                <div className="absolute top-6 right-6 w-3 h-3 border-t border-r border-cream/30" />
                <div className="absolute bottom-6 left-6 w-3 h-3 border-b border-l border-cream/30" />
                <div className="absolute bottom-6 right-6 w-3 h-3 border-b border-r border-cream/30" />

                {/* Tiny HUD Coordinate watermarks */}
                <div className="absolute top-6 left-12 font-mono text-[7px] text-cream/40 tracking-[1px]">
                  [WIPE_SCAN.v2]
                </div>
                <div className="absolute bottom-6 right-12 font-mono text-[7px] text-cream/40 tracking-[1px] text-right">
                  SECTOR_INDEX0{currentSlide + 1} // AUTO_REEL
                </div>

                <div className="flex flex-col items-center gap-2.5 z-40">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95, filter: "blur(4px)" }}
                    animate={{ opacity: [0, 1, 1, 0], scale: [0.95, 1, 1, 0.95], filter: ["blur(4px)", "blur(0px)", "blur(0px)", "blur(4px)"] }}
                    transition={{ duration: 2.2, times: [0, 0.25, 0.75, 1.0], ease: "easeInOut" }}
                    className="flex flex-col items-center select-none"
                  >
                    <span className="font-mono text-[10px] tracking-[5px] text-cyan-300 mr-[-5px] font-semibold uppercase">
                      {HOME_SLIDES[currentSlide].agency}
                    </span>
                    <h4 className="font-sans font-semibold text-[clamp(24px,4.5vw,48px)] tracking-[-0.03em] text-cream leading-tight max-w-[650px] text-center mt-2 px-6">
                      {HOME_SLIDES[currentSlide].title}
                    </h4>
                    <div className="flex items-center gap-2 mt-4 font-mono text-[7.5px] text-cream/55 tracking-[3px] uppercase">
                      <span className="w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse" />
                      <span>LIVE REEL VIEW</span>
                    </div>
                  </motion.div>
                </div>
              </motion.div>
            )}
            {!isPreloading && HOME_SLIDES[currentSlide].effect === "chromatic-blur" && (
              <motion.div
                key={`chromatic-blur-${currentSlide}`}
                initial={{ opacity: 1, filter: "blur(0px) saturate(1.8)" }}
                animate={{ opacity: 0, filter: "blur(20px) saturate(1.0)" }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.55, ease: "easeOut" }}
                className="absolute inset-0 bg-gradient-to-tr from-blue/20 via-transparent to-cyan-500/20 z-10 pointer-events-none mix-blend-color"
              />
            )}
            {!isPreloading && HOME_SLIDES[currentSlide].effect === "dissolve-blur" && (
              <motion.div
                key={`blur-${currentSlide}`}
                initial={{ backdropFilter: "blur(20px)", opacity: 0 }}
                animate={{ backdropFilter: ["blur(20px)", "blur(10px)", "blur(0px)"], opacity: [0, 1, 0] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.8, times: [0, 0.35, 1], ease: "easeOut" }}
                className="absolute inset-0 bg-blue/15 z-10 pointer-events-none mix-blend-color-dodge"
              />
            )}
          </AnimatePresence>

          {/* Digital Scanlines overlay (For the TV and Tech asset feel) */}
          {!isPreloading && HOME_SLIDES[currentSlide].effect === "tv-glitch" && (
            <div className="absolute inset-0 z-10 pointer-events-none overflow-hidden bg-[linear-gradient(rgba(18,16,16,0)_50%,rgba(0,0,0,0.25)_50%)] bg-[size:100%_4px] opacity-15" />
          )}

          {/* TV glitch jitter noise overlay */}
          {!isPreloading && HOME_SLIDES[currentSlide].effect === "tv-glitch" && (
            <motion.div
              key={`glitch-${currentSlide}`}
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [1, 0.7, 0],
                y: [0, -3, 3, -1, 0, 2, -2, 0]
              }}
              transition={{ duration: 0.5 }}
              className="absolute inset-0 bg-blue/10 z-10 pointer-events-none mix-blend-color-dodge overflow-hidden"
            >
              <div className="absolute top-1/3 left-0 w-full h-[2px] bg-white/40 blur-[1px]" />
              <div className="absolute top-2/3 left-0 w-full h-[1px] bg-cyan-400/30 blur-[1px]" />
              <div className="absolute inset-0 bg-zinc-950/10 backdrop-blur-[2px]" />
            </motion.div>
          )}

          {/* Slide Playback Timeline Indicator Bar */}
          <div className="absolute bottom-0 left-0 w-full h-[3px] bg-blue/10 z-20 overflow-hidden pointer-events-none">
            <motion.div 
              key={currentSlide}
              initial={{ width: "0%" }}
              animate={isPlaying && !isPreloading ? { width: "100%" } : { width: "0%" }}
              transition={{ duration: 3.6, ease: "linear" }}
              className="h-full bg-blue shadow-[0_0_8px_rgba(0,102,255,0.6)]"
            />
          </div>
        </div>

        {/* Caption and Slide count overlay in the top right / bottom right */}
        <div className={`absolute top-6 right-6 z-20 flex items-center gap-3 backdrop-blur-md px-4 py-1.5 rounded-full border transition-all duration-500 ${isDark ? 'bg-zinc-950/80 border-white/10 text-cream' : 'bg-cream/80 border-blue/20 text-blue'}`}>
          <div className="flex items-center gap-1">
            <button 
              onClick={() => setIsPlaying(!isPlaying)}
              className={`w-6 h-6 rounded-full flex items-center justify-center hover:bg-current/10 active:scale-95 transition-all cursor-pointer ${isDark ? 'text-cream/70 hover:text-cream' : 'text-blue/70 hover:text-blue'}`}
              title={isPlaying ? "Pause autoplay" : "Play autoplay"}
            >
              {isPlaying ? <Pause size={10} className={isDark ? "fill-cream/10" : "fill-blue/10"} /> : <Play size={10} className={isDark ? "fill-cream/10" : "fill-blue/10"} />}
            </button>
            <div className={`h-4 w-px mx-1 ${isDark ? 'bg-white/10' : 'bg-blue/20'}`} />
            <button 
              onClick={handlePrev}
              className={`w-6 h-6 rounded-full flex items-center justify-center hover:bg-current/10 active:scale-95 transition-all cursor-pointer ${isDark ? 'text-cream/70 hover:text-cream' : 'text-blue/70 hover:text-blue'}`}
              aria-label="Previous slide"
            >
              <ChevronLeft size={12} />
            </button>
            <span className={`font-mono text-[10px] font-bold select-none mini:px-1 ${isDark ? 'text-cream' : 'text-blue'}`}>
              {currentSlide + 1}/{HOME_SLIDES.length}
            </span>
            <button 
              onClick={handleNext}
              className={`w-6 h-6 rounded-full flex items-center justify-center hover:bg-current/10 active:scale-95 transition-all cursor-pointer ${isDark ? 'text-cream/70 hover:text-cream' : 'text-blue/70 hover:text-blue'}`}
              aria-label="Next slide"
            >
              <ChevronRight size={12} />
            </button>
          </div>
          <div className={`h-4 w-px ${isDark ? 'bg-white/10' : 'bg-blue/20'}`} />
          <AnimatePresence mode="popLayout">
            <motion.div
              key={currentSlide}
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -5 }}
              transition={{ duration: 0.3 }}
              className={`font-mono text-[9px] uppercase tracking-[1px] max-w-[120px] md:max-w-[280px] truncate select-none ${isDark ? 'text-cream/90' : 'text-blue/90'}`}
            >
              {HOME_SLIDES[currentSlide].title}
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="hero-overlay select-none pointer-events-none z-20">
          <motion.div 
            className="flex flex-col gap-[3px] pointer-events-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
          >
            <div className={`flex font-mono font-normal text-[10px] uppercase tracking-[0.3px] transition-all duration-500 ${isDark ? 'text-cream' : 'text-blue'}`}>
              {"Lesley".split("").map((char, i) => (
                <motion.span 
                  key={i} 
                  className="inline-block" 
                  initial={{ filter: 'blur(12px)', opacity: 0, y: 8, scale: 0.9 }} 
                  animate={{ filter: 'blur(0)', opacity: 1, y: 0, scale: 1 }} 
                  transition={{ delay: 0.2 + i * 0.08, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
            <div className={`flex font-mono font-normal text-[10px] uppercase tracking-[0.3px] transition-all duration-500 ${isDark ? 'text-cream' : 'text-blue'}`}>
              {"Piercefield".split("").map((char, i) => (
                <motion.span 
                  key={i} 
                  className="inline-block" 
                  initial={{ filter: 'blur(12px)', opacity: 0, y: 8, scale: 0.9 }} 
                  animate={{ filter: 'blur(0)', opacity: 1, y: 0, scale: 1 }} 
                  transition={{ delay: 0.8 + i * 0.07, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
            <div className={`flex font-mono font-normal text-[10px] uppercase tracking-[0.3px] transition-all duration-500 ${isDark ? 'text-cream' : 'text-blue'}`}>
              {"20—26".split("").map((char, i) => (
                <motion.span 
                  key={i} 
                  className="inline-block" 
                  initial={{ filter: 'blur(12px)', opacity: 0, y: 8, scale: 0.9 }} 
                  animate={{ filter: 'blur(0)', opacity: 1, y: 0, scale: 1 }} 
                  transition={{ delay: 1.7 + i * 0.07, duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                >
                  {char}
                </motion.span>
              ))}
            </div>
          </motion.div>
          <div className="flex items-end justify-between w-full">
            <motion.div 
              className={`flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.3px] transition-all duration-500 pointer-events-auto ${isDark ? 'text-cream' : 'text-blue'}`}
              initial={{ opacity: 0, filter: 'blur(8px)', x: -10 }}
              animate={{ opacity: 1, filter: 'blur(0)', x: 0 }}
              transition={{ delay: 2.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className={`w-[7px] h-[7px] rounded-full shrink-0 animate-pulse transition-all duration-500 ${isDark ? 'bg-cyan-400 shadow-[0_0_8px_#22d3ee]' : 'bg-blue shadow-[0_0_8px_#0052cc]'}`} />
              <span>Made with Love</span>
            </motion.div>
            <motion.div
              className="flex pointer-events-auto"
              initial={{ opacity: 0, filter: 'blur(8px)', y: 10 }}
              animate={{ opacity: 1, filter: 'blur(0)', y: 0 }}
              transition={{ delay: 2.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            >
              <Link 
                to="/projects" 
                className={`flex items-center gap-2 backdrop-blur-[12px] saturate-180 rounded-[40px] px-[22px] py-[9px] font-sans font-semibold text-[14px] tracking-[-0.5px] hover:scale-[1.03] transition-all group overflow-hidden relative shadow-[0_4px_16px_rgba(0,102,255,0.06)] ${
                  isDark 
                    ? 'bg-blue text-cream border border-blue hover:bg-cream hover:text-blue hover:border-cream shadow-[0_4px_16px_rgba(0,102,255,0.2)]' 
                    : 'bg-cream/80 text-blue border border-blue/60 hover:bg-cream/95'
                }`}
              >
                <div className="absolute top-0 left-[-100%] w-[55%] h-full pointer-events-none bg-linear-to-r from-transparent via-white/25 to-transparent -skew-x-18 group-hover:left-[160%] transition-all duration-500" />
                View My Work
                <svg width="14" height="12" viewBox="0 0 14 12.74" fill="none" className="group-hover:translate-x-[3px] transition-transform">
                  <path d="M6.4424 11.5375L10.7427 7.2242H0V5.5155H10.7427L6.4424 1.2032 7.6496 0 14 6.3704 7.6496 12.7397 6.4424 11.5305V11.5375Z" fill="currentColor"/>
                </svg>
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* INTRO */}
      <section className="flex flex-col sm:flex-row w-full border-b border-blue">
        <div className="w-full sm:w-[305px] shrink-0 border-b sm:border-b-0 sm:border-r border-blue p-[30px] flex items-center justify-center h-[140px] sm:h-auto">
          <svg className="w-full sm:w-[220px] h-auto arrow-pulse" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M24 100 L180 100 M148 72 L180 100 L148 128" stroke="#0052cc" strokeWidth="8" strokeLinejoin="miter" strokeLinecap="butt"/>
          </svg>
        </div>
        <div className="flex-1 p-[36px_30px] flex flex-col gap-8 relative">
          <Reveal>
            <div className="flex justify-between px-2.5">
              <HeartIcon />
              <HeartIcon />
            </div>
            <h1 className="font-sans font-semibold text-[clamp(36px,5.8vw,74px)] leading-[1.18em] tracking-[clamp(-2px,-0.3vw,-4px)] text-blue my-8">
              Travel. Streaming. AI.<br />I design things<br />that simply work.
            </h1>
            <div className="flex justify-between px-2.5">
              <HeartIcon />
              <HeartIcon />
            </div>
          </Reveal>
        </div>
      </section>

      {/* GALLERY */}
      <section id="gallery" className="w-full border-b border-blue">
        <Reveal>
          <div className="flex items-end justify-between p-[28px_30px] border-b border-blue">
            <h3 className="font-sans font-semibold text-[clamp(20px,2.3vw,30px)] leading-none tracking-[-1.2px]">Gallery –<br />Highlights&nbsp;</h3>
            <Link to="/projects" className="flex items-center gap-2 font-sans font-semibold text-[18px] tracking-[-0.7px] hover:gap-[13px] transition-all">
              View Full Gallery
              <svg width="13" height="13" viewBox="0 0 13 13" fill="none"><path d="M10.892 11.12V3.593L1.493 13 0 11.507 9.407 2.108H1.88V0H13V11.12H10.892Z" fill="#0066ff"/></svg>
            </Link>
          </div>
        </Reveal>
        <div className="grid grid-cols-1 sm:grid-cols-2 p-2.5 gap-2.5 bg-cream">
          {[
            { 
              title: "Donkey Donkey AI", 
              subtitle: "AI build for your travels",
              company: "Concept",
              industry: "Travel AI",
              year: "2026",
              category: "Product Design / AI",
              description: "Neighborhood intelligence meets AI travel booking. Seamless visual discovery.",
              img: "https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Donkey-Donkey-AI-Gallery-Image.png?raw=true",
              link: "/projects/donkey"
            },
            { 
              title: "Tiki (Clicktripz)", 
              subtitle: "Staff UX/UI Product Designer",
              company: "Tiki",
              industry: "Ad Tech",
              year: "2017 — 2024",
              category: "Enterprise UX / AdTech",
              description: "Designing a unified product ecosystem for one of travel's leading ad tech platforms.",
              img: "https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Tiki-Tab-Unit-Gallery@2x.webp?raw=true",
              link: "/projects/tiki"
            },
            { 
              title: "Sony Crackle", 
              subtitle: "Streaming UX",
              company: "Sony",
              industry: "Entertainment",
              year: "2018",
              category: "OTT / Entertainment",
              description: "Redesigning the streaming experience for millions of users across multiple platforms.",
              img: "https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Crackle-Sign-in-Screen@2x.webp?raw=true",
              link: "/projects/crackle"
            },
            { 
              title: "MyLife.com", 
              subtitle: "Identity & Data UX",
              company: "MyLife",
              industry: "Identity & Data",
              year: "2015",
              category: "Product Design / Data",
              description: "Visualizing personal identity data and simplifying complex privacy controls.",
              img: "https://github.com/LesleyPs/old-protflio/blob/main/assets/Thumbnails/mylife-WSFY-thumb.webp?raw=true",
              link: "/projects/mylife"
            }
          ].map((project, i) => (
            <Reveal key={i} delay={(i % 2) * 0.15 + Math.floor(i / 2) * 0.05}>
              <Link to={project.link} className="group block border border-blue/10 hover:border-blue/30 transition-colors">
                  <div className="work-card interactive group">
                  <img src={project.img} alt={project.title} referrerPolicy="no-referrer" />
                  <div className="absolute inset-[14px] z-30 pointer-events-none opacity-0 group-hover:opacity-100 group-hover:inset-2.5 transition-all duration-400">
                    <div className="absolute top-0 left-0 w-[18px] h-[18px] border-t-2 border-l-2 border-white/80" />
                    <div className="absolute top-0 right-0 w-[18px] h-[18px] border-t-2 border-r-2 border-white/80" />
                    <div className="absolute bottom-0 right-0 w-[18px] h-[18px] border-b-2 border-r-2 border-white/80" />
                    <div className="absolute bottom-0 left-0 w-[18px] h-[18px] border-b-2 border-l-2 border-white/80" />
                  </div>
                  <div className="work-card-label">
                    <div className="flex flex-col items-center gap-5">
                      <div className="text-center">
                        <h4 className="font-sans font-semibold text-[clamp(20px,2.2vw,28px)] tracking-[-0.8px] text-blue leading-[1.2em] relative z-20">
                          {project.title}
                        </h4>
                        <div className="mt-4 pt-4 border-t border-blue/20">
                          <p className="font-sans font-medium text-[14px] text-blue/80 tracking-[-0.2px]">
                            {project.company} <span className="opacity-40 mx-1">/</span> {project.industry}
                          </p>
                        </div>
                      </div>
                      {project.link !== "/projects" && (
                        <div className="text-blue opacity-0 group-hover:opacity-100 transition-all duration-400 transform translate-y-2 group-hover:translate-y-0">
                          <ArrowUpRight size={32} strokeWidth={1.5} />
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="p-6 flex flex-col gap-4">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase tracking-[2px] opacity-60">{project.year}</span>
                      <span className="font-mono text-[10px] uppercase tracking-[2px] text-blue">{project.category}</span>
                    </div>
                    <h3 className="font-sans font-semibold text-[24px] tracking-[-0.8px]">{project.subtitle}</h3>
                    <p className="font-mono text-[16px] leading-[1.8em] text-blue/80 max-w-md">{project.description}</p>
                  </div>
                </div>
                </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CLIENTS */}
      <section className="flex flex-col lg:flex-row w-full border-b border-blue">
        <div className="w-full lg:w-[305px] shrink-0 border-b lg:border-b-0 lg:border-r border-blue p-[70px_30px_50px] flex flex-col gap-5">
          <Reveal direction="left">
            <h3 className="font-sans font-semibold text-[19px] tracking-[-0.7px] leading-[1.4em]">People I've<br />made things for:</h3>
            <p className="font-mono font-normal text-[16px] leading-[1.8em] text-blue/80 mt-5">Over the years I've had the privilege of working with great people and companies across travel tech, streaming, and data.</p>
          </Reveal>
        </div>
        <div className="flex-1 p-[70px_0_60px_36px] flex flex-col gap-11 overflow-hidden">
          <Reveal>
            <h2 className="font-sans font-semibold text-[clamp(20px,4vw,40px)] leading-[1.12em] tracking-[-1.6px] pr-20">Brands I've worked with</h2>
          </Reveal>
          <BrandMarquee />
        </div>
      </section>

      {/* SERVICES */}
      <section className="flex flex-col lg:flex-row w-full border-b border-blue">
        <div className="w-full lg:w-[305px] shrink-0 border-b lg:border-b-0 lg:border-r border-blue p-[70px_30px_40px]">
          <Reveal direction="left">
            <h3 className="font-sans font-semibold text-[19px] tracking-[-0.7px] leading-[1.4em]">Services:</h3>
          </Reveal>
        </div>
        <div className="flex-1 p-[70px_50px_70px_36px] grid grid-cols-1 sm:grid-cols-2 gap-x-10">
            {[
              "Product Design", "OTT / Streaming UX", "UX Strategy & Leadership", "AI / ML Interaction Design",
              "Design Systems", "Conversion Optimisation", "Ad Tech & Native Utility", "Multi-Platform Architecture"
            ].map((service, i) => {
              // Calculate order for top-to-bottom, column-by-column animation
              // Column 1 (even indices): 0, 2, 4, 6 -> order 0, 1, 2, 3
              const orderIndex = Math.floor(i / 2);
              
              return (
                <Reveal key={i} delay={i * 0.05}>
                  <motion.div 
                    className="service-row group relative"
                    initial="initial"
                    whileHover="active"
                  >
                    <h3 className="font-sans font-semibold text-[18px] tracking-[-0.6px] relative z-10 transition-all">
                      {service}
                    </h3>
                    <div className="shrink-0 w-7 h-7 flex items-center justify-center relative z-10">
                      <svg width="22" height="20" viewBox="0 0 22 20" className="overflow-visible">
                        <motion.path 
                          variants={{
                            initial: { pathLength: 0, opacity: 0, fill: "rgba(0, 82, 204, 0)" },
                            active: { 
                              pathLength: 1, 
                              opacity: 1, 
                              fill: "rgba(0, 82, 204, 1)",
                              transition: {
                                pathLength: { duration: 0.6, ease: "easeInOut" },
                                fill: { delay: 0.4, duration: 0.3 },
                                opacity: { duration: 0.15 }
                              }
                            }
                          }}
                          className="stroke-blue stroke-2" 
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M11 5 L 10.1 3.7 A 4.5 4.5 0 0 0 1.5 6 C 1.5 12 11 18.5 11 18.5 C 11 18.5 20.5 12 20.5 6 A 4.5 4.5 0 0 0 11.9 3.7 L 11 5 Z"
                        />
                      </svg>
                    </div>
                  </motion.div>
                </Reveal>
              );
            })}
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="bg-blue flex flex-col sm:flex-row w-full p-[110px_0] relative overflow-hidden">
        <div className="absolute inset-0 bg-radial-[circle_at_70%_50%] from-white/9 to-transparent pointer-events-none" />
        <div className="w-full sm:w-[305px] shrink-0 flex items-start justify-start sm:justify-end p-6 sm:p-[0_24px_0_0]">
          <div className="font-sans font-extrabold text-[100px] sm:text-[200px] leading-[0.65em] text-white/10 select-none">"</div>
        </div>
        <div className="flex-1 mx-6 sm:mr-[70px] sm:ml-0">
          <Reveal>
            <div className="bg-white/11 backdrop-blur-[12px] border border-white/22 rounded-2xl p-7 sm:p-[44px_48px] flex flex-col gap-[30px] hover:shadow-[0_10px_44px_rgba(255,255,255,0.13)] hover:-translate-y-0.5 transition-all duration-350">
              <blockquote className="font-sans font-semibold text-[clamp(18px,2.2vw,26px)] leading-[1.35em] tracking-[-0.8px] text-white">
                "Lesley consistently delivers high-quality work with a sharp eye for UX and design detail. She's eager to learn new tools and technologies and picks them up quickly. A great listener and thoughtful collaborator, Lesley brings both creativity and adaptability to every project."
              </blockquote>
              <div className="flex items-center gap-4">
                <img 
                  src={markMamberAvatar} 
                  alt="Mark Mamber" 
                  className="w-12 h-12 rounded-full overflow-hidden border-2 border-white/35 shrink-0 object-cover bg-white/20"
                  referrerPolicy="no-referrer"
                />
                <div>
                  <div className="font-sans font-semibold text-[17px] tracking-[-0.5px] text-white">Mark Mamber</div>
                  <div className="font-mono font-light text-[10.5px] tracking-[0.2px] text-white/70 mt-[2px]">Chief Executive Officer at Tiki · via LinkedIn</div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}

function HeartIcon() {
  return (
    <svg className="w-5 h-5 shrink-0 overflow-visible group cursor-default" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path 
        className="stroke-blue stroke-2 fill-none stroke-dasharray-[150] stroke-dashoffset-[150] hover:stroke-dashoffset-0 hover:fill-blue/10 transition-all duration-550 ease-[cubic-bezier(0.4,0,0.2,1)]" 
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      />
    </svg>
  );
}
