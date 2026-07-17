import React from "react";
import { ExternalLink } from "lucide-react";
import ScrollReveal from "../ScrollReveal";

const ProjectsSection = () => {
  // Array mapping out your core development and business projects
  const projects = [
    {
      id: "ekomers",
      title: "ekomers",
      subtitle: "Agribusiness Venture Project",
      desc: "EKOMERS is a MERN stack e-commerce application built for a real-world business. The goal was never just to build a shopping cart — it was to engineer a complete commerce ecosystem from the ground up.",
      image: "/public/ekomers.png", // Replace with your actual image path
      link: "https://ekomers-mern.onrender.com/",
    },
    {
      id: "ipaskil",
      title: "Project iPaskil",
      subtitle: "MERN Stack Application",
      desc: "A digital bulletin board platform designed for community creativity, graffiti art showcasing, and free-form poetic expression sharing.",
      image: "/public/ipaskil.png", // Replace with your actual image path
      link: "https://vlog-mern.onrender.com/",
    },
    {
      id: "espyreal",
      title: "Project Espyreal",
      subtitle: "React Native & TensorFlow Lite",
      desc: "A Mobile-Based Multi-Currency Identifier tailored for visually impaired individuals in the Philippines utilizing an offline Convolutional Neural Network.",
      image: "/public/espyreal.jpg", // Replace with your actual image path
      link: "https://rsisinternational.org/journals/ijrias/view/espyreal-a-mobile-based-multi-currency-identifier-for-visually-impaired-individuals-using-convolutional-neural-network",
    },
    {
      id: "NotePad",
      title: "NotePad",
      subtitle: "TestRunHaha",
      desc: "A minimal note-taking application solidifying RESTful API fundamentals and handling secure backend rate-limiting strategies.",
      image: "/public/notes.png", // Replace with your actual image path
      link: "https://mern-notewebapp.onrender.com/",
    },
  ];

  return (
    <section 
      id="projects" 
      className="flex min-h-screen bg-[#020617] text-white font-sans selection:bg-[#facc15] selection:text-[#020617] relative py-20 px-6 cross-lines"
    >
      {/* Background Textures */}
      <div
        className="fixed inset-0 opacity-[0.015] pointer-events-none z-0"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* 2x2 Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:mt-10">
          {projects.map((project) => (
            <ScrollReveal key={project.id}>
              <a
                href={project.link || "#"}
                target={project.link ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="group flex flex-col md:w-100 bg-[#0b1329]/30 backdrop-blur-sm border border-neutral-800/80 rounded-2xl overflow-hidden hover:border-[#facc15]/40 hover:shadow-[0_0_30px_rgba(250,204,21,0.05)] transition-all duration-300 h-full"
              >
                {/* Image Preview Window */}
                <div className="relative w-full aspect-[16/9] bg-neutral-900 overflow-hidden border-b border-neutral-800/80">
                  <img
                    src={project.image}
                    alt={`${project.title} Preview`}
                    className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500 ease-out"
                  />
                  {/* Tech Tag Overlay */}
                  <div className="absolute top-4 left-4 bg-[#020617]/80 backdrop-blur-md border border-neutral-800 px-2.5 py-1 rounded-md">
                    <span className="font-mono text-[10px] text-[#dbeafe] uppercase tracking-wider block">
                      {project.subtitle}
                    </span>
                  </div>
                  {/* Hover Action Vector */}
                  <div className="absolute bottom-4 right-4 w-8 h-8 rounded-lg bg-[#020617]/90 border border-neutral-800 flex items-center justify-center text-neutral-400 group-hover:text-[#facc15] group-hover:border-[#facc15]/40 shadow-md transition-colors duration-300">
                    <ExternalLink size={14} strokeWidth={2.5} />
                  </div>
                </div>

                {/* Text Layout Metadata */}
                <div className="p-6 flex flex-col justify-between flex-1 bg-gradient-to-b from-transparent to-[#0b1329]/10">
                  <div>
                    <h3 className="text-xl font-serif font-bold uppercase tracking-tight text-white mb-2.5 group-hover:text-[#facc15] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 text-xs leading-relaxed font-mono font-light">
                      {project.desc}
                    </p>
                  </div>
                  
                  {/* Active Terminal Footer Accent */}
                  <div className="mt-6 pt-4 border-t border-neutral-800/40 flex justify-between items-center">
                    <span className="text-[9px] font-mono uppercase tracking-widest text-neutral-500 group-hover:text-neutral-400 transition-colors">
                      src/{project.id}_system
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-neutral-700 group-hover:bg-[#facc15] group-hover:shadow-[0_0_8px_#facc15] transition-all duration-300" />
                  </div>
                </div>
              </a>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;