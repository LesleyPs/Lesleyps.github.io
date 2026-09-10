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
                className="flex items-center gap-2 font-mono text-[13px] tracking-[1px] text-blue mb-12 hover:gap-3 transition-all opacity-70 hover:opacity-100"
                id="back-to-portfolio-btn"
              >
                <ArrowLeft size={14} /> BACK TO PORTFOLIO
              </Link>

              <h1 className="font-sans font-semibold text-[clamp(45px,8vw,110px)] leading-[0.95em] tracking-normal text-blue mb-10" id="case-study-title">
                Sony Crackle
              </h1>

              {/* Metadata Grid */}
              <div className="flex flex-wrap gap-x-16 gap-y-8" id="case-metadata-grid">
                <div>
                  <p className="font-mono text-[13px] uppercase tracking-[2px] opacity-60 mb-3">Role</p>
                  <p className="font-sans font-medium text-[18px] text-blue">UX/UI Designer</p>
                </div>
                <div>
                  <p className="font-mono text-[13px] uppercase tracking-[2px] opacity-60 mb-3">Platform Ecosystem</p>
                  <p className="font-sans font-medium text-[18px] text-blue">Web, Mobile, Tablet, 10-foot (OTT)</p>
                </div>
                <div>
                  <p className="font-mono text-[13px] uppercase tracking-[2px] opacity-60 mb-3">Focus</p>
                  <p className="font-sans font-medium text-[18px] text-blue">Sign-Up Conversion & Onboarding Strategy</p>
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

      {/* 2. OVERVIEW & KEY OUTCOMES */}
      <section className="w-full border-b border-blue p-[100px_30px]" id="outcomes-section">
        <div className="max-w-6xl mx-auto w-full">
          <Reveal>
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-6 uppercase">Key Outcomes & Mission</p>
            <h2 className="font-sans font-semibold text-[clamp(30px,4.5vw,56px)] leading-[1.12em] tracking-normal text-blue max-w-5xl mb-12">
              Designing 10-foot TV interfaces and seamless cross-device authentication touchpoints.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <p className="font-mono text-[12px] uppercase tracking-[2px] font-bold text-blue">01 // 10-Foot Navigation</p>
                <p className="font-sans text-[16px] leading-[1.6em] text-blue font-medium">
                  Precision D-pad focus states, optimized contrast ratios, and spatial remote journeys.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-mono text-[12px] uppercase tracking-[2px] font-bold text-blue">02 // "Unlock" Micro-Copy</p>
                <p className="font-sans text-[16px] leading-[1.6em] text-blue font-medium">
                  Reframed transactional registration into an instant reward, increasing sign-up conversion.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-mono text-[12px] uppercase tracking-[2px] font-bold text-blue">03 // State Continuity</p>
                <p className="font-sans text-[16px] leading-[1.6em] text-blue font-medium">
                  Seamless watch history and pause-state synchronization across TV, mobile, and web.
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
              Delivering cinematic entertainment across connected living room screens.
            </h2>
            <div className="font-sans text-[17px] sm:text-[18px] leading-[1.7em] text-blue max-w-4xl space-y-4 font-medium">
              <p>
                Sony Crackle operates one of the largest free ad-supported streaming networks in the world. As viewers transitioned from desktop browsers to connected televisions and gaming consoles, the product required a unified design language that translated seamlessly across ten-foot and mobile screens.
              </p>
              <p>
                I designed core experiences across the platform lifecycle—from introductory onboarding and TV browsing hubs to high-converting authentication touchpoints that preserve viewer state without friction.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. SECTION 02: 10-FOOT TV CONTENT DISCOVERY */}
      <section className="w-full border-b border-blue p-[100px_30px] bg-cream text-blue" id="section-02-tv-hub-header">
        <div className="max-w-6xl mx-auto w-full">
          <Reveal>
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-6 uppercase">02. Content Discovery & TV Hub</p>
            <h2 className="font-sans font-semibold text-[clamp(30px,4.5vw,56px)] leading-[1.12em] tracking-normal text-blue w-[880px] max-w-full mb-8">
              Surfacing expansive entertainment with instant visual clarity.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans text-[16px] leading-[1.65em] text-blue font-medium">
              <div className="space-y-2">
                <p className="font-mono text-[12px] uppercase tracking-[2px] font-bold text-blue">The 10-Foot Challenge</p>
                <p>
                  Navigating dense TV listings using handheld remotes often causes cognitive fatigue and accidental clicks.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-mono text-[12px] uppercase tracking-[2px] font-bold text-blue">The Solution</p>
                <p>
                  Structured wide, high-contrast carousel lanes with illuminated focus boundaries and clear show metadata visible from across the room.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 02: TV HUB IMAGE SHOWCASE */}
      <section className="w-full border-b border-blue overflow-hidden bg-black p-6 sm:p-12 md:p-[80px_30px]" id="section-02-image">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
          <Reveal>
            <div className="w-full overflow-hidden border border-blue/10 bg-black">
              <img 
                src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Crackle-Xbox-TV-Screen.png?raw=true" 
                alt="TV Page Show Listings" 
                className="w-full h-auto object-contain bg-black transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. SECTION 03: CONVERSION STRATEGY & MICRO-COPY */}
      <section className="w-full border-b border-blue p-[100px_30px] bg-cream text-blue" id="section-03-conversion-header">
        <div className="max-w-6xl mx-auto w-full">
          <Reveal>
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-6 uppercase">03. Conversion Strategy & Micro-Copy</p>
            <h2 className="font-sans font-semibold text-[clamp(30px,4.5vw,56px)] leading-[1.12em] tracking-normal text-blue w-[880px] max-w-full mb-8">
              Reframing registration as an immediate reward.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans text-[16px] leading-[1.65em] text-blue font-medium">
              <div className="space-y-2">
                <p className="font-mono text-[12px] uppercase tracking-[2px] font-bold text-blue">"Sign Up" Friction</p>
                <p>
                  Traditional registration CTAs felt transactional and implied payment barriers, triggering user hesitation on free streaming content.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-mono text-[12px] uppercase tracking-[2px] font-bold text-blue">"Unlock" Value</p>
                <p>
                  Reframed CTAs to focus on the instant benefit—unlocking full season libraries—delivering an immediate lift in sign-ups without code complexity.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 03: SHOW PAGE IMAGE */}
      <section className="w-full border-b border-blue overflow-hidden bg-white p-6 sm:p-12 md:p-[80px_30px]" id="section-03-image">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
          <Reveal>
            <div className="w-full overflow-hidden border border-blue/10">
              <img 
                src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Carckle-show-page-touchpoint.webp?raw=true" 
                alt="Show Page with Sign-up Prompt" 
                className="w-full h-auto transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. SECTION 04: THE PAUSE-TO-ACCOUNT BRIDGE */}
      <section className="w-full border-b border-blue p-[100px_30px] bg-cream text-blue" id="section-04-bridge-header">
        <div className="max-w-6xl mx-auto w-full">
          <Reveal>
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-6 uppercase">04. Frictionless State Management</p>
            <h2 className="font-sans font-semibold text-[clamp(30px,4.5vw,56px)] leading-[1.12em] tracking-normal text-blue w-[880px] max-w-full mb-8">
              Eliminating registration drop-offs by preserving playback state.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans text-[16px] leading-[1.65em] text-blue font-medium">
              <div className="space-y-2">
                <p className="font-mono text-[12px] uppercase tracking-[2px] font-bold text-blue">Guest Viewer Abandonment</p>
                <p>
                  Guest users frequently abandoned streams when creating an account forced a page reload and reset their video timeline to zero.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-mono text-[12px] uppercase tracking-[2px] font-bold text-blue">The State Sync Bridge</p>
                <p>
                  Engineered a background state bridge that caches the active timecode locally and resumes streaming instantly upon account verification.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 04: PAUSE SCREEN IMAGE */}
      <section className="w-full border-b border-blue overflow-hidden bg-white p-6 sm:p-12 md:p-[80px_30px]" id="section-04-image">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
          <Reveal>
            <div className="w-full overflow-hidden border border-blue/10">
              <img 
                src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Crackle-pluse-signup-screen@2x.webp?raw=true" 
                alt="Pause Position Account Connection Feature" 
                className="w-full h-auto transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. SECTION 05: D-PAD MAPPING & SYSTEM ARCHITECTURE */}
      <section className="w-full border-b border-blue p-[100px_30px] bg-cream text-blue" id="section-05-dpad-header">
        <div className="max-w-6xl mx-auto w-full">
          <Reveal>
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-6 uppercase">05. 10-Foot Remote Navigation</p>
            <h2 className="font-sans font-semibold text-[clamp(30px,4.5vw,56px)] leading-[1.12em] tracking-normal text-blue w-[880px] max-w-full mb-8">
              Precision D-pad mapping for the lean-back experience.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans text-[16px] leading-[1.65em] text-blue font-medium">
              <div className="space-y-2">
                <p className="font-mono text-[12px] uppercase tracking-[2px] font-bold text-blue">Roku & TV Remote Flow</p>
                <p>
                  Mapped 4-way D-pad inputs with predictive edge wrapping and direct jump anchors to prevent navigation dead ends.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-mono text-[12px] uppercase tracking-[2px] font-bold text-blue">Cross-Platform Cohesion</p>
                <p>
                  Unified interaction models across Roku, Apple TV, Android TV, and gaming consoles under a cohesive design token system.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 05: D-PAD IMAGE SHOWCASE */}
      <section className="w-full border-b border-blue overflow-hidden bg-white p-6 sm:p-12 md:p-[80px_30px]" id="section-05-image">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
          <Reveal>
            <div className="w-full overflow-hidden border border-blue/10">
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
      <section className="w-full p-[140px_30px] flex justify-center bg-cream" id="next-project-footer">
        <div className="max-w-6xl mx-auto w-full flex justify-center">
          <Reveal>
            <Link to="/projects/donkey" className="group flex flex-col items-center gap-6" id="next-project-link">
              <p className="font-mono text-[13px] tracking-[3px] opacity-60 group-hover:opacity-100 group-hover:tracking-[5px] transition-all duration-500">NEXT PROJECT</p>
              <h4 className="font-sans font-semibold text-[clamp(32px,5vw,64px)] tracking-normal text-blue group-hover:scale-[1.02] transition-all duration-500">Donkey Donkey AI</h4>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
