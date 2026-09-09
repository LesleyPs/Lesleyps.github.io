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
                className="flex items-center gap-2 font-mono text-[13px] tracking-[1px] text-blue mb-12 hover:gap-3 transition-all opacity-70 hover:opacity-100" 
                id="back-to-portfolio-btn"
              >
                <ArrowLeft size={14} /> BACK TO PORTFOLIO
              </Link>

              <h1 className="font-sans font-semibold text-[clamp(45px,8vw,110px)] leading-[0.95em] tracking-normal text-blue mb-10" id="case-study-title">
                Tiki (Clicktripz)
              </h1>

              {/* Metadata Grid */}
              <div className="flex flex-wrap gap-x-16 gap-y-8" id="case-metadata-grid">
                <div>
                  <p className="font-mono text-[13px] uppercase tracking-[2px] opacity-60 mb-3">Role</p>
                  <p className="font-sans font-medium text-[18px] text-blue">Staff UX/UI Designer</p>
                </div>
                <div>
                  <p className="font-mono text-[13px] uppercase tracking-[2px] opacity-60 mb-3">Tenure</p>
                  <p className="font-sans font-medium text-[18px] text-blue">7+ Years</p>
                </div>
                <div>
                  <p className="font-mono text-[13px] uppercase tracking-[2px] opacity-60 mb-3">Focus</p>
                  <p className="font-sans font-medium text-[18px] text-blue">Travel Ad Tech & Retention Placements</p>
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
                        className="font-mono text-[12px] font-bold tracking-[1.5px] bg-white text-blue border border-blue rounded-full px-6 py-2.5 whitespace-nowrap shadow-sm cursor-pointer inline-block uppercase"
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
              Designing high-yield native ad units and AI conversational tools to redirect traveler intent.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <p className="font-mono text-[12px] uppercase tracking-[2px] font-bold text-blue">01 // Envoy AI Assistant</p>
                <p className="font-sans text-[16px] leading-[1.6em] text-blue font-medium">
                  Conversational destination discovery driving qualified traveler traffic directly to partner DMOs.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-mono text-[12px] uppercase tracking-[2px] font-bold text-blue">02 // Interactive Tab Units</p>
                <p className="font-sans text-[16px] leading-[1.6em] text-blue font-medium">
                  Contextual deal units replacing disruptive pop-ups with clean editorial integration.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-mono text-[12px] uppercase tracking-[2px] font-bold text-blue">03 // Tier-1 Scale</p>
                <p className="font-sans text-[16px] leading-[1.6em] text-blue font-medium">
                  Engineered and deployed native placements across Expedia, Wetter.com, and AccuWeather.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 3. SECTION 01: THE MISSION */}
      <section className="w-full border-b border-blue p-[100px_30px] bg-cream" id="section-01-mission">
        <div className="max-w-6xl mx-auto w-full">
          <Reveal>
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-6 uppercase">01. The Mission</p>
            <h2 className="font-sans font-semibold text-[clamp(30px,4.5vw,56px)] leading-[1.12em] tracking-normal text-blue w-[880px] max-w-full mb-8">
              Redirecting traveler intent at the point of booking.
            </h2>
            <div className="font-sans text-[17px] sm:text-[18px] leading-[1.7em] text-blue max-w-4xl space-y-4 font-medium">
              <p>
                Travelers frequently comparison-shop across multiple tabs before committing to flights, hotels, or packages. Tiki builds proprietary ad tech products embedded directly into tier-1 travel publisher sites to capture and re-engage that intent.
              </p>
              <p>
                Over seven years as Staff UX/UI Designer, I led product design for Tiki's flagship ad ecosystem—spanning AI conversational search assistants, dynamic exit widgets, and high-converting native tab units that respect editorial flow while maximizing publisher yield.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. SECTION 02: ENVOY AI ASSISTANT */}
      <section className="w-full border-b border-blue p-[100px_30px] bg-cream text-blue" id="section-02-envoy-header">
        <div className="max-w-6xl mx-auto w-full">
          <Reveal>
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-6 uppercase">02. Envoy AI Assistant // Generative UX</p>
            <h2 className="font-sans font-semibold text-[clamp(30px,4.5vw,56px)] leading-[1.12em] tracking-normal text-blue w-[880px] max-w-full mb-8">
              Guiding travelers to DMO websites through conversational discovery.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans text-[16px] leading-[1.65em] text-blue font-medium">
              <div className="space-y-2">
                <p className="font-mono text-[12px] uppercase tracking-[2px] font-bold text-blue">The Challenge</p>
                <p>
                  Destination Marketing Organizations (DMOs) struggled to attract qualified traveler visits through static keyword links and generic banner ads.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-mono text-[12px] uppercase tracking-[2px] font-bold text-blue">The Generative Solution</p>
                <p>
                  Designed Envoy as a conversational AI companion—replacing dense text menus with proactive prompt chips, itinerary previews, and contextual city highlights.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 02: VIDEO SHOWCASE */}
      <section className="w-full border-b border-blue overflow-hidden bg-cream p-6 sm:p-12 md:p-[80px_30px]" id="envoy-video-display">
        <div className="w-full max-w-7xl mx-auto">
          <Reveal>
            <div className="flex flex-col gap-4">
              <p className="font-mono text-[13px] uppercase tracking-[2px] opacity-60 text-center">
                Envoy Interactive AI Assistant Demo
              </p>
              <div className="w-full overflow-hidden">
                <VideoPlayer 
                  src="https://www.dropbox.com/scl/fi/k2qc37zvtnkhagn35vbjf/tiki-enovy-drp.mp4?rlkey=go6duodfyujwutb6ok0ksk28s&st=uw6nac4f&raw=1"
                  id="envoy-video-player"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 02: A/B TESTING VARIANTS */}
      <section className="w-full border-b border-blue overflow-hidden bg-cream p-6 sm:p-12 md:p-[80px_30px]" id="envoy-variants-display">
        <div className="w-full max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Reveal>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-blue/20 pb-3">
                  <p className="font-mono text-[13px] uppercase tracking-[2px] font-bold text-blue/70">
                    Version A: Destination Map
                  </p>
                  <span className="font-mono text-[11px] uppercase tracking-[1px] opacity-60">
                    Geographic exploration
                  </span>
                </div>
                <div className="w-full overflow-hidden">
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
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-blue pb-3">
                  <p className="font-mono text-[13px] uppercase tracking-[2px] font-bold text-blue">
                    Version B: AI Prompt Chips
                  </p>
                  <span className="font-mono text-[11px] uppercase tracking-[1px] bg-blue text-cream px-2.5 py-0.5 font-bold">
                    Higher CTR Winner
                  </span>
                </div>
                <div className="w-full overflow-hidden">
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

          {/* HEATMAP & OPTION C */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Reveal>
              <div className="flex flex-col gap-4">
                <p className="font-mono text-[13px] uppercase tracking-[2px] opacity-60 text-center">
                  Traveller Interaction Heatmap Analysis
                </p>
                <div className="w-full overflow-hidden">
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
              <div className="flex flex-col gap-4">
                <p className="font-mono text-[13px] uppercase tracking-[2px] opacity-60 text-center">
                  Option C: High Density DMO Referral UI
                </p>
                <div className="w-full overflow-hidden">
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

      {/* 5. SECTION 03: INTERACTIVE NATIVE TAB UNITS */}
      <section className="w-full border-b border-blue p-[100px_30px] bg-cream text-blue" id="section-03-tab-units-header">
        <div className="max-w-6xl mx-auto w-full">
          <Reveal>
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-6 uppercase">03. Interactive Native Tab Units</p>
            <h2 className="font-sans font-semibold text-[clamp(30px,4.5vw,56px)] leading-[1.12em] tracking-normal text-blue w-[880px] max-w-full mb-8">
              Evolving intrusive ads into editorial travel companions.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans text-[16px] leading-[1.65em] text-blue font-medium">
              <div className="space-y-2">
                <p className="font-mono text-[12px] uppercase tracking-[2px] font-bold text-blue">The Problem (Legacy Banners)</p>
                <p>
                  Flashy display ads and modal interruptions alienated website visitors and led to severe banner blindness, lowering monetization yield.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-mono text-[12px] uppercase tracking-[2px] font-bold text-blue">The Fix (Native Tabs)</p>
                <p>
                  Engineered an interactive tabbed module that seamlessly slides alongside travel articles, surfacing live hotel rates and route deals on demand.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 03: TAB UNIT VIDEO SHOWCASE */}
      <section className="w-full border-b border-blue overflow-hidden bg-cream p-6 sm:p-12 md:p-[80px_30px]" id="media-unit-video-display">
        <div className="w-full max-w-7xl mx-auto">
          <Reveal>
            <div className="flex flex-col gap-4">
              <p className="font-mono text-[13px] uppercase tracking-[2px] opacity-60 text-center">
                Interactive Tab Unit Motion Demo
              </p>
              <div className="w-full overflow-hidden">
                <VideoPlayer 
                  src="https://www.dropbox.com/scl/fi/55l3fbya7v7owwbt958vc/Tiki-Tab-Unit-example.mp4?rlkey=tndihx2wlatani8cded664jbw&st=3w66eiuc&raw=1"
                  id="media-unit-video-player"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 03: BEFORE & AFTER TAB COMPARISON */}
      <section className="w-full border-b border-blue overflow-hidden bg-cream p-6 sm:p-12 md:p-[80px_30px]" id="tab-comparisons">
        <div className="w-full max-w-7xl mx-auto space-y-16">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <Reveal>
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-blue/20 pb-3">
                  <p className="font-mono text-[13px] uppercase tracking-[2px] font-bold text-blue/70">
                    Legacy Interactive Unit
                  </p>
                  <span className="font-mono text-[11px] uppercase tracking-[1px] opacity-60">
                    Initial layout
                  </span>
                </div>
                <div className="w-full overflow-hidden">
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
              <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between border-b border-blue pb-3">
                  <p className="font-mono text-[13px] uppercase tracking-[2px] font-bold text-blue">
                    Optimized High-Yield Tab Unit
                  </p>
                  <span className="font-mono text-[11px] uppercase tracking-[1px] bg-blue text-cream px-2.5 py-0.5 font-bold">
                    Production Winner
                  </span>
                </div>
                <div className="w-full overflow-hidden">
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

      {/* 6. SECTION 04: ENTERPRISE PUBLISHER INTEGRATIONS */}
      <section className="w-full border-b border-blue p-[100px_30px] bg-cream text-blue" id="section-04-integrations-header">
        <div className="max-w-6xl mx-auto w-full">
          <Reveal>
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-6 uppercase">04. Enterprise Publisher Integrations</p>
            <h2 className="font-sans font-semibold text-[clamp(30px,4.5vw,56px)] leading-[1.12em] tracking-normal text-blue max-w-5xl mb-6">
              Customized design architectures for tier-1 global publishers.
            </h2>
            <p className="font-sans text-[17px] sm:text-[18px] leading-[1.7em] text-blue max-w-4xl font-medium">
              Tailored typography, responsive margins, and dynamic theme tokens across major partners including Expedia, Wetter.com, and AccuWeather—ensuring brand alignment without compromising revenue yield.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SECTION 04: PARTNER SHOWCASES */}
      <section className="w-full border-b border-blue overflow-hidden bg-cream p-6 sm:p-12 md:p-[80px_30px]" id="tab-partners">
        <div className="w-full max-w-7xl mx-auto space-y-16">
          <Reveal>
            <div className="flex flex-col gap-4">
              <p className="font-mono text-[13px] uppercase tracking-[2px] opacity-60 text-center">
                Expedia Live Partner Unit
              </p>
              <div className="w-full overflow-hidden">
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
            <div className="flex flex-col gap-4">
              <p className="font-mono text-[13px] uppercase tracking-[2px] opacity-60 text-center">
                Wetter Multi-Destination Campaign Unit
              </p>
              <div className="w-full overflow-hidden">
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
            <div className="flex flex-col gap-4">
              <p className="font-mono text-[13px] uppercase tracking-[2px] opacity-60 text-center">
                AccuWeather iOS Native Mobile App Unit
              </p>
              <div className="w-full overflow-hidden relative">
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
      </section>

      {/* FOOTER NAV */}
      <section className="w-full p-[140px_30px] flex justify-center bg-cream" id="next-project-footer">
        <div className="max-w-6xl mx-auto w-full flex justify-center">
          <Reveal>
            <Link to="/projects/crackle" className="group flex flex-col items-center gap-6" id="next-project-link">
              <p className="font-mono text-[13px] tracking-[3px] opacity-60 group-hover:opacity-100 group-hover:tracking-[5px] transition-all duration-500">NEXT PROJECT</p>
              <h4 className="font-sans font-semibold text-[clamp(32px,5vw,64px)] tracking-normal text-blue group-hover:scale-[1.02] transition-all duration-500">Sony Crackle</h4>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
