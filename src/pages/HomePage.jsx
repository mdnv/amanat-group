import CtaBanner from "../sections/CtaBanner";
import CuratorSection from "../sections/CuratorSection";
import GeographySection from "../sections/GeographySection";
import HeroSection from "../sections/HeroSection";
import MissionSection from "../sections/MissionSection";
import PortfolioSection from "../sections/PortfolioSection";

function HomePage() {
  return (
    <main>
      <HeroSection />
      <GeographySection />
      <CuratorSection />
      <PortfolioSection />
      <MissionSection />
      <CtaBanner />
    </main>
  );
}

export default HomePage;
