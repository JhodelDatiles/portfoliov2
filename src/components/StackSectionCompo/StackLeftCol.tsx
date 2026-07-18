import React from "react";
import ScrollReveal from "../ScrollAnimations/ScrollReveal";

const StackLeftCol = () => {
  return (
    <ScrollReveal>
      <div className="w-full max-w-sm mx-auto bg-neutral-900 rounded-3xl p-6 pt-16 flex flex-col justify-between border border-neutral-800 min-h-[460px] shadow-2xl relative overflow-visible select-none">
        {/* Clipboard Metal Hardware */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-10 bg-gradient-to-b from-neutral-700 to-neutral-800 rounded-t-xl border border-neutral-600 shadow-md flex items-center justify-center z-20">
          <div className="w-24 h-4 bg-gradient-to-r from-neutral-800 via-neutral-600 to-neutral-800 border border-neutral-700/80 rounded shadow-inner relative flex justify-between px-4 items-center">
            <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 shadow-sm" />
            <div className="w-1.5 h-1.5 rounded-full bg-neutral-400 shadow-sm" />
          </div>
          <div className="absolute -bottom-1 left-0 right-0 h-1 bg-neutral-950/60 blur-[1px]" />
        </div>

        {/* Paper Sheet Document */}
        <div className="w-full h-full bg-neutral-950 border border-neutral-800 rounded-xl p-5 flex flex-col justify-between shadow-inner relative overflow-hidden group">
          <div className="absolute top-0 inset-x-0 h-1 bg-[#facc15]" />

          <div className="space-y-3">
            <div className="flex justify-between items-baseline">
              <h3 className="text-2xl font-black tracking-tighter uppercase leading-none text-white font-sans">
                MERN Stack
              </h3>
            </div>

            <div className="w-full border-b border-dashed border-neutral-800 pt-1" />

            <div className="space-y-4 pt-2 font-mono text-[11px] text-neutral-400 leading-relaxed">
              <p>
                An integrated, uniform JavaScript pipeline utilizing a shared
                structural runtime across client and data tiers.
              </p>
              <div className="space-y-2 text-neutral-500">
                <p className="flex gap-2">
                  <span className="text-[#facc15] font-bold">
                    » Unified Language:
                  </span>
                  Everything runs on JavaScript
                </p>
                <p className="flex gap-2">
                  <span className="text-[#facc15] font-bold">
                    » JSON Friendly:
                  </span>
                  All data travels through the stack in JSON formats, which
                  makes reading, transferring, and writing data incredibly
                  efficient.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 border-t border-neutral-900 pt-4 font-mono flex flex-col gap-3">
            <div className="flex justify-between items-end">
              <div>
                <span className="text-[9px] text-neutral-500 block uppercase tracking-wider">
                  Deployment platforms
                </span>
                <span className="text-xs font-bold text-neutral-300 uppercase">
                  Render or Vercel
                </span>
              </div>
              <div className="text-right">
                <span className="text-xs font-black text-emerald-500 uppercase">
                  Verified
                </span>
              </div>
            </div>
            <div
              className="absolute bottom-0 right-0 w-8 h-8 bg-neutral-900 transition-transform duration-300 group-hover:scale-105 origin-bottom-right"
              style={{
                clipPath: "polygon(100% 0, 100% 100%, 0 100%, 65% 35%)",
              }}
            />
          </div>
        </div>
      </div>
    </ScrollReveal>
  );
};

export default StackLeftCol;
