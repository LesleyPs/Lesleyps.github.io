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
              Designing for the<br />
              <span className="opacity-40">human element</span><br />
              in data & AI.
            </h1>
            <p className="font-mono text-[14px] tracking-[1px] opacity-50">Based in Los Angeles · Senior Product Designer · 15+ Years</p>
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
                  I believe that technology is at its best when it's invisible. My career has been dedicated to taking the most complex systems—AI conversational platforms, enterprise data towers, and massive streaming architectures—and making them feel human.
                </p>
                <p>
                  With over a decade and a half of experience, I actually began my career designing mobile applications, creating native mobile concierge applications for hotels. Since then, I've navigated the evolution of digital interfaces from the early mobile era to the current AI frontier. My work remains a balance of rigorous strategy and intuitive design.
                </p>
                <p>
                  Currently, I'm focused on how we interact with machine learning and how to build trust through transparent, delightful UX.
                </p>
              </div>
            </Reveal>
          </div>
          <div className="xl:col-span-5 flex items-start justify-center">
            <Reveal delay={0.15}>
              <div className="max-w-sm xl:max-w-full w-full">
                {!imageError ? (
                  <img 
                    src="https://github.com/LesleyPs/Lesleyps.github.io/blob/main/intro.hyperesources/Lesley%20Piercefield-1_2x.png?raw=true" 
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
              { role: "Freelance Product Designer", company: "Donkey Donkey AI", years: "2025 — Present", desc: "Designing and scaling multi-modal AI conversational interfaces and system workflows." },
              { role: "UX/UI Product Designer", company: "Clicktripz / Tiki", years: "2018 — 2025", desc: "Leading design and UX for AI conversational platforms and enterprise ad-tech suites." },
              { role: "UX Designer", company: "Sony Crackle", years: "2015 — 2018", desc: "Redesigning the streaming experience across web, mobile, and OTT platforms." },
              { role: "Senior UX Designer", company: "MyLife.com", years: "2012 — 2015", desc: "Focused on identity data visualization and complex user flows." },
              { role: "UX/UI Mobile Application Designer", company: "Freelance", years: "2010 — 2012", desc: "Designing native mobile concierge applications and guest services ecosystems for hotels." }
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
                Product designer based in Los Angeles, California, specializing in multi-modal AI systems, streaming platforms, and complex data environments.
              </p>
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-[10px] uppercase tracking-[2px] opacity-60">
                <span>EST. 2010</span>
                <span>•</span>
                <span>SYSTEMS & UX</span>
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
