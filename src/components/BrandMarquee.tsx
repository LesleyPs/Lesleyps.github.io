import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";

interface Brand {
  name: string;
  logo: string;
  type?: "employer";
}

const ALL_BRANDS: Brand[] = [
  { name: "Clicktripz", logo: "https://raw.githubusercontent.com/LesleyPs/old-protflio/main/assets/images/Clicktripz.svg", type: "employer" },
  { name: "Tiki", logo: "https://raw.githubusercontent.com/LesleyPs/old-protflio/main/assets/images/tiki.svg", type: "employer" },
  { name: "Expedia", logo: "https://raw.githubusercontent.com/LesleyPs/old-protflio/main/assets/images/Expedia.svg" },
  { name: "Tripadvisor", logo: "https://raw.githubusercontent.com/LesleyPs/old-protflio/main/assets/images/tripadvisor.svg" },
  { name: "Vrbo", logo: "https://raw.githubusercontent.com/LesleyPs/old-protflio/main/assets/images/Vrbo.svg" },
  { name: "Priceline", logo: "https://raw.githubusercontent.com/LesleyPs/old-protflio/main/assets/images/priceline.svg" },
  { name: "Spirit Airlines", logo: "https://raw.githubusercontent.com/LesleyPs/old-protflio/main/assets/images/spirit.svg" },
  { name: "Wetter.com", logo: "https://raw.githubusercontent.com/LesleyPs/old-protflio/main/assets/images/wetter.svg" },
  { name: "MapQuest", logo: "https://raw.githubusercontent.com/LesleyPs/old-protflio/main/assets/images/mapquest.svg" },
  { name: "HotelPlanner", logo: "https://raw.githubusercontent.com/LesleyPs/old-protflio/main/assets/images/HotelPlanner.svg" },
  { name: "StudentUniverse", logo: "https://raw.githubusercontent.com/LesleyPs/old-protflio/main/assets/images/student_Universe.svg" }
];

