import Image from "next/image";
import React from "react";

const Vcard = ({ heading, img, paragraph, className = "" }) => {
  return (
    <div
      className={`border max-w-[300px] md:w-auto md:min-w-[300px] min-h-[220px] md:min-h-[240px] rounded-lg flex flex-col items-center md:items-start justify-center md:justify-start p-4 px-5 mx-auto ${className}`}
      style={{
        boxShadow:
          "0 4px 8px rgba(0, 0, 0, 0.1), 0 8px 16px rgba(0, 0, 0, 0.1)",
      }}
    >
      {/* Image */}
      <Image
        src={img}
        alt="logo"
        height={140}
        width={140}
        className="object-contain md:pl-5 mb-2"
      />
      {/* Heading */}
      <h1 className="text-xl font-semibold mb-1 md:text-left md:pl-5 text-center">
        {heading}
      </h1>
      {/* Paragraph */}
      <p className="text-sm font-semibold text-gray-600 md:pl-5 md:text-left text-center md:block mb-3">
        {paragraph}
      </p>
    </div>
  );
};

export default Vcard;
