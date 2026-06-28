import { motion, useScroll, useTransform } from 'motion/react';
import { Reveal } from '../components/Reveal';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';

export default function DonkeyDonkeyCaseStudy() {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 1000], [0, -400]);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
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
      {/* HEADER */}
      <section className="w-full border-b border-blue p-[120px_30px_80px]">
        <Reveal>
          <div className="max-w-5xl">
            <Link to="/" className="flex items-center gap-2 font-mono text-[13px] tracking-[1px] text-blue mb-12 hover:gap-3 transition-all opacity-70 hover:opacity-100">
              <ArrowLeft size={14} /> BACK TO PORTFOLIO
            </Link>
            <h1 className="font-sans font-semibold text-[clamp(45px,8vw,110px)] leading-[0.95em] tracking-[-0.05em] text-blue mb-10">
              Donkey Donkey AI
            </h1>
            <div className="flex flex-wrap gap-x-16 gap-y-8">
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
      </section>

      {/* HERO IMAGE */}
      <section className="w-full border-b border-blue overflow-hidden bg-white">
        <Reveal delay={0.2}>
          <div className="aspect-video w-full relative">
            <img 
              src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Donkey-Donkey-AI-Hero@2x.webp?raw=true" 
              alt="Donkey Donkey AI Hero" 
              className="w-full h-full object-cover transition-all duration-1000 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 left-0 w-full bg-white border-t border-blue/25 py-8 overflow-hidden">
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
                        className="font-mono text-[12px] font-bold tracking-[1.5px] bg-cream text-blue border border-blue rounded-full px-6 py-2.5 whitespace-nowrap shadow-sm cursor-pointer inline-block"
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

      {/* INTRO STATEMENT */}
      <section className="w-full border-b border-blue p-[120px_30px]">
        <div className="max-w-6xl">
          <Reveal>
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-8 uppercase">The Vision</p>
            <h2 className="font-sans font-semibold text-[clamp(28px,4.5vw,56px)] leading-[1.15em] tracking-[-0.03em] text-blue max-w-6xl">
              Neighborhood intelligence meets conversational AI.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* PROMPT REPLY SNIPPETS CAROUSEL */}
      <section className="w-full border-b border-blue py-24 bg-blueprint overflow-hidden">
        <div className="px-[30px] mb-16">
          <Reveal>
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-4 uppercase">Prompt Reply Snippets</p>
            <h3 className="font-sans font-semibold text-[clamp(28px,4vw,48px)] text-blue tracking-[-0.03em] leading-tight">The Conversational Canvas</h3>
            <div className="mt-6 flex items-center gap-4 text-blue">
               <ArrowRight size={32} strokeWidth={3} className="text-blue" />
               <p className="font-mono text-[14px] uppercase tracking-[2px]">Concept: Evolving - Under Development</p>
            </div>
          </Reveal>
        </div>
        
         <div className="w-full mt-12 px-[30px]" id="carousel-container">
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
                    scale: hoveredIndex === null ? 1 : (hoveredIndex === i ? 1.1 : 0.95),
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
        
        <Reveal delay={0.4}>
          <div className="px-[30px] mt-[50px] max-w-3xl">
            <p className="font-mono text-[16px] leading-[1.8em] text-blue/70">
              **Continuous Conversational Loops**: Reducing cognitive load by mapping multi-source local insights and complex geographic queries into standardized, responsive modules. Every state transition is designed around progressive disclosure—serving rich data only when the user requests deeper detail.
            </p>
          </div>
        </Reveal>
      </section>

      {/* BIG STATEMENT 2: THE GUIDE */}
      <section className="w-full border-b border-blue p-[160px_30px]">
        <div className="max-w-6xl ml-auto text-right">
          <Reveal direction="left">
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-8 uppercase">Guided Search</p>
            <h2 className="font-sans font-semibold text-[clamp(32px,5vw,64px)] leading-[1.1em] tracking-[-0.04em] text-blue max-w-5xl ml-auto">
              Meet Donkey: Your AI companion who does the heavy lifting of finding hotels, activities, and essentials.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* VISION IMAGE PLATFORM */}
      <section className="w-full border-b border-blue overflow-hidden bg-white/40 p-6 sm:p-12 md:p-[80px_30px]">
        <Reveal>
          <div className="flex flex-col items-center max-w-7xl mx-auto">
            <div className="w-full overflow-hidden">
              <img 
                src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Donkey-Trending-US-Destiantions@2x.webp?raw=true" 
                alt="Donkey Trending US Destinations" 
                className="w-full h-auto -mt-[3px]"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </Reveal>
      </section>

      {/* NIGHT MODE PLATFORM */}
      <section className="w-full border-b border-blue overflow-hidden bg-white/40 p-6 sm:p-12 md:p-[80px_30px]">
        <Reveal>
          <div className="flex flex-col items-center gap-12 max-w-7xl mx-auto">
            <img 
              src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Donkey-Night-Mode.webp?raw=true" 
              alt="Donkey Night Mode" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
            <img 
              src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Donkey-Night-Mode-Feed.webp?raw=true" 
              alt="Donkey Night Mode Feed" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
        </Reveal>
      </section>

      {/* DESIGN RATIONALE: VIBE CODING */}
      <section className="w-full border-b border-blue p-[120px_30px] bg-blue/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
              <div className="lg:col-span-5">
                <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-8 uppercase">Design Methodology</p>
                <h3 className="font-sans font-semibold text-[clamp(28px,4vw,42px)] leading-[1.1em] tracking-[-0.03em] text-blue mb-8">
                  Interactive Prototyping
                </h3>
              </div>
              <div className="lg:col-span-7 flex flex-col justify-center">
                <p className="font-mono text-[18px] leading-[1.7em] text-blue/90 font-medium italic mb-8">
                  "Moving beyond static screens to high-fidelity, interactive sandbox prototypes that validate complex interactions and state-based responsive motion directly."
                </p>
                <p className="font-mono text-[16px] leading-[1.8em] text-blue/80">
                  By utilizing advanced in-browser prototyping frameworks, we bypassed traditional static layout stages. This allowed us to immediately stress-test fluid elastic physics, dynamic system-wide light/dark transitions, and adaptive context cards, leading to rapid usability refinement.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BIG STATEMENT 4: DYNAMIC UI */}
      <section className="w-full border-b border-blue p-[160px_30px]">
        <div className="max-w-6xl">
          <Reveal>
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-8 uppercase">Adaptive Interface</p>
            <h2 className="font-sans font-semibold text-[clamp(32px,5vw,64px)] leading-[1.1em] tracking-[-0.04em] text-blue max-w-5xl">
              A UI that lives with you: Featuring daytime, nighttime, and sync modes.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* IMAGE 4: DYNAMIC UI */}
      <section className="w-full border-b border-blue overflow-hidden bg-white p-10 sm:p-20">
        <Reveal>
            <div className="grid grid-cols-2 gap-8 max-w-3xl mx-auto">
              <div className="shadow-xl">
                <img 
                  src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Donkey-mobile-night.png?raw=true" 
                  alt="Donkey Mobile Night" 
                  className="w-full h-auto transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="shadow-xl">
                <img 
                  src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Donkey-mobile-trending-night.png?raw=true" 
                  alt="Donkey Mobile Trending Night" 
                  className="w-full h-auto transition-all duration-1000"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
        </Reveal>
      </section>

      {/* FOOTER NAV */}
      <section className="w-full p-[140px_30px] flex justify-center bg-cream">
        <Reveal>
          <Link to="/projects/tiki" className="group flex flex-col items-center gap-6">
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 group-hover:opacity-100 group-hover:tracking-[5px] transition-all duration-500">NEXT PROJECT</p>
            <h4 className="font-sans font-semibold text-[clamp(32px,5vw,64px)] tracking-[-0.04em] text-blue group-hover:scale-[1.02] transition-all duration-500">Tiki (Clicktripz)</h4>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}