function BrandLogoImage({ brand }: { brand: Brand }) {
  if (brand.name.toLowerCase() === "tiki") {
    // Beautiful exact inline rendering of the verified custom Tiki SVG with full support for original responsive styling
    return (
      <svg
        width="160"
        height="50"
        viewBox="0 0 160 50"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="h-[36px] sm:h-[48px] md:h-[56px] w-auto max-w-full object-contain transition-all duration-300 ease-out transform group-hover/brand:scale-[1.08]"
      >
        <g>
          <path fillRule="evenodd" clipRule="evenodd" d="M30.0789 9.89547C31.6443 7.40658 33.0172 4.7981 34.1718 2.1124C34.2111 2.02011 34.2504 1.92688 34.2896 1.8346L29.8165 0.000183105C29.7801 0.0849353 29.7437 0.170629 29.7073 0.255382C28.9366 2.04742 28.0587 3.80273 27.085 5.50625C27.5723 6.30856 28.0817 7.09865 28.613 7.87177C29.084 8.55733 29.5733 9.23252 30.0789 9.89547Z" fill="#85E2D2"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M46.2018 26.2891C44.8893 27.0038 43.6082 27.7751 42.3665 28.6009C42.0792 28.7912 41.7939 28.9862 41.5115 29.182C43.6753 30.4288 45.9213 31.5391 48.222 32.4958C48.6978 32.6936 49.1756 32.8848 49.6573 33.0702L51.5021 28.6613C51.0359 28.4823 50.5715 28.2969 50.1101 28.1046C48.7859 27.5538 47.481 26.9473 46.2018 26.2891Z" fill="#85E2D2"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M21.4237 9.89547C21.64 10.2392 21.8593 10.5801 22.0834 10.9191C22.2806 11.2185 22.4807 11.5161 22.6837 11.8118C22.7076 11.8476 22.7325 11.8824 22.7574 11.9182C23.6947 13.2761 24.6952 14.5982 25.7512 15.8761C25.9983 16.1746 26.2481 16.4722 26.5019 16.7669C26.7546 17.0599 27.0102 17.3499 27.2687 17.638C28.0749 18.5383 28.9098 19.414 29.7705 20.2607C30.929 21.4001 32.1392 22.4935 33.3934 23.5339C34.5855 22.6064 35.8119 21.7222 37.0681 20.8879C37.1935 20.805 37.3179 20.723 37.4433 20.6411C35.9612 19.465 34.5423 18.2115 33.1981 16.8894C32.1775 15.8856 31.1981 14.8394 30.2617 13.7564C30.0032 13.456 29.7475 13.1537 29.4957 12.8486C29.242 12.5416 28.9921 12.2309 28.7451 11.9182C28.0328 11.0142 27.3492 10.0885 26.7001 9.14305C26.3754 8.67127 26.0596 8.19289 25.7512 7.70981C25.5225 7.35196 25.2974 6.99035 25.0772 6.62685C24.8522 6.25583 24.633 5.88198 24.4175 5.50625C23.4439 3.80273 22.5659 2.04742 21.7952 0.255382C21.7588 0.170629 21.7224 0.0849353 21.686 0.000183105L17.2129 1.8346C17.2522 1.92688 17.2915 2.02011 17.3307 2.1124C18.4853 4.7981 19.8583 7.40657 21.4237 9.89547Z" fill="#85E2D2"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M5.30042 23.711C6.61305 22.9963 7.89409 22.2251 9.13587 21.3992C9.4231 21.2089 9.70841 21.0141 9.99085 20.8181C7.82707 19.5714 5.58096 18.4612 3.28026 17.5044C2.80442 17.3066 2.32666 17.1155 1.84507 16.93L0.00012207 21.3389C0.466388 21.5179 0.930739 21.7034 1.39221 21.8955C2.71634 22.4464 4.02131 23.0528 5.30042 23.711Z" fill="#85E2D2"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M30.0788 40.1047C29.8624 39.761 29.6431 39.42 29.4191 39.0811C29.2219 38.7815 29.0218 38.484 28.8188 38.1883C28.7949 38.1526 28.77 38.1177 28.7451 38.0819C27.8078 36.724 26.8072 35.4019 25.7512 34.124C25.5042 33.8255 25.2543 33.5279 25.0007 33.2332C24.7479 32.9403 24.4922 32.6503 24.2337 32.3621C23.4276 31.4618 22.5927 30.5861 21.732 29.7394C20.5735 28.6 19.3633 27.5068 18.109 26.4662C16.9171 27.3937 15.6907 28.2779 14.4345 29.1123C14.3091 29.1951 14.1847 29.2771 14.0591 29.359C15.5412 30.5351 16.9601 31.7886 18.3044 33.1107C19.325 34.1146 20.3045 35.1607 21.2408 36.2437C21.4993 36.5441 21.7549 36.8464 22.0068 37.1515C22.2605 37.4585 22.5103 37.7692 22.7573 38.0819C23.4698 38.986 24.1532 39.9117 24.8025 40.8571C25.127 41.3289 25.443 41.8072 25.7512 42.2903C25.9801 42.6482 26.205 43.0098 26.4252 43.3733C26.6503 43.7443 26.8696 44.1182 27.0849 44.4939C28.0587 46.1974 28.9365 47.9527 29.7074 49.7448C29.7436 49.8294 29.78 49.9151 29.8164 49.9999L34.2895 48.1655C34.2503 48.0733 34.2111 47.98 34.1717 47.8877C33.0171 45.202 31.6442 42.5935 30.0788 40.1047Z" fill="#85E2D2"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M17.1991 24.2738C17.5045 24.03 17.809 23.7842 18.1095 23.5347C19.3638 22.4931 20.5731 21.3998 21.7315 20.2604C22.5932 19.4138 23.4271 18.538 24.2342 17.6387C23.182 16.3835 22.1824 15.0877 21.2403 13.7562C20.305 14.8391 19.3246 15.8863 18.3039 16.8891C16.9606 18.2113 15.5408 19.4656 14.0587 20.6408C13.7437 20.8913 13.4249 21.138 13.1041 21.3809C12.7796 21.6267 12.4522 21.8688 12.1219 22.107C11.5646 22.5092 11.0007 22.9009 10.4281 23.2803C9.52434 23.8812 8.60043 24.4547 7.66023 24.9999C7.27726 25.2221 6.89142 25.4387 6.50271 25.6515C6.10441 25.8691 5.70421 26.0819 5.30018 26.2891C4.02106 26.9473 2.71705 27.5537 1.39198 28.1047C0.931451 28.2967 0.467101 28.4823 -0.00012207 28.6612L1.84483 33.0702C2.32642 32.8847 2.80513 32.6935 3.28001 32.4958C5.58166 31.539 7.82778 30.4287 9.99156 29.182C10.3535 28.9738 10.7135 28.762 11.0706 28.5453C11.4239 28.3316 11.7743 28.1141 12.1219 27.8937C12.4646 27.6762 12.8045 27.4558 13.1424 27.2308C14.2071 26.5236 15.2497 25.7778 16.2685 24.9999C16.5805 24.7607 16.8918 24.5187 17.1991 24.2738Z" fill="#85E2D2"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M21.4237 40.1047C19.8583 42.5935 18.4853 45.202 17.3307 47.8877C17.2915 47.98 17.2522 48.0733 17.2129 48.1655L21.686 49.9999C21.7224 49.9151 21.7588 49.8296 21.7952 49.7448C22.5659 47.9527 23.4439 46.1974 24.4175 44.4939C23.9303 43.6915 23.4209 42.9015 22.8895 42.1275C22.4185 41.4428 21.9292 40.7676 21.4237 40.1047Z" fill="#85E2D2"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M45.0001 24.3485C45.3983 24.1309 45.7986 23.9181 46.2017 23.7109C47.4807 23.0527 48.7857 22.4463 50.1107 21.8953C50.5713 21.7032 51.0357 21.5177 51.5029 21.3388L49.6569 16.9297C49.1763 17.1153 48.6977 17.3065 48.2218 17.5042C45.9211 18.461 43.675 19.5713 41.5112 20.818C41.1493 21.0261 40.7893 21.2389 40.4322 21.4546C40.0789 21.6684 39.7285 21.8859 39.3809 22.1063C39.0382 22.3238 38.6984 22.5442 38.3603 22.7692C37.2947 23.4764 36.2521 24.2222 35.2343 25.0001C34.9213 25.2393 34.611 25.4813 34.3037 25.7261C33.9973 25.97 33.6938 26.2158 33.3932 26.4663C32.139 27.5068 30.9288 28.6002 29.7713 29.7396C28.9096 30.5861 28.0747 31.462 27.2686 32.3622C28.3208 33.6165 29.3203 34.9123 30.2625 36.2438C31.1978 35.1609 32.1782 34.1137 33.1979 33.1109C34.5422 31.7887 35.962 30.5353 37.4431 29.3592C37.7591 29.1087 38.0779 28.8629 38.3986 28.6189C38.7233 28.3732 39.0506 28.1311 39.3809 27.8939C39.9382 27.4908 40.5021 27.0991 41.0737 26.7196C41.9775 26.1188 42.9014 25.5453 43.8425 25.0001C44.2255 24.7779 44.6114 24.5613 45.0001 24.3485ZM45.0001 24.3485Z" fill="#85E2D2"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M63.825 15.5647H73.8961V39.8772H79.2796V15.5647H89.3509V10.2695H63.825V15.5647Z" fill="#85E2D2"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M99.2113 39.9766H104.594V10.1712H99.2113V39.9766Z" fill="#85E2D2"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M154.617 39.9766H160V10.1712H154.617V39.9766Z" fill="#85E2D2"/>
          <path fillRule="evenodd" clipRule="evenodd" d="M147.234 10.0238H139.559L129.617 19.8117C127.918 21.4832 125.659 22.4042 123.257 22.4042H123.173H122.425V22.311V10.0558H117.043V39.8603H122.425V27.7436H123.173C125.582 27.7436 127.928 28.7164 129.609 30.4132L138.976 39.8631H146.559L133.497 26.686C132.921 26.1051 132.293 25.5796 131.629 25.1078C132.273 24.6539 132.885 24.1482 133.457 23.586L147.234 10.0238Z" fill="#85E2D2"/>
        </g>
      </svg>
    );
  }

  const [svgContent, setSvgContent] = useState<string | null>(null);
  const [fetchFailed, setFetchFailed] = useState(false);

  useEffect(() => {
    let active = true;
    setSvgContent(null);
    setFetchFailed(false);

    fetch(brand.logo, { referrerPolicy: "no-referrer" })
      .then((res) => {
        if (!res.ok) throw new Error("Failed to load");
        return res.text();
      })
      .then((text) => {
        if (!active) return;
        
        let cleaned = text;
        // Clean XML header blocks, comments and doctor declarations
        cleaned = cleaned.replace(/<\?xml[^>]*\?>/gi, "");
        cleaned = cleaned.replace(/<!DOCTYPE[^>]*>/gi, "");
        
        // Remove white background rectangles (case-insensitive for both class, fill and attributes)
        cleaned = cleaned.replace(/<rect[^>]+fill="(?:white|#fff|#ffffff|rgb\(255,\s*255,\s*255\))"[^>]*\/?>/gi, "");
        cleaned = cleaned.replace(/<rect[^>]+fill='(?:white|#fff|#ffffff|rgb\(255,\s*255,\s*255\))'[^>]*\/?>/gi, "");
        
        // Remove rect elements with background/fill style declarations targeting white/white-ish hues
        cleaned = cleaned.replace(/<rect[^>]+style="[^"]*fill:\s*(?:white|#fff|#ffffff|rgb\(255,\s*255,\s*255\))[^"]*"[^>]*\/?>/gi, "");
        cleaned = cleaned.replace(/<rect[^>]+style='[^']*fill:\s*(?:white|#fff|#ffffff|rgb\(255,\s*255,\s*255\))[^']*'[^>]*\/?>/gi, "");

        // Universal fallback rect cleaning for white backdrops with any combination of quotes, casing or formatting
        cleaned = cleaned.replace(/<rect\b[^>]*(?:fill|style)="[^"]*(?:white|#fff|#ffffff|rgb\(\s*255\s*,\s*255\s*,\s*255\s*\))[^"]*"[^>]*\/?>/gi, "");
        cleaned = cleaned.replace(/<rect\b[^>]*(?:fill|style)='[^']*(?:white|#fff|#ffffff|rgb\(\s*255\s*,\s*255\s*,\s*255\s*\))[^']*'[^>]*\/?>/gi, "");

        // Locate and modify only the root <svg ...> tag to ensure reliable CSS scaling in the browser
        const svgOpenIndex = cleaned.toLowerCase().indexOf("<svg");
        if (svgOpenIndex !== -1) {
          const svgCloseIndex = cleaned.indexOf(">", svgOpenIndex);
          if (svgCloseIndex !== -1) {
            let svgTag = cleaned.substring(svgOpenIndex, svgCloseIndex + 1);
            
            // Strip any raw width, height, or class/className properties that would constrain browser layout
            svgTag = svgTag.replace(/\bwidth=(?:"[^"]*"|'[^']*'|\d+)/gi, "");
            svgTag = svgTag.replace(/\bheight=(?:"[^"]*"|'[^']*'|\d+)/gi, "");
            svgTag = svgTag.replace(/\bclass(?:Name)?=(?:"[^"]*"|'[^']*')/gi, "");
            
            // Inject polished, highly performant CSS classes with group-hover animation matching Tiki logo exactly
            svgTag = svgTag.replace(/<svg/i, '<svg class="h-[36px] sm:h-[48px] md:h-[56px] w-auto max-w-full object-contain transition-all duration-300 ease-out transform group-hover/brand:scale-[1.08]"');
            
            cleaned = cleaned.substring(0, svgOpenIndex) + svgTag + cleaned.substring(svgCloseIndex + 1);
          }
        }

        setSvgContent(cleaned);
      })
      .catch(() => {
        if (active) {
          setFetchFailed(true);
        }
      });

    return () => {
      active = false;
    };
  }, [brand.logo]);

  // If fetching is still in progress or fails, fallback to high fidelity image component paired with standard mix-blend-multiply
  if (fetchFailed || !svgContent) {
    return (
      <img
        src={brand.logo}
        alt={brand.name}
        title={brand.name}
        className="h-[36px] sm:h-[48px] md:h-[56px] max-w-full w-auto object-contain transition-all duration-300 ease-out transform group-hover/brand:scale-[1.08] mix-blend-multiply"
        referrerPolicy="no-referrer"
      />
    );
  }

  return (
    <div 
      className="h-[36px] sm:h-[48px] md:h-[56px] max-w-full w-auto flex items-center justify-center mix-blend-multiply"
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}

export function BrandMarquee() {
  const [page, setPage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPage((prev) => (prev + 1) % 3);
    }, 4500);

    return () => clearInterval(interval);
  }, []);

  // Distribute the 11 brands gracefully into 3 pages of exactly 4 slots
  const pages = [
    ALL_BRANDS.slice(0, 4),
    ALL_BRANDS.slice(4, 8),
    [...ALL_BRANDS.slice(8, 11), ALL_BRANDS[0]] // Wrap back to brand 0 to elegantly fill the 4th slot
  ];

  const currentBrands = pages[page];

  return (
    <div className="w-full">
      {/* 4-across dynamic layout (and 2-across on mobile) that displays the clean exit and entering animations beautifully */}
      <div className="max-w-5xl mx-auto py-8 px-4 sm:px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={`brand-page-${page}`}
            initial="initial"
            animate="animate"
            exit="exit"
            variants={{
              initial: { opacity: 0 },
              animate: { opacity: 1, transition: { staggerChildren: 0.05 } },
              exit: { opacity: 0, transition: { staggerChildren: 0.02, staggerDirection: -1 } }
            }}
            className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-10 md:gap-12"
          >
            {currentBrands.map((brand, i) => (
              <div
                key={`${brand.name}-${page}-${i}`}
                className="flex h-[120px] items-center justify-center overflow-hidden group/brand"
              >
                <motion.div
                  variants={{
                    initial: { scale: 0, opacity: 0, filter: "blur(4px)" },
                    animate: { scale: 1, opacity: 1, filter: "blur(0px)" },
                    exit: { scale: 0, opacity: 0, filter: "blur(4px)" }
                  }}
                  transition={{ 
                    duration: 0.45, 
                    ease: [0.34, 1.3, 0.64, 1] // Beautiful pop expand & shrink ease curves
                  }}
                  className="w-full h-full flex items-center justify-center"
                >
                  <BrandLogoImage brand={brand} />
                </motion.div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
