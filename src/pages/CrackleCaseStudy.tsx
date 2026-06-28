import { motion, useScroll, useTransform } from 'motion/react';
import { Reveal } from '../components/Reveal';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function CrackleCaseStudy() {
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
              Sony Crackle
            </h1>
            <div className="flex flex-wrap gap-x-16 gap-y-8">
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
                <p className="font-sans font-medium text-[18px] text-blue">Cross-Device Continuity</p>
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
              src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Crackle-welcome-screen.png?raw=true" 
              alt="Sony Crackle Welcome Screen" 
              className="w-full h-full object-cover transition-all duration-1000 ease-out"
              referrerPolicy="no-referrer"
            />
            <div className="absolute bottom-0 left-0 w-full bg-white border-t border-blue/25 py-8 overflow-hidden">
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
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-8 uppercase">The Experience</p>
            <h2 className="font-sans font-semibold text-[clamp(32px,5vw,64px)] leading-[1.1em] tracking-[-0.04em] text-blue max-w-5xl">
              From loader to the 10-foot screen: designing touchpoints that "Unlock" value.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* BIG STATEMENT 2: TV PAGE */}
      <section className="w-full border-b border-blue p-[160px_30px]">
        <div className="max-w-6xl ml-auto text-right">
          <Reveal direction="left">
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-8 uppercase">Content Discovery</p>
            <h2 className="font-sans font-semibold text-[clamp(32px,5vw,64px)] leading-[1.1em] tracking-[-0.04em] text-blue max-w-5xl ml-auto">
              The TV Hub: A comprehensive listing designed to surface a vast variety of available shows.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* IMAGE 2: TV PAGE */}
      <section className="w-full border-b border-blue overflow-hidden bg-white p-10 sm:p-20">
        <Reveal>
          <div className="border border-blue/10">
            <img 
              src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Crackle-Xbox-TV-Screen.png?raw=true" 
              alt="TV Page Show Listings" 
              className="w-full h-auto transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
        </Reveal>
      </section>

      {/* BIG STATEMENT 3: SHOW PAGE */}
      <section className="w-full border-b border-blue p-[160px_30px]">
        <div className="max-w-6xl">
          <Reveal>
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-8 uppercase">Conversion Strategy</p>
            <h2 className="font-sans font-semibold text-[clamp(32px,5vw,64px)] leading-[1.1em] tracking-[-0.04em] text-blue max-w-5xl">
              The Show Page: Integrating sign-up prompts naturally within the content engagement flow.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* DESIGN RATIONALE: UNLOCK VS SIGN UP */}
      <section className="w-full border-b border-blue p-[120px_30px] bg-blue/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
              <div className="lg:col-span-5">
                <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-8 uppercase">Micro-Copy Strategy</p>
                <h3 className="font-sans font-semibold text-[clamp(28px,4vw,42px)] leading-[1.1em] tracking-[-0.03em] text-blue mb-8">
                  "Unlock" vs. "Sign Up"
                </h3>
              </div>
              <div className="lg:col-span-7 flex flex-col justify-center">
                <p className="font-mono text-[18px] leading-[1.7em] text-blue/90 font-medium italic mb-8">
                  "Recontextualizing standard conversion milestones as value-driven accomplishments to minimize registration abandonment."
                </p>
                <p className="font-mono text-[16px] leading-[1.8em] text-blue/80">
                  While <span className="underline decoration-blue/30 underline-offset-4">"Sign Up"</span> signals effort and data-sharing friction to users, <span className="text-blue font-bold">"Unlock"</span> emphasizes immediate access to desired media. Reframing this functional gate as a rewarding milestone resulted in smoother onboarding and higher intent activation without altering the technical back-end system.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* IMAGE 3: SHOW PAGE */}
      <section className="w-full border-b border-blue overflow-hidden bg-white p-10 sm:p-20">
        <Reveal>
          <div className="border border-blue/10">
            <img 
              src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Carckle-show-page-touchpoint.webp?raw=true" 
              alt="Show Page with Sign-up Prompt" 
              className="w-full h-auto transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
        </Reveal>
      </section>

      {/* BIG STATEMENT 4: UNIQUE FEATURE */}
      <section className="w-full border-b border-blue p-[160px_30px]">
        <div className="max-w-6xl ml-auto text-right">
          <Reveal direction="left">
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-8 uppercase">Unique Experience</p>
            <h2 className="font-sans font-semibold text-[clamp(32px,5vw,64px)] leading-[1.1em] tracking-[-0.04em] text-blue max-w-5xl ml-auto">
              The Pause-to-Account bridge: Solving the temporary state challenge for guest users.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* IMAGE 4: UNIQUE FEATURE */}
      <section className="w-full border-b border-blue overflow-hidden bg-white p-10 sm:p-20">
        <Reveal>
          <div className="border border-blue/10">
            <img 
              src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Crackle-pluse-signup-screen.png?raw=true&v=2" 
              alt="Pause Position Account Connection Feature" 
              className="w-full h-auto transition-all duration-1000"
              referrerPolicy="no-referrer"
            />
          </div>
        </Reveal>
      </section>

      {/* BIG STATEMENT 5: D-PAD */}
      <section className="w-full border-b border-blue p-[160px_30px]">
        <div className="max-w-6xl">
          <Reveal>
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-8 uppercase">10-Foot Navigation</p>
            <h2 className="font-sans font-semibold text-[clamp(32px,5vw,64px)] leading-[1.1em] tracking-[-0.04em] text-blue max-w-5xl">
              Precision D-pad mapping: Effortless navigation for the lean-back experience.
            </h2>
          </Reveal>
        </div>
      </section>

      {/* IMAGE 5: D-PAD MAP */}
      <section className="w-full border-b border-blue p-[40px] bg-white">
        <Reveal>
          <div className="border border-blue/10 overflow-hidden">
            <img 
              src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Crackle-roku-sign-up-flow.png?raw=true" 
              alt="Roku D-pad Mapping and Navigation Flow" 
              className="w-full h-auto"
              referrerPolicy="no-referrer"
            />
          </div>
        </Reveal>
      </section>

      {/* SYSTEMIC DESIGN & MAINTENANCE */}
      <section className="w-full border-b border-blue p-[120px_30px] bg-blue/5">
        <div className="max-w-6xl mx-auto">
          <Reveal>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
              <div className="lg:col-span-5">
                <p className="font-mono text-[13px] tracking-[3px] opacity-60 mb-8 uppercase">Ecosystem Architecture</p>
                <h3 className="font-sans font-semibold text-[clamp(28px,4vw,42px)] leading-[1.1em] tracking-[-0.03em] text-blue mb-8">
                  Bridging the gap between touch, click, and remote.
                </h3>
              </div>
              <div className="lg:col-span-7 flex flex-col justify-center">
                <div className="font-mono text-[16px] leading-[1.8em] text-blue/80 space-y-6">
                  <p>
                    Designing for a premium streaming landscape means architecting for a highly fragmented device footprint. I focused on maintaining complete brand and cognitive alignment whether a traveler is browsing on a 5-inch touchscreen or a 75-inch smart TV.
                  </p>
                  <ul className="list-disc pl-5 space-y-3 pt-2 text-[15px]">
                    <li><strong className="text-blue">Lean-Back Ergonomics</strong>: Designed precise D-pad focus states, optimized contrast ratios, and structured layout rules for 10-foot OTT user journeys.</li>
                    <li><strong className="text-blue">Dynamic Scaling</strong>: Maintained a cohesive design system that translated smoothly across Web, iOS, Android, Roku, and gaming environments.</li>
                    <li><strong className="text-blue">State Persistence</strong>: Ensured seamless playback handover and interface continuity during cross-platform user sessions.</li>
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
          <Link to="/projects" className="group flex flex-col items-center gap-6">
            <p className="font-mono text-[13px] tracking-[3px] opacity-60 group-hover:opacity-100 group-hover:tracking-[5px] transition-all duration-500">NEXT PROJECT</p>
            <h4 className="font-sans font-semibold text-[clamp(32px,5vw,64px)] tracking-[-0.04em] text-blue group-hover:scale-[1.02] transition-all duration-500">MyLife.com</h4>
          </Link>
        </Reveal>
      </section>
    </div>
  );
}
