import GroupBiographySection from "../sections/group/GroupBiographySection";
import GroupCtaSection from "../sections/group/GroupCtaSection";
import GroupHeroSection from "../sections/group/GroupHeroSection";
import GroupPhilosophySection from "../sections/group/GroupPhilosophySection";
import GroupProjectsSection from "../sections/group/GroupProjectsSection";

function GroupPage() {
  return (
    <main>
      <GroupHeroSection />
      <GroupBiographySection />
      <GroupPhilosophySection />
      <GroupProjectsSection />
      {/* <GroupCtaSection /> */}
    </main>
  );
}

export default GroupPage;
