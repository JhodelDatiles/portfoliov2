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

      {/* ================= MODAL DIALOG (THEMED DIGITAL LETTER PAPER) ================= */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fadeIn">
          
          {/* Custom Document Body matching the Slate & Yellow Theme */}
          <div className="relative w-full max-w-lg bg-slate-900 text-white rounded-2xl shadow-2xl p-6 md:p-8 border border-white/10 font-mono ring-1 ring-white/5 animate-slideUp overflow-hidden">
            
            {/* Top Security Line Accent utilizing matching branding gold */}
            <div className="absolute top-0 right-0 left-0 h-1 bg-[#facc15]" />

            {/* Close Button / Cancel */}
            <button 
              onClick={(e) => { e.stopPropagation(); setIsOpen(false); }}
              className="absolute top-4 right-4 w-8 h-8 rounded-full border border-white/10 flex items-center justify-center text-white/50 hover:text-[#facc15] hover:border-[#facc15] transition-colors duration-200 bg-slate-800/80 z-10 font-sans"
              style={{ lineHeight: 'initial' }}
            >
              ✕
            </button>

            {/* Letter Header */}
            <div className="border-b border-dashed border-white/10 pb-3 mb-6 mt-2 flex justify-between items-center">
              <span className="text-xs font-bold uppercase tracking-widest text-[#facc15]">SECURE_MESSAGE.TXT</span>
              <span className="text-[10px] text-white/30">REF: CL-2026</span>
            </div>

            {/* Interactive Form Fields */}
            <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
              
              {/* Field: Name */}
              <div className="flex flex-col md:flex-row md:items-end gap-2">
                <label className="text-xs font-bold text-white/40 uppercase min-w-[80px]">FROM:</label>
                <input 
                  type="text" 
                  placeholder="Your name" 
                  className="flex-1 bg-transparent border-b border-white/10 focus:border-[#facc15] outline-none text-sm px-1 py-0.5 tracking-wide text-white font-sans"
                  required
                />
              </div>

              {/* Field: Email */}
              <div className="flex flex-col md:flex-row md:items-end gap-2">
                <label className="text-xs font-bold text-white/40 uppercase min-w-[80px]">EMAIL:</label>
                <input 
                  type="email" 
                  placeholder="your@email.com" 
                  className="flex-1 bg-transparent border-b border-white/10 focus:border-[#facc15] outline-none text-sm px-1 py-0.5 tracking-wide text-white font-sans"
                  required
                />
              </div>

              {/* Field: Message */}
              <div className="flex flex-col gap-2 pt-2">
                <label className="text-xs font-bold text-white/40 uppercase">MESSAGE:</label>
                <textarea 
                  rows={4}
                  placeholder="The_Message" 
                  className="w-full bg-slate-950/40 border border-white/10 rounded-xl p-3 focus:border-[#facc15] focus:ring-1 focus:ring-[#facc15] outline-none text-sm font-sans tracking-wide leading-relaxed resize-none text-white placeholder:text-white/20"
                  required
                />
              </div>

              {/* Form Action Controls */}
              <div className="flex justify-end items-center gap-3 pt-4 border-t border-dashed border-white/10">
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  className="px-4 py-1.5 text-xs text-white/60 rounded-lg hover:bg-white/5 transition-colors uppercase font-bold"
                >
                  Discard
                </button>
                <button
                  type="submit"
                  className="px-6 py-1.5 text-xs bg-[#facc15] text-slate-950 rounded-lg hover:bg-[#ebd113] shadow transition-colors uppercase font-black tracking-wider"
                >
                  Send Letter
                </button>
              </div>

            </form>
          </div>
        </div>
      )}

      {/* Styled Animations Scoped */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slideUp {
          from { opacity: 0; transform: translateY(20px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.3s ease forwards;
        }
        .animate-slideUp {
          animation: slideUp 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .rotate-x-180 {
          transform: rotateX(180deg);
        }
      `}</style>
    </>
  );
};

export default HireMeEnvelope;