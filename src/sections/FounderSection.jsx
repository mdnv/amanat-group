import { Sparkles } from "lucide-react";
import { useTranslation } from "react-i18next";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

function FounderSection() {
  const { t } = useTranslation();
  const founderMetrics = t("founder.metrics", { returnObjects: true });
  const founderPathCards = t("founder.pathCards", { returnObjects: true });

  return (
    <section className="px-4 py-18 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-start gap-8 lg:grid-cols-[1fr_0.95fr]">
          <Reveal>
            <SectionHeading
              label={t("founder.label")}
              title={t("founder.title")}
              description={t("founder.description")}
            />
            <div className="flex gap-8">
              {founderMetrics.map((metric) => (
                <div key={metric.label}>
                  <p className="font-display text-4xl text-[var(--color-primary)]">{metric.value}</p>
                  <p className="text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">{metric.label}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[1.5rem] bg-[linear-gradient(135deg,#0a1638,#0a0f1c_60%)] p-5 shadow-[0_30px_80px_rgba(0,17,58,0.18)]">
              <div className="portrait-illustration h-[420px] rounded-[1.1rem]" />
              <div className="absolute bottom-7 left-0 max-w-[240px] translate-x-4 rounded-r-xl bg-[var(--color-secondary)] px-5 py-4 text-sm leading-6 text-[var(--color-primary)] shadow-[0_20px_40px_rgba(115,92,0,0.35)]">
                “{t("founder.quote")}”
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-16 grid gap-8 lg:grid-cols-[1.05fr_0.95fr]">
          <Reveal>
            <h3 className="font-display text-4xl text-[var(--color-primary)]">{t("founder.pathTitle")}</h3>
            <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-muted)]">{t("founder.pathText")}</p>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {founderPathCards.map((item, index) => (
              <Reveal key={item} delay={index * 100}>
                <article className="rounded-[1.15rem] bg-white p-6 shadow-[0_18px_40px_rgba(0,17,58,0.05)]">
                  <Sparkles className="text-[var(--color-secondary)]" size={18} />
                  <p className="mt-4 font-display text-2xl text-[var(--color-primary)]">{item}</p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default FounderSection;
