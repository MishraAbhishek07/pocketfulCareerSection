// GridImageComponent.js
import Image from 'next/image';

const GridImageComponent = ({ src, alt, className }) => {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        className="aspect-auto w-full rotate-180 opacity-15"
        layout="responsive"  // Automatically adjusts for responsive images
        width={1200}
        height={800}
        priority
      />
    </div>
  );
};

export default GridImageComponent;
