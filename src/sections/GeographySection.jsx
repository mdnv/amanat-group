import { useTranslation } from "react-i18next";
import Reveal from "../components/Reveal";
import SectionHeading from "../components/SectionHeading";

const geographyImages = [
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDY7TiwWKvttzsEuSPR_4FZf3k1rvEnJ4MC-apjWylN6qMajz-UTtWhIL8uMX9UKb80o9v9U3qS-dK6DYDW-CyPuAEdG3Pn2e9qpTTcu-MDh1NheQOi5vfghO_Udvx11Nv_pQ3u0W7Xeg2HG2oTXvRJZD59u_csVbcIZTXh4jiZjvzWXZg1ryaRIVd0pE25SGbSnI0fSee2qa1XZlqUXhSPg6uY2MmM92V-xQHR1zszTKGQZxhcLImcZAaJa-JY4M_v8LrgeGY9HbM",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAE-j2eu1mU1xQGmkktD_lVJtpNC3sR_SWIn663pahXozj8xceHN__NAptZCrfGYtA05NkTHqG18tlUifwrX5j1SiYnGOADD80rMCJI1zvRfx9SxBpghmi45SMXvwJtz7ek2NjFQ3H73z7bmR4PFLeFqRbpSDbSsNNqq83Rz47sSznPnBpGSs4GEr_12_2pSveheJNJHiy_CbnJfy65Ztk7NX-WguDYleKMPe7nX2AW8fm4whLw_3ARsZGm3LJvPs9iwtwNdhUwRGM",
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAyq3ttJxW9entQeG-7aMWJ1_ocHjYuKRGssXcHfaO9Pr4Kd30_58f9I7gykUULlTqUY1kUt7IC3uRdNU_vHcncPGTkqJi8dqALVqGiZ_KlqPwgNeUWjsI5Dalb4CGsJl4o-0DN4T8w9I50kwyM3k8lz_z0Y3EyqGTJpJ15t5m1RoJNh4O_EhThEkZNCTXVp92XbYwUhlV7kkL-pQvKfV4D-uSbE4pT8U0Bd_jT6V61wKxCoGynVtNF9hi9QmsnhxbVR1Y2z73mh30",
];

function GeographySection() {
  const { t } = useTranslation();
  const geographyCards = t("geography.cards", { returnObjects: true });

  return (
    <section className="bg-[var(--color-surface)] px-4 py-24 sm:px-6 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-7xl">
        <Reveal>
          <SectionHeading
            label={t("geography.label")}
            title={t("geography.title")}
            description={t("geography.description")}
          />
        </Reveal>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-12">
          {geographyCards.map((card, index) => (
            <Reveal
              key={card.title}
              delay={index * 110}
              className={[
                index === 0 ? "md:col-span-7" : "",
                index === 1 ? "md:col-span-5" : "",
                index === 2 ? "md:col-span-12" : "",
              ].join(" ")}
            >
              <article
                className={[
                  "group relative overflow-hidden bg-[var(--color-surface-lowest)] shadow-[0_20px_40px_rgba(0,17,58,0.06)]",
                  index === 0 ? "h-[500px]" : "",
                  index === 1 ? "h-[500px]" : "",
                  index === 2 ? "h-[400px]" : "",
                ].join(" ")}
              >
                <img
                  alt={card.title}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                  src={geographyImages[index]}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(0,17,58,0.9)] via-transparent to-transparent" />
                <div className="absolute bottom-10 left-8 sm:bottom-12 sm:left-12">
                  <h3 className="text-3xl font-bold text-white">{card.title}</h3>
                  <p className="mt-2 text-sm font-medium uppercase tracking-[0.28em] text-[var(--color-secondary-fixed-dim)]">
                    {card.place}
                  </p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

export default GeographySection;
