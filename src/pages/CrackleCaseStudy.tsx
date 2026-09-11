import { motion, useScroll, useTransform } from 'motion/react';
import { Reveal } from '../components/Reveal';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CrackleCaseStudy() {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 1000], [0, -400]);

  return (
    <div className="pt-[72px] bg-cream min-h-screen">
      {/* 1. HEADER SECTION */}
      <section className="w-full border-b border-blue p-[120px_30px_80px]" id="crackle-header">
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
                Sony Crackle
              </h1>

              {/* Metadata Grid */}
              <div className="flex flex-wrap gap-x-12 sm:gap-x-16 gap-y-6 sm:gap-y-8" id="case-metadata-grid">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest opacity-60 mb-2">Role</p>
                  <p className="font-sans font-medium text-lg text-blue">UX/UI Designer</p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest opacity-60 mb-2">Platform Ecosystem</p>
                  <p className="font-sans font-medium text-lg text-blue">Web, Mobile, Tablet, 10-foot (OTT)</p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest opacity-60 mb-2">Focus</p>
                  <p className="font-sans font-medium text-lg text-blue">Sign-Up Conversion & Onboarding Strategy</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HERO IMAGE SECTION */}
      <section className="w-full border-b border-blue overflow-hidden bg-black" id="crackle-hero-section">
        <Reveal delay={0.2}>
          <div className="aspect-video w-full relative bg-black">
            <img 
              src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Crackle-welcome-screen.png?raw=true" 
              alt="Sony Crackle Welcome Screen" 
              className="w-full h-full object-contain bg-black transition-all duration-1000 ease-out"
              referrerPolicy="no-referrer"
              id="crackle-hero-img"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/30 backdrop-blur-md border-t border-blue/20 py-8 overflow-hidden" id="marquee-overlay">
              <div className="marquee-outer mask-linear-to-r from-transparent via-black via-10% via-90% to-transparent">
                <motion.div className="marquee-inner" style={{ x }}>
                  {[
                    "OTT Design", "TV Interfaces", "Conversion Strategy", "Platform Flow",
                    "Playback UX", "Growth Design", "User Flows", "Product Strategy",
                    "OTT Design", "TV Interfaces", "Conversion Strategy", "Platform Flow",
                    "Playback UX", "Growth Design", "User Flows", "Product Strategy"
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
              10-foot TV interfaces and simple viewer onboarding.
            </h2>
            <p className="font-sans text-base leading-relaxed text-blue/90 max-w-3xl">
              Sony Crackle reaches millions on smart TVs and game consoles. I unified the living room design system to make content discovery effortless and turn casual viewers into registered members.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. SECTION 01: 10-FOOT TV CONTENT DISCOVERY */}
      <section className="w-full border-b border-blue py-12 sm:py-16 px-6 sm:px-12 bg-black text-cream" id="section-01-discovery">
        <div className="max-w-6xl mx-auto w-full space-y-6">
          <Reveal>
            <div className="max-w-3xl">
              <p className="font-mono text-xs tracking-widest opacity-60 mb-2 uppercase text-cream">01 // Living Room Hub</p>
              <h2 className="font-sans font-semibold text-2xl sm:text-3xl text-cream tracking-tight leading-snug mb-3">
                Big-screen browsing with zero guesswork.
              </h2>
              <p className="font-sans text-base leading-relaxed text-cream/90">
                High-contrast carousel lanes and illuminated focus states engineered for effortless remote navigation.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="w-full overflow-hidden border border-cream/20 bg-black">
              <img 
                src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Crackle-Xbox-TV-Screen.png?raw=true" 
                alt="TV Page Show Listings" 
                className="w-full h-auto object-contain bg-black"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. SECTION 02: CONVERSION STRATEGY & THE UNLOCK WIN */}
      <section className="w-full border-b border-blue py-12 sm:py-16 px-6 sm:px-12 bg-cream text-blue" id="section-02-conversion">
        <div className="max-w-6xl mx-auto w-full space-y-6">
          <Reveal>
            <div className="max-w-3xl">
              <p className="font-mono text-xs tracking-widest opacity-60 mb-2 uppercase">02 // Conversion Strategy</p>
              <h2 className="font-sans font-semibold text-2xl sm:text-3xl text-blue tracking-tight leading-snug mb-3">
                Turning sign-up into an immediate reward.
              </h2>
              <p className="font-sans text-base leading-relaxed text-blue/90">
                Reframing registration to "Unlock Full Seasons" clarified that Crackle was free—removing hesitation and lifting completed sign-ups.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="w-full overflow-hidden border border-blue/10 bg-white">
              <img 
                src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Carckle-show-page-touchpoint.webp?raw=true" 
                alt="Show Page with Sign-up Prompt" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. SECTION 03: THE PAUSE-TO-ACCOUNT BRIDGE */}
      <section className="w-full border-b border-blue py-12 sm:py-16 px-6 sm:px-12 bg-white text-blue" id="section-03-bridge">
        <div className="max-w-6xl mx-auto w-full space-y-6">
          <Reveal>
            <div className="max-w-3xl">
              <p className="font-mono text-xs tracking-widest opacity-60 mb-2 uppercase">03 // Frictionless State Bridge</p>
              <h2 className="font-sans font-semibold text-2xl sm:text-3xl text-blue tracking-tight leading-snug mb-3">
                Preserving video playback during sign-up.
              </h2>
              <p className="font-sans text-base leading-relaxed text-blue/90">
                Silently cached stream timestamps in the background so viewers resume their exact spot immediately after creating an account.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="w-full overflow-hidden border border-blue/10 bg-white">
              <img 
                src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Crackle-pluse-signup-screen@2x.webp?raw=true" 
                alt="Pause Position Account Connection Feature" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. SECTION 04: D-PAD MAPPING & SYSTEM ARCHITECTURE */}
      <section className="w-full border-b border-blue py-12 sm:py-16 px-6 sm:px-12 bg-cream text-blue" id="section-04-dpad">
        <div className="max-w-6xl mx-auto w-full space-y-6">
          <Reveal>
            <div className="max-w-3xl">
              <p className="font-mono text-xs tracking-widest opacity-60 mb-2 uppercase">04 // Remote Navigation Architecture</p>
              <h2 className="font-sans font-semibold text-2xl sm:text-3xl text-blue tracking-tight leading-snug mb-3">
                Precision D-pad mapping across platforms.
              </h2>
              <p className="font-sans text-base leading-relaxed text-blue/90">
                Predictive 4-way D-pad inputs and edge wrapping prevent navigation dead-ends across Roku, Apple TV, Android TV, and consoles.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="w-full overflow-hidden border border-blue/10 bg-white">
              <img 
                src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Crackle-roku-sign-up-flow.png?raw=true" 
                alt="Roku D-pad Mapping and Navigation Flow" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER NAV */}
      <section className="w-full py-24 sm:py-32 px-6 sm:px-12 flex justify-center bg-cream" id="next-project-footer">
        <div className="max-w-6xl mx-auto w-full flex justify-center">
          <Reveal>
            <Link to="/projects/tiki" className="group flex flex-col items-center gap-4 sm:gap-6" id="next-project-link">
              <p className="font-mono text-xs tracking-widest opacity-60 group-hover:opacity-100 group-hover:tracking-[4px] transition-all duration-500 uppercase">
                NEXT PROJECT
              </p>
              <h4 className="font-sans font-semibold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-blue group-hover:scale-[1.02] transition-all duration-500">
                Tiki (Clicktripz)
              </h4>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
