const MenuSection = () => {
  const motion = window.Motion.motion;
  const AmbientImage = window.AmbientImage;

  const categories = [
    {
      title: "Massage Body (Have Stone Hot / Có Đá Nóng)",
      items: [
        { name: "60 Minutes", vietnamese: "Trị Liệu 60 Phút (Có Đá Nóng)", price: "350.000 VNĐ", usd: "$13" },
        { name: "75 Minutes", vietnamese: "Trị Liệu 75 Phút (Có Đá Nóng)", price: "440.000 VNĐ", usd: "$17" },
        { name: "90 Minutes", vietnamese: "Trị Liệu 90 Phút (Có Đá Nóng)", price: "530.000 VNĐ", usd: "$20" },
        { name: "120 Minutes", vietnamese: "Trị Liệu 120 Phút (Có Đá Nóng)", price: "700.000 VNĐ", usd: "$27" }
      ]
    },
    {
      title: "Fourhands (Massage 4 Tay)",
      items: [
        { name: "60 Minutes", vietnamese: "Massage 4 Tay 60 Phút", price: "700.000 VNĐ", usd: "$27" },
        { name: "75 Minutes", vietnamese: "Massage 4 Tay 75 Phút", price: "880.000 VNĐ", usd: "$33" },
        { name: "90 Minutes", vietnamese: "Massage 4 Tay 90 Phút", price: "1.050.000 VNĐ", usd: "$40" },
        { name: "120 Minutes", vietnamese: "Massage 4 Tay 120 Phút", price: "1.400.000 VNĐ", usd: "$54" }
      ]
    },
    {
      title: "Therapeutic Hairwash (Gội Đầu Dưỡng Sinh)",
      items: [
        { name: "45 Minutes (Offer)", vietnamese: "Gội Đầu Dưỡng Sinh 45 Phút (Ưu Đãi)", price: "250.000 VNĐ", usd: "$10" },
        { name: "75 Minutes (Luxury) + Facial Massage", vietnamese: "Gội Đầu Dưỡng Sinh Cao Cấp + Massage Mặt 75 Phút", price: "550.000 VNĐ", usd: "$21" }
      ]
    },
    {
      title: "Body Scrub & Cupping (Tẩy Da Chết & Giác Hơi)",
      items: [
        { name: "Body Scrub - 20 Minutes", vietnamese: "Tẩy tế bào chết thảo mộc 20 Phút", price: "200.000 VNĐ", usd: "$8" },
        { name: "Cupping Therapy - 20 Minutes", vietnamese: "Giác hơi thải độc cổ truyền 20 Phút", price: "200.000 VNĐ", usd: "$8" }
      ]
    }
  ];

  return (
    <section
      id="menu"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-[#0a0a0a]"
    >
      {/* Background Image using image_massage.jpg with Ken Burns and dark overlay */}
      <AmbientImage src="image/image_massage.jpg" alt="Relaxing Massage Session" />
      <div className="absolute inset-0 bg-black/80 pointer-events-none z-0" />

      {/* Content Container */}
      <div className="relative z-10 px-6 md:px-16 lg:px-20 pt-28 pb-16 flex flex-col min-h-screen justify-between max-w-7xl mx-auto w-full">
        
        {/* Header */}
        <div className="mb-10">
          <motion.p
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-xs md:text-sm font-body text-gold tracking-[0.2em] uppercase mb-4"
          >
            // Ritual Guide & Menu
          </motion.p>
          <motion.h2
            initial={{ filter: "blur(8px)", opacity: 0, y: 20 }}
            whileInView={{ filter: "blur(0px)", opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="font-heading italic text-white text-5xl md:text-7xl lg:text-[6rem] leading-[0.9] tracking-[-2px]"
          >
            Menu & <span className="text-gold">Rituals</span>
          </motion.h2>
        </div>

        {/* Booklet + Digital List Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch flex-1">
          
          {/* Left: Booklet Image (4 cols) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, type: "spring", stiffness: 60 }}
            className="lg:col-span-5 flex items-center justify-center"
          >
            <div className="relative rounded-2xl overflow-hidden border border-gold/25 p-2 bg-black/45 backdrop-blur shadow-2xl shadow-black/80 w-full max-w-md">
              <img
                src="image/image_menu_new.jpg"
                alt="kongkospa Services Booklet"
                className="w-full h-auto rounded-xl object-contain shadow-lg border border-gold/10"
              />
            </div>
          </motion.div>

          {/* Right: Digital Menu list (7 cols) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-7 flex flex-col justify-center gap-6"
          >
            {categories.map((cat, idx) => (
              <div key={idx} className="smoked-glass rounded-[1.25rem] p-6 border border-gold/5 flex flex-col gap-4">
                <h3 className="font-heading italic text-gold text-2xl md:text-3xl tracking-wide border-b border-gold/15 pb-2">
                  {cat.title}
                </h3>
                <div className="flex flex-col gap-3.5">
                  {cat.items.map((item, itemIdx) => (
                    <div
                      key={itemIdx}
                      className="flex items-center justify-between border-b border-white/5 pb-2.5 last:border-0 last:pb-0 group"
                    >
                      <div className="flex-1 pr-4">
                        <h4 className="text-base sm:text-sm font-semibold text-white/95 group-hover:text-gold transition-colors duration-300">
                          {item.name}
                        </h4>
                        <p className="text-sm sm:text-xs text-white/60 font-body font-light mt-0.5 italic">
                          {item.vietnamese}
                        </p>
                      </div>
                      <div className="flex items-baseline gap-2 text-right">
                        <span className="text-base sm:text-sm font-semibold text-gold-light">
                          {item.price}
                        </span>
                        <span className="text-base sm:text-xs text-white/40">
                          ({item.usd})
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}

            {/* Special Offer Badge */}
            <motion.div
              whileHover={{ scale: 1.01 }}
              className="smoked-glass-strong rounded-[1.25rem] p-5 border border-gold/30 text-center flex flex-col gap-1.5 shadow-xl"
            >
              <span className="text-sm sm:text-xs font-bold text-gold uppercase tracking-[0.25em] font-body">
                ✦ Special Offer / Ưu Đãi Đặc Biệt ✦
              </span>
              <p className="text-lg sm:text-base font-semibold text-white/95 font-body">
                50.000 VNĐ OFF when using 2 or more services
              </p>
              <p className="text-base sm:text-xs text-gold-light font-body font-light">
                Giảm 50.000 VNĐ khi sử dụng từ 2 dịch vụ trở lên
              </p>
            </motion.div>

          </motion.div>
        </div>

      </div>
    </section>
  );
};

window.MenuSection = MenuSection;
