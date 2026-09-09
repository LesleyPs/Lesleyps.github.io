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
                className="flex items-center gap-2 font-mono text-[13px] tracking-[1px] text-blue mb-12 hover:gap-3 transition-all opacity-70 hover:opacity-100"
                id="back-to-portfolio-btn"
              >
                <ArrowLeft size={14} /> BACK TO PORTFOLIO
              </Link>

              <h1 className="font-sans font-semibold text-[clamp(45px,8vw,110px)] leading-[0.95em] tracking-normal text-blue mb-10" id="case-study-title">
                MyLife.com
              </h1>

              {/* Metadata Grid */}
              <div className="flex flex-wrap gap-x-16 gap-y-8" id="case-metadata-grid">
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
        </div>
      </section>

      {/* HERO IMAGE SECTION */}
      <section className="w-full border-b border-blue overflow-hidden bg-white" id="mylife-hero-section">
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
              Structuring public identity management and streamlining high-volume purchase flows.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="space-y-2">
                <p className="font-mono text-[12px] uppercase tracking-[2px] font-bold text-blue">01 // Background Report UX</p>
                <p className="font-sans text-[16px] leading-[1.6em] text-blue font-medium">
                  Transformed complex public records into an intuitive, modular personal reputation dashboard.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-mono text-[12px] uppercase tracking-[2px] font-bold text-blue">02 // PO Flow Optimization</p>
                <p className="font-sans text-[16px] leading-[1.6em] text-blue font-medium">
                  Simplified checkout screens and billing steps to lower transaction anxiety and drop-off.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-mono text-[12px] uppercase tracking-[2px] font-bold text-blue">03 // Dynamic Email Retention</p>
                <p className="font-sans text-[16px] leading-[1.6em] text-blue font-medium">
                  Personalized, event-driven notification templates driving sustained member re-engagement.
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
              Transforming complex public records into actionable personal dashboards.
            </h2>
            <div className="font-sans text-[17px] sm:text-[18px] leading-[1.7em] text-blue max-w-4xl space-y-4 font-medium">
              <p>
                MyLife aggregates billions of public records to help individuals monitor, manage, and protect their online reputation. The platform needed to balance extensive data density with consumer-friendly clarity across high-traffic desktop and mobile touchpoints.
              </p>
              <p>
                As UX Designer, I redesigned core customer journeys—including the flagship profile dashboard, the high-conversion purchase order funnel, SEO landing funnels, and dynamic lifecycle emails.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 4. SECTION 02: MAIN PROFILE UX */}
      <section className="w-full border-b border-blue p-[100px_30px] bg-cream text-blue" id="section-02-profile-header">
        <div className="max-w-6xl mx-auto w-full">
          <Reveal>
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-6 uppercase">02. Main Profile UX</p>
            <h2 className="font-sans font-semibold text-[clamp(30px,4.5vw,56px)] leading-[1.12em] tracking-normal text-blue w-[880px] max-w-full mb-8">
              Structuring multi-source public records into digestible reports.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans text-[16px] leading-[1.65em] text-blue font-medium">
              <div className="space-y-2">
                <p className="font-mono text-[12px] uppercase tracking-[2px] font-bold text-blue">The Data Challenge</p>
                <p>
                  Unstructured public records overwhelmed consumers with disparate data points and unclear privacy indicators.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-mono text-[12px] uppercase tracking-[2px] font-bold text-blue">The Modular Solution</p>
                <p>
                  Created a modular card system that groups contact info, court records, and reputation scores into intuitive visual sections.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* SECTION 02: MAIN PROFILE SHOWCASE */}
      <section className="w-full border-b border-blue overflow-hidden bg-white p-6 sm:p-12 md:p-[80px_30px]" id="section-02-image">
        <div className="w-full max-w-7xl mx-auto">
          <Reveal>
            <div className="border border-blue/10 w-full overflow-hidden">
              <img 
                src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Mylife-public-background-report.jpg?raw=true" 
                alt="MyLife Public Background Report Dashboard" 
                className="w-full h-auto transition-all duration-1000"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* 5. SECTION 03: PURCHASE ORDER FLOW & CONVERSION */}
      <section className="w-full border-b border-blue p-[100px_30px] bg-cream text-blue" id="section-03-po-header">
        <div className="max-w-6xl mx-auto w-full">
          <Reveal>
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-6 uppercase">03. Purchase Order Flow</p>
            <h2 className="font-sans font-semibold text-[clamp(30px,4.5vw,56px)] leading-[1.12em] tracking-normal text-blue w-[880px] max-w-full mb-8">
              Reducing checkout friction through transparent billing steps.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans text-[16px] leading-[1.65em] text-blue font-medium">
              <div className="space-y-2">
                <p className="font-mono text-[12px] uppercase tracking-[2px] font-bold text-blue">Checkout Anxiety</p>
                <p>
                  Unclear subscription disclosures and dense checkout forms caused hesitation and high cart abandonment on mobile.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-mono text-[12px] uppercase tracking-[2px] font-bold text-blue">Transparent Funnel</p>
                <p>
                  Streamlined checkout steps with prominent security badges, clear recurring cost breakdowns, and simplified input groups.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* 6. SECTION 04: SEO LANDING PAGES & MOBILE INTERFACES */}
      <section className="w-full border-b border-blue p-[100px_30px] bg-cream text-blue" id="section-04-mobile-header">
        <div className="max-w-6xl mx-auto w-full">
          <Reveal>
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-6 uppercase">04. SEO Pages & Mobile UX</p>
            <h2 className="font-sans font-semibold text-[clamp(30px,4.5vw,56px)] leading-[1.12em] tracking-normal text-blue w-[880px] max-w-full mb-8">
              Fast mobile acquisition screens tailored for search traffic.
            </h2>
            <p className="font-sans text-[17px] sm:text-[18px] leading-[1.7em] text-blue max-w-4xl font-medium">
              Designed lightweight mobile entry points for organic search traffic—presenting instant teaser previews that validate search intent and encourage profile lookup.
            </p>
          </Reveal>
        </div>
      </section>

      {/* SECTION 04: PHONE SHOWCASE */}
      <section className="w-full border-b border-blue overflow-hidden bg-white p-6 sm:p-12 md:p-[80px_30px]" id="section-04-image">
        <div className="w-full max-w-7xl mx-auto">
          <div className="flex flex-col gap-20 sm:gap-28 max-w-4xl mx-auto items-center">
            <Reveal>
              <div className="w-full">
                <img 
                  src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/WSFY-iPhone@2x.jpg?raw=true" 
                  alt="Who's Searching For You Mobile UI" 
                  className="w-full h-auto object-contain mx-auto"
                  referrerPolicy="no-referrer"
                />
              </div>
            </Reveal>
            <Reveal delay={0.15}>
              <div className="w-full">
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

      {/* 7. SECTION 05: ECOSYSTEM ALIGNMENT & DYNAMIC EMAILS */}
      <section className="w-full border-b border-blue p-[100px_30px] bg-cream text-blue" id="section-05-ecosystem-header">
        <div className="max-w-6xl mx-auto w-full">
          <Reveal>
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-6 uppercase">05. Systemic Design & Retention</p>
            <h2 className="font-sans font-semibold text-[clamp(30px,4.5vw,56px)] leading-[1.12em] tracking-normal text-blue w-[880px] max-w-full mb-8">
              A unified visual language linking search, checkout, and email alerts.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 font-sans text-[16px] leading-[1.65em] text-blue font-medium">
              <div className="space-y-2">
                <p className="font-mono text-[12px] uppercase tracking-[2px] font-bold text-blue">Cross-Channel Continuity</p>
                <p>
                  Created consistent visual cues and typography across search landing pages, profile cards, and account billing panels.
                </p>
              </div>
              <div className="space-y-2">
                <p className="font-mono text-[12px] uppercase tracking-[2px] font-bold text-blue">Dynamic Lifecycle Triggers</p>
                <p>
                  Engineered personalized email templates alerting subscribers to new search hits and score updates to drive monthly retention.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER NAV */}
      <section className="w-full p-[140px_30px] flex justify-center bg-cream" id="next-project-footer">
        <div className="max-w-6xl mx-auto w-full flex justify-center">
          <Reveal>
            <Link to="/projects/control-tower" className="group flex flex-col items-center gap-6" id="next-project-link">
              <p className="font-mono text-[13px] tracking-[3px] opacity-60 group-hover:opacity-100 group-hover:tracking-[5px] transition-all duration-500">NEXT PROJECT</p>
              <h4 className="font-sans font-semibold text-[clamp(32px,5vw,64px)] tracking-normal text-blue group-hover:scale-[1.02] transition-all duration-500">Control Tower</h4>
            </Link>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
