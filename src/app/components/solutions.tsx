"use client";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import React, { useState } from "react";

export default function Solutions() {
  const [currentSolution, setCurrentSolution] = useState(0);

  const { title, image, body } = solutions[currentSolution];

  const handlePrevSolution = () => {
    setCurrentSolution((prev) =>
      prev === 0 ? solutions.length - 1 : prev - 1
    );
  };

  const handleNextSolution = () => {
    setCurrentSolution((prev) =>
      prev === solutions.length - 1 ? 0 : prev + 1
    );
  };
  return (
    <div className="px-20 lg:px-40">
      <p className="font-bold text-center text-sm">WHAT ARE OUR SOLUTIONS?</p>
      <br />
      <div className="flex-col sm:flex-row flex gap-10 h-auto lg:max-h-72 xl:max-h-56">
        <div className="size-24 w-full sm:w-1/2 sm:size-auto">
          <img
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
            height={600}
            width={600}
            alt="solution"
            src={image}
          />
        </div>
        <div className="w-full sm:w-1/2 flex flex-col justify-between items-center sm:items-start">
          <p className="font-playfair">
            <b>{title}</b> {body}
          </p>
          <div className="flex mt-5 gap-5">
            <div className="arrow" onClick={handlePrevSolution}>
              <MdArrowBackIos />
            </div>
            <div className="arrow" onClick={handleNextSolution}>
              <MdArrowForwardIos />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

const solutions = [
  {
    title: "Future-Ready Learning",
    image: "/learning.jpg",
    body: "by empowering learners, innovators, entrepreneurs, and businesses with essential skills in emerging technologies for the future of work. Our STEAM Education fosters an innovative culture, identifying bright minds and equipping young learners with skills for the future. Additionally, we offer think-tank advisory services in STEAM Education.",
  },
  {
    title: "Strategic Tech Consulting",
    image: "/tech-consulting.jpg",
    body: "by supporting businesses in digital transformation, innovation strategy, and development through our technology consulting services. Our Innovation Research identifies an organization's potential areas of innovation and recommends strategic directions for growth.",
  },
  {
    title: "Innovative Funding Solutions",
    image: "/funding.jpg",
    body: "by connecting innovative start-ups and innovators with potential investors to fuel their growth. Our Funding and Investment services create opportunities for promising ideas to thrive.",
  },
];
