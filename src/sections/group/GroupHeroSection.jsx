import { useTranslation } from "react-i18next";
import Reveal from "../../components/Reveal";
import portraitImage from "../../images/portrait.png";

const copy = {
  ru: {
    eyebrow: "Founder of Amanat Group",
    title: "Умар Кыргыз уулу: Предприниматель, Инвестор, Визионер.",
    description:
      "Создаю экосистему этичного бизнеса, где финансовый рост и духовные ценности неразрывно связаны.",
    followers: "Подписчиков",
    focus: "Фокус на Риба",
    quote: "Истинный капитал — это доверие людей и следование принципам.",
  },
  en: {
    eyebrow: "Founder of Amanat Group",
    title: "Umar Kyrgyz uulu: Entrepreneur, Investor, Visionary.",
    description:
      "Building an ethical business ecosystem where financial growth and spiritual values remain inseparable.",
    followers: "Followers",
    focus: "Riba Focus",
    quote: "True capital is the trust of people and loyalty to principles.",
  },
};

function GroupHeroSection() {
  const { i18n } = useTranslation();
  const c = copy[i18n.language] ?? copy.en;

  return (
    <section className="relative flex min-h-[921px] items-center overflow-hidden bg-[var(--color-surface)]">
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-4 sm:px-6 lg:grid-cols-12 lg:px-8">
        <Reveal className="z-10 lg:col-span-7">
          <span className="mb-6 inline-block rounded-sm bg-[rgba(233,195,73,0.2)] px-3 py-1 text-xs uppercase tracking-[0.18em] text-[var(--color-secondary)]">
            {c.eyebrow}
          </span>
          <h1 className="mb-8 font-display text-5xl font-extrabold leading-[1.06] tracking-[-0.05em] text-[var(--color-primary)] lg:text-7xl">
            {c.title}
          </h1>
          <p className="mb-10 max-w-xl text-xl leading-relaxed text-[var(--color-muted)]">
            {c.description}
          </p>
          <div className="flex items-center gap-6">
            <div className="flex flex-col">
              <span className="font-display text-3xl font-bold text-[var(--color-primary)]">100k+</span>
              <span className="text-xs uppercase tracking-[0.16em] text-[var(--color-outline)]">{c.followers}</span>
            </div>
            <div className="h-10 w-px bg-[rgba(197,198,210,0.3)]" />
            <div className="flex flex-col">
              <span className="font-display text-3xl font-bold text-[var(--color-primary)]">0%</span>
              <span className="text-xs uppercase tracking-[0.16em] text-[var(--color-outline)]">{c.focus}</span>
            </div>
          </div>
        </Reveal>

        <Reveal delay={140} className="relative lg:col-span-5">
          <div className="aspect-[4/5] overflow-hidden rounded-xl bg-[var(--color-surface-high)] shadow-2xl">
            <img
              alt="Portrait of Umar Kyrgyz uulu"
              className="h-full w-full object-cover contrast-110 grayscale-[20%]"
              src={portraitImage}
            />
          </div>
          <div className="absolute -bottom-6 -left-6 max-w-[240px] rounded-lg bg-[var(--color-secondary)] p-8 text-white shadow-xl">
            <p className="text-sm italic leading-relaxed">{c.quote}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default GroupHeroSection;
