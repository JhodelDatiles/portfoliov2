import React, { useState } from "react";

const HireMeEnvelope = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* ================= ENVELOPE CONTAINER/TRIGGER ================= */}
      <div 
        onClick={() => setIsOpen(true)}
        className="relative overflow-hidden rounded-3xl border border-white/10 aspect-[16/10] w-full bg-[#020617] shadow-2xl transition-all duration-500 hover:scale-[1.02] flex items-center justify-center p-6 group cursor-pointer select-none"
      >
        {/* Dynamic Background Glow Effect */}
        <div className="absolute -inset-0.5 bg-gradient-to-r from-[#facc15]/20 to-transparent rounded-3xl blur opacity-30 group-hover:opacity-50 transition duration-500" />

        {/* Main Envelope Body */}
        <div className="relative w-full h-full rounded-2xl bg-[#facc15] border border-black/10 overflow-hidden flex flex-col justify-between p-4 shadow-inner">
          
          {/* ================= ENVELOPE FLAPS ================= */}
          <div 
            className={`absolute top-0 left-0 right-0 h-1/2 border-b border-black/[0.12] bg-gradient-to-b from-black/[0.05] to-transparent pointer-events-none origin-top transition-all duration-700 z-20 ${
              isOpen ? "rotate-x-180 -translate-y-full opacity-0 scale-y-0" : ""
            }`}
            style={{
              clipPath: "polygon(0 0, 100% 0, 50% 100%)",
              transformStyle: "preserve-3d"
            }}
          />
          
          {/* Side Folds */}
          <div className="absolute inset-0 pointer-events-none opacity-40 z-10">
            <div className="absolute top-0 bottom-0 left-0 w-1/2 border-r border-black/10 origin-bottom-left rotate-[28deg]" />
            <div className="absolute top-0 bottom-0 right-0 w-1/2 border-l border-black/10 origin-bottom-right -rotate-[28deg]" />
          </div>

          {/* ================= ENVELOPE HEADER ================= */}
          <div className="flex justify-between items-start z-10">
            <div className="flex flex-col">
              <span className="text-[10px] tracking-widest text-black/60 font-mono font-black uppercase">
                Priority Mail
              </span>
              <span className="text-[9px] font-mono font-bold text-black/40">
                CLASS: A-1
              </span>
            </div>
            <div className="w-8 h-10 border-2 border-dashed border-black/20 rounded flex items-center justify-center rotate-6 bg-white/40">
              <span className="text-[8px] font-bold text-black/60">PH</span>
            </div>
          </div>

          {/* ================= CENTRAL WAX SEAL ================= */}
          <div className="absolute inset-0 flex items-center justify-center z-30">
            <div className={`relative w-20 h-20 bg-red-600 rounded-full flex items-center justify-center shadow-lg border-2 border-red-700/80 transition-all duration-500 ${
              isOpen ? "scale-0 rotate-180 opacity-0 animate-none" : "group-hover:rotate-12"
            }`}>
              <div className="absolute -inset-1 rounded-full bg-red-600 opacity-80 blur-[1px] -z-10 animate-pulse" />
              <div className="w-16 h-16 rounded-full border-2 border-dashed border-red-800/60 flex items-center justify-center bg-gradient-to-br from-red-500 to-red-700 shadow-inner">
                <span className="text-[10px] font-black tracking-widest text-yellow-100 uppercase text-center leading-none font-mono">
                  HIRE<br />ME
                </span>
              </div>
              <div className="absolute top-2 left-4 w-6 h-2 bg-white/20 rounded-full rotate-[-15deg] blur-[0.5px]" />
            </div>
          </div>

          {/* ================= ENVELOPE FOOTER ================= */}
          <div className="flex justify-between items-end z-10">
            <div className="flex flex-col text-left font-mono text-[9px] text-black/70 leading-tight">
              <span className="font-bold">TO: RECRUITER</span>
              <span className="text-[8px] text-black/50">PASAY, METRO MANILA</span>
            </div>
            
            <div className="flex flex-col items-end">
              <div className="h-4 w-16 bg-black/80 flex justify-around items-end p-[1px] rounded-sm">
                <div className="w-[1px] h-full bg-white"></div>
                <div className="w-[2px] h-full bg-white"></div>
                <div className="w-[1px] h-full bg-white"></div>
                <div className="w-[3px] h-full bg-white"></div>
                <div className="w-[1px] h-full bg-white"></div>
                <div className="w-[2px] h-full bg-white"></div>
              </div>
              <span className="text-[6px] font-mono text-black/40 mt-0.5">
                #JD-2026
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* ================= MODAL DIALOG (YELLOW LEGAL PAD THEME) ================= */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          
          {/* Main Legal Pad Body Container */}
          <div className="relative w-full max-w-lg bg-[#fefcbf] text-neutral-800 rounded-sm shadow-2xl pt-12 pb-6 px-4 md:px-6 border border-amber-200/70 font-sans animate-slideUp overflow-hidden">
            
            {/* 1. TOP BROWN CARDBOARD BINDING STRIP */}
            <div className="absolute top-0 right-0 left-0 h-10 bg-gradient-to-b from-stone-800 to-stone-900 border-b-2 border-stone-950 flex items-center justify-center shadow-md z-30">
              {/* Binder Staple Details */}
              <div className="flex gap-16 opacity-40">
                <div className="w-4 h-1 bg-stone-400 rounded-sm" />
                <div className="w-4 h-1 bg-stone-400 rounded-sm" />
                <div className="w-4 h-1 bg-stone-400 rounded-sm" />
              </div>
            </div>

            {/* 2. MICRO-PERFORATION LINES */}
            <div className="absolute top-10 left-0 right-0 h-px border-t border-dashed border-amber-700/30 z-20" />

            {/* 3. VERTICAL RED MARGIN DOUBLE-RULE */}
            <div className="absolute top-0 bottom-0 left-14 md:left-16 w-0.5 bg-red-400/50 z-10" />
            <div className="absolute top-0 bottom-0 left-[58px] md:left-[66px] w-0.5 bg-red-400/50 z-10" />

            {/* Close Button disguised smoothly in top binding sector */}
            <button 
              onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
              className="absolute top-1 right-2 w-7 h-7 flex items-center justify-center text-stone-400 hover:text-[#facc15] transition-colors z-40 text-sm font-bold"
            >
              ✕
            </button>

            {/* 4. THE BLUE NOTEPAD HORIZONTAL WRITING LINES BACKGROUND */}
            <div className="absolute inset-0 top-12 bg-linear-lines pointer-events-none z-0" />

            {/* Content Container shifted right to clear the red lines margins */}
            <div className="relative z-10 pl-12 md:pl-16 pr-2 pt-2">
              
              {/* Notepad Meta Context */}
              <div className="flex justify-between items-center mb-6 text-[10px] font-mono text-neutral-500 uppercase tracking-wider">
                <span>MEMO_PAD // HIRE_ME</span>
                <span className="font-bold text-red-500/80">PAGE.01</span>
              </div>

              {/* Form Input Deck */}
              <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                
                {/* Field: Name */}
                <div className="flex flex-col sm:flex-row sm:items-end gap-1">
                  <label className="text-xs font-mono font-black text-blue-600/70 tracking-wide uppercase min-w-[60px]">
                    FROM:
                  </label>
                  <input 
                    type="text" 
                    placeholder="Enter your name..." 
                    className="flex-1 bg-transparent border-b border-transparent font-medium tracking-wide text-neutral-800 focus:outline-none placeholder:text-neutral-400 text-base font-serif italic"
                    required
                  />
                </div>

                {/* Field: Email */}
                <div className="flex flex-col sm:flex-row sm:items-end gap-1">
                  <label className="text-xs font-mono font-black text-blue-600/70 tracking-wide uppercase min-w-[60px]">
                    EMAIL:
                  </label>
                  <input 
                    type="email" 
                    placeholder="your.email@domain.com" 
                    className="flex-1 bg-transparent border-b border-transparent font-medium tracking-wide text-neutral-800 focus:outline-none placeholder:text-neutral-400 text-base font-serif italic"
                    required
                  />
                </div>

                {/* Field: Message */}
                <div className="flex flex-col gap-1 pt-1">
                  <label className="text-xs font-mono font-black text-blue-600/70 tracking-wide uppercase">
                    MESSAGE CONTENT:
                  </label>
                  {/* Styled with line height perfectly aligned to match the background ruling */}
                  <textarea 
                    rows={6}
                    placeholder="Write your note down here..." 
                    className="w-full bg-transparent border-none text-neutral-800 focus:outline-none text-base tracking-wide leading-[28px] font-serif italic resize-none placeholder:text-neutral-400 pt-[1px]"
                    required
                  />
                </div>

                {/* Form Action Controls */}
                <div className="flex justify-end items-center gap-4 pt-4 mt-4 border-t border-neutral-300/60">
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="px-4 py-1.5 text-xs text-neutral-500 font-mono font-bold uppercase hover:text-neutral-800 transition-colors"
                  >
                    Tear Off
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2 text-xs font-mono font-black uppercase tracking-wider bg-neutral-900 text-[#facc15] hover:bg-neutral-800 rounded shadow-md transition-all active:translate-y-px"
                  >
                    Submit Note
                  </button>
                </div>

              </form>
            </div>
          </div>
        </div>
      )}

      {/* Embedded pad styling definitions */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(30px) scale(0.97); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.45s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .rotate-x-180 {
          transform: rotateX(180deg);
        }
        /* Custom repeating pattern generator for blue paper lines running at 28px steps */
        .bg-linear-lines {
          background-image: linear-gradient(#bbeeeb 1px, transparent 1px);
          background-size: 100% 28px;
          background-origin: content-box;
        }
      `}</style>
    </>
  );
};

export default HireMeEnvelope;