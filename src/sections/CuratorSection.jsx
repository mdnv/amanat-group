import { useTranslation } from "react-i18next";
import Reveal from "../components/Reveal";
import portraitImage from "../images/curator.png";

const content = {
  ru: {
    eyebrow: "Философия отбора",
    title: "Философия\nизбирательного превосходства",
    paragraphs: [
      "Мы рассматриваем недвижимость как форму архитектурного капитала, где сочетаются рыночная аналитика, эстетика и долгосрочная устойчивость. Amanat представляет не просто объекты, а продуманные сценарии владения.",
      "Наш подход строится на приватности, престиже и глубоком понимании дизайна. Мы открываем доступ к активам, которые одновременно защищают капитал и формируют наследие.",
    ],
    quote: "Дом — это не просто актив, а архитектура вашего наследия.",
    statOne: "Кураторский отбор",
    statTwo: "Стран присутствия",
  },
  en: {
    eyebrow: "The Curator",
    title: "A Philosophy of\nDiscerning Excellence",
    paragraphs: [
      "Founded on the principle that real estate is a fine art, Amanat represents the intersection of market intelligence and aesthetic intuition. We do not simply represent properties; we represent visions.",
      "With deep access to exclusive markets, we offer more than transactional expertise. We provide a gateway to a lifestyle defined by privacy, prestige, and enduring design value.",
    ],
    quote: "A home is not just an asset; it's the architecture of your legacy.",
    statOne: "Curated selection",
    statTwo: "Markets covered",
  },
};

function CuratorSection() {
  const { i18n } = useTranslation();
  const c = content[i18n.language] ?? content.en;

  return (
    <section className="bg-[var(--color-surface-low)] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-[96rem]">
        <div className="grid grid-cols-1 items-center gap-16 md:grid-cols-2 lg:gap-24">
          <Reveal className="relative">
            <div className="absolute -left-8 -top-8 h-56 w-56 rounded-full bg-[rgba(255,224,136,0.35)] blur-3xl lg:-left-12 lg:-top-12 lg:h-64 lg:w-64" />
            <div className="relative z-10 overflow-hidden rounded-xl shadow-[0_28px_80px_rgba(0,17,58,0.12)]">
              <img
                className="aspect-[3/4] w-full object-cover"
                src={portraitImage}
                alt="Curated real estate portrait"
              />
            </div>
            <div className="absolute -bottom-6 right-0 z-20 max-w-[22rem] rounded-lg bg-white p-6 shadow-xl sm:-right-6 sm:p-8">
              <p className="font-display text-lg italic text-[var(--color-primary)]">
                "{c.quote}"
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <span className="mb-4 block text-xs uppercase tracking-[0.2em] text-[var(--color-secondary)]">
              {c.eyebrow}
            </span>
            <h2 className="mb-8 whitespace-pre-line font-display text-4xl leading-tight text-[var(--color-primary)] sm:text-5xl">
              {c.title}
            </h2>
            <div className="space-y-6 text-lg font-light leading-relaxed text-[var(--color-muted)]">
              {c.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
            <div className="mt-12 border-t border-[rgba(197,198,210,0.3)] pt-12">
              <div className="flex items-center gap-12">
                <div>
                  <p className="font-display text-3xl text-[var(--color-primary)]">$2.4B+</p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-[var(--color-outline)]">
                    {c.statOne}
                  </p>
                </div>
                <div>
                  <p className="font-display text-3xl text-[var(--color-primary)]">22</p>
                  <p className="mt-1 text-xs uppercase tracking-widest text-[var(--color-outline)]">
                    {c.statTwo}
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default CuratorSection;
