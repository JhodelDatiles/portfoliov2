import { useEffect, useRef, useState } from "react";
// 1. Define types for the component's accepted properties
import {type ScrollRevealProps} from "../interface/scrollRevealInterface"

export const ScrollReveal = ({ children, delay = 0 }: ScrollRevealProps) => {
  const [isIntersecting, setIsIntersecting] = useState<boolean>(false);

  // 2. Type the DOM element reference to track standard container divs
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    // 3. Type the IntersectionObserver configuration and entry destructured values
    const observerOptions: IntersectionObserverInit = {
      threshold: isMobile ? 0.02 : 0.15,
      rootMargin: isMobile ? "0px 0px -10px 0px" : "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver(
      ([entry]: IntersectionObserverEntry[]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      observerOptions,
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-all duration-1000 ease-out transform ${
        isIntersecting
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6 md:translate-y-8"
      }`}
    >
      {children}
    </div>
  );
};

export default ScrollReveal;
