import React from "react";

const ExploreButton = () => {
  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const projectsSection = document.getElementById("projects");
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <button
      onClick={handleScrollToProjects}
      className="px-6 py-3 font-mono text-xs md:text-sm font-bold uppercase tracking-wider text-[#facc15] bg-slate-800 border border-white/15 rounded-lg transition-all duration-300 hover:bg-slate-750 hover:border-[#facc15]/50 active:scale-95 shadow-lg"
    >
      Explore My Work ↓
    </button>
  );
};

export default ExploreButton;