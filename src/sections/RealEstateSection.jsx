import clsx from "clsx";
import { ArrowRight, ChevronDown, Target } from "lucide-react";
import { useTranslation } from "react-i18next";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const backgrounds = [
  "from-[#14346f] via-[#0d1d4f] to-[#08112a]",
  "from-[#204f8d] via-[#173d71] to-[#0b1736]",
  "from-[#74b3df] via-[#376693] to-[#17345a]",
];

function RealEstateSection() {
  const { t } = useTranslation();
  const realEstateFilters = t("realEstate.filters", { returnObjects: true });
  const realEstateCards = t("realEstate.cards", { returnObjects: true });

  return (
    <section className="bg-[var(--color-surface-low)] px-4 py-18 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            label="Exclusive portfolio"
            title={t("realEstate.title")}
            description={t("realEstate.description")}
          />
        </Reveal>

        <Reveal className="mb-8 rounded-[1.35rem] bg-white p-4 shadow-[0_18px_40px_rgba(0,17,58,0.04)]">
          <div className="grid gap-3 md:grid-cols-[repeat(3,1fr)_auto]">
            {realEstateFilters.map((filter) => (
              <button
                key={filter}
                className="flex items-center justify-between rounded-xl bg-[var(--color-surface)] px-4 py-4 text-sm text-[var(--color-primary)]"
              >
                {filter}
                <ChevronDown size={16} className="text-[var(--color-muted)]" />
              </button>
            ))}
            <button className="rounded-xl bg-[var(--color-surface)] px-4 py-4 text-sm text-[var(--color-primary)]">
              Advanced Filters
            </button>
          </div>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {realEstateCards.map((card, index) => (
            <Reveal key={card.title} delay={index * 100}>
              <article className="overflow-hidden rounded-[1.25rem] bg-white shadow-[0_18px_40px_rgba(0,17,58,0.05)]">
                <div className={clsx("relative h-72 bg-gradient-to-br", backgrounds[index])}>
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.5),transparent_25%),linear-gradient(180deg,transparent,rgba(6,16,42,0.24))]" />
                  <div className="absolute left-4 top-4 rounded-full bg-white/80 px-3 py-2 text-[11px] uppercase tracking-[0.22em] text-[var(--color-primary)]">
                    {card.city}
                  </div>
                  <div className="absolute bottom-4 right-4 rounded-xl bg-[var(--color-primary)] px-4 py-3 text-[var(--color-secondary-fixed-dim)] shadow-lg">
                    <span className="block text-[10px] uppercase tracking-[0.22em] text-white/60">Starting from</span>
                    <strong className="text-xl">{card.price.replace(/^.*? /, "")}</strong>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl leading-tight text-[var(--color-primary)]">{card.title}</h3>
                    <div className="text-right">
                      <p className="font-display text-2xl text-[var(--color-secondary)]">{card.roi}</p>
                      <p className="text-[10px] uppercase tracking-[0.22em] text-[var(--color-muted)]">est. annual roi</p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between text-sm text-[var(--color-muted)]">
                    <span>{card.city}</span>
                    <ArrowRight size={18} className="text-[var(--color-primary)]" />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-[1.05fr_1fr_0.85fr]">
          <Reveal>
            <div className="h-full min-h-[440px] overflow-hidden rounded-[1.35rem] bg-gradient-to-br from-[#dda35d] via-[#8b5d2e] to-[#233c66]" />
          </Reveal>

          <Reveal delay={100}>
            <div className="h-full rounded-[1.35rem] bg-white p-8 shadow-[0_18px_40px_rgba(0,17,58,0.05)]">
              <p className="text-xs uppercase tracking-[0.28em] text-[var(--color-secondary)]">
                {t("realEstate.spotlight.label")}
              </p>
              <h3 className="mt-5 font-display text-4xl leading-tight text-[var(--color-primary)]">
                {t("realEstate.spotlight.title")}
              </h3>
              <p className="mt-5 text-base leading-8 text-[var(--color-muted)]">
                {t("realEstate.spotlight.text")}
              </p>
              <div className="mt-8 grid gap-5 sm:grid-cols-2">
                <div>
                  <p className="font-display text-4xl text-[var(--color-primary)]">
                    {t("realEstate.spotlight.valuation")}
                  </p>
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">valuation</p>
                </div>
                <div>
                  <p className="font-display text-4xl text-[var(--color-secondary)]">
                    {t("realEstate.spotlight.yield")}
                  </p>
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">portfolio yield</p>
                </div>
              </div>
              <Button className="mt-10">
                {t("cta.view")}
                <ArrowRight size={16} />
              </Button>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <aside className="h-full rounded-[1.35rem] bg-[var(--color-primary)] p-8 text-white shadow-[0_18px_40px_rgba(0,17,58,0.08)]">
              <Target className="text-[var(--color-secondary)]" size={22} />
              <h3 className="mt-6 font-display text-3xl">{t("realEstate.outlookTitle")}</h3>
              <p className="mt-5 text-sm leading-7 text-white/72">{t("realEstate.outlookText")}</p>
              <div className="mt-10 space-y-3">
                {["+14.2% Dubai luxury sector growth", "+8.5% Bishkek real estate inflow"].map((item) => (
                  <div key={item} className="rounded-xl bg-white/8 p-4 text-sm">
                    {item}
                  </div>
                ))}
              </div>
            </aside>
          </Reveal>
        </div>

        <Reveal className="mt-10 text-center">
          <Button secondary className="bg-white px-8">
            Load More Portfolio Assets
            <ChevronDown size={16} />
          </Button>
        </Reveal>
      </div>
    </section>
  );
}

export default RealEstateSection;
