import Image from "next/image";

const JobCards = ({ cursorDirection }) => {
  const jobCards = [
    {
      src: "https://content.pocketful.in/seoCareersImages/svg/jobCard1.svg",
      alt: "job card 1",
      className: "absolute right-0 aspect-auto w-[134px] lg:w-[169px] xl:w-auto",
    },
    {
      src: "https://content.pocketful.in/seoCareersImages/svg/jobCard2.svg",
      alt: "job card 2",
      className: "absolute bottom-0 aspect-auto w-[134px] lg:w-[169px] xl:w-auto",
    },
    {
      src: "https://content.pocketful.in/seoCareersImages/svg/jobCard3.svg",
      alt: "job card 3",
      className: "absolute bottom-0 right-0 aspect-auto w-[190px] lg:w-[240px] xl:w-auto",
    },
    {
      src: "https://content.pocketful.in/seoCareersImages/svg/jobCard4.svg",
      alt: "job card 4",
      className:
        "absolute left-10 top-10 aspect-auto w-[190px] lg:left-14 lg:top-14 lg:w-[240px] xl:left-16 xl:top-16 xl:w-auto",
    },
  ];

  // Destructure cursor direction
  const { x, y } = cursorDirection;

  return (
    <div
      style={{ transformStyle: "preserve-3d" }}
      className="relative z-10 mt-10 h-[300px] w-[320px] md:block lg:h-[450px] lg:w-[480px]"
    >
      {jobCards.map((card, index) => (
        <Image
          key={index}
          src={card.src}
          alt={card.alt}
          style={{
            transformStyle: "preserve-3d",
            willChange: "transform",
            // Apply transformation based on mouse movement
            transform: `translateX(${x / 3}px) translateY(${y / 3}px)`,
            transition: "transform 0.2s ease-out",
          }}
          className={`transition-transform duration-300 ease-in-out transform hover:scale-105 ${card.className}`}
          width={240}
          height={240}
          priority
        />
      ))}
    </div>
  );
};

export default JobCards;
