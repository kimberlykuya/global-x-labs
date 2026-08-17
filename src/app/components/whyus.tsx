"use client";
import React from "react";
import { FaAward, FaLightbulb, FaGlobe } from "react-icons/fa6";

export default function WhyUs() {
  return (
    <section className="py-16 lg:py-20 max-w-7xl mx-auto px-6 lg:px-12  text-black rounded-3xl my-8 shadow-xs">
      <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
        <span className="text-xs font-extrabold tracking-widest text-slate-600 uppercase">
          Why Partner With GlobalX?
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-black">
          Delivering Real Innovation, Growth & Impact
        </h2>
        <p className="text-sm sm:text-base text-slate-700">
          We combine domain expertise, emerging tech capabilities, and sustainable strategy to deliver end-to-end transformation.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {whyUsItems.map((item, index) => (
          <article
            key={index}
            className="flex flex-col justify-between p-8 rounded-2xl bg-white border border-slate-200 shadow-md hover:shadow-xl hover:border-black transition-all space-y-4"
          >
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center text-xl font-bold">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-black">{item.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">
                {item.body}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

const whyUsItems = [
  {
    title: "Deep Domain Expertise",
    icon: <FaAward />,
    body: "Our team comprises seasoned professionals with deep expertise in green initiatives, hardware innovation, and digital strategy. Whether you want to establish an innovation hub, tinkering lab, or STEAM program, we provide end-to-end guidance.",
  },
  {
    title: "Continuous Tech Innovation",
    icon: <FaLightbulb />,
    body: "We stay ahead of the curve by exploring emerging avenues in AI, IoT, and digital skilling to propel businesses and learners toward sustainable, future-proof success.",
  },
  {
    title: "Measurable Social & Environmental Impact",
    icon: <FaGlobe />,
    body: "Beyond immediate returns, we prioritize social enrichment and environmental stewardship—aligning your organization with responsible practices that benefit society.",
  },
];


