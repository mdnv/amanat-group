import { useTranslation } from "react-i18next";
import Reveal from "../components/Reveal";

function PhilosophyBand() {
  const { t } = useTranslation();

  return (
    <section className="px-4 pb-18 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="overflow-hidden rounded-[1.8rem] bg-[var(--color-primary)] px-8 py-12 text-white shadow-[0_30px_90px_rgba(0,17,58,0.18)]">
          <div className="grid gap-8 lg:grid-cols-[1fr_320px] lg:items-end">
            <div>
              <h3 className="font-display text-4xl">{t("founder.philosophyTitle")}</h3>
              <p className="mt-5 max-w-3xl text-base leading-8 text-white/74">{t("founder.philosophyText")}</p>
            </div>
            <div className="rounded-[1.2rem] bg-white/8 p-6">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-secondary-fixed-dim)]">Halal-certified approach</p>
              <p className="mt-3 text-sm leading-7 text-white/76">
                We prioritize real economic value, clear ownership and principled growth.
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default PhilosophyBand;
