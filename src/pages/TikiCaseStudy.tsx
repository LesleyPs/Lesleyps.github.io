import { motion, useScroll, useTransform } from 'motion/react';
import { Reveal } from '../components/Reveal';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function TikiCaseStudy() {
  const { scrollY } = useScroll();
  const x = useTransform(scrollY, [0, 1000], [0, -400]);

  return (
    <div className="pt-[72px] bg-cream min-h-screen">
      {/* HEADER */}
      <section className="w-full border-b border-blue p-[120px_30px_80px]">
        <Reveal>
          <div className="max-w-5xl">
            <Link to="/projects" className="flex items-center gap-2 font-mono text-[13px] tracking-[1px] text-blue mb-12 hover:gap-3 transition-all opacity-70 hover:opacity-100" id="back-to-portfolio-btn">
              <ArrowLeft size={14} /> BACK TO PORTFOLIO
            </Link>
            <h1 className="font-sans font-semibold text-[clamp(45px,8vw,110px)] leading-[0.95em] tracking-[-0.05em] text-blue mb-10" id="case-study-title">
              Tiki (Clicktripz)
            </h1>
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
      </section>

      {/* HERO IMAGE */}
      <section className="w-full border-b border-blue overflow-hidden bg-cream" id="tiki-hero-section">
        <Reveal delay={0.2}>
          <div className="aspect-video w-full relative">
            <img 
              src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Tiki-Tab-Unit-Gallery@2x.webp?raw=true" 
              alt="Tiki Envoy Ecosystem Hero" 
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
                        className="font-mono text-[12px] font-bold tracking-[1.5px] bg-white text-blue border border-blue rounded-full px-6 py-2.5 whitespace-nowrap shadow-sm cursor-pointer inline-block"
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
      <section className="w-full border-b border-blue p-[120px_30px]" id="mission-intro-section">
        <div className="max-w-6xl">
          <Reveal>
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-8 uppercase">The Mission</p>
            <h2 className="font-sans font-semibold text-[clamp(32px,5vw,64px)] leading-[1.1em] tracking-[-0.04em] text-blue max-w-5xl">
              Designing native ad units and widgets to redirect traveler intent and maximize retention.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* ================================================================ */}
      {/* CASE STUDY 01: ENVOY AI */}
      {/* ================================================================ */}

      {/* STATEMENT */}
      <section className="w-full border-b border-blue p-[160px_30px] bg-cream text-blue" id="case-study-01-header">
        <div className="max-w-6xl">
          <Reveal>
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-8 uppercase">Case Study 01 // Generative UX</p>
            <h2 className="font-sans font-semibold text-[clamp(32px,5vw,64px)] leading-[1.1em] tracking-[-0.04em] text-blue max-w-5xl">
              Envoy: A conversational assistant converting consideration into direct commerce.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* VIDEO CONTAINER */}
      <section className="w-full border-b border-blue overflow-hidden bg-cream p-10 sm:p-20 flex justify-center" id="envoy-video-display">
        <div className="max-w-5xl w-full">
          <Reveal>
            <div className="w-full overflow-hidden">
              <video 
                src="https://www.dropbox.com/scl/fi/k2qc37zvtnkhagn35vbjf/tiki-enovy-drp.mp4?rlkey=go6duodfyujwutb6ok0ksk28s&st=uw6nac4f&raw=1"
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-auto object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* DESIGN RATIONALE: ENVOY */}
      <section className="w-full border-b border-blue p-[120px_30px] bg-blue/5" id="case-study-01-description">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
              <div className="lg:col-span-5">
                <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-8 uppercase">A/B Testing Insights</p>
                <h3 className="font-sans font-semibold text-[clamp(28px,4vw,42px)] leading-[1.1em] tracking-[-0.03em] text-blue mb-8">
                  Pills vs. Pure Text
                </h3>
              </div>
              <div className="lg:col-span-7 flex flex-col justify-center">
                <p className="font-mono text-[18px] leading-[1.7em] text-blue/90 font-medium italic mb-8">
                  "Iterative visual tuning and component placement reduced cognitive load and significantly improved traveler conversion rates."
                </p>
                <p className="font-mono text-[16px] leading-[1.8em] text-blue/80">
                  By comparing standard text hyperlinks with custom-engineered, localized recommendation pills, we discovered that surfacing structured rates directly within the chat interface significantly increased user trust and accelerated the booking decision flow.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* IMAGES: VERSION A vs VERSION B */}
      <section className="w-full border-b border-blue overflow-hidden bg-cream p-10 sm:p-20" id="envoy-variants-display">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <Reveal>
            <p className="font-mono text-[12px] opacity-50 uppercase tracking-[2px] mb-3 text-center">Version A // Direct Conversion Map</p>
            <div className="w-full overflow-hidden">
              <img 
                src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/version%20A-1_2x.png?raw=true" 
                alt="Envoy Version A" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="font-mono text-[12px] opacity-50 uppercase tracking-[2px] mb-3 text-center">Version B // Integrated Action Cards</p>
            <div className="w-full overflow-hidden">
              <img 
                src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/version%20B-1_2x.png?raw=true" 
                alt="Envoy Version B" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
        </div>
      </section>      {/* IMAGES: HEATMAP & V3 */}
      <section className="w-full border-b border-blue overflow-hidden bg-cream p-10 sm:p-20" id="envoy-heatmap-display">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <Reveal>
            <p className="font-mono text-[12px] opacity-50 uppercase tracking-[2px] mb-3 text-center">Traveller Interaction Heatmap Analysis</p>
            <div className="w-full overflow-hidden">
              <img 
                src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/tiki-envoy-heatmap@2x.webp?raw=true" 
                alt="Envoy Heatmap Analysis" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="font-mono text-[12px] opacity-50 uppercase tracking-[2px] mb-3 text-center">Option C // High Density Partner Referral Unit</p>
            <div className="w-full overflow-hidden">
              <img 
                src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/V3-%20C-1_2x.png?raw=true" 
                alt="Envoy Version C Layout" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================================================================ */}
      {/* CASE STUDY 02: CONTROL TOWER */}
      {/* ================================================================ */}

      {/* STATEMENT */}
      <section className="w-full border-b border-blue p-[160px_30px] bg-cream" id="case-study-02-header">
        <div className="max-w-6xl ml-auto text-right">
          <Reveal direction="left">
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-8 uppercase">Case Study 02 // Internal Optimization Suite</p>
            <h2 className="font-sans font-semibold text-[clamp(32px,5vw,64px)] leading-[1.1em] tracking-[-0.04em] text-blue max-w-5xl ml-auto">
              Control Tower: Streamlining internal campaign setup and yield management.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* IMAGE CONTAINER 1 */}
      <section className="w-full border-b border-blue overflow-hidden bg-cream p-10 sm:p-20" id="control-tower-mapping-display">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="font-mono text-[12px] opacity-50 uppercase tracking-[2px] mb-4 text-center">Programmatic Partner Structure Mapping</p>
            <div className="w-full overflow-hidden">
              <img 
                src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Tiki-Organization_2x.png?raw=true" 
                alt="Tiki Control Tower Partner Setup Mapping" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* DESIGN RATIONALE: CONTROL TOWER */}
      <section className="w-full border-b border-blue p-[120px_30px] bg-blue/5" id="case-study-02-description">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
              <div className="lg:col-span-5">
                <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-8 uppercase">Architecture Shift</p>
                <h3 className="font-sans font-semibold text-[clamp(28px,4vw,42px)] leading-[1.1em] tracking-[-0.03em] text-blue mb-8">
                  Contextual Commands
                </h3>
              </div>
              <div className="lg:col-span-7 flex flex-col justify-center">
                <p className="font-mono text-[18px] leading-[1.7em] text-blue/90 font-medium italic mb-8">
                  "Transitioning frequency configuration forward as contextual prompts eliminated operational friction and simplified high-frequency tasks."
                </p>
                <p className="font-mono text-[16px] leading-[1.8em] text-blue/80">
                  Instead of routing platform managers through deeply nested setting panels, we surfaced key interactive limits inside on-spot overlays. This architectural shift maximized spatial awareness, speeded up campaign optimization, and virtually eliminated manual input error.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* IMAGES: COMPARISON V1 vs V2 */}
      <section className="w-full border-b border-blue overflow-hidden bg-cream p-10 sm:p-20" id="control-tower-comparisons">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <Reveal>
            <p className="font-mono text-[12px] opacity-50 uppercase tracking-[2px] mb-3 text-center">V1 Legacy: Deeply Nested Setting Form</p>
            <div className="w-full overflow-hidden">
              <img 
                src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Tiki-overlay-media-setting@2x.png?raw=true" 
                alt="Control Tower V1 Overlay" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="font-mono text-[12px] opacity-50 uppercase tracking-[2px] mb-3 text-center">V2 Unified: Dynamic On-Spot Controls</p>
            <div className="w-full overflow-hidden">
              <img 
                src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Tiki-overlay-media-setting-v2@2x.png?raw=true" 
                alt="Control Tower V2 Overlay" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* METRICS SHOWCASE */}
      <section className="w-full border-b border-blue overflow-hidden bg-cream p-10 sm:p-20" id="control-tower-metrics">
        <div className="max-w-5xl mx-auto">
          <Reveal>
            <p className="font-mono text-[12px] opacity-50 uppercase tracking-[2px] mb-4 text-center">Yield Analysis & High-Fidelity Performance Dashboards</p>
            <div className="w-full overflow-hidden">
              <img 
                src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Tiki-control-tower-metrics_2x.png?raw=true" 
                alt="Control Tower Metrics Screen" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ================================================================ */}
      {/* CASE STUDY 03: NATIVE MEDIA UNITS */}
      {/* ================================================================ */}

      {/* STATEMENT */}
      <section className="w-full border-b border-blue p-[160px_30px] bg-cream text-blue" id="case-study-03-header">
        <div className="max-w-6xl">
          <Reveal>
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-8 uppercase">Case Study 03 // Ad Tech & Retention Placements</p>
            <h2 className="font-sans font-semibold text-[clamp(32px,5vw,64px)] leading-[1.1em] tracking-[-0.04em] text-blue max-w-5xl">
              The Tab Unit: Redirecting traveler intent and boosting retention through native ad placements.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* VIDEO CONTAINER */}
      <section className="w-full border-b border-blue overflow-hidden bg-cream p-10 sm:p-20 flex justify-center" id="media-unit-video-display">
        <div className="max-w-5xl w-full">
          <Reveal>
            <div className="w-full overflow-hidden">
              <video 
                src="https://www.dropbox.com/scl/fi/55l3fbya7v7owwbt958vc/Tiki-Tab-Unit-example.mp4?rlkey=tndihx2wlatani8cded664jbw&st=3w66eiuc&raw=1"
                autoPlay 
                loop 
                muted 
                playsInline 
                className="w-full h-auto object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* DESIGN RATIONALE: TAB UNITS */}
      <section className="w-full border-b border-blue p-[120px_30px] bg-blue/5" id="case-study-03-description">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
              <div className="lg:col-span-5">
                <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-8 uppercase">Performance Optimization</p>
                <h3 className="font-sans font-semibold text-[clamp(28px,4vw,42px)] leading-[1.1em] tracking-[-0.03em] text-blue mb-8">
                  Evolving Placements
                </h3>
              </div>
              <div className="lg:col-span-7 flex flex-col justify-center">
                <p className="font-mono text-[18px] leading-[1.7em] text-blue/90 font-medium italic mb-8">
                  "Redesigning spatial limits to deliver contextual, high-value partner deals inside a compact, unified utility format."
                </p>
                <p className="font-mono text-[16px] leading-[1.8em] text-blue/80">
                  Replacing legacy chaotic display banners with a single, highly integrated Tab Unit allowed for multi-destination contextual offerings. This elegant layout provided clear conversion shortcuts for intent-driven readers without degrading the core editorial experience.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* IMAGES: BEFORE VS AFTER TAB */}
      <section className="w-full border-b border-blue overflow-hidden bg-cream p-10 sm:p-20" id="tab-comparisons">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
          <Reveal>
            <p className="font-mono text-[12px] opacity-50 uppercase tracking-[2px] mb-3 text-center">Legacy Tab Unit Format</p>
            <div className="w-full overflow-hidden">
              <img 
                src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/old-tab-unit@2x.png?raw=true" 
                alt="Old Tab Unit" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="font-mono text-[12px] opacity-50 uppercase tracking-[2px] mb-3 text-center">Optimized High-Yield Tab Unit</p>
            <div className="w-full overflow-hidden">
              <img 
                src="https://github.com/LesleyPs/old-protflio/blob/main/assets/Tiki_tab-unit-max@2x.webp?raw=true" 
                alt="Maximized Tab Unit" 
                className="w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* IMAGES: INTEGRATIONS */}
      <section className="w-full border-b border-blue overflow-hidden bg-cream p-[80px_30px]" id="tab-partners">
        <div className="max-w-5xl mx-auto space-y-16">
          <Reveal>
            <p className="font-mono text-[12px] opacity-50 uppercase tracking-[2px] mb-4 text-center">Expedia Live Partner Unit</p>
            <div className="w-full overflow-hidden">
              <img 
                src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/expedia-media-unit.webp?raw=true" 
                alt="Expedia integration view" 
                className="w-full h-auto mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>

          <Reveal>
            <p className="font-mono text-[12px] opacity-50 uppercase tracking-[2px] mb-4 text-center">Wetter Multi-Destination Campaign Unit</p>
            <div className="w-full overflow-hidden">
              <img 
                src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/wetter-travel@2x.webp?raw=true" 
                alt="Wetter Multi-Destination integration view" 
                className="w-full h-auto mx-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>

          <Reveal>
            <p className="font-mono text-[12px] opacity-50 uppercase tracking-[2px] mb-4 text-center">AccuWeather iOS Native Mobile App Unit</p>
            <div className="w-full overflow-hidden relative">
              <img 
                src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/accuweather_2x.jpg?raw=true" 
                alt="AccuWeather iOS native mobile unit view" 
                className="w-full h-auto mx-auto scale-[1.02] origin-left"
                referrerPolicy="no-referrer"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* FOOTER NAV */}
      <section className="w-full p-[140px_30px] flex justify-center bg-cream border-t border-blue" id="next-project-footer">
        <Reveal>
          <Link to="/projects/mylife" className="group flex flex-col items-center gap-6" id="next-project-link">
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 group-hover:opacity-100 group-hover:tracking-[5px] transition-all duration-500">NEXT PROJECT</p>
            <h4 className="font-sans font-semibold text-[clamp(32px,5vw,64px)] tracking-[-0.04em] text-blue group-hover:scale-[1.02] transition-all duration-500">MyLife.com</h4>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
