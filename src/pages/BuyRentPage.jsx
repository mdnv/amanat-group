import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, SlidersHorizontal, ChevronLeft, ChevronRight, BedDouble, Bath, Square, ArrowRight, MapPin, TrendingUp } from 'lucide-react';
import Reveal from '../components/Reveal';

// ─── Data ──────────────────────────────────────────────────────────────────────

const PROPERTIES = [
  {
    id: 1,
    title: 'Penthouse in Victory Square',
    location: 'Bishkek City Center',
    price: '$1,200,000',
    type: 'buy',
    category: 'Penthouse',
    beds: 4,
    baths: 3,
    area: '3,200 sqft',
    tag: 'Featured',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSZs-jNomzpPJvWR1C1DKcbTXC8CcpgPUnhKKD595iWaNEDhqY-MPVD5X4kZj-ISBuDt5kGXLIKtaWsPM3I576kJ5uc7FS9yqrnpHNjNoJJb5B1QbGvYG6I7N9f5BKSg_-MZ9u9O0eBhAQNBxR_ZVbKJ2x0k5VLcVo6jFv9FeuomBPnbKTYzIL8ZFuU1gDRRTrfEshFPiR665RrSBJSbRRfcg4hPZ4nG3Wgo9lKKsoPJ8MXWqlHzV-gEibIyCwBfi4N4bUso4xKuo',
  },
  {
    id: 2,
    title: 'Issyk-Kul Lakefront Estate',
    location: 'Cholpon-Ata Shoreline',
    price: '$2,800,000',
    type: 'buy',
    category: 'Villa',
    beds: 6,
    baths: 5,
    area: '5,600 sqft',
    tag: 'New',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDfNSrg-zCHgvlffB75DkeLOnWwTF0EN6dHYbo-gyDtBLNN-ImC4hpRDliPJS5Tr7qNNKn7a2EvdnjoiheCPT9LKTyGAqpIkIzw6CdPQpi2fWa6nWC_qhskmkDMbkjwT_QtUpLFhZen9jPYUzeFzDAncUO40PATaSYjRT3XedqDfsINbgFIicnWDv1rwx-TC-aIYaCh4b0PISAewf7J_wMI69A6fq664ck_XgZ7vZuCsgC6IkhwfXSRpr0KBA-5hsLqG0lG0kMSvM',
  },
  {
    id: 3,
    title: 'Skyline Business Plaza',
    location: 'Southern District, Bishkek',
    price: '$4,200/mo',
    type: 'rent',
    category: 'Commercial',
    beds: 0,
    baths: 2,
    area: '8,400 sqft',
    tag: 'Hot Deal',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD9gohdz3Nxh8JeUJcxEHTUqzLrcur8tygd6Yi6YH8Zw-LL3tYv3mswn2lq1kqTAcqCq2ezkiDzIK44yMvrSfphosBi3np9wMvtIvOP9cKBq1QmULC2ylNljdz0q5-5Y2rBXNLxkDte9NFnfdJPFdJL-xOLk7Vhk9QsrrjsSknKJ-9CQV0o0JuQEMnh9v7xXL5TJjYBwPGtwgTpBV9WrCFc7vDocfxH_l9ksI0RdDpln4gSxpCwGhUqprUdSJKT1Ow7ouihJYb_1GM',
  },
  {
    id: 4,
    title: 'Ala-Too Alpine Residences',
    location: 'Bishkek Foothills',
    price: '$380,000',
    type: 'buy',
    category: 'Apartment',
    beds: 2,
    baths: 2,
    area: '1,150 sqft',
    tag: 'Investment',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfL86XWa9ICEuFfXwHcrneiudPZEkTDB51KRizd6aLR2pAxC84N8i-xWoZ4R2aj7a3bCxuIjWo5iEqRvGy-KZp6e2Rz-HdvhzyvlFvvxvImUN5nheoX97hXQbAlJyLA2LkaQW_szJM30t8C5Y8lrXopKnvQylPKdMBbaRlEV1E3z4dLlJbHQvaA7B6OufPteEgWI6H7Kx_1yPDa2KgBKfnFy-eg7B8E_5T7-XOc8n9RPla4bqNsYUkDADvqjvDcsSnsl4kG1PdClk',
  },
  {
    id: 5,
    title: 'Diplomat Quarter Penthouse',
    location: 'Bishkek, Diplomatic Zone',
    price: '$520,000',
    type: 'buy',
    category: 'Penthouse',
    beds: 3,
    baths: 3,
    area: '1,820 sqft',
    tag: 'Premium',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzPSiE0S33d0c95vr1x8J2kNiRtrs2xszHqW9QLsI0HaFEFLXNCtTUkq_IrWc53NhS159f9QY-aqJGHHZprg76JpBSdySNlj-F2oStM6PWBFm8fr-V-g8bXmH_3Syr7ZgEseG7VJ8Hoj229zoosbkr0ySSrJ1x9xsNEXFI6dsVxwXDv0Ai4OPW3W3i8mg4X8XIInzSyyIJZB9K0bMkFl4drjKvOV_OLtbUNGU2SodiFRanjAK5DB2xZNGgwAe8gq9b2H9kavG4vVY',
  },
  {
    id: 6,
    title: 'Corporate Serviced Apartment',
    location: 'City Center, Bishkek',
    price: '$1,800/mo',
    type: 'rent',
    category: 'Apartment',
    beds: 1,
    baths: 1,
    area: '750 sqft',
    tag: 'Furnished',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBSZs-jNomzpPJvWR1C1DKcbTXC8CcpgPUnhKKD595iWaNEDhqY-MPVD5X4kZj-ISBuDt5kGXLIKtaWsPM3I576kJ5uc7FS9yqrnpHNjNoJJb5B1QbGvYG6I7N9f5BKSg_-MZ9u9O0eBhAQNBxR_ZVbKJ2x0k5VLcVo6jFv9FeuomBPnbKTYzIL8ZFuU1gDRRTrfEshFPiR665RrSBJSbRRfcg4hPZ4nG3Wgo9lKKsoPJ8MXWqlHzV-gEibIyCwBfi4N4bUso4xKuo',
  },
];

