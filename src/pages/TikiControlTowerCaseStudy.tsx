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
                className="inline-flex items-center gap-2 font-mono text-xs tracking-wider text-blue mb-10 hover:gap-3 transition-all opacity-70 hover:opacity-100 uppercase"
                id="back-to-portfolio-btn"
              >
                <ArrowLeft size={14} /> BACK TO PORTFOLIO
              </Link>

              <h1 className="font-sans font-semibold text-[clamp(45px,8vw,110px)] leading-[0.95em] tracking-normal text-blue mb-10" id="case-study-title">
                Control Tower
              </h1>

              {/* Metadata Grid */}
              <div className="flex flex-wrap gap-x-12 sm:gap-x-16 gap-y-6 sm:gap-y-8" id="case-metadata-grid">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest opacity-60 mb-2">Role</p>
                  <p className="font-sans font-medium text-lg text-blue">Senior Product Designer</p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest opacity-60 mb-2">Scope</p>
                  <p className="font-sans font-medium text-lg text-blue">Enterprise SaaS & B2B Portal</p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest opacity-60 mb-2">Platform</p>
                  <p className="font-sans font-medium text-lg text-blue">Desktop Web SaaS Portal</p>
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
              Publisher onboarding, ad controls, and yield analytics.
            </h2>
            <p className="font-sans text-base leading-relaxed text-blue/90 max-w-3xl">
              Designed Control Tower as an internal command center and self-serve partner portal to manage ad rules, verify site tags, and track live earnings.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. SECTION 01: PRODUCT EVOLUTION: V1 TO V2 */}
      <section className="w-full border-b border-blue py-12 sm:py-16 px-6 sm:px-12 bg-white text-blue" id="section-01-evolution">
        <div className="max-w-6xl mx-auto w-full space-y-10">
          <Reveal>
            <div className="max-w-3xl">
              <p className="font-mono text-xs tracking-widest opacity-60 mb-2 uppercase">01 // Product Evolution: V1 to V2</p>
              <h2 className="font-sans font-semibold text-2xl sm:text-3xl text-blue tracking-tight leading-snug mb-3">
                Surfacing controls right on the card face.
              </h2>
              <p className="font-sans text-base leading-relaxed text-blue/90">
                Moved key ad toggles and status badges out of nested menus and directly onto cards for one-click adjustments.
              </p>
            </div>
          </Reveal>

          <div className="space-y-12">
            <Reveal>
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between border-b border-blue/20 pb-2">
                  <p className="font-mono text-xs uppercase tracking-wider font-bold text-blue/70">
                    V1: Legacy List View
                  </p>
                  <span className="font-mono text-xs uppercase tracking-wider opacity-60">
                    Sub-menu nested controls
                  </span>
                </div>
                <div className="w-full overflow-hidden border border-blue/10 bg-white">
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
              <div className="flex flex-col gap-3">
                <div className="flex items-center justify-between border-b border-blue pb-2">
                  <p className="font-mono text-xs uppercase tracking-wider font-bold text-blue">
                    V2: Redesigned Card View
                  </p>
                  <span className="font-mono text-xs uppercase tracking-wider bg-blue text-cream px-2 py-0.5 font-bold">
                    Surfaced In-Card Controls
                  </span>
                </div>
                <div className="w-full overflow-hidden border border-blue/10 bg-white">
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
        </div>
      </section>

      {/* 4. SECTION 02: REAL-TIME YIELD METRICS */}
      <section className="w-full border-b border-blue py-12 sm:py-16 px-6 sm:px-12 bg-cream text-blue" id="section-02-metrics">
        <div className="max-w-6xl mx-auto w-full space-y-6">
          <Reveal>
            <div className="max-w-3xl">
              <p className="font-mono text-xs tracking-widest opacity-60 mb-2 uppercase">02 // Real-Time Yield Metrics</p>
              <h2 className="font-sans font-semibold text-2xl sm:text-3xl text-blue tracking-tight leading-snug mb-3">
                Dense data arranged for quick calls.
              </h2>
              <p className="font-sans text-base leading-relaxed text-blue/90">
                A clean KPI cockpit focusing on revenue, eCPM, impressions, and visitors with quick date and domain filters.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="w-full overflow-hidden border border-blue/10 bg-white">
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

      {/* 5. SECTION 03: DEVELOPER ONBOARDING & SITE REGISTRY */}
      <section className="w-full border-b border-blue py-12 sm:py-16 px-6 sm:px-12 bg-white text-blue" id="section-03-onboarding">
        <div className="max-w-6xl mx-auto w-full space-y-10">
          <Reveal>
            <div className="max-w-3xl">
              <p className="font-mono text-xs tracking-widest opacity-60 mb-2 uppercase">03 // Developer Center & Site Registry</p>
              <h2 className="font-sans font-semibold text-2xl sm:text-3xl text-blue tracking-tight leading-snug mb-3">
                Frictionless developer onboarding.
              </h2>
              <p className="font-sans text-base leading-relaxed text-blue/90">
                Tabbed documentation with live JavaScript snippets paired with automated domain tag verification and instant health checks.
              </p>
            </div>
          </Reveal>

          <div className="space-y-10">
            <Reveal>
              <div className="flex flex-col gap-3">
                <p className="font-mono text-xs uppercase tracking-wider opacity-60 text-center">
                  Developer Integration & UCO Learning Hub
                </p>
                <div className="w-full overflow-hidden border border-blue/10 bg-white">
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
              <div className="flex flex-col gap-3">
                <p className="font-mono text-xs uppercase tracking-wider opacity-60 text-center">
                  Site Registry & Script Tag Verification
                </p>
                <div className="w-full overflow-hidden border border-blue/10 bg-white">
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
        </div>
      </section>

      {/* 6. SECTION 04: ACCOUNT SYSTEMS & OPERATIONS */}
      <section className="w-full border-b border-blue py-12 sm:py-16 px-6 sm:px-12 bg-cream text-blue" id="section-04-account">
        <div className="max-w-6xl mx-auto w-full space-y-6">
          <Reveal>
            <div className="max-w-3xl">
              <p className="font-mono text-xs tracking-widest opacity-60 mb-2 uppercase">04 // Account Systems & Operations</p>
              <h2 className="font-sans font-semibold text-2xl sm:text-3xl text-blue tracking-tight leading-snug mb-3">
                Centralized controls built to scale.
              </h2>
              <p className="font-sans text-base leading-relaxed text-blue/90">
                Unified team permissions, organization IDs, and security policies built on a consistent, accessible design token system.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="w-full overflow-hidden border border-blue/10 bg-white">
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
      <section className="w-full py-24 sm:py-32 px-6 sm:px-12 flex justify-center bg-cream" id="next-project-footer">
        <div className="max-w-6xl mx-auto w-full flex justify-center">
          <Reveal>
            <Link to="/projects/mylife" className="group flex flex-col items-center gap-4 sm:gap-6" id="next-project-link">
              <p className="font-mono text-xs tracking-widest opacity-60 group-hover:opacity-100 group-hover:tracking-[4px] transition-all duration-500 uppercase">
                NEXT PROJECT
              </p>
              <h4 className="font-sans font-semibold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-blue group-hover:scale-[1.02] transition-all duration-500">
                MyLife
              </h4>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
