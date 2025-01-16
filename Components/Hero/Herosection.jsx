"use client";
import { useState, useEffect } from "react";
import BackgroundGrid from "./BackgroundGrid";
import JobCards from "./JobCards";
import CubeImage from "./CubeImage";
import SemiCircleImage from "./SemiCircleImage";
import CTAButton from "./CTAButton";
import cube from "@/public/cube1.svg";
import circle from "@/public/semiCircle1.svg";

const Herosection = () => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [cursorDirection, setCursorDirection] = useState({ x: 0, y: 0 });

  // Track mouse movement only inside Herosection
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;

    // Get the position relative to the Herosection
    const rect = e.currentTarget.getBoundingClientRect();
    const offsetX = clientX - rect.left;
    const offsetY = clientY - rect.top;

    // Update cursor position
    setCursorPosition({ x: offsetX, y: offsetY });

    // Determine the direction of movement
    setCursorDirection({
      x: offsetX - cursorPosition.x,
      y: offsetY - cursorPosition.y,
    });
  };

  return (
    <div
      className="relative flex flex-col md:flex-row items-center justify-center gap-10 h-[90vh]"
      onMouseMove={handleMouseMove} // Add mouse move event listener
    >
      <BackgroundGrid />

      <div className="relative z-10 top-16 flex flex-col items-center text-center md:items-start md:text-start">
        <h1 className="flex flex-col text-4xl font-normal leading-tight md:text-[48px] lg:text-[60px]">
          <span>Shape The Future Of</span>
          <span>
            <span className="font-bold text-purple-700">Finance</span> With Us
          </span>
        </h1>
        <p className="z-50 mt-3 text-lg font-light leading-relaxed text-gray-500 md:text-xl lg:text-2xl">
          Be part of a revolution, making finance smarter, simpler, and open to
          all.
        </p>
        <CTAButton />
      </div>

      {/* Cube and SemiCircle Images without animation */}
      <CubeImage
        src={cube}
        alt="Cube 1"
        width={50}
        height={50}
        className="top-3 left-3 absolute md:hidden"
      />

      <CubeImage
        src={cube}
        alt="Cube 1"
        width={50}
        height={50}
        className="top-3 right-3 absolute md:hidden"
      />

      <CubeImage
        src={cube}
        alt="Cube 2"
        width={50}
        height={50}
        className="bottom-3 right-3 absolute md:hidden"
      />

      <SemiCircleImage
        src={circle}
        alt="Semi Circle 1"
        width={50}
        height={50}
        className="bottom-3 left-3 absolute md:hidden"
      />

      {/* Medium & Large Screen Cubes & SemiCircles */}
      <CubeImage
        src={cube}
        alt="Cube 1"
        width={100}
        height={100}
        className="hidden md:block top-3 left-3 md:pl-10 absolute md:-top-8 md:left-3.5 md:-translate-x-1/2 mt-10"
      />

      <CubeImage
        src={cube}
        alt="Cube 1"
        width={70}
        height={70}
        className="hidden md:block bottom-3 left-3 md:bottom-3 absolute md:top-10 md:left-1/2 md:pl-10 md:-translate-x-1/2 md:mt-20"
      />

      <CubeImage
        src={cube}
        alt="Cube 2"
        width={50}
        height={50}
        className="hidden md:block bottom-3 right-3 absolute md:top-1/2 md:-z-10 md:left-1/2 md:pl-10 -translate-x-1/2 mt-28"
      />

      <SemiCircleImage
        src={circle}
        alt="Semi Circle 1"
        width={70}
        height={70}
        className="hidden md:block bottom-3 left-3 absolute md:bottom-10 md:z-10 md:left-1/2 md:pl-52 -translate-x-1/2 mt-20"
      />

      {/* JobCards (with animation only on larger screens) */}
      <JobCards cursorDirection={cursorDirection} />

      <div className="absolute bottom-0 left-1/2 w-[100%] max-w-none -translate-x-1/2 md:w-full">
        <div className="relative z-10 h-20 translate-y-full bg-gradient-to-b from-white"></div>
      </div>
    </div>
  );
};

export default Herosection;
