"use client";
import React from "react";
import { FaBriefcase, FaCoins, FaLaptopCode, FaArrowRight } from "react-icons/fa6";
import { getAssetPath } from "@/lib/utils";

export default function Services() {
  const handleRequestConsultation = () => {
    const contactSection = document.getElementById("contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-16 lg:py-24 max-w-7xl mx-auto px-6 lg:px-12">
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
        <span className="text-xs font-extrabold tracking-widest text-slate-600 uppercase">
          What We Do
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
          Comprehensive Services for Digital & Hardware Excellence
        </h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          At GlobalX, we close critical gaps in digital skills, startup funding, and organizational innovation. We support students, developers, and enterprises in unlocking expertise in emerging technologies.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {serviceItems.map((service) => (
          <article
            key={service.title}
            className="flex flex-col justify-between overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-md hover:shadow-xl hover:border-black transition-all group"
          >
            <div className="space-y-4">
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-900">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  alt={service.title}
                  src={getAssetPath(service.image)}
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 flex items-center gap-2 text-white font-bold text-base">
                  <div className="p-2 rounded-xl bg-black/60 backdrop-blur-md border border-white/20">
                    {service.icon}
                  </div>
                  <span>{service.title}</span>
                </div>
              </div>

              <div className="p-6 space-y-2">
                <p className="text-sm text-slate-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>

            <div className="p-6 pt-0">
              <button
                type="button"
                onClick={handleRequestConsultation}
                className="inline-flex items-center gap-2 text-xs font-bold text-black hover:text-slate-700 transition-colors"
              >
                Request Consultation <FaArrowRight className="text-[10px] transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const serviceItems = [
  {
    title: "Strategic Consulting",
    icon: <FaBriefcase />,
    image: "/consulting.png",
    description: "Tailored innovation roadmaps, digital readiness audits, green transition strategies, and tech architecture for corporate and institutional clients.",
  },
  {
    title: "Venture Investments",
    icon: <FaCoins />,
    image: "/investments.png",
    description: "Capital matching, grant facilitation, and angel ecosystem connectivity for early-stage and growth-ready hardware & tech startups.",
  },
  {
    title: "Digital & STEAM Skilling",
    icon: <FaLaptopCode />,
    image: "/skilling.png",
    description: "Hands-on tinkering labs, robotics workshops, hardware skilling bootcamps, and STEAM club implementations for schools and community hubs.",
  },
];