const COLLECTIONS = [
  {
    title: 'Investment Opportunities',
    desc: 'High-yield commercial and residential projects in growing districts.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDfNSrg-zCHgvlffB75DkeLOnWwTF0EN6dHYbo-gyDtBLNN-ImC4hpRDliPJS5Tr7qNNKn7a2EvdnjoiheCPT9LKTyGAqpIkIzw6CdPQpi2fWa6nWC_qhskmkDMbkjwT_QtUpLFhZen9jPYUzeFzDAncUO40PATaSYjRT3XedqDfsINbgFIicnWDv1rwx-TC-aIYaCh4b0PISAewf7J_wMI69A6fq664ck_XgZ7vZuCsgC6IkhwfXSRpr0KBA-5hsLqG0lG0kMSvM',
  },
  {
    title: 'Luxury Rentals',
    desc: 'Short-term and corporate stays in the nation\'s most prestigious villas.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAfL86XWa9ICEuFfXwHcrneiudPZEkTDB51KRizd6aLR2pAxC84N8i-xWoZ4R2aj7a3bCxuIjWo5iEqRvGy-KZp6e2Rz-HdvhzyvlFvvxvImUN5nheoX97hXQbAlJyLA2LkaQW_szJM30t8C5Y8lrXopKnvQylPKdMBbaRlEV1E3z4dLlJbHQvaA7B6OufPteEgWI6H7Kx_1yPDa2KgBKfnFy-eg7B8E_5T7-XOc8n9RPla4bqNsYUkDADvqjvDcsSnsl4kG1PdClk',
  },
  {
    title: 'New Developments',
    desc: 'Off-plan properties with modern amenities and sustainable design.',
    img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzPSiE0S33d0c95vr1x8J2kNiRtrs2xszHqW9QLsI0HaFEFLXNCtTUkq_IrWc53NhS159f9QY-aqJGHHZprg76JpBSdySNlj-F2oStM6PWBFm8fr-V-g8bXmH_3Syr7ZgEseG7VJ8Hoj229zoosbkr0ySSrJ1x9xsNEXFI6dsVxwXDv0Ai4OPW3W3i8mg4X8XIInzSyyIJZB9K0bMkFl4drjKvOV_OLtbUNGU2SodiFRanjAK5DB2xZNGgwAe8gq9b2H9kavG4vVY',
  },
];

// ─── Property Card ──────────────────────────────────────────────────────────────

