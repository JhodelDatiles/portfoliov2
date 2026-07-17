import React from 'react';
import ScrollReveal from "./ScrollReveal";

const StackRightCol = () => {
  return (
    <div className="w-full max-w-sm mx-auto flex flex-col gap-3 p-4 select-none bg-neutral-950 rounded-2xl border border-neutral-800 shadow-2xl overflow-hidden">
      
      {/* LAYER 1: REACT */}
      <ScrollReveal delay={0}>
        <div className="relative bg-neutral-900 text-white p-5 rounded-xl border border-neutral-800 shadow-md transform hover:-translate-y-1 transition-all duration-300 group">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-lg font-black uppercase tracking-tight leading-none text-neutral-100">
                React.js
              </h4>
              <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider block mt-1">
                one of the most popular, high-performance frontend library in modern web development
              </span>
            </div>
            <span className="font-mono text-xs font-bold text-neutral-600 group-hover:text-[#facc15] transition-colors">
              01
            </span>
          </div>
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#facc15]" style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%, 60% 40%)" }} />
        </div>
      </ScrollReveal>

      {/* LAYER 2: NODE.JS & EXPRESS */}
      <ScrollReveal delay={150}>
        <div className="relative bg-neutral-900 text-white p-5 rounded-xl border border-neutral-800 shadow-md transform hover:-translate-y-1 transition-all duration-300 group">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-lg font-black uppercase tracking-tight leading-none text-neutral-100">
                Node.js & Express
              </h4>
              <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider block mt-1">
                a highly scalable, lightweight, and unified JS ecosystem that reduces development time by allowing you to use one language across your entire stack
              </span>
            </div>
            <span className="font-mono text-xs font-bold text-neutral-600 group-hover:text-[#facc15] transition-colors">
              02
            </span>
          </div>
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#facc15]" style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%, 60% 40%)" }} />
        </div>
      </ScrollReveal>

      {/* LAYER 3: MONGODB */}
      <ScrollReveal delay={300}>
        <div className="relative bg-neutral-900 text-white p-5 rounded-xl border border-neutral-800 shadow-md transform hover:-translate-y-1 transition-all duration-300 group">
          <div className="flex justify-between items-start">
            <div>
              <h4 className="text-lg font-black uppercase tracking-tight leading-none text-neutral-100">
                MongoDB
              </h4>
              <span className="text-[9px] font-mono text-neutral-500 uppercase tracking-wider block mt-1">
                flexible data model, fast development cycles, and the ability to scale horizontally as your data grows
              </span>
            </div>
            <span className="font-mono text-xs font-bold text-neutral-600 group-hover:text-[#facc15] transition-colors">
              03
            </span>
          </div>
          <div className="absolute bottom-0 right-0 w-4 h-4 bg-[#facc15]" style={{ clipPath: "polygon(100% 0, 100% 100%, 0 100%, 60% 40%)" }} />
        </div>
      </ScrollReveal>

    </div>
  );
};

export default StackRightCol;