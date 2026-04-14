import { useTranslation } from "react-i18next";
import CtaBanner from "../sections/CtaBanner";
import MissionSection from "../sections/MissionSection";
import PageHero from "../sections/PageHero";
import PortfolioSection from "../sections/PortfolioSection";
function InvestmentsPage() {
  const { t } = useTranslation();

  return (
    <main>
      <PageHero
        eyebrow={t("hero.eyebrow")}
        title={t("portfolio.title")}
        description={t("portfolio.description")}
      />
      <PortfolioSection compact />
      <MissionSection />
      <CtaBanner />
    </main>
  );
}

export default InvestmentsPage;
