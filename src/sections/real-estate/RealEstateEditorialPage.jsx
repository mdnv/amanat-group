import {
  ArrowRight,
  Bath,
  BedDouble,
  Building2,
  ChevronDown,
  ChevronRight,
  Map,
  SlidersHorizontal,
  Square,
  TrendingUp,
  Verified,
} from "lucide-react";
import { useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import Reveal from "../../components/Reveal";
import useMockSubmit from "../../hooks/useMockSubmit";

const propertyImages = {
  dubai:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAzPSiE0S33d0c95vr1x8J2kNiRtrs2xszHqW9QLsI0HaFEFLXNCtTUkq_IrWc53NhS159f9QY-aqJGHHZprg76JpBSdySNlj-F2oStM6PWBFm8fr-V-g8bXmH_3Syr7ZgEseG7VJ8Hoj229zoosbkr0ySSrJ1x9xsNEXFI6dsVxwXDv0Ai4OPW3W3i8mg4X8XIInzSyyIJZB9K0bMkFl4drjKvOV_OLtbUNGU2SodiFRanjAK5DB2xZNGgwAe8gq9b2H9kavG4vVY",
  bishkek:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBDfNSrg-zCHgvlffB75DkeLOnWwTF0EN6dHYbo-gyDtBLNN-ImC4hpRDliPJS5Tr7qNNKn7a2EvdnjoiheCPT9LKTyGAqpIkIzw6CdPQpi2fWa6nWC_qhskmkDMbkjwT_QtUpLFhZen9jPYUzeFzDAncUO40PATaSYjRT3XedqDfsINbgFIicnWDv1rwx-TC-aIYaCh4b0PISAewf7J_wMI69A6fq664ck_XgZ7vZuCsgC6IkhwfXSRpr0KBA-5hsLqG0lG0kMSvM",
  moscow:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuD9gohdz3Nxh8JeUJcxEHTUqzLrcur8tygd6Yi6YH8Zw-LL3tYv3mswn2lq1kqTAcqCq2ezkiDzIK44yMvrSfphosBi3np9wMvtIvOP9cKBq1QmULC2ylNljdz0q5-5Y2rBXNLxkDte9NFnfdJPFdJL-xOLk7Vhk9QsrrjsSknKJ-9CQV0o0JuQEMnh9v7xXL5TJjYBwPGtwgTpBV9WrCFc7vDocfxH_l9ksI0RdDpln4gSxpCwGhUqprUdSJKT1Ow7ouihJYb_1GM",
  spotlight:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuBSZs-jNomzpPJvWR1C1DKcbTXC8CcpgPUnhKKD595iWaNEDhqY-MPVD5X4kZj-ISBuDt5kGXLIKtaWsPM3I576kJ5uc7FS9yqrnpHNjNoLJb5B1QbGvYG6I7N9f5BKSg_-MZ9u9O0eBhAQNBxR_ZVbKJ2x0k5VLcVo6jFv9FeuomBPnbKTYzIL8ZFuU1gDRRTrfEshFPiR665RrSBJSbRRfcg4hPZ4nG3Wgo9lKKsoPJ8MXWqlHzV-gEibIyCwBfi4N4bUso4xKuo",
  concierge:
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAfL86XWa9ICEuFfXwHcrneiudPZEkTDB51KRizd6aLR2pAxC84N8i-xWoZ4R2aj7a3bCxuIjWo5iEqRvGy-KZp6e2Rz-HdvhzyvlFvvxvImUN5nheoX97hXQbAlJyLA2LkaQW_szJM30t8C5Y8lrXopKnvQylPKdMBbaRlEV1E3z4dLlJbHQvaA7B6OufPteEgWI6H7Kx_1yPDa2KgBKfnFy-eg7B8E_5T7-XOc8n9RPla4bqNsYUkDADvqjvDcsSnsl4kG1PdClk",
};

const content = {
  ru: {
    badge: "Эксклюзивный портфель",
    titleTop: "Sovereign Living.",
    titleAccent: "Ethical Investment.",
    description:
      "Откройте для себя кураторскую подборку элитной недвижимости в Дубае и регионе СНГ. Наш портфель объединяет архитектурную ценность и шариат-соответствующие инвестиционные стандарты Amanat.",
    filters: {
      region: "Регион",
      regionOptions: ["Все локации", "Dubai, UAE", "Moscow, Russia", "Bishkek, Kyrgyzstan"],
      propertyType: "Тип объекта",
      propertyOptions: ["Любой тип", "Penthouse", "Villa Cluster", "Commercial Tower"],
      roi: "Целевой ROI",
      roiOptions: ["5% - 8% в год", "8% - 12% в год", "Высокий рост (12%+)"],
      advanced: "Расширенные фильтры",
    },
    properties: [
      {
        key: "dubai",
        propertyType: "Penthouse",
        roiBand: "5% - 8% в год",
        city: "Dubai, UAE",
        certified: "Halal Certified",
        startingFrom: "От",
        price: "$2,450,000",
        title: "The Burj Vista Penthouse",
        roi: "9.2%",
        roiLabel: "Est. Annual ROI",
        description:
          "Ультра-роскошная резиденция с 4 спальнями, панорамой Downtown skyline и прямым доступом к fountain district.",
        beds: "4",
        baths: "5",
        area: "4,200 sqft",
      },
      {
        key: "bishkek",
        propertyType: "Любой тип",
        roiBand: "8% - 12% в год",
        city: "Bishkek, KG",
        startingFrom: "От",
        price: "$380,000",
        title: "Ala-Too Alpine Residences",
        roi: "11.5%",
        roiLabel: "Est. Annual ROI",
        description:
          "Премиальный жилой комплекс у подножия Тянь-Шаня, где чистый воздух сочетается с современной архитектурой и приватностью.",
        beds: "2",
        baths: "2",
        area: "1,150 sqft",
      },
      {
        key: "moscow",
        propertyType: "Commercial Tower",
        roiBand: "5% - 8% в год",
        city: "Moscow, RU",
        startingFrom: "От",
        price: "$1,120,000",
        title: "Federation Tower Executive",
        roi: "7.8%",
        roiLabel: "Est. Annual ROI",
        description:
          "Премиальные бизнес-апартаменты в сердце Moscow City, рассчитанные на инвесторов и руководителей высокого уровня.",
        beds: "3",
        baths: "3",
        area: "2,800 sqft",
      },
      {
        key: "dubai",
        propertyType: "Villa Cluster",
        roiBand: "8% - 12% в год",
        city: "Dubai, UAE",
        certified: "Halal Certified",
        startingFrom: "От",
        price: "$3,900,000",
        title: "Palm Crescent Signature Villa",
        roi: "8.9%",
        roiLabel: "Est. Annual ROI",
        description:
          "Приватная beachfront-вилла с высокой архитектурной ценностью и структурой владения, рассчитанной на семейный капитал.",
        beds: "5",
        baths: "6",
        area: "5,600 sqft",
      },
      {
        key: "bishkek",
        propertyType: "Penthouse",
        roiBand: "Высокий рост (12%+)",
        city: "Bishkek, KG",
        startingFrom: "От",
        price: "$520,000",
        title: "Skyline Ala-Too Penthouse",
        roi: "12.4%",
        roiLabel: "Est. Annual ROI",
        description:
          "Пентхаус с видами на горы и city core, ориентированный на long-term appreciation и премиальный rental demand.",
        beds: "3",
        baths: "3",
        area: "1,820 sqft",
      },
    ],
    spotlight: {
      label: "Investment Spotlight",
      location: "Palm Jumeirah Signature",
      title: "The Ocean Crest Villa",
      text:
        "Архитектурный шедевр на Palm Jumeirah. Полностью меблирован bespoke-коллекцией из Италии, с приватным пляжем и 25-метровым бассейном. Актив специально структурирован для долгосрочного шариат-соответствующего сохранения капитала.",
      valuation: "$12.5M",
      valuationLabel: "Valuation",
      yield: "6.5% + Capital Appr.",
      yieldLabel: "Portfolio Yield",
      cta: "Запросить приватный просмотр",
    },
    outlook: {
      title: "Рыночный обзор 2024",
      quote:
        "Стабильность рынков СНГ и динамичный рост Дубая создают уникальный коридор для этичного капитала. В этом году мы ожидаем рост спроса на Halal-certified residential assets на 12%.",
      stat1: "+14.2%",
      stat1Label: "Рост luxury-сектора Дубая",
      stat2: "+8.5%",
      stat2Label: "Приток в недвижимость Бишкека",
    },
    loadMore: "Загрузить больше объектов",
    showing: "Показано 5 из 42 выборочных лотов",
    concierge: {
      title: "Не нашли то, что искали?",
      text:
        "Наш private concierge работает с off-market объектами и создаёт кастомные инвестиционные структуры для private family offices и суверенных капиталов.",
      placeholder: "Email Address",
      button: "Запросить приватный доступ",
      quote:
        "Прозрачность Amanat в оценке недвижимости стала золотым стандартом для шариат-соответствующих инвестиций в property.",
      author: "Director, Dubai Ethics Board",
    },
    status: {
      mapMode: "Режим карты показывает объекты более плотным списком, сохраняя ту же выборку портфеля.",
      gridMode: "Режим сетки делает визуальное сравнение объектов более наглядным.",
      allLoaded: "Все объекты загружены",
      sending: "Отправка запроса...",
      success: "Запрос принят. Куратор свяжется с вами в ближайшее время.",
    },
  },
  en: {
    badge: "Exclusive Portfolio",
    titleTop: "Sovereign Living.",
    titleAccent: "Ethical Investment.",
    description:
      "Discover a curated selection of elite properties across Dubai and the CIS region. Our portfolio combines architectural brilliance with Amanat's Sharia-compliant investment standards.",
    filters: {
      region: "Region",
      regionOptions: ["All Locations", "Dubai, UAE", "Moscow, Russia", "Bishkek, Kyrgyzstan"],
      propertyType: "Property Type",
      propertyOptions: ["Any Type", "Penthouse", "Villa Cluster", "Commercial Tower"],
      roi: "Target ROI",
      roiOptions: ["5% - 8% Yearly", "8% - 12% Yearly", "High Growth (12%+)"],
      advanced: "Advanced Filters",
    },
    properties: [
      {
        key: "dubai",
        propertyType: "Penthouse",
        roiBand: "5% - 8% Yearly",
        city: "Dubai, UAE",
        certified: "Halal Certified",
        startingFrom: "Starting From",
        price: "$2,450,000",
        title: "The Burj Vista Penthouse",
        roi: "9.2%",
        roiLabel: "Est. Annual ROI",
        description:
          "Ultra-luxury 4-bedroom residence with panoramic views of the Downtown skyline and direct fountain access.",
        beds: "4",
        baths: "5",
        area: "4,200 sqft",
      },
      {
        key: "bishkek",
        propertyType: "Any Type",
        roiBand: "8% - 12% Yearly",
        city: "Bishkek, KG",
        startingFrom: "Starting From",
        price: "$380,000",
        title: "Ala-Too Alpine Residences",
        roi: "11.5%",
        roiLabel: "Est. Annual ROI",
        description:
          "Prime residential development at the foothills of the Tien Shan mountains, offering pure air and modern luxury.",
        beds: "2",
        baths: "2",
        area: "1,150 sqft",
      },
      {
        key: "moscow",
        propertyType: "Commercial Tower",
        roiBand: "5% - 8% Yearly",
        city: "Moscow, RU",
        startingFrom: "Starting From",
        price: "$1,120,000",
        title: "Federation Tower Executive",
        roi: "7.8%",
        roiLabel: "Est. Annual ROI",
        description:
          "Premier business apartments in the heart of Moscow City district, tailored for high-profile executives and investors.",
        beds: "3",
        baths: "3",
        area: "2,800 sqft",
      },
      {
        key: "dubai",
        propertyType: "Villa Cluster",
        roiBand: "8% - 12% Yearly",
        city: "Dubai, UAE",
        certified: "Halal Certified",
        startingFrom: "Starting From",
        price: "$3,900,000",
        title: "Palm Crescent Signature Villa",
        roi: "8.9%",
        roiLabel: "Est. Annual ROI",
        description:
          "A private beachfront villa with strong architectural value and an ownership structure tailored for family wealth preservation.",
        beds: "5",
        baths: "6",
        area: "5,600 sqft",
      },
      {
        key: "bishkek",
        propertyType: "Penthouse",
        roiBand: "High Growth (12%+)",
        city: "Bishkek, KG",
        startingFrom: "Starting From",
        price: "$520,000",
        title: "Skyline Ala-Too Penthouse",
        roi: "12.4%",
        roiLabel: "Est. Annual ROI",
        description:
          "A penthouse with mountain and skyline views, positioned for long-term appreciation and premium rental demand.",
        beds: "3",
        baths: "3",
        area: "1,820 sqft",
      },
    ],
    spotlight: {
      label: "Investment Spotlight",
      location: "Palm Jumeirah Signature",
      title: "The Ocean Crest Villa",
      text:
        "An architectural masterpiece on the Palm Jumeirah. Fully furnished with bespoke Italian pieces, featuring a private beach and 25-meter lap pool. This asset is specifically structured for long-term Sharia-compliant wealth preservation.",
      valuation: "$12.5M",
      valuationLabel: "Valuation",
      yield: "6.5% + Capital Appr.",
      yieldLabel: "Portfolio Yield",
      cta: "Request Private Viewing",
    },
    outlook: {
      title: "Market Outlook 2024",
      quote:
        "The intersection of stability in the CIS and the dynamic growth of Dubai creates a unique corridor for ethical capital. We anticipate a 12% rise in demand for Halal-certified residential assets this year.",
      stat1: "+14.2%",
      stat1Label: "Dubai Luxury Sector Growth",
      stat2: "+8.5%",
      stat2Label: "Bishkek Real Estate Inflow",
    },
    loadMore: "Load More Portfolio Assets",
    showing: "Displaying 5 of 42 selective listings",
    concierge: {
      title: "Can't find what you're looking for?",
      text:
        "Our private concierge handles off-market listings and customized investment structures for sovereign wealth and private family offices.",
      placeholder: "Email Address",
      button: "Inquire for Private Access",
      quote:
        "Amanat's transparency in real estate valuation is the gold standard for Sharia-compliant property investment.",
      author: "Director, Dubai Ethics Board",
    },
    status: {
      mapMode: "Map mode groups assets into a denser vertical list while keeping the same portfolio data.",
      gridMode: "Grid mode highlights visual comparison across the current filtered portfolio.",
      allLoaded: "All listings loaded",
      sending: "Sending request...",
      success: "Request received. A curator will reach out shortly.",
    },
  },
};

function FilterSelect({ label, options }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-outline)]">
        {label}
      </label>
      <div className="relative min-w-[140px]">
        <select className="w-full appearance-none border-0 border-b border-[rgba(197,198,210,0.3)] bg-transparent py-1 pr-6 pl-0 font-semibold text-[var(--color-primary)] focus:border-[var(--color-secondary)] focus:ring-0">
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        <ChevronDown
          size={16}
          className="pointer-events-none absolute right-0 top-1/2 -translate-y-1/2 text-[var(--color-outline)]"
        />
      </div>
    </div>
  );
}

