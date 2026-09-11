import { motion, useScroll, useTransform } from 'motion/react';
import { Reveal } from '../components/Reveal';
import { ArrowLeft, ArrowRight, BookOpen, Sparkles } from 'lucide-react';
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
                className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-blue mb-10 hover:gap-3 transition-all opacity-70 hover:opacity-100 uppercase"
                id="back-to-portfolio-btn"
              >
                <ArrowLeft size={14} /> BACK TO PORTFOLIO
              </Link>

              <h1 className="font-sans font-semibold text-[clamp(45px,8vw,110px)] leading-[0.95em] tracking-normal text-blue mb-10" id="case-study-title">
                Donkey Donkey AI
              </h1>

              {/* Metadata Grid */}
              <div className="flex flex-wrap gap-x-12 sm:gap-x-16 gap-y-6 sm:gap-y-8" id="case-metadata-grid">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest opacity-60 mb-2">Role</p>
                  <p className="font-sans font-medium text-lg text-blue">Product Designer</p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest opacity-60 mb-2">Platform Ecosystem</p>
                  <p className="font-sans font-medium text-lg text-blue">Web / Conversational AI</p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest opacity-60 mb-2">Focus</p>
                  <p className="font-sans font-medium text-lg text-blue">Concept to Product</p>
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

      {/* 2. EXECUTIVE SUMMARY & MISSION */}
      <section className="w-full border-b border-blue py-12 sm:py-16 px-6 sm:px-12 bg-cream" id="overview-section">
        <div className="max-w-6xl mx-auto w-full">
          <Reveal>
            <p className="font-mono text-xs tracking-widest opacity-60 mb-2 uppercase">Executive Summary</p>
            <h2 className="font-sans font-semibold text-3xl sm:text-4xl text-blue tracking-tight leading-tight max-w-4xl mb-4">
              Planning a trip shouldn't take twenty open tabs.
            </h2>
            <p className="font-sans text-base leading-relaxed text-blue/90 max-w-3xl mb-8">
              Donkey Donkey AI combines conversational trip planning, curated hotel stays, and local insights into a single visual feed.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <a 
                href="https://DonkeyDonkeyAI.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-3 font-mono text-xs font-bold tracking-wider uppercase bg-blue text-cream hover:bg-blue/90 border border-blue px-6 py-3 shadow-sm transition-all group"
              >
                View Live Build <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
              </a>
              <button 
                onClick={() => setIsArticleOpen(true)}
                className="inline-flex items-center gap-2 font-mono text-xs font-bold tracking-wider uppercase bg-cream text-blue hover:bg-blue/10 border border-blue px-5 py-3 shadow-sm transition-all group cursor-pointer"
              >
                <BookOpen size={14} /> Inside the Build <Sparkles size={13} className="text-amber-500 group-hover:scale-125 transition-transform" />
              </button>
            </div>

            {/* Anchored note at bottom of overview section */}
            <div className="mt-12 sm:mt-16 pt-6 border-t border-blue/15">
              <p className="font-sans text-sm text-blue/70 leading-relaxed">
                Due to codebase updates, some features on the live build may be temporarily unavailable.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. SECTION 01: THE CONVERSATIONAL CANVAS */}
      <section className="w-full border-b border-blue py-12 sm:py-16 px-6 sm:px-12 bg-blueprint" id="section-01-canvas">
        <div className="max-w-6xl mx-auto w-full">
          <Reveal>
            <div className="max-w-3xl mb-8">
              <p className="font-mono text-xs tracking-widest opacity-60 mb-2 uppercase">01 // Conversational Canvas</p>
              <h2 className="font-sans font-semibold text-2xl sm:text-3xl text-blue tracking-tight leading-snug mb-3">
                Smart cards that match traveler intent.
              </h2>
              <p className="font-sans text-base leading-relaxed text-blue/90">
                Generates inline visual cards—pairing live weather, hotel rates, and local highlights directly in the chat feed.
              </p>
            </div>
          </Reveal>

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
                      scale: hoveredIndex === null ? 1 : (hoveredIndex === i ? 1.04 : 0.97),
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

      {/* 4. SECTION 02: GUIDED TRAVEL DISCOVERY & STAYS */}
      <section className="w-full border-b border-blue py-12 sm:py-16 px-6 sm:px-12 bg-white/50" id="section-02-discovery">
        <div className="max-w-6xl mx-auto w-full space-y-10">
          <Reveal>
            <div className="max-w-3xl">
              <p className="font-mono text-xs tracking-widest opacity-60 mb-2 uppercase">02 // Hotel Insights & Stays</p>
              <h2 className="font-sans font-semibold text-2xl sm:text-3xl text-blue tracking-tight leading-snug mb-3">
                Instant hotel rates and property insights.
              </h2>
              <p className="font-sans text-base leading-relaxed text-blue/90">
                Surfaces destination trends and verified sentiment inline, saving travelers from digging through external review sites.
              </p>
            </div>
          </Reveal>

          {/* Trending US Destinations Platform */}
          <Reveal>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs font-bold uppercase tracking-wider bg-blue text-cream px-3 py-1">
                  Destination Discovery
                </span>
                <span className="font-mono text-xs text-blue/70">Macro Trending Destinations Canvas</span>
              </div>
              <div className="w-full overflow-hidden border border-blue/10">
                <img 
                  src="/images/Donkey-Trending-US-Destinations-cropped.webp" 
                  alt="Donkey Trending US Destinations" 
                  className="w-full h-auto block"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </Reveal>

          {/* Hotel Search & Insights Prompt Flow */}
          <Reveal>
            <div className="border-t border-blue/20 pt-8 space-y-6">
              <div>
                <span className="font-mono text-xs font-bold uppercase tracking-wider bg-blue text-cream px-3 py-1 inline-block mb-2">
                  Prompt Flow In Action
                </span>
                <h3 className="font-sans font-semibold text-lg sm:text-xl leading-snug tracking-tight text-blue">
                  From Natural Query to Property Details
                </h3>
              </div>

              {/* Step 1: Hotel Search */}
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue">
                    01 // Conversational Query & Curated Cards
                  </span>
                  <span className="font-mono text-xs text-blue/60 uppercase">Step 1</span>
                </div>
                <div className="w-full overflow-hidden border border-blue/10">
                  <img 
                    src="/images/Donkey_Donkey_AI_Hotel_Search.webp" 
                    alt="Donkey Donkey AI Hotel Search - Prompt Flow Step 1" 
                    className="w-full h-auto block"
                    onError={(e) => {
                      e.currentTarget.src = "https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Donkey_Donkey_AI_Hotel_Search.webp?raw=true";
                    }}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>

              {/* Step 2: Hotel Insight */}
              <div className="space-y-2 pt-2">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-blue">
                    02 // Inline Traveler Sentiment & Amenities
                  </span>
                  <span className="font-mono text-xs text-blue/60 uppercase">Step 2</span>
                </div>
                <div className="w-full overflow-hidden border border-blue/10">
                  <img 
                    src="/images/Donkey_Donkey_AI_Hotel_Insight.webp" 
                    alt="Donkey Donkey AI Hotel Insight - Prompt Flow Step 2" 
                    className="w-full h-auto block"
                    onError={(e) => {
                      e.currentTarget.src = "https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Donkey_Donkey_AI_Hotel_Insight.webp?raw=true";
                    }}
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. SECTION 03: ADAPTIVE DAY & NIGHT UI */}
      <section className="w-full border-b border-blue py-12 sm:py-16 px-6 sm:px-12 bg-cream" id="section-03-night">
        <div className="max-w-6xl mx-auto w-full space-y-8">
          <Reveal>
            <div className="max-w-3xl">
              <p className="font-mono text-xs tracking-widest opacity-60 mb-2 uppercase">03 // Adaptive Day & Night UI</p>
              <h2 className="font-sans font-semibold text-2xl sm:text-3xl text-blue tracking-tight leading-snug mb-3">
                Comfortable viewing day or night.
              </h2>
              <p className="font-sans text-base leading-relaxed text-blue/90">
                Built with clean dark tokens and thumb-friendly controls for comfortable one-handed mobile use.
              </p>
            </div>
          </Reveal>

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
          
          <Reveal delay={0.1}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto pt-4">
              <div className="shadow-lg border border-blue/10">
                <img 
                  src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Donkey-mobile-night.png?raw=true" 
                  alt="Donkey Mobile Night" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="shadow-lg border border-blue/10">
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
                  <div className="inline-flex items-center gap-2 font-mono text-xs font-bold uppercase tracking-wider bg-blue text-cream px-3.5 py-1.5 mb-6">
                    <BookOpen size={13} /> Featured Build Breakdown
                  </div>
                  <h3 className="font-sans font-semibold text-2xl sm:text-3xl leading-snug tracking-tight text-blue mb-4">
                    Shipping an MVP at AI Speed
                  </h3>
                  <p className="font-sans text-base leading-relaxed text-blue/90 mb-8 max-w-2xl">
                    How prompt-driven prototyping bridged design, code, and engineering for Donkey Donkey AI.
                  </p>
                  <div className="flex flex-wrap items-center gap-6">
                    <button
                      onClick={() => setIsArticleOpen(true)}
                      className="inline-flex items-center gap-3 font-mono text-xs font-bold tracking-wider uppercase bg-blue text-cream hover:bg-blue/90 border border-blue px-8 py-4 transition-all group cursor-pointer"
                    >
                      Read Full Article <ArrowRight size={14} className="group-hover:translate-x-1.5 transition-transform" />
                    </button>
                    <span className="font-mono text-xs text-blue/60 uppercase tracking-wider">
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
      <section className="w-full py-24 sm:py-32 px-6 sm:px-12 flex justify-center bg-cream" id="next-project-footer">
        <div className="max-w-6xl mx-auto w-full flex justify-center">
          <Reveal>
            <Link to="/projects/crackle" className="group flex flex-col items-center gap-4 sm:gap-6" id="next-project-link">
              <p className="font-mono text-xs tracking-widest opacity-60 group-hover:opacity-100 group-hover:tracking-[4px] transition-all duration-500 uppercase">
                NEXT PROJECT
              </p>
              <h4 className="font-sans font-semibold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-blue group-hover:scale-[1.02] transition-all duration-500">
                Sony Crackle
              </h4>
            </Link>
          </Reveal>
        </div>
      </section>

      {/* MEDIUM-STYLE UX ARTICLE OVERLAY */}
      <DonkeyArticleOverlay isOpen={isArticleOpen} onClose={() => setIsArticleOpen(false)} />
    </div>
  );
}

