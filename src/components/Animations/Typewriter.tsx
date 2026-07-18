import { useState, useEffect } from "react";

const Typewriter = ({
  phrases = [
    { prefix: "Full-Stack", suffix: "Developer" },
    { prefix: "Quality Assurance", suffix: "Tester" },
  ],
  typingSpeed = 120,
  deletingSpeed = 60,
  pauseDuration = 2500,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [step, setStep] = useState(0); // Shared progress step for both words
  const [isDeleting, setIsDeleting] = useState(false);

  const activePhrase = phrases[currentIndex];
  // Determine the maximum length between the prefix and suffix to know when to stop typing
  const maxLen = Math.max(
    activePhrase.prefix.length,
    activePhrase.suffix.length,
  );

  useEffect(() => {
    let timer: number;

    if (!isDeleting) {
      // Parallel typing phase
      if (step < maxLen) {
        timer = setTimeout(() => {
          setStep((prev) => prev + 1);
        }, typingSpeed);
      } else {
        // Pause once both words are fully typed
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseDuration);
      }
    } else {
      // Parallel deleting phase
      if (step > 0) {
        timer = setTimeout(() => {
          setStep((prev) => prev - 1);
        }, deletingSpeed);
      } else {
        // FIXED: Wrap state resets in a setTimeout to avoid synchronous cascading renders
        timer = setTimeout(() => {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % phrases.length);
        }, 0);
      }
    }

    return () => clearTimeout(timer);
  }, [
    step,
    isDeleting,
    currentIndex,
    maxLen,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
    phrases.length,
  ]);

  // Slice both words at the exact same step progress
  const typedPrefix = activePhrase.prefix.substring(0, step);
  const typedSuffix = activePhrase.suffix.substring(0, step);

  return (
    <span className="flex flex-col">
      {/* Line 1: 30% SECONDARY (Clear White) */}
      <span className="text-white flex items-center">
        {typedPrefix || "\u00A0"}
        <span className="inline-block ml-1 w-[4px] h-[1em] bg-white animate-caret-blink" />
      </span>

      {/* Line 2: 10% ACCENT (Bold Yellow) */}
      <span className="text-[#facc15] flex items-center">
        {typedSuffix || "\u00A0"}
        <span className="inline-block ml-1 w-[4px] h-[1em] bg-[#facc15] animate-caret-blink" />
      </span>

      {/* Scoped Keyframes for cursor blinking */}
      <style>{`
        @keyframes caretBlink {
          0%, 100% { opacity: 1; }
          50% { opacity: 0; }
        }
        .animate-caret-blink {
          animation: caretBlink 0.8s steps(2, start) infinite;
        }
      `}</style>
    </span>
  );
};

export default Typewriter;
