"use client";
import React from "react";
import { FaLinkedinIn, FaXTwitter, FaUserGraduate, FaBriefcase, FaDiagramProject } from "react-icons/fa6";

export default function Team() {
  return (
    <section id="team" className="py-16 lg:py-24 max-w-7xl mx-auto px-6 lg:px-12">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
        <span className="text-xs font-extrabold tracking-widest text-slate-600 uppercase">
          Leadership & Ecosystem
        </span>
        <h2 className="text-3xl sm:text-4xl font-extrabold text-black tracking-tight">
          The Minds Driving GlobalX Forward
        </h2>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          GlobalX was born out of a vision to reshape how we approach education, entrepreneurship, and technology in Africa and beyond.
        </p>
      </div>

      {/* Core Leadership Grid */}
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {teamMembers.map((member) => (
          <article
            key={member.name}
            className="flex flex-col sm:flex-row items-center gap-6 p-6 rounded-3xl border border-slate-200 bg-white shadow-md hover:shadow-xl hover:border-black transition-all group"
          >
            <div className="w-28 h-28 shrink-0 overflow-hidden rounded-2xl border-2 border-slate-200 group-hover:border-black transition-colors shadow-xs">
              <img
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                src={member.image}
                alt={member.name}
              />
            </div>
            <div className="space-y-2 text-center sm:text-left">
              <div>
                <h3 className="text-xl font-bold text-black">{member.name}</h3>
                <p className="text-xs font-bold text-slate-600 uppercase tracking-wider">{member.title}</p>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">{member.bio}</p>
              <div className="flex justify-center sm:justify-start gap-3 pt-2">
                {member.socials.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-full bg-slate-100 text-slate-900 hover:bg-black hover:text-white transition-colors"
                    aria-label={`${member.name}'s profile`}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </article>
        ))}
      </div>

      {/* Advisory & Ecosystem Network */}
      <div className="mt-20 pt-12 border-t border-slate-200">
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-10">
          <h3 className="text-2xl font-bold text-black">
            Advisors & Specialist Network
          </h3>
          <p className="text-sm text-slate-600">
            We collaborate with a broader network of educators, strategic consultants, and technical project managers across STEAM education and innovation delivery.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {networkRoles.map((role) => (
            <div
              key={role.title}
              className="p-6 rounded-2xl border border-slate-200 bg-white shadow-xs hover:shadow-md hover:border-black transition-all space-y-3"
            >
              <div className="w-12 h-12 rounded-xl bg-black text-white flex items-center justify-center text-xl font-bold">
                {role.icon}
              </div>
              <h4 className="text-lg font-bold text-black">{role.title}</h4>
              <p className="text-xs text-slate-600 leading-relaxed">{role.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const teamMembers = [
  {
    name: "Sylvia Mukasa",
    image: "/sylvia.png",
    title: "Founder & Lead Director",
    bio: "Pioneering technology leader advocating for STEAM education, digital transformation, and green transitions across Africa.",
    socials: [
      { link: "https://www.twitter.com/sylviamukasa", icon: <FaXTwitter /> },
      { link: "https://www.linkedin.com/in/sylviamukasa/", icon: <FaLinkedinIn /> },
    ],
  },
  {
    name: "Kimberly Kuya",
    image: "/kim.jpg",
    title: "Technical Lead",
    bio: "Specializing in software engineering, emerging technology architecture, and digital product delivery.",
    socials: [
      { link: "https://www.linkedin.com/in/kimberly-kuya/", icon: <FaLinkedinIn /> },
    ],
  },
];

const networkRoles = [
  {
    title: "STEAM Educators",
    icon: <FaUserGraduate />,
    description: "Certified trainers and mentors facilitating robotics, hardware tinkering, and interactive science curriculum for schools.",
  },
  {
    title: "Strategic Consultants",
    icon: <FaBriefcase />,
    description: "Industry leaders providing advisory on corporate green transitions, digitalization strategy, and startup ecosystem growth.",
  },
  {
    title: "Project & Innovation Delivery",
    icon: <FaDiagramProject />,
    description: "Technical leads coordinating hub setups, lab installations, and partner programs across regional innovation centers.",
  },
];


