const ArrowUpRight = ({ className = "h-4 w-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="2.5"
    stroke="currentColor"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
    />
  </svg>
);

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const motion = window.Motion.motion;
  const AnimatePresence = window.Motion.AnimatePresence;

  const navLinks = [
    { name: "Home", href: "#hero" },
    { name: "Therapies", href: "#therapies" },
    { name: "Menu", href: "#menu" },
    { name: "Contact", href: "#social" }
  ];

  const handleScroll = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const targetId = href.replace("#", "");
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className="fixed top-4 left-0 w-full px-4 md:px-8 lg:px-16 z-50">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          {/* Left: Logo */}
          <a href="#hero" onClick={(e) => handleScroll(e, "#hero")} className="h-12 w-12 rounded-full overflow-hidden border border-gold/20 flex items-center justify-center bg-black">
            <img
              src="image/image_559267.jpg"
              alt="Kongko Spa Logo"
              className="w-full h-full object-contain"
            />
          </a>

          {/* Center (Desktop): Nav Links + Book Now Button */}
          <div className="hidden md:flex items-center smoked-glass rounded-full px-1.5 py-1.5 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                className="px-4 py-2 text-sm font-medium text-white/80 hover:text-gold font-body transition-colors duration-300"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-gold hover:bg-gold-light text-black font-body text-sm font-semibold px-5 py-2 rounded-full flex items-center gap-1.5 transition-all duration-300 shadow-lg shadow-gold/20 hover:scale-[1.03] whitespace-nowrap ml-2">
              Book Now
              <ArrowUpRight className="h-4 w-4 stroke-[3]" />
            </button>
          </div>

          {/* Right (Desktop): Invisible spacer to balance */}
          <div className="hidden md:block w-12 h-12" />

          {/* Mobile Menu Toggle (Mobile only) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden w-12 h-12 rounded-full smoked-glass flex items-center justify-center text-white/90 hover:text-gold transition-colors duration-300 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Drawer (AnimatePresence) */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-40 bg-black/95 backdrop-blur-md pt-24 px-6 flex flex-col justify-between pb-10 md:hidden"
          >
            <div className="flex flex-col gap-6 text-center mt-10">
              {navLinks.map((link, idx) => (
                <motion.a
                  initial={{ opacity: 0, y: 15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="text-2xl font-body font-light text-white/90 hover:text-gold transition-colors"
                >
                  {link.name}
                </motion.a>
              ))}
            </div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.35 }}
              className="flex flex-col gap-4 items-center"
            >
              <button className="w-full max-w-xs bg-gold hover:bg-gold-light text-black font-body text-base font-semibold py-3 rounded-full flex items-center justify-center gap-1.5 transition-all shadow-lg shadow-gold/20">
                Book Now
                <ArrowUpRight className="h-5 w-5 stroke-[3]" />
              </button>
              <span className="text-xs text-white/40 font-body">Exclusive Grooming & Spa Retreat for Men</span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

window.Navbar = Navbar;