function PropertyCard({ property, index }) {
  return (
    <Reveal delay={index * 90}>
      <article className="group overflow-hidden bg-white transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,17,58,0.06)]">
        <div className="relative aspect-[16/10] overflow-hidden">
          <img
            className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
            src={propertyImages[property.key]}
            alt={property.title}
          />
          <div className="absolute left-4 top-4 flex flex-col gap-2">
            <span className="bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[var(--color-primary)] shadow-sm backdrop-blur-sm">
              {property.city}
            </span>
            {property.certified ? (
              <span className="flex items-center gap-2 bg-[var(--color-secondary-fixed-dim)]/55 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#574500] shadow-sm">
                <Verified size={14} />
                {property.certified}
              </span>
            ) : null}
          </div>
          <div className="absolute bottom-4 right-4 bg-[var(--color-primary)] p-3 text-white shadow-lg">
            <div className="text-[10px] font-bold uppercase tracking-tight opacity-70">
              {property.startingFrom}
            </div>
            <div className="font-display text-lg font-bold text-[var(--color-secondary-fixed-dim)]">
              {property.price}
            </div>
          </div>
        </div>
        <div className="p-8">
          <div className="mb-4 flex items-start justify-between gap-4">
            <h3 className="text-xl font-bold leading-tight text-[var(--color-primary)] transition-colors group-hover:text-[var(--color-secondary)]">
              {property.title}
            </h3>
            <div className="text-right">
              <div className="text-lg font-bold text-[var(--color-secondary)]">{property.roi}</div>
              <div className="text-[10px] font-bold uppercase text-[var(--color-outline)]">
                {property.roiLabel}
              </div>
            </div>
          </div>
          <p className="mb-6 text-sm text-[var(--color-muted)]">{property.description}</p>
          <div className="flex items-center justify-between border-t border-[rgba(197,198,210,0.1)] pt-6">
            <div className="flex gap-4 text-xs font-semibold text-[var(--color-outline)]">
              <span className="flex items-center gap-1">
                <BedDouble size={14} /> {property.beds}
              </span>
              <span className="flex items-center gap-1">
                <Bath size={14} /> {property.baths}
              </span>
              <span className="flex items-center gap-1">
                <Square size={14} /> {property.area}
              </span>
            </div>
            <Link to="/contact" className="text-[var(--color-primary)] transition-colors hover:text-[var(--color-secondary)]">
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

function RealEstateEditorialPage() {
  const { i18n } = useTranslation();
  const c = content[i18n.language] ?? content.en;
  const { status, submit } = useMockSubmit();
  const [region, setRegion] = useState(c.filters.regionOptions[0]);
  const [propertyType, setPropertyType] = useState(c.filters.propertyOptions[0]);
  const [roiBand, setRoiBand] = useState(c.filters.roiOptions[0]);
  const [showAdvanced, setShowAdvanced] = useState(false);
  const [viewMode, setViewMode] = useState("grid");
  const [visibleCount, setVisibleCount] = useState(3);

  const filteredProperties = useMemo(() => {
    return c.properties.filter((property) => {
      const matchesRegion = region === c.filters.regionOptions[0] || property.city === region;
      const matchesType = propertyType === c.filters.propertyOptions[0] || property.propertyType === propertyType;
      const matchesRoi = roiBand === c.filters.roiOptions[0] || property.roiBand === roiBand;
      return matchesRegion && matchesType && matchesRoi;
    });
  }, [c, propertyType, region, roiBand]);

  const visibleProperties = filteredProperties.slice(0, visibleCount);
  const canLoadMore = visibleCount < filteredProperties.length;

  return (
    <>
      <main className="mx-auto max-w-7xl px-4 pb-24 pt-32 sm:px-6 lg:px-8">
        <header className="mb-16 max-w-3xl">
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-[var(--color-secondary-fixed-dim)] px-3 py-1 text-[10px] font-bold uppercase tracking-[0.15em] text-[#241a00]">
              {c.badge}
            </span>
          </div>
          <Reveal>
            <h1 className="mb-8 font-display text-[3.5rem] font-extrabold leading-[1.1] tracking-tight text-[var(--color-primary)]">
              {c.titleTop}
              <br />
              <span className="text-[var(--color-secondary)]">{c.titleAccent}</span>
            </h1>
            <p className="text-lg leading-relaxed text-[var(--color-muted)]">{c.description}</p>
          </Reveal>
        </header>

        <section className="sticky top-24 z-40 mb-12">
          <Reveal className="flex flex-wrap items-center justify-between gap-6 rounded-lg bg-white p-6 shadow-sm">
            <div className="flex flex-wrap items-center gap-8">
              <div onChange={(event) => setRegion(event.target.value)}>
                <FilterSelect label={c.filters.region} options={c.filters.regionOptions} />
              </div>
              <div onChange={(event) => setPropertyType(event.target.value)}>
                <FilterSelect label={c.filters.propertyType} options={c.filters.propertyOptions} />
              </div>
              <div onChange={(event) => setRoiBand(event.target.value)}>
                <FilterSelect label={c.filters.roi} options={c.filters.roiOptions} />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                type="button"
                onClick={() => setShowAdvanced((value) => !value)}
                className="flex items-center gap-2 font-semibold text-[var(--color-primary)] transition-colors hover:text-[var(--color-secondary)]"
              >
                <SlidersHorizontal size={20} />
                <span className="text-sm">{c.filters.advanced}</span>
              </button>
              <div className="h-8 w-px bg-[rgba(197,198,210,0.3)]" />
              <div className="flex rounded-lg bg-[var(--color-surface-low)] p-1">
                <button
                  type="button"
                  onClick={() => setViewMode("grid")}
                  className={viewMode === "grid" ? "rounded-md bg-white p-2 text-[var(--color-primary)] shadow-sm" : "p-2 text-[var(--color-outline)] transition-colors hover:text-[var(--color-primary)]"}
                >
                  <Building2 size={20} />
                </button>
                <button
                  type="button"
                  onClick={() => setViewMode("map")}
                  className={viewMode === "map" ? "rounded-md bg-white p-2 text-[var(--color-primary)] shadow-sm" : "p-2 text-[var(--color-outline)] transition-colors hover:text-[var(--color-primary)]"}
                >
                  <Map size={20} />
                </button>
              </div>
            </div>
          </Reveal>
          {showAdvanced ? (
            <div className="mt-4 rounded-lg bg-white/90 p-4 text-sm text-[var(--color-muted)] shadow-sm">
              {viewMode === "map" ? c.status.mapMode : c.status.gridMode}
            </div>
          ) : null}
        </section>

        <div className={viewMode === "map" ? "grid grid-cols-1 gap-10" : "grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3"}>
          {visibleProperties.map((property, index) => (
            <PropertyCard key={property.title} property={property} index={index} />
          ))}

          <Reveal className="group flex flex-col overflow-hidden bg-white transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,17,58,0.06)] md:flex-row lg:col-span-2">
            <div className="relative h-[300px] w-full overflow-hidden md:h-auto md:w-1/2">
              <img
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                src={propertyImages.spotlight}
                alt={c.spotlight.title}
              />
              <div className="absolute left-4 top-4">
                <span className="bg-[var(--color-secondary)] px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-white">
                  {c.spotlight.label}
                </span>
              </div>
            </div>
            <div className="flex-1 p-10">
              <div className="mb-2 text-sm font-bold uppercase tracking-widest text-[var(--color-secondary)]">
                {c.spotlight.location}
              </div>
              <h3 className="mb-4 font-display text-3xl font-bold leading-tight text-[var(--color-primary)]">
                {c.spotlight.title}
              </h3>
              <p className="mb-8 leading-relaxed text-[var(--color-muted)]">{c.spotlight.text}</p>
              <div className="mb-8 grid grid-cols-2 gap-8">
                <div>
                  <div className="font-display text-2xl font-bold text-[var(--color-primary)]">
                    {c.spotlight.valuation}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-outline)]">
                    {c.spotlight.valuationLabel}
                  </div>
                </div>
                <div>
                  <div className="font-display text-2xl font-bold text-[var(--color-secondary)]">
                    {c.spotlight.yield}
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-outline)]">
                    {c.spotlight.yieldLabel}
                  </div>
                </div>
              </div>
              <Link to="/contact">
                <Button className="w-fit rounded-lg px-8 py-3 font-semibold">
                  {c.spotlight.cta}
                  <ChevronRight size={16} />
                </Button>
              </Link>
            </div>
          </Reveal>

          <Reveal>
            <aside className="flex h-full flex-col justify-between border-l-4 border-[var(--color-secondary)] bg-[var(--color-primary)] p-10">
              <div>
                <TrendingUp className="mb-6 text-[var(--color-secondary-fixed-dim)]" size={34} />
                <h3 className="mb-4 text-2xl font-bold text-white">{c.outlook.title}</h3>
                <p className="mb-8 text-sm italic leading-relaxed text-[#758dd5]">{c.outlook.quote}</p>
              </div>
              <div className="space-y-4">
                <div className="rounded-lg bg-[var(--color-primary-container)] p-4">
                  <div className="text-lg font-bold text-[var(--color-secondary-fixed-dim)]">{c.outlook.stat1}</div>
                  <div className="text-[10px] font-bold uppercase text-white/60">{c.outlook.stat1Label}</div>
                </div>
                <div className="rounded-lg bg-[var(--color-primary-container)] p-4">
                  <div className="text-lg font-bold text-[var(--color-secondary-fixed-dim)]">{c.outlook.stat2}</div>
                  <div className="text-[10px] font-bold uppercase text-white/60">{c.outlook.stat2Label}</div>
                </div>
              </div>
            </aside>
          </Reveal>
        </div>

        <div className="mt-20 flex flex-col items-center gap-6">
          <button
            type="button"
            onClick={() => setVisibleCount((count) => Math.min(count + 3, filteredProperties.length))}
            disabled={!canLoadMore}
            className="group flex items-center gap-3 border border-[rgba(197,198,210,0.3)] px-10 py-4 font-bold text-[var(--color-primary)] transition-all hover:bg-[var(--color-surface-low)] disabled:cursor-not-allowed disabled:opacity-50"
          >
            {canLoadMore ? c.loadMore : c.status.allLoaded}
            <ChevronDown size={18} className="transition-transform group-hover:translate-y-1" />
          </button>
          <p className="text-sm text-[var(--color-outline)]">{c.showing}</p>
        </div>
      </main>

      <section className="bg-[var(--color-surface-low)] py-24">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <Reveal>
            <h2 className="mb-6 text-4xl font-extrabold leading-tight text-[var(--color-primary)]">
              {c.concierge.title.includes("<br")
                ? c.concierge.title
                : c.concierge.title}
            </h2>
            <p className="mb-10 max-w-md text-lg text-[var(--color-muted)]">{c.concierge.text}</p>
            <form onSubmit={submit} className="flex max-w-md flex-col gap-4">
              <input
                type="email"
                required
                placeholder={c.concierge.placeholder}
                className="border-0 border-b-2 border-[rgba(197,198,210,0.3)] bg-white/0 px-0 py-3 text-[var(--color-primary)] placeholder:text-[rgba(117,118,130,0.6)] transition-all focus:border-[var(--color-secondary)] focus:ring-0"
              />
              <button type="submit" className="mt-4 rounded-lg bg-[var(--color-secondary)] py-4 text-sm font-bold uppercase tracking-widest text-white transition-colors hover:bg-[rgba(115,92,0,0.9)]">
                {c.concierge.button}
              </button>
              <p className="text-sm text-[var(--color-outline)]">
                {status === "loading" ? c.status.sending : status === "success" ? c.status.success : ""}
              </p>
            </form>
          </Reveal>

          <Reveal delay={120} className="relative">
            <img
              className="aspect-video w-full object-cover shadow-2xl grayscale transition-all duration-1000 hover:grayscale-0"
              src={propertyImages.concierge}
              alt="Architectural close-up"
            />
            <div className="absolute -bottom-8 -left-8 hidden max-w-xs bg-white p-8 shadow-xl md:block">
              <p className="mb-4 font-bold italic text-[var(--color-primary)]">{c.concierge.quote}</p>
              <div className="flex items-center gap-3">
                <div className="h-px w-10 bg-[var(--color-secondary)]" />
                <span className="text-[10px] font-bold uppercase text-[var(--color-outline)]">
                  {c.concierge.author}
                </span>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

export default RealEstateEditorialPage;
