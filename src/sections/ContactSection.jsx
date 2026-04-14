import { Globe2, Landmark, Mail, ShieldCheck } from "lucide-react";
import { useTranslation } from "react-i18next";
import Button from "../components/Button";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const socialIcons = [Globe2, Mail, Landmark];

function ContactSection() {
  const { i18n, t } = useTranslation();
  const trustItems = t("contact.trustItems", { returnObjects: true });
  const channels = t("contact.channels", { returnObjects: true });
  const regions = t("contact.regions", { returnObjects: true });

  return (
    <section className="px-4 py-18 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
          <div>
            <Reveal>
              <SectionHeading
                title={t("contact.title")}
                description={t("contact.description")}
              />
            </Reveal>

            <Reveal delay={120}>
              <form className="rounded-[1.6rem] bg-white p-6 shadow-[0_20px_40px_rgba(0,17,58,0.05)] sm:p-10">
                <div className="grid gap-6">
                  <label className="field">
                    <span>{t("contact.form.name")}</span>
                    <input type="text" placeholder={i18n.language === "ru" ? "Иван Иванов" : "John Smith"} />
                  </label>
                  <div className="grid gap-6 md:grid-cols-2">
                    <label className="field">
                      <span>{t("contact.form.channel")}</span>
                      <select defaultValue={channels[0]}>
                        {channels.map((channel) => (
                          <option key={channel}>{channel}</option>
                        ))}
                      </select>
                    </label>
                    <label className="field">
                      <span>{t("contact.form.details")}</span>
                      <input type="text" placeholder="+7 (900) 000-00-00" />
                    </label>
                  </div>
                  <label className="field">
                    <span>{t("contact.form.region")}</span>
                    <select defaultValue={regions[0]}>
                      {regions.map((region) => (
                        <option key={region}>{region}</option>
                      ))}
                    </select>
                  </label>
                  <Button className="mt-4 w-full py-4 text-base">
                    {t("cta.submit")}
                  </Button>
                  <p className="text-center text-xs uppercase tracking-[0.24em] text-[var(--color-muted)]">
                    {t("contact.form.answer")}
                  </p>
                </div>
              </form>
            </Reveal>
          </div>

          <div className="grid gap-6">
            <Reveal delay={80}>
              <div className="rounded-[1.5rem] bg-[var(--color-surface-low)] p-8">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-secondary)]">
                  {t("contact.definitionTitle")}
                </p>
                <p className="mt-5 font-display text-3xl leading-tight text-[var(--color-primary)]">
                  {t("contact.definitionText")}
                </p>
              </div>
            </Reveal>

            <Reveal delay={160}>
              <div className="rounded-[1.5rem] bg-white p-8 shadow-[0_18px_40px_rgba(0,17,58,0.05)]">
                <h3 className="font-display text-3xl text-[var(--color-primary)]">{t("contact.trustTitle")}</h3>
                <div className="mt-6 space-y-5">
                  {trustItems.map((item) => (
                    <div key={item} className="flex items-start gap-4">
                      <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[rgba(233,195,73,0.16)] text-[var(--color-secondary)]">
                        <ShieldCheck size={18} />
                      </div>
                      <p className="max-w-sm text-base leading-7 text-[var(--color-muted)]">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>

            <Reveal delay={240}>
              <div className="overflow-hidden rounded-[1.5rem] bg-[var(--color-primary)] p-8 text-white">
                <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-secondary-fixed-dim)]">Follow Amanat</p>
                <div className="mt-6 flex flex-wrap gap-4">
                  {["Amanat Blog", "Instagram", "Telegram", "YouTube"].map((label, index) => {
                    const Icon = socialIcons[index % socialIcons.length];
                    return (
                      <a
                        key={label}
                        href="/contact"
                        className="inline-flex items-center gap-2 rounded-full bg-white/8 px-4 py-3 text-sm text-white/82 transition-colors hover:bg-white/12"
                      >
                        <Icon size={16} />
                        {label}
                      </a>
                    );
                  })}
                </div>
                <div className="mt-8 rounded-[1rem] bg-[linear-gradient(135deg,rgba(255,255,255,0.12),rgba(255,255,255,0.04))] p-4">
                  <div className="h-40 rounded-[0.9rem] bg-[linear-gradient(135deg,#355a94,#16335f)]" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
