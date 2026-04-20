import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: [
        { label: "Investments", path: "/investments" },
        { label: "Real Estate", path: "/real-estate" },
        { label: "Amanat Group", path: "/amanat-group" },
        { label: "Contact", path: "/contact" },
      ],
      cta: {
        start: "Get Started",
        explore: "Explore Portfolios",
        mission: "Our Mission",
        view: "Request Private Viewing",
        join: "Join Private Circle",
        consult: "Book Consultation",
        submit: "Submit Request",
      },
      hero: {
        slides: [
          {
            eyebrow: "Halal Certified",
            title: "Invest with Islamic principles. Build without riba.",
            description: "Amanat Group builds an editorial-grade investment experience across Dubai, Bishkek and Moscow with transparent, asset-backed opportunities.",
            ctaPrimary: "Explore Portfolios",
            ctaSecondary: "Our Mission",
            linkPrimary: "/investments",
            linkSecondary: "/amanat-group"
          },
          {
            eyebrow: "Real Estate",
            title: "Find your dream home. Without interest.",
            description: "Discover premium properties in Dubai and the CIS, structured for ethical ownership and long-term value.",
            ctaPrimary: "View Properties",
            ctaSecondary: "Consultation",
            linkPrimary: "/real-estate",
            linkSecondary: "/contact"
          },
          {
            eyebrow: "Partnership",
            title: "Sell your property. Fast and fair.",
            description: "We are actively acquiring prime real estate. Get a professional valuation and a transparent offer from Amanat Group.",
            ctaPrimary: "Sell Property",
            ctaSecondary: "Contact Us",
            linkPrimary: "/contact",
            linkSecondary: "/contact"
          }
        ],
        eyebrow: "Halal Certified",
        title: "Invest with Islamic principles. Build without riba.",
        description:
          "Amanat Group builds an editorial-grade investment experience across Dubai, Bishkek and Moscow with transparent, asset-backed opportunities.",
        stats: [
          { value: "$120M+", label: "assets curated" },
          { value: "0%", label: "interest-based returns" },
          { value: "3", label: "regional hubs" },
        ],
        quote: "Business without Riba",
      },
      geography: {
        label: "Global Footprint",
        title: "Presence across strategic hubs",
        description:
          "We operate in key Eurasian centers where capital, architecture and ethics intersect.",
        cards: [
          {
            title: "Amanat Estate",
            place: "Dubai, UAE",
            tone: "Safe Work",
          },
          {
            title: "Amanat MSK",
            place: "Moscow, Russia",
            tone: "Prime access",
          },
          {
            title: "Amanat Kyrgyzstan",
            place: "Bishkek, Kyrgyzstan",
            tone: "Capital with altitude",
          },
        ],
      },
      portfolio: {
        title: "Curated opportunity portfolio",
        description:
          "Selective assets and structured projects shaped for long-term, asset-backed growth.",
        link: "See all assets",
        items: [
          {
            title: "The Palm Residency",
            tag: "Dubai",
            text: "Premium beachfront villa package with low-density ownership structure.",
            price: "From $2,400,000",
          },
          {
            title: "Amanat Business Center",
            tag: "Moscow",
            text: "Boutique commercial hub in the heart of the capital's financial district.",
            price: "From $850,000",
          },
          {
            title: "Federation Sky Lofts",
            tag: "Moscow",
            text: "Executive residences with skyline views and private amenity access.",
            price: "From $4,900,000",
          },
        ],
      },
      mission: {
        title: "Mission and values",
        text:
          "We connect Islamic ethical principles with modern investment structures, focusing on trust, transparency and growth through real assets.",
        pillars: [
          {
            title: "Trust",
            text: "Long-horizon responsibility built on clarity and stewardship.",
          },
          {
            title: "Transparency",
            text: "Direct contracts, clear structures and visible capital pathways.",
          },
          {
            title: "Growth",
            text: "Scalable ventures rooted in productive activity and social value.",
          },
        ],
        cardTitle: "0% Riba business",
        cardText:
          "Our model excludes interest-bearing mechanics and prioritizes ethical partnership, ownership and value creation.",
      },
      founder: {
        label: "Founder of Amanat Group",
        title: "Umar Kyrgyz uulu. Entrepreneur, investor, visionary.",
        description:
          "He is building an ecosystem where responsible capital and meaningful growth are inseparable.",
        metrics: [
          { value: "100K+", label: "followers" },
          { value: "0%", label: "riba focus" },
        ],
        quote: "Ethical capital should create stability, not dependence.",
        pathTitle: "Path and mission",
        pathText:
          "From architectural developments to business partnerships, the group advances ventures with strong operational foundations and moral clarity.",
        pathCards: [
          "Education",
          "Community",
          "Scale",
          "Ethics",
        ],
        philosophyTitle: "Philosophy: Business without Riba",
        philosophyText:
          "We build on products, partnerships and real assets instead of speculative debt-based returns.",
      },
      realEstate: {
        title: "Sovereign living. Ethical investment.",
        description:
          "A curated selection of elite properties across Dubai and the CIS with Amanat's Sharia-compliant investment standards.",
        filters: ["All locations", "Any type", "5% - 8% yearly"],
        cards: [
          {
            title: "The Burj Vista Penthouse",
            roi: "9.2%",
            city: "Dubai, UAE",
            price: "Starting from $2,450,000",
          },
          {
            title: "Ala-Too Alpine Residences",
            roi: "11.5%",
            city: "Bishkek, KG",
            price: "Starting from $380,000",
          },
          {
            title: "Federation Tower Executive",
            roi: "7.8%",
            city: "Moscow, RU",
            price: "Starting from $1,120,000",
          },
        ],
        spotlight: {
          label: "Investment spotlight",
          title: "The Ocean Crest Villa",
          text:
            "A landmark Palm Jumeirah residence designed for structured, long-term halal wealth preservation.",
          valuation: "$12.5M",
          yield: "6.5%+",
        },
        outlookTitle: "Market outlook 2024",
        outlookText:
          "Dubai and Bishkek continue attracting capital into premium, compliant real estate structures.",
      },
      contact: {
        title: "Begin your path to ethical investing.",
        description:
          "Leave a request and our team will discuss halal investment opportunities in business and real estate.",
        definitionTitle: "Amanat definition",
        definitionText:
          "Amanat is a responsibility entrusted with the highest degree of honesty, transparency and moral discipline.",
        trustTitle: "Why clients trust us",
        trustItems: [
          "Halal-certified investment structures",
          "Legal transparency and direct ownership",
          "Global presence across Bishkek, Moscow and Dubai",
        ],
        form: {
          name: "Full name",
          channel: "Communication",
          details: "Contact details",
          region: "Region of interest",
          answer: "We reply within 24 business hours",
        },
        channels: ["WhatsApp", "Telegram", "Phone"],
        regions: ["Kyrgyzstan (Bishkek)", "Dubai", "Moscow"],
        subscribe: "Subscribe",
      },
      footer: {
        description:
          "Ethical investment group operating on Islamic finance principles.",
        regions: "Regions",
        company: "Company",
        social: "Social channels",
        links: ["Mission", "Ethics", "Privacy"],
        copy: "© 2024 Amanat Group. Business without Riba.",
      },
    },
  },
  ru: {
    translation: {
      nav: [
        { label: "Главная", path: "/" },
        { label: "Инвестиции", path: "/investments" },
        { label: "Недвижимость", path: "/real-estate" },
        { label: "Amanat Group", path: "/amanat-group" },
        { label: "Контакты", path: "/contact" },
      ],
      cta: {
        start: "Начать",
        explore: "Смотреть портфели",
        mission: "Наша миссия",
        view: "Запросить приватный просмотр",
        join: "Присоединиться",
        consult: "Консультация",
        submit: "Отправить запрос",
      },
      hero: {
        slides: [
          {
            eyebrow: "Halal Certified",
            title: "Инвестиции по нормам Ислама. Бизнес без Риба.",
            description: "Amanat Group создаёт инвестиционный опыт премиального уровня в Дубае, Бишкеке и Москве с прозрачными, обеспеченными активами возможностями.",
            ctaPrimary: "Смотреть портфели",
            ctaSecondary: "Наша миссия",
            linkPrimary: "/investments",
            linkSecondary: "/amanat-group"
          },
          {
            eyebrow: "Недвижимость",
            title: "Найдите дом своей мечты. Без процентов.",
            description: "Откройте для себя элитную недвижимость в Дубае и СНГ, созданную для этичного владения и долгосрочной ценности.",
            ctaPrimary: "Смотреть объекты",
            ctaSecondary: "Консультация",
            linkPrimary: "/real-estate",
            linkSecondary: "/contact"
          },
          {
            eyebrow: "Партнерство",
            title: "Продайте свою недвижимость. Быстро и честно.",
            description: "Мы активно приобретаем качественную недвижимость. Получите профессиональную оценку и прозрачное предложение от Amanat Group.",
            ctaPrimary: "Продать объект",
            ctaSecondary: "Связаться с нами",
            linkPrimary: "/contact",
            linkSecondary: "/contact"
          }
        ],
        eyebrow: "Halal Certified",
        title: "Инвестиции по нормам Ислама. Бизнес без Риба.",
        description:
          "Amanat Group создаёт инвестиционный опыт премиального уровня в Дубае, Бишкеке и Москве с прозрачными, обеспеченными активами возможностями.",
        stats: [
          { value: "$120M+", label: "отобранных активов" },
          { value: "0%", label: "процентных схем" },
          { value: "3", label: "региональных хаба" },
        ],
        quote: "Бизнес без Риба",
      },
      geography: {
        label: "Глобальное присутствие",
        title: "География присутствия",
        description:
          "Мы работаем в ключевых центрах Евразии, где пересекаются капитал, архитектура и этика.",
        cards: [
          {
            title: "Amanat Estate",
            place: "Дубай, UAE",
            tone: "Safe Work",
          },
          {
            title: "Amanat MSK",
            place: "Москва, Россия",
            tone: "Prime access",
          },
          {
            title: "Amanat Kyrgyzstan",
            place: "Бишкек, Кыргызстан",
            tone: "Capital with altitude",
          },
        ],
      },
      portfolio: {
        title: "Портфель предложений",
        description:
          "Эксклюзивные объекты и инвестиционные проекты, выстроенные под долгосрочный рост на основе активов.",
        link: "Все активы",
        items: [
          {
            title: "The Palm Residency",
            tag: "Дубай",
            text: "Премиальный beachfront villa package с низкоплотной структурой владения.",
            price: "От $2,400,000",
          },
          {
            title: "Amanat Business Center",
            tag: "Москва",
            text: "Бутик-коммерческий центр в сердце финансового района столицы.",
            price: "От $850,000",
          },
          {
            title: "Federation Sky Lofts",
            tag: "Москва",
            text: "Executive residences с панорамой skyline и приватными удобствами.",
            price: "От $4,900,000",
          },
        ],
      },
      mission: {
        title: "Миссия и ценности",
        text:
          "Мы соединяем исламские этические принципы с современными инвестиционными структурами, делая ставку на доверие, прозрачность и рост через реальные активы.",
        pillars: [
          {
            title: "Доверие",
            text: "Ответственность на длинном горизонте, основанная на ясности и надёжности.",
          },
          {
            title: "Прозрачность",
            text: "Прямые договоры, понятные структуры и видимый путь капитала.",
          },
          {
            title: "Рост",
            text: "Масштабируемые проекты, основанные на реальной деятельности и пользе.",
          },
        ],
        cardTitle: "0% бизнес без Риба",
        cardText:
          "Наша модель исключает процентные механики и опирается на этическое партнёрство, владение и создание ценности.",
      },
      founder: {
        label: "Основатель Amanat Group",
        title: "Умар Кыргыз уулу. Предприниматель, инвестор, визионер.",
        description:
          "Он строит экосистему, где ответственный капитал и осмысленный рост неразделимы.",
        metrics: [
          { value: "100K+", label: "подписчиков" },
          { value: "0%", label: "фокус на риба" },
        ],
        quote: "Этичный капитал должен создавать устойчивость, а не зависимость.",
        pathTitle: "Путь и миссия",
        pathText:
          "От девелоперских проектов до бизнес-партнёрств, группа развивает направления с сильным операционным фундаментом и моральной ясностью.",
        pathCards: [
          "Образование",
          "Сообщество",
          "Масштаб",
          "Этика",
        ],
        philosophyTitle: "Философия: Business without Riba",
        philosophyText:
          "Мы строим на продуктах, партнёрствах и реальных активах, а не на спекулятивной процентной прибыли.",
      },
      realEstate: {
        title: "Sovereign Living. Ethical Investment.",
        description:
          "Кураторская подборка премиальной недвижимости в Дубае и СНГ по стандартам шариат-соответствующего инвестирования Amanat.",
        filters: ["Все регионы", "Любой тип", "5% - 8% в год"],
        cards: [
          {
            title: "The Burj Vista Penthouse",
            roi: "9.2%",
            city: "Дубай, UAE",
            price: "От $2,450,000",
          },
          {
            title: "Ala-Too Alpine Residences",
            roi: "11.5%",
            city: "Бишкек, KG",
            price: "От $380,000",
          },
          {
            title: "Federation Tower Executive",
            roi: "7.8%",
            city: "Москва, RU",
            price: "От $1,120,000",
          },
        ],
        spotlight: {
          label: "Investment spotlight",
          title: "The Ocean Crest Villa",
          text:
            "Знаковая резиденция на Palm Jumeirah, выстроенная для долгосрочного халяльного сохранения капитала.",
          valuation: "$12.5M",
          yield: "6.5%+",
        },
        outlookTitle: "Рыночный обзор 2024",
        outlookText:
          "Дубай и Бишкек продолжают привлекать капитал в премиальные и шариат-соответствующие структуры недвижимости.",
      },
      contact: {
        title: "Начните свой путь к этичным инвестициям.",
        description:
          "Оставьте заявку, и команда обсудит с вами халяльные инвестиционные возможности в бизнесе и недвижимости.",
        definitionTitle: "Определение Amanat",
        definitionText:
          "Amanat — это ответственность, доверенная с высшей степенью честности, прозрачности и моральной дисциплины.",
        trustTitle: "Почему нам доверяют",
        trustItems: [
          "Halal-certified инвестиционные структуры",
          "Юридическая прозрачность и прямое владение",
          "Глобальное присутствие: Бишкек, Москва и Дубай",
        ],
        form: {
          name: "ФИО / Name",
          channel: "Способ связи",
          details: "Контактные данные",
          region: "Регион интереса",
          answer: "Мы ответим в течение 24 рабочих часов",
        },
        channels: ["WhatsApp", "Telegram", "Телефон"],
        regions: ["Кыргызстан (Бишкек)", "Дубай", "Москва"],
        subscribe: "Подписка",
      },
      footer: {
        description:
          "Этичная инвестиционная группа, работающая по принципам исламских финансов.",
        regions: "Регионы",
        company: "Компания",
        social: "Социальные сети",
        links: ["Mission", "Ethics", "Privacy"],
        copy: "© 2024 Amanat Group. Business without Riba.",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ru",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
