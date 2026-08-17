"use client";
import React from "react";
import { FaHandshake, FaBullseye, FaGlobe } from "react-icons/fa6";

export default function About() {
  return (
    <section id="about" className="py-16 lg:py-24 max-w-7xl mx-auto px-6 lg:px-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full  text-black text-xs font-bold tracking-widest uppercase">
          Welcome to GlobalX Innovation Labs
        </div>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
          Inspiring, Empowering & Connecting Global Innovators
        </h2>
        <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
          At GlobalX Innovation Labs, we believe in the transformative power of innovation to reshape industries, solve complex challenges, and foster sustainable economic progress.
        </p>
      </div>

      {/* Core Mission Cards */}
      <div className="mt-12 grid md:grid-cols-2 gap-8">
        <div className="p-8 rounded-3xl border border-slate-200 bg-white shadow-md hover:shadow-xl transition-all space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center text-xl font-bold">
            <FaBullseye />
          </div>
          <h3 className="text-xl font-bold text-black">Our Strategic Purpose</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            Our mission is to <strong>MAKE INNOVATIONS HAPPEN</strong> by building dynamic hubs where bold ideas flourish, hardware and software converge, and creative talent thrives. Whether you are a startup aiming to disrupt traditional markets or a corporation driving internal transformation, we provide the platform to scale.
          </p>
        </div>

        <div className="p-8 rounded-3xl border border-slate-200 bg-white shadow-md hover:shadow-xl transition-all space-y-4">
          <div className="w-12 h-12 rounded-2xl bg-black text-white flex items-center justify-center text-xl font-bold">
            <FaGlobe />
          </div>
          <h3 className="text-xl font-bold text-black">The Twin Transition Approach</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            We operate at the intersection of <strong>Green Initiatives</strong> and <strong>Digital Transformation</strong>. By harmonizing eco-conscious practices with advanced technologies like AI, IoT, and hardware skilling, we prepare businesses and learners for a resilient, sustainable future.
          </p>
        </div>
      </div>

      {/* Verified Partners Showcase */}
      <div className="mt-16 pt-12 border-t border-slate-200">
        <div className="text-center space-y-2 mb-8">
          <p className="text-xs font-extrabold tracking-widest text-slate-600 uppercase">
            Trusted Ecosystem & Partners
          </p>
          <h3 className="text-xl font-bold text-black">Collaborating with Leading Organizations</h3>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {partners.map((partner) => (
            <div
              key={partner.name}
              className="aspect-square flex items-center justify-center p-6 rounded-2xl border border-slate-200 bg-white shadow-xs hover:shadow-md hover:border-black transition-all text-center group"
            >
              <img
                className="max-h-16 max-w-[80%] object-contain filter grayscale group-hover:grayscale-0 transition-all"
                src={partner.logo}
                alt={partner.name}
              />
            </div>
          ))}
        </div>


      </div>
    </section>
  );
}

const partners = [
  {
    name: "BMW Foundation",
    category: "Global Leadership Partner",
    logo: "/bmw-foundation.png",
  },
  {
    name: "PowerToFly",
    category: "Global Inclusion Partner",
    logo: "/powertofly.png",
  },
  {
    name: "East Africa Com",
    category: "Tech & Telecom Ecosystem",
    logo: "/east-africa-com.svg",
  },
  {
    name: "Women In Tech Africa",
    category: "Innovation & Skilling Network",
    logo: "/women-in-tech-africa.svg",
  },
];



