import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ children, delay = 0 }) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    // Detect mobile viewport bounds dynamically
    const isMobile = window.innerWidth < 768;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsIntersecting(entry.isIntersecting);
      },
      { 
        // FIX: Lower threshold to 2% on mobile so tall, stacked layout cards 
        // don't get stuck invisible trying to hit a 15% threshold.
        threshold: isMobile ? 0.02 : 0.15,
        // FIX: Remove the restrictive -50px margin on mobile screens to counter mobile browser bars.
        rootMargin: isMobile ? "0px 0px -10px 0px" : "0px 0px -50px 0px" 
      }
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