import { useState, useEffect } from "react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      {/* Hamburger (mobile) */}
      <div className="fixed top-3 left-4 z-50 md:hidden">
        <button
          onClick={() => setIsMobileMenuOpen((p) => !p)}
          className="flex flex-col justify-center items-center w-12 h-12 rounded-full gap-1.5 p-2"
          style={{
            background: "rgba(0,0,0,0.6)",
            border: "1px solid rgba(255,255,255,0.1)",
            backdropFilter: "blur(12px)",
          }}
        >
          <div className="h-0.5 w-5 bg-gray-300" />
          <div className="h-0.5 w-4 bg-gray-300 ml-auto" />
          <div className="h-0.5 w-3 bg-gray-300" />
        </button>
      </div>

      {/* Name */}
      <div className="fixed md:absolute top-0 left-35 md:left-5 z-50 h-16 flex items-center text-2xl font-[orbFont] font-bold gap-2">
        <div className="relative text-white">
          CodyScott
          <span className="absolute bottom-1.75 -right-1.5 h-1 w-1 rounded-full bg-current" />
        </div>
        <span className="animate-pulse" style={{ color: "#a855f7" }}>_</span>
      </div>

      {/* Desktop nav */}
      <nav
        className={`hidden md:fixed top-0 left-0 right-0 z-40 md:flex justify-center h-16 px-6 transition-all duration-300 ${
          scrolled
            ? "backdrop-blur-md shadow-md"
            : "bg-transparent"
        }`}
        style={scrolled ? { background: "rgba(26,25,29,0.75)", borderBottom: "1px solid rgba(255,255,255,0.06)" } : {}}
      >
        <div className="hidden md:flex gap-12 items-center">
          {["home", "projects", "certificates", "contact"].map((title) => (
            <MenuLink key={title} title={title} onClick={handleLinkClick} />
          ))}
        </div>
      </nav>

      {/* Mobile menu overlay */}
      {isMobileMenuOpen && (
        <div
          className="fixed inset-0 z-40 flex flex-col items-center justify-center gap-8"
          style={{ background: "rgba(10,9,12,0.96)", backdropFilter: "blur(16px)" }}
        >
          {["home", "expertise", "projects", "certificates", "contact"].map((title) => (
            <MenuLink
              key={title}
              title={title}
              onClick={() => handleLinkClick(title)}
              isMobile
            />
          ))}
        </div>
      )}
    </>
  );
};

const MenuLink = ({ title, onClick, isMobile = false }) => (
  <button
    onClick={() => onClick(title.toLowerCase())}
    className={`text-white tracking-widest group transition-all duration-200 ${
      isMobile ? "text-3xl font-semibold" : "text-xl"
    }`}
  >
    <div className="flex items-center gap-1">
      <span
        className="transition-colors duration-200 group-hover:opacity-100 opacity-40"
        style={{ color: "#00ff66" }}
      >
        / /
      </span>
      <p className="group-hover:text-white transition-colors duration-200 text-gray-300">
        {title.toUpperCase()}
      </p>
    </div>
  </button>
);

export default NavBar;
