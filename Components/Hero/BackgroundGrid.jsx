import Image from "next/image";
import grid from "@/public/grid.svg";

const BackgroundGrid = () => (
  <div className="absolute left-1/2 top-0 w-[100%] max-w-none -translate-x-1/2 md:w-[100%]">
    <Image
      src={grid}
      alt="Hero section grid"
      className="opacity-25 md:opacity-15"
      width={1200}
      height={800}
    />
    <div className="h-80 -translate-y-full bg-gradient-to-t from-white"></div>
  </div>
);

export default BackgroundGrid;
