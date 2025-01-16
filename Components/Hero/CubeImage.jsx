// CubeImage.js
import Image from "next/image";

const CubeImage = ({ src, alt, width, height, className }) => {
  return (
    <div className={`absolute ${className}`}>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="aspect-auto"
        priority
      />
    </div>
  );
};

export default CubeImage;
