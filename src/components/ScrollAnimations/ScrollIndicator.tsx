import React, { useEffect, useState } from "react";

// Shared Section Configurations
export const SECTIONS = [
  { id: "hero", label: "home", tip: "hero" },
  { id: "stack", label: "Stack", tip: "Tech stack" },
  { id: "experience", label: "Experience", tip: "Past work experiences" },
  { id: "projects", label: "Projects", tip: "Good stuff" },
  { id: "contacts", label: "Contacts", tip: "Become associates?" },
];

// Simple custom event to synchronize the active section state across decoupled components
export const setGlobalActiveSection = (id) => {
  const event = new CustomEvent("activeSectionChange", { detail: id });
  window.dispatchEvent(event);
};

export const ScrollIndicator = () => {
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    // Sync local state with global event dispatch
    const handleSectionChange = (e) => {
      setActiveSection(e.detail);
    };
    window.addEventListener("activeSectionChange", handleSectionChange);

const observerOptions = {
  root: null,
  rootMargin: "-40% 0px -40% 0px",
  threshold: 0,
};

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setGlobalActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions,
    );

    SECTIONS.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => {
      observer.disconnect();
      window.removeEventListener("activeSectionChange", handleSectionChange);
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-5 items-end select-none">
      {/* Vertical line track */}
      <div className="absolute right-[7px] top-2 bottom-2 w-[2px] bg-neutral-800/80 -z-10 rounded-full" />

      {SECTIONS.map((section) => {
        const isActive = activeSection === section.id;

        return (
          <button
            key={section.id}
            onClick={() => scrollToSection(section.id)}
            className="group flex items-center gap-3 cursor-pointer focus:outline-none"
            aria-label={`Scroll to ${section.label}`}
          >
            {/* Hover Tooltip/Label */}
            <span
              className={`font-mono text-xs font-bold uppercase tracking-wider transition-all duration-300 origin-right transform 
                ${
                  isActive
                    ? "opacity-100 translate-x-0 text-[#facc15]"
                    : "opacity-0 translate-x-4 pointer-events-none group-hover:opacity-80 group-hover:translate-x-0 text-neutral-400"
                }`}
            >
              {section.label}
            </span>

            {/* Indicator Dot */}
            <div
              className={`relative w-4 h-4 rounded-full border-2 transition-all duration-300 flex items-center justify-center
                ${
                  isActive
                    ? "border-[#facc15] bg-[#020617] scale-110"
                    : "border-neutral-700 bg-neutral-900 group-hover:border-neutral-500 scale-90"
                }`}
            >
              {/* Core active point */}
              <div
                className={`w-1.5 h-1.5 rounded-full transition-transform duration-300 
                  ${isActive ? "bg-[#facc15] scale-100" : "bg-transparent scale-0"}`}
              />

              {/* Ping Ring */}
              {isActive && (
                <div className="absolute inset-0 rounded-full bg-[#facc15]/20 animate-ping pointer-events-none" />
              )}
            </div>
          </button>
        );
      })}
    </div>
  );
};

export default ScrollIndicator;
