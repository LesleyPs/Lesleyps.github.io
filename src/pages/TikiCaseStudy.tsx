import { motion, useScroll, useTransform } from 'motion/react';
import { Reveal } from '../components/Reveal';
import { VideoPlayer } from '../components/VideoPlayer';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TikiCaseStudy() {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 1000], [0, -400]);

  return (
    <div className="pt-[72px] bg-cream min-h-screen">
      {/* 1. HEADER SECTION */}
      <section className="w-full border-b border-blue p-[120px_30px_80px]" id="tiki-header">
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
                Tiki (Clicktripz)
              </h1>

              {/* Metadata Grid */}
              <div className="flex flex-wrap gap-x-12 sm:gap-x-16 gap-y-6 sm:gap-y-8" id="case-metadata-grid">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest opacity-60 mb-2">Role</p>
                  <p className="font-sans font-medium text-lg text-blue">Staff UX/UI Designer</p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest opacity-60 mb-2">Platform Ecosystem</p>
                  <p className="font-sans font-medium text-lg text-blue">Web & Native App Placements</p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest opacity-60 mb-2">Focus</p>
                  <p className="font-sans font-medium text-lg text-blue">Travel Ad Tech & Retention Placements</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HERO IMAGE SECTION */}
      <section className="w-full border-b border-blue overflow-hidden bg-cream" id="tiki-hero-section">
        <Reveal delay={0.2}>
          <div className="aspect-video w-full relative">
            <img 
              src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Tiki-Tab-Unit-Gallery@2x.webp?raw=true" 
              alt="Tiki Envoy Interactive Ad Unit Hero" 
              className="w-full h-full object-cover transition-all duration-1000 ease-out"
              referrerPolicy="no-referrer"
              id="tiki-hero-img"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/30 backdrop-blur-md border-t border-blue/20 py-8 overflow-hidden" id="marquee-overlay">
              <div className="marquee-outer mask-linear-to-r from-transparent via-black via-10% via-90% to-transparent">
                <motion.div className="marquee-inner" style={{ x }}>
                  {[
                    "Native Ad Units", "Retention Placements", "Redirecting Intent", "Travel Native Ads",
                    "Conversion Lift", "Re-engagement UX", "User Retention", "Contextual Offers",
                    "Native Ad Units", "Retention Placements", "Redirecting Intent", "Travel Native Ads",
                    "Conversion Lift", "Re-engagement UX", "User Retention", "Contextual Offers"
                  ].map((p, i) => (
                    <div key={i} className="flex items-center px-8 shrink-0">
                      <motion.span 
                        whileHover={{ scale: 1.05 }}
                        className="font-mono text-xs font-bold tracking-wider bg-cream text-blue border border-blue rounded-full px-6 py-2.5 whitespace-nowrap shadow-sm cursor-pointer inline-block uppercase"
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
              Capturing traveler intent before they bounce.
            </h2>
            <p className="font-sans text-base leading-relaxed text-blue/90 max-w-3xl">
              Over seven years as Staff UX Designer at Tiki, I designed high-performance native ad units and conversational AI assistants across top global travel publishers.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. SECTION 01: ENVOY AI ASSISTANT */}
      <section className="w-full border-b border-blue py-12 sm:py-16 px-6 sm:px-12 bg-white text-blue" id="section-01-envoy">
        <div className="max-w-6xl mx-auto w-full space-y-10">
          <Reveal>
            <div className="max-w-3xl">
              <p className="font-mono text-xs tracking-widest opacity-60 mb-2 uppercase">01 // Envoy AI Assistant</p>
              <h2 className="font-sans font-semibold text-2xl sm:text-3xl text-blue tracking-tight leading-snug mb-3">
                Turning static tourism ads into conversation.
              </h2>
              <p className="font-sans text-base leading-relaxed text-blue/90">
                Replaced ignored display banners with an interactive assistant that serves proactive prompt chips and local recommendations.
              </p>
            </div>
          </Reveal>

          {/* Envoy Video Showcase */}
          <Reveal>
            <div className="flex flex-col gap-3">
              <p className="font-mono text-xs uppercase tracking-wider opacity-60 text-center">
                Envoy Interactive AI Assistant Demo
              </p>
              <div className="w-full overflow-hidden border border-blue/10 bg-white">
                <VideoPlayer 
                  src="https://www.dropbox.com/scl/fi/k2qc37zvtnkhagn35vbjf/tiki-enovy-drp.mp4?rlkey=go6duodfyujwutb6ok0ksk28s&st=uw6nac4f&raw=1"
                  id="envoy-video-player"
                />
              </div>
            </div>
          </Reveal>

          {/* A/B Testing Variants */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-blue/20">
            <Reveal>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between border-b border-blue/20 pb-2">
                  <p className="font-mono text-xs uppercase tracking-wider font-bold text-blue/70">
                    Version A: Destination Map
                  </p>
                  <span className="font-mono text-xs uppercase tracking-wider opacity-60">
                    Geographic exploration
                  </span>
                </div>
                <div className="w-full overflow-hidden border border-blue/10 bg-white">
                  <img 
                    src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/version%20A-1_2x.png?raw=true" 
                    alt="Envoy Version A" 
                    className="w-full h-auto"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between border-b border-blue pb-2">
                  <p className="font-mono text-xs uppercase tracking-wider font-bold text-blue">
                    Version B: AI Prompt Chips
                  </p>
                  <span className="font-mono text-xs uppercase tracking-wider bg-blue text-cream px-2 py-0.5 font-bold">
                    Higher CTR Winner
                  </span>
                </div>
                <div className="w-full overflow-hidden border border-blue/10 bg-white">
                  <img 
                    src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/version%20B-1_2x.png?raw=true" 
                    alt="Envoy Version B" 
                    className="w-full h-auto"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Heatmap & Option C */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Reveal>
              <div className="flex flex-col gap-3">
                <p className="font-mono text-xs uppercase tracking-wider opacity-60 text-center">
                  Traveller Interaction Heatmap Analysis
                </p>
                <div className="w-full overflow-hidden border border-blue/10 bg-white">
                  <img 
                    src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/tiki-envoy-heatmap@2x.webp?raw=true" 
                    alt="Envoy Heatmap Analysis" 
                    className="w-full h-auto"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex flex-col gap-3">
                <p className="font-mono text-xs uppercase tracking-wider opacity-60 text-center">
                  Option C: High Density DMO Referral UI
                </p>
                <div className="w-full overflow-hidden border border-blue/10 bg-white">
                  <img 
                    src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/V3-%20C-1_2x.png?raw=true" 
                    alt="Envoy Version C Layout" 
                    className="w-full h-auto"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 4. SECTION 02: INTERACTIVE NATIVE TAB UNITS */}
      <section className="w-full border-b border-blue py-12 sm:py-16 px-6 sm:px-12 bg-cream text-blue" id="section-02-tab-units">
        <div className="max-w-6xl mx-auto w-full space-y-10">
          <Reveal>
            <div className="max-w-3xl">
              <p className="font-mono text-xs tracking-widest opacity-60 mb-2 uppercase">02 // Interactive Tab Units</p>
              <h2 className="font-sans font-semibold text-2xl sm:text-3xl text-blue tracking-tight leading-snug mb-3">
                Replacing intrusive popups with native utility.
              </h2>
              <p className="font-sans text-base leading-relaxed text-blue/90">
                Contextual deal tabs that slide in alongside travel articles, letting readers compare live rates without leaving the page.
              </p>
            </div>
          </Reveal>

          {/* Video Showcase */}
          <Reveal>
            <div className="flex flex-col gap-3">
              <p className="font-mono text-xs uppercase tracking-wider opacity-60 text-center">
                Interactive Tab Unit Motion Demo
              </p>
              <div className="w-full overflow-hidden border border-blue/10 bg-white">
                <VideoPlayer 
                  src="https://www.dropbox.com/scl/fi/55l3fbya7v7owwbt958vc/Tiki-Tab-Unit-example.mp4?rlkey=tndihx2wlatani8cded664jbw&st=3w66eiuc&raw=1"
                  id="media-unit-video-player"
                />
              </div>
            </div>
          </Reveal>

          {/* Before & After Tab Comparison */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-6 border-t border-blue/20">
            <Reveal>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between border-b border-blue/20 pb-2">
                  <p className="font-mono text-xs uppercase tracking-wider font-bold text-blue/70">
                    Legacy Interactive Unit
                  </p>
                  <span className="font-mono text-xs uppercase tracking-wider opacity-60">
                    Initial layout
                  </span>
                </div>
                <div className="w-full overflow-hidden border border-blue/10 bg-white">
                  <img 
                    src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/old-tab-unit@2x.png?raw=true" 
                    alt="Old Interactive Ad Unit UI" 
                    className="w-full h-auto"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between border-b border-blue pb-2">
                  <p className="font-mono text-xs uppercase tracking-wider font-bold text-blue">
                    Optimized High-Yield Tab Unit
                  </p>
                  <span className="font-mono text-xs uppercase tracking-wider bg-blue text-cream px-2 py-0.5 font-bold">
                    Production Winner
                  </span>
                </div>
                <div className="w-full overflow-hidden border border-blue/10 bg-white">
                  <img 
                    src="https://github.com/LesleyPs/old-protflio/blob/main/assets/Tiki_tab-unit-max@2x.webp?raw=true" 
                    alt="Maximized Tab Unit" 
                    className="w-full h-auto"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 5. SECTION 03: ENTERPRISE PUBLISHER INTEGRATIONS */}
      <section className="w-full border-b border-blue py-12 sm:py-16 px-6 sm:px-12 bg-white text-blue" id="section-03-integrations">
        <div className="max-w-6xl mx-auto w-full space-y-10">
          <Reveal>
            <div className="max-w-3xl">
              <p className="font-mono text-xs tracking-widest opacity-60 mb-2 uppercase">03 // Enterprise Publisher Placements</p>
              <h2 className="font-sans font-semibold text-2xl sm:text-3xl text-blue tracking-tight leading-snug mb-3">
                Seamless styling for the web's largest travel hubs.
              </h2>
              <p className="font-sans text-base leading-relaxed text-blue/90">
                Custom theme tokens and responsive layouts scaled across major partners including Expedia, Wetter.com, and AccuWeather.
              </p>
            </div>
          </Reveal>

          <div className="space-y-12">
            <Reveal>
              <div className="flex flex-col gap-3">
                <p className="font-mono text-xs uppercase tracking-wider opacity-60 text-center">
                  Expedia Live Partner Unit
                </p>
                <div className="w-full overflow-hidden border border-blue/10 bg-white">
                  <img 
                    src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/expedia-media-unit.webp?raw=true" 
                    alt="Expedia integration view" 
                    className="w-full h-auto mx-auto"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.15}>
              <div className="flex flex-col gap-3">
                <p className="font-mono text-xs uppercase tracking-wider opacity-60 text-center">
                  Wetter Multi-Destination Campaign Unit
                </p>
                <div className="w-full overflow-hidden border border-blue/10 bg-white">
                  <img 
                    src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/wetter-travel@2x.webp?raw=true" 
                    alt="Wetter Multi-Destination integration view" 
                    className="w-full h-auto mx-auto"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </Reveal>

            <Reveal delay={0.2}>
              <div className="flex flex-col gap-3">
                <p className="font-mono text-xs uppercase tracking-wider opacity-60 text-center">
                  AccuWeather iOS Native Mobile App Unit
                </p>
                <div className="w-full overflow-hidden border border-blue/10 bg-white">
                  <img 
                    src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/accuweather_2x.jpg?raw=true" 
                    alt="AccuWeather iOS native mobile unit view" 
                    className="w-full h-auto mx-auto scale-[1.02] origin-left"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* FOOTER NAV */}
      <section className="w-full py-24 sm:py-32 px-6 sm:px-12 flex justify-center bg-cream" id="next-project-footer">
        <div className="max-w-6xl mx-auto w-full flex justify-center">
          <Reveal>
            <Link to="/projects/control-tower" className="group flex flex-col items-center gap-4 sm:gap-6" id="next-project-link">
              <p className="font-mono text-xs tracking-widest opacity-60 group-hover:opacity-100 group-hover:tracking-[4px] transition-all duration-500 uppercase">
                NEXT PROJECT
              </p>
              <h4 className="font-sans font-semibold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-blue group-hover:scale-[1.02] transition-all duration-500">
                Control Tower
              </h4>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
