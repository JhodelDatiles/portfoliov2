import Ticker from "../Ticker"; // Import your film-strip Ticker component
import Typewriter from "../Typewriter";
import HireMeEnvelope from "../HireMeEnvelope";
import ExploreButton from "../ExploreButton";
import ScrollReveal from "../ScrollReveal"

const HeroSection = () => {
  return (
    <section
      id="hero"
      // 60% DOMINANT: Deep dark background (#020617) for high-contrast presentation
      className="relative bg-[#020617] text-white min-h-screen flex items-center px-6 md:px-16 lg:px-24 py-20 md:py-0 overflow-hidden"
    >
      <div className="mt-10 max-w-5xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center z-10">
        {/* ================= LEFT COLUMN: HERO CONTENT (60%) ================= */}
        <div className="lg:col-span-7 flex flex-col space-y-6">
          {/* Top Tagline */}
          <div className="flex items-center gap-2">
            {/* Minimal Yellow Accent Block */}
            <span className="h-6 w-1.5 bg-[#facc15] inline-block"></span>
            <p className="font-philly text-xl md:text-xl tracking-wide uppercase text-white font-medium">
              Hi, I'm Jhodel D. Datiles
            </p>
          </div>

          {/* Massive Brand-Style Title */}
          <div className="flex flex-col font-black tracking-tighter leading-none text-3xl md:text-5xl lg:text-[57px] uppercase min-h-[2.2em]">
            <Typewriter
              phrases={[
                { prefix: "Full-Stack", suffix: "Developer" },
                { prefix: "Quality Assurance", suffix: "Tester" },
              ]}
              typingSpeed={120}
              deletingSpeed={60}
              pauseDuration={2500}
            />
          </div>

          {/* Subtitle / Description */}
          <p className="text-gray-300 text-lg md:text-lg font-light tracking-wide max-w-xl uppercase">
            with a strong passion for building responsive and functional
            web-apps. Eager to learn and continuously improve.
          </p>

          {/* Yellow Divider Line */}
          <hr className="border-t-2 border-[#facc15] w-full my-6 opacity-90" />

          {/* Replaced Features Grid with Ticker Component */}
          <div className="w-full pt-2">
            <Ticker />
          </div>
        </div>

        {/* ================= RIGHT COLUMN: GRAPHIC CARDS (40%) ================= */}

        <div className="lg:col-span-5 flex flex-col space-y-6 w-full h-full justify-center">
          {/* Top Showcase Card */}
          <ScrollReveal>
          <ExploreButton />
          </ScrollReveal>

          {/* Bottom Showcase Card */}
          <ScrollReveal>
          <HireMeEnvelope />
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
