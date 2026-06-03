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

const ZaloIcon = ({ className = "h-6 w-6" }) => (
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
    {/* Speech bubble outline */}
    <path d="M21 11.5c0 4.693-4.03 8.5-9 8.5a9.885 9.885 0 0 1-3.224-.535L4 21l1.35-4.05C3.81 15.42 3 13.554 3 11.5 3 6.807 7.03 3 12 3s9 3.807 9 8.5z" />
    {/* Letter Z */}
    <path d="M9 9h6l-6 6h6" />
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
  const AnimatePresence = window.Motion.AnimatePresence;
  const [isPlaying, setIsPlaying] = React.useState(true);
  const [isMuted, setIsMuted] = React.useState(true);
  const [isHighlighted, setIsHighlighted] = React.useState(false);
  const videoRef = React.useRef(null);

  React.useEffect(() => {
    const handleHighlight = () => {
      setIsHighlighted(true);
    };
    window.addEventListener("trigger-booking-highlight", handleHighlight);
    return () => {
      window.removeEventListener("trigger-booking-highlight", handleHighlight);
    };
  }, []);

  const togglePlay = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play().catch((err) => console.log("Video play interrupted:", err));
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Brand, Info, Social Links (lg:col-span-7) */}
          <div className="lg:col-span-7 flex flex-col gap-10">
            
            {/* Top part: Logo & Description */}
            <div className="flex flex-col gap-5">
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
                  <span className="text-xs uppercase font-body text-gold tracking-widest">
                    For Man
                  </span>
                </div>
              </div>
              
              <p className="text-sm sm:text-xs text-white/60 font-body font-light leading-relaxed max-w-xl">
                Discover a new baseline of male wellness. Kongko Spa offers a curated series of restoration rituals blending ancient methodologies with absolute luxury.
              </p>
            </div>

            {/* Bottom Part: Subgrid for Locations & Digital Sanctuary */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-white/5 pt-8">
              
              {/* Locations & Hours */}
              <div className="flex flex-col gap-6">
                <h4 className="text-sm sm:text-xs font-semibold text-gold uppercase tracking-[0.2em] font-body">
                  Ritual Locations
                </h4>
                
                {/* Address */}
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    <PinIcon />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm sm:text-xs text-white/50 font-body block uppercase tracking-wider">
                      Address
                    </span>
                    <a
                      href="https://maps.google.com/?q=10+ngõ+29+cửa+bắc+ba+đình+hà+nội"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-base sm:text-sm text-white/85 hover:text-gold transition-colors duration-300 font-body font-light mt-1 block"
                    >
                      10 ngõ 29 cửa bắc, p. Ba Đình, TP. Hà Nội
                    </a>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-3">
                  <div className="mt-0.5">
                    <ClockIcon />
                  </div>
                  <div className="flex-1">
                    <span className="text-sm sm:text-xs text-white/50 font-body block uppercase tracking-wider">
                      Operating Hours
                    </span>
                    <p className="text-base sm:text-sm text-white/85 font-body font-light mt-1">
                      Daily: 09:00 AM — 10:00 PM
                    </p>
                  </div>
                </div>
              </div>

              {/* Digital Sanctuary */}
              <div className="flex flex-col gap-6 relative">
                
                {/* Drawing Circle Highlight & Floating Tooltip */}
                <AnimatePresence>
                  {isHighlighted && (
                    <>
                      {/* Hand-drawn look oval overlay */}
                      <svg
                        className="absolute -inset-x-10 -inset-y-8 pointer-events-none w-[calc(100%+5rem)] h-[calc(100%+4rem)] z-20 overflow-visible"
                        viewBox="0 0 100 100"
                        preserveAspectRatio="none"
                      >
                        <motion.path
                          d="M 5,20 C 5,5 20,4 50,4 C 80,4 95,5 95,20 C 95,50 95,80 95,80 C 95,95 80,96 50,96 C 20,96 5,95 5,80 C 5,50 5,20 5,20 C 5,8 18,5 48,5"
                          fill="none"
                          stroke="#d4af37"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          initial={{ pathLength: 0 }}
                          animate={{ pathLength: 1.05 }}
                          exit={{ opacity: 0, transition: { duration: 0.2 } }}
                          transition={{ duration: 1.0, ease: "easeInOut" }}
                        />
                      </svg>

                      {/* Tooltip Popup */}
                      <motion.div
                        initial={{ opacity: 0, y: 15, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ delay: 0.7, duration: 0.4 }}
                        className="absolute -top-16 left-1/2 -translate-x-1/2 z-30 smoked-glass-strong border border-gold/30 px-4 py-2.5 rounded-xl shadow-2xl flex items-center gap-3 whitespace-nowrap"
                      >
                        {/* Pointing arrow */}
                        <div className="absolute bottom-[-6px] left-1/2 -translate-x-1/2 w-3 h-3 rotate-45 bg-[#12100b] border-r border-b border-gold/30" />
                        
                        <span className="text-sm font-body text-gold-light font-medium flex items-center gap-2">
                          <span className="inline-block w-2.5 h-2.5 rounded-full bg-gold animate-ping" />
                          Contact for consultation here
                        </span>

                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            setIsHighlighted(false);
                          }}
                          className="p-1 rounded-full hover:bg-white/10 text-white/60 hover:text-white transition-colors duration-200"
                          aria-label="Close highlight"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-3.5 h-3.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                          </svg>
                        </button>
                      </motion.div>
                    </>
                  )}
                </AnimatePresence>

                <h4 className="text-sm sm:text-xs font-semibold text-gold uppercase tracking-[0.2em] font-body">
                  Digital Sanctuary
                </h4>

                {/* Social Links Row */}
                <div className="flex flex-wrap items-center gap-3">
                  {/* Facebook */}
                  <motion.a
                    whileHover={{ y: -3, scale: 1.05, borderColor: "rgba(212,175,55,0.4)" }}
                    href="https://www.facebook.com/profile.php?id=61590153940347&rdid=tqRkcaDFwKrWvxOq&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1H4Ziz8DBr%2F"
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
                    href="https://www.instagram.com/kangko_spa?utm_source=qr&igsh=ZmN6aHBzczZ1bWNm"
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
                    href="https://wa.me/qr/4TJULFRMLP5YC1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full smoked-glass border border-white/5 flex items-center justify-center text-white/70 hover:text-gold transition-colors duration-300"
                    aria-label="WhatsApp"
                  >
                    <WhatsAppIcon className="h-5 w-5" />
                  </motion.a>

                  {/* Zalo */}
                  <motion.a
                    whileHover={{ y: -3, scale: 1.05, borderColor: "rgba(212,175,55,0.4)" }}
                    href="https://zalo.me/0776643662"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full smoked-glass border border-white/5 flex items-center justify-center text-white/70 hover:text-gold transition-colors duration-300"
                    aria-label="Zalo"
                  >
                    <ZaloIcon className="h-5 w-5" />
                  </motion.a>
                </div>

                {/* Quick Contacts */}
                <div className="flex flex-col gap-2 border-t border-white/5 pt-4">
                  <span className="text-xs text-white/40 font-body uppercase tracking-widest">
                    Direct Booking Hotline / Zalo
                  </span>
                  <a
                    href="tel:0776643662"
                    className="text-xl sm:text-base text-gold hover:text-gold-light transition-colors font-body font-semibold"
                  >
                    077 664 3662
                  </a>
                </div>
              </div>

            </div>

          </div>

          {/* Right Column: Premium Video Showcase (lg:col-span-5) */}
          <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative w-full max-w-[360px] aspect-[9/16] rounded-3xl overflow-hidden border border-gold/20 shadow-[0_0_30px_rgba(212,175,55,0.07)] smoked-glass flex flex-col justify-between group"
            >
              {/* Interactive Video element */}
              <video
                ref={videoRef}
                src="image/7878449943786.mp4"
                className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 group-hover:scale-105"
                loop
                muted
                playsInline
                autoPlay
              />
              
              {/* Overlay gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none z-10" />

              {/* Top video label */}
              <div className="relative z-20 p-5 flex items-center justify-between pointer-events-none">
                <span className="text-[10px] font-body tracking-[0.25em] text-white/80 uppercase font-semibold drop-shadow-md">
                  Kongko Sanctuary
                </span>
                <span className="h-2 w-2 rounded-full bg-gold animate-pulse" />
              </div>

              {/* Playback and audio control button overlays */}
              <div className="relative z-20 p-5 flex items-end justify-between w-full">
                
                {/* Visual indicator / caption */}
                <div className="flex flex-col pointer-events-none">
                  <span className="font-heading italic text-2xl text-gold-light leading-none drop-shadow-lg">
                    Experience restoration
                  </span>
                  <span className="text-[10px] text-white/60 font-body uppercase mt-1 tracking-wider drop-shadow">
                    Tap to hear ritual vibes
                  </span>
                </div>

                {/* Control Buttons */}
                <div className="flex gap-2.5">
                  {/* Play / Pause Toggle */}
                  <button
                    onClick={togglePlay}
                    className="w-10 h-10 rounded-full bg-black/60 hover:bg-gold/80 hover:text-black border border-white/10 flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm"
                    aria-label={isPlaying ? "Pause Video" : "Play Video"}
                  >
                    {isPlaying ? (
                      /* Pause Icon */
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M6.75 5.25a.75.75 0 0 1 .75-.75H9a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H7.5a.75.75 0 0 1-.75-.75V5.25Zm7.5 0A.75.75 0 0 1 15 4.5h1.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H15a.75.75 0 0 1-.75-.75V5.25Z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      /* Play Icon */
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 ml-0.5">
                        <path fillRule="evenodd" d="M4.5 5.653c0-1.427 1.529-2.33 2.779-1.643l11.54 6.347c1.295.712 1.295 2.573 0 3.286L7.28 19.99c-1.25.687-2.779-.217-2.779-1.643V5.653Z" clipRule="evenodd" />
                      </svg>
                    )}
                  </button>

                  {/* Mute / Unmute Toggle */}
                  <button
                    onClick={toggleMute}
                    className="w-10 h-10 rounded-full bg-black/60 hover:bg-gold/80 hover:text-black border border-white/10 flex items-center justify-center text-white transition-all duration-300 backdrop-blur-sm"
                    aria-label={isMuted ? "Unmute Video" : "Mute Video"}
                  >
                    {isMuted ? (
                      /* Muted Icon */
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5">
                        <path d="M11 5L6 9H2v6h4l5 4V5z" />
                        <line x1="23" y1="9" x2="17" y2="15" />
                        <line x1="17" y1="9" x2="23" y2="15" />
                      </svg>
                    ) : (
                      /* Unmuted / Volume Icon */
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4.5 h-4.5">
                        <path d="M11 5L6 9H2v6h4l5 4V5z" />
                        <path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07" />
                      </svg>
                    )}
                  </button>
                </div>

              </div>

            </motion.div>
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
