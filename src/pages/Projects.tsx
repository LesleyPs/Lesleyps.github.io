import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Reveal } from '../components/Reveal';
import { BrandMarquee } from '../components/BrandMarquee';
import { 
  LayoutGrid, 
  List, 
  Maximize2, 
  ChevronLeft, 
  ChevronRight, 
  ArrowUpRight,
  X
} from 'lucide-react';
import { AnimatePresence, motion } from 'motion/react';

const galleryItems = [
  // 1. Donkey Donkey AI Case Study
  {
    id: "donkey-hero",
    title: "Donkey Donkey Conversational UI",
    company: "Donkey Donkey",
    industry: "Travel AI",
    category: "Primary Chat Interface",
    img: "https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Donkey-Donkey-AI-Gallery-Image.png?raw=true",
    platform: "AI Application",
    badge: "AI Application",
    badgeIcon: "ai"
  },
  // 2. Sony Crackle Xbox UI
  {
    id: "crackle-xbox",
    title: "Sony Crackle TV Console",
    company: "Sony",
    industry: "Streaming",
    category: "10-Foot OTT Television Interface",
    img: "https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Crackle-Xbox-TV-Screen.png?raw=true",
    platform: "10-Foot OTT Television Platform",
    badge: "10-Foot OTT",
    badgeIcon: "tv"
  },
  // 3. Sony Crackle Profile Welcome
  {
    id: "crackle-onboarding",
    title: "Sony Crackle Profile Welcome",
    company: "Sony",
    industry: "Streaming",
    category: "Frictionless Profile Onboarding",
    img: "https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Crackle-welcome-screen.png?raw=true",
    platform: "10-Foot Smart TV Platform",
    badge: "10-Foot OTT",
    badgeIcon: "tv"
  },
  // 4. Sony Crackle Show Page Touchpoint
  {
    id: "crackle-showpoint",
    title: "Sony Crackle Show Touchpoint",
    company: "Sony",
    industry: "Streaming",
    category: "Contextual Action Placement",
    img: "https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Carckle-show-page-touchpoint.webp?raw=true",
    platform: "10-Foot OTT Ecosystem",
    badge: "10-Foot OTT",
    badgeIcon: "tv"
  },
  // 5. Tiki Tab Unit Case Study
  {
    id: "tiki-tab-unit",
    title: "Interactive Ad Unit UI",
    company: "Tiki",
    industry: "Ad Tech",
    category: "Interactive Ad Unit UI",
    img: "https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Tiki-Tab-Unit-Gallery@2x.webp?raw=true",
    platform: "Interactive Ad Unit UI",
    badge: "Ad Unit",
    badgeIcon: "ad"
  },
  // 6. Tiki Optimized Tab Unit
  {
    id: "tiki-tab-unit-max",
    title: "Optimized High-Yield Ad Unit UI",
    company: "Tiki",
    industry: "Ad Tech",
    category: "Interactive Ad Unit UI",
    img: "https://github.com/LesleyPs/old-protflio/blob/main/assets/Tiki_tab-unit-max@2x.webp?raw=true",
    platform: "Interactive Ad Unit UI",
    badge: "Ad Unit",
    badgeIcon: "ad"
  },
  // 7. Tiki Wetter Campaign Unit
  {
    id: "tiki-wetter-unit",
    title: "Wetter Campaign Unit",
    company: "Tiki",
    industry: "Ad Tech",
    category: "Interactive Ad Unit UI",
    img: "https://github.com/LesleyPs/old-protflio/blob/main/assets/images/wetter-travel@2x.webp?raw=true",
    platform: "Interactive Ad Unit UI",
    badge: "Ad Unit",
    badgeIcon: "ad"
  },
  // 8. Tiki Control Tower Stats
  {
    id: "tiki-control-tower-stats",
    title: "Control Tower Yield Analytics",
    company: "Tiki",
    industry: "Ad Tech",
    category: "Programmatic Enterprise Suite",
    img: "https://github.com/LesleyPs/old-protflio/blob/main/assets/images/TIKI-control-tower-metrics-thumb@2x.webp?raw=true",
    platform: "Enterprise Web Console",
    badge: "Web Platform",
    badgeIcon: "web",
    caseStudyUrl: "/projects/control-tower"
  },
  // 9. MyLife Case Study
  {
    id: "mylife-dashboard",
    title: "MyLife.com Background Report",
    company: "MyLife",
    industry: "Identity & Reputation",
    category: "Data-Driven Identity Profile",
    img: "https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Mylife-public-background-report.jpg?raw=true",
    platform: "Background Record System",
    badge: "Background Record",
    badgeIcon: "record"
  },
  // 10. Tiki AccuWeather Unit
  {
    id: "tiki-accuweather-unit",
    title: "AccuWeather iOS Native Mobile Unit",
    company: "Tiki",
    industry: "Ad Tech",
    category: "Evolving Placements · iOS App Unit",
    img: "https://github.com/LesleyPs/old-protflio/blob/main/assets/images/accuweather_2x.jpg?raw=true",
    platform: "iOS Mobile App Unit",
    badge: "iOS Mobile Unit",
    badgeIcon: "mobile"
  },
  // 11. Tiki Envoy Conversational UI
  {
    id: "tiki-envoy-conversational",
    title: "Tiki Envoy Conversational UI",
    company: "Tiki",
    industry: "Ad Tech",
    category: "Conversational Intent Optimization",
    img: "https://github.com/LesleyPs/old-protflio/blob/main/Envoy-DPR-Tiki@2x.webp?raw=true",
    platform: "Conversational UI",
    badge: "Ad Unit",
    badgeIcon: "ad"
  }
];

