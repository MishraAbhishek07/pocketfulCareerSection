import Image from "next/image";
import React from "react";
import Logo1 from "@/public/excellence.svg";
import Logo2 from "@/public/teamCollaboration.svg";
import Logo3 from "@/public/trust.svg";
import Logo4 from "@/public/craftsmanship.svg";

const Ourwork = () => {
  return (
    <div className="overflow-x-hidden px-6 lg:px-10">
      <div className="mx-auto max-w-7xl">
        <div className="py-12 lg:py-20 xl:py-24">
          <h2 className="text-center text-3xl font-thin text-black md:text-4xl lg:text-6xl ">
            What We Appreciate In <span className="font-semibold">Our Work</span>
          </h2>
          <p className="mt-2 text-center text-sm font-light text-gray-600 md:text-base lg:mt-3 lg:text-lg xl:mt-4 xl:text-xl">
            We’re all about the details that make a difference.
          </p>
          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:mt-20 xl:mt-28">
        
            {[
              {
                image: Logo3,
                title: "Trust & Ownership",
                description: "Own it from day one. We believe in you.",
              },
              {
                image: Logo2,
                title: "Face-to-Face Wins",
                description: "In-person collaboration for stronger ideas and better connections.",
              },
              {
                image: Logo4,
                title: "Pride in Craft",
                description: "We don’t settle for anything less than our best.",
              },
              {
                image: Logo1,
                title: "Excellence is the Goal",
                description: "We set the bar high and push it even higher.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="relative flex flex-col items-center bg-violet-500 text-white rounded-lg shadow-lg p-6 w-[250px] mx-auto"
              >
                <Image
                  alt={item.title}
                  src={item.image}
                  width={135}
                  height={135}
                  className="w-16 lg:w-24 xl:w-32 mt-6"
                />
                <h3 className="mb-28 mt-8 text-center text-2xl lg:text-3xl font-bold ">
                  {item.title}
                </h3>
                <div className="absolute bottom-1 left-1 right-1 bg-white rounded-b-lg px-4 py-3">
                  <p className="text-[17px] font-normal text-gray-500 text-center ">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourwork;
