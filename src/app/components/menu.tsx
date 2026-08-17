"use client";
import React, { useState } from "react";
import { MdMenu, MdClose } from "react-icons/md";
import { FaArrowRight } from "react-icons/fa6";
import { getAssetPath } from "@/lib/utils";

export default function Menu() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-3 group">
          <img
            alt="GlobalX Innovation Labs"
            height={42}
            width={120}
            src={getAssetPath("/logo.png")}
            className="h-10 w-auto object-contain transition-transform group-hover:scale-105"
          />
        </a>

        {/* Desktop Navigation */}
        <nav id="web-menu" className="hidden md:flex items-center gap-8">
          <a
            className="text-xs font-bold tracking-wider text-slate-800 hover:text-black transition-colors uppercase"
            href="#about"
          >
            About Us
          </a>
          <a
            className="text-xs font-bold tracking-wider text-slate-800 hover:text-black transition-colors uppercase"
            href="#focus"
          >
            Focus
          </a>
          <a
            className="text-xs font-bold tracking-wider text-slate-800 hover:text-black transition-colors uppercase"
            href="#solutions"
          >
            Solutions
          </a>
          <a
            className="text-xs font-bold tracking-wider text-slate-800 hover:text-black transition-colors uppercase"
            href="#services"
          >
            Services
          </a>
          <a
            className="text-xs font-bold tracking-wider text-slate-800 hover:text-black transition-colors uppercase"
            href="#team"
          >
            Team
          </a>
          <a
            className="text-xs font-bold tracking-wider text-slate-800 hover:text-black transition-colors uppercase"
            href="#contact"
          >
            Contact
          </a>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs font-bold text-white bg-black hover:bg-slate-800 shadow-md hover:shadow-lg transition-all duration-300"
          >
            Partner With Us
            <FaArrowRight className="text-xs" />
          </a>
        </div>

        {/* Mobile Toggle Button */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-slate-800 focus:outline-none hover:bg-slate-100 rounded-lg transition-colors"
          aria-label="Toggle navigation menu"
        >
          {mobileMenuOpen ? <MdClose size={26} /> : <MdMenu size={26} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-xl border-b border-slate-200 px-6 py-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-4">
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 hover:text-black transition-colors py-1"
              href="#about"
            >
              About Us
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 hover:text-black transition-colors py-1"
              href="#focus"
            >
              Focus Areas
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 hover:text-black transition-colors py-1"
              href="#solutions"
            >
              Solutions
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 hover:text-black transition-colors py-1"
              href="#services"
            >
              Services
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 hover:text-black transition-colors py-1"
              href="#team"
            >
              Team & Ecosystem
            </a>
            <a
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm font-semibold text-slate-800 hover:text-black transition-colors py-1"
              href="#contact"
            >
              Contact Us
            </a>
          </nav>
          <div className="pt-2">
            <a
              onClick={() => setMobileMenuOpen(false)}
              href="#contact"
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-3 rounded-full text-xs font-bold text-white bg-black hover:bg-slate-800 transition-all shadow-md"
            >
              Partner With Us
              <FaArrowRight className="text-xs" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}


