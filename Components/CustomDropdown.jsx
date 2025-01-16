"use Client";
import React, { useEffect } from "react";

export const ChevronDown = ({ fill, size, height, width, ...props }) => {
  return (
    <svg
      fill="none"
      height={size || height || 24}
      viewBox="0 0 24 24"
      width={size || width || 24}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M8.95 19.92l6.52-6.52c.77-.77.77-2.03 0-2.8L8.95 4.08"
        stroke={fill}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

const CustomDropdown = ({ menuItems, selectedMenu, setSelectedMenu }) => {
  useEffect(() => {
    setSelectedMenu(Object.keys(menuItems)[0]);
  }, []);
  return (
    <div className="grid grid-cols-12 md:mx-auto max-md:py-[10px] md:max-w-[40rem] md:min-h-[150px]">
      <div className="flex flex-col col-span-5 md:px-[10px] max-md:pr-2 border-r border-black/10">
        {Object.entries(menuItems).map((item, index) => (
          <div
            key={index}
            onMouseEnter={() => setSelectedMenu(item[0])}
            className={`flex justify-between items-center ${
              selectedMenu === item[0]
                ? "bg-[rgba(83,45,244,0.1)] border text-[#5300f4] border-[rgba(83,0,244,0.5)] rounded-[10px]"
                : "border border-transparent"
            } text-[#616161] cursor-pointer text-[13px] font-semibold max-md:py-3 max-md:px-2 md:px-[12px] md:py-[14px]`}
          >
            {item[0]} <ChevronDown fill="currentColor" size={16} />
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-[10px] col-span-7 px-[10px]">
        {menuItems[selectedMenu]?.map((ele, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="relative pl-[20px] font-semibold text-[#4d5662] text-[13px] cursor-pointer">
              {ele}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomDropdown;