function PropertyCard({ property, delay = 0 }) {
  return (
    <Reveal delay={delay}>
      <article className="group bg-white overflow-hidden rounded-xl shadow-sm hover:shadow-xl transition-all duration-500">
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={property.img}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-107 transition-transform duration-700"
          />
          <span className="absolute top-4 left-4 bg-[#e9c349] text-[#3a2800] text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-sm">
            {property.tag}
          </span>
        </div>
        <div className="p-6">
          <div className="flex items-start justify-between mb-2">
            <div>
              <h3 className="font-bold text-lg text-[var(--color-primary)] group-hover:text-[var(--color-secondary)] transition-colors leading-tight">
                {property.title}
              </h3>
              <p className="text-sm text-[var(--color-outline)] flex items-center gap-1 mt-1">
                <MapPin size={12} /> {property.location}
              </p>
            </div>
            <span className="text-lg font-black text-[var(--color-primary)] whitespace-nowrap ml-4">{property.price}</span>
          </div>
          <div className="flex items-center justify-between pt-4 border-t border-[rgba(0,52,43,0.08)] mt-4">
            <div className="flex gap-4 text-xs font-semibold text-[var(--color-outline)]">
              {property.beds > 0 && (
                <span className="flex items-center gap-1"><BedDouble size={13} /> {property.beds}</span>
              )}
              <span className="flex items-center gap-1"><Bath size={13} /> {property.baths}</span>
              <span className="flex items-center gap-1"><Square size={13} /> {property.area}</span>
            </div>
            <Link to="/contact" className="text-[var(--color-primary)] hover:text-[var(--color-secondary)] transition-colors">
              <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </article>
    </Reveal>
  );
}

// ─── Main Page ──────────────────────────────────────────────────────────────────

