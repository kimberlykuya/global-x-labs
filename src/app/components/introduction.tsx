"use client";
import React from "react";
import Menu from "./menu";
import { FaArrowRight, FaRocket, FaGraduationCap, FaLeaf } from "react-icons/fa6";
import { getAssetPath } from "@/lib/utils";

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

              {/* Main Feature Card */}
              <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-xl group">
                <div className="aspect-[4/3] w-full overflow-hidden bg-slate-900">
                  <img
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    alt="GlobalX Hands-On STEAM Tinkering Labs"
                    src={getAssetPath("/intro.png")}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                </div>

                <div className="p-6 space-y-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold text-white bg-black">
                    Featured Hub
                  </div>
                  <h3 className="text-xl font-bold text-black">
                    STEAM Tinkering & Innovation Hubs
                  </h3>
                  <p className="text-xs leading-relaxed text-slate-600">
                    Equipping learners and innovators with hands-on robotics, hardware skilling, and digital design tools across regional centers.
                  </p>
                </div>
              </div>

              {/* Floating Stat Badge */}
              <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 p-4 rounded-2xl bg-white border border-slate-200 shadow-xl max-w-xs">
                <img
                  className="w-12 h-12 rounded-xl object-cover"
                  src={getAssetPath("/home.png")}
                  alt="Tinkering Lab"
                />
                <div>
                  <p className="text-xs font-bold text-black">25+ STEAM Hubs</p>
                  <p className="text-[11px] text-slate-600">Established Regional Networks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
