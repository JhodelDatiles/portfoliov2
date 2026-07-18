import { ExternalLink } from "lucide-react";
import ScrollReveal from "../ScrollAnimations/ScrollReveal";

const ProjectsSection = () => {
  const projects = [
    {
      id: "ekomers",
      title: "ekomers",
      subtitle: "Agribusiness Venture Project",
      desc: "EKOMERS is an all-in-one, standalone e-commerce platform designed to empower small businesses with enterprise-grade operational tools. It seamlessly unifies inventory management, automated order processing, sales analytics, and multi-user configurations into a single ecosystem. By integrating advanced live chat, an intelligent AI chatbot, and secure local payment processing via PayMongo, EKOMERS delivers a comprehensive digital storefront solution that streamlines daily workflows and scales small business operations.",
      image: "/ekomers.png",
      link: "https://ekomers-mern.onrender.com/",
    },
    {
      id: "ipaskil",
      title: "Project iPaskil",
      subtitle: "MERN Stack Application",
      desc: "iPaskil is a digital bulletin board designed for raw community creativity, graffiti art showcasing, and free-form poetic expression. We are redefining the public square by giving street artists and poets an unmoderated canvas to share their voices, preserve their murals, and connect with local creators. Pin your art, drop your lines, and build your community’s visual legacy today.",
      image: "/ipaskil.png",
      link: "https://vlog-mern.onrender.com/",
    },
    {
      id: "espyreal",
      title: "Project Espyreal",
      subtitle: "React Native & TensorFlow Lite",
      desc: "Espyreal is a mobile application designed to help visually impaired individuals identify multiple currencies using Convolutional Neural Networks (CNN).",
      image: "/espyreal.jpg",
      link: "https://rsisinternational.org/journals/ijrias/view/espyreal-a-mobile-based-multi-currency-identifier-for-visually-impaired-individuals-using-convolutional-neural-network",
    },
    {
      id: "NotePad",
      title: "NotePad",
      subtitle: "TestRunHaha",
      desc: "A minimal note-taking application solidifying RESTful API fundamentals and handling secure backend rate-limiting strategies.",
      image: "/notes.png",
      link: "https://mern-notewebapp.onrender.com/",
    },
  ];

  return (
    <section
      id="projects"
      className="block min-h-screen bg-[#020617] text-white font-sans selection:bg-[#facc15] selection:text-[#020617] relative py-16 md:py-20 px-4 sm:px-6 cross-lines"
    >
      {/* Background Textures */}
      <div
        className="fixed inset-0 opacity-[0.015] pointer-events-none z-0"
        style={{
          backgroundImage: "radial-gradient(#fff 1px, transparent 1px)",
          backgroundSize: "16px 16px",
        }}
      />

      {/* FIXED: Explicitly added w-full here to keep layout bounded */}
      <div className="relative z-10 max-w-5xl mx-auto w-full">
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-10 md:gap-8 md:mt-10 w-full">
          {projects.map((project) => (
            <ScrollReveal key={project.id}>
              <a
                href={project.link || "#"}
                target={project.link ? "_blank" : "_self"}
                rel="noopener noreferrer"
                className="group flex flex-col w-full bg-[#0b1329]/30 backdrop-blur-sm border border-neutral-800/80 rounded-2xl overflow-hidden hover:border-[#facc15]/40 hover:shadow-[0_0_30px_rgba(250,204,21,0.05)] transition-all duration-300 h-full"
              >
                {/* Image Preview Window */}
                <div className="relative w-full aspect-[16/9] bg-neutral-900 overflow-hidden border-b border-neutral-800/80">
                  <img
                    src={project.image}
                    alt={`${project.title} Preview`}
                    className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-[1.03] transition-all duration-500 ease-out"
                  />

                  {/* Tech Tag Overlay */}
                  <div className="absolute top-3 left-3 md:top-4 md:left-4 bg-[#020617]/80 backdrop-blur-md border border-neutral-800 px-2 py-0.5 md:px-2.5 md:py-1 rounded-md">
                    <span className="font-mono text-[9px] md:text-[10px] text-[#dbeafe] uppercase tracking-wider block">
                      {project.subtitle}
                    </span>
                  </div>

                  {/* Hover Action Vector */}
                  <div className="absolute bottom-3 right-3 md:bottom-4 md:right-4 w-7 h-7 md:w-8 md:h-8 rounded-lg bg-[#020617]/90 border border-neutral-800 flex items-center justify-center text-neutral-400 group-hover:text-[#facc15] group-hover:border-[#facc15]/40 shadow-md transition-colors duration-300">
                    <ExternalLink size={13} strokeWidth={2.5} />
                  </div>
                </div>

                {/* Text Layout Metadata */}
                <div className="p-5 md:p-6 flex flex-col justify-between flex-1 bg-gradient-to-b from-transparent to-[#0b1329]/10">
                  <div>
                    <h3 className="text-lg md:text-xl font-serif font-bold uppercase tracking-tight text-white mb-2 group-hover:text-[#facc15] transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-neutral-400 text-xs leading-relaxed font-mono font-light">
                      {project.desc}
                    </p>
                  </div>

                  {/* Active Terminal Footer Accent */}
                  <div className="mt-5 pt-3 md:mt-6 md:pt-4 border-t border-neutral-800/40 flex justify-between items-center">
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
