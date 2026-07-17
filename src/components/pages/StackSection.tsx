import React from "react";

const stackCategories = [
  {
    id: "frontend",
    title: "Frontend",
    tagline: "UI & Client Side",
    techs: ["React.js", "TypeScript", "Tailwind CSS", "daisyUI"],
    bg: "hover:bg-amber-400", // Spiced Yellow
    textColor: "hover:text-black",
  },
  {
    id: "backend",
    title: "Backend",
    tagline: "Logic & Rest APIs",
    techs: ["Node.js", "Express.js", "RESTful APIs", "Rate Limiting"],
    bg: "hover:bg-red-500", // Spray Red
    textColor: "hover:text-black",
  },
  {
    id: "database",
    title: "Database",
    tagline: "Persistence & Caching",
    techs: ["MongoDB", "Mongoose", "Redis", "Upstash"],
    bg: "hover:bg-emerald-500", // Emerald Green
    textColor: "hover:text-black",
  },
  {
    id: "qa",
    title: "Quality Assurance",
    tagline: "Testing & Validation",
    techs: ["Playwright", "Manual Testing", "Exploratory Testing", "Bug Hunting"],
    bg: "hover:bg-pink-500", // Street Pink
    textColor: "hover:text-black",
  },
];

const StackSection = () => {
  return (
    <section 
      id="stack" 
      className="border-b-3 border-black min-h-screen flex flex-col bg-slate-300 select-none"
    >
      {/* Dynamic Minimalist Section Banner */}
      <div className="p-6 border-b-3 border-black flex justify-between items-center bg-black text-slate-300">
        <h2 className="font-philly text-4xl uppercase tracking-wider">My Tech Stack</h2>
        <span className="font-spray text-sm tracking-widest uppercase hidden sm:inline">
          Hover a lane to expand
        </span>
      </div>

      {/* Accordion Column Container */}
      <div className="flex flex-col md:flex-row flex-1 w-full min-h-[550px]">
        {stackCategories.map((category, index) => (
          <div
            key={category.id}
            className={`
              flex-1 group relative flex flex-col justify-between p-8 overflow-hidden transition-all duration-500 ease-out cursor-pointer
              /* Expands beautifully on hover (3x weight on desktop, 2x on mobile) */
              md:hover:flex-[3] hover:flex-[2]
              /* Layout dividers */
              border-b-3 md:border-b-0 md:border-r-3 border-black last:border-0
              /* Theme changes */
              bg-slate-300 text-black ${category.bg} ${category.textColor}
            `}
          >
            {/* Column Header Info */}
            <div className="relative z-10">
              {/* Giant background number that stands out on hover */}
              <span className="absolute -top-12 -left-6 font-bubble-reg text-9xl opacity-5 pointer-events-none transition-all duration-300 group-hover:opacity-10">
                0{index + 1}
              </span>
              
              <p className="font-spray text-xs uppercase tracking-widest opacity-60 mb-2">
                System {index + 1}
              </p>
              <h3 className="font-bubble-reg text-3xl md:text-4xl uppercase tracking-wide">
                {category.title}
              </h3>
            </div>

            {/* Hidden details that slide up and fade in on hover */}
            <div className="relative z-10 transition-transform duration-300 transform translate-y-6 group-hover:translate-y-0">
              <p className="font-philly text-xl mb-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                {category.tagline}
              </p>
              
              <ul className="space-y-2.5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                {category.techs.map((tech) => (
                  <li 
                    key={tech} 
                    className="font-spray text-lg flex items-center gap-2 before:content-['*'] before:text-red-500 before:font-bold group-hover:before:text-black"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </div>

            {/* Small subtle lower tag */}
            <div className="absolute bottom-4 right-4 font-spray text-xs opacity-30">
              //{category.id}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default StackSection;