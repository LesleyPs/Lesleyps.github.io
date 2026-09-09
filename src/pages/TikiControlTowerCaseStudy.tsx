import { motion, useScroll, useTransform } from 'motion/react';
import { Reveal } from '../components/Reveal';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TikiControlTowerCaseStudy() {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 1000], [0, -400]);

  return (
    <div className="pt-[72px] bg-cream min-h-screen">
      {/* 1. HEADER SECTION */}
      <section className="w-full border-b border-blue p-[120px_30px_80px]" id="control-tower-header">
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
                Control Tower
              </h1>

              {/* Metadata Grid */}
              <div className="flex flex-wrap gap-x-16 gap-y-8" id="case-metadata-grid">
                <div>
                  <p className="font-mono text-[13px] uppercase tracking-[2px] opacity-60 mb-3">Role</p>
                  <p className="font-sans font-medium text-[18px] text-blue">Senior Product Designer</p>
                </div>
                <div>
                  <p className="font-mono text-[13px] uppercase tracking-[2px] opacity-60 mb-3">Scope</p>
                  <p className="font-sans font-medium text-[18px] text-blue">Product Design & UI/UX</p>
                </div>
                <div>
                  <p className="font-mono text-[13px] uppercase tracking-[2px] opacity-60 mb-3">Platform</p>
                  <p className="font-sans font-medium text-[18px] text-blue">Desktop Web SaaS Portal</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HERO IMAGE SECTION */}
      <section className="w-full border-b border-blue overflow-hidden bg-cream" id="hero-section">
        <Reveal delay={0.2}>
          <div className="aspect-video w-full relative">
            <img 
              src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Tiki_Control_Tower_Metrics@2x.webp?raw=true" 
              alt="Tiki Control Tower Hero" 
              className="w-full h-full object-cover transition-all duration-1000 ease-out"
              referrerPolicy="no-referrer"
              id="hero-img"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/30 backdrop-blur-md border-t border-blue/20 py-8 overflow-hidden" id="marquee-overlay">
              <div className="marquee-outer mask-linear-to-r from-transparent via-black via-10% via-90% to-transparent">
                <motion.div className="marquee-inner" style={{ x }}>
                  {[
                    "Self-Serve Setup", "Yield Analytics", "Publisher Onboarding", "Tag Verification",
                    "Frequency Capping", "Material Design System", "High-Volume Travel Ad Ops", "Dual-Purpose Portal",
                    "Self-Serve Setup", "Yield Analytics", "Publisher Onboarding", "Tag Verification",
                    "Frequency Capping", "Material Design System", "High-Volume Travel Ad Ops", "Dual-Purpose Portal"
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
              Streamlining publisher onboarding, yield analytics, and self-serve ad product management.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <p className="font-mono text-[12px] uppercase tracking-[2px] font-bold text-blue">01 // Self-Serve Setup</p>
                <p className="font-sans text-[16px] leading-[1.6em] text-blue font-medium">
                  Automated publisher tag verification, removing engineering setup bottlenecks.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-mono text-[12px] uppercase tracking-[2px] font-bold text-blue">02 // Fewer Clicks</p>
                <p className="font-sans text-[16px] leading-[1.6em] text-blue font-medium">
                  Surfaced frequency caps and active rules into a single card view, cutting sub-menu friction.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-mono text-[12px] uppercase tracking-[2px] font-bold text-blue">03 // Built for Scale</p>
                <p className="font-sans text-[16px] leading-[1.6em] text-blue font-medium">
                  Engineered to manage high-yield travel inventory across millions of daily impressions.
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
              Turning manual onboarding into a self-service engine.
            </h2>
            <div className="font-sans text-[17px] sm:text-[18px] leading-[1.7em] text-blue max-w-4xl space-y-4 font-medium">
              <p>
                Tiki runs high-yield ad systems for major travel publishers. Partner onboarding previously required endless email coordination between publishers, sales reps, and developers just to verify script tags or adjust campaign rules.
              </p>
              <p>
                I designed Control Tower as a dual-purpose portal—a self-serve setup tool for publishers and an operational command center for account leads. It eliminates integration friction and allows sales to scale partnerships without engineering overhead.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. SECTION 02: PRODUCT EVOLUTION: V1 TO V2 */}
      <section className="w-full border-b border-blue p-[100px_30px] bg-cream text-blue" id="section-02-evolution-header">
        <div className="max-w-6xl mx-auto w-full">
          <Reveal>
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-6 uppercase">02. Product Evolution: V1 to V2</p>
            <h2 className="font-sans font-semibold text-[clamp(30px,4.5vw,56px)] leading-[1.12em] tracking-normal text-blue w-[880px] max-w-full mb-8">
              Surfacing critical controls directly on the card face.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans text-[16px] leading-[1.65em] text-blue font-medium">
              <div className="space-y-2">
                <p className="font-mono text-[12px] uppercase tracking-[2px] font-bold text-blue">The Problem (V1)</p>
                <p>
                  Legacy product settings were buried in static tables. Checking frequency caps, device targets, or toggling product states required drilling into sub-menus for each domain.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-mono text-[12px] uppercase tracking-[2px] font-bold text-blue">The Fix (V2)</p>
                <p>
                  Surfaced key decision controls directly on product cards—introducing high-contrast status tags, instant toggles, and inline rules visible at a glance.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 02: STACKED FULL-WIDTH IMAGES */}
      <section className="w-full border-b border-blue overflow-hidden bg-cream p-6 sm:p-12 md:p-[80px_30px]" id="section-02-images">
        <div className="w-full max-w-7xl mx-auto space-y-20">
          <Reveal>
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between border-b border-blue/20 pb-3">
                <p className="font-mono text-[13px] uppercase tracking-[2px] font-bold text-blue/70">
                  V1: Legacy List View
                </p>
                <span className="font-mono text-[11px] uppercase tracking-[1px] opacity-60">
                  Sub-menu nested controls
                </span>
              </div>
              <div className="w-full overflow-hidden">
                <img 
                  src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Tiki-Products@2x.webp?raw=true" 
                  alt="V1: Legacy List View" 
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
                  V2: Redesigned Card View
                </p>
                <span className="font-mono text-[11px] uppercase tracking-[1px] bg-blue text-cream px-2.5 py-0.5 font-bold">
                  Surfaced In-Card Controls
                </span>
              </div>
              <div className="w-full overflow-hidden">
                <img 
                  src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Tiki_Control_Tower_Products_v2@2x.webp?raw=true" 
                  alt="V2: Redesigned Card View" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. SECTION 03: REAL-TIME YIELD METRICS */}
      <section className="w-full border-b border-blue p-[100px_30px] bg-cream text-blue" id="section-03-metrics-header">
        <div className="max-w-6xl mx-auto w-full">
          <Reveal>
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-6 uppercase">03. Real-Time Yield Metrics</p>
            <h2 className="font-sans font-semibold text-[clamp(30px,4.5vw,56px)] leading-[1.12em] tracking-normal text-blue w-[880px] max-w-full mb-6">
              Data density engineered for quick calls.
            </h2>
            <p className="font-sans text-[17px] sm:text-[18px] leading-[1.7em] text-blue max-w-4xl font-medium">
              Structured a clean KPI dashboard with primary metrics—Revenue, eCPM, Impressions, and Visitors—paired with instant date and domain filters for immediate performance insights.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SECTION 03: FULL-WIDTH LARGE METRICS IMAGE */}
      <section className="w-full border-b border-blue overflow-hidden bg-cream p-6 sm:p-12 md:p-[80px_30px]" id="section-03-image">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
          <Reveal>
            <div className="w-full overflow-hidden">
              <img 
                src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Tiki_Control_Tower_Metrics@2x.webp?raw=true" 
                alt="Tiki Control Tower Real-Time Yield Metrics" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. SECTION 04: DEVELOPER ONBOARDING & SITE REGISTRY */}
      <section className="w-full border-b border-blue p-[100px_30px] bg-cream text-blue" id="section-04-onboarding-header">
        <div className="max-w-6xl mx-auto w-full">
          <Reveal>
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-6 uppercase">04. Developer Onboarding & Site Registry</p>
            <h2 className="font-sans font-semibold text-[clamp(30px,4.5vw,56px)] leading-[1.12em] tracking-normal text-blue w-[880px] max-w-full mb-8">
              Clean technical handoffs for partner teams.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans text-[16px] leading-[1.65em] text-blue font-medium">
              <div className="space-y-2">
                <p className="font-mono text-[12px] uppercase tracking-[2px] font-bold text-blue">Learning Hub</p>
                <p>
                  Structured a tabbed documentation portal with clear JavaScript specs, interactive code snippets, and error alerts to guide partner developers without support tickets.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-mono text-[12px] uppercase tracking-[2px] font-bold text-blue">Site Registry</p>
                <p>
                  Designed a domain registry for instant script tag verification, active status monitoring, and automated publisher tag provisioning.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 04: FULL-WIDTH STACKED IMAGES */}
      <section className="w-full border-b border-blue overflow-hidden bg-cream p-6 sm:p-12 md:p-[80px_30px]" id="section-04-images">
        <div className="w-full max-w-7xl mx-auto space-y-16">
          <Reveal>
            <div className="flex flex-col gap-4">
              <p className="font-mono text-[13px] uppercase tracking-[2px] opacity-60 text-center">
                Developer Integration & UCO Learning Hub
              </p>
              <div className="w-full overflow-hidden">
                <img 
                  src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Tiki_Control_Tower_Learning_Hub@2x.webp?raw=true" 
                  alt="Tiki Control Tower Learning Hub" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="flex flex-col gap-4">
              <p className="font-mono text-[13px] uppercase tracking-[2px] opacity-60 text-center">
                Site Registry & Script Tag Verification
              </p>
              <div className="w-full overflow-hidden">
                <img 
                  src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Tiki_Control_Tower_Site_Integration@2x.webp?raw=true" 
                  alt="Tiki Control Tower Site Registry" 
                  className="w-full h-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 7. SECTION 05: ACCOUNT SYSTEMS & OPERATIONS */}
      <section className="w-full border-b border-blue p-[100px_30px] bg-cream text-blue" id="section-05-account-header">
        <div className="max-w-6xl mx-auto w-full">
          <Reveal>
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-6 uppercase">05. Account Systems & Operations</p>
            <h2 className="font-sans font-semibold text-[clamp(30px,4.5vw,56px)] leading-[1.12em] tracking-normal text-blue max-w-5xl mb-6">
              Centralized controls built to scale.
            </h2>
            <p className="font-sans text-[17px] sm:text-[18px] leading-[1.7em] text-blue max-w-4xl font-medium">
              Unified organization IDs, team permissions, security settings, and licensing terms into a single view. Leveraged a customized Material Design token system to maintain rapid engineering velocity while ensuring accessible, cohesive controls.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SECTION 05: FULL-WIDTH LARGE ACCOUNT IMAGE */}
      <section className="w-full border-b border-blue overflow-hidden bg-cream p-6 sm:p-12 md:p-[80px_30px]" id="section-05-image">
        <div className="w-full max-w-7xl mx-auto flex flex-col items-center">
          <Reveal>
            <div className="w-full overflow-hidden">
              <img 
                src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Tiki_Control_Tower_Account@2x.webp?raw=true" 
                alt="Tiki Control Tower Account View" 
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
            <Link to="/projects/tiki" className="group flex flex-col items-center gap-6" id="next-project-link">
              <p className="font-mono text-[13px] tracking-[3px] opacity-60 group-hover:opacity-100 group-hover:tracking-[5px] transition-all duration-500">NEXT PROJECT</p>
              <h4 className="font-sans font-semibold text-[clamp(32px,5vw,64px)] tracking-normal text-blue group-hover:scale-[1.02] transition-all duration-500">Tiki (Clicktripz)</h4>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
