"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import team from "@/app/assets/team-age.svg";
import coffee from "@/app/assets/coffee.svg";
import lunches from "@/app/assets/lunches.svg";
import age from "@/app/assets/team-age.svg";
import { useInView } from "react-intersection-observer";

const Perkcards = () => {
  return (
    <div className="overflow-x-hidden px-6 lg:px-10 bg-purple-700">
      <div className="mx-auto max-w-[83rem]">
        <div className="pb-12 pt-14 text-white md:pb-16 md:pt-11 lg:pb-20 lg:pt-14 xl:pb-24 xl:pt-16">
          <h2 className="text-center text-3xl font-light text-white md:text-4xl lg:text-6xl ">
            <span>A Glimpse into </span>
            <span className="font-semibold">Our Culture</span>
          </h2>
          <p className="mt-1 text-center text-sm font-light text-white md:mt-1 md:text-base lg:mt-3 lg:text-lg xl:mt-4 xl:text-xl">
            It&apos;s not all work. At Pocketful, we know how to keep things
            light.
          </p>
          <div className="mt-[70px] flex flex-col items-center md:mt-[32px] md:flex-row md:items-end md:justify-between lg:mt-[58px] xl:mt-[68px]">
            <Section
              imgSrc={coffee}
              title="Coffees Brewed"
              count={42689}
              delay={0}
            />
            <div className="my-10 h-px w-full bg-white/30 md:hidden"></div>
            <Section
              imgSrc={team}
              title="Brainstorming Huddles"
              count={34}
              delay={400}
            />
            <div className="my-10 h-px w-full bg-white/30 md:hidden"></div>
            <Section
              imgSrc={lunches}
              title="Team Lunches Enjoyed"
              count={39}
              delay={800}
            />
            <div className="my-10 h-px w-full bg-white/30 md:hidden"></div>
            <Section
              imgSrc={age}
              title="Average Team Age"
              count={26}
              delay={1200}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Section = ({ imgSrc, title, count, delay }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.5,
  });

  const [currentCount, setCurrentCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    if (inView) {
      const timeout = setTimeout(() => {
        setIsVisible(true);
        const interval = setInterval(() => {
          setCurrentCount((prev) => {
            if (prev < count) {
              return prev + Math.ceil(count / 100);
            } else {
              clearInterval(interval);
              return count;
            }
          });
        }, 15);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [inView, count, delay]);

  return (
    <div
      ref={ref}
      className={`flex flex-col items-center transition-transform duration-[1200ms] ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-40"
      }`}
    >
      <Image
        alt={title}
        src={imgSrc}
        width={count === 42689 ? 114 : 160}
        height={160}
        className="aspect-auto"
      />
      <p className="mt-4 w-[130px] text-center text-[36px] font-bold leading-snug lg:mt-5 lg:w-[180px] lg:text-[50px] xl:w-[220px] xl:text-[64px]">
        {currentCount}
      </p>
      <p className="text-base font-normal lg:text-lg xl:text-xl">{title}</p>
    </div>
  );
};

export default Perkcards;
