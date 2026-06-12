const App = () => {
  const Navbar = window.Navbar;
  const Hero = window.Hero;
  const PromoSection = window.PromoSection;
  const Therapies = window.Therapies;
  const StaffSection = window.StaffSection;
  const MenuSection = window.MenuSection;
  const SocialSection = window.SocialSection;

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden selection:bg-gold selection:text-black font-body">
      {/* Fixed Header/Navigation */}
      <Navbar />

      {/* Hero / Landing View */}
      <Hero />

      {/* Grand Opening Promo (hides automatically when expired) */}
      <PromoSection />

      {/* Therapies / Services View */}
      <Therapies />

      {/* Gen Z Therapist Team Showcase */}
      <StaffSection />

      {/* Menu & Booklet View */}
      <MenuSection />

      {/* Social / Contact View */}
      <SocialSection />
    </div>
  );
};

window.App = App;
