import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronLeft, 
  ChevronRight, 
  Share, 
  BookOpen, 
  Copy, 
  Calendar, 
  MapPin, 
  X, 
  Search, 
  Menu, 
  RotateCw, 
  Sparkles,
  Layers,
  Smartphone
} from 'lucide-react';

interface MockupData {
  id: string;
  name: string;
  url: string;
  time: string;
  city: string;
  themeColor: string;
  headerBg: string;
  headerText: string;
  logo: React.ReactNode;
  subtitle: string;
  activePartner: string;
  partners: { id: string; name: string; logo: React.ReactNode }[];
  dates: { start: string; end: string };
  ctaBg: string;
  ctaText: string;
  bgContent: React.ReactNode;
  notes: string;
}

export const TikiMobileMockupShowcase: React.FC = () => {
  const [activeMockupIndex, setActiveMockupIndex] = useState(0);
  const [viewMode, setViewMode] = useState<'single' | 'grid'>('single');
  const [activePartnerMap, setActivePartnerMap] = useState<Record<string, string>>({
    icelolly: 'momondo',
    hotelplanner: 'booking',
    timeout: 'booking',
    tenbest: 'booking'
  });

  const mockups: MockupData[] = [
    {
      id: 'icelolly',
      name: 'Icelolly.com',
      url: 'icelolly.com',
      time: '4:25',
      city: 'Amsterdam',
      themeColor: '#E60064',
      headerBg: 'bg-[#E60064]',
      headerText: 'text-white',
      logo: (
        <div className="flex items-center gap-1">
          <span className="font-sans font-black text-[22px] tracking-tight text-white">icelolly</span>
          <span className="w-2.5 h-4.5 bg-white rounded-t-full rounded-b-xs inline-block relative -top-0.5">
            <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0.5 h-1.5 bg-white/60"></span>
          </span>
          <span className="text-[12px] font-bold text-white/90">.com</span>
        </div>
      ),
      subtitle: 'Search hotel deals for Amsterdam',
      activePartner: 'momondo',
      partners: [
        {
          id: 'momondo',
          name: 'momondo',
          logo: (
            <span className="font-sans font-bold text-[13px] text-[#002d5c] tracking-tight flex items-center">
              mo<span className="text-[#e2006a]">mo</span>ndo
            </span>
          )
        },
        {
          id: 'priceline',
          name: 'priceline',
          logo: (
            <span className="font-sans font-bold text-[13px] text-[#0066cc] tracking-tight">
              priceline<sup className="text-[7px] ml-0.5 font-normal">®</sup>
            </span>
          )
        },
        {
          id: 'orbitz',
          name: 'ORBITZ',
          logo: (
            <span className="font-sans font-black italic text-[12px] text-[#0d2a4a] tracking-tighter flex items-center">
              <span className="text-[#00a8cc] mr-0.5 not-italic font-bold">⮂</span>ORBITZ
            </span>
          )
        }
      ],
      dates: { start: '04/11/2026', end: '04/18/2026' },
      ctaBg: 'bg-[#E60064] hover:bg-[#c90057]',
      ctaText: 'Search Deals',
      bgContent: (
        <div className="p-4 bg-white/90 text-[#333] space-y-3">
          <div className="bg-neutral-100 rounded-lg p-3 flex items-center gap-2 text-[11px] text-neutral-600 border border-neutral-200">
            <Search size={14} className="text-[#E60064] shrink-0" />
            <div>
              <p className="text-[10px] text-neutral-400">11 Apr 2026 · 7 nights · 2 adults, 0 children</p>
              <p className="font-bold text-neutral-800 truncate">6 Airports to Amsterdam Area, Nethe...</p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-2 opacity-50">
            <div className="h-16 bg-neutral-100 rounded-md border border-neutral-200"></div>
            <div className="h-16 bg-neutral-100 rounded-md border border-neutral-200"></div>
          </div>
          <div className="pt-2 border-t border-neutral-200 flex justify-between text-[11px] text-neutral-500 opacity-60">
            <span>Board basis: <strong>Room only</strong></span>
            <span>STN ⇄ AMS</span>
          </div>
        </div>
      ),
      notes: 'Customized in Icelolly’s high-energy signature magenta palette with Momondo, Priceline, and Orbitz metasearch integrations.'
    },
    {
      id: 'hotelplanner',
      name: 'HotelPlanner.com',
      url: 'hotelplanner.com',
      time: '4:19',
      city: 'Long Beach',
      themeColor: '#FF5722',
      headerBg: 'bg-[#00529B] bg-gradient-to-r from-[#00386c] to-[#005ba6]',
      headerText: 'text-white',
      logo: (
        <div className="flex items-center gap-2">
          <span className="font-sans font-bold text-[13px] tracking-wide text-white uppercase">
            HOTEL MAI DOWNTOWN LONG
          </span>
        </div>
      ),
      subtitle: 'Search hotel deals for Long Beach',
      activePartner: 'booking',
      partners: [
        {
          id: 'booking',
          name: 'Booking.com',
          logo: (
            <span className="font-sans font-black text-[12px] text-[#003580] tracking-tight">
              Booking<span className="text-[#008009]">.com</span>
            </span>
          )
        },
        {
          id: 'kayak',
          name: 'KAYAK',
          logo: (
            <span className="bg-[#FF690F] text-white font-sans font-black text-[10px] px-1.5 py-0.5 tracking-wider rounded-xs">
              KAYAK
            </span>
          )
        },
        {
          id: 'vrbo',
          name: 'Vrbo',
          logo: (
            <span className="font-serif italic font-black text-[13px] text-[#2c3f58] tracking-tight">
              Vrbo
            </span>
          )
        }
      ],
      dates: { start: '07/04/2026', end: '07/06/2026' },
      ctaBg: 'bg-[#FF5722] hover:bg-[#e64a19]',
      ctaText: 'Search Deals',
      bgContent: (
        <div className="relative h-44 bg-neutral-900 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,#335577,#112233)] opacity-80"></div>
          <div className="absolute bottom-3 left-3 z-20 text-white">
            <span className="text-[10px] uppercase font-bold tracking-wider bg-black/40 px-2 py-0.5 rounded-sm">Long Beach, CA</span>
            <p className="text-[12px] font-bold mt-1">Downtown Waterfront Hotel</p>
          </div>
          <div className="p-3 bg-white text-neutral-800 text-[10px] space-y-1 absolute -bottom-16 w-full opacity-60">
            <p className="font-bold flex items-center gap-1 text-[#00529B]">
              <Sparkles size={10} /> AI Insight: Pool hoist, sauna, steam room
            </p>
          </div>
        </div>
      ),
      notes: 'Engineered for HotelPlanner with rich photography backdrop, booking metasearch tab strip, and high-contrast orange CTA.'
    },
    {
      id: 'timeout',
      name: 'TimeOut Miami',
      url: 'timeout.com',
      time: '4:13',
      city: 'Miami',
      themeColor: '#EA1D2C',
      headerBg: 'bg-white border-b border-neutral-200',
      headerText: 'text-neutral-900',
      logo: (
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full bg-[#EA1D2C] text-white font-serif font-black text-[12px] flex items-center justify-center">
              TO
            </div>
            <span className="font-sans font-black text-[12px] tracking-wider text-neutral-900 uppercase">MIAMI</span>
          </div>
          <span className="text-[10px] font-bold text-neutral-600 uppercase tracking-widest">SUBSCRIBE</span>
        </div>
      ),
      subtitle: 'Search travel deals for Miami',
      activePartner: 'booking',
      partners: [
        {
          id: 'booking',
          name: 'Booking.com',
          logo: (
            <span className="font-sans font-bold text-[12px] text-[#003580] tracking-tight">
              Booking<span className="text-[#008009]">.com</span>
            </span>
          )
        },
        {
          id: 'travelocity',
          name: 'travelocity',
          logo: (
            <span className="font-sans font-bold text-[11px] text-[#005580] flex items-center gap-0.5">
              <span className="text-[#FF9E1B] text-[13px] leading-none">✱</span>travelocity
            </span>
          )
        },
        {
          id: 'kayak',
          name: 'KAYAK',
          logo: (
            <span className="bg-[#FF690F] text-white font-sans font-black text-[10px] px-1.5 py-0.5 tracking-wider rounded-xs">
              KAYAK
            </span>
          )
        }
      ],
      dates: { start: '05/25/2025', end: '05/29/2025' },
      ctaBg: 'bg-[#EA1D2C] hover:bg-[#c91421]',
      ctaText: 'Search Deals',
      bgContent: (
        <div className="p-4 bg-neutral-950 text-white space-y-2">
          <div className="h-28 bg-[radial-gradient(ellipse_at_top,#2a2a2a,#0f0f0f)] rounded-lg p-3 border border-white/10 flex flex-col justify-end">
            <span className="text-[9px] font-mono uppercase tracking-widest text-[#EA1D2C]">Miami Beach Guide</span>
            <p className="text-[13px] font-black leading-tight mt-1">Locals and tourists top nightlife picks</p>
          </div>
          <p className="text-[10px] text-neutral-400 line-clamp-2">
            Art festivals, outdoor concerts, iconic sightseeing and more best things to do right now.
          </p>
        </div>
      ),
      notes: 'Dark-mode editorial placement for TimeOut with inverted modal styling and Travelocity / Booking / Kayak tabs.'
    },
    {
      id: 'tenbest',
      name: 'USA TODAY 10Best',
      url: '10best.usatoday.com',
      time: '4:10',
      city: 'Chicago, IL',
      themeColor: '#E63900',
      headerBg: 'bg-[#2B2B11] border-b border-[#3D3D1F]',
      headerText: 'text-white',
      logo: (
        <div className="flex flex-col">
          <span className="text-[7px] font-mono uppercase tracking-widest text-neutral-300">USA TODAY</span>
          <span className="font-sans font-black text-[16px] leading-none text-white tracking-tighter">10BEST</span>
        </div>
      ),
      subtitle: 'Search hotel deals in Chicago',
      activePartner: 'booking',
      partners: [
        {
          id: 'booking',
          name: 'Booking.com',
          logo: (
            <span className="font-sans font-bold text-[12px] text-[#003580] tracking-tight">
              Booking<span className="text-[#008009]">.com</span>
            </span>
          )
        },
        {
          id: 'travelocity',
          name: 'travelocity',
          logo: (
            <span className="font-sans font-bold text-[11px] text-[#005580] flex items-center gap-0.5">
              <span className="text-[#FF9E1B] text-[13px] leading-none">✱</span>travelocity
            </span>
          )
        },
        {
          id: 'tripadvisor',
          name: 'Tripadvisor',
          logo: (
            <span className="font-sans font-bold text-[10.5px] text-neutral-800 flex items-center gap-1">
              <span className="w-3 h-3 rounded-full border border-emerald-600 flex items-center justify-center text-[7px] font-black text-emerald-700">●</span>
              Tripadvisor
            </span>
          )
        }
      ],
      dates: { start: '03/11/2025', end: '03/16/2025' },
      ctaBg: 'bg-[#E63900] hover:bg-[#c42f00]',
      ctaText: 'Search Deals',
      bgContent: (
        <div className="p-4 bg-[#1F1F0E] text-white space-y-2">
          <div className="h-24 bg-[#2e2e17] rounded-md p-3 border border-[#444422] flex flex-col justify-end">
            <span className="text-[10px] text-amber-300/80 font-bold uppercase tracking-wider">Chicago, Illinois</span>
            <p className="text-[12px] font-bold text-neutral-200">Millennium Park & Loop Hotel Picks</p>
          </div>
          <p className="text-[10px] text-neutral-400">
            Top recommended architecture river cruises and premier boutique stays in downtown Chicago.
          </p>
        </div>
      ),
      notes: 'Customized for USA TODAY 10Best with deep olive earthy tones, Tripadvisor integration, and red-orange search button.'
    }
  ];

  const currentMockup = mockups[activeMockupIndex];

  const handlePartnerSelect = (mockupId: string, partnerId: string) => {
    setActivePartnerMap(prev => ({ ...prev, [mockupId]: partnerId }));
  };

  return (
    <section className="w-full border-b border-blue overflow-hidden bg-cream relative" id="vector-mockup-showcase-section">
      {/* BACKGROUND VECTOR HAWAIIAN TROPICAL BOTANICALS & TEXTURE */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-90 z-0">
        {/* Subtle Organic Grid / Paper Texture */}
        <div className="absolute inset-0 bg-[radial-gradient(#0052cc_0.75px,transparent_0.75px)] [background-size:24px_24px] opacity-10"></div>
        
        {/* TOP LEFT: Large Monstera Leaf SVG */}
        <svg 
          className="absolute -top-16 -left-20 w-80 sm:w-96 md:w-[480px] h-auto text-blue/[0.07] transition-transform duration-1000 ease-out hover:scale-105" 
          viewBox="0 0 500 500" 
          fill="currentColor"
        >
          <path d="M250,50 C260,110 310,130 350,110 C390,90 420,130 400,170 C380,210 430,240 420,290 C410,340 360,350 340,390 C320,430 260,440 240,480 C220,440 160,430 140,390 C120,350 70,340 60,290 C50,240 100,210 80,170 C60,130 90,90 130,110 C170,130 220,110 230,50 Z M240,120 L240,420 M240,180 C270,160 310,170 330,190 M240,240 C280,220 330,230 350,260 M240,310 C270,300 310,320 320,350 M240,180 C210,160 170,170 150,190 M240,240 C200,220 150,230 130,260 M240,310 C210,300 170,320 160,350" 
            stroke="currentColor" 
            strokeWidth="3" 
            fillOpacity="0.8" 
          />
        </svg>

        {/* BOTTOM RIGHT: Large Elegant Palm Frond / Fern Vector */}
        <svg 
          className="absolute -bottom-24 -right-20 w-96 sm:w-[460px] md:w-[560px] h-auto text-blue/[0.06]" 
          viewBox="0 0 600 600" 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="2.5"
        >
          <path d="M50,550 Q300,350 550,100" strokeWidth="4" />
          <path d="M150,470 Q240,430 310,470" />
          <path d="M200,420 Q310,370 380,420" />
          <path d="M260,360 Q380,300 460,360" />
          <path d="M330,290 Q440,220 520,280" />
          <path d="M400,220 Q500,140 570,200" />
          <path d="M120,500 Q190,480 230,530" />
          <path d="M180,440 Q260,410 300,470" />
          <path d="M240,380 Q330,340 380,410" />
          <path d="M300,310 Q400,260 450,330" />
          <path d="M380,240 Q470,180 520,250" />
        </svg>

        {/* TOP RIGHT: Subtle Exotic Plumeria Flower Vector */}
        <svg 
          className="absolute top-12 right-16 w-32 h-32 text-blue/[0.04]" 
          viewBox="0 0 200 200" 
          fill="currentColor"
        >
          <path d="M100,100 C110,60 140,50 160,70 C180,90 170,120 130,130 C130,170 100,180 80,160 C60,140 70,110 50,90 C30,70 60,40 90,60 Z" />
        </svg>
      </div>

      <div className="relative z-10">
        {/* HEADER BAR */}
        <div className="p-[70px_30px_35px] max-w-6xl">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <p className="font-mono text-[11px] tracking-[3px] opacity-60 mb-3 uppercase">
                Vector Device Staging // Interactive Ad Units
              </p>
              <h3 className="font-sans font-bold text-[clamp(28px,4.5vw,56px)] leading-[1.1em] tracking-normal text-blue">
                Travel Search Mockups in Situ
              </h3>
            </div>

            {/* VIEW MODE TOGGLE */}
            <div className="flex items-center gap-2 bg-white/80 border border-blue p-1 rounded-full shrink-0 shadow-xs self-start md:self-auto">
              <button
                onClick={() => setViewMode('single')}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full font-mono text-[11px] font-semibold transition-all cursor-pointer ${
                  viewMode === 'single'
                    ? 'bg-blue text-cream shadow-xs'
                    : 'text-blue hover:opacity-75'
                }`}
                id="btn-view-single"
              >
                <Smartphone size={13} />
                Focused Device
              </button>
              <button
                onClick={() => setViewMode('grid')}
                className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full font-mono text-[11px] font-semibold transition-all cursor-pointer ${
                  viewMode === 'grid'
                    ? 'bg-blue text-cream shadow-xs'
                    : 'text-blue hover:opacity-75'
                }`}
                id="btn-view-grid"
              >
                <Layers size={13} />
                4-Up Comparison
              </button>
            </div>
          </div>

          <p className="font-mono text-[16px] leading-[1.8em] text-blue/80 max-w-3xl mt-5">
            Complete high-intent mobile search ad units engineered for Tier 1 travel publishers. Each unit is encased in a vector smartphone frame displaying live interactive metasearch tabs, customized publisher themes, and contextual search parameters.
          </p>

          {/* PARTNER TABS (SINGLE VIEW) */}
          {viewMode === 'single' && (
            <div className="flex flex-wrap items-center gap-2 mt-8 pt-6 border-t border-blue/20">
              <span className="font-mono text-[11px] uppercase tracking-[2px] opacity-60 mr-2">Publisher:</span>
              {mockups.map((m, idx) => (
                <button
                  key={m.id}
                  onClick={() => setActiveMockupIndex(idx)}
                  className={`font-mono text-[11px] px-4 py-2 rounded-full border transition-all cursor-pointer flex items-center gap-2 ${
                    activeMockupIndex === idx
                      ? 'bg-blue text-cream border-blue font-bold shadow-xs scale-[1.02]'
                      : 'bg-white/90 text-blue border-blue/30 hover:border-blue'
                  }`}
                  id={`mockup-tab-${m.id}`}
                >
                  <span className="w-2 h-2 rounded-full" style={{ backgroundColor: m.themeColor }}></span>
                  {m.name}
                </button>
              ))}
            </div>
          )}
        </div>

        {/* STAGING AREA */}
        <div className="px-6 sm:px-10 pb-20 max-w-6xl">
          {viewMode === 'single' ? (
            /* ==================================================== */
            /* SINGLE FOCUSED VECTOR SMARTPHONE PRESENTATION */
            /* ==================================================== */
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              {/* LEFT: VECTOR PHONE FRAME */}
              <div className="lg:col-span-7 flex justify-center">
                <div className="relative group">
                  {/* Subtle Vector Phone Drop Shadow with Glow */}
                  <div 
                    className="absolute -inset-4 rounded-[54px] blur-xl opacity-25 transition-all duration-700 pointer-events-none"
                    style={{ backgroundColor: currentMockup.themeColor }}
                  ></div>

                  {/* VECTOR SMARTPHONE FRAME (iPhone Pro Aspect Ratio) */}
                  <div className="relative w-[320px] sm:w-[350px] bg-[#1a1a1e] p-[11px] rounded-[52px] shadow-[0_25px_60px_-15px_rgba(0,40,120,0.35),0_0_0_1px_rgba(255,255,255,0.15)] border-4 border-[#2c2d33] transition-transform duration-500">
                    {/* Titanium Outer Edge Highlight */}
                    <div className="absolute inset-0 rounded-[48px] pointer-events-none border border-white/15"></div>

                    {/* PHYSICAL BUTTON NOTCHES (Vector side details) */}
                    <div className="absolute -left-[7px] top-24 w-[3px] h-7 bg-[#232428] rounded-l-xs"></div>
                    <div className="absolute -left-[7px] top-36 w-[3px] h-12 bg-[#232428] rounded-l-xs"></div>
                    <div className="absolute -left-[7px] top-52 w-[3px] h-12 bg-[#232428] rounded-l-xs"></div>
                    <div className="absolute -right-[7px] top-36 w-[3px] h-16 bg-[#232428] rounded-r-xs"></div>

                    {/* SCREEN CONTAINER */}
                    <div className="relative w-full bg-white rounded-[40px] overflow-hidden flex flex-col min-h-[640px] shadow-inner select-none">
                      
                      {/* 1. STATUS BAR */}
                      <div className={`px-6 pt-3 pb-1 flex items-center justify-between z-30 ${currentMockup.id === 'timeout' ? 'bg-black text-white' : currentMockup.id === 'tenbest' ? 'bg-[#2B2B11] text-white' : currentMockup.headerBg + ' ' + currentMockup.headerText}`}>
                        <span className="font-sans font-bold text-[12px] tracking-tight">{currentMockup.time}</span>
                        {/* Dynamic Island / Speaker Pill */}
                        <div className="w-20 h-4 bg-black rounded-full flex items-center justify-end px-2">
                          <div className="w-2 h-2 rounded-full bg-blue-950/80 border border-white/20"></div>
                        </div>
                        <div className="flex items-center gap-1.5 text-[10px]">
                          <span>5G</span>
                          <div className="w-5 h-2.5 border border-current rounded-xs p-0.5 flex items-center">
                            <div className="w-3 h-full bg-current rounded-2xs"></div>
                          </div>
                        </div>
                      </div>

                      {/* 2. SAFARI URL BAR */}
                      <div className={`px-4 py-2 flex items-center justify-between border-b border-black/10 z-20 ${currentMockup.id === 'timeout' ? 'bg-neutral-900 text-white border-white/10' : currentMockup.id === 'tenbest' ? 'bg-[#22220d] text-white border-[#3a3a18]' : currentMockup.headerBg + ' ' + currentMockup.headerText}`}>
                        <div className="flex items-center gap-2">
                          <Menu size={16} className="opacity-80" />
                        </div>
                        <div className="bg-black/15 backdrop-blur-xs px-4 py-1 rounded-full text-[11px] font-mono tracking-tight flex items-center gap-1.5 opacity-95">
                          <span className="opacity-60 text-[9px]">🔒</span> {currentMockup.url}
                        </div>
                        <RotateCw size={14} className="opacity-80" />
                      </div>

                      {/* 3. PUBLISHER HEADER BANNER */}
                      <div className={`px-4 py-3 flex items-center justify-between z-20 ${currentMockup.headerBg} ${currentMockup.headerText}`}>
                        {currentMockup.logo}
                      </div>

                      {/* 4. BACKGROUND PUBLISHER CONTENT (Behind Modal) */}
                      <div className="relative flex-1 overflow-hidden bg-neutral-100">
                        {currentMockup.bgContent}

                        {/* DARKENED BACKDROP OVERLAY FOR THE MODAL */}
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px] z-10"></div>

                        {/* 5. TIKI DDU RETENTION SEARCH MODAL (The core design work) */}
                        <div className="absolute inset-x-3 top-3 bottom-4 z-20 flex flex-col justify-start">
                          <motion.div 
                            key={currentMockup.id}
                            initial={{ scale: 0.96, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.25 }}
                            className="bg-white rounded-2xl shadow-2xl border border-black/10 overflow-hidden flex flex-col"
                          >
                            {/* Modal Header */}
                            <div className={`p-4 relative ${
                              currentMockup.id === 'timeout' 
                                ? 'bg-black text-white' 
                                : currentMockup.id === 'tenbest' 
                                ? 'bg-[#2B2B11] text-white' 
                                : 'bg-[#f8f9fa] text-neutral-900'
                            }`}>
                              <button className="absolute top-3.5 right-3.5 text-current opacity-70 hover:opacity-100">
                                <X size={16} />
                              </button>
                              <h4 className="font-sans font-bold text-[17px] leading-[1.25em] max-w-[210px] tracking-tight">
                                {currentMockup.subtitle}
                              </h4>
                            </div>

                            {/* PARTNER SELECTION TABS */}
                            <div className="grid grid-cols-3 border-b border-neutral-200 bg-neutral-100/90 text-center">
                              {currentMockup.partners.map((partner) => {
                                const isSelected = (activePartnerMap[currentMockup.id] || currentMockup.partners[0].id) === partner.id;
                                return (
                                  <button
                                    key={partner.id}
                                    onClick={() => handlePartnerSelect(currentMockup.id, partner.id)}
                                    className={`py-2.5 px-1 flex items-center justify-center relative transition-all cursor-pointer ${
                                      isSelected
                                        ? 'bg-white shadow-xs font-bold'
                                        : 'opacity-70 hover:opacity-100 hover:bg-neutral-50'
                                    }`}
                                  >
                                    {isSelected && (
                                      <div 
                                        className="absolute top-0 left-0 right-0 h-[3px]"
                                        style={{ backgroundColor: currentMockup.themeColor }}
                                      ></div>
                                    )}
                                    {partner.logo}
                                  </button>
                                );
                              })}
                            </div>

                            {/* SEARCH FIELDS FORM */}
                            <div className="p-4 space-y-3 bg-white">
                              {/* Destination Input */}
                              <div className="bg-[#f2f4f7] rounded-lg p-2.5 flex items-center gap-2 border border-neutral-200/80">
                                <MapPin size={15} className="text-neutral-500 shrink-0" />
                                <span className="text-[12px] font-medium text-neutral-800">{currentMockup.city}</span>
                              </div>

                              {/* Dates Grid */}
                              <div className="grid grid-cols-2 gap-2">
                                <div className="bg-[#f2f4f7] rounded-lg p-2.5 flex items-center gap-2 border border-neutral-200/80">
                                  <Calendar size={13} className="text-neutral-500 shrink-0" />
                                  <span className="text-[11px] font-medium text-neutral-700">{currentMockup.dates.start}</span>
                                </div>
                                <div className="bg-[#f2f4f7] rounded-lg p-2.5 flex items-center gap-2 border border-neutral-200/80">
                                  <Calendar size={13} className="text-neutral-500 shrink-0" />
                                  <span className="text-[11px] font-medium text-neutral-700">{currentMockup.dates.end}</span>
                                </div>
                              </div>

                              {/* Call To Action Button */}
                              <button 
                                className={`w-full py-3 rounded-lg text-white font-sans font-bold text-[14px] shadow-md transition-all active:scale-[0.99] cursor-pointer ${currentMockup.ctaBg}`}
                              >
                                {currentMockup.ctaText}
                              </button>
                            </div>
                          </motion.div>
                        </div>
                      </div>

                      {/* 6. BOTTOM SAFARI NAVIGATION BAR */}
                      <div className="px-5 py-2.5 bg-[#f8f9fa] border-t border-neutral-200 flex items-center justify-between text-neutral-600 text-[14px] z-30">
                        <ChevronLeft size={18} className="opacity-70" />
                        <ChevronRight size={18} className="opacity-40" />
                        <Share size={16} className="opacity-70" />
                        <BookOpen size={16} className="opacity-70" />
                        <Copy size={16} className="opacity-70" />
                      </div>

                      {/* Home Indicator Bar */}
                      <div className="h-4 bg-[#f8f9fa] flex items-center justify-center pb-1">
                        <div className="w-28 h-1 bg-neutral-900/40 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* RIGHT: DETAILED DESIGN RATIONALE & METADATA */}
              <div className="lg:col-span-5 flex flex-col gap-6">
                <div className="bg-white/80 border border-blue p-6 sm:p-8 rounded-2xl shadow-sm backdrop-blur-xs">
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-blue/20">
                    <span className="font-mono text-[11px] uppercase tracking-[2px] opacity-60">Publisher Unit</span>
                    <span 
                      className="font-mono text-[11px] font-bold px-2.5 py-0.5 rounded-full text-white"
                      style={{ backgroundColor: currentMockup.themeColor }}
                    >
                      {currentMockup.city}
                    </span>
                  </div>

                  <h4 className="font-sans font-bold text-[16px] text-blue mb-2">
                    {currentMockup.name} Retention Placement
                  </h4>

                  <p className="font-mono text-[16px] leading-[1.8em] text-blue/80 mb-6">
                    {currentMockup.notes}
                  </p>

                  <div className="space-y-3 pt-4 border-t border-blue/15 text-[11px] font-mono">
                    <div className="flex justify-between py-1 border-b border-blue/10">
                      <span className="opacity-60 uppercase">Metasearch Partners</span>
                      <span className="font-bold text-blue">
                        {currentMockup.partners.map(p => p.name).join(', ')}
                      </span>
                    </div>
                    <div className="flex justify-between py-1 border-b border-blue/10">
                      <span className="opacity-60 uppercase">Travel Dates</span>
                      <span className="font-bold text-blue">
                        {currentMockup.dates.start} → {currentMockup.dates.end}
                      </span>
                    </div>
                    <div className="flex justify-between py-1">
                      <span className="opacity-60 uppercase">Interactive State</span>
                      <span className="font-bold text-emerald-700">Live Vector Simulation</span>
                    </div>
                  </div>
                </div>

                {/* Quick Switch Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  <button
                    onClick={() => setActiveMockupIndex((prev) => (prev > 0 ? prev - 1 : mockups.length - 1))}
                    className="p-3 bg-white/90 border border-blue text-blue font-mono text-[11px] font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-blue hover:text-cream transition-all cursor-pointer"
                  >
                    <ChevronLeft size={14} /> PREVIOUS MOCKUP
                  </button>
                  <button
                    onClick={() => setActiveMockupIndex((prev) => (prev < mockups.length - 1 ? prev + 1 : 0))}
                    className="p-3 bg-white/90 border border-blue text-blue font-mono text-[11px] font-bold rounded-xl flex items-center justify-center gap-2 hover:bg-blue hover:text-cream transition-all cursor-pointer"
                  >
                    NEXT MOCKUP <ChevronRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            /* ==================================================== */
            /* 4-UP COMPARISON GRID (ALL FOUR MOCKUPS IN VECTOR FRAMES) */
            /* ==================================================== */
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {mockups.map((m, idx) => (
                <div 
                  key={m.id}
                  onClick={() => { setActiveMockupIndex(idx); setViewMode('single'); }}
                  className="bg-white/70 border border-blue p-4 rounded-2xl hover:border-blue hover:shadow-xl transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div className="text-center mb-3">
                    <span className="font-mono text-[13px] font-bold text-blue uppercase tracking-[1px]">{m.name}</span>
                    <p className="font-mono text-[12px] text-blue/70 font-medium mt-0.5">{m.city}</p>
                  </div>

                  {/* MINI VECTOR SMARTPHONE */}
                  <div className="w-full bg-[#1a1a1e] p-2 rounded-[32px] border-2 border-[#2c2d33] shadow-md group-hover:scale-[1.02] transition-transform">
                    <div className="w-full bg-white rounded-[24px] overflow-hidden flex flex-col text-[8px]">
                      {/* Mini Header */}
                      <div className={`px-2 py-1 flex items-center justify-between ${m.headerBg} ${m.headerText}`}>
                        <span className="font-bold text-[8px]">{m.time}</span>
                        <div className="w-8 h-2 bg-black rounded-full"></div>
                        <span className="text-[7px]">5G</span>
                      </div>

                      {/* Mini Modal Mockup */}
                      <div className="p-2 bg-neutral-900 text-white min-h-[220px] relative flex flex-col justify-center">
                        <div className="bg-white rounded-lg p-2 text-neutral-900 shadow-md">
                          <p className="font-bold text-[9px] leading-tight mb-1 text-neutral-800 truncate">{m.subtitle}</p>
                          <div className="flex gap-1 border-b border-neutral-200 pb-1 mb-1.5">
                            {m.partners.map((p, pIdx) => (
                              <div key={p.id} className={`text-[6px] px-1 py-0.5 rounded-2xs ${pIdx === 0 ? 'bg-neutral-100 font-bold border-t border-blue' : 'opacity-60'}`}>
                                {p.name}
                              </div>
                            ))}
                          </div>
                          <div className="bg-neutral-100 p-1 rounded-xs text-[7px] mb-1 font-medium">{m.city}</div>
                          <div className="grid grid-cols-2 gap-1 text-[6px] mb-1.5">
                            <div className="bg-neutral-100 p-0.5 rounded-2xs text-center">{m.dates.start}</div>
                            <div className="bg-neutral-100 p-0.5 rounded-2xs text-center">{m.dates.end}</div>
                          </div>
                          <div className={`w-full py-1 rounded-xs text-white text-[7px] font-bold text-center ${m.ctaBg}`}>
                            Search Deals
                          </div>
                        </div>
                      </div>

                      {/* Mini Footer */}
                      <div className="py-1 bg-neutral-100 flex justify-center">
                        <div className="w-12 h-0.5 bg-neutral-800 rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-blue/15 flex items-center justify-between text-[11px] font-mono text-blue font-bold">
                    <span>Inspect Unit</span>
                    <span>→</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
