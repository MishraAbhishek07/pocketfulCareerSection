import Image from "next/image";
import card1 from "@/public/jobCard1.svg";
import card2 from "@/public/jobCard2.svg";
import card3 from "@/public/jobCard3.svg";
import card4 from "@/public/jobCard4.svg";

const JobCards = ({ cursorDirection }) => {
  const jobCards = [
    {
      src: card1,
      alt: "job card 1",
      className:
        "absolute right-0 aspect-auto w-[134px] lg:w-[169px] xl:w-auto",
    },
    {
      src: card2,
      alt: "job card 2",
      className:
        "absolute bottom-0 aspect-auto w-[134px] lg:w-[169px] xl:w-auto",
    },
    {
      src: card3,
      alt: "job card 3",
      className:
        "absolute bottom-0 right-0 aspect-auto w-[190px] lg:w-[240px] xl:w-auto",
    },
    {
      src: card4,
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
      {jobCards.map((card, index) =>
        card.src ? (
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
        ) : null
      )}
    </div>
  );
};

export default JobCards;
