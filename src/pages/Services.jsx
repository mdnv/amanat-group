import React from 'react';
import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal';
import { Users, Settings, LifeBuoy, ArrowRight } from 'lucide-react';

// Helper component for feature cards
function FeatureCard({ icon: Icon, title, description }) {
  return (
    <Reveal>
      <div className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-xl transition-shadow duration-500">
        <Icon size={48} className="text-[var(--color-primary)] mb-4" />
        <h3 className="font-bold text-lg text-[var(--color-primary)] mb-2">{title}</h3>
        <p className="text-sm text-[var(--color-outline)] leading-relaxed">{description}</p>
      </div>
    </Reveal>
  );
}

// Helper component for testimonial slides
function Testimonial({ portrait, name, role, quote }) {
  return (
    <Reveal>
      <div className="flex flex-col items-center text-center p-8 bg-white rounded-xl shadow-sm">
        <img src={portrait} alt={name} className="w-24 h-24 rounded-full object-cover mb-4" />
        <p className="text-sm italic text-[var(--color-outline)] mb-4">"{quote}"</p>
        <h4 className="font-bold text-[var(--color-primary)]">{name}</h4>
        <p className="text-[var(--color-outline)] text-xs">{role}</p>
      </div>
    </Reveal>
  );
}

export default function Services() {
  // Simple carousel state (manual for demo)
  const [testimonialIdx, setTestimonialIdx] = React.useState(0);
  const testimonials = [
    {
      portrait: '/home/img1.jpg',
      name: 'Aisha K.',
      role: 'Partner Manager',
      quote: 'The consulting team transformed our workflow – seamless and efficient.',
    },
    {
      portrait: '/home/img2.jpg',
      name: 'Bektur M.',
      role: 'CTO, KyrgyzTech',
      quote: 'Integration was fast, reliable, and beautifully documented.',
    },
  ];

  const nextTestimonial = () => setTestimonialIdx((i) => (i + 1) % testimonials.length);
  const prevTestimonial = () => setTestimonialIdx((i) => (i - 1 + testimonials.length) % testimonials.length);

  return (
    <>
      {/* ── Hero ─────────────────────────────────────────────────────────────── */}
      <section className="relative min-h-[75vh] flex items-center justify-center overflow-hidden bg-[url('/home/img4.jpeg')] bg-cover bg-center">
        <div className="absolute inset-0 bg-gradient-to-b from-[#006c49]/70 via-[#006c49]/50 to-[#006c49]/80" />
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <Reveal>
            <h1 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-4">
              Our Services
            </h1>
            <p className="text-white/80 text-lg mb-8">
              Tailored expertise to scale your operations
            </p>
            <Link
              to="/contact"
              className="inline-block bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-primary-container)] text-white font-bold py-3 px-8 rounded-full hover:opacity-90 transition-opacity"
            >
              Explore Solutions
            </Link>
          </Reveal>
        </div>
      </section>

      {/* ── Feature Grid ─────────────────────────────────────────────────────── */}
      <section className="py-20 bg-[var(--color-surface)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-8 md:grid-cols-3">
          <FeatureCard
            icon={Users}
            title="Consulting"
            description="Strategic guidance from industry experts to accelerate growth."
          />
          <FeatureCard
            icon={Settings}
            title="Integration"
            description="Seamless API and platform integration with zero downtime."
          />
          <FeatureCard
            icon={LifeBuoy}
            title="Support"
            description="24/7 dedicated support ensuring uninterrupted service."
          />
        </div>
      </section>

      {/* ── Testimonial Carousel ─────────────────────────────────────────────── */}
      <section className="py-20 bg-[var(--color-surface-low)]">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center">
          <button onClick={prevTestimonial} className="p-2 text-[var(--color-primary)] hover:text-[var(--color-primary-container)] transition-colors">
            ◀
          </button>
          <Testimonial {...testimonials[testimonialIdx]} />
          <button onClick={nextTestimonial} className="p-2 text-[var(--color-primary)] hover:text-[var(--color-primary-container)] transition-colors">
            ▶
          </button>
        </div>
      </section>

      {/* ── Contact Form Banner ─────────────────────────────────────────────── */}
      <section className="bg-[var(--color-primary)] py-16">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <Reveal>
            <h2 className="text-3xl font-black mb-6">Get in Touch</h2>
            <p className="mb-8">Ready to partner with us? Fill out the form and we’ll respond promptly.</p>
            <form className="space-y-5" onSubmit={(e) => { e.preventDefault(); alert('Inquiry submitted'); }}>
              <input
                type="text"
                required
                placeholder="Your Name"
                className="w-full bg-[var(--color-primary-container)] text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              />
              <input
                type="email"
                required
                placeholder="Email Address"
                className="w-full bg-[var(--color-primary-container)] text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              />
              <textarea
                required
                placeholder="Your Message"
                rows={4}
                className="w-full bg-[var(--color-primary-container)] text-white py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              />
              <button
                type="submit"
                className="w-full bg-white text-[var(--color-primary)] font-bold py-3 rounded-full hover:bg-[var(--color-primary-container)] hover:text-white transition-colors"
              >
                Send Inquiry
              </button>
            </form>
          </Reveal>
        </div>
      </section>
    </>
  );
}
