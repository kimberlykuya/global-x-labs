"use client";
import React, { useState } from "react";
import { FaGraduationCap, FaChartLine, FaHandHoldingDollar, FaArrowRight } from "react-icons/fa6";

export default function Solutions() {
  const [activeCategory, setActiveCategory] = useState("all");

  const handleInquire = (targetInterest: string) => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const filteredSolutions = activeCategory === "all"
    ? solutions
    : solutions.filter((s) => s.category === activeCategory);

  return (
    <section id="solutions" className="py-16 lg:py-24 max-w-7xl mx-auto px-6 lg:px-12">
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-10">
        <span className="text-xs font-extrabold tracking-widest text-slate-600 uppercase">
          End-to-End Strategic Offerings
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
          Targeted Solutions for Sustainable Growth
        </h2>
        <p className="text-sm sm:text-base text-slate-700">
          From equipping young minds with future-ready STEAM skills to guiding enterprise digital transformation and connecting startups with growth funding.
        </p>

        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          <button
            onClick={() => setActiveCategory("all")}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
              activeCategory === "all"
                ? "bg-black text-white shadow-md"
                : "bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-300"
            }`}
          >
            All Solutions
          </button>
          <button
            onClick={() => setActiveCategory("learning")}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
              activeCategory === "learning"
                ? "bg-black text-white shadow-md"
                : "bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-300"
            }`}
          >
            STEAM & Education
          </button>
          <button
            onClick={() => setActiveCategory("consulting")}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
              activeCategory === "consulting"
                ? "bg-black text-white shadow-md"
                : "bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-300"
            }`}
          >
            Enterprise Consulting
          </button>
          <button
            onClick={() => setActiveCategory("funding")}
            className={`px-5 py-2 rounded-full text-xs font-bold transition-all ${
              activeCategory === "funding"
                ? "bg-black text-white shadow-md"
                : "bg-slate-100 text-slate-800 hover:bg-slate-200 border border-slate-300"
            }`}
          >
            Investment & Capital
          </button>
        </div>
      </div>

      {/* Solutions Cards Grid */}
      <div className="grid gap-8 md:grid-cols-3">
        {filteredSolutions.map((solution) => (
          <article
            key={solution.title}
            className="flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md hover:shadow-xl hover:border-black transition-all group"
          >
            <div className="space-y-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt={solution.title}
                  src={solution.image}
                />
                <div className="absolute top-4 left-4">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[11px] font-bold text-white bg-black/80 backdrop-blur-md shadow-md">
                    {solution.icon}
                    {solution.badgeText}
                  </span>
                </div>
              </div>

              <div className="p-6 space-y-3">
                <h3 className="text-xl font-bold text-black leading-snug">
                  {solution.title}
                </h3>
                <p className="text-sm leading-relaxed text-slate-600">
                  {solution.body}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                type="button"
                onClick={() => handleInquire(solution.title)}
                className="inline-flex items-center gap-2 text-xs font-bold text-black hover:text-slate-700 transition-colors"
              >
                Inquire About Solution <FaArrowRight className="text-[10px] transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const solutions = [
  {
    title: "Future-Ready STEAM Learning",
    category: "learning",
    badgeText: "Education",
    icon: <FaGraduationCap />,
    image: "/learning.jpg",
    body: "Empowering learners, innovators, educators, and institutions with hands-on skills in emerging technologies. Our STEAM programs establish tinkering labs, STEM clubs, and advisory services for schools.",
  },
  {
    title: "Strategic Tech & Digital Consulting",
    category: "consulting",
    badgeText: "Enterprise",
    icon: <FaChartLine />,
    image: "/tech-consulting.jpg",
    body: "Supporting organizations in digital transformation, innovation strategy, and emerging tech development. Our research identifies untapped growth avenues and recommends actionable directions.",
  },
  {
    title: "Innovative Capital & Funding Solutions",
    category: "funding",
    badgeText: "Startup Growth",
    icon: <FaHandHoldingDollar />,
    image: "/funding.jpg",
    body: "Connecting high-potential startups and founders with strategic investor networks, grant opportunities, and incubation support to turn bold concepts into scaled enterprises.",
  },
];


