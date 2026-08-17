"use client";
import React, { useState } from "react";
import { FaInstagram, FaXTwitter, FaLinkedinIn, FaCheck } from "react-icons/fa6";
import { getAssetPath } from "@/lib/utils";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <footer className="bg-slate-100/90 text-slate-700 py-16 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 space-y-12">
        {/* Top Footer Section */}
        <div className="grid md:grid-cols-12 gap-8 items-start">
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <img
              alt="GlobalX Innovation Labs"
              height={44}
              width={140}
              src={getAssetPath("/logo.png")}
              className="h-10 w-auto object-contain"
            />

            <p className="text-xs leading-relaxed text-slate-600 max-w-sm">
              GlobalX Innovation Labs is a dynamic hub making innovations happen across STEAM education, green transitions, and corporate digital transformation in emerging markets.
            </p>
            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://www.instagram.com/globalxlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white border border-slate-300 text-black hover:bg-black hover:text-white hover:border-black transition-colors shadow-xs"
                aria-label="Instagram"
              >
                <FaInstagram size={18} />
              </a>
              <a
                href="https://www.twitter.com/globalxlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white border border-slate-300 text-black hover:bg-black hover:text-white hover:border-black transition-colors shadow-xs"
                aria-label="X / Twitter"
              >
                <FaXTwitter size={18} />
              </a>
              <a
                href="https://www.linkedin.com/company/globalxlabs"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-full bg-white border border-slate-300 text-black hover:bg-black hover:text-white hover:border-black transition-colors shadow-xs"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold text-black uppercase tracking-wider">Navigation</h4>
            <ul className="space-y-2 text-xs font-medium">
              <li><a href="#about" className="hover:text-black transition-colors">About Us</a></li>
              <li><a href="#focus" className="hover:text-black transition-colors">Focus Areas</a></li>
              <li><a href="#solutions" className="hover:text-black transition-colors">Solutions</a></li>
              <li><a href="#services" className="hover:text-black transition-colors">Services</a></li>
              <li><a href="#team" className="hover:text-black transition-colors">Team & Network</a></li>
              <li><a href="#contact" className="hover:text-black transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter Form */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="text-xs font-bold text-black uppercase tracking-wider">Stay Updated</h4>
            <p className="text-xs text-slate-600">
              Subscribe to our innovation insights, STEAM program announcements, and startup updates.
            </p>

            {subscribed ? (
              <div className="p-4 rounded-xl bg-slate-200/80 border border-slate-300 text-black text-xs flex items-center gap-3">
                <FaCheck className="text-base text-black shrink-0" />
                <span>Thank you! Your email <strong>{email}</strong> has been registered.</span>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-2">
                <input
                  required
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-3 rounded-xl bg-white border border-slate-300 text-xs text-black placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-black transition-colors"
                />
                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl text-xs font-bold text-white bg-black hover:bg-slate-800 transition-all shadow-xs"
                >
                  Join Newsletter
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-200 text-center text-[11px] text-slate-500 space-y-1">
          <p>© 2026 GLOBALX INVESTMENTS LIMITED. ALL RIGHTS RESERVED.</p>
          <p className="text-slate-500">Making Innovations Happen Across Emerging Markets.</p>
        </div>
      </div>
    </footer>
  );
}



