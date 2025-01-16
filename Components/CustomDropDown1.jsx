"use Client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function CustomDropDown1() {
  const menu = {
    "Android App": "/googlePlayStore.svg",
    "iOS App": "/appleStore.svg",
    "Web Platform": "/webApplication.svg",
    "Algo API": "/algoTrade.svg",
    "Trade on Charts": "/tradingView.svg",
  };
  return (
    <div className="grid grid-cols-12 mx-auto max-w-[40rem] min-h-[150px]">
      <div className="grid grid-cols-2 col-span-full">
        {Object.keys(menu).map((ele, index) => (
          <Link
            key={index}
            className="flex items-center gap-[12px] no-underline"
            href={"/#"}
          >
            <Image src={menu[ele]} width={35} height={35} alt={ele} />
            <span className="font-semibold text-[#4d5662] text-[13px] not-italic leading-normal">
              {ele}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
}
