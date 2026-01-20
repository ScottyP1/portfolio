import { useState, useEffect } from "react";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  const handleLinkClick = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false); // close menu after click
  };

  return (
    <>
      {/* Hamburger (mobile only) */}
      <div className="fixed top-3 left-4 z-50 md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="flex flex-col justify-center items-center w-12 h-12 bg-black rounded-full gap-1.5 p-2"
        >
          <div className="h-0.5 w-5 bg-gray-400" />
          <div className="h-0.5 w-4 bg-gray-400 ml-auto" />
          <div className="h-0.5 w-3 bg-gray-400" />
        </button>
      </div>

      {/* Name */}
      <div
        className={`fixed md:absolute top-0 left-35  md:left-5 z-50 h-16 flex items-center text-2xl font-[orbFont] font-bold gap-2 transition-colors duration-300`}
      >
        <div
          className={`relative ${
            isMobileMenuOpen ? "text-white" : "text-black"
          }`}
        >
          CodyScott
          <span className="absolute bottom-1.75 -right-1.5 h-1 w-1 rounded-full bg-current" />
        </div>
        <span className="text-purple-400 animate-pulse">_</span>
      </div>

      {/* Desktop Navbar */}
      <nav
        className={`hidden md:fixed top-0 left-0 right-0 z-40 md:flex justify-center h-16 px-6 transition-colors duration-300 ${
          scrolled
            ? "backdrop-blur text-blue-300 shadow-md"
            : "bg-transparent text-white"
        }`}
      >
        <div className="hidden md:flex gap-12 items-center">
          {["home", "projects", "Certificates", "contact"].map((title) => (
            <MenuLink key={title} title={title} onClick={handleLinkClick} />
          ))}
        </div>
      </nav>

      {isMobileMenuOpen && (
        <div className="fixed inset-0 bg-black/90 z-40 flex flex-col items-center justify-center gap-8">
          {["home", "expertise", "work", "projects", "contact"].map((title) => (
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
    className={`text-white text-xl tracking-widest ${
      isMobile ? "text-3xl font-semibold" : ""
    }`}
  >
    <div className="flex">
      <span className="mx-2">/ /</span>
      <p>{title.toUpperCase()}</p>
    </div>
  </button>
);

export default NavBar;
