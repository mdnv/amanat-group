import clsx from "clsx";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, useLocation } from "react-router-dom";
import Button from "./Button";

function SiteHeader() {
  const { t, i18n } = useTranslation();
  const { pathname } = useLocation();
  const navItems = t("nav", { returnObjects: true });
  const [isScrolled, setIsScrolled] = useState(false);
  const [isRouteTransitioning, setIsRouteTransitioning] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setIsRouteTransitioning(true);
    setIsMenuOpen(false);
    const timer = window.setTimeout(() => {
      setIsRouteTransitioning(false);
    }, 650);
    return () => window.clearTimeout(timer);
  }, [pathname]);

  return (
    <header
      className={clsx(
        "sticky top-0 z-50 overflow-hidden border-b transition-all duration-500",
        isScrolled || isMenuOpen
          ? "border-white/50 bg-[rgba(249,249,249,0.72)] shadow-[0_18px_40px_rgba(0,17,58,0.08)] backdrop-blur-2xl"
          : "border-white/40 bg-[rgba(249,249,249,0.58)] backdrop-blur-xl",
      )}
    >
      <div
        className={clsx(
          "pointer-events-none absolute inset-0 opacity-0 transition-all duration-700",
          isRouteTransitioning && "opacity-100",
        )}
      >
        <div className="header-glass-wave absolute -left-1/4 top-0 h-full w-1/2 bg-[linear-gradient(90deg,transparent,rgba(255,255,255,0.55),transparent)]" />
      </div>

      <div className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-4 py-4 sm:px-6 lg:px-8">
        <NavLink to="/" className="font-display text-2xl tracking-tight text-[var(--color-primary)]">
          AMANAT
        </NavLink>

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <NavLink
              key={item.path}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                clsx(
                  "text-sm transition-colors duration-300",
                  isActive ? "text-[var(--color-primary)]" : "text-[var(--color-muted)] hover:text-[var(--color-primary)]",
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <div className="flex rounded-md bg-white/80 p-1 ring-1 ring-white/70 backdrop-blur-md">
            {["ru", "en"].map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => i18n.changeLanguage(lang)}
                className={clsx(
                  "rounded-[0.35rem] px-3 py-2 text-xs font-semibold uppercase tracking-[0.18em] transition-all",
                  i18n.language === lang
                    ? "bg-[var(--color-primary)] text-white"
                    : "text-[var(--color-muted)]",
                )}
              >
                {lang}
              </button>
            ))}
          </div>

          <NavLink to="/contact" className="hidden sm:block">
            <Button>{t("cta.start")}</Button>
          </NavLink>

          <button
            type="button"
            onClick={() => setIsMenuOpen((value) => !value)}
            className="inline-flex h-11 w-11 items-center justify-center rounded-md bg-white/70 text-[var(--color-primary)] ring-1 ring-white/70 backdrop-blur md:hidden"
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <div
        className={clsx(
          "grid transition-all duration-500 md:hidden",
          isMenuOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
        )}
      >
        <div className="overflow-hidden">
          <nav className="mx-auto max-w-7xl space-y-2 px-4 pb-4 sm:px-6">
            {navItems.map((item) => (
              <NavLink
                key={item.path}
                to={item.path}
                end={item.path === "/"}
                onClick={() => setIsMenuOpen(false)}
                className={({ isActive }) =>
                  clsx(
                    "block rounded-lg px-4 py-3 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-[var(--color-primary)] text-white"
                      : "bg-white/60 text-[var(--color-primary)]",
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

export default SiteHeader;
