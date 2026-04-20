import React from 'react';
import { Link } from 'react-router-dom';

function SiteFooter() {
  return (
    <footer className="bg-[#f3f3f3] dark:bg-[#1a1c1c] w-full mt-20 tonal-layering bg-surface-container-low border-t border-black/5 dark:border-white/5">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 px-12 py-20 w-full max-w-7xl mx-auto">
        <div className="space-y-6">
          <Link className="text-xl font-bold text-white dark:text-teal-50 uppercase tracking-tighter" to="/" style={{color: 'white'}}>Amanat Group</Link>
          <p className="text-[#707975] dark:text-gray-400 font-['Manrope'] font-normal text-base leading-relaxed">
            Building the foundations of modern Kyrgyzstan through elite real estate stewardship and industrial foresight.
          </p>
          <div className="flex gap-4">
            <Link className="w-10 h-10 bg-[#00342b] rounded-full flex items-center justify-center text-white hover:bg-[#745b00] transition-colors" to="/">
              <span className="material-symbols-outlined text-sm">public</span>
            </Link>
            <Link className="w-10 h-10 bg-[#00342b] rounded-full flex items-center justify-center text-white hover:bg-[#745b00] transition-colors" to="/">
              <span className="material-symbols-outlined text-sm">share</span>
            </Link>
            <Link className="w-10 h-10 bg-[#00342b] rounded-full flex items-center justify-center text-white hover:bg-[#745b00] transition-colors" to="/">
              <span className="material-symbols-outlined text-sm">mail</span>
            </Link>
          </div>
        </div>
        
        <div>
          <h4 className="text-[#00342b] dark:text-teal-500 font-bold uppercase text-xs tracking-widest mb-8">Navigation</h4>
          <ul className="space-y-4 font-['Manrope'] font-normal text-base" style={{color: "white"}}>
            <li><Link className="text-[#707975] dark:text-gray-400 hover:text-[#00342b] dark:hover:text-teal-300 underline transition-all" to="/">Overview</Link></li>
            <li><Link className="text-[#707975] dark:text-gray-400 hover:text-[#00342b] dark:hover:text-teal-300 underline transition-all" to="/buy-rent">Buy & Rent</Link></li>
            <li><Link className="text-[#707975] dark:text-gray-400 hover:text-[#00342b] dark:hover:text-teal-300 underline transition-all" to="/investments">Services</Link></li>
            <li><Link className="text-[#707975] dark:text-gray-400 hover:text-[#00342b] dark:hover:text-teal-300 underline transition-all" to="/amanat-group">About Us</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-[#00342b] dark:text-teal-500 font-bold uppercase text-xs tracking-widest mb-8">Corporate</h4>
          <ul className="space-y-4 font-['Manrope'] font-normal text-base" style={{color: "white"}}>
            <li><Link className="text-[#707975] dark:text-gray-400 hover:text-[#00342b] dark:hover:text-teal-300 underline transition-all" to="/contact">Privacy Policy</Link></li>
            <li><Link className="text-[#707975] dark:text-gray-400 hover:text-[#00342b] dark:hover:text-teal-300 underline transition-all" to="/contact">Terms of Service</Link></li>
            <li><Link className="text-[#707975] dark:text-gray-400 hover:text-[#00342b] dark:hover:text-teal-300 underline transition-all" to="/contact">Investment Relations</Link></li>
            <li><Link className="text-[#707975] dark:text-gray-400 hover:text-[#00342b] dark:hover:text-teal-300 underline transition-all" to="/contact">Careers</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-[#00342b] dark:text-teal-500 font-bold uppercase text-xs tracking-widest mb-8">Contact Us</h4>
          <ul className="space-y-4 font-['Manrope'] font-normal text-base text-[#707975] dark:text-gray-400">
            <li className="flex gap-2">
              <span className="material-symbols-outlined text-[#745b00] text-sm">location_on</span>
              123 Chuy Avenue, Bishkek
            </li>
            <li className="flex gap-2">
              <span className="material-symbols-outlined text-[#745b00] text-sm">call</span>
              +996 312 000 000
            </li>
            <li className="flex gap-2">
              <span className="material-symbols-outlined text-[#745b00] text-sm">mail</span>
              contact@amanatgroup.kg
            </li>
          </ul>
        </div>
      </div>
      
      <div className="border-t border-black/5 dark:border-white/5 py-8 px-12">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#707975] dark:text-gray-400">
          <p>© 2024 Amanat Group. Pillars of National Prosperity.</p>
          <p>Designed with excellence in Bishkek.</p>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
