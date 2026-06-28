import { motion, useScroll, useTransform } from 'motion/react';
import { Reveal } from '../components/Reveal';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function MyLifeCaseStudy() {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 1000], [0, -400]);

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
              MyLife.com
            </h1>
            <div className="flex flex-wrap gap-x-16 gap-y-8">
              <div>
                <p className="font-mono text-[13px] uppercase tracking-[2px] opacity-60 mb-3">Role</p>
                <p className="font-sans font-medium text-[18px] text-blue">UX Designer</p>
              </div>
              <div>
                <p className="font-mono text-[13px] uppercase tracking-[2px] opacity-60 mb-3">Platform Ecosystem</p>
                <p className="font-sans font-medium text-[18px] text-blue">Web & Mobile Web</p>
              </div>
              <div>
                <p className="font-mono text-[13px] uppercase tracking-[2px] opacity-60 mb-3">Focus</p>
                <p className="font-sans font-medium text-[18px] text-blue">Profile UX, PO Flows, SEO Pages, & Dynamic Emails</p>
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
              src="https://github.com/LesleyPs/Lesleyps.github.io/blob/main/assets/images/Mylife-public-background-report.jpg?raw=true" 
              alt="MyLife Background Report Dashboard" 
              className="w-full h-full object-cover transition-all duration-1000 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 left-0 w-full bg-white border-t border-blue/25 py-8 overflow-hidden">
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
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-8 uppercase">The Mission</p>
            <h2 className="font-sans font-semibold text-[clamp(32px,5vw,64px)] leading-[1.1em] tracking-[-0.04em] text-blue max-w-4xl">
              Designing the profile page, PO flows, SEO landing screens, and dynamic emails to simplify public identity management.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* BIG STATEMENT 2: MAIN PROFILE UX */}
      <section className="w-full border-b border-blue p-[160px_30px]">
        <div className="max-w-6xl">
          <Reveal>
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-8 uppercase">Ecosystem 01 // Main Profile UX</p>
            <h2 className="font-sans font-semibold text-[clamp(32px,5vw,64px)] leading-[1.1em] tracking-[-0.04em] text-blue max-w-4xl">
              The Profile Page: Structuring public records into a clean background report dashboard.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* IMAGE 2: MAIN PROFILE SCREEN */}
      <section className="w-full border-b border-blue overflow-hidden bg-white p-10 sm:p-20">
        <Reveal>
          <div className="border border-blue/10 max-w-5xl mx-auto">
            <img 
              src="https://github.com/LesleyPs/Lesleyps.github.io/blob/main/assets/images/Mylife-public-background-report.jpg?raw=true" 
              alt="MyLife Public Background Report Dashboard" 
              className="w-full h-auto transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
        </Reveal>
      </section>

      {/* BIG STATEMENT 3: PURCHASE FUNNEL */}
      <section className="w-full border-b border-blue p-[160px_30px]">
        <div className="max-w-6xl ml-auto text-right">
          <Reveal direction="left">
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-8 uppercase">Ecosystem 02 // Purchase Order Flow</p>
            <h2 className="font-sans font-semibold text-[clamp(32px,5vw,64px)] leading-[1.1em] tracking-[-0.04em] text-blue max-w-4xl ml-auto">
              The PO Flow: Simplifying billing steps and checkout layout to streamline mobile transactions.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* DESIGN RATIONALE: CONVERSION vs TRANSPARENCY */}
      <section className="w-full border-b border-blue p-[120px_30px] bg-blue/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
              <div className="lg:col-span-5">
                <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-8 uppercase">Methodology & Strategy</p>
                <h3 className="font-sans font-semibold text-[clamp(28px,4vw,42px)] leading-[1.1em] tracking-[-0.03em] text-blue mb-8">
                  Friction & Trust
                </h3>
              </div>
              <div className="lg:col-span-7 flex flex-col justify-center">
                <p className="font-mono text-[18px] leading-[1.7em] text-blue/90 font-medium italic mb-8">
                  "Streamlining form inputs and purchase screens to lower checkout anxiety."
                </p>
                <p className="font-mono text-[16px] leading-[1.8em] text-blue/80">
                  Refining the PO pages with progressive pricing indicators and simplified forms reduced user cognitive load, directly increasing completion rates.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* BIG STATEMENT 4: SEO & ENGAGEMENT EMAIL */}
      <section className="w-full border-b border-blue p-[160px_30px]">
        <div className="max-w-6xl">
          <Reveal>
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-8 uppercase">Ecosystem 03 // SEO Pages & Dynamic Emails</p>
            <h2 className="font-sans font-semibold text-[clamp(32px,5vw,64px)] leading-[1.1em] tracking-[-0.04em] text-blue max-w-4xl">
              SEO & Dynamic Emails: Linking landing layouts with personalized, dynamic emails to drive profile retention.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* IMAGE 3: PHONE LAYOUTS STACKED AND LARGE */}
      <section className="w-full border-b border-blue overflow-hidden bg-white p-12 sm:p-24">
        <div className="flex flex-col gap-24 sm:gap-36 max-w-3xl mx-auto items-center">
          <Reveal>
            <div className="w-full">
              <img 
                src="https://github.com/LesleyPs/Lesleyps.github.io/blob/main/assets/images/WSFY-iPhone@2x.jpg?raw=true" 
                alt="Who's Searching For You Mobile UI" 
                className="w-full h-auto object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
          <Reveal delay={0.1}>
            <div className="w-full">
              <img 
                src="https://github.com/LesleyPs/Lesleyps.github.io/blob/main/assets/images/ML-mobile-menu@2x.jpg?raw=true" 
                alt="Reputation Score Mobile Interface" 
                className="w-full h-auto object-contain mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* SYSTEMIC DESIGN & RETENTION */}
      <section className="w-full border-b border-blue p-[120px_30px] bg-blue/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
              <div className="lg:col-span-5">
                <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-8 uppercase">Cohesive Systems</p>
                <h3 className="font-sans font-semibold text-[clamp(28px,4vw,42px)] leading-[1.1em] tracking-[-0.03em] text-blue mb-8">
                  Ecosystem Alignment
                </h3>
              </div>
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="font-mono text-[16px] leading-[1.8em] text-blue/80 space-y-6">
                  <p>
                    Designing across web, mobile, and email required a cohesive visual language to ensure alignment and brand trust.
                  </p>
                  <ul className="list-disc pl-5 space-y-3 pt-2 text-[15px]">
                    <li><strong className="text-blue">Main Profile UX</strong>: Organized scattered records into clear dashboards.</li>
                    <li><strong className="text-blue">PO Flows</strong>: Streamlined purchase order pages to reduce checkout friction.</li>
                    <li><strong className="text-blue">SEO Pages</strong>: Designed clean, search-optimized entry screens.</li>
                    <li><strong className="text-blue">Dynamic Emails</strong>: Formatted responsive emails powered by personalized user metrics.</li>
                  </ul>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER NAV */}
      <section className="w-full p-[140px_30px] flex justify-center bg-cream">
        <Reveal>
          <Link to="/projects/donkey" className="group flex flex-col items-center gap-6">
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 group-hover:opacity-100 group-hover:tracking-[5px] transition-all duration-500">NEXT PROJECT</p>
            <h4 className="font-sans font-semibold text-[clamp(32px,5vw,64px)] tracking-[-0.04em] text-blue group-hover:scale-[1.02] transition-all duration-500">Donkey Donkey AI</h4>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
