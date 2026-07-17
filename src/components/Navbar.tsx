import { useState, useEffect } from "react";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false); // Manages mobile menu toggle state

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

  const links = [
    { href: "#hero", label: "home", tip: "hero" },
    { href: "#stack", label: "Stack", tip: "Tech stack" },
    { href: "#experience", label: "Experience", tip: "Past work experiences" },
    { href: "#projects", label: "Projects", tip: "Good stuff" },
    { href: "#contacts", label: "Contacts", tip: "Become associates?" }
  ];

  return (
    <header
      className={`font-philly fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled
          ? "mx-6 md:mx-16 lg:mx-24 mt-5 py-2 border-4 bg-[#020617]/90 backdrop-blur-md border border-yellow rounded-2xl shadow-2xl"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="navbar p-0 min-h-0 flex justify-between items-center relative">
          
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
                src={"/public/deltagwhite.png"} 
                alt="Logo" 
              />
            </a>
          </div>

          {/* ================= DESKTOP NAVIGATION ================= */}
          <div className="hidden md:flex flex-none">
            <ul className="menu menu-horizontal px-1 gap-1">
              {links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    data-tip={link.tip}
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

          {/* ================= MOBILE NAVIGATION TRAY ================= */}
          <div className="flex md:hidden flex-none">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="btn btn-ghost btn-circle text-white focus:bg-transparent active:bg-transparent"
              aria-label="Toggle Menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>

            {/* Mobile Dropdown Panel Menu */}
            {isOpen && (
              <ul className="menu menu-vertical absolute right-0 top-full mt-4 p-4 gap-2 shadow-2xl bg-[#020617] border border-neutral-800 rounded-xl w-52 z-50 text-right items-end">
                {links.map((link) => (
                  <li key={link.href} className="w-full">
                    <a
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-base py-2.5 px-4 w-full block text-white font-medium rounded-lg hover:bg-[#facc15] hover:text-[#020617] transition-all duration-200"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </div>

        </div>
      </div>
    </header>
  );
}