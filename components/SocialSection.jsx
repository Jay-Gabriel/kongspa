const FacebookIcon = ({ className = "h-6 w-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const InstagramIcon = ({ className = "h-6 w-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const WhatsAppIcon = ({ className = "h-6 w-6" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
  </svg>
);

const PinIcon = ({ className = "h-5 w-5 text-gold" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const ClockIcon = ({ className = "h-5 w-5 text-gold" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const SocialSection = () => {
  const motion = window.Motion.motion;

  return (
    <section
      id="social"
      className="relative w-full bg-[#050505] border-t border-gold/10 pt-20 pb-12 overflow-hidden"
    >
      {/* Background glow effects to look highly premium */}
      <div className="absolute top-0 left-1/4 w-[350px] h-[350px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-gold/5 blur-[100px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-20 w-full">
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start">
          
          {/* Col 1: Logo & Brand Description (4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <div className="h-12 w-12 rounded-full overflow-hidden border border-gold/20 flex items-center justify-center bg-black">
                <img
                  src="image/image_559267.jpg"
                  alt="Kongko Spa Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <h3 className="font-heading italic text-white text-3xl tracking-wide leading-none">
                  Kongko Spa
                </h3>
                <span className="text-[11px] sm:text-[10px] uppercase font-body text-gold tracking-widest">
                  For Man
                </span>
              </div>
            </div>
            
            <p className="text-[13px] sm:text-xs text-white/60 font-body font-light leading-relaxed max-w-sm">
              Discover a new baseline of male wellness. Kongko Spa offers a curated series of restoration rituals blending ancient methodologies with absolute luxury.
            </p>
          </div>

          {/* Col 2: Operating Hours & Address (4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <h4 className="text-[13px] sm:text-xs font-semibold text-gold uppercase tracking-[0.2em] font-body mb-1">
              Ritual Locations
            </h4>
            
            {/* Address */}
            <div className="flex items-start gap-3">
              <div className="mt-0.5">
                <PinIcon />
              </div>
              <div className="flex-1">
                <span className="text-[13px] sm:text-xs text-white/50 font-body block uppercase tracking-wider">
                  Address
                </span>
                <a
                  href="https://maps.google.com/?q=10+ngõ+29+cửa+bắc+ba+đình+hà+nội"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[15px] sm:text-sm text-white/85 hover:text-gold transition-colors duration-300 font-body font-light mt-1 block"
                >
                  10 ngõ 29 cửa bắc, p. Trúc Bạch, q. Ba Đình, TP. Hà Nội
                </a>
              </div>
            </div>

            {/* Hours */}
            <div className="flex items-start gap-3">
              <div className="mt-0.5">
                <ClockIcon />
              </div>
              <div className="flex-1">
                <span className="text-[13px] sm:text-xs text-white/50 font-body block uppercase tracking-wider">
                  Operating Hours
                </span>
                <p className="text-[15px] sm:text-sm text-white/85 font-body font-light mt-1">
                  Daily: 09:00 AM — 10:00 PM
                </p>
              </div>
            </div>
          </div>

          {/* Col 3: Connect & Bookings (4 cols) */}
          <div className="md:col-span-4 flex flex-col gap-6">
            <h4 className="text-[13px] sm:text-xs font-semibold text-gold uppercase tracking-[0.2em] font-body mb-1">
              Digital Sanctuary
            </h4>

            {/* Social Links Row */}
            <div className="flex items-center gap-3">
              {/* Facebook */}
              <motion.a
                whileHover={{ y: -3, scale: 1.05, borderColor: "rgba(212,175,55,0.4)" }}
                href="https://facebook.com" // Placeholder, user will supplement later
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full smoked-glass border border-white/5 flex items-center justify-center text-white/70 hover:text-gold transition-colors duration-300"
                aria-label="Facebook"
              >
                <FacebookIcon className="h-5 w-5" />
              </motion.a>

              {/* Instagram */}
              <motion.a
                whileHover={{ y: -3, scale: 1.05, borderColor: "rgba(212,175,55,0.4)" }}
                href="https://instagram.com" // Placeholder, user will supplement later
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full smoked-glass border border-white/5 flex items-center justify-center text-white/70 hover:text-gold transition-colors duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-5 w-5" />
              </motion.a>

              {/* WhatsApp */}
              <motion.a
                whileHover={{ y: -3, scale: 1.05, borderColor: "rgba(212,175,55,0.4)" }}
                href="https://wa.me/84999999999" // Placeholder, user will supplement later
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full smoked-glass border border-white/5 flex items-center justify-center text-white/70 hover:text-gold transition-colors duration-300"
                aria-label="WhatsApp"
              >
                <WhatsAppIcon className="h-5 w-5" />
              </motion.a>
            </div>

            {/* Quick Contacts */}
            <div className="flex flex-col gap-2 border-t border-white/5 pt-4">
              <span className="text-[11px] sm:text-[10px] text-white/40 font-body uppercase tracking-widest">
                Direct Booking Hotline
              </span>
              <a
                href="tel:+84999999999"
                className="text-lg sm:text-base text-gold hover:text-gold-light transition-colors font-body font-semibold"
              >
                +84 (0) 99 999 9999
              </a>
            </div>
          </div>

        </div>

        {/* Divider & Copyright */}
        <div className="border-t border-white/5 mt-16 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="text-xs text-white/30 font-body font-light">
            {"\u00A9 2026 KONGKO SPA FOR MEN. ALL RIGHTS RESERVED. DESIGNED FOR GENTLEMEN."}
          </span>
          <div className="flex gap-6">
            <a href="#hero" className="text-xs text-white/40 hover:text-gold transition-colors font-body font-light">Privacy Policy</a>
            <a href="#hero" className="text-xs text-white/40 hover:text-gold transition-colors font-body font-light">Terms of Ritual</a>
          </div>
        </div>

      </div>
    </section>
  );
};

window.SocialSection = SocialSection;
