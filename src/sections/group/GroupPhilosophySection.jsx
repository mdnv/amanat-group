import { BadgeCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import Reveal from "../../components/Reveal";

const copy = {
  ru: {
    title: "Философия: Business without Riba",
    description:
      "Мы строим бизнес не на процентах, а на реальных активах и партнерстве. Помогая людям расти этично, мы создаем устойчивое будущее для следующих поколений.",
    cardTitle: "Halal-Certified Approach",
    cardText:
      "Все инвестиционные стратегии проходят строгий аудит на соответствие нормам Шариата.",
  },
  en: {
    title: "Philosophy: Business without Riba",
    description:
      "We build business on real assets and partnership, not on interest. By helping people grow ethically, we create a durable future for the next generations.",
    cardTitle: "Halal-Certified Approach",
    cardText:
      "Every investment strategy is audited for strict compliance with Sharia principles.",
  },
};

function GroupPhilosophySection() {
  const { i18n } = useTranslation();
  const c = copy[i18n.language] ?? copy.en;

  return (
    <section className="relative overflow-hidden bg-[var(--color-primary)] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_bottom_right,var(--color-secondary-fixed-dim),var(--color-primary),transparent_60%)]" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <Reveal className="max-w-3xl">
          <h2 className="mb-8 font-display text-4xl font-bold text-white lg:text-5xl">{c.title}</h2>
          <p className="mb-12 text-xl leading-relaxed text-white/80">{c.description}</p>
          <div className="rounded-lg border border-[rgba(233,195,73,0.2)] bg-[rgba(233,195,73,0.1)] p-8 backdrop-blur-sm">
            <div className="flex items-start gap-4">
              <BadgeCheck className="mt-1 text-[var(--color-secondary-fixed-dim)]" size={28} />
              <div>
                <h4 className="mb-2 font-display text-lg font-bold uppercase tracking-[0.08em] text-white">
                  {c.cardTitle}
                </h4>
                <p className="text-sm text-white/60">{c.cardText}</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default GroupPhilosophySection;