function ProjectCard({ 
  project, 
  onInspect 
}: { 
  project: any; 
  onInspect: () => void; 
}) {
  return (
    <div className="flex flex-col gap-3 group/card h-full">
      {/* Viewport Card Container - Click to Inspect */}
      <div 
        onClick={onInspect}
        className="relative overflow-hidden border border-blue/10 bg-white p-0 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-500 ease-out group-hover/card:shadow-[0_12px_32px_rgba(0,102,255,0.06)] group-hover/card:border-blue/20 group-hover/card:-translate-y-1 cursor-pointer"
      >
        {/* Uniform 16:10 aspect ratio for equal image heights */}
        <div className="work-card interactive group relative overflow-hidden aspect-[16/10] w-full bg-cream/10">
          <img 
            src={project.img} 
            alt={project.title} 
            referrerPolicy="no-referrer" 
            className={`w-full h-full ${
              project.id === 'tiki-accuweather-unit'
                ? '!object-cover !object-top scale-[1.03] origin-left'
                : 'object-cover object-top'
            }`} 
          />

          {/* White Corner Brackets Overlay (matching Homepage) */}
          <div className="absolute inset-[14px] z-30 pointer-events-none opacity-0 group-hover:opacity-100 group-hover:inset-2.5 transition-all duration-400">
            <div className="absolute top-0 left-0 w-[18px] h-[18px] border-t-2 border-l-2 border-white/80" />
            <div className="absolute top-0 right-0 w-[18px] h-[18px] border-t-2 border-r-2 border-white/80" />
            <div className="absolute bottom-0 right-0 w-[18px] h-[18px] border-b-2 border-r-2 border-white/80" />
            <div className="absolute bottom-0 left-0 w-[18px] h-[18px] border-b-2 border-l-2 border-white/80" />
          </div>

          {/* Work Card Hover Overlay (matching Homepage) */}
          <div className="work-card-label z-30 pointer-events-none">
            <div className="flex flex-col items-center gap-5">
              <div className="text-center">
                <h4 className="font-sans font-semibold text-[clamp(20px,2.2vw,28px)] tracking-[-0.8px] text-blue leading-[1.2em] relative z-20">
                  {project.title}
                </h4>
                <div className="mt-4 pt-4 border-t border-blue/20">
                  <p className="font-sans font-medium text-[14px] text-blue/80 tracking-[-0.2px]">
                    {project.company} <span className="opacity-40 mx-1">/</span> {project.industry || project.category}
                  </p>
                </div>
              </div>
              <div className="text-blue opacity-0 group-hover:opacity-100 transition-all duration-400 transform translate-y-2 group-hover:translate-y-0">
                <ArrowUpRight size={32} strokeWidth={1.5} />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Clean Title below image */}
      <div className="flex items-start justify-between px-1 py-0.5">
        <div className="flex items-center gap-2 flex-wrap">
          <span className="font-sans font-semibold text-[17px] tracking-tight text-blue">
            {project.title}
          </span>
          <span className="font-mono text-[8px] font-bold tracking-[1.5px] uppercase bg-blue/5 text-blue border border-blue/15 px-2 py-0.5">
            {project.company}
          </span>
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  const [viewMode, setViewMode] = useState<'grid' | 'expanded'>('grid');
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  // Keyboard Navigation for Lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (activeImageIndex === null) return;
      if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev !== null && prev < galleryItems.length - 1 ? prev + 1 : 0));
      } else if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryItems.length - 1));
      } else if (e.key === 'Escape') {
        setActiveImageIndex(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex]);

  return (
    <div className="pt-[72px]">
      {/* HEADER SECTION */}
      <section className="w-full border-b border-blue p-[80px_24px_50px] sm:p-[100px_30px_60px]">
        <Reveal>
          <div className="max-w-4xl">
            <h1 className="font-sans font-semibold text-[clamp(36px,5.8vw,74px)] leading-[1.18em] tracking-[clamp(-2px,-0.3vw,-4px)] text-blue">
              The Work.
            </h1>
          </div>
        </Reveal>
      </section>

      {/* VIEWPORT CONTROLS BAR */}
      <div className="w-full border-b border-blue py-3 px-4 sm:px-8 md:px-12 bg-cream/90 backdrop-blur-md sticky top-[72px] z-[90] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[1.5px] text-blue/60">Display:</span>
          <div className="flex items-center border border-blue/20 p-0.5 bg-white shadow-sm">
            <button 
              onClick={() => setViewMode('grid')}
              aria-label="Grid View"
              title="Grid View"
              className={`flex items-center justify-center w-9 h-9 transition-all cursor-pointer ${viewMode === 'grid' ? 'bg-blue text-white shadow-sm' : 'text-blue/70 hover:text-blue hover:bg-blue/5'}`}
            >
              <LayoutGrid size={18} strokeWidth={2} />
            </button>
            <button 
              onClick={() => setViewMode('expanded')}
              aria-label="Expanded Showcase"
              title="Expanded Showcase"
              className={`flex items-center justify-center w-9 h-9 transition-all cursor-pointer ${viewMode === 'expanded' ? 'bg-blue text-white shadow-sm' : 'text-blue/70 hover:text-blue hover:bg-blue/5'}`}
            >
              <List size={18} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      {/* COLLAGE IMAGE GRID */}
      <section className="w-full border-b border-blue py-8 px-4 sm:px-6 md:px-10 bg-cream">
        <div className={`grid ${viewMode === 'expanded' ? 'grid-cols-1 gap-y-12 max-w-5xl' : 'grid-cols-1 md:grid-cols-2 gap-x-6 sm:gap-x-8 gap-y-8 sm:gap-y-10 max-w-[1500px]'} mx-auto transition-all duration-500`}>
          {galleryItems.map((project, i) => (
            <Reveal key={project.id} delay={viewMode === 'expanded' ? 0.05 : (i % 2) * 0.1 + Math.floor(i / 2) * 0.05}>
              <ProjectCard 
                project={project} 
                onInspect={() => setActiveImageIndex(i)} 
              />
            </Reveal>
          ))}
        </div>
      </section>

      {/* LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-[1000] bg-cream/95 backdrop-blur-[16px] flex flex-col justify-between p-4 sm:p-6 md:p-10"
          >
            {/* Lightbox Header */}
            <div className="flex items-center justify-between border-b border-blue/10 pb-4">
              <div className="flex flex-col gap-0.5">
                <div className="flex items-center gap-2">
                  <span className="font-sans font-bold text-[18px] tracking-tight text-blue">
                    {galleryItems[activeImageIndex].title}
                  </span>
                  <span className="font-mono text-[8px] font-bold tracking-[1.5px] uppercase bg-blue/5 text-blue border border-blue/15 px-2 py-0.5">
                    {galleryItems[activeImageIndex].company}
                  </span>
                </div>
                <div className="font-mono text-[10px] text-blue/50 uppercase tracking-[0.5px]">
                  {galleryItems[activeImageIndex].category}
                </div>
              </div>

              {/* Close & Counter */}
              <div className="flex items-center gap-4">
                <span className="font-mono text-[11px] font-bold tracking-[1px] text-blue/60 bg-blue/5 border border-blue/10 px-3 py-1">
                  {String(activeImageIndex + 1).padStart(2, '0')} / {String(galleryItems.length).padStart(2, '0')}
                </span>
                <button 
                  onClick={() => setActiveImageIndex(null)}
                  className="w-10 h-10 flex items-center justify-center bg-white border border-blue/15 text-blue hover:bg-blue hover:text-white transition-all cursor-pointer shadow-sm"
                >
                  <X size={18} />
                </button>
              </div>
            </div>

            {/* Lightbox Main Stage */}
            <div className="flex-1 flex items-center justify-between relative py-6 my-auto select-none">
              {/* Prev Button */}
              <button 
                onClick={() => setActiveImageIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : galleryItems.length - 1))}
                className="absolute left-0 sm:left-4 z-50 w-12 h-12 flex items-center justify-center bg-white/90 border border-blue/15 text-blue hover:bg-blue hover:text-white transition-all cursor-pointer shadow-md"
              >
                <ChevronLeft size={22} strokeWidth={2.5} />
              </button>

              {/* Image Container with maximum possible size */}
              <div className="w-full max-w-5xl mx-auto h-[60vh] sm:h-[65vh] flex items-center justify-center px-8">
                <motion.div 
                  key={activeImageIndex}
                  initial={{ scale: 0.96, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  exit={{ scale: 0.96, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="relative max-w-full max-h-full overflow-hidden flex items-center justify-center"
                >
                  {galleryItems[activeImageIndex].id === 'tiki-accuweather-unit' ? (
                    <div className="relative overflow-hidden border border-blue/15 shadow-[0_24px_60px_rgba(0,102,255,0.08)] bg-white/50">
                      <img 
                        src={galleryItems[activeImageIndex].img} 
                        alt={galleryItems[activeImageIndex].title} 
                        referrerPolicy="no-referrer" 
                        className="max-w-full max-h-full object-contain scale-[1.03] origin-left"
                      />
                    </div>
                  ) : galleryItems[activeImageIndex].id.startsWith('crackle') ? (
                    <div className="relative overflow-hidden border border-blue/15 shadow-[0_24px_60px_rgba(0,102,255,0.08)] bg-black p-2">
                      <img 
                        src={galleryItems[activeImageIndex].img} 
                        alt={galleryItems[activeImageIndex].title} 
                        referrerPolicy="no-referrer" 
                        className="max-w-full max-h-[80vh] object-contain bg-black"
                      />
                    </div>
                  ) : (
                    <img 
                      src={galleryItems[activeImageIndex].img} 
                      alt={galleryItems[activeImageIndex].title} 
                      referrerPolicy="no-referrer" 
                      className="max-w-full max-h-full object-contain border border-blue/15 shadow-[0_24px_60px_rgba(0,102,255,0.08)] bg-white/50"
                    />
                  )}
                </motion.div>
              </div>

              {/* Next Button */}
              <button 
                onClick={() => setActiveImageIndex((prev) => (prev !== null && prev < galleryItems.length - 1 ? prev + 1 : 0))}
                className="absolute right-0 sm:right-4 z-50 w-12 h-12 flex items-center justify-center bg-white/90 border border-blue/15 text-blue hover:bg-blue hover:text-white transition-all cursor-pointer shadow-md"
              >
                <ChevronRight size={22} strokeWidth={2.5} />
              </button>
            </div>

            {/* Lightbox Footer Info */}
            <div className="flex flex-col sm:flex-row items-center justify-between border-t border-blue/10 pt-4 gap-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[9px] uppercase tracking-[1.5px] text-blue/40">Environment Profile:</span>
                <span className="font-mono text-[10px] font-bold text-blue tracking-[0.5px] uppercase bg-blue/5 border border-blue/10 px-2.5 py-1">
                  {galleryItems[activeImageIndex].platform}
                </span>
              </div>
              {galleryItems[activeImageIndex].caseStudyUrl && (
                <Link
                  to={galleryItems[activeImageIndex].caseStudyUrl}
                  className="flex items-center gap-2 font-mono text-[11px] font-bold tracking-[1px] uppercase bg-blue text-cream hover:bg-blue/90 px-4 py-2 border border-blue transition-all group/cta"
                >
                  <span>Explore Case Study</span>
                  <ArrowUpRight size={14} className="group-hover/cta:translate-x-0.5 group-hover/cta:-translate-y-0.5 transition-transform" />
                </Link>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* CLIENTS MARQUEE */}
      <section className="flex flex-col lg:flex-row w-full border-b border-blue">
        <div className="w-full lg:w-[305px] shrink-0 border-b lg:border-b-0 lg:border-r border-blue p-[70px_30px_50px] flex flex-col gap-5">
          <Reveal direction="left">
            <h3 className="font-sans font-semibold text-[19px] tracking-[-0.7px] leading-[1.4em]">People I've<br />made things for:</h3>
          </Reveal>
        </div>
        <div className="flex-1 p-[70px_0_60px_36px] flex flex-col gap-11 overflow-hidden">
          <BrandMarquee />
        </div>
      </section>
    </div>
  );
}

