import Hero from "./Hero";
import NavBar from "./NavBar";

function NavHeroSection() {
  return (
    <div className="gradient animation-in bg-black">
      <NavBar />
      <Hero />
    </div>
  );
}

export default NavHeroSection;
