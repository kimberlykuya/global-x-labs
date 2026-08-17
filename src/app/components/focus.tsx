"use client";
import React from "react";
import Image from "next/image";

export default function Focus() {
  return (
    <div className="px-20 lg:px-40">
      <img
        src="https://i.pinimg.com/564x/3f/06/24/3f0624ab76cd688a899dbe9f19b42d5b.jpg"
        alt=""
        style={{ objectFit: "cover" }}
        className="w-screen h-60"
      />
      <br />
      <p className="font-bold text-center text-sm">OUR FOCUS</p>
      <br />
      <div className="flex-col lg:flex-row flex gap-10 h-auto">
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
    title: "Digital Transformations",
    body: "By embracing the digital age, we empower businesses to thrive in an increasingly interconnected world. Our expertise in digitalization strategies and data-driven decision-making ensures your organization remains agile and competitive.",
  },
  {
    title: "Emerging Technologies",
    body: "As pioneers of innovation, we delve into the realms of emerging technologies, exploring their transformative potential. From blockchain to artificial intelligence, we leverage cutting-edge solutions to revolutionize industries and drive unparalleled growth.",
  },
  {
    title: "Green Transitions",
    body: "We specialize in driving eco-conscious strategies that harmonize with nature while optimizing performance. We are committed to catalyze the twin transition—the seamless integration of green initiatives and digital transformation - paving the way towards a brighter, more sustainable future. We're committed to fostering sustainability at every step.",
  },
];
