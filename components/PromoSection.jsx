const PromoSection = () => {
  const motion = window.Motion.motion;
  const AnimatePresence = window.Motion.AnimatePresence;

  // Promotion dates (in local timezone, GMT+7)
  const START_DATE = new Date("2026-06-13T00:00:00+07:00");
  const END_DATE = new Date("2026-06-18T23:59:59+07:00");

  const [timeLeft, setTimeLeft] = React.useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
    status: "inactive" // "before", "active", "expired"
  });

  const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);

  React.useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const differenceStart = START_DATE.getTime() - now.getTime();
      const differenceEnd = END_DATE.getTime() - now.getTime();

      let targetDiff = 0;
      let status = "expired";

      if (differenceStart > 0) {
        status = "before";
        targetDiff = differenceStart;
      } else if (differenceEnd > 0) {
        status = "active";
        targetDiff = differenceEnd;
      } else {
        status = "expired";
        targetDiff = 0;
      }

      if (targetDiff <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0, status });
        return;
      }

      const days = Math.floor(targetDiff / (1000 * 60 * 60 * 24));
      const hours = Math.floor((targetDiff / (1000 * 60 * 60)) % 24);
      const minutes = Math.floor((targetDiff / 1000 / 60) % 60);
      const seconds = Math.floor((targetDiff / 1000) % 60);

      setTimeLeft({ days, hours, minutes, seconds, status });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);

    return () => clearInterval(timer);
  }, []);

  // Esc key closes lightbox
  React.useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") setIsLightboxOpen(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // If expired, completely hide the section (stop sale)
  if (timeLeft.status === "expired") {
    return null;
  }

  const handleClaimOffer = (e) => {
    e.preventDefault();
    const targetElement = document.getElementById("social");
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
    setTimeout(() => {
      window.dispatchEvent(new CustomEvent("trigger-booking-highlight"));
    }, 850);
  };

  // Helper to format numbers with leading zero
  const formatNum = (num) => String(num).padStart(2, "0");

  return (
    <section
      id="promo"
      className="relative w-full bg-[#0a0a0a] border-t border-gold/10 pt-24 pb-16 overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute top-1/2 left-1/4 w-[350px] h-[350px] rounded-full bg-gold/5 blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-20 w-full">
        
        {/* Section Header */}
        <div className="mb-12">
          <motion.p
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-sm font-body text-gold tracking-[0.2em] uppercase mb-3"
          >
            // Special Announcement
          </motion.p>
          <motion.h2
            initial={{ filter: "blur(8px)", opacity: 0, y: 20 }}
            whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-heading italic text-white text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-[-2px]"
          >
            Grand <span className="text-gold">Opening</span> Offer
          </motion.h2>
        </div>

        {/* Promo Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Side: Clickable Image Flyer (5 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 flex justify-center"
          >
            <div
              onClick={() => setIsLightboxOpen(true)}
              className="relative rounded-2xl overflow-hidden border border-gold/25 p-2 bg-black/40 backdrop-blur shadow-2xl hover:border-gold/50 cursor-zoom-in group transition-all duration-300 w-full max-w-md"
            >
              <img
                src="image/image_promo.jpg"
                alt="KongKo Spa Grand Opening Sale Flyer"
                className="w-full h-auto rounded-xl object-contain shadow-lg border border-gold/10 group-hover:scale-[1.01] transition-transform duration-500"
              />
              {/* Tap to expand overlay */}
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                <span className="smoked-glass rounded-full px-4 py-2 text-xs font-semibold text-gold-light border border-gold/20 flex items-center gap-1.5 shadow-lg">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.637 10.637z" />
                  </svg>
                  Click to Expand
                </span>
              </div>
            </div>
          </motion.div>

          {/* Right Side: Promotion Details & Countdown (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col gap-6"
          >
            {/* Status Badge */}
            <div>
              {timeLeft.status === "before" ? (
                <span className="smoked-glass text-gold border border-gold/30 px-3.5 py-1.5 text-xs font-semibold uppercase tracking-wider rounded-full inline-flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                  Coming Soon / Sắp Diễn Ra
                </span>
              ) : (
                <span className="bg-gold/10 text-gold border border-gold/40 px-3.5 py-1.5 text-xs font-bold uppercase tracking-wider rounded-full inline-flex items-center gap-1.5 shadow-[0_0_15px_rgba(212,175,55,0.1)]">
                  <span className="w-2 h-2 rounded-full bg-gold animate-ping" />
                  Active Offer / Đang Diễn Ra
                </span>
              )}
            </div>

            {/* Description Text */}
            <div className="flex flex-col gap-4">
              <h3 className="font-heading italic text-gold-light text-3xl sm:text-4xl leading-tight">
                Grand Opening Celebration
              </h3>
              <p className="text-lg text-white/90 font-body font-light leading-relaxed">
                Book <strong className="text-white font-medium">any Body Massage</strong> service and get a <strong className="text-gold font-medium">Cupping Therapy</strong> or <strong className="text-gold font-medium">Body Scrub</strong> completely <span className="underline decoration-gold decoration-2">FREE</span>!
              </p>
              <div className="smoked-glass border border-white/5 rounded-xl p-4 flex flex-col gap-1 max-w-xl">
                <p className="text-sm text-white/60 font-body font-light leading-relaxed italic">
                  Ưu đãi nhân dịp Khai Trương: Tặng ngay dịch vụ Giác Hơi Thải Độc hoặc Tẩy Tế Bào Chết toàn thân (Hoàn toàn Miễn Phí) khi quý khách sử dụng dịch vụ Massage Body.
                </p>
                <p className="text-xs text-gold font-semibold uppercase mt-2 tracking-wider">
                  Promotion Period: June 13 – June 18, 2026
                </p>
              </div>
            </div>

            {/* Countdown Grid */}
            <div className="flex flex-col gap-3 mt-2">
              <span className="text-xs text-white/40 uppercase tracking-widest font-body font-semibold">
                {timeLeft.status === "before" ? "Promotion Starts In:" : "Promotion Ends In:"}
              </span>
              
              <div className="flex items-center gap-2 sm:gap-4 max-w-lg">
                {/* Days */}
                <div className="flex flex-col items-center">
                  <div className="smoked-glass border border-gold/15 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center font-heading text-3xl sm:text-4xl text-white shadow-xl shadow-black/40">
                    {formatNum(timeLeft.days)}
                  </div>
                  <span className="text-[10px] uppercase font-body text-white/40 tracking-wider mt-1.5">Days</span>
                </div>

                <span className="font-heading text-2xl text-gold pb-4">:</span>

                {/* Hours */}
                <div className="flex flex-col items-center">
                  <div className="smoked-glass border border-gold/15 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center font-heading text-3xl sm:text-4xl text-white shadow-xl shadow-black/40">
                    {formatNum(timeLeft.hours)}
                  </div>
                  <span className="text-[10px] uppercase font-body text-white/40 tracking-wider mt-1.5">Hours</span>
                </div>

                <span className="font-heading text-2xl text-gold pb-4">:</span>

                {/* Minutes */}
                <div className="flex flex-col items-center">
                  <div className="smoked-glass border border-gold/15 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center font-heading text-3xl sm:text-4xl text-white shadow-xl shadow-black/40">
                    {formatNum(timeLeft.minutes)}
                  </div>
                  <span className="text-[10px] uppercase font-body text-white/40 tracking-wider mt-1.5">Mins</span>
                </div>

                <span className="font-heading text-2xl text-gold pb-4">:</span>

                {/* Seconds */}
                <div className="flex flex-col items-center">
                  <div className="smoked-glass border border-gold/25 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl flex items-center justify-center font-heading text-3xl sm:text-4xl text-gold-light shadow-xl shadow-black/40">
                    {formatNum(timeLeft.seconds)}
                  </div>
                  <span className="text-[10px] uppercase font-body text-gold/60 tracking-wider mt-1.5">Secs</span>
                </div>
              </div>
            </div>

            {/* Action Button */}
            <div className="mt-4">
              <button
                onClick={handleClaimOffer}
                className="bg-gold hover:bg-gold-light text-black font-body text-base font-semibold px-8 py-3.5 rounded-full flex items-center justify-center gap-2 transition-all duration-300 shadow-xl shadow-gold/10 hover:scale-[1.03] w-full sm:w-auto"
              >
                Claim Offer Now via Zalo
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-4 h-4 stroke-[3]">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
              </button>
            </div>

          </motion.div>
        </div>

      </div>

      {/* Lightbox Modal (AnimatePresence) */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Close Button */}
            <button
              onClick={() => setIsLightboxOpen(false)}
              className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 flex items-center justify-center text-white/80 hover:text-white transition-colors duration-200 z-50"
              aria-label="Close flyer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Expanded Image Container */}
            <motion.div
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="relative max-w-3xl max-h-[90vh] overflow-hidden rounded-xl border border-gold/20 p-1 bg-black/80 shadow-2xl"
              onClick={(e) => e.stopPropagation()} // Prevent closing when clicking the flyer image itself
            >
              <img
                src="image/image_promo.jpg"
                alt="KongKo Spa Grand Opening Sale Flyer - Large View"
                className="w-auto h-auto max-w-full max-h-[88vh] object-contain rounded-lg shadow-inner"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

window.PromoSection = PromoSection;
