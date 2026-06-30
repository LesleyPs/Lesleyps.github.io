import { useState } from 'react';
import { Reveal } from '../components/Reveal';
import { motion } from 'motion/react';

export default function About() {
  const [imageError, setImageError] = useState(false);

  return (
    <div className="pt-[72px]">
      {/* HEADER SECTION */}
      <section className="w-full border-b border-blue p-[100px_30px_60px]">
        <Reveal>
          <div className="max-w-4xl">
            <h1 className="font-sans font-semibold text-[clamp(36px,5.8vw,74px)] leading-[1.18em] tracking-[clamp(-2px,-0.3vw,-4px)] text-blue mb-10">
              Shaping user intent<br />
              <span className="opacity-40">through conversion &</span><br />
              interface architecture.
            </h1>
            <p className="font-mono text-[14px] tracking-[1px] opacity-50">Based in Los Angeles · Senior Product Designer · AdTech & Intent-Driven UX</p>
          </div>
        </Reveal>
      </section>

      {/* BIO SECTION */}
      <section className="flex flex-col lg:flex-row w-full border-b border-blue">
        <div className="w-full lg:w-[305px] shrink-0 border-b lg:border-b-0 lg:border-r border-blue p-[70px_30px_40px]">
          <Reveal direction="left">
            <h3 className="font-sans font-semibold text-[19px] tracking-[-0.7px] leading-[1.4em]">The Story:</h3>
          </Reveal>
        </div>
        <div className="flex-1 p-[70px_50px_70px_36px] grid grid-cols-1 xl:grid-cols-12 gap-12">
          <div className="xl:col-span-7 flex flex-col justify-start">
            <Reveal>
              <div className="space-y-8 font-sans text-[clamp(18px,2vw,24px)] leading-[1.4em] tracking-[-0.5px] text-blue">
                <p>
                  I’m a Senior Product Designer with a background in AdTech, conversion optimization, and user interface design. My primary expertise is designing native utility interfaces that shape user intent, capture exit-intent traffic, and resolve real-time user friction.
                </p>
                <p>
                  Lately, I’ve been focusing on conversational layouts, partnering with an engineering team to design and ship Donkey Donkey AI—a travel-focused conversational tool. I leverage advanced Figma proficiency for team collaboration and use Google AI Studio to rapidly build functional prototypes and finished application builds.
                </p>
                <p>
                  To expand my toolkit further, I am also completing a certification in Data Analytics, adding data visualization and analytics directly to my interface design skillset.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="xl:col-span-5 flex items-start justify-center">
            <Reveal delay={0.15}>
              <div className="max-w-sm xl:max-w-full w-full">
                {!imageError ? (
                  <img 
                    src="https://github.com/LesleyPs/old-protflio/blob/main/intro.hyperesources/Lesley%20Piercefield-1_2x.png?raw=true" 
                    alt="Lesley Piercefield"
                    className="w-full h-auto object-contain transition-all duration-500 hover:scale-[1.01]"
                    onError={() => setImageError(true)}
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="aspect-[4/5] bg-cream/30 border border-dashed border-blue/30 flex flex-col items-center justify-center p-8 text-center min-h-[320px]">
                    <p className="font-mono text-[11px] uppercase tracking-[2.5px] text-blue/40 mb-3">Profile Photo Placeholder</p>
                    <p className="font-mono text-[12px] leading-[1.7em] text-blue/70">
                      Drag & drop your photo as <strong className="text-blue">profile.jpg</strong> inside the <strong className="text-blue">public</strong> folder, or attach it in this chat so I can set it up for you!
                    </p>
                  </div>
                )}
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* EXPERIENCE SECTION */}
      <section className="flex flex-col lg:flex-row w-full border-b border-blue">
        <div className="w-full lg:w-[305px] shrink-0 border-b lg:border-b-0 lg:border-r border-blue p-[70px_30px_40px]">
          <Reveal direction="left">
            <h3 className="font-sans font-semibold text-[19px] tracking-[-0.7px] leading-[1.4em]">Experience:</h3>
          </Reveal>
        </div>
        <div className="flex-1 p-[70px_50px_70px_36px]">
          <div className="space-y-12">
            {[
              { role: "Lead Product Designer", company: "Donkey Donkey AI", years: "Jan 2026 — Present", desc: "Designing a travel-focused conversational tool from early-stage concept to launch. Crafting chat interface layouts to handle complex, real-time conversation logic and utilizing Google AI Studio to build functional prototypes to streamline engineering cycles." },
              { role: "Sr. Product Designer — UI/UX", company: "Tiki (formerly Clicktripz)", years: "May 2017 — Jan 2025", desc: "Led the end-to-end design lifecycle for 7+ years through multiple company pivots. Created high-performing 'Native Utility' interfaces to capture exit-intent traffic, simplified complex travel data engines, and directed design execution within distributed teams." },
              { role: "Senior UX Designer", company: "Sony Crackle", years: "Oct 2016 — Feb 2017", desc: "Redesigned critical sign-up and VOD playback flows to reduce user friction and maximize user acquisition, scaling unified viewing experiences across 20+ platforms (Roku, Apple TV, Web) for a global audience." },
              { role: "Senior UX Designer", company: "MyLife.com", years: "Jun 2012 — Sep 2016", desc: "Transformed dense, high-stakes data sets into actionable insights and intuitive layouts to improve user trust, leading design of core product features in a complex, data-heavy environment." },
              { role: "Mobile Application Designer", company: "Freelance Work", years: "May 2011 — Feb 2012", desc: "Designed mobile concierge applications for hotels. Conducted rapid wireframing, designed visual interfaces, and owned the creation of all product assets for App Store submission." }
            ].map((job, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group border-b border-blue/20 pb-8 last:border-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-4">
                    <h4 className="font-sans font-semibold text-[24px] tracking-[-0.8px]">{job.role}</h4>
                    <span className="font-mono text-[12px] tracking-[1px] opacity-50">{job.years}</span>
                  </div>
                  <p className="font-sans font-semibold text-[18px] text-blue/80 mb-4">{job.company}</p>
                  <p className="font-mono text-[13px] leading-[1.8em] opacity-70 max-w-xl">{job.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* EDUCATION & CREDENTIALS SECTION */}
      <section className="flex flex-col lg:flex-row w-full border-b border-blue">
        <div className="w-full lg:w-[305px] shrink-0 border-b lg:border-b-0 lg:border-r border-blue p-[70px_30px_40px]">
          <Reveal direction="left">
            <h3 className="font-sans font-semibold text-[19px] tracking-[-0.7px] leading-[1.4em]">Education:</h3>
          </Reveal>
        </div>
        <div className="flex-1 p-[70px_50px_70px_36px]">
          <div className="space-y-12">
            {[
              { degree: "Certification in Data Analytics (Specializing in Data Visualization)", school: "Continuing Education", years: "In Progress", desc: "Developing advanced competencies in data analytics, statistical modeling, and interactive data visualization techniques (D3, Python, and modern front-end integration) to bridge the gap between complex quantitative datasets and highly intuitive user interfaces." },
              { degree: "Certificate, Design Communication Arts", school: "UCLA Extension", years: "March 2008 — March 2010", desc: "Specialized study in design systems, visual communication, typography, and interactive design methodologies." },
              { degree: "BFA, Fashion Marketing", school: "American InterContinental University", years: "Graduated", desc: "Deep study of consumer psychology, branding strategy, trend analysis, and market placement foundations." }
            ].map((edu, i) => (
              <Reveal key={i} delay={i * 0.1}>
                <div className="group border-b border-blue/20 pb-8 last:border-0">
                  <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-4">
                    <h4 className="font-sans font-semibold text-[24px] tracking-[-0.8px]">{edu.degree}</h4>
                    <span className="font-mono text-[12px] tracking-[1px] opacity-50">{edu.years}</span>
                  </div>
                  <p className="font-sans font-semibold text-[18px] text-blue/80 mb-4">{edu.school}</p>
                  <p className="font-mono text-[13px] leading-[1.8em] opacity-70 max-w-xl">{edu.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* IDENTITY WORDMARK SECTION */}
      <section className="flex flex-col lg:flex-row w-full border-b border-blue bg-white">
        <div className="w-full lg:w-[305px] shrink-0 border-b lg:border-b-0 lg:border-r border-blue p-[70px_30px_40px]">
          <Reveal direction="left">
            <h3 className="font-sans font-semibold text-[19px] tracking-[-0.7px] leading-[1.4em]">Identity:</h3>
          </Reveal>
        </div>
        <div className="flex-1 p-[70px_50px_70px_36px] flex flex-col md:flex-row justify-between items-baseline gap-12">
          <Reveal>
            <div className="flex flex-col">
              <span className="font-mono text-[11px] uppercase tracking-[3px] text-blue/40 mb-2">Portfolio Signature</span>
              <h2 className="font-sans font-semibold text-[clamp(44px,8vw,96px)] leading-[0.85em] tracking-[-0.05em] text-blue">
                Lesley<br />Piercefield
              </h2>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="max-w-md font-mono text-[13px] leading-[1.8em] text-blue/70">
              <p className="mb-6 border-t border-blue/20 pt-6">
                Senior Product Designer based in Los Angeles, California, specializing in native utility interfaces, intent-driven UX, conversion optimization, and AdTech.
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] uppercase tracking-[2px] opacity-60">
                <span>EST. 2010</span>
                <span>•</span>
                <span>INTENT & UTILITY</span>
                <span>•</span>
                <span>LA / CA</span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </div>
  );
}
