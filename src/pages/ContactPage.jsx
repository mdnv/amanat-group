import {
  ArrowRight,
  BadgeCheck,
  Building2,
  Camera,
  Globe2,
  Rss,
  Send,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import Reveal from "../components/Reveal";
import useMockSubmit from "../hooks/useMockSubmit";

const ethicsImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCRytxlOW0HKxKa0B1VNFeL5FTRlIKT6VEVRy8lYN5y6JpKFjiaeTFgDc0-ulE-isvKghiu8SckQB8yZn9qlex7R-u8PLGZwZ-po-B2PDbTk6F1eUm_ZQBoc3X_HGrjqZV9vZbLzXYp4FvLQI-qx3wI5mzW8uU3uSqsVBFBKF9O3Rp6WNS2YZ5Fm52bNkQj3s_6OmAtk6qWdKLZzd7eX-AUeQRoXIpItx9F_Z6J1jAyYr4s7jbzbWITGLdPCRq-f1V7FJF8FQi0kwI";

const content = {
  ru: {
    title: "Начните свой путь к этичным инвестициям.",
    description:
      "Оставьте заявку, и наш эксперт свяжется с вами для обсуждения возможностей халяльного инвестирования в недвижимость и бизнес.",
    form: {
      name: "ФИО / Name",
      channel: "Способ связи",
      details: "Контактные данные",
      region: "Регион интереса",
      submit: "Отправить запрос",
      hint: "Мы ответим в течение 24 рабочих часов",
      placeholderName: "Иван Иванов",
      placeholderPhone: "+996 700 000 000",
      channels: ["WhatsApp", "Telegram", "Email"],
      regions: ["Кыргызстан (Бишкек)", "ОАЭ (Дубай)", "Россия (Москва)", "Другой регион"],
    },
    definition: {
      title: "Amanat Definition",
      quote:
        "«Аманат» — это ответственность, доверенная вещь или обязательство, которое необходимо исполнить с высшей степенью честности.",
      text:
        "В нашей работе это означает полную прозрачность, отсутствие скрытых процентов (Риба) и соблюдение этических норм Шариата в каждой сделке.",
    },
    trustTitle: "Почему нам доверяют",
    trust: [
      {
        title: "Halal Certified",
        text: "Все инвестиционные продукты проходят аудит шариатского контроля.",
      },
      {
        title: "Юридическая чистота",
        text: "Прямые контракты и прозрачная структура владения активами.",
      },
      {
        title: "Глобальное присутствие",
        text: "Офисы в Бишкеке, Москве и Дубае для вашего удобства.",
      },
    ],
    socialTitle: "Следите за нами",
    social: ["Amanat Blog", "Telegram", "Instagram", "YouTube"],
    ethicsLabel: "Наша этика",
  },
  en: {
    title: "Begin your path to ethical investing.",
    description:
      "Leave a request and our expert will contact you to discuss halal investment opportunities in real estate and business.",
    form: {
      name: "Full name",
      channel: "Communication",
      details: "Contact details",
      region: "Region of interest",
      submit: "Submit request",
      hint: "We reply within 24 business hours",
      placeholderName: "John Smith",
      placeholderPhone: "+996 700 000 000",
      channels: ["WhatsApp", "Telegram", "Email"],
      regions: ["Kyrgyzstan (Bishkek)", "UAE (Dubai)", "Russia (Moscow)", "Other region"],
    },
    definition: {
      title: "Amanat Definition",
      quote:
        '"Amanat" means a responsibility, entrusted object, or obligation that must be fulfilled with the highest degree of honesty.',
      text:
        "In our work, this means total transparency, no hidden interest (riba), and adherence to ethical Sharia principles in every deal.",
    },
    trustTitle: "Why clients trust us",
    trust: [
      {
        title: "Halal Certified",
        text: "All investment products are audited through Sharia compliance review.",
      },
      {
        title: "Legal clarity",
        text: "Direct contracts and transparent ownership structures for every asset.",
      },
      {
        title: "Global presence",
        text: "Offices in Bishkek, Moscow, and Dubai for your convenience.",
      },
    ],
    socialTitle: "Follow us",
    social: ["Amanat Blog", "Telegram", "Instagram", "YouTube"],
    ethicsLabel: "Our Ethics",
  },
};

const trustIcons = [BadgeCheck, Building2, Globe2];
const socialIcons = [Rss, Send, Camera, Globe2];

function ContactPage() {
  const { i18n } = useTranslation();
  const c = content[i18n.language] ?? content.en;
  const { status, submit } = useMockSubmit();

  return (
    <main className="min-h-screen bg-[var(--color-surface)] px-4 pb-24 pt-32 sm:px-6 lg:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-16 lg:grid-cols-12">
        <div className="lg:col-span-7">
          <header className="mb-12">
            <Reveal>
              <h1 className="mb-6 font-display text-5xl font-extrabold leading-tight tracking-tight text-[var(--color-primary)] md:text-6xl">
                {c.title}
              </h1>
              <p className="max-w-xl text-lg leading-relaxed text-[var(--color-muted)]">
                {c.description}
              </p>
            </Reveal>
          </header>

          <Reveal delay={120}>
            <div className="rounded-xl bg-[var(--color-surface-lowest)] p-10 shadow-[0_20_40px_rgba(0,11,58,0.06)]">
              <form onSubmit={submit} className="space-y-8">
                <div className="group">
                  <label className="mb-2 block text-[0.75rem] font-bold uppercase tracking-wider text-[var(--color-outline)] transition-colors group-focus-within:text-[var(--color-secondary)]">
                    {c.form.name}
                  </label>
                  <input
                    type="text"
                    placeholder={c.form.placeholderName}
                    className="w-full border-0 border-b border-[var(--color-outline-variant)] bg-transparent px-0 py-3 text-lg text-[var(--color-primary)] outline-none transition-all placeholder:text-[var(--color-outline-variant)] focus:border-[var(--color-secondary)] focus:ring-0"
                  />
                </div>

                <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                  <div className="group">
                    <label className="mb-2 block text-[0.75rem] font-bold uppercase tracking-wider text-[var(--color-outline)] transition-colors group-focus-within:text-[var(--color-secondary)]">
                      {c.form.channel}
                    </label>
                    <select className="w-full appearance-none border-0 border-b border-[var(--color-outline-variant)] bg-transparent px-0 py-3 text-lg text-[var(--color-primary)] outline-none transition-all focus:border-[var(--color-secondary)] focus:ring-0">
                      {c.form.channels.map((item) => (
                        <option key={item}>{item}</option>
                      ))}
                    </select>
                  </div>
                  <div className="group">
                    <label className="mb-2 block text-[0.75rem] font-bold uppercase tracking-wider text-[var(--color-outline)] transition-colors group-focus-within:text-[var(--color-secondary)]">
                      {c.form.details}
                    </label>
                    <input
                      type="text"
                      placeholder={c.form.placeholderPhone}
                      className="w-full border-0 border-b border-[var(--color-outline-variant)] bg-transparent px-0 py-3 text-lg text-[var(--color-primary)] outline-none transition-all placeholder:text-[var(--color-outline-variant)] focus:border-[var(--color-secondary)] focus:ring-0"
                    />
                  </div>
                </div>

                <div className="group">
                  <label className="mb-2 block text-[0.75rem] font-bold uppercase tracking-wider text-[var(--color-outline)] transition-colors group-focus-within:text-[var(--color-secondary)]">
                    {c.form.region}
                  </label>
                  <select className="w-full appearance-none border-0 border-b border-[var(--color-outline-variant)] bg-transparent px-0 py-3 text-lg text-[var(--color-primary)] outline-none transition-all focus:border-[var(--color-secondary)] focus:ring-0">
                    {c.form.regions.map((item) => (
                      <option key={item}>{item}</option>
                    ))}
                  </select>
                </div>

                <div className="pt-4">
                  <button
                    type="submit"
                    className="w-full rounded-lg bg-[var(--color-primary)] py-5 text-lg font-bold text-white transition-all duration-200 hover:bg-[var(--color-primary-container)] hover:shadow-lg active:scale-[0.98]"
                  >
                    {c.form.submit}
                  </button>
                  <p className="mt-4 text-center text-[0.7rem] uppercase tracking-widest text-[var(--color-outline)]">
                    {status === "loading"
                      ? i18n.language === "ru"
                        ? "Отправка..."
                        : "Sending..."
                      : status === "success"
                        ? i18n.language === "ru"
                          ? "Запрос успешно отправлен."
                          : "Request sent successfully."
                        : c.form.hint}
                  </p>
                </div>
              </form>
            </div>
          </Reveal>
        </div>

        <aside className="space-y-12 lg:col-span-5">
          <Reveal delay={80}>
            <div className="rounded-r-lg border-l-4 border-[var(--color-secondary)] bg-[var(--color-surface-low)] p-8">
              <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.2em] text-[var(--color-secondary)]">
                {c.definition.title}
              </h3>
              <p className="font-display text-xl font-semibold leading-snug text-[var(--color-primary)] italic">
                {c.definition.quote}
              </p>
              <p className="mt-4 text-sm leading-relaxed text-[var(--color-muted)]">
                {c.definition.text}
              </p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="space-y-6">
              <h3 className="border-b border-[var(--color-outline-variant)] pb-2 text-[0.75rem] font-bold uppercase tracking-widest text-[var(--color-outline)]">
                {c.trustTitle}
              </h3>
              {c.trust.map((item, index) => {
                const Icon = trustIcons[index];
                return (
                  <div key={item.title} className="flex items-start gap-4">
                    <div className="rounded-lg bg-[rgba(233,195,73,0.2)] p-3 text-[var(--color-secondary)]">
                      <Icon size={22} />
                    </div>
                    <div>
                      <h4 className="font-bold text-[var(--color-primary)]">{item.title}</h4>
                      <p className="text-sm text-[var(--color-muted)]">{item.text}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </Reveal>

          <Reveal delay={240}>
            <div className="rounded-xl bg-[var(--color-primary)] p-8 text-white">
              <h3 className="mb-6 text-sm font-bold uppercase tracking-widest text-[var(--color-secondary-fixed-dim)]">
                {c.socialTitle}
              </h3>
              <div className="grid grid-cols-2 gap-4">
                {c.social.map((item, index) => {
                  const Icon = socialIcons[index];
                  return (
                    <a
                      key={item}
                      href={
                        index === 0
                          ? "https://amanat.example/blog"
                          : index === 1
                            ? "https://t.me/"
                            : index === 2
                              ? "https://instagram.com/"
                              : "https://youtube.com/"
                      }
                      target="_blank"
                      rel="noreferrer"
                      className="flex items-center gap-2 text-sm transition-colors hover:text-[var(--color-secondary-fixed-dim)]"
                    >
                      <Icon size={18} />
                      {item}
                    </a>
                  );
                })}
              </div>
              <div className="relative mt-8 h-32 w-full overflow-hidden rounded-lg">
                <img
                  src={ethicsImage}
                  alt="Architectural ethics visual"
                  className="h-full w-full object-cover opacity-60"
                />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="border border-white/40 px-4 py-2 text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                    {c.ethicsLabel}
                  </span>
                </div>
              </div>
            </div>
          </Reveal>
        </aside>
      </div>
    </main>
  );
}

export default ContactPage;
