const DropletIcon = ({ className = "h-6 w-6 text-gold" }) => (
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
    <path d="M12 22a7 7 0 0 0 7-7c0-4.3-7-9-7-9s-7 4.7-7 9a7 7 0 0 0 7 7z" />
  </svg>
);

const FlameIcon = ({ className = "h-6 w-6 text-gold" }) => (
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
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
  </svg>
);

const LotusIcon = ({ className = "h-6 w-6 text-gold" }) => (
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
    {/* Abstract Premium Spa/Lotus Outline */}
    <path d="M12 3c-1.2 2.5-3.5 4.5-6 5.5C8 10 9 12.5 9 15c0 1 .5 2 1.5 2.5m1.5-14.5c1.2 2.5 3.5 4.5 6 5.5C16 10 15 12.5 15 15c0 1-.5 2-1.5 2.5M12 3v17m-6-5a6 6 0 0 0 12 0m-9 5h6" />
  </svg>
);

const Therapies = () => {
  const motion = window.Motion.motion;
  const AmbientImage = window.AmbientImage;

  const cardData = [
    {
      id: 1,
      title: "Therapeutic Head & Scalp Massage",
      description: "An oriental hair washing and herbal scalp massage ritual designed to clear mental fatigue and nourish your hair.",
      icon: <DropletIcon />,
      tags: ["Scalp Massage", "Herbal Hair Wash", "Stress Relief", "Mind Clearing"]
    },
    {
      id: 2,
      title: "Fire Cupping Therapy",
      description: "Traditional heated cupping combined with back massage to extract fatigue, improve blood circulation, and release deep muscle knots.",
      icon: <FlameIcon />,
      tags: ["Deep Recovery", "Circulation Boost", "Ancient Therapy", "Tension Release"]
    },
    {
      id: 3,
      title: "Holistic Body Restoration",
      description: "A combination of deep tissue acupressure and hot stone therapy to align your energy and melt away chronic body stiffness.",
      icon: <LotusIcon />,
      tags: ["Acupressure", "Hot Stones", "Energy Alignment", "Total Calming"]
    }
  ];

  // Animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { filter: "blur(10px)", opacity: 0, y: 30 },
    visible: {
      filter: "blur(0px)",
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  return (
    <section
      id="therapies"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background Image with Ken Burns zoom and deep overlay */}
      <AmbientImage
        src="image/image_559284.jpg"
        alt="Fire Cupping Session"
        className="opacity-90"
      />
      {/* Heavy dark gradient overlay to make glowing fire pop and keep text readable */}
      <div className="absolute inset-0 bg-black/75 pointer-events-none z-0" />

      {/* Content Container */}
      <div className="relative z-10 px-6 md:px-16 lg:px-20 pt-28 pb-16 flex flex-col min-h-screen justify-between max-w-7xl mx-auto w-full">
        
        {/* Header (Top) */}
        <div className="mb-8">
          <motion.p
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-sm font-body text-gold tracking-[0.2em] uppercase mb-4"
          >
            // Signature Services
          </motion.p>
          <motion.h2
            initial={{ filter: "blur(8px)", opacity: 0, y: 20 }}
            whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-10%" }}
            transition={{ duration: 0.8 }}
            className="font-heading italic text-white text-5xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-2px]"
          >
            Therapies <span className="text-gold">perfected</span>
          </motion.h2>
        </div>

        {/* Cards Grid (Middle) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6 md:mt-12"
        >
          {cardData.map((card) => (
            <motion.div
              key={card.id}
              variants={cardVariants}
              whileHover={{ y: -6, borderColor: "rgba(212, 175, 55, 0.35)" }}
              className="smoked-glass rounded-[1.25rem] p-6 min-h-[360px] flex flex-col border border-gold/10 hover:border-gold/30 transition-all duration-300 group"
            >
              {/* Top Row */}
              <div className="flex items-start justify-between gap-4">
                {/* Left icon container */}
                <div className="w-11 h-11 rounded-[0.5rem] bg-gold/5 border border-gold/15 flex items-center justify-center group-hover:bg-gold/10 group-hover:border-gold/25 transition-colors duration-300">
                  {card.icon}
                </div>
                {/* Right tag container */}
                <div className="flex flex-wrap justify-end gap-1 max-w-[75%]">
                  {card.tags.map((tag) => (
                    <span
                      key={tag}
                      className="smoked-glass rounded-full px-2 py-0.5 text-xs text-white/70 font-body border border-white/5 whitespace-nowrap"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Spacer */}
              <div className="flex-1" />

              {/* Bottom Content */}
              <div className="mt-6">
                <h3 className="font-heading italic text-gold-light text-2xl md:text-3xl tracking-[-0.5px] leading-tight">
                  {card.title}
                </h3>
                <p className="mt-3 text-sm text-white/70 font-body font-light leading-relaxed max-w-[32ch]">
                  {card.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer info (Bottom) */}
        <div className="mt-12 text-center border-t border-gold/10 pt-6">
          <p className="text-sm sm:text-xs font-body font-light text-white/40 tracking-wider">
            {"\u00A9 2026 KONGKO SPA FOR MEN. ALL RIGHTS RESERVED. RESERVATIONS REQUIRE ADVANCE BOOKING."}
          </p>
        </div>

      </div>
    </section>
  );
};

window.Therapies = Therapies;
