import React from "react";
import Vcard from "./Vcard";

const ValuesCard = ({ valuecard }) => {
  return (
    <>
      <div className="text-center mt-14">
        <h2 className="text-center text-3xl font-light text-black md:text-[32px] lg:text-[56px]">
          <span className="font-thin">United By A </span>
          <span className="font-medium">Shared Vision</span>
        </h2>
        <p className="mt-[4px] flex flex-col text-center text-sm font-light text-primaryParaColor md:mt-[4px] lg:mt-[12px] lg:text-lg ">
          <span>
            At Pocketful, we’re more than just coworkers; we’re a team on a
            mission.
          </span>
        </p>
      </div>

      <h1 className="text-center font-bold text-2xl my-8">
        Our Core Values in Action
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-y-10 p-6 place-items-center">
        {valuecard.map((value, index) => (
          <Vcard
            key={index}
            img={value.img}
            heading={value.heading}
            paragraph={value.paragraph}
            className="w-full"
          />
        ))}
      </div>
    </>
  );
};

export default ValuesCard;
