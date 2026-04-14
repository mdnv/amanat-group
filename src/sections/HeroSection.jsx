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
    <section className="relative flex min-h-[720px] items-center overflow-hidden sm:min-h-[820px] lg:min-h-[921px]">
      <div className="absolute inset-0 z-0">
        <img
          alt="Dubai skyline at sunset"
          className="h-full w-full object-cover opacity-90 saturate-[0.72] brightness-[0.72] contrast-[0.92]"
          src={heroImage}
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,17,58,0.34),rgba(0,17,58,0.48))] sm:bg-[linear-gradient(180deg,rgba(0,17,58,0.22),rgba(0,17,58,0.32))]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,17,58,0.98),rgba(0,17,58,0.92)_48%,rgba(0,17,58,0.36)_100%)] sm:bg-gradient-to-r sm:from-[rgba(0,17,58,0.96)] sm:via-[rgba(0,17,58,0.84)] sm:to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_30%)] sm:bg-none" />
      </div>

      <div className="relative z-10 mx-auto grid w-full max-w-7xl grid-cols-1 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
        <Reveal className="py-24 text-white sm:py-28 lg:py-32">
          <span className="mb-5 inline-block rounded-sm bg-[var(--color-secondary-fixed-dim)] px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-[#241a00] sm:mb-6 sm:text-[0.75rem] sm:tracking-[0.16em]">
            {t("hero.eyebrow")}
          </span>
          <h1 className="max-w-[14ch] text-[2.65rem] font-extrabold leading-[0.98] tracking-[-0.055em] sm:max-w-[12ch] sm:text-5xl sm:leading-[1.02] md:text-7xl">
            {titleParts[0]}.{" "}
            <span className="text-[var(--color-secondary-fixed-dim)]">
              {titleParts.slice(1).join(". ")}
            </span>
          </h1>
          <p className="mt-6 max-w-[32rem] text-base leading-7 text-white/86 sm:mt-8 sm:max-w-lg sm:text-xl sm:font-light sm:leading-relaxed md:text-2xl">
            {t("hero.description")}
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:mt-12 sm:flex-row sm:gap-6">
            <Link to="/investments" className="w-full sm:w-auto">
              <Button className="w-full bg-[var(--color-secondary)] px-6 py-4 text-base font-bold text-white hover:shadow-xl hover:shadow-[rgba(0,17,58,0.2)] sm:w-auto sm:px-10 sm:py-5 sm:text-lg">
                {t("cta.explore")}
              </Button>
            </Link>
            <Link to="/amanat-group" className="w-full sm:w-auto">
              <Button secondary className="w-full border border-white/22 bg-white/5 px-6 py-4 text-base font-bold text-white ring-0 hover:bg-white/10 hover:text-white sm:w-auto sm:px-10 sm:py-5 sm:text-lg">
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
