import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Trigger the shrink effect once scrolled down more than 20 pixels
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        isScrolled && setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isScrolled]);

  return (
    <header
      className={`border border-red-800 fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "mx-25 mt-5 py-2 glass shadow-md"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-4">
        <div className="navbar p-0 min-h-0 flex justify-between items-center">
          {/* Logo / Brand Name */}
          <div className="flex-1">
            <a
              href="/"
              className={`font-bold tracking-tight transition-all duration-300 ${
                isScrolled ? "text-[30px]" : "text-[40px]"
              }`}
            >
              D
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 gap-1">
              <li>
                <a
                  href="#hero"
                  className={`transition-all duration-300 rounded-lg ${
                    isScrolled ? "text-sm py-1.5 px-3" : "text-base py-2.5 px-4"
                  }`}
                >
                  Hero
                </a>
              </li>
              <li>
                <a
                  href="#stack"
                  className={`transition-all duration-300 rounded-lg ${
                    isScrolled ? "text-sm py-1.5 px-3" : "text-base py-2.5 px-4"
                  }`}
                >
                  Stack
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className={`transition-all duration-300 rounded-lg ${
                    isScrolled ? "text-sm py-1.5 px-3" : "text-base py-2.5 px-4"
                  }`}
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className={`transition-all duration-300 rounded-lg ${
                    isScrolled ? "text-sm py-1.5 px-3" : "text-base py-2.5 px-4"
                  }`}
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#contacts"
                  className={`btn btn-primary transition-all duration-300 ${
                    isScrolled ? "btn-sm min-h-8 h-8" : "btn-md"
                  }`}
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
