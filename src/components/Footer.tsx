import { Github, Linkedin, Mail, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="relative border-t border-blue mt-20">
      <div className="flex flex-col lg:flex-row border-b border-blue">
        <div className="w-full lg:w-[280px] shrink-0 border-b lg:border-b-0 lg:border-r border-blue p-8 flex flex-col gap-3.5">
          <h3 className="font-sans font-semibold text-[17px] tracking-[-0.6px]">Lesley Piercefield<br />© 2026</h3>
          <p className="font-mono font-normal text-[12px] leading-[1.9em] opacity-85">
            Working at the intersection of data, AI, and human experience. If you're building something that needs to feel as good as it performs — let's talk.
          </p>
        </div>

        <div className="flex-1 flex flex-col sm:flex-row">
          <div className="flex-1 p-8 border-b sm:border-b-0 sm:border-r border-blue">
            <h3 className="font-sans font-semibold text-[18px] tracking-[-0.6px] mb-5">About:</h3>
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-[52px] h-[52px] rounded-full bg-blue text-cream flex items-center justify-center font-sans font-semibold text-[15px] tracking-[1px] shrink-0">
                  LP
                </div>
                <p className="font-mono font-normal text-[13px] leading-[1.9em] max-w-[260px]">
                  Senior Product Designer based in Los Angeles. 15+ years designing AI-driven interfaces for travel tech, streaming, and fintech.
                </p>
              </div>
              <a href="/about" className="inline-flex items-center gap-2 font-mono font-normal text-[11px] tracking-[1.5px] text-blue hover:gap-3 transition-all">
                View full bio
                <svg width="11" height="10" viewBox="0 0 13 13" fill="none"><path d="M10.892 11.12V3.593L1.493 13 0 11.507 9.407 2.108H1.88V0H13V11.12H10.892Z" fill="#0066ff"/></svg>
              </a>
            </div>
          </div>

          <div className="flex-1 p-8">
            <h3 className="font-sans font-semibold text-[18px] tracking-[-0.6px] mb-5">Find me:</h3>
            <div className="flex flex-col">
              <a href="#" className="flex items-center justify-between font-mono font-normal text-[12px] tracking-[1.5px] py-3.25 border-b border-blue hover:tracking-[2.4px] hover:opacity-70 transition-all">LinkedIn</a>
              <a href="#" className="flex items-center justify-between font-mono font-normal text-[12px] tracking-[1.5px] py-3.25 border-b border-blue hover:tracking-[2.4px] hover:opacity-70 transition-all">Resume PDF</a>
              <a href="mailto:lpiercefield@icloud.com" className="flex items-center justify-between font-mono font-normal text-[12px] tracking-[1.5px] py-3.25 hover:tracking-[2.4px] hover:opacity-70 transition-all">Email</a>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-6 sm:px-8 border-b border-blue gap-3">
        <h3 className="font-sans font-semibold text-[19px] tracking-[-0.7px] leading-[1.5em]">
          Contact me:<br />
          <a href="mailto:lpiercefield@icloud.com" className="text-blue">lpiercefield@icloud.com</a>
        </h3>
        <span className="font-sans font-semibold text-[17px] tracking-[-0.5px] opacity-60">Travel / Streaming / Data / AI</span>
      </div>

      <div className="flex items-center gap-1.5 p-4 sm:px-8 border-b border-blue">
        {[
          { icon: <Linkedin size={14} />, title: "LinkedIn" },
          { icon: <Mail size={14} />, title: "Email" },
          { icon: <FileText size={14} />, title: "Resume" }
        ].map((social, i) => (
          <a key={i} href="#" className="w-9 h-9 border border-blue rounded-full flex items-center justify-center transition-all hover:bg-blue hover:scale-110 group relative overflow-hidden" title={social.title}>
            <div className="absolute inset-0 rounded-full bg-radial-[circle_at_30%_30%] from-white/28 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
            <span className="text-blue group-hover:text-cream transition-colors">{social.icon}</span>
          </a>
        ))}
      </div>

      <div className="p-12 sm:p-8 border-b border-blue flex flex-col gap-3.5 min-h-[160px] justify-center">
        <span className="font-sans font-semibold text-[clamp(38px,8vw,120px)] leading-none tracking-[-3px] text-blue">Lesley Piercefield</span>
        <span className="font-mono font-normal text-[11px] tracking-[2px] opacity-50">Product Designer · Los Angeles · 2026</span>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-between p-3.5 sm:px-8 bg-blue/3">
        <div className="flex items-center gap-3 mb-2 sm:mb-0">
          <span className="font-sans font-semibold text-[16px] tracking-[3px] text-blue">LP</span>
          <p className="font-mono font-normal text-[11px] tracking-[0.2px] opacity-80">© 2026 Lesley Piercefield — Product Designer · Los Angeles</p>
        </div>
        <p className="font-mono font-normal text-[11px] tracking-[0.2px] opacity-80">
          Portfolio vibe coded with AI &nbsp;·&nbsp; <a href="mailto:lpiercefield@icloud.com" className="underline underline-offset-3 hover:opacity-100">lpiercefield@icloud.com</a>
        </p>
      </div>
    </footer>
  );
}
