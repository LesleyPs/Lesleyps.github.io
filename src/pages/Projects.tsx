import { useState, useEffect } from 'react';
import { Reveal } from '../components/Reveal';
import { BrandMarquee } from '../components/BrandMarquee';
import { 
  ArrowUpRight, 
  Tv, 
  Monitor, 
  Smartphone, 
  Sparkles, 
  Layers, 
  LayoutGrid, 
  List, 
  Maximize2, 
  ChevronLeft, 
  ChevronRight, 
  X,
  ExternalLink 
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'motion/react';

const galleryItems = [
  // 1. Donkey Donkey AI Case Study (interactive)
  {
    id: "donkey-hero",
    title: "Donkey Donkey Conversational UI",
    company: "Donkey Donkey",
    industry: "Travel AI",
    category: "Primary Chat Interface",
    img: "https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Donkey-Donkey-AI-Gallery-Image.png?raw=true",
    link: "/projects/donkey",
    aspect: "aspect-[16/10]",
    platform: "AI Application",
    badge: "AI Application",
    badgeIcon: "ai",
    isTv: false
  },
  // 2. Sony Crackle Xbox UI (interactive, 10-foot)
  {
    id: "crackle-xbox",
    title: "Sony Crackle TV Console",
    company: "Sony",
    industry: "Streaming",
    category: "10-Foot OTT Television Interface",
    img: "https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Crackle-Xbox-TV-Screen.png?raw=true",
    link: "/projects/crackle",
    aspect: "aspect-[16/9]",
    platform: "10-Foot OTT Television Platform",
    badge: "10-Foot OTT",
    badgeIcon: "tv",
    isTv: true
  },
  // 3. Sony Crackle Profile Welcome (interactive, 10-foot)
  {
    id: "crackle-onboarding",
    title: "Sony Crackle Profile Welcome",
    company: "Sony",
    industry: "Streaming",
    category: "Frictionless Profile Onboarding",
    img: "https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Crackle-welcome-screen.png?raw=true",
    link: "/projects/crackle",
    aspect: "aspect-[16/9]",
    platform: "10-Foot Smart TV Platform",
    badge: "10-Foot OTT",
    badgeIcon: "tv",
    isTv: true
  },
  // 4. Sony Crackle Show Page Touchpoint (interactive, 10-foot)
  {
    id: "crackle-showpoint",
    title: "Sony Crackle Show Touchpoint",
    company: "Sony",
    industry: "Streaming",
    category: "Contextual Action Placement",
    img: "https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Carckle-show-page-touchpoint.webp?raw=true",
    link: "/projects/crackle",
    aspect: "aspect-[16/9]",
    platform: "10-Foot OTT Ecosystem",
    badge: "10-Foot OTT",
    badgeIcon: "tv",
    isTv: true
  },
  // 5. Tiki Tab Unit Case Study (interactive, desktop)
  {
    id: "tiki-tab-unit",
    title: "Clicktripz Core Placement",
    company: "Tiki",
    industry: "Ad Tech",
    category: "High-Intent Browser Tab Unit",
    img: "https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Tiki-Tab-Unit-Gallery@2x.webp?raw=true",
    link: "/projects/tiki",
    aspect: "aspect-[16/10]",
    platform: "High-Yield Ad Unit",
    badge: "Ad Unit",
    badgeIcon: "ad",
    isTv: false
  },
  // 6. Tiki Optimized Tab Unit (interactive, desktop)
  {
    id: "tiki-tab-unit-max",
    title: "Optimized High-Yield Tab Unit",
    company: "Tiki",
    industry: "Ad Tech",
    category: "Evolving Placements · Tab UX",
    img: "https://github.com/LesleyPs/old-protflio/blob/main/assets/Tiki_tab-unit-max@2x.webp?raw=true",
    link: "/projects/tiki",
    aspect: "aspect-[16/10]",
    platform: "High-Yield Ad Unit",
    badge: "Ad Unit",
    badgeIcon: "ad",
    isTv: false
  },
  // 7. Tiki Wetter Campaign Unit (interactive, desktop)
  {
    id: "tiki-wetter-unit",
    title: "Wetter Campaign Unit",
    company: "Tiki",
    industry: "Ad Tech",
    category: "Evolving Placements · Campaign UX",
    img: "https://github.com/LesleyPs/old-protflio/blob/main/assets/images/wetter-travel@2x.webp?raw=true",
    link: "/projects/tiki",
    aspect: "aspect-[16/10]",
    platform: "Native Campaign Ad Unit",
    badge: "Ad Unit",
    badgeIcon: "ad",
    isTv: false
  },
  // 8. Tiki Control Tower Stats (interactive, desktop)
  {
    id: "tiki-control-tower-stats",
    title: "Control Tower Yield Analytics",
    company: "Tiki",
    industry: "Ad Tech",
    category: "Programmatic Enterprise Suite",
    img: "https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Tiki-control-tower-metrics_2x.png?raw=true",
    link: "/projects/tiki",
    aspect: "aspect-[16/10]",
    platform: "Enterprise Web Console",
    badge: "Web Platform",
    badgeIcon: "web",
    isTv: false
  },
  // 9. MyLife Case Study (interactive)
  {
    id: "mylife-dashboard",
    title: "MyLife.com Background Report",
    company: "MyLife",
    industry: "Identity & Reputation",
    category: "Data-Driven Identity Profile",
    img: "https://github.com/LesleyPs/old-protflio/blob/main/assets/images/Mylife-public-background-report.jpg?raw=true",
    link: "/projects/mylife",
    aspect: "aspect-[16/10]",
    platform: "Background Record System",
    badge: "Background Record",
    badgeIcon: "record",
    isTv: false
  },
  // 10. Tiki AccuWeather Unit (Native Mobile App, iOS)
  {
    id: "tiki-accuweather-unit",
    title: "AccuWeather iOS Native Mobile Unit",
    company: "Tiki",
    industry: "Ad Tech",
    category: "Evolving Placements · iOS App Unit",
    img: "https://github.com/LesleyPs/old-protflio/blob/main/assets/images/accuweather_2x.jpg?raw=true",
    link: "/projects/tiki",
    aspect: "aspect-[16/10]",
    platform: "iOS Mobile App Unit",
    badge: "iOS Mobile Unit",
    badgeIcon: "mobile",
    isTv: false
  },
  // 11. Tiki Envoy Conversational UI (interactive)
  {
    id: "tiki-envoy-conversational",
    title: "Tiki Envoy Conversational UI",
    company: "Tiki",
    industry: "Ad Tech",
    category: "Conversational Intent Optimization",
    img: "https://github.com/LesleyPs/old-protflio/blob/main/Envoy-DPR-Tiki@2x.webp?raw=true",
    link: "/projects/tiki",
    aspect: "aspect-[16/10]",
    platform: "Conversational UI",
    badge: "Ad Unit",
    badgeIcon: "ad",
    isTv: false
  }
];

function ProjectCard({ 
  project, 
  onInspect, 
  viewMode 
}: { 
  project: any; 
  onInspect: () => void; 
  viewMode: 'grid' | 'expanded';
}) {
  const isInteractive = !!project.link;

  const renderIcon = () => {
    switch (project.badgeIcon) {
      case "tv":
        return <Tv size={10} className="text-blue/80" />;
      case "mobile":
        return <Smartphone size={10} className="text-blue/80" />;
      case "ai":
        return <Sparkles size={10} className="text-blue/80" />;
      case "ad":
      case "record":
        return <Layers size={10} className="text-blue/80" />;
      case "web":
      default:
        return <Monitor size={10} className="text-blue/80" />;
    }
  };

  return (
    <div className="flex flex-col gap-4 group/card h-full">
      {/* Viewport Card Container - Click to Inspect */}
      <div 
        onClick={onInspect}
        className="relative overflow-hidden rounded-xl border border-blue/10 bg-white p-0 shadow-[0_4px_20px_rgba(0,0,0,0.02)] transition-all duration-500 ease-out group-hover/card:shadow-[0_12px_32px_rgba(0,102,255,0.06)] group-hover/card:border-blue/20 group-hover/card:-translate-y-1 cursor-pointer"
      >
        {/* Subtle, beautiful gradient overlay and reflection across the frame */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-blue/[0.01] to-blue/[0.03] pointer-events-none z-10" />

        {/* Viewport container with precise rounded edges - Reusing the same work-card style from Home */}
        <div className={`work-card interactive group relative overflow-hidden rounded-xl bg-cream/10 !aspect-auto ${viewMode === 'expanded' ? 'h-auto' : (project.aspect || 'aspect-[16/10]')}`}>
          <img 
            src={project.img} 
            alt={project.title} 
            referrerPolicy="no-referrer" 
            className={`w-full ${viewMode === 'expanded' ? 'h-auto block' : 'h-full object-cover object-top'} transition-all duration-700 ease-out group-hover/card:brightness-[1.015] ${project.id === 'tiki-accuweather-unit' ? 'scale-[1.02] origin-left' : 'group-hover/card:scale-[1.02]'}`} 
          />
          
          {/* Subtle modern soft lighting overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/[0.03] via-transparent to-transparent pointer-events-none z-10" />
          
          {/* Inline Modern Corner Badges indicating environment scale */}
          <div className="absolute top-3 left-3 flex items-center gap-1.5 bg-white/90 backdrop-blur-md border border-blue/10 rounded-full px-3 py-1 text-[9px] font-mono font-bold uppercase tracking-[0.5px] text-blue shadow-sm z-30">
            {renderIcon()}
            <span>{project.badge || "Web Platform"}</span>
          </div>

          {/* Unified White Corner Brackets Overlay */}
          <div className="absolute inset-[14px] z-30 pointer-events-none opacity-0 group-hover:opacity-100 group-hover:inset-2.5 transition-all duration-400">
            <div className="absolute top-0 left-0 w-[18px] h-[18px] border-t-2 border-l-2 border-blue/40" />
            <div className="absolute top-0 right-0 w-[18px] h-[18px] border-t-2 border-r-2 border-blue/40" />
            <div className="absolute bottom-0 right-0 w-[18px] h-[18px] border-b-2 border-r-2 border-blue/40" />
            <div className="absolute bottom-0 left-0 w-[18px] h-[18px] border-b-2 border-l-2 border-blue/40" />
          </div>

          {/* Reused Slide-in work-card-label overlay for Expand Image action */}
          <div className="work-card-label z-30">
            <div className="flex flex-col items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-blue text-white flex items-center justify-center shadow-md transform hover:scale-110 transition-transform">
                <Maximize2 size={18} />
              </div>
              <span className="font-sans font-bold text-[14px] tracking-tight text-blue">
                Click to Expand
              </span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Pristine Monospace & Swiss Typography Layout - Case Study triggers on details click */}
      {isInteractive ? (
        <Link to={project.link} className="flex items-start justify-between px-1.5 py-0.5 group/details cursor-pointer">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-sans font-semibold text-[18px] tracking-tight text-blue group-hover/details:text-blue/70 transition-colors">
                {project.title}
              </span>
              <span className="font-mono text-[8px] font-bold tracking-[1.5px] uppercase bg-blue/5 text-blue border border-blue/15 rounded px-2 py-0.5">
                {project.company}
              </span>
            </div>
            <div className="flex items-center gap-2 text-blue/50 text-[10px] font-mono uppercase tracking-[0.5px]">
              <span>{project.category}</span>
              <span>•</span>
              <span className="text-blue/70 font-bold group-hover/details:text-blue transition-colors">
                Read Case Study →
              </span>
            </div>
          </div>
          
          <div className="text-blue/30 group-hover/details:text-blue transition-colors duration-300 transform translate-x-1 group-hover/details:translate-x-0 group-hover/details:-translate-y-0.5 pt-1">
            <ArrowUpRight size={18} strokeWidth={2.5} />
          </div>
        </Link>
      ) : (
        <div className="flex items-start justify-between px-1.5 py-0.5">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="font-sans font-semibold text-[18px] tracking-tight text-blue">
                {project.title}
              </span>
              <span className="font-mono text-[8px] font-bold tracking-[1.5px] uppercase bg-blue/5 text-blue border border-blue/15 rounded px-2 py-0.5">
                {project.company}
              </span>
            </div>
            <div className="flex items-center gap-2 text-blue/50 text-[10px] font-mono uppercase tracking-[0.5px]">
              <span>{project.category}</span>
              <span>•</span>
              <span className="text-blue/70 font-bold">{project.platform}</span>
            </div>
          </div>
        </div>
      )}
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
      <section className="w-full border-b border-blue p-[100px_30px_60px]">
        <Reveal>
          <div className="max-w-4xl">
            <h1 className="font-sans font-semibold text-[clamp(36px,5.8vw,74px)] leading-[1.18em] tracking-[clamp(-2px,-0.3vw,-4px)] text-blue mb-10">
              Design Collage<br />
              <span className="opacity-60">visual archive of</span><br />
              travel, media, & interfaces.
            </h1>
            <p className="font-mono text-[14px] tracking-[1px] opacity-70">Interactive case studies framed within clean environment viewports, grouped by product ecosystem.</p>
          </div>
        </Reveal>
      </section>

      {/* VIEWPORT CONTROLS BAR */}
      <div className="w-full border-b border-blue py-3 px-6 md:px-12 bg-cream/90 backdrop-blur-md sticky top-[72px] z-[90] flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-[1.5px] text-blue/60">Display:</span>
          <div className="flex items-center border border-blue/20 rounded-lg p-0.5 bg-white shadow-sm">
            <button 
              onClick={() => setViewMode('grid')}
              aria-label="Grid View"
              title="Grid View"
              className={`flex items-center justify-center w-9 h-9 rounded-md transition-all cursor-pointer ${viewMode === 'grid' ? 'bg-blue text-white shadow-sm' : 'text-blue/70 hover:text-blue hover:bg-blue/5'}`}
            >
              <LayoutGrid size={18} strokeWidth={2} />
            </button>
            <button 
              onClick={() => setViewMode('expanded')}
              aria-label="Expanded Showcase"
              title="Expanded Showcase"
              className={`flex items-center justify-center w-9 h-9 rounded-md transition-all cursor-pointer ${viewMode === 'expanded' ? 'bg-blue text-white shadow-sm' : 'text-blue/70 hover:text-blue hover:bg-blue/5'}`}
            >
              <List size={18} strokeWidth={2} />
            </button>
          </div>
        </div>
      </div>

      {/* COLLAGE IMAGE GRID */}
      <section className="w-full border-b border-blue py-12 px-6 md:px-12 bg-cream">
        <div className={`grid gap-x-12 ${viewMode === 'expanded' ? 'grid-cols-1 gap-y-24 max-w-5xl' : 'grid-cols-1 md:grid-cols-2 gap-y-16 max-w-7xl'} mx-auto transition-all duration-500`}>
          {galleryItems.map((project, i) => (
            <Reveal key={project.id} delay={viewMode === 'expanded' ? 0.05 : (i % 2) * 0.1 + Math.floor(i / 2) * 0.05}>
              <ProjectCard 
                project={project} 
                onInspect={() => setActiveImageIndex(i)} 
                viewMode={viewMode}
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
                  <span className="font-mono text-[8px] font-bold tracking-[1.5px] uppercase bg-blue/5 text-blue border border-blue/15 rounded px-2 py-0.5">
                    {galleryItems[activeImageIndex].company}
                  </span>
                </div>
                <div className="font-mono text-[10px] text-blue/50 uppercase tracking-[0.5px]">
                  {galleryItems[activeImageIndex].category}
                </div>
              </div>

              {/* Close & Counter */}
              <div className="flex items-center gap-4">
                <span className="font-mono text-[11px] font-bold tracking-[1px] text-blue/60 bg-blue/5 border border-blue/10 rounded-full px-3 py-1">
                  {String(activeImageIndex + 1).padStart(2, '0')} / {String(galleryItems.length).padStart(2, '0')}
                </span>
                <button 
                  onClick={() => setActiveImageIndex(null)}
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-white border border-blue/15 text-blue hover:bg-blue hover:text-white transition-all cursor-pointer shadow-sm"
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
                className="absolute left-0 sm:left-4 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 border border-blue/15 text-blue hover:bg-blue hover:text-white transition-all cursor-pointer shadow-md"
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
                    <div className="relative overflow-hidden rounded-lg border border-blue/15 shadow-[0_24px_60px_rgba(0,102,255,0.08)] bg-white/50">
                      <img 
                        src={galleryItems[activeImageIndex].img} 
                        alt={galleryItems[activeImageIndex].title} 
                        referrerPolicy="no-referrer" 
                        className="max-w-full max-h-full object-contain scale-[1.02] origin-left"
                      />
                    </div>
                  ) : (
                    <img 
                      src={galleryItems[activeImageIndex].img} 
                      alt={galleryItems[activeImageIndex].title} 
                      referrerPolicy="no-referrer" 
                      className="max-w-full max-h-full object-contain rounded-lg border border-blue/15 shadow-[0_24px_60px_rgba(0,102,255,0.08)] bg-white/50"
                    />
                  )}
                </motion.div>
              </div>

              {/* Next Button */}
              <button 
                onClick={() => setActiveImageIndex((prev) => (prev !== null && prev < galleryItems.length - 1 ? prev + 1 : 0))}
                className="absolute right-0 sm:right-4 z-50 w-12 h-12 flex items-center justify-center rounded-full bg-white/90 border border-blue/15 text-blue hover:bg-blue hover:text-white transition-all cursor-pointer shadow-md"
              >
                <ChevronRight size={22} strokeWidth={2.5} />
              </button>
            </div>

            {/* Lightbox Footer Info */}
            <div className="flex flex-col sm:flex-row items-center justify-between border-t border-blue/10 pt-4 gap-4">
              <div className="flex items-center gap-3">
                <span className="font-mono text-[9px] uppercase tracking-[1.5px] text-blue/40">Environment Profile:</span>
                <span className="font-mono text-[10px] font-bold text-blue tracking-[0.5px] uppercase bg-blue/5 border border-blue/10 rounded px-2.5 py-1">
                  {galleryItems[activeImageIndex].platform}
                </span>
              </div>

              {galleryItems[activeImageIndex].link && (
                <Link 
                  to={galleryItems[activeImageIndex].link} 
                  onClick={() => setActiveImageIndex(null)}
                  className="flex items-center gap-2 font-mono text-[11px] font-black uppercase tracking-[1.5px] text-white bg-blue border border-blue px-6 py-3 rounded-lg hover:opacity-90 transition-all shadow-sm"
                >
                  Read Case Study
                  <ExternalLink size={12} />
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
