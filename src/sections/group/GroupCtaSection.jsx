import { useTranslation } from "react-i18next";
import Button from "../../components/Button";
import Reveal from "../../components/Reveal";

function GroupCtaSection() {
  const { i18n } = useTranslation();
  const isRu = i18n.language === "ru";

  return (
    <section className="mx-auto mb-24 max-w-7xl px-4 py-24 sm:px-6 lg:px-8">
      <Reveal className="relative overflow-hidden rounded-xl bg-white p-16 text-center shadow-2xl">
        <div className="absolute left-0 top-0 h-24 w-24 border-l-4 border-t-4 border-[rgba(115,92,0,0.2)]" />
        <div className="absolute bottom-0 right-0 h-24 w-24 border-b-4 border-r-4 border-[rgba(115,92,0,0.2)]" />
        <h2 className="mb-6 font-display text-3xl font-bold text-[var(--color-primary)] lg:text-4xl">
          {isRu ? "Готовы начать путь этичного инвестора?" : "Ready to begin the path of an ethical investor?"}
        </h2>
        <p className="mx-auto mb-10 max-w-2xl text-lg text-[var(--color-muted)]">
          {isRu
            ? "Присоединяйтесь к сообществу Amanat Group и получите доступ к закрытым инвестиционным предложениям."
            : "Join the Amanat Group community and gain access to private investment opportunities."}
        </p>
        <div className="flex flex-col justify-center gap-4 sm:flex-row">
          <Button className="px-10 py-4 font-bold">
            {isRu ? "Присоединиться" : "Join"}
          </Button>
          <Button secondary className="border border-[var(--color-secondary)] bg-transparent px-10 py-4 font-bold text-[var(--color-primary)] ring-0 hover:bg-[var(--color-surface-high)]">
            {isRu ? "Консультация" : "Consultation"}
          </Button>
        </div>
      </Reveal>
    </section>
  );
}

export default GroupCtaSection;
