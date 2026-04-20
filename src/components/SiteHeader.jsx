import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from "react-i18next";
import clsx from "clsx";
import { Menu, X } from "lucide-react";

function SiteHeader() {
  const { t, i18n } = useTranslation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navLinks = [
    { label: "Overview", path: "/" },
    { label: "Buy & Rent", path: "/buy-rent" },
    { label: "Investments", path: "/investments" },
    { label: "Services", path: "/services" },
    { label: "About Us", path: "/amanat-group" },
  ];

  return (
    <nav className={clsx(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300 w-full bg-white shadow-sm"
    )}>
      <div className="flex justify-between items-center w-full px-8 py-4 max-w-screen-2xl mx-auto">
        <div className="flex items-center gap-8">
          <Link className="text-2xl font-black text-[#00342b] dark:text-teal-50 uppercase tracking-tighter" to="/">Amanat Group</Link>
          
          <div className="hidden md:flex gap-6 font-['Manrope'] font-semibold text-sm tracking-tight">
            {navLinks.map((link) => (
              <NavLink 
                key={link.path}
                to={link.path} 
                className={({ isActive }) => clsx(
                  "transition-colors duration-300 hover:text-[#745b00]",
                  isActive 
                    ? "text-[#745b00] border-b-2 border-[#745b00] pb-1" 
                    : "text-[#1a1c1c] dark:text-[#bfc9c4]"
                )}
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-6">
          <div className="flex flex-col justify-center text-right hidden sm:block self-center">
            <p className="text-xs font-bold text-[#745b00] uppercase tracking-widest leading-tight">Bishkek Office</p>
            <p className="text-sm font-semibold text-[#00342b] leading-tight">+996 312 000 000</p>
          </div>
          <Link to="/contact" className="bg-[#00342b] !text-white text-white px-6 py-2 rounded-md font-bold text-sm hover:opacity-90 active:scale-95 duration-200 hidden md:flex items-center">
            Enquire
          </Link>

          {/* Language Switcher */}
          <div className="flex rounded-md bg-white/20 p-1 backdrop-blur-md ring-1 ring-black/5">
            {["ru", "en"].map((lang) => (
              <button
                key={lang}
                type="button"
                onClick={() => i18n.changeLanguage(lang)}
                className={clsx(
                  "rounded-[0.35rem] px-2 py-1 text-[10px] font-bold uppercase tracking-wider transition-all",
                  i18n.language === lang
                    ? "bg-[#00342b] text-white"
                    : "text-[#745b00]",
                )}
              >
                {lang}
              </button>
            ))}
          </div>

          <button
            type="button"
            onClick={() => setIsMenuOpen((value) => !value)}
            className="md:hidden text-[#00342b] dark:text-teal-50"
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={clsx(
          "md:hidden overflow-hidden transition-all duration-300 bg-white dark:bg-[#1a1c1c]",
          isMenuOpen ? "max-h-screen border-t" : "max-h-0"
        )}
      >
        <div className="px-8 py-6 space-y-4">
          {navLinks.map((link) => (
            <NavLink 
              key={link.path}
              to={link.path} 
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => clsx(
                "block text-lg font-bold transition-colors duration-300",
                isActive 
                  ? "text-[#745b00]" 
                  : "text-[#1a1c1c] dark:text-[#bfc9c4]"
              )}
            >
              {link.label}
            </NavLink>
          ))}
          <Link 
            to="/contact" 
            onClick={() => setIsMenuOpen(false)}
            className="block w-full text-center bg-[#00342b] text-white px-6 py-3 rounded-md font-bold text-sm"
          >
            Enquire
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default SiteHeader;
