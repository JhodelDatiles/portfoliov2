import React from "react";
import {
  Flame,
  Users,
  RefreshCw,
  Clock,
  ShieldCheck,
  Code,
} from "lucide-react";

const tickerItems = [
  {
    id: 1,
    title: "Passion Driven",
    desc: "Suffer for what you love.",
    icon: Flame,
  },
  {
    id: 2,
    title: "Team Player",
    desc: "Synergy and open communication.",
    icon: Users,
  },
  {
    id: 3,
    title: "Adaptability",
    desc: "Thriving in changing environments.",
    icon: RefreshCw,
  },
  {
    id: 4,
    title: "Time Management",
    desc: "Efficient and structured delivery.",
    icon: Clock,
  },
  {
    id: 5,
    title: "Quality Assurance",
    desc: "Ensures the quality of the product",
    icon: ShieldCheck,
  },
  {
    id: 6,
    title: "Web Development",
    desc: "Building modern MERN stack webapps.",
    icon: Code,
  },
];

const Ticker = () => {
  // Triple the items to ensure a seamless, gap-free infinite scroll loop
  const tripleItems = [...tickerItems, ...tickerItems, ...tickerItems];

  return (
    <div className="w-full bg-[#020617] py-2 overflow-hidden relative select-none z-20 border-y border-white/5">
      {/* Scoped Marquee Animations */}
      <style>{`
        @keyframes tickerScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.3333%); }
        }
        .animate-ticker {
          animation: tickerScroll 15s linear infinite; /* Adjusted to 15s for a smooth, fast loop */
        }
      `}</style>

      {/* Subtle Fade Gradients on the Edges */}
      <div className="absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#020617] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#020617] to-transparent z-10 pointer-events-none" />

      {/* Main Track - Added w-max to ensure correct width calculations */}
      <div className="flex w-max whitespace-nowrap animate-ticker hover:[animation-play-state:paused] cursor-grab active:cursor-grabbing items-center">
        {tripleItems.map((item, index) => {
          const IconComponent = item.icon;
          return (
            <div key={`${item.id}-${index}`} className="flex items-center">
              {/* Compact Modern Card Layout */}
              <div className="text-center h-14 bg-slate-900/60 border border-white/10 rounded-xl flex items-center px-4 shrink-0 space-x-3 min-w-[270px]">
                {/* Visual Icon Accent Tag */}
                <div className="p-2 rounded-lg bg-[#facc15]/10 text-[#facc15] shrink-0">
                  <IconComponent className="w-4 h-4" />
                </div>

                {/* Text content */}
                <div className="flex flex-col text-center">
                  <h4 className="text-xs font-bold tracking-wider text-white uppercase leading-tight">
                    {item.title}
                  </h4>
                  <p className="text-[11px] font-medium text-gray-400 leading-normal truncate max-w-[270px] mt-0.5">
                    {item.desc}
                  </p>
                </div>
              </div>

              {/* Gap spacer between ticker items */}
              <div className="w-4 shrink-0" />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Ticker;
