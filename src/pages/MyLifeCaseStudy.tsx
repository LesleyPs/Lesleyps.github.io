import { motion, useScroll, useTransform } from 'motion/react';
import { Reveal } from '../components/Reveal';
import { ArrowLeft, ArrowDown, MousePointerClick } from 'lucide-react';
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
              Turning raw public records into clear identity reports.
            </h2>
            <p className="font-sans text-base leading-relaxed text-blue/90 max-w-3xl">
              Cleaned up MyLife's core background reports, stripped the friction out of checkout, and dialed in mobile entry points for folks landing from search.
            </p>
          </Reveal>
        </div>
      </section>

      {/* 3. SECTION 01: MAIN PROFILE UX */}
      <section className="w-full border-b border-blue py-12 sm:py-16 px-6 sm:px-12 bg-white text-blue" id="section-01-profile">
        <div className="max-w-6xl mx-auto w-full space-y-8">
          <Reveal>
            <div className="max-w-3xl">
              <p className="font-mono text-xs tracking-widest opacity-60 mb-2 uppercase">01 // Main Profile UX & Public Data</p>
              <h2 className="font-sans font-semibold text-2xl sm:text-3xl text-blue tracking-tight leading-snug mb-3">
                Making complicated data easy to digest.
              </h2>
              <p className="font-sans text-base leading-relaxed text-blue/90">
                Public records are messy and scattered all over the place. We took thousands of data points—from criminal court filings to contact history—and organized them into straightforward, easy-to-read cards that don't overwhelm people.
              </p>
            </div>
          </Reveal>

          {/* Scrollable Full-Page Paid Experience */}
          <Reveal delay={0.15}>
            <div className="space-y-3">
              <div className="flex flex-wrap items-center justify-between gap-3 border-b border-blue/20 pb-2">
                <p className="font-mono text-xs uppercase tracking-wider font-bold text-blue">
                  Complete Logged-In Paid Public Record Page
                </p>
                <div className="flex items-center gap-2 font-mono text-xs opacity-70">
                  <MousePointerClick size={14} className="text-blue" />
                  <span>Scroll inside preview to explore</span>
                  <ArrowDown size={14} className="text-blue animate-bounce" />
                </div>
              </div>

              {/* Scrollable Mockup Container */}
              <div className="w-full max-w-4xl mx-auto border border-blue/20 bg-[#f7f7f7] relative overflow-hidden">
                {/* Browser-like clean header bar */}
                <div className="bg-cream border-b border-blue/15 px-4 py-2 flex items-center justify-between select-none">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-blue/20"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-blue/20"></div>
                    <div className="w-2.5 h-2.5 rounded-full bg-blue/20"></div>
                  </div>
                  <p className="font-mono text-[11px] text-blue/70 truncate max-w-md">
                    mylife.com/profile/public-report-paid-view
                  </p>
                  <span className="font-mono text-[10px] uppercase tracking-wider text-blue/60 font-semibold">
                    Scrollable
                  </span>
                </div>

                {/* Scrollable Viewport */}
                <div 
                  className="h-[520px] sm:h-[620px] overflow-y-auto overflow-x-hidden bg-white cursor-ns-resize scroll-smooth"
                  tabIndex={0}
                  aria-label="Scrollable MyLife public page mockup"
                >
                  <img 
                    src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/PS%20Logged%20in%20paid%201220px.png?raw=true" 
                    alt="MyLife Complete Logged In Paid Public Page" 
                    className="w-full max-w-[960px] mx-auto h-auto block"
                    loading="lazy"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Subtle indicator bar at bottom */}
                <div className="bg-cream/90 backdrop-blur-sm border-t border-blue/10 px-4 py-2 flex items-center justify-between text-blue font-mono text-[11px]">
                  <span>Full layout hierarchy (6,450px)</span>
                  <span className="opacity-70">Scroll inside to view the whole page</span>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. SECTION 02: WHO'S SEARCHING FOR YOU */}
      <section className="w-full border-b border-blue py-12 sm:py-16 px-6 sm:px-12 bg-cream text-blue" id="section-02-wsfy">
        <div className="max-w-6xl mx-auto w-full space-y-6">
          <Reveal>
            <div className="max-w-3xl">
              <p className="font-mono text-xs tracking-widest opacity-60 mb-2 uppercase">02 // Who's Searching For You (WSFY)</p>
              <h2 className="font-sans font-semibold text-2xl sm:text-3xl text-blue tracking-tight leading-snug mb-3">
                Actionable identity alerts on mobile.
              </h2>
              <p className="font-sans text-base leading-relaxed text-blue/90">
                Who's Searching For You was easily one of the highest-engagement features on the platform. We built a clean mobile flow that alerts people right when someone views their profile, giving clear insight into who's looking without crossing privacy lines.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="w-full overflow-hidden flex justify-center">
              <img 
                src="/images/wsfy-iphone-zoomed.jpg" 
                alt="Who's Searching For You Mobile Interface - Zoomed Detail" 
                className="w-full max-w-4xl h-auto object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. SECTION 03: QUANTIFYING REPUTATION */}
      <section className="w-full border-b border-blue py-12 sm:py-16 px-6 sm:px-12 bg-white text-blue" id="section-03-reputation">
        <div className="max-w-6xl mx-auto w-full space-y-6">
          <Reveal>
            <div className="max-w-3xl">
              <p className="font-mono text-xs tracking-widest opacity-60 mb-2 uppercase">03 // Quantifying Reputation & Mobile Navigation</p>
              <h2 className="font-sans font-semibold text-2xl sm:text-3xl text-blue tracking-tight leading-snug mb-3">
                Keeping scores clear and actionable.
              </h2>
              <p className="font-sans text-base leading-relaxed text-blue/90">
                We designed the mobile breakdown for MyLife's Reputation Score. The goal was transparency: showing people exactly what went into their number and giving them direct control to manage and update their public records.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="w-full overflow-hidden">
              <img 
                src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/ML-mobile-menu@2x.jpg?raw=true" 
                alt="MyLife Reputation Score Mobile Interface" 
                className="w-full h-auto object-contain"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. SECTION 04: PURCHASE ORDER FLOW & CONVERSION */}
      <section className="w-full border-b border-blue py-12 sm:py-16 px-6 sm:px-12 bg-cream text-blue" id="section-04-checkout">
        <div className="max-w-6xl mx-auto w-full space-y-6">
          <Reveal>
            <div className="max-w-3xl">
              <p className="font-mono text-xs tracking-widest opacity-60 mb-2 uppercase">04 // Purchase Order Flow & Conversion</p>
              <h2 className="font-sans font-semibold text-2xl sm:text-3xl text-blue tracking-tight leading-snug mb-3">
                Simple, straightforward, and timeless.
              </h2>
              <p className="font-sans text-base leading-relaxed text-blue/90">
                Proof that solid UI holds up. Clean inputs, clear pricing tiers, and zero clutter — a checkout flow so effective it remained in production for over a decade.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="w-full overflow-hidden">
              <img 
                src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/join_now_mylife-v1%201.webp?raw=true" 
                alt="MyLife Join Now & Purchase Order Page" 
                className="w-full h-auto object-cover"
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
