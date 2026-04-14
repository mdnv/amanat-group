import { useTranslation } from "react-i18next";
import Button from "../components/Button";
import Reveal from "../components/Reveal";

function CtaBanner() {
  const { i18n, t } = useTranslation();

  return (
    <section className="px-4 py-18 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Reveal className="rounded-[1.8rem] bg-white px-6 py-10 text-center shadow-[0_25px_50px_rgba(0,17,58,0.06)] sm:px-10">
          <h3 className="font-display text-4xl text-[var(--color-primary)]">
            {i18n.language === "ru"
              ? "Готовы начать путь этичного инвестора?"
              : "Ready to begin the ethical investor path?"}
          </h3>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-[var(--color-muted)]">
            {i18n.language === "ru"
              ? "Присоединяйтесь к сообществу Amanat Group и получите доступ к закрытым инвестиционным возможностям."
              : "Join the Amanat Group circle and get access to private investment opportunities."}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button>{t("cta.join")}</Button>
            <Button secondary>{t("cta.consult")}</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default CtaBanner;
