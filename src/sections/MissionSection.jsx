import { Eye, Handshake, Landmark, TrendingUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import Reveal from "../components/Reveal";

const missionImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDqKiMk4aNVmPIgHkfa4cv3pudD1WDfbD98mST-vROjzUD15Q4xZLnIir5KBrjbsAyPdRd558CgvuQBGI7Duu2tlxSCgik5ZCxf64BLliqFh96T3dGtEWNvlckmD8E4JDjNukaZYcei0RbQNrqYS7Si6VN_zqZd6EeZJ_SRGVCri3PxqU1PYqj5B9UlnU6hb4hgyXe0f7jRpM7vpHyW0bphMZ5W3ZQgm0Jh5b5hLHCXvmP-LCY9Iay031tZ8Rn6pDT-EpD3IJvY4rc";

function MissionSection() {
  const { t, i18n } = useTranslation();
  const missionPillars = t("mission.pillars", { returnObjects: true });
  const icons = [Handshake, Eye, TrendingUp];

  return (
    <section className="relative overflow-hidden bg-[var(--color-primary)] px-4 py-24 text-white sm:px-6 lg:px-8 lg:py-32">
      <div className="pointer-events-none absolute right-0 top-0 hidden h-full w-1/3 opacity-10 lg:block">
        <div className="absolute right-[-5rem] top-2 rotate-12 text-[24rem] font-display text-white/20">
          ۞
        </div>
      </div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
        <Reveal>
          <h2 className="text-5xl font-extrabold tracking-[-0.05em]">{t("mission.title")}</h2>
          <p className="mb-16 mt-12 max-w-2xl text-xl leading-relaxed text-white/80">
            {t("mission.text")}
          </p>
          <div className="space-y-12">
            {missionPillars.map((pillar, index) => {
              const Icon = icons[index];
              return (
                <div key={pillar.title} className="flex gap-8">
                  <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-sm bg-[var(--color-secondary)] text-white">
                    <Icon size={28} />
                  </div>
                  <div>
                    <h4 className="text-xl font-bold">{pillar.title}</h4>
                    <p className="mt-2 text-base text-white/70">{pillar.text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>

        <Reveal delay={140}>
          <div className="relative bg-white/10 p-12 backdrop-blur-md">
            <div className="text-6xl font-extrabold text-[var(--color-secondary)]">0%</div>
            <h3 className="mb-4 mt-8 text-2xl font-bold">{t("mission.cardTitle")}</h3>
            <p className="mb-8 leading-relaxed text-white/80">{t("mission.cardText")}</p>
            <img
              alt="Halal finance"
              className="h-48 w-full rounded-sm object-cover grayscale"
              src={missionImage}
            />
            <div className="mt-6 flex items-center gap-3 text-[var(--color-secondary-fixed-dim)]">
              <Landmark size={18} />
              <span className="text-xs uppercase tracking-[0.28em]">
                {i18n.language === "ru" ? "Этичные финансы" : "Ethical Finance"}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default MissionSection;
