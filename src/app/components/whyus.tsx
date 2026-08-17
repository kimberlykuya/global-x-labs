"use client";
import React from "react";

export default function WhyUs() {
  return (
    <div className="px-20 lg:px-40">
        <img
        src="https://i.pinimg.com/564x/a3/9f/aa/a39faac3c37be3ddd8f164a8ec77c558.jpg"
        alt=""
        style={{ objectFit: "cover" }}
        className="w-screen h-60"
      />
      <br/>
      <p className="font-bold text-center text-sm">WHY CHOOSE US?</p>
      <br />
      <div className="flex-col lg:flex-row flex gap-10 h-auto lg:max-h-72 xl:max-h-56">
      {focus.map((item, index) => (
          <div key={index} className="flex flex-col items-center lg:w-1/3"> 
            <p className="font-playfair">
              <b>{item.title}</b> {item.body}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

const focus = [
  {
    title: "Expertise",
    body: "Our team comprises seasoned professionals with a deep understanding of both green initiatives and digital technologies, ensuring holistic solutions tailored to your unique needs. If you want to establish an innovation hub or lab, tinkering labs for schools, institutions or community centres, start a STEM Club, STEAM education we are at your service.    ",
  },
  {
    title: "Innovation",
    body: "We stay ahead of the curve, continuously exploring new avenues and embracing emerging technologies to propel your business towards sustainable success.    ",
  },
  {
    title: "Impact",
    body: "Beyond profitability, we prioritize social and environmental impact, aligning your organization with sustainable practices that benefit both society and the planet.",
  },
];
