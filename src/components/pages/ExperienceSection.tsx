import { useRef } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useTransform,
  MotionValue,
} from "framer-motion";

interface ExperienceItem {
  title: string;
  subtitle: string;
  description: string;
  side: "left" | "right" | string;
}

// Type for TimelineItem component props
interface TimelineItemProps {
  exp: ExperienceItem;
  progress: MotionValue<number>;
  index: number;
  total: number;
}

const experiences = [
  {
    title: "QA Intern",
    subtitle: "Sparkle Star International // Jan - Apr 2026",
    description:
      "Worked in a fast-paced Agile environment, conducting manual, regression and exploratory testing during short sprint cycles to identify functional defects and usability issues. Documented critical bugs using Jira to provide precise insights for resolution, and verified individual units to ensure system stability.",
    side: "let",
  },
  {
    title: "Coming soon...",
    subtitle: "Coming soon...",
    description: "Coming soon...",
    side: "right",
  },
];

const WorkExperienceSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 25,
    restDelta: 0.001,
  });

  const lineColor = useTransform(
    smoothProgress,
    [0, 1],
    ["#facc15", "#eab308"],
  );

  return (
    <section
      ref={containerRef}
      id="experience"
      className="flex flex-col relative w-full bg-[#020617] text-white py-24 overflow-hidden select-none"
    >
      <div className="mt-10 relative w-full max-w-5xl mx-auto px-6">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-[1px] md:-translate-x-1/2 z-0 bg-neutral-800" />

        <motion.div
          style={{
            scaleY: smoothProgress,
            originY: 0,
            backgroundColor: lineColor,
            boxShadow: "0 0 15px rgba(250, 204, 21, 0.4)",
          }}
          className="absolute left-4 md:left-1/2 top-0 bottom-0 w-2px md:-translate-x-1/2 z-0"
        >
          <motion.div
            className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-[#facc15] rounded-full blur-[1px] z-10 shadow-[0_0_10px_#facc15]"
            animate={{ scale: [1, 1.3, 1], opacity: [0.6, 1, 0.6] }}
            transition={{ repeat: Infinity, duration: 1.2 }}
          />
        </motion.div>

        <div className="space-y-20 md:space-y-32 relative z-10">
          {experiences.map((exp, index) => (
            <TimelineItem
              key={index}
              exp={exp}
              progress={smoothProgress}
              index={index}
              total={experiences.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const TimelineItem = ({ exp, progress, index, total }: TimelineItemProps) => {
  const xStart = exp.side === "left" ? -40 : 40;
  const activationThreshold = (index + 0.3) / total;
  const isPowered = useTransform(
    progress,
    [activationThreshold - 0.05, activationThreshold],
    [0, 1],
  );

  return (
    <div
      className={`flex w-full items-start md:items-center justify-between
        ${exp.side === "right" ? "md:flex-row-reverse" : "md:flex-row"}
        flex-col md:flex-row gap-6 md:gap-0`}
    >
      {/* 
        CHANGED: Replaced manual initial/animate view-tracking with native whileInView.
        amount: 0.2 means it triggers when 20% enters the screen.
        margin: Allows elements to cleanly fade back out once they pass the viewport edges.
      */}
      <motion.div
        initial={{ opacity: 0, x: xStart, y: 20 }}
        whileInView={{ opacity: 1, x: 0, y: 0 }}
        exit={{ opacity: 0, x: xStart, y: 20 }}
        viewport={{ amount: 0.2, margin: "-10% 0px -10% 0px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="w-full md:w-[44%] pl-10 md:pl-0 z-10"
      >
        <div className="bg-[#0b1329]/60 backdrop-blur-sm p-6 md:p-8 rounded-xl border border-neutral-800/80 hover:border-[#facc15]/40 transition-all duration-300 shadow-xl group">
          <span className="font-mono text-xs text-[#facc15] font-semibold tracking-wider uppercase block mb-1">
            {exp.subtitle}
          </span>
          <h3 className="text-xl md:text-2xl font-serif font-bold text-white tracking-tight mb-3">
            {exp.title}
          </h3>
          <p className="text-sm text-neutral-400 font-sans leading-relaxed">
            {exp.description}
          </p>
        </div>
      </motion.div>

      <div className="absolute left-4 md:left-1/2 flex items-center justify-center -translate-x-1/2 z-20">
        <motion.div
          style={{
            backgroundColor: useTransform(
              isPowered,
              [0, 1],
              ["#0b1329", "#facc15"],
            ),
            borderColor: useTransform(
              isPowered,
              [0, 1],
              ["#262626", "#020617"],
            ),
            scale: useTransform(
              progress,
              [activationThreshold - 0.1, activationThreshold],
              [0.8, 1],
            ),
          }}
          className="w-4 h-4 border-2 rounded-full shadow-[0_0_10px_rgba(0,0,0,0.5)] transition-colors duration-200"
        />
        <motion.div
          style={{ opacity: isPowered }}
          className="absolute w-8 h-8 bg-[#facc15]/10 blur-md rounded-full -z-10"
        />
      </div>

      <div className="hidden md:block w-[44%]" />
    </div>
  );
};

export default WorkExperienceSection;
