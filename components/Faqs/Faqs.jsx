"use client";
import { useState } from "react";

const Faqs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faq = [
    {
      question: "What's it like working at Pocketful?",
      answer:
        "We’re all about making things happen. Expect lots of collaboration, personal growth, and a friendly environment where your ideas matter.",
    },
    {
      question: "How do I apply for a role?",
      answer:
        "Visit our careers page, select the role that fits your skills, and submit your application.",
    },
    {
      question: "What kind of growth opportunities can I expect?",
      answer:
        "You’ll have access to training, mentorship, and opportunities to work on impactful projects that help you grow personally and professionally.",
    },
    {
      question: "Do you offer any special perks?",
      answer:
        "Yes, we offer flexible work schedules, wellness programs, and team-building activities, among other perks.",
    },
    {
      question: "Can I work remotely?",
      answer:
        "Yes, we support remote work for many roles, ensuring flexibility and work-life balance.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="overflow-x-hidden px-6 lg:px-10 bg-white py-10">
      <div className="mx-auto max-w-screen-xl">
        <div className="pb-10 pt-5 md:pt-8 lg:pb-16 xl:pb-20">
          <h2 className="text-center text-3xl font-light text-gray-800 md:text-4xl lg:text-5xl xl:text-6xl">
            <span className="font-bold">FAQ's</span>
          </h2>
          <div className="mt-8 space-y-6 md:mt-10 lg:mt-12 lg:space-y-8 xl:mt-16 xl:space-y-10">
            {faq.map((faq, index) => (
              <div key={index}>
                {/* Question */}
                <div
                  className="flex items-center justify-between rounded-md px-4 py-3 shadow-md cursor-pointer bg-white transition-all duration-300"
                  onClick={() => toggleFAQ(index)}
                >
                  <h3 className="text-base font-semibold text-gray-800 md:text-lg lg:text-xl xl:text-2xl">
                    {faq.question}
                  </h3>
                  <svg
                    className={`h-6 w-6 transform transition-transform duration-300 ${
                      activeIndex === index ? "rotate-45" : "rotate-0"
                    }`}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18 13h-5v5c0 .55-.45 1-1 1s-1-.45-1-1v-5H6c-.55 0-1-.45-1-1s.45-1 1-1h5V6c0-.55.45-1 1-1s1 .45 1 1v5h5c.55 0 1 .45 1 1s-.45 1-1 1z"
                      fill="currentColor"
                    />
                  </svg>
                </div>
                {/* Answer */}
                <div
                  className={`mt-2 rounded-md text-gray-100 bg-purple-800 px-4 py-3 text-sm font-medium md:text-base lg:text-lg xl:text-xl shadow-inner overflow-hidden transition-all duration-00 ease-in-out`}
                  style={{
                    height: activeIndex === index ? "auto" : 0,
                    opacity: activeIndex === index ? 1 : 0,
                    transform:
                      activeIndex === index ? "scaleY(1)" : "scaleY(0)",
                    transformOrigin: "top",
                  }}
                >
                  {faq.answer}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Faqs;
