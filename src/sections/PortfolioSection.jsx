import clsx from "clsx";
import { ArrowRight, BadgeCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const portfolioImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAHPhvRRVi2eVeeNFQ3uSaB-laZwXAQ-cLVtwOBfHt-u72uqUZa4lZRAHf928vocDLlwksUq4BlVVTkn1vX8hxTTQpkiCZVI_kus6IMBhlCsrhAmIvEJDervZwqDs7xCiHxsvpQroFzJGTGYL6ESbE3KMM27M1YeceCR5fBGl_NgtyB_6tiDrEbbAzW_cC8T8WPB5HORV45xuI1MHg9Y1-PbeGayoEenKFixmgpjyZtsgLvN4LoKDJZP3BJRA08pUsxnVdI8oq739Y",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAdmgwAQPxMhs2n63kDMCLq1vtxjD5Xr6mdNdiSgTu2kw9xndu1hhrZCNcejldGMt7Qd9xPpMou_fhx6WIBR9zEprKOMHrzWGx1Xo8T3X_QG3CQoKZccUP1CxCu0P3lwSWJYb66-_fYVCQJ545hOROQBk-AnWb9lcSu-gHI7e0bd-BjzLd8V9IzICgcpDSMf5uLpiBK8Aj3kGZ3v2C9I9HOe3TM08zxOAwp061WwLZTHfsbeieTCQHXKRN6sPgtXAxo8ZaL0hxvzs4",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuB_mR3tYihcvSRYi7jFgF24CW5pOzpq9T6OddJahLBNwq-qw40zG6Nr7gQVL7rPq4Dx6DDIMaNB8eINfMwAonar7OeDZHLbYYgI-aRyybKqF8dhISSDBBlxGM1ZCy3GwxX29xihXsPBouWEwvfcPj5okCJqmaJUweb1kaqzJozI6dKRiVE3izfG3VXAlS5J7Ti_jlcDPHk8AMiXmOX2xJEYY_eEUrVj2a7Q79A4yi9qjRrz4wsXzJ31lp4JTqdXPrs3NjdGKgj_rFk",
];

function PortfolioSection({ compact = false }) {
  const { t } = useTranslation();
  const portfolioItems = t("portfolio.items", { returnObjects: true });

  return (
    <section className={clsx("px-4 py-24 sm:px-6 lg:px-8 lg:py-32", compact ? "" : "bg-[var(--color-surface-low)]")}>
      <div className="mx-auto max-w-7xl">
        <Reveal className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <SectionHeading
            title={t("portfolio.title")}
            description={t("portfolio.description")}
          />
          <Link to="/real-estate" className="group flex items-center gap-2 font-bold text-[var(--color-primary)]">
            {t("portfolio.link")}
            <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
          </Link>
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {portfolioItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 110}>
              <article className="group flex h-full flex-col overflow-hidden rounded-sm bg-white">
                <div className="aspect-[4/5] overflow-hidden">
                  <img
                    alt={item.title}
                    className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                    src={portfolioImages[index]}
                  />
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <div className="mb-4 flex items-start justify-between gap-4">
                    <h4 className="text-xl font-bold text-[var(--color-primary)]">{item.title}</h4>
                    <span className="rounded-sm bg-[rgba(233,195,73,0.2)] px-2 py-1 text-[0.65rem] font-bold uppercase text-[var(--color-secondary)]">
                      {item.tag}
                    </span>
                  </div>
                  <p className="mb-6 text-sm text-[var(--color-muted)]">{item.text}</p>
                  <div className="mt-auto flex items-center justify-between border-t border-[rgba(197,198,210,0.1)] pt-6">
                    <span className="font-bold text-[var(--color-primary)]">{item.price}</span>
                    <BadgeCheck className="text-[var(--color-secondary)]" size={18} />
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PortfolioSection;
