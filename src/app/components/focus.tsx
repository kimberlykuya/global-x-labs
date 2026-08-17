"use client";
import React, { useState } from "react";
import { FaLaptopCode, FaMicrochip, FaSeedling, FaArrowRight, FaXmark, FaCheck } from "react-icons/fa6";

export default function Focus() {
  const [activeModalPillar, setActiveModalPillar] = useState<typeof focusAreas[0] | null>(null);

  const handleExploreClick = (item: typeof focusAreas[0]) => {
    setActiveModalPillar(item);
  };

  const handleConsultationRedirect = (interestName: string) => {
    setActiveModalPillar(null);
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="focus" className="py-16 lg:py-20 max-w-7xl mx-auto px-6 lg:px-12">
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
        <p className="text-xs font-extrabold tracking-widest text-slate-600 uppercase">
          Core Pillars & Expertise
        </p>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
          Where Innovation Meets Strategic Impact
        </h2>
        <p className="text-sm sm:text-base text-slate-700">
          We focus on key technological frontiers that drive sustainable economic growth and prepare organizations for the future.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {focusAreas.map((item, index) => (
          <article
            key={index}
            onClick={() => handleExploreClick(item)}
            className="flex flex-col justify-between p-8 rounded-3xl border border-slate-200 bg-white shadow-md hover:shadow-xl hover:border-black transition-all cursor-pointer group"
          >
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center text-2xl font-bold transition-transform group-hover:scale-110">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-black">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {item.body}
              </p>
            </div>
            
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                handleExploreClick(item);
              }}
              className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-black group-hover:text-slate-700 transition-colors w-full text-left"
            >
              <span>Explore {item.title}</span>
              <FaArrowRight className="transition-transform group-hover:translate-x-1 text-xs" />
            </button>
          </article>
        ))}
      </div>

      {/* Interactive Pillar Detail Modal (Fixes Dead Functionality!) */}
      {activeModalPillar && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-200">
          <div className="relative w-full max-w-xl bg-white rounded-3xl p-8 shadow-2xl space-y-6 border border-slate-200">
            {/* Close Button */}
            <button
              onClick={() => setActiveModalPillar(null)}
              className="absolute top-6 right-6 p-2 rounded-full text-slate-500 hover:text-black hover:bg-slate-100 transition-colors"
              aria-label="Close modal"
            >
              <FaXmark size={20} />
            </button>

            {/* Modal Header */}
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-2xl bg-black text-white flex items-center justify-center text-2xl font-bold shrink-0">
                {activeModalPillar.icon}
              </div>
              <div>
                <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">GlobalX Focus Pillar</span>
                <h3 className="text-2xl font-bold text-black">{activeModalPillar.title}</h3>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm text-slate-700 leading-relaxed">
              {activeModalPillar.body}
            </p>

            {/* Key Deliverables */}
            <div className="space-y-3 bg-slate-50 p-5 rounded-2xl border border-slate-200">
              <h4 className="text-xs font-bold text-black uppercase tracking-wider">Key Capabilities & Offerings</h4>
              <ul className="space-y-2 text-xs text-slate-700">
                {activeModalPillar.features.map((feat, idx) => (
                  <li key={idx} className="flex items-center gap-2">
                    <FaCheck className="text-black shrink-0 text-xs" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Modal Action Buttons */}
            <div className="flex gap-3 pt-2">
              <button
                onClick={() => handleConsultationRedirect(activeModalPillar.title)}
                className="flex-1 py-3 px-6 rounded-full text-xs font-bold text-white bg-black hover:bg-slate-800 transition-all text-center shadow-md"
              >
                Consult on {activeModalPillar.title}
              </button>
              <button
                onClick={() => setActiveModalPillar(null)}
                className="py-3 px-6 rounded-full text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 transition-all"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

const focusAreas = [
  {
    title: "Digital Transformation",
    icon: <FaLaptopCode />,
    body: "Empowering businesses to thrive in an interconnected world. Our expertise in digitalization strategies, data systems, and tech integration keeps organizations agile, efficient, and competitive.",
    features: [
      "Enterprise Digital Readiness Audits",
      "Cloud & API Ecosystem Integration",
      "Data-Driven Strategy & Automation Roadmap"
    ],
  },
  {
    title: "Emerging Technologies",
    icon: <FaMicrochip />,
    body: "Delving into frontiers from hardware & robotics to artificial intelligence and blockchain. We leverage cutting-edge tools to solve real-world problems and fuel breakthrough opportunities.",
    features: [
      "Hardware & Robotics Tinkering Labs",
      "Artificial Intelligence & Machine Learning Prototypes",
      "Emerging Tech Ecosystem Advisory"
    ],
  },
  {
    title: "Green Transitions",
    icon: <FaSeedling />,
    body: "Driving eco-conscious strategies that harmonize technology with environmental sustainability. We catalyze the twin transition—blending green initiatives with digital execution for long-term growth.",
    features: [
      "Eco-Conscious Digital Infrastructure",
      "Twin Transition Framework (Green + Tech)",
      "Sustainable Hardware & E-Waste Program Strategy"
    ],
  },
];

