import React from "react";

const perksData = [
  {
    number: 1,
    title: "Competitive Compensation Structure",
    description: "We value your hard work – and we pay you like we mean it.",
  },
  {
    number: 2,
    title: "Ownership Opportunities",
    description:
      "Equity is your ticket to growing with us, because when we win, you win.",
  },
  {
    number: 3,
    title: "Growth-Focused Learning",
    description:
      "Stay curious, stay ambitious. Learning is a journey we’re all on together.",
  },
  {
    number: 4,
    title: "Flexibility First",
    description:
      "Enjoy a hybrid work model that gives you the freedom to thrive.",
  },
];

const PerkItem = ({ number, title, description }) => {
  return (
    <div className="relative flex flex-col pb-4 md:flex-row md:gap-x-4 lg:gap-x-6 xl:gap-x-8">
      <p className="self-center text-5xl font-semibold text-purple-500 md:text-6xl lg:text-7xl xl:text-8xl">
        {number}
      </p>
      <div className="mt-3 flex flex-col text-center md:mt-0 md:text-start lg:gap-y-3 xl:gap-y-4">
        <p className="text-base font-semibold text-black md:text-lg lg:text-xl xl:text-2xl">
          {title}
        </p>
        <p className="text-sm font-light text-gray-400 md:text-base lg:text-lg xl:text-xl">
          {description}
        </p>
        <div className="absolute bottom-0 left-1/2 mt-auto w-4/5 max-w-full -translate-x-1/2 border-b border-forthPurpleColor md:left-0 md:w-5/6 md:translate-x-0"></div>
      </div>
    </div>
  );
};

const Simplecard = () => {
  return (
    <div className="overflow-x-hidden px-6 lg:px-10">
      <div className="mx-auto max-w-screen-xl">
        <div className="pb-12 pt-10 lg:pb-30 lg:pt-20 xl:pb-36 xl:pt-24">
          <h2 className="text-center text-3xl font-light text-black md:text-4xl lg:text-6xl ">
            How We've <span className="font-semibold">Got Your Back</span>
          </h2>
          <p className="mt-1 text-center text-sm font-light text-gray-500 md:mt-1 md:text-base lg:mt-3 lg:text-lg xl:mt-4 xl:text-xl">
            Perks that go beyond the usual
          </p>
          <div className="mt-10 flex flex-col gap-y-10 md:mt-14 md:grid md:grid-cols-2 md:gap-y-14 lg:mt-18 lg:gap-x-14 lg:gap-y-18 xl:mt-22 xl:gap-x-18 xl:gap-y-24">
            {perksData.map((perk) => (
              <PerkItem
                key={perk.number}
                number={perk.number}
                title={perk.title}
                description={perk.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Simplecard;
