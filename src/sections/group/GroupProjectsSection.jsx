import { ArrowRight, Building2, ExternalLink, Play, WalletCards } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Reveal from "../../components/Reveal";

const hubImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAU5h_ESrTLTTDKRTfXsbS1qt9g08PRUtBO36nlRgNFICz1B2knNlxd1EuLAEUpkOGSkcra09Be92Sm3InW7sQEKmIGyM8gNDgCx4_thzAH5qNqi9Fe6E_LLskqF5tb2q9ZfZh2TecGkoC7yZpE_GsPGJZiHZWqCesb8G8GIFniYk3YZoZ5zf2Yc217iV_-QAOl2cwZ_b61O9HSbtfZsmHZVDf4Bkg3ktASjzPh-kkSjzGwfn--1E5YqO95IwthEkOgrHbRXJnS_bI";

const academyImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBbp2OcRLFEZjwdX2CVDKUN9XE8xc1TiBPc_LZl7JDE1pz5Mmm8NfD9s5EjDi1AMgDtcrw9DMXyZwm9DOzwUOguJ1RnwKnhX2c5Dm3RSfcFwPTZJ80Z5j5BSAgcS3w_jtY_DXKE5bJbb-MLkS362Z5Ah8og-3EY8pZoADsnON9dorY-0ykhCf6To4Q2YIukd0dCeUzQ9hmkKHeMM-5v7Gsj-v8hfIK1vhIkPEwfvmG7meWIS8YEq32ht8A_hDQWcvOow1Z7JYW-hR4";

const copy = {
  ru: {
    title: "Мои Проекты",
    hubTitle: "Amanat Kyrgyzstan",
    hubTag: "Investment Hub",
    hubText:
      "Флагманский проект по управлению активами в Кыргызстане. Мы объединяем капитал частных инвесторов для реализации масштабных инфраструктурных и бизнес-проектов.",
    details: "Подробнее",
    mskTitle: "MSK",
    mskText:
      "Консалтинг и образовательные платформы для предпринимателей в СНГ. Обучаем масштабированию без привлечения кредитных средств.",
    join: "Вступить",
    estateTitle: "Estate",
    estateText:
      "Инвестиции в премиальную недвижимость Дубая и Центральной Азии. Доходность через аренду и перепродажу готовых объектов.",
    roi: "ROI Focused",
    academyTitle: "Финансовая Академия",
    academyText:
      "Авторские курсы и вебинары по управлению личными финансами, инвестированию в акции и криптоактивы в соответствии с нормами этики.",
    courses: "Смотреть курсы",
    youtube: "YouTube",
  },
  en: {
    title: "My Projects",
    hubTitle: "Amanat Kyrgyzstan",
    hubTag: "Investment Hub",
    hubText:
      "The flagship asset management project in Kyrgyzstan. We unite private investor capital to launch major infrastructure and business ventures.",
    details: "Learn more",
    mskTitle: "MSK",
    mskText:
      "Consulting and education platforms for entrepreneurs across the CIS. We teach growth without credit-based financing.",
    join: "Join",
    estateTitle: "Estate",
    estateText:
      "Premium real estate investments across Dubai and Central Asia. Returns through rental income and resale of completed assets.",
    roi: "ROI Focused",
    academyTitle: "Financial Academy",
    academyText:
      "Author-led courses and webinars on personal finance, equities, and crypto-assets aligned with ethical standards.",
    courses: "View courses",
    youtube: "YouTube",
  },
};

function GroupProjectsSection() {
  const { i18n } = useTranslation();
  const c = copy[i18n.language] ?? copy.en;

  return (
    <section className="bg-[var(--color-surface)] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <h2 className="mb-16 font-display text-3xl font-bold text-[var(--color-primary)]">{c.title}</h2>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-8">
            <article className="group relative overflow-hidden rounded-xl bg-white shadow-sm transition-all duration-500 hover:shadow-xl">
              <div className="aspect-[21/9] w-full">
                <img
                  alt="Amanat Kyrgyzstan"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={hubImage}
                />
              </div>
              <div className="p-10">
                <div className="mb-4 flex items-start justify-between gap-4">
                  <h3 className="font-display text-2xl font-bold text-[var(--color-primary)]">{c.hubTitle}</h3>
                  <span className="rounded-sm bg-[rgba(0,35,102,0.08)] px-3 py-1 text-xs uppercase tracking-[0.16em] text-[var(--color-primary)]">
                    {c.hubTag}
                  </span>
                </div>
                <p className="mb-6 max-w-2xl leading-relaxed text-[var(--color-muted)]">{c.hubText}</p>
                <Link to="/investments" className="inline-flex items-center font-bold text-[var(--color-secondary)]">
                  {c.details}
                  <ArrowRight className="ml-2" size={18} />
                </Link>
              </div>
            </article>
          </Reveal>

          <Reveal delay={90} className="md:col-span-4">
            <article className="flex h-full flex-col justify-between rounded-xl bg-[var(--color-primary)] p-10">
              <div>
                <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-lg bg-[var(--color-secondary)]">
                  <WalletCards className="text-white" size={22} />
                </div>
                <h3 className="mb-4 font-display text-2xl font-bold text-white">{c.mskTitle}</h3>
                <p className="mb-8 text-sm leading-relaxed text-white/70">{c.mskText}</p>
              </div>
              <Link to="/contact" className="flex items-center font-bold text-[var(--color-secondary-fixed-dim)]">
                {c.join}
                <ExternalLink className="ml-2" size={18} />
              </Link>
            </article>
          </Reveal>

          <Reveal delay={120} className="md:col-span-4">
            <article className="rounded-xl border border-[rgba(197,198,210,0.1)] bg-[var(--color-surface-high)] p-10">
              <Building2 className="mb-6 text-[var(--color-secondary)]" size={34} />
              <h3 className="mb-4 font-display text-2xl font-bold text-[var(--color-primary)]">{c.estateTitle}</h3>
              <p className="mb-8 text-sm leading-relaxed text-[var(--color-muted)]">{c.estateText}</p>
              <div className="flex items-center justify-between border-t border-[rgba(197,198,210,0.2)] pt-6">
                <span className="text-xs uppercase tracking-[0.16em] text-[var(--color-outline)]">{c.roi}</span>
                <span className="font-bold text-[var(--color-primary)]">12-18% p.a.</span>
              </div>
            </article>
          </Reveal>

          <Reveal delay={180} className="md:col-span-8">
            <article className="flex flex-col items-center gap-8 rounded-xl border border-[rgba(197,198,210,0.1)] bg-white p-10 shadow-sm md:flex-row">
              <div className="flex-1">
                <h3 className="mb-4 font-display text-2xl font-bold text-[var(--color-primary)]">{c.academyTitle}</h3>
                <p className="mb-6 text-sm leading-relaxed text-[var(--color-muted)]">{c.academyText}</p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/contact">
                    <Button className="bg-[var(--color-secondary)] px-6 py-2 text-sm font-bold text-white">
                      <Play size={16} />
                      {c.courses}
                    </Button>
                  </Link>
                  <a
                    href="https://www.youtube.com/"
                    target="_blank"
                    rel="noreferrer"
                    className="rounded-lg border border-[rgba(197,198,210,1)] px-6 py-2 text-sm font-bold text-[var(--color-primary)]"
                  >
                    {c.youtube}
                  </a>
                </div>
              </div>
              <div className="aspect-video w-full overflow-hidden rounded-lg md:w-1/3">
                <img
                  alt="Education project"
                  className="h-full w-full object-cover"
                  src={academyImage}
                />
              </div>
            </article>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default GroupProjectsSection;
