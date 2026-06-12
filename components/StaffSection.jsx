const SparkleIcon = ({ className = "h-6 w-6 text-gold" }) => (
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
    <path d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8z" />
  </svg>
);

const ShieldCheckIcon = ({ className = "h-6 w-6 text-gold" }) => (
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
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="m9 11 2 2 4-4" />
  </svg>
);

const HeartHandshakeIcon = ({ className = "h-6 w-6 text-gold" }) => (
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
    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    <path d="M12 5 9.04 7.96a2.1 2.1 0 0 0 0 2.97v0a2.1 2.1 0 0 0 2.97 0L15 8" />
  </svg>
);

const StaffSection = () => {
  const motion = window.Motion.motion;

  const staffValues = [
    {
      id: 1,
      title: "Aesthetic & Groomed Standards",
      vietnamese: "Diện mạo sáng & Chỉn chu",
      description: "Our therapists are carefully selected not only for their expertise but also for their clean, youthful, and well-groomed presentation.",
      vietnameseDesc: "Đội ngũ kỹ thuật viên trẻ trung, năng động, được tuyển chọn kỹ lưỡng về ngoại hình sáng, mang đến sự chỉn chu và dễ chịu.",
      icon: <SparkleIcon />
    },
    {
      id: 2,
      title: "Rigorous Professional Training",
      vietnamese: "Đào tạo bài bản & Chuyên sâu",
      description: "Masterfully certified in oriental scalp treatments, deep tissue massage, hot stones, and traditional fire cupping.",
      vietnameseDesc: "100% kỹ thuật viên được đào tạo chuyên sâu về kỹ thuật ấn huyệt, trị liệu cổ vai gáy và chăm sóc da mặt nam giới.",
      icon: <ShieldCheckIcon />
    },
    {
      id: 3,
      title: "Understanding & Attentive Care",
      vietnamese: "Tinh tế & Tận tâm phục vụ",
      description: "A highly respectful, polite, and energetic team that creates a peaceful, comfortable space for your ultimate relaxation.",
      vietnameseDesc: "Thái độ lịch sự, chu đáo, hiểu tâm lý khách hàng, mang lại cảm giác thoải mái tối đa mà không gây e ngại.",
      icon: <HeartHandshakeIcon />
    }
  ];

  const galleryImages = [
    {
      id: 1,
      src: "image/image_55926b.jpg",
      title: "Herbal Scalp Treatment",
      subtitle: "Gội Đầu Dưỡng Sinh Đông Y"
    },
    {
      id: 2,
      src: "image/image_massage.jpg",
      title: "Body Restoration Massage",
      subtitle: "Trị Liệu Massage Đá Nóng"
    },
    {
      id: 3,
      src: "image/image_559284.jpg",
      title: "Traditional Fire Cupping",
      subtitle: "Giác Hơi Thải Độc Cổ Truyền"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { filter: "blur(8px)", opacity: 0, y: 25 },
    visible: {
      filter: "blur(0px)",
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section
      id="team"
      className="relative w-full bg-[#0a0a0a] border-t border-gold/10 pt-24 pb-16 overflow-hidden"
    >
      {/* Background glow effects to look highly premium */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[400px] h-[400px] rounded-full bg-gold/5 blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 lg:px-20 w-full">
        {/* Section Header */}
        <div className="mb-12 md:mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl">
            <motion.p
              initial={{ opacity: 0, x: -15 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-xs md:text-sm font-body text-gold tracking-[0.2em] uppercase mb-3"
            >
              // Our Professional Therapists
            </motion.p>
            <motion.h2
              initial={{ filter: "blur(8px)", opacity: 0, y: 20 }}
              whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="font-heading italic text-white text-5xl md:text-7xl lg:text-[5.5rem] leading-[0.95] tracking-[-2px]"
            >
              Elite <span className="text-gold">Gen Z</span> Team
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-sm sm:text-xs text-white/50 font-body font-light max-w-sm md:text-right leading-relaxed"
          >
            We take pride in our exceptionally professional, youthful, and well-groomed therapist team, setting a new benchmark of aesthetic excellence and genuine gentlemen grooming.
          </motion.p>
        </div>

        {/* Value Cards Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-10%" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
        >
          {staffValues.map((value) => (
            <motion.div
              key={value.id}
              variants={cardVariants}
              whileHover={{ y: -5, borderColor: "rgba(212, 175, 55, 0.3)" }}
              className="smoked-glass rounded-[1.25rem] p-6 border border-gold/10 hover:border-gold/25 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-gold/5 border border-gold/15 flex items-center justify-center mb-6">
                  {value.icon}
                </div>
                <h3 className="text-lg font-semibold text-white/95 font-body">
                  {value.title}
                </h3>
                <span className="text-xs font-medium text-gold/80 font-body block mt-0.5">
                  {value.vietnamese}
                </span>
                <p className="mt-4 text-sm text-white/70 font-body font-light leading-relaxed">
                  {value.description}
                </p>
              </div>
              <div className="mt-4 pt-4 border-t border-white/5">
                <p className="text-sm text-white/40 font-body font-light italic">
                  {value.vietnameseDesc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Interactive Gallery Showcase */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {galleryImages.map((image, index) => (
            <motion.div
              key={image.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-5%" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              whileHover={{ y: -6 }}
              className="group relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[3/4] rounded-2xl overflow-hidden border border-gold/15 shadow-xl cursor-default"
            >
              {/* Image */}
              <img
                src={image.src}
                alt={image.title}
                className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-700 ease-out group-hover:scale-110"
              />
              {/* Overlay shading */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/20 z-10 transition-opacity duration-300 group-hover:opacity-95" />

              {/* Text Card overlay */}
              <div className="absolute bottom-0 left-0 w-full p-6 z-20 flex flex-col justify-end">
                <span className="text-[10px] uppercase font-body text-gold tracking-widest font-semibold">
                  {image.subtitle}
                </span>
                <h4 className="text-xl font-heading italic text-white leading-none mt-1 group-hover:text-gold-light transition-colors">
                  {image.title}
                </h4>
                {/* Tiny dynamic line indicator */}
                <div className="w-0 h-[1.5px] bg-gold mt-3 transition-all duration-300 group-hover:w-16" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

window.StaffSection = StaffSection;