export default function BuyRentPage() {
  const [tab, setTab] = useState('buy'); // 'buy' | 'rent'
  const [category, setCategory] = useState('All');
  const [location, setLocation] = useState('All');
  const [priceRange, setPriceRange] = useState('Any');
  const [sortBy, setSortBy] = useState('Newest');
  const [collectionIdx, setCollectionIdx] = useState(0);
  const [formStatus, setFormStatus] = useState('idle');
  const [formData, setFormData] = useState({ name: '', email: '', inquiry: 'Buying' });

  const filtered = PROPERTIES.filter((p) => {
    const matchTab = p.type === tab;
    const matchCat = category === 'All' || p.category === category;
    const matchLoc = location === 'All' || p.location.includes(location);
    return matchTab && matchCat && matchLoc;
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormStatus('loading');
    setTimeout(() => setFormStatus('success'), 1500);
  };

  const prevCollection = () => setCollectionIdx((i) => (i - 1 + COLLECTIONS.length) % COLLECTIONS.length);
  const nextCollection = () => setCollectionIdx((i) => (i + 1) % COLLECTIONS.length);

  // rotate 3 collections from current index
  const visibleCollections = [0, 1, 2].map((offset) => COLLECTIONS[(collectionIdx + offset) % COLLECTIONS.length]);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden">
        <img
          src="/home/img4.jpeg"
          alt="Kyrgyzstan mountain panorama"
          className="absolute inset-0 w-full h-full object-cover scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#00342b]/70 via-[#00342b]/50 to-[#00342b]/80" />

        <div className="relative z-10 text-center px-4 w-full max-w-5xl mx-auto">
          <Reveal>
            <p className="text-[#e9c349] font-bold uppercase tracking-[0.25em] text-sm mb-4">Showing 124 premium estates in Kyrgyzstan</p>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4 leading-[1.05]">
              Find Your<br /><span className="text-[#e9c349]">Perfect Property</span>
            </h1>
            <p className="text-white/70 text-lg mb-10">Premium estates, curated for exceptional living across Kyrgyzstan.</p>
          </Reveal>

          {/* Search Widget */}
          <Reveal delay={120}>
            <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-3xl mx-auto">
              {/* Tabs */}
              <div className="flex gap-2 mb-6">
                {['buy', 'rent'].map((t) => (
                  <button
                    key={t}
                    onClick={() => setTab(t)}
                    className={`flex-1 py-2.5 rounded-lg font-bold text-sm uppercase tracking-wider transition-all ${
                      tab === t
                        ? 'bg-[var(--color-primary)] text-white shadow-sm'
                        : 'bg-[var(--color-surface-low)] text-[var(--color-outline)] hover:text-[var(--color-primary)]'
                    }`}
                  >
                    {t === 'buy' ? 'Buy' : 'Rent'}
                  </button>
                ))}
              </div>

              {/* Filters row */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                {[
                  { label: 'Property Type', value: category, setter: setCategory, opts: ['All', 'Apartment', 'Villa', 'Penthouse', 'Commercial'] },
                  { label: 'Location', value: location, setter: setLocation, opts: ['All', 'Bishkek', 'Cholpon-Ata', 'Osh'] },
                  { label: 'Price Range', value: priceRange, setter: setPriceRange, opts: ['Any', 'Under $500K', '$500K–$1M', '$1M+'] },
                ].map(({ label, value, setter, opts }) => (
                  <div key={label} className="flex flex-col gap-1">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-outline)]">{label}</label>
                    <select
                      value={value}
                      onChange={(e) => setter(e.target.value)}
                      className="border-0 border-b-2 border-[rgba(0,52,43,0.15)] bg-transparent py-1.5 font-semibold text-[var(--color-primary)] focus:border-[var(--color-primary)] focus:ring-0 text-sm"
                    >
                      {opts.map((o) => <option key={o}>{o}</option>)}
                    </select>
                  </div>
                ))}
              </div>

              <button className="w-full bg-[var(--color-primary)] hover:bg-[var(--color-primary-container)] text-white font-bold py-3.5 rounded-lg flex items-center justify-center gap-2 transition-colors">
                <Search size={18} /> Find Property
              </button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Listings ─────────────────────────────────────────────────────────── */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <p className="text-[var(--color-outline)] text-sm mb-1">
              {filtered.length} {tab === 'rent' ? 'rental' : 'purchase'} properties available
            </p>
            <h2 className="text-3xl font-black text-[var(--color-primary)] tracking-tight">Available Listings</h2>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-sm font-semibold text-[var(--color-primary)] border border-[rgba(0,52,43,0.15)] px-4 py-2 rounded-lg hover:bg-[var(--color-surface-low)] transition-colors">
              <SlidersHorizontal size={15} /> Filters
            </button>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="border border-[rgba(0,52,43,0.15)] rounded-lg px-4 py-2 text-sm font-semibold text-[var(--color-primary)] bg-white focus:ring-0 focus:border-[var(--color-primary)]"
            >
              {['Newest', 'Price: Low–High', 'Price: High–Low'].map((o) => <option key={o}>{o}</option>)}
            </select>
          </div>
        </div>

        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((property, i) => (
              <PropertyCard key={property.id} property={property} delay={i * 80} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 text-[var(--color-outline)]">
            <p className="text-lg font-semibold mb-2">No listings match your criteria.</p>
            <p className="text-sm">Try adjusting your filters or switching tabs.</p>
          </div>
        )}

        <div className="mt-12 text-center">
          <button className="border-2 border-[var(--color-primary)] text-[var(--color-primary)] font-bold px-10 py-4 rounded-lg hover:bg-[var(--color-primary)] hover:text-white transition-all">
            Load More Properties
          </button>
        </div>
      </section>

      {/* ── Visionary Collections ────────────────────────────────────────────── */}
      <section className="bg-[var(--color-primary)] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <Reveal>
              <p className="text-[#e9c349] text-xs font-bold uppercase tracking-[0.25em] mb-2">Curated for You</p>
              <h2 className="text-4xl font-black text-white tracking-tight">Visionary Collections</h2>
            </Reveal>
            <div className="flex gap-3">
              <button
                onClick={prevCollection}
                className="w-12 h-12 rounded-full border-2 border-white/30 text-white hover:bg-white hover:text-[var(--color-primary)] transition-all flex items-center justify-center"
              >
                <ChevronLeft size={20} />
              </button>
              <button
                onClick={nextCollection}
                className="w-12 h-12 rounded-full border-2 border-white/30 text-white hover:bg-white hover:text-[var(--color-primary)] transition-all flex items-center justify-center"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {visibleCollections.map((col, i) => (
              <Reveal key={col.title + collectionIdx} delay={i * 100}>
                <div className="group relative aspect-[3/4] overflow-hidden rounded-xl cursor-pointer">
                  <img
                    src={col.img}
                    alt={col.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <h3 className="text-xl font-black text-white mb-2">{col.title}</h3>
                    <p className="text-white/75 text-sm mb-4">{col.desc}</p>
                    <Link to="/contact" className="inline-flex items-center gap-2 text-[#e9c349] text-sm font-bold hover:gap-3 transition-all">
                      Explore <ArrowRight size={14} />
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Market Insights Banner ───────────────────────────────────────────── */}
      <section className="bg-[var(--color-surface-low)] py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <TrendingUp size={28} />, stat: '+14.2%', label: 'Bishkek Luxury Sector Growth', desc: 'YoY appreciation in premium residential zones.' },
              { icon: <TrendingUp size={28} />, stat: '124', label: 'Active Premium Listings', desc: 'Exclusive properties currently available for acquisition.' },
              { icon: <TrendingUp size={28} />, stat: '9.8%', label: 'Avg. Annual ROI', desc: 'Portfolio-weighted return for residential investors.' },
            ].map((item, i) => (
              <Reveal key={item.label} delay={i * 100}>
                <div className="bg-white rounded-xl p-8 shadow-sm">
                  <div className="text-[var(--color-primary)] mb-4">{item.icon}</div>
                  <div className="text-4xl font-black text-[var(--color-primary)] mb-1">{item.stat}</div>
                  <div className="text-xs font-bold uppercase tracking-widest text-[var(--color-secondary)] mb-2">{item.label}</div>
                  <p className="text-sm text-[var(--color-outline)]">{item.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Expert Advice ────────────────────────────────────────────────────── */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          <Reveal>
            <div className="relative">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBSZs-jNomzpPJvWR1C1DKcbTXC8CcpgPUnhKKD595iWaNEDhqY-MPVD5X4kZj-ISBuDt5kGXLIKtaWsPM3I576kJ5uc7FS9yqrnpHNjNoJJb5B1QbGvYG6I7N9f5BKSg_-MZ9u9O0eBhAQNBxR_ZVbKJ2x0k5VLcVo6jFv9FeuomBPnbKTYzIL8ZFuU1gDRRTrfEshFPiR665RrSBJSbRRfcg4hPZ4nG3Wgo9lKKsoPJ8MXWqlHzV-gEibIyCwBfi4N4bUso4xKuo"
                alt="Expert advisor"
                className="w-full aspect-[3/4] object-cover rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -right-6 bg-[var(--color-primary)] text-white p-6 rounded-xl shadow-xl max-w-[200px]">
                <div className="text-[#e9c349] font-black text-2xl">98%</div>
                <div className="text-white/80 text-xs mt-1">Client satisfaction rate</div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <p className="text-[var(--color-secondary)] text-xs font-bold uppercase tracking-[0.25em] mb-4">Personalized Service</p>
              <h2 className="text-4xl font-black text-[var(--color-primary)] tracking-tight leading-tight mb-6">
                Need Expert<br />Advice?
              </h2>
              <p className="text-[var(--color-outline)] text-lg mb-10 leading-relaxed">
                Our senior advisors provide personalized property search services and investment portfolio consulting. Let us find your perfect estate in Kyrgyzstan.
              </p>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-outline)] block mb-1">Your Name</label>
                  <input
                    type="text"
                    required
                    placeholder="Azamat Bakytov"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full border-0 border-b-2 border-[rgba(0,52,43,0.15)] bg-transparent py-2 text-[var(--color-primary)] placeholder:text-[var(--color-outline)]/50 focus:border-[var(--color-primary)] focus:ring-0 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-outline)] block mb-1">Email Address</label>
                  <input
                    type="email"
                    required
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border-0 border-b-2 border-[rgba(0,52,43,0.15)] bg-transparent py-2 text-[var(--color-primary)] placeholder:text-[var(--color-outline)]/50 focus:border-[var(--color-primary)] focus:ring-0 transition-colors"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-bold uppercase tracking-widest text-[var(--color-outline)] block mb-1">Inquiry Type</label>
                  <select
                    value={formData.inquiry}
                    onChange={(e) => setFormData({ ...formData, inquiry: e.target.value })}
                    className="w-full border-0 border-b-2 border-[rgba(0,52,43,0.15)] bg-transparent py-2 text-[var(--color-primary)] focus:border-[var(--color-primary)] focus:ring-0 transition-colors"
                  >
                    {['Buying', 'Renting', 'Investment Advisory', 'Portfolio Review'].map((o) => <option key={o}>{o}</option>)}
                  </select>
                </div>

                <button
                  type="submit"
                  disabled={formStatus === 'loading' || formStatus === 'success'}
                  className="w-full bg-[#e9c349] text-[#3a2800] font-black py-4 rounded-lg hover:bg-[#d4af30] transition-colors disabled:opacity-70 mt-2 uppercase tracking-wider text-sm"
                >
                  {formStatus === 'loading' ? 'Submitting…' : formStatus === 'success' ? '✓ Request Received!' : 'Book a Consultation'}
                </button>
              </form>
            </div>
          </Reveal>
        </div>
      </section>

    
    </>
  );
}
