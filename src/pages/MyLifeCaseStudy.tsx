import { motion, useScroll, useTransform } from 'motion/react';
import { Reveal } from '../components/Reveal';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MyLifeCaseStudy() {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 1000], [0, -400]);

  return (
    <div className="pt-[72px] bg-cream min-h-screen">
      {/* 1. HEADER SECTION */}
      <section className="w-full border-b border-blue p-[120px_30px_80px]" id="mylife-header">
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
                MyLife.com
              </h1>

              {/* Metadata Grid */}
              <div className="flex flex-wrap gap-x-12 sm:gap-x-16 gap-y-6 sm:gap-y-8" id="case-metadata-grid">
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest opacity-60 mb-2">Role</p>
                  <p className="font-sans font-medium text-lg text-blue">UX Designer</p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest opacity-60 mb-2">Platform Ecosystem</p>
                  <p className="font-sans font-medium text-lg text-blue">Web & Mobile Web</p>
                </div>
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest opacity-60 mb-2">Focus</p>
                  <p className="font-sans font-medium text-lg text-blue">Profile UX, Checkout Flows, & SEO Mobile</p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* HERO IMAGE SECTION */}
      <section className="w-full border-b border-blue overflow-hidden bg-cream" id="mylife-hero-section">
        <Reveal delay={0.2}>
          <div className="aspect-video w-full relative">
            <img 
              src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Mylife-public-background-report.jpg?raw=true" 
              alt="MyLife Background Report Dashboard" 
              className="w-full h-full object-cover transition-all duration-1000 ease-out"
              referrerPolicy="no-referrer"
              id="mylife-hero-img"
            />
            <div className="absolute bottom-0 left-0 w-full bg-black/30 backdrop-blur-md border-t border-blue/20 py-8 overflow-hidden" id="marquee-overlay">
              <div className="marquee-outer mask-linear-to-r from-transparent via-black via-10% via-90% to-transparent">
                <motion.div className="marquee-inner" style={{ x }}>
                  {[
                    "Profile UX", "PO Flows", "SEO Pages", "Dynamic Emails",
                    "Purchase Order Flow", "A/B Testing", "User Flows", "UI Patterns",
                    "Profile UX", "PO Flows", "SEO Pages", "Dynamic Emails",
                    "Purchase Order Flow", "A/B Testing", "User Flows", "UI Patterns"
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
              Turning raw public records into clean identity reports.
            </h2>
            <p className="font-sans text-base leading-relaxed text-blue/90 max-w-3xl">
              Redesigned MyLife's core background report, simplified checkout friction, and optimized mobile entry for search visitors.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. SECTION 01: MAIN PROFILE UX */}
      <section className="w-full border-b border-blue py-12 sm:py-16 px-6 sm:px-12 bg-white text-blue" id="section-01-profile">
        <div className="max-w-6xl mx-auto w-full space-y-6">
          <Reveal>
            <div className="max-w-3xl">
              <p className="font-mono text-xs tracking-widest opacity-60 mb-2 uppercase">01 // Main Profile UX</p>
              <h2 className="font-sans font-semibold text-2xl sm:text-3xl text-blue tracking-tight leading-snug mb-3">
                Structured data replacing visual anxiety.
              </h2>
              <p className="font-sans text-base leading-relaxed text-blue/90">
                Grouped contact histories, court filings, and reputation scores into clear, digestible cards.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="border border-blue/10 w-full overflow-hidden">
              <img 
                src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Mylife-public-background-report.jpg?raw=true" 
                alt="MyLife Public Background Report Dashboard" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. SECTION 02: PURCHASE ORDER FLOW & CONVERSION */}
      <section className="w-full border-b border-blue py-12 sm:py-16 px-6 sm:px-12 bg-cream text-blue" id="section-02-checkout">
        <div className="max-w-6xl mx-auto w-full space-y-6">
          <Reveal>
            <div className="max-w-3xl">
              <p className="font-mono text-xs tracking-widest opacity-60 mb-2 uppercase">02 // Purchase Order Flow</p>
              <h2 className="font-sans font-semibold text-2xl sm:text-3xl text-blue tracking-tight leading-snug mb-3">
                Transparent billing that eliminates checkout bounce.
              </h2>
              <p className="font-sans text-base leading-relaxed text-blue/90">
                Removed checkout friction with upfront pricing breakdowns and simplified payment inputs.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. SECTION 03: SEO LANDING PAGES & MOBILE INTERFACES */}
      <section className="w-full border-b border-blue py-12 sm:py-16 px-6 sm:px-12 bg-white text-blue" id="section-03-mobile">
        <div className="max-w-6xl mx-auto w-full space-y-10">
          <Reveal>
            <div className="max-w-3xl">
              <p className="font-mono text-xs tracking-widest opacity-60 mb-2 uppercase">03 // SEO Pages & Mobile Entry</p>
              <h2 className="font-sans font-semibold text-2xl sm:text-3xl text-blue tracking-tight leading-snug mb-3">
                Fast mobile previews for search visitors.
              </h2>
              <p className="font-sans text-base leading-relaxed text-blue/90">
                Lightweight preview screens confirming identity details before transitioning visitors to the full report.
              </p>
            </div>
          </Reveal>

          <div className="flex flex-col sm:flex-row gap-8 max-w-4xl mx-auto justify-center items-center">
            <Reveal>
              <div className="w-full max-w-sm border border-blue/10 bg-white p-2">
                <img 
                  src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/WSFY-iPhone@2x.jpg?raw=true" 
                  alt="Who's Searching For You Mobile UI" 
                  className="w-full h-auto object-contain mx-auto" 
                  referrerPolicy="no-referrer"
                />
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="w-full max-w-sm border border-blue/10 bg-white p-2">
                <img 
                  src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/ML-mobile-menu@2x.jpg?raw=true" 
                  alt="Reputation Score Mobile Interface" 
                  className="w-full h-auto object-contain mx-auto" 
                  referrerPolicy="no-referrer"
                />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* 6. SECTION 04: RETENTION TRIGGERS */}
      <section className="w-full border-b border-blue py-12 sm:py-16 px-6 sm:px-12 bg-cream text-blue" id="section-04-retention">
        <div className="max-w-6xl mx-auto w-full space-y-6">
          <Reveal>
            <div className="max-w-3xl">
              <p className="font-mono text-xs tracking-widest opacity-60 mb-2 uppercase">04 // Systematic Design & Retention</p>
              <h2 className="font-sans font-semibold text-2xl sm:text-3xl text-blue tracking-tight leading-snug mb-3">
                Consistent styling and active alert loops.
              </h2>
              <p className="font-sans text-base leading-relaxed text-blue/90">
                Unified cross-device components paired with email alerts when search activity updates.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER NAV */}
      <section className="w-full py-24 sm:py-32 px-6 sm:px-12 flex justify-center bg-cream" id="next-project-footer">
        <div className="max-w-6xl mx-auto w-full flex justify-center">
          <Reveal>
            <Link to="/projects/donkey" className="group flex flex-col items-center gap-4 sm:gap-6" id="next-project-link">
              <p className="font-mono text-xs tracking-widest opacity-60 group-hover:opacity-100 group-hover:tracking-[4px] transition-all duration-500 uppercase">
                NEXT PROJECT
              </p>
              <h4 className="font-sans font-semibold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-blue group-hover:scale-[1.02] transition-all duration-500">
                Donkey Donkey AI
              </h4>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
