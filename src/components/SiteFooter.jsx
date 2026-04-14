import { ArrowRight } from "lucide-react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import useMockSubmit from "../hooks/useMockSubmit";

function SiteFooter() {
  const { t, i18n } = useTranslation();
  const regions = t("contact.regions", { returnObjects: true });
  const footerLinks = t("footer.links", { returnObjects: true });
  const currentYear = new Date().getFullYear();
  const { status, submit } = useMockSubmit();
  const regionLinks = ["/investments", "/real-estate", "/contact"];
  const companyLinks = ["/amanat-group", "/amanat-group", "/contact"];
  const isRu = i18n.language === "ru";

  return (
    <footer className="bg-[var(--color-primary)] px-4 py-14 text-white sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-4">
          <div>
            <p className="font-display text-3xl text-[var(--color-secondary)]">AMANAT</p>
            <p className="mt-5 max-w-xs text-sm leading-7 text-white/70">{t("footer.description")}</p>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/50">{t("footer.regions")}</p>
            <ul className="mt-5 space-y-3 text-white/78">
              {regions.map((region, index) => (
                <li key={region}>
                  <Link to={regionLinks[index] ?? "/"} className="transition-colors hover:text-white">
                    {region}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/50">{t("footer.company")}</p>
            <ul className="mt-5 space-y-3 text-white/78">
              {footerLinks.map((link, index) => (
                <li key={link}>
                  <Link to={companyLinks[index] ?? "/"} className="transition-colors hover:text-white">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/50">{t("contact.subscribe")}</p>
            <form onSubmit={submit} className="mt-5">
              <div className="flex overflow-hidden rounded-md bg-white/8">
                <input
                  type="email"
                  required
                  placeholder="Email"
                  className="w-full bg-transparent px-4 py-4 text-sm text-white placeholder:text-white/40 focus:outline-none"
                />
                <button
                  type="submit"
                  className="bg-[var(--color-secondary)] px-5 text-[var(--color-primary)]"
                  aria-label="Subscribe"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
              <p className="mt-3 text-xs text-white/60">
                {status === "loading"
                  ? isRu
                    ? "Отправка..."
                    : "Sending..."
                  : status === "success"
                    ? isRu
                      ? "Подписка оформлена."
                      : "Subscribed successfully."
                    : isRu
                      ? "Получайте новые обзоры портфеля и обновления."
                      : "Get new portfolio notes and updates."}
              </p>
            </form>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-white/52 md:flex-row md:items-center md:justify-between">
          <p>{t("footer.copy").replace("2024", String(currentYear))}</p>
          <p className="uppercase tracking-[0.24em] text-[var(--color-secondary-fixed-dim)]">
            {isRu ? "Halal certified" : "Halal certified"}
          </p>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
