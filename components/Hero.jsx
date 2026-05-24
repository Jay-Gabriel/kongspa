const ArrowUpRight = ({ className = "h-5 w-5" }) => (
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

const PlayIcon = ({ className = "h-4 w-4" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="#d4af37"
    className={className}
  >
    <path
      fillRule="evenodd"
      d="M4.5 5.653c0-1.426 1.529-2.33 2.779-1.643l11.54 6.348c1.295.712 1.295 2.573 0 3.285L7.28 19.991c-1.25.687-2.779-.217-2.779-1.643V5.653z"
      clipRule="evenodd"
    />
  </svg>
);

const FlameIcon = ({ className = "h-7 w-7" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#d4af37"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z"
    />
  </svg>
);

const LotusDropIcon = ({ className = "h-7 w-7" }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="#d4af37"
    className={className}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 6v6m0 0l-2-2m2 2l2-2"
    />
  </svg>
);

const Hero = () => {
  const motion = window.Motion.motion;
  const AmbientImage = window.AmbientImage;
  const BlurText = window.BlurText;

  // Base motion animation config
  const entryVariants = {
    hidden: { filter: "blur(10px)", opacity: 0, y: 20 },
    visible: (delay) => ({
      filter: "blur(0px)",
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", delay }
    })
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background Video with loop and dark gradient overlay */}
      <div className="absolute inset-0 w-full h-full overflow-hidden z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="image/mp4.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-[#0a0a0a] pointer-events-none" />
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex-1 flex flex-col items-center justify-center pt-32 px-4 text-center">
        
        {/* Badge */}
        <motion.div
          custom={0.4}
          initial="hidden"
          animate="visible"
          variants={entryVariants}
          className="smoked-glass rounded-full flex items-center p-1 pl-1 pr-3 max-w-lg mb-6 border border-gold/10 hover:border-gold/20 transition-all duration-300"
        >
          <span className="bg-gold text-black px-3.5 py-1 text-xs font-extrabold uppercase tracking-wider rounded-full mr-2.5">
            Premium
          </span>
          <span className="text-xs font-body font-medium text-gold-light tracking-wide">
            Exclusive Scalp Therapy & Grooming Retreat for Men
          </span>
        </motion.div>

        {/* Headline */}
        <div className="mb-4">
          <BlurText
            text="Refine Your Essence Reclaim Your Calm"
            className="text-5xl md:text-7xl lg:text-[5.5rem] font-heading italic text-white leading-[0.95] max-w-4xl justify-center tracking-[-2px]"
          />
        </div>

        {/* Subheading */}
        <motion.p
          custom={0.8}
          initial="hidden"
          animate="visible"
          variants={entryVariants}
          className="text-[15px] sm:text-base text-white/80 max-w-2xl font-body font-light leading-relaxed mt-4"
        >
          Experience unparalleled therapeutic scalp massage, herbal hair wash, and deep tissue restoration in a dark, masculine sanctuary designed exclusively for your recovery.
        </motion.p>

        {/* CTAs */}
        <motion.div
          custom={1.1}
          initial="hidden"
          animate="visible"
          variants={entryVariants}
          className="flex flex-col sm:flex-row items-center gap-5 mt-8 w-full sm:w-auto"
        >
          <button className="w-full sm:w-auto smoked-glass-strong rounded-full px-7 py-3.5 text-sm font-semibold text-gold-light hover:text-white flex items-center justify-center gap-2 hover:scale-[1.03] transition-all duration-300 shadow-xl shadow-black/40">
            Reserve Your Time
            <ArrowUpRight className="h-5 w-5 stroke-[2.5]" />
          </button>
          
          <a
            href="#therapies"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById("therapies")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="text-sm font-body font-medium text-white/95 hover:text-gold flex items-center gap-2 group transition-colors duration-300 py-2"
          >
            Explore Treatments
            <span className="p-2 rounded-full bg-white/5 border border-white/10 group-hover:bg-gold/10 group-hover:border-gold/20 transition-all duration-300">
              <PlayIcon className="h-3 w-3 fill-gold" />
            </span>
          </a>
        </motion.div>

        {/* Stats Row */}
        <motion.div
          custom={1.3}
          initial="hidden"
          animate="visible"
          variants={entryVariants}
          className="flex flex-col sm:flex-row items-stretch gap-5 mt-12 mb-8"
        >
          {/* Card 1 */}
          <motion.div
            whileHover={{ y: -4, borderColor: "rgba(212, 175, 55, 0.3)" }}
            className="smoked-glass rounded-[1.25rem] p-5 w-full sm:w-[220px] text-left flex flex-col justify-between border border-gold/10 transition-colors duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-xl bg-gold/5 border border-gold/15">
                <FlameIcon className="h-7 w-7" />
              </div>
            </div>
            <div className="mt-6">
              <span className="font-heading italic text-gold text-4xl tracking-[-1px] leading-none">
                75 Min
              </span>
              <p className="text-sm sm:text-xs text-white/70 font-body font-light mt-2 leading-tight">
                Signature Head & Scalp Therapy
              </p>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            whileHover={{ y: -4, borderColor: "rgba(212, 175, 55, 0.3)" }}
            className="smoked-glass rounded-[1.25rem] p-5 w-full sm:w-[220px] text-left flex flex-col justify-between border border-gold/10 transition-colors duration-300"
          >
            <div className="flex items-center justify-between">
              <div className="p-2 rounded-xl bg-gold/5 border border-gold/15">
                <LotusDropIcon className="h-7 w-7" />
              </div>
            </div>
            <div className="mt-6">
              <span className="font-heading italic text-gold text-4xl tracking-[-1px] leading-none">
                5-Star
              </span>
              <p className="text-sm sm:text-xs text-white/70 font-body font-light mt-2 leading-tight">
                Gentlemen Satisfaction
              </p>
            </div>
          </motion.div>
        </motion.div>

      </div>

      {/* Brand Philosophy Footer */}
      <motion.div
        custom={1.4}
        initial="hidden"
        animate="visible"
        variants={entryVariants}
        className="relative z-10 flex flex-col items-center gap-4 pb-8"
      >
        <div className="smoked-glass rounded-full px-4 py-1.5 border border-gold/10 hover:border-gold/20 transition-all duration-300">
          <span className="text-sm sm:text-xs font-body font-medium text-white/80 uppercase tracking-widest">
            Mastering the eastern art of scalp and body restoration
          </span>
        </div>
      </motion.div>
    </section>
  );
};

window.Hero = Hero;
