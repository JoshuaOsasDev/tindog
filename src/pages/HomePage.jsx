import CaroselSection from "../Components/CaroselSection";
import List from "../Components/List";
import NavHeroSection from "../Components/NavHeroSection";
import OurTeam from "../Components/OurTeam";

function HomePage() {
  return (
    <div>
      <NavHeroSection />
      <List />
      <CaroselSection />
      <OurTeam />
    </div>
  );
}

export default HomePage;
