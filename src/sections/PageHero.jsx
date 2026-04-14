import { useTranslation } from "react-i18next";
import Reveal from "../components/Reveal";

function PageHero({ eyebrow, title, description }) {
  const { t } = useTranslation();

  return (
    <section className="px-4 pt-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl rounded-[1.8rem] bg-white px-6 py-10 shadow-[0_20px_60px_rgba(0,17,58,0.04)] sm:px-10">
        <Reveal>
          <p className="text-xs font-semibold uppercase tracking-[0.3em] text-[var(--color-secondary)]">
            {eyebrow}
          </p>
          <h1 className="mt-5 max-w-4xl font-display text-5xl leading-[0.95] text-[var(--color-primary)] sm:text-6xl">
            {title}
          </h1>
          <p className="mt-5 max-w-2xl text-base leading-8 text-[var(--color-muted)]">
            {description}
          </p>
          <p className="mt-6 text-sm uppercase tracking-[0.24em] text-[var(--color-muted)]">
            {t("hero.quote")}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default PageHero;
