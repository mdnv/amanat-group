
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import SiteHeader from '../components/SiteHeader';
import SiteFooter from '../components/SiteFooter';

function HomePage() {
  const [videoEnded, setVideoEnded] = useState(false);

  return (
    <>
      <SiteHeader />

{/* Hero Section */}
<header className="relative h-[921px] flex items-center overflow-hidden bg-primary">
<div className="absolute inset-0 z-0">
<video className="w-full h-full object-cover opacity-60" autoPlay muted playsInline onEnded={() => setVideoEnded(true)} poster="/home/img1.png" src="/videos/video-hero.mp4" />
<div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
<div className="max-w-2xl">
<span className={`inline-block px-3 py-1 bg-secondary text-on-secondary text-[10px] font-black uppercase tracking-[0.3em] mb-6 transition-all duration-700 delay-100 transform ${videoEnded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Pillars of Kyrgyzstan</span>
<h1 className={`text-white text-6xl md:text-8xl font-black leading-[0.95] tracking-tighter mb-8 transition-all duration-700 delay-300 transform ${videoEnded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>Where Your Next <br/><span className="text-secondary-fixed">Chapter</span> Unfolds</h1>
<p className={`text-primary-fixed text-xl max-w-lg font-light leading-relaxed mb-10 transition-all duration-700 delay-500 transform ${videoEnded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
                    Elevate your living experience with Amanat Group's exclusive listings in Kyrgyzstan. From urban luxury to lakeside serenity.
                </p>
<div className={`flex gap-4 transition-all duration-700 delay-700 transform ${videoEnded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
<button className="bg-secondary-fixed text-on-secondary-fixed px-10 py-4 font-bold rounded-md hover:bg-secondary transition-all">Explore Properties</button>
<button className="border-2 border-white/30 text-white px-10 py-4 font-bold rounded-md hover:bg-white/10 transition-all backdrop-blur-sm">Our Legacy</button>
</div>
</div>
</div>
</header>
{/* Stats Bar */}
<section className="bg-surface-container-low py-12">
<div className="max-w-7xl mx-auto px-8 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="flex flex-col border-l-4 border-secondary pl-6">
<span className="text-4xl font-black text-primary">+12</span>
<span className="text-xs uppercase font-bold text-outline tracking-wider">Certified Agents</span>
</div>
<div className="flex flex-col border-l-4 border-secondary pl-6">
<span className="text-4xl font-black text-primary">+15</span>
<span className="text-xs uppercase font-bold text-outline tracking-wider">Industry Awards</span>
</div>
<div className="flex flex-col border-l-4 border-secondary pl-6">
<span className="text-4xl font-black text-primary">99%</span>
<span className="text-xs uppercase font-bold text-outline tracking-wider">Success Rate</span>
</div>
<div className="flex flex-col border-l-4 border-secondary pl-6">
<span className="text-4xl font-black text-primary">+700</span>
<span className="text-xs uppercase font-bold text-outline tracking-wider">Transactions</span>
</div>
</div>
</section>
{/* About Section */}
<section className="py-24 max-w-7xl mx-auto px-8 grid md:grid-cols-2 gap-20 items-center">
<div className="space-y-8">
<h2 className="text-5xl font-black text-primary leading-tight tracking-tighter">Real Estate Expertise in the Heart of Central Asia.</h2>
<div className="space-y-6 text-on-surface-variant leading-relaxed">
<p>Amanat Group is more than a brokerage; we are the architects of Kyrgyz prosperity. With a deep understanding of local market dynamics from the bustling streets of Bishkek to the shores of Issyk-Kul, we provide unparalleled access to the nation's most prestigious holdings.</p>
<p>Our commitment to excellence and national development ensures that every transaction contributes to a stronger, more vibrant Kyrgyzstan.</p>
</div>
<Link className="inline-flex items-center gap-4 text-primary font-bold group" to="/amanat-group">
                LEARN ABOUT OUR VISION
                <span className="w-12 h-[2px] bg-secondary group-hover:w-20 transition-all duration-500"></span>
</Link>
</div>
<div className="grid grid-cols-12 gap-4 relative">
<div className="col-span-7 pt-12">
<img className="w-full aspect-[4/5] object-cover rounded-md shadow-2xl" data-alt="Ultra-modern luxury apartment interior in Bishkek featuring minimalist furniture and large windows overlooking the city" src="/home/img2.jpg"/>
</div>
<div className="col-span-5 self-end">
<img className="w-full aspect-[3/4] object-cover rounded-md shadow-xl border-8 border-white" data-alt="Close up of professional architectural blueprints and technical drawings for a modern real estate development project" src="/home/img3.jpg"/>
</div>
</div>
</section>
{/* Selection/Agents Grid */}
<section className="grid md:grid-cols-2">
<div className="relative h-[600px] flex items-center justify-center group overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Majestic mountain landscape of Kyrgyzstan with rolling green hills and deep blue sky reflecting industrial strength" src="/home/img4.jpeg"/>
<div className="absolute inset-0 bg-primary/60 group-hover:bg-primary/80 transition-all"></div>
<div className="relative text-center p-12">
<h3 className="text-4xl font-black text-white mb-6 tracking-tighter drop-shadow-md">Selection</h3>
<p className="text-white/90 mb-8 font-medium drop-shadow-md">Discover our hand-picked portfolio of exclusive Kyrgyz properties.</p>
<Link to="/real-estate" className="inline-block bg-white text-primary px-8 py-3 font-bold hover:bg-secondary-fixed transition-colors">View All Selection</Link>
</div>
</div>
<div className="relative h-[600px] flex items-center justify-center group overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" data-alt="Modern corporate office interior in Bishkek with high-end furniture and professional atmosphere" src="/home/img5.png"/>
<div className="absolute inset-0 bg-secondary/80 group-hover:bg-secondary/90 transition-all"></div>
<div className="relative text-center p-12">
<h3 className="text-4xl font-black text-white mb-6 tracking-tighter drop-shadow-md">Agents</h3>
<p className="text-white/90 mb-8 font-medium drop-shadow-md">Meet the certified professionals leading the real estate industry.</p>
<Link to="/amanat-group" className="inline-block bg-white text-secondary px-8 py-3 font-bold hover:bg-primary transition-colors hover:text-white">Meet Our Team</Link>
</div>
</div>
</section>
{/* Featured Real Estate */}
<section className="py-24 bg-surface-container-low">
<div className="max-w-7xl mx-auto px-8">
<div className="flex justify-between items-end mb-16">
<div>
<span className="text-secondary font-black text-xs uppercase tracking-widest">Global Standards</span>
<h2 className="text-5xl font-black text-primary tracking-tighter mt-2">Featured Real Estate</h2>
</div>
<div className="flex gap-4">
<button className="w-12 h-12 rounded-full border border-outline flex items-center justify-center hover:bg-primary hover:text-white transition-all">
<span className="material-symbols-outlined">arrow_back</span>
</button>
<button className="w-12 h-12 rounded-full border border-outline flex items-center justify-center hover:bg-primary hover:text-white transition-all">
<span className="material-symbols-outlined">arrow_forward</span>
</button>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8">
{/* Card 1 */}
<div className="bg-surface-container-lowest overflow-hidden group">
<div className="relative h-[400px] overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Luxury high-rise apartment exterior with glass balconies in central Bishkek during twilight" src="/home/img6.jpg"/>
<div className="absolute top-6 left-6 bg-primary text-white text-[10px] font-bold px-4 py-1 tracking-widest uppercase">Premium</div>
</div>
<div className="p-10">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-2xl font-black text-primary">Premium City Center Apartment</h3>
<p className="text-outline text-sm uppercase tracking-widest mt-1">Bishkek, Kyrgyzstan</p>
</div>
<span className="text-2xl font-black text-secondary">$120,000</span>
</div>
<div className="flex gap-6 border-t border-outline-variant pt-6 mt-6">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary">bed</span>
<span className="text-sm font-bold">3 Bed</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary">bathtub</span>
<span className="text-sm font-bold">2 Bath</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary">square_foot</span>
<span className="text-sm font-bold">140 m²</span>
</div>
</div>
</div>
</div>
{/* Card 2 */}
<div className="bg-surface-container-lowest overflow-hidden group">
<div className="relative h-[400px] overflow-hidden">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" data-alt="Luxury lakeside villa at Issyk-Kul with modern wood and stone architecture and panoramic lake views" src="/home/img7.jpg"/>
<div className="absolute top-6 left-6 bg-secondary text-on-secondary text-[10px] font-bold px-4 py-1 tracking-widest uppercase">Exclusive</div>
</div>
<div className="p-10">
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-2xl font-black text-primary">Issyk-Kul Lakeside Villa</h3>
<p className="text-outline text-sm uppercase tracking-widest mt-1">Cholpon-Ata, Kyrgyzstan</p>
</div>
<span className="text-2xl font-black text-secondary">$450,000</span>
</div>
<div className="flex gap-6 border-t border-outline-variant pt-6 mt-6">
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary">bed</span>
<span className="text-sm font-bold">5 Bed</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary">bathtub</span>
<span className="text-sm font-bold">4 Bath</span>
</div>
<div className="flex items-center gap-2">
<span className="material-symbols-outlined text-secondary">square_foot</span>
<span className="text-sm font-bold">350 m²</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
{/* Listings Grid (3x2) */}
<section className="py-24 max-w-7xl mx-auto px-8">
<div className="text-center mb-16">
<h2 className="text-4xl font-black text-primary tracking-tighter">Current Opportunities</h2>
<div className="w-20 h-1 bg-secondary mx-auto mt-4"></div>
</div>
<div className="grid md:grid-cols-3 gap-x-8 gap-y-12">
{/* Row 1 */}
<div className="flex flex-col group">
<div className="h-64 overflow-hidden mb-6 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-all" data-alt="Modern family home with clean lines and landscaped garden in Osh suburbs" src="/home/img8.jpg"/>
</div>
<h4 className="text-primary font-black text-xl">Silk Road Residence</h4>
<p className="text-outline text-xs uppercase tracking-widest mb-4">Osh • $85,000</p>
<div className="flex justify-between items-center border-t border-surface-variant pt-4">
<span className="text-sm font-medium">110 m² | 2 Bed</span>
<Link className="text-secondary font-bold text-sm underline" to="/real-estate">Details</Link>
</div>
</div>
<div className="flex flex-col group">
<div className="h-64 overflow-hidden mb-6 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-all" data-alt="Stately traditional house with modern updates near the mountains in Karakol" src="/home/img9.jpg"/>
</div>
<h4 className="text-primary font-black text-xl">Tian Shan Retreat</h4>
<p className="text-outline text-xs uppercase tracking-widest mb-4">Karakol • $115,000</p>
<div className="flex justify-between items-center border-t border-surface-variant pt-4">
<span className="text-sm font-medium">180 m² | 4 Bed</span>
<Link className="text-secondary font-bold text-sm underline" to="/real-estate">Details</Link>
</div>
</div>
<div className="flex flex-col group">
<div className="h-64 overflow-hidden mb-6 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-all" data-alt="Minimalist luxury condo interior with neutral colors and warm lighting in Bishkek" src="/home/img10.jpg"/>
</div>
<h4 className="text-primary font-black text-xl">Ala-Too Loft</h4>
<p className="text-outline text-xs uppercase tracking-widest mb-4">Bishkek • $95,000</p>
<div className="flex justify-between items-center border-t border-surface-variant pt-4">
<span className="text-sm font-medium">85 m² | 1 Bed</span>
<Link className="text-secondary font-bold text-sm underline" to="/real-estate">Details</Link>
</div>
</div>
{/* Row 2 */}
<div className="flex flex-col group">
<div className="h-64 overflow-hidden mb-6 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-all" data-alt="Boutique guest house with local Kyrgyz design elements and modern comfort" src="/home/img11.jpg"/>
</div>
<h4 className="text-primary font-black text-xl">Nomad Boutique Hotel</h4>
<p className="text-outline text-xs uppercase tracking-widest mb-4">Osh • $280,000</p>
<div className="flex justify-between items-center border-t border-surface-variant pt-4">
<span className="text-sm font-medium">500 m² | 12 Bed</span>
<Link className="text-secondary font-bold text-sm underline" to="/real-estate">Details</Link>
</div>
</div>
<div className="flex flex-col group">
<div className="h-64 overflow-hidden mb-6 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-all" data-alt="Chic modern duplex with panoramic windows in the quiet green area of Bishkek" src="/home/img12.jpg"/>
</div>
<h4 className="text-primary font-black text-xl">Green City Duplex</h4>
<p className="text-outline text-xs uppercase tracking-widest mb-4">Bishkek • $155,000</p>
<div className="flex justify-between items-center border-t border-surface-variant pt-4">
<span className="text-sm font-medium">160 m² | 3 Bed</span>
<Link className="text-secondary font-bold text-sm underline" to="/real-estate">Details</Link>
</div>
</div>
<div className="flex flex-col group">
<div className="h-64 overflow-hidden mb-6 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-all" data-alt="High-end penthouse interior with marble floors and bespoke gold finishes" src="/home/img13.jpg"/>
</div>
<h4 className="text-primary font-black text-xl">Victory Square Penthouse</h4>
<p className="text-outline text-xs uppercase tracking-widest mb-4">Bishkek • $310,000</p>
<div className="flex justify-between items-center border-t border-surface-variant pt-4">
<span className="text-sm font-medium">220 m² | 4 Bed</span>
<Link className="text-secondary font-bold text-sm underline" to="/real-estate">Details</Link>
</div>
</div>
</div>
</section>
{/* Services Section */}
<section className="bg-primary py-24">
<div className="max-w-7xl mx-auto px-8">
<h2 className="text-4xl font-black text-white text-center mb-16 tracking-tighter">Our Industrial Expertise</h2>
<div className="grid md:grid-cols-3 gap-12">
<div className="p-10 bg-white/5 border border-white/10 hover:bg-white/10 transition-all rounded-lg group">
<span className="material-symbols-outlined text-secondary text-5xl mb-6 block">home_work</span>
<h3 className="text-2xl font-black text-white mb-4">Home Buying Consultation</h3>
<p className="text-primary-fixed/70 mb-6 leading-relaxed">Strategic guidance through the entire purchasing cycle in the Kyrgyz market.</p>
<Link className="text-secondary font-bold hover:underline" to="/investments">Explore Service</Link>
</div>
<div className="p-10 bg-white/5 border border-white/10 hover:bg-white/10 transition-all rounded-lg group">
<span className="material-symbols-outlined text-secondary text-5xl mb-6 block">real_estate_agent</span>
<h3 className="text-2xl font-black text-white mb-4">Property Management</h3>
<p className="text-primary-fixed/70 mb-6 leading-relaxed">Asset optimization and maintenance for domestic and international investors.</p>
<Link className="text-secondary font-bold hover:underline" to="/investments">Explore Service</Link>
</div>
<div className="p-10 bg-white/5 border border-white/10 hover:bg-white/10 transition-all rounded-lg group">
<span className="material-symbols-outlined text-secondary text-5xl mb-6 block">analytics</span>
<h3 className="text-2xl font-black text-white mb-4">Investment Advisory</h3>
<p className="text-primary-fixed/70 mb-6 leading-relaxed">Data-driven insights into emerging real estate corridors within Kyrgyzstan.</p>
<Link className="text-secondary font-bold hover:underline" to="/investments">Explore Service</Link>
</div>
</div>
</div>
</section>
{/* Certified Professionals */}
<section className="py-24 max-w-7xl mx-auto px-8">
<h2 className="text-4xl font-black text-primary text-center mb-16 tracking-tighter">Certified Market Experts</h2>
<div className="grid md:grid-cols-3 gap-8">
{/* Agent 1 */}
<div className="text-center group">
<div className="relative w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden border-4 border-surface-container-high group-hover:border-secondary transition-all">
<img className="w-full h-full object-cover" data-alt="Professional Kyrgyz man in a smart suit, senior residential real estate expert with a confident smile" src="/home/img14.jpg"/>
</div>
<h4 className="text-2xl font-black text-primary">Azamat Bakytov</h4>
<p className="text-secondary font-bold uppercase text-xs tracking-widest mb-4">Residential Expert</p>
<p className="text-outline italic px-6 mb-6">"My mission is to match the unique spirit of our clients with the vibrant pulse of Bishkek's property market."</p>
<Link className="bg-surface-container-low text-primary px-8 py-2 rounded-full font-bold hover:bg-primary hover:text-white transition-all inline-block" to="/amanat-group">Agent Profile</Link>
</div>
{/* Agent 2 */}
<div className="text-center group">
<div className="relative w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden border-4 border-surface-container-high group-hover:border-secondary transition-all">
<img className="w-full h-full object-cover" data-alt="Confident Kyrgyz woman real estate professional in modern business attire" src="/home/img15.jpg"/>
</div>
<h4 className="text-2xl font-black text-primary">Meerim Isakova</h4>
<p className="text-secondary font-bold uppercase text-xs tracking-widest mb-4">Investment Specialist</p>
<p className="text-outline italic px-6 mb-6">"Transforming real estate potential into national prosperity for every investor we represent."</p>
<Link className="bg-surface-container-low text-primary px-8 py-2 rounded-full font-bold hover:bg-primary hover:text-white transition-all inline-block" to="/amanat-group">Agent Profile</Link>
</div>
{/* Agent 3 */}
<div className="text-center group">
<div className="relative w-64 h-64 mx-auto mb-8 rounded-full overflow-hidden border-4 border-surface-container-high group-hover:border-secondary transition-all">
<img className="w-full h-full object-cover" data-alt="Experienced middle-aged Kyrgyz man, commercial real estate expert with professional demeanor" src="/home/img16.jpg"/>
</div>
<h4 className="text-2xl font-black text-primary">Ulan Sadykov</h4>
<p className="text-secondary font-bold uppercase text-xs tracking-widest mb-4">Luxury Consultant</p>
<p className="text-outline italic px-6 mb-6">"Excellence is not an act, but a habit. We curate only the finest living experiences in Kyrgyzstan."</p>
<Link className="bg-surface-container-low text-primary px-8 py-2 rounded-full font-bold hover:bg-primary hover:text-white transition-all inline-block" to="/amanat-group">Agent Profile</Link>
</div>
</div>
</section>
{/* Scrolling Ticker */}
<div className="bg-primary overflow-hidden py-4 border-y border-white/10">
<div className="ticker-scroll">
<span className="text-white text-lg font-black uppercase tracking-[0.4em] mx-8">Real Estate • Amanat Group • Real Estate • Amanat Group • Real Estate • Amanat Group • Real Estate • Amanat Group • Real Estate • Amanat Group • Real Estate • Amanat Group • Real Estate • Amanat Group • Real Estate • Amanat Group •</span>
<span className="text-white text-lg font-black uppercase tracking-[0.4em] mx-8">Real Estate • Amanat Group • Real Estate • Amanat Group • Real Estate • Amanat Group • Real Estate • Amanat Group • Real Estate • Amanat Group • Real Estate • Amanat Group • Real Estate • Amanat Group • Real Estate • Amanat Group •</span>
</div>
</div>
{/* Blog Section */}
<section className="py-24 max-w-7xl mx-auto px-8">
<div className="flex justify-between items-center mb-16">
<h2 className="text-4xl font-black text-primary tracking-tighter">Insights &amp; Intelligence</h2>
<button className="text-primary font-bold border-b-2 border-secondary">View All News</button>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="group">
<div className="aspect-video overflow-hidden rounded-md mb-6">
<img className="w-full h-full object-cover group-hover:scale-105 transition-all" data-alt="A professional looking over city charts and real estate market data for Bishkek city development" src="/home/img17.jpg"/>
</div>
<p className="text-secondary text-xs font-bold uppercase tracking-widest mb-2">Investment</p>
<h3 className="text-xl font-black text-primary mb-4 leading-tight group-hover:text-secondary transition-colors">Investing in Bishkek: The 2024 Market Forecast</h3>
<p className="text-outline text-sm leading-relaxed">Understanding the economic drivers behind the capital's real estate surge.</p>
</div>
<div className="group">
<div className="aspect-video overflow-hidden rounded-md mb-6">
<img className="w-full h-full object-cover group-hover:scale-105 transition-all" data-alt="Beautifully staged modern living room with clean aesthetics to attract real estate buyers" src="/home/img18.jpg"/>
</div>
<p className="text-secondary text-xs font-bold uppercase tracking-widest mb-2">Selling Tips</p>
<h3 className="text-xl font-black text-primary mb-4 leading-tight group-hover:text-secondary transition-colors">Staging for Sale: Maximizing Your Property Value</h3>
<p className="text-outline text-sm leading-relaxed">How professional presentation can increase your closing price by up to 15%.</p>
</div>
<div className="group">
<div className="aspect-video overflow-hidden rounded-md mb-6">
<img className="w-full h-full object-cover group-hover:scale-105 transition-all" data-alt="Close up of signing a contract on a wooden table, focusing on the professional and official atmosphere" src="/home/img19.jpg"/>
</div>
<p className="text-secondary text-xs font-bold uppercase tracking-widest mb-2">Guide</p>
<h3 className="text-xl font-black text-primary mb-4 leading-tight group-hover:text-secondary transition-colors">Renting vs Buying in Kyrgyzstan: A Complete Guide</h3>
<p className="text-outline text-sm leading-relaxed">Evaluating long-term equity versus flexible urban living in the current climate.</p>
</div>
</div>
</section>
{/* CTA Section */}
<section className="relative h-[500px] flex items-center overflow-hidden">
<img className="absolute inset-0 w-full h-full object-cover" data-alt="Luxurious grand doorway opening to a brightly lit modern interior, symbolizing new beginnings and prestige" src="/home/img20.jpg"/>
<div className="absolute inset-0 bg-primary/80 backdrop-blur-sm"></div>
<div className="relative z-10 max-w-4xl mx-auto px-8 text-center">
<h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter mb-8">Unlock the Door to Your Future</h2>
<p className="text-primary-fixed text-xl mb-12 font-light">Join the ranks of Kyrgyzstan's most successful property owners. Amanat Group is your partner in excellence.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-secondary-fixed text-on-secondary-fixed px-12 py-5 font-bold rounded-md hover:bg-secondary transition-all text-lg">Contact Our Experts</button>
<button className="border-2 border-white/30 text-white px-12 py-5 font-bold rounded-md hover:bg-white/10 transition-all text-lg">View Listings</button>
</div>
</div>
</section>


    </>
  );
}

export default HomePage;
