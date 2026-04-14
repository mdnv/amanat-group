import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import Reveal from "../components/Reveal";

const heroImage =
  "https://images.unsplash.com/photo-1768069794857-b4690ab163a3?auto=format&fit=crop&fm=jpg&ixlib=rb-4.1.0&q=80&w=2600";

function HeroSection() {
  const { t } = useTranslation();
  const titleParts = t("hero.title").split(". ");

  return (
    <section className="relative flex min-h-[921px] items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img
          alt="Dubai skyline at sunset"
          className="h-full w-full object-cover opacity-90 saturate-[0.72] brightness-[0.72] contrast-[0.92]"
          src={heroImage}
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,17,58,0.18),rgba(0,17,58,0.28))]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(0,17,58,0.96)] via-[rgba(0,17,58,0.84)] to-transparent" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal className="py-20 text-white lg:py-32">
          <span className="mb-6 inline-block rounded-sm bg-[var(--color-secondary-fixed-dim)] px-3 py-1 text-[0.75rem] font-bold uppercase tracking-[0.16em] text-[#241a00]">
            {t("hero.eyebrow")}
          </span>
          <h1 className="text-5xl font-extrabold leading-[1.06] tracking-[-0.05em] md:text-7xl">
            {titleParts[0]}.{" "}
            <span className="text-[var(--color-secondary-fixed-dim)]">
              {titleParts.slice(1).join(". ")}
            </span>
          </h1>
          <p className="mt-8 max-w-lg text-xl font-light leading-relaxed text-white/90 md:text-2xl">
            {t("hero.description")}
          </p>
          <div className="mt-12 flex flex-col gap-6 sm:flex-row">
            <Link to="/investments">
              <Button className="bg-[var(--color-secondary)] px-10 py-5 text-lg font-bold text-white hover:shadow-xl hover:shadow-[rgba(0,17,58,0.2)]">
                {t("cta.explore")}
              </Button>
            </Link>
            <Link to="/amanat-group">
              <Button secondary className="border border-white/30 bg-transparent px-10 py-5 text-lg font-bold text-white ring-0 hover:bg-white/10 hover:text-white">
                {t("cta.mission")}
              </Button>
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default HeroSection;
