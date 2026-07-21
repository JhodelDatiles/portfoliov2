import { type ReactNode } from "react"

export interface ScrollRevealProps {
  children: ReactNode;
  delay?: number; // Optional prop with a fallback value
}