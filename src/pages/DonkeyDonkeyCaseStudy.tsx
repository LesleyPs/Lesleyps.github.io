import { motion, useScroll, useTransform } from 'motion/react';
import { Reveal } from '../components/Reveal';
import { ArrowLeft, ArrowRight, BookOpen, Info, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { DonkeyArticleOverlay } from '../components/DonkeyArticleOverlay';

export default function DonkeyDonkeyCaseStudy() {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 1000], [0, -400]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [isArticleOpen, setIsArticleOpen] = useState(false);
  
  const images = [
    "https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Donkey-conversational-greeting@2x.webp?raw=true",
    "https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Donkey-conversational-events@2x.webp?raw=true",
    "https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Donkey-conversational-city-insights@2x.webp?raw=true",
    "https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Donkey-conversational-re-engagment@2x.webp?raw=true",
    "https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Donkey-conversational-city-activties@2x.webp?raw=true",
    "https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Donkey-conversational-weather@2x.webp?raw=true",
    "https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Donkey-conversational-activites-2@2x.webp?raw=true",
    "https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Donkey-conversational-map@2x.webp?raw=true"
  ];

  return (
    <div className="pt-[72px] bg-cream min-h-screen">
      {/* 1. HEADER SECTION */}
      <section className="w-full border-b border-blue p-[120px_30px_80px]" id="donkey-header">
        <div className="max-w-6xl mx-auto w-full">
          <Reveal>
            <div className="max-w-5xl">
              <Link 
                to="/projects" 
                className="flex items-center gap-2 font-mono text-[13px] tracking-[1px] text-blue mb-12 hover:gap-3 transition-all opacity-70 hover:opacity-100"
                id="back-to-portfolio-btn"
              >
                <ArrowLeft size={14} /> BACK TO PORTFOLIO
              </Link>

              <h1 className="font-sans font-semibold text-[clamp(45px,8vw,110px)] leading-[0.95em] tracking-normal text-blue mb-10" id="case-study-title">
                Donkey Donkey AI
              </h1>

              {/* Metadata Grid */}
              <div className="flex flex-wrap gap-x-16 gap-y-8" id="case-metadata-grid">
                <div>
                  <p className="font-mono text-[13px] uppercase tracking-[2px] opacity-60 mb-3">Role</p>
                  <p className="font-sans font-medium text-[18px] text-blue">Product Designer</p>
                </div>
                <div>
                  <p className="font-mono text-[13px] uppercase tracking-[2px] opacity-60 mb-3">Platform Ecosystem</p>
                  <p className="font-sans font-medium text-[18px] text-blue">Web / Conversational AI</p>
                </div>
                <div>
                  <p className="font-mono text-[13px] uppercase tracking-[2px] opacity-60 mb-3">Focus</p>
                  <p className="font-sans font-medium text-[18px] text-blue">Concept to Product</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HERO IMAGE SECTION */}
      <section className="w-full border-b border-blue overflow-hidden bg-white" id="donkey-hero-section">
        <Reveal delay={0.2}>
          <div className="aspect-video w-full relative">
            <img 
              src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Donkey-Donkey-AI-Hero@2x.webp?raw=true" 
              alt="Donkey Donkey AI Hero" 
              className="w-full h-full object-cover transition-all duration-1000 ease-out"
              referrerPolicy="no-referrer"
              id="donkey-hero-img"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/30 backdrop-blur-md border-t border-blue/20 py-8 overflow-hidden" id="marquee-overlay">
              <div className="marquee-outer mask-linear-to-r from-transparent via-black via-10% via-90% to-transparent">
                <motion.div className="marquee-inner" style={{ x }}>
                  {[
                    "Prompt Design", "Intent Mapping", "Context Flows", "Conversational Flow",
                    "Mental Models", "Graceful Failures", "Dynamic Canvases", "Feedback Loops",
                    "Prompt Design", "Intent Mapping", "Context Flows", "Conversational Flow",
                    "Mental Models", "Graceful Failures", "Dynamic Canvases", "Feedback Loops"
                  ].map((p, i) => (
                    <div key={i} className="flex items-center px-8 shrink-0">
                      <motion.span 
                        whileHover={{ scale: 1.05 }}
                        className="font-mono text-[12px] font-bold tracking-[1.5px] bg-cream text-blue border border-blue rounded-full px-6 py-2.5 whitespace-nowrap shadow-sm cursor-pointer inline-block uppercase"
                      >
                        {p}
                      </motion.span>
                    </div>
                  ))}
                </motion.div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* 2. OVERVIEW & KEY OUTCOMES */}
      <section className="w-full border-b border-blue p-[100px_30px]" id="outcomes-section">
        <div className="max-w-6xl mx-auto w-full">
          <Reveal>
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-6 uppercase">Key Outcomes & Mission</p>
            <h2 className="font-sans font-semibold text-[clamp(30px,4.5vw,56px)] leading-[1.12em] tracking-normal text-blue max-w-5xl mb-12">
              Neighborhood intelligence meets conversational AI for modern travelers.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <p className="font-mono text-[12px] uppercase tracking-[2px] font-bold text-blue">01 // Conversational Discovery</p>
                <p className="font-sans text-[16px] leading-[1.6em] text-blue font-medium">
                  Replaced static filters with progressive AI recommendations embedded naturally in dialogue.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-mono text-[12px] uppercase tracking-[2px] font-bold text-blue">02 // Dynamic Response Canvas</p>
                <p className="font-sans text-[16px] leading-[1.6em] text-blue font-medium">
                  Multi-modal response cards surfacing events, weather forecasts, maps, and hotel rates inline.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-mono text-[12px] uppercase tracking-[2px] font-bold text-blue">03 // Adaptive Day & Night UI</p>
                <p className="font-sans text-[16px] leading-[1.6em] text-blue font-medium">
                  A high-contrast visual architecture designed for low-light mobile navigation and trip planning.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. SECTION 01: THE VISION */}
      <section className="w-full border-b border-blue p-[100px_30px] bg-cream" id="section-01-vision">
        <div className="max-w-6xl mx-auto w-full">
          <Reveal>
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-6 uppercase">01. The Vision</p>
            <h2 className="font-sans font-semibold text-[clamp(30px,4.5vw,56px)] leading-[1.12em] tracking-normal text-blue w-[880px] max-w-full mb-8">
              Turning trip planning from a chore into a fluent conversation.
            </h2>
            <div className="font-sans text-[17px] sm:text-[18px] leading-[1.7em] text-blue max-w-4xl space-y-6 font-medium mb-10">
              <p>
                Traditional travel planning requires opening dozen of browser tabs across maps, review portals, and booking engines. Donkey Donkey AI unifies local neighborhood intelligence into a conversational companion that listens, understands context, and serves instant visual recommendations.
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="https://DonkeyDonkeyAI.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 font-mono text-[13px] font-bold tracking-[1.5px] uppercase bg-blue text-cream hover:bg-blue/90 border border-blue px-8 py-4 shadow-sm transition-all group"
              >
                View Live Build <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
              </a>
              <button 
                onClick={() => setIsArticleOpen(true)}
                className="inline-flex items-center gap-2.5 font-mono text-[13px] font-bold tracking-[1.5px] uppercase bg-cream text-blue hover:bg-blue/10 border border-blue px-7 py-4 shadow-sm transition-all group cursor-pointer"
              >
                <BookOpen size={16} /> Inside the Build <Sparkles size={14} className="text-amber-500 group-hover:scale-125 transition-transform" />
              </button>
            </div>

            {/* Codebase Testing Status Note */}
            <div className="mt-8 flex items-start gap-3 p-4 sm:p-5 bg-blue/5 border border-blue/20 max-w-2xl" id="build-status-note">
              <Info size={18} className="text-blue shrink-0 mt-0.5" />
              <div className="font-sans text-[14px] leading-[1.6em] text-blue font-medium">
                <span className="font-mono text-[11px] font-bold uppercase tracking-[1.5px] text-blue/70 block mb-0.5">Please Note</span>
                We are actively undergoing codebase changes and testing, so some features might be temporarily unavailable.
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. SECTION 02: THE CONVERSATIONAL CANVAS */}
      <section className="w-full border-b border-blue p-[100px_30px] bg-cream text-blue" id="section-02-canvas-header">
        <div className="max-w-6xl mx-auto w-full">
          <Reveal>
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-6 uppercase">02. The Conversational Canvas</p>
            <h2 className="font-sans font-semibold text-[clamp(30px,4.5vw,56px)] leading-[1.12em] tracking-normal text-blue w-[880px] max-w-full mb-8">
              Progressive AI response cards tailored to traveler intent.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans text-[16px] leading-[1.65em] text-blue font-medium">
              <div className="space-y-2">
                <p className="font-mono text-[12px] uppercase tracking-[2px] font-bold text-blue">The Search Fatigue</p>
                <p>
                  Static travel filters force users into rigid search boxes, presenting hundreds of uncurated pins that create choice paralysis.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-mono text-[12px] uppercase tracking-[2px] font-bold text-blue">The Conversational Canvas</p>
                <p>
                  Progressive response cards surface contextual photos, local secrets, event times, and map pins inline directly as dialogue unfolds.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 02: PROMPT REPLY SNIPPETS CAROUSEL */}
      <section className="w-full border-b border-blue py-20 bg-blueprint overflow-hidden" id="canvas-snippets-section">
        <div className="w-full max-w-7xl mx-auto px-6 sm:px-12">
          <div className="mb-12">
            <Reveal>
              <div className="flex items-center gap-4 text-blue">
                <ArrowRight size={28} strokeWidth={2.5} className="text-blue" />
                <p className="font-mono text-[13px] uppercase tracking-[2px] font-bold">Dynamic Prompt Response Snippets</p>
              </div>
            </Reveal>
          </div>
          
          <div className="w-full" id="carousel-container">
            <Reveal>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full justify-items-center items-center">
                {images.map((imgSrc, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, scale: 0.01 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    onHoverStart={() => setHoveredIndex(i)}
                    onHoverEnd={() => setHoveredIndex(null)}
                    animate={{
                      scale: hoveredIndex === null ? 1 : (hoveredIndex === i ? 1.05 : 0.96),
                    }}
                    transition={{
                      type: "spring",
                      stiffness: hoveredIndex === null ? 60 : 300,
                      damping: hoveredIndex === null ? 15 : 20,
                      delay: hoveredIndex === null ? (i * 0.1) : 0
                    }}
                    className="w-full relative z-0"
                  >
                    <img
                      src={imgSrc}
                      alt={`Conversational Canvas ${i + 1}`}
                      className="w-full h-auto object-contain"
                      referrerPolicy="no-referrer"
                    />
                  </motion.div>
                ))}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. SECTION 03: GUIDED TRAVEL DISCOVERY */}
      <section className="w-full border-b border-blue p-[100px_30px] bg-cream text-blue" id="section-03-discovery-header">
        <div className="max-w-6xl mx-auto w-full">
          <Reveal>
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-6 uppercase">03. Guided Travel Discovery</p>
            <h2 className="font-sans font-semibold text-[clamp(30px,4.5vw,56px)] leading-[1.12em] tracking-normal text-blue w-[880px] max-w-full mb-8">
              Meet Donkey: Your AI companion for destinations, activities, and essentials.
            </h2>
            <p className="font-sans text-[17px] sm:text-[18px] leading-[1.7em] text-blue max-w-4xl font-medium">
              From trending US hotspots to hidden local eateries, Donkey synthesizes complex destination data into bite-sized, actionable recommendations.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SECTION 03: VISION IMAGE PLATFORM */}
      <section className="w-full border-b border-blue overflow-hidden bg-white/40 p-6 sm:p-12 md:p-[80px_30px]" id="section-03-image">
        <div className="w-full max-w-7xl mx-auto">
          <Reveal>
            <div className="w-full overflow-hidden border border-blue/10">
              <img 
                src="/images/Donkey-Trending-US-Destinations-cropped.webp" 
                alt="Donkey Trending US Destinations" 
                className="w-full h-auto block"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. SECTION 04: ADAPTIVE DAY & NIGHT UI */}
      <section className="w-full border-b border-blue p-[100px_30px] bg-cream text-blue" id="section-04-night-header">
        <div className="max-w-6xl mx-auto w-full">
          <Reveal>
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-6 uppercase">04. Adaptive UI Architecture</p>
            <h2 className="font-sans font-semibold text-[clamp(30px,4.5vw,56px)] leading-[1.12em] tracking-normal text-blue w-[880px] max-w-full mb-8">
              A UI that lives with you across day, night, and sync modes.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans text-[16px] leading-[1.65em] text-blue font-medium">
              <div className="space-y-2">
                <p className="font-mono text-[12px] uppercase tracking-[2px] font-bold text-blue">Night Mode Ergonomics</p>
                <p>
                  Optimized high-contrast dark tokens for travelers exploring nightlife or planning late at night without eye strain.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-mono text-[12px] uppercase tracking-[2px] font-bold text-blue">Mobile Sync</p>
                <p>
                  Adaptive feeds automatically calibrate card elevation and tap targets for smooth one-handed phone browsing on the go.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 04: NIGHT MODE SHOWCASE */}
      <section className="w-full border-b border-blue overflow-hidden bg-white/40 p-6 sm:p-12 md:p-[80px_30px]" id="section-04-image">
        <div className="w-full max-w-7xl mx-auto space-y-12">
          <Reveal>
            <div className="w-full overflow-hidden border border-blue/10">
              <img 
                src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Donkey-Night-Mode.webp?raw=true" 
                alt="Donkey Night Mode" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="w-full overflow-hidden border border-blue/10">
              <img 
                src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Donkey-Night-Mode-Feed.webp?raw=true" 
                alt="Donkey Night Mode Feed" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="shadow-xl">
                <img 
                  src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Donkey-mobile-night.png?raw=true" 
                  alt="Donkey Mobile Night" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="shadow-xl">
                <img 
                  src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Donkey-mobile-trending-night.png?raw=true" 
                  alt="Donkey Mobile Trending Night" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. SECTION 05: FEATURED BUILD BREAKDOWN */}
      <section className="w-full border-b border-blue p-[100px_30px] bg-blue/5" id="section-05-article-card">
        <div className="max-w-6xl mx-auto w-full">
          <Reveal>
            <div className="bg-cream border border-blue p-8 sm:p-12 md:p-16 relative overflow-hidden">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 font-mono text-[11px] font-bold uppercase tracking-[2px] bg-blue text-cream px-3.5 py-1.5 mb-6">
                    <BookOpen size={13} /> Featured Build Breakdown
                  </div>
                  <h3 className="font-sans font-bold text-[clamp(28px,4.2vw,42px)] leading-[1.12em] tracking-normal text-blue mb-4">
                    Shipping an MVP at AI Speed
                  </h3>
                  <p className="font-mono text-[15px] leading-[1.7em] text-blue mb-8 max-w-2xl font-medium">
                    How Prompt-Driven Prototyping Bridged Design, Code, and Engineering for Donkey Donkey AI
                  </p>
                  <div className="flex flex-wrap items-center gap-6">
                    <button
                      onClick={() => setIsArticleOpen(true)}
                      className="inline-flex items-center gap-3 font-mono text-[13px] font-bold tracking-[1.5px] uppercase bg-blue text-cream hover:bg-blue/90 border border-blue px-8 py-4 transition-all group cursor-pointer"
                    >
                      Read Full Article <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                    </button>
                    <span className="font-mono text-[12px] text-blue/60 uppercase tracking-[1px]">
                      5 MIN READ · BY LESLEY PIERCEFIELD
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-5 flex justify-center">
                  <div 
                    onClick={() => setIsArticleOpen(true)}
                    className="w-full max-w-sm aspect-[4/3] bg-blue/10 border border-blue/30 overflow-hidden cursor-pointer group relative"
                  >
                    <img 
                      src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Donkey-Donkey-AI-thumbnail.webp?raw=true" 
                      alt="Shipping an MVP at AI Speed Thumbnail" 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER NAV */}
      <section className="w-full p-[140px_30px] flex justify-center bg-cream" id="next-project-footer">
        <div className="max-w-6xl mx-auto w-full flex justify-center">
          <Reveal>
            <Link to="/projects/control-tower" className="group flex flex-col items-center gap-6" id="next-project-link">
              <p className="font-mono text-[13px] tracking-[3px] opacity-60 group-hover:opacity-100 group-hover:tracking-[5px] transition-all duration-500">NEXT PROJECT</p>
              <h4 className="font-sans font-semibold text-[clamp(32px,5vw,64px)] tracking-normal text-blue group-hover:scale-[1.02] transition-all duration-500">Control Tower</h4>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* MEDIUM-STYLE UX ARTICLE OVERLAY */}
      <DonkeyArticleOverlay isOpen={isArticleOpen} onClose={() => setIsArticleOpen(false)} />
    </div>
  );
}

