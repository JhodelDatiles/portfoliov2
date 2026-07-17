import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
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
      className={`font-philly fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          // Scrolled floating container: Dark backdrop with a subtle border that matches the Hero border style
          ? "mx-6 md:mx-16 lg:mx-24 mt-5 py-2 bg-[#020617]/90 backdrop-blur-md border border-[#facc15]/20 rounded-2xl shadow-2xl"
          // At the top: Blends seamlessly with the dark Hero background canvas
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        {/* Added back the wrapper flex container to split Logo (left) and Links (right) */}
        <div className="navbar p-0 min-h-0 flex justify-between items-center">
          
          {/* Logo / Brand Name */}
          <div className="flex-1">
            <a
              href="/"
              className="font-bold tracking-tight inline-block"
            >
              <img 
                className={`tracking-tight transition-all duration-300 ${
                  isScrolled ? "h-[30px]" : "h-[40px]"
                }`} 
                // Swaps the image source depending on scroll state:
                // src={isScrolled ? "/public/deltagwhite.png" : "/public/deltag.png"}
                src={"/public/deltagwhite.png"} 
                alt="Logo" 
              />
            </a>
          </div>

          {/* Navigation Links */}
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1 gap-1">
              {[
                { href: "#stack", label: "Stack", tip: "Tech stack" },
                { href: "#experience", label: "Experience", tip: "Past work experiences" },
                { href: "#projects", label: "Projects", tip: "Good stuff" },
                { href: "#contacts", label: "Contacts", tip: "Become associates?" }
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-tip={link.tip}
                    // TEXT COLORS & HOVER: 
                    // Main text stays clean, high-contrast white/ice-blue to respect the dark canvas.
                    // Hovering triggers a splash of your 10% Accent Yellow (#facc15) to draw interactive focus.
                    className={`tooltip tooltip-bottom transition-all duration-300 rounded-lg ${
                      isScrolled
                        ? "text-sm py-1.5 px-3 text-[#dbeafe] hover:bg-[#facc15] hover:text-[#020617] font-semibold"
                        : "text-base py-2.5 px-4 text-white font-medium hover:bg-[#facc15] hover:text-[#020617]"
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </header>
  );
}