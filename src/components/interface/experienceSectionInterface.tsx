// src/interface/experience.ts
import { type MotionValue } from "framer-motion";

export interface ExperienceItem {
  title: string;
  subtitle: string;
  description: string;
  side: "left" | "right" | string;
}

export interface TimelineItemProps {
  exp: ExperienceItem;
  progress: MotionValue<number>;
  index: number;
  total: number;
}
