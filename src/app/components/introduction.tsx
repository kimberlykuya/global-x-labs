
"use client";
import React from "react";
import Menu from "./menu";
import { FaArrowRight, FaRocket, FaGraduationCap, FaLeaf } from "react-icons/fa6";

export default function Introduction() {
  return (
    <div className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <Menu />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Copy & Action */}
          <div className="lg:col-span-7 space-y-8 text-left">
            

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-black tracking-tight leading-[1.12]">
              Making Innovations Happen Across Emerging Markets
            </h1>

            {/* Subtitle */}
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed max-w-2xl">
              GlobalX Innovation Labs bridges the gap in technical skills, startup funding, and digital transformation. We empower learners, entrepreneurs, and enterprises to build green tech, hardware, and emerging solutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 pt-2">
              <a
                href="#solutions"
                className="inline-flex items-center gap-3 px-7 py-3.5 rounded-full text-sm font-bold text-white bg-black hover:bg-slate-800 shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300"
              >
                Explore Solutions
                <FaArrowRight className="text-xs" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-bold text-slate-900 bg-white hover:bg-slate-100 border border-slate-300 shadow-xs transition-all duration-300"
              >
                Schedule Consultation
              </a>
            </div>

            {/* Quick Highlights */}
            <div className="grid sm:grid-cols-3 gap-4 pt-6 border-t border-slate-200">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-100 text-slate-900 border border-slate-200">
                  <FaGraduationCap size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">STEAM Education</h4>
                  <p className="text-[11px] text-slate-600">Next-gen tinkering labs</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-100 text-slate-900 border border-slate-200">
                  <FaLeaf size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Green Transitions</h4>
                  <p className="text-[11px] text-slate-600">Sustainable tech strategies</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-slate-100 text-slate-900 border border-slate-200">
                  <FaRocket size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-bold text-slate-900">Startup Growth</h4>
                  <p className="text-[11px] text-slate-600">Funding & acceleration</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Dynamic Graphic & Visual Card Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Background Shadow Glow */}
              <div className="absolute -inset-4 rounded-3xl bg-slate-200/50 blur-xl"></div>
              
              <div className="relative rounded-3xl border border-slate-200 bg-white p-6 shadow-xl space-y-6">
                {/* Hero Showcase Image */}
                <div className="relative overflow-hidden rounded-2xl aspect-[4/3] bg-slate-100 border border-slate-200">
                  <img
                    alt="GlobalX Innovation Hub"
                    src="/intro.png"
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-5">
                    <span className="text-white text-xs font-semibold px-3 py-1.5 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                      Inside GlobalX Innovation Hub
                    </span>
                  </div>
                </div>

                {/* Floating Metric Card inside graphic */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-slate-900 shadow-xs space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-slate-800">The Twin Transition</span>
                    <span className="text-[10px] px-2 py-0.5 rounded bg-black text-white font-bold uppercase tracking-wider">Active</span>
                  </div>
                  <p className="text-sm font-medium text-slate-700">
                    Bridging green initiatives and hardware-driven digital innovation.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Live Impact Counters Banner (Black & White Theme) */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 p-8 rounded-3xl bg-white border border-slate-200 text-slate-900 shadow-lg">
          <div className="text-center space-y-1">
            <p className="text-3xl sm:text-4xl font-extrabold text-black">1,500+</p>
            <p className="text-xs sm:text-sm font-semibold text-slate-600">Learners & Innovators</p>
          </div>

          <div className="text-center space-y-1 border-l border-slate-200">
            <p className="text-3xl sm:text-4xl font-extrabold text-black">25+</p>
            <p className="text-xs sm:text-sm font-semibold text-slate-600">STEAM & Tinkering Hubs</p>
          </div>

          <div className="text-center space-y-1 border-l border-slate-200">
            <p className="text-3xl sm:text-4xl font-extrabold text-black">$2.5M+</p>
            <p className="text-xs sm:text-sm font-semibold text-slate-600">Capital & Grants Facilitated</p>
          </div>

          <div className="text-center space-y-1 border-l border-slate-200">
            <p className="text-3xl sm:text-4xl font-extrabold text-black">100%</p>
            <p className="text-xs sm:text-sm font-semibold text-slate-600">Sustainable Impact Focus</p>
          </div>
        </div>
      </div>
    </div>
  );
}



