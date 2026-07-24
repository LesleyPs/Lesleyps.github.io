import { motion, AnimatePresence } from 'motion/react';
import { X, Clock, ArrowUpRight, BookOpen, Share2, Check, Sparkles, CheckCircle2, Zap, Rocket } from 'lucide-react';
import React, { useEffect, useState, UIEvent } from 'react';

const LESLEY_PHOTO_URL = 'https://github.com/LesleyPs/old-protflio/blob/main/intro.hyperesources/Lesley%20Piercefield-1_2x.png?raw=true';

interface DonkeyArticleOverlayProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DonkeyArticleOverlay({ isOpen, onClose }: DonkeyArticleOverlayProps) {
  const [copied, setCopied] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    const target = e.currentTarget;
    const totalHeight = target.scrollHeight - target.clientHeight;
    if (totalHeight > 0) {
      setScrollProgress((target.scrollTop / totalHeight) * 100);
    }
  };

  const handleCopyLink = () => {
    navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-0 sm:p-4 md:p-6 bg-blue/40 backdrop-blur-md">
          {/* Backdrop Click */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/40"
          />

          {/* Modal Content Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full h-full max-w-4xl max-h-[92vh] bg-cream border border-blue shadow-2xl rounded-none overflow-hidden flex flex-col z-10"
          >
            {/* Top Reading Progress Bar */}
            <div className="w-full h-1 bg-blue/10">
              <div
                className="h-full bg-blue transition-all duration-150"
                style={{ width: `${scrollProgress}%` }}
              />
            </div>

            {/* Sticky Navigation Header */}
            <header className="px-6 py-4 border-b border-blue/20 bg-cream/90 backdrop-blur-md flex items-center justify-between shrink-0 z-20">
              <div className="flex items-center gap-3">
                <span className="inline-flex items-center gap-1.5 font-mono text-[11px] font-bold tracking-[1.5px] uppercase bg-blue text-cream px-3 py-1">
                  <BookOpen size={12} /> Inside the Build
                </span>
                <span className="hidden sm:inline font-mono text-[12px] text-blue/60 truncate max-w-[340px]">
                  Shipping an MVP at AI Speed
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handleCopyLink}
                  className="flex items-center gap-1.5 font-mono text-[12px] text-blue hover:bg-blue/10 border border-transparent hover:border-blue px-3 py-1.5 transition-all cursor-pointer"
                  title="Share Article"
                >
                  {copied ? <Check size={14} className="text-green-600" /> : <Share2 size={14} />}
                  <span className="hidden sm:inline">{copied ? 'Copied' : 'Share'}</span>
                </button>
                <button
                  onClick={onClose}
                  className="p-2 text-blue hover:bg-blue hover:text-cream border border-transparent hover:border-blue transition-all cursor-pointer"
                  aria-label="Close Article"
                >
                  <X size={20} />
                </button>
              </div>
            </header>

            {/* Scrollable Article Body */}
            <div
              onScroll={handleScroll}
              className="flex-1 overflow-y-auto p-6 sm:p-12 md:p-16 scroll-smooth selection:bg-blue selection:text-cream"
            >
              <article className="max-w-[720px] mx-auto text-blue/90 font-sans">
                {/* Article Header & Byline */}
                <header className="mb-10 border-b border-blue/15 pb-8">
                  <div className="flex items-center gap-2 font-mono text-[12px] uppercase tracking-[2px] text-blue/60 mb-4">
                    <span>AI Prototyping</span>
                    <span>·</span>
                    <span>Front-End Architecture</span>
                  </div>

                  <h1 className="font-sans font-bold text-[clamp(30px,4.5vw,48px)] leading-[1.12em] tracking-[-0.03em] text-blue mb-6">
                    Shipping an MVP at AI Speed
                  </h1>

                  <p className="font-mono text-[18px] leading-[1.6em] text-blue/80 mb-8 font-medium">
                    How Prompt-Driven Prototyping Bridged Design, Code, and Engineering for Donkey Donkey AI
                  </p>

                  {/* Author Meta Card */}
                  <div className="flex items-center justify-between flex-wrap gap-4 pt-4 border-t border-blue/10">
                    <div className="flex items-center gap-3.5">
                      <img
                        src={LESLEY_PHOTO_URL}
                        alt="Lesley Piercefield"
                        referrerPolicy="no-referrer"
                        className="w-12 h-12 object-cover"
                      />
                      <div>
                        <p className="font-sans font-bold text-[15px] text-blue leading-tight">
                          Lesley Piercefield
                        </p>
                        <p className="font-mono text-[12px] text-blue/60">
                          Senior Product Designer · UX &amp; Front-End
                        </p>
                      </div>
                    </div>

                    <div className="flex items-center gap-4 font-mono text-[12px] text-blue/60">
                      <span className="flex items-center gap-1">
                        <Clock size={13} /> 5 min read
                      </span>
                      <span>·</span>
                      <span>Product Case Study</span>
                    </div>
                  </div>
                </header>

                {/* HERO COVER IMAGE - THUMBNAIL WEBP */}
                <figure className="mb-12">
                  <div className="w-full bg-blue/5 border border-blue/20 overflow-hidden shadow-sm">
                    <img
                      src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Donkey-Donkey-AI-thumbnail.webp?raw=true"
                      alt="Donkey Donkey AI Thumbnail"
                      className="w-full h-auto object-cover"
                    />
                  </div>
                  <figcaption className="mt-3 text-center font-mono text-[12px] text-blue/60">
                    Donkey Donkey AI — Conversational Neighborhood Intelligence Interface
                  </figcaption>
                </figure>

                {/* SECTION 1: THE GAME PLAN */}
                <section className="mb-12">
                  <h2 className="font-sans font-bold text-[28px] text-blue tracking-[-0.02em] mb-4 flex items-center gap-2">
                    The Game Plan
                  </h2>
                  <p className="font-sans text-[18px] leading-[1.75em] text-blue/90 mb-6">
                    Building Donkey Donkey AI wasn't just about making a clean travel UX—it was about getting a functional MVP into users' hands fast.
                  </p>
                  <p className="font-sans text-[18px] leading-[1.75em] text-blue/90 mb-8">
                    I prompted nearly the entire UI design and front end using Google AI Studio, using it as both design canvas and code builder. To make it feel real, I built interactive prompt map simulations near the end to mimic live data and give a framework for backend logic.
                  </p>

                  {/* BUILD PROCESS WEBP IMAGE */}
                  <figure className="my-10">
                    <div className="w-full bg-white border border-blue/20 overflow-hidden shadow-sm">
                      <img
                        src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Donkey-Donkey-AI-UX-build-process.webp?raw=true"
                        alt="Donkey Donkey AI UX Build Process"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <figcaption className="mt-3 text-center font-mono text-[12px] text-blue/60">
                      The Prompt-Driven Prototyping &amp; Build Process
                    </figcaption>
                  </figure>
                </section>

                {/* SECTION 2: HOW IT CAME TOGETHER */}
                <section className="mb-12">
                  <h2 className="font-sans font-bold text-[28px] text-blue tracking-[-0.02em] mb-6">
                    How It Came Together
                  </h2>

                  <div className="space-y-6 mb-8">
                    <div className="p-6 bg-white border border-blue/20 shadow-xs">
                      <h3 className="font-sans font-bold text-[18px] text-blue mb-2 flex items-center gap-2">
                        <CheckCircle2 size={18} className="text-blue" /> User First, Always
                      </h3>
                      <p className="font-sans text-[16px] leading-[1.7em] text-blue/80">
                        Drafted the core flows, visual hierarchy, and interaction logic using classic UX principles.
                      </p>
                    </div>

                    <div className="p-6 bg-white border border-blue/20 shadow-xs">
                      <h3 className="font-sans font-bold text-[18px] text-blue mb-2 flex items-center gap-2">
                        <Zap size={18} className="text-amber-500" /> Prompt-Driven Build
                      </h3>
                      <p className="font-sans text-[16px] leading-[1.7em] text-blue/80">
                        Used Google AI Studio to output clean, production-ready HTML, CSS, and component states directly through natural language prompts.
                      </p>
                    </div>

                    <div className="p-6 bg-white border border-blue/20 shadow-xs">
                      <h3 className="font-sans font-bold text-[18px] text-blue mb-2 flex items-center gap-2">
                        <Sparkles size={18} className="text-blue" /> Simulated Real-Time Logic
                      </h3>
                      <p className="font-sans text-[16px] leading-[1.7em] text-blue/80">
                        Built custom map flows near the end to simulate live data, giving stakeholders a true feel for the working product.
                      </p>
                    </div>
                  </div>

                  {/* WORKFLOW WEBP IMAGE */}
                  <figure className="my-10">
                    <div className="w-full bg-white border border-blue/20 overflow-hidden shadow-sm">
                      <img
                        src="https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Donkey-Donkey-AI-workflow.webp?raw=true"
                        alt="Donkey Donkey AI Workflow"
                        className="w-full h-auto object-cover"
                      />
                    </div>
                    <figcaption className="mt-3 text-center font-mono text-[12px] text-blue/60">
                      End-to-End Workflow &amp; Interactive Map Simulations
                    </figcaption>
                  </figure>
                </section>

                {/* SECTION 3: THE IMPACT */}
                <section className="mb-12">
                  <h2 className="font-sans font-bold text-[28px] text-blue tracking-[-0.02em] mb-6">
                    The Impact
                  </h2>

                  <ul className="space-y-4 font-sans text-[17px] leading-[1.7em] text-blue/90">
                    <li className="flex items-start gap-3 p-4 bg-blue/5 border-l-4 border-blue">
                      <Rocket size={20} className="text-blue mt-1 shrink-0" />
                      <div>
                        <strong>Instant Dev Head Start:</strong> Engineering didn't have to build UI from scratch—they got a coded, working front-end ready for APIs and backend logic.
                      </div>
                    </li>
                    <li className="flex items-start gap-3 p-4 bg-blue/5 border-l-4 border-blue">
                      <Rocket size={20} className="text-blue mt-1 shrink-0" />
                      <div>
                        <strong>Faster Time-to-Market:</strong> Cut out weeks of handoff back-and-forth so the team could go live quick.
                      </div>
                    </li>
                    <li className="flex items-start gap-3 p-4 bg-blue/5 border-l-4 border-blue">
                      <Rocket size={20} className="text-blue mt-1 shrink-0" />
                      <div>
                        <strong>Design Control at Scale:</strong> AI sped up the build, but senior design taste kept the UX accessible, clean, and tight.
                      </div>
                    </li>
                  </ul>
                </section>

                {/* SECTION 4: THE BOTTOM LINE */}
                <section className="mb-12 p-8 bg-blue text-cream border border-blue shadow-xl">
                  <h2 className="font-sans font-bold text-[24px] text-white tracking-[-0.02em] mb-4">
                    The Bottom Line
                  </h2>
                  <p className="font-sans text-[18px] leading-[1.75em] text-cream/95 mb-6">
                    AI doesn't replace solid design judgment—it turns senior designers into full-on Product Makers. Combining senior UX experience with modern AI tools means taking complex ideas from concept to live code faster than ever.
                  </p>
                  <a
                    href="https://DonkeyDonkeyAI.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 font-mono text-[13px] font-bold uppercase tracking-[1.5px] bg-cream text-blue border border-cream px-6 py-3.5 hover:bg-white transition-all shadow-md group cursor-pointer"
                  >
                    Experience Donkey Donkey AI Live
                    <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </section>

                {/* ARTICLE FOOTER / AUTHOR PROFILE */}
                <footer className="pt-8 border-t border-blue/20 flex flex-col sm:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <img
                      src={LESLEY_PHOTO_URL}
                      alt="Lesley Piercefield"
                      referrerPolicy="no-referrer"
                      className="w-14 h-14 object-cover"
                    />
                    <div>
                      <p className="font-sans font-bold text-[16px] text-blue">Lesley Piercefield</p>
                      <p className="font-mono text-[12px] text-blue/70">Senior Product Designer &amp; Maker</p>
                    </div>
                  </div>

                  <button
                    onClick={onClose}
                    className="font-mono text-[12px] font-bold uppercase tracking-[1px] text-blue border border-blue px-6 py-3 hover:bg-blue hover:text-cream transition-all cursor-pointer"
                  >
                    Return to Case Study
                  </button>
                </footer>
              </article>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

