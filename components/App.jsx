const App = () => {
  const Navbar = window.Navbar;
  const Hero = window.Hero;
  const Therapies = window.Therapies;
  const MenuSection = window.MenuSection;
  const SocialSection = window.SocialSection;

  return (
    <div className="relative min-h-screen bg-[#0a0a0a] text-white overflow-x-hidden selection:bg-gold selection:text-black font-body">
      {/* Fixed Header/Navigation */}
      <Navbar />

      {/* Hero / Landing View */}
      <Hero />

      {/* Therapies / Services View */}
      <Therapies />

      {/* Menu & Booklet View */}
      <MenuSection />

      {/* Social / Contact View */}
      <SocialSection />
    </div>
  );
};

window.App = App;
