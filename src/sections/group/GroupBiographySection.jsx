import { BadgeCheck, BarChart3, GraduationCap, Users } from "lucide-react";
import { useTranslation } from "react-i18next";
import Reveal from "../../components/Reveal";

const copy = {
  ru: {
    title: "Путь и Миссия",
    paragraphs: [
      "Умар Кыргыз уулу — основатель Amanat Group, чья деятельность выходит далеко за рамки классического инвестирования. Как блогер и просветитель, он ставит своей целью трансформацию финансового мышления общества.",
      "Через призму религиозных ценностей, Умар обучает финансовой грамотности тысячи людей, доказывая, что современный капитализм может быть этичным, прозрачным и свободным от ростовщичества (Риба).",
    ],
    cards: [
      {
        title: "Образование",
        text: "Финансовая грамотность и исламские финансы.",
      },
      {
        title: "Сообщество",
        text: "Создание сети этичных предпринимателей.",
      },
      {
        title: "Масштаб",
        text: "Проекты в Кыргызстане, ОАЭ и СНГ.",
      },
      {
        title: "Этика",
        text: "Полное соответствие принципам Халяль.",
      },
    ],
  },
  en: {
    title: "Path and Mission",
    paragraphs: [
      "Umar Kyrgyz uulu is the founder of Amanat Group, with work that extends far beyond classical investing. As a blogger and educator, he aims to transform the financial mindset of society.",
      "Through the lens of faith-based values, Umar teaches financial literacy to thousands of people, showing that modern capitalism can be ethical, transparent, and free from riba.",
    ],
    cards: [
      {
        title: "Education",
        text: "Financial literacy and Islamic finance.",
      },
      {
        title: "Community",
        text: "Building a network of ethical entrepreneurs.",
      },
      {
        title: "Scale",
        text: "Projects across Kyrgyzstan, UAE, and the CIS.",
      },
      {
        title: "Ethics",
        text: "Full alignment with halal principles.",
      },
    ],
  },
};

const icons = [GraduationCap, Users, BarChart3, BadgeCheck];

function GroupBiographySection() {
  const { i18n } = useTranslation();
  const c = copy[i18n.language] ?? copy.en;

  return (
    <section className="bg-[var(--color-surface-low)] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 items-start gap-20 lg:grid-cols-2">
          <Reveal>
            <h2 className="mb-8 font-display text-3xl font-bold text-[var(--color-primary)]">{c.title}</h2>
            <div className="space-y-6 text-lg leading-relaxed text-[var(--color-muted)]">
              {c.paragraphs.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          </Reveal>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {c.cards.map((card, index) => {
              const Icon = icons[index];
              return (
                <Reveal key={card.title} delay={index * 90}>
                  <article className="rounded-lg bg-white p-8 shadow-[0_18px_40px_rgba(0,17,58,0.04)]">
                    <Icon className="mb-4 text-[var(--color-secondary)]" size={34} strokeWidth={1.8} />
                    <h3 className="mb-2 font-display text-lg font-bold text-[var(--color-primary)]">{card.title}</h3>
                    <p className="text-sm text-[var(--color-outline)]">{card.text}</p>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default GroupBiographySection;
