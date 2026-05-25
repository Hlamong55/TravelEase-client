import { useState } from "react";

import {
  FiPlus,
  FiMinus,
} from "react-icons/fi";

import {
  FaHeadset,
  FaShieldAlt,
} from "react-icons/fa";

import { MdOutlineSupportAgent } from "react-icons/md";

const faqData = [
  {
    question: "How do I book a vehicle?",
    answer:
      "Choose your preferred vehicle, select your travel date, and confirm the booking instantly through our secure platform.",
  },
  {
    question: "Can I cancel my booking anytime?",
    answer:
      "Yes, bookings can be cancelled before the scheduled pickup time depending on the owner's cancellation policy.",
  },
  {
    question: "Are vehicles verified before listing?",
    answer:
      "Absolutely. Every listed vehicle goes through a verification process to ensure safety and reliability.",
  },
  {
    question: "Is insurance included with rentals?",
    answer:
      "Most vehicles include basic insurance coverage. Additional protection options may also be available.",
  },
  {
    question: "Can I list my own vehicle on TravelEase?",
    answer:
      "Yes! You can easily add your vehicle and start earning by renting it out to verified travelers.",
  },
  {
    question: "How are payments handled?",
    answer:
      "All transactions are securely processed through our trusted payment system for maximum safety.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleToggle = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="py-24 bg-linear-to-br from-slate-50 via-blue-50 to-pink-50 overflow-hidden">

      <div className="max-w-7xl mx-auto px-6">

        {/* TOP */}
        <div className="text-center mb-16">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 font-semibold text-sm mb-6">
            <MdOutlineSupportAgent className="text-lg" />
            24/7 Customer Support
          </div>

          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">
            Frequently Asked
            <span className="text-blue-600"> Questions</span>
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-gray-600 text-lg leading-8 font-medium">
            Everything you need to know about booking vehicles,
            rental policies, payments, and travel experiences
            with TravelEase.
          </p>

        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-5 gap-10 items-start">

          {/* LEFT PANEL */}
          <div
            className="
              lg:col-span-2
              bg-white/80
              backdrop-blur-xl
              border border-gray-200
              rounded-4xl
              p-8
              shadow-[0_10px_40px_rgba(0,0,0,0.06)]
              sticky top-28
            "
          >

            <div className="inline-flex items-center  gap-3 px-5 py-3 rounded-2xl bg-blue-100 border border-blue-200 text-blue-700 text-xl font-bold tracking-wide mb-4 w-full">
            <MdOutlineSupportAgent size={45} />
            24/7 Customer Support
          </div>

            <h3 className="text-3xl font-black tracking-tight text-gray-900 leading-tight">
              Need Any Help?
            </h3>

            <p className="mt-5 text-gray-600 leading-8 font-medium">
              Our support team is always ready to assist you with
              vehicle booking, payment issues, cancellation policies,
              and rental guidance.
            </p>

            {/* SUPPORT FEATURES */}
            <div className="space-y-4 mt-8">

              <div className="flex items-center gap-3 bg-blue-50 border border-blue-100 rounded-2xl p-4">
                <FaShieldAlt className="text-blue-500 text-xl" />

                <p className="font-semibold text-gray-700">
                  Secure & Trusted Booking
                </p>
              </div>

              <div className="flex items-center gap-3 bg-pink-50 border border-pink-100 rounded-2xl p-4">
                <FaHeadset className="text-pink-500 text-xl" />

                <p className="font-semibold text-gray-700">
                  Dedicated Customer Support
                </p>
              </div>

            </div>

            {/* CONTACT BUTTON */}
            <button
              className="
                mt-10 w-full
                bg-linear-to-r from-blue-500 to-sky-500
                hover:from-blue-600 hover:to-sky-600
                text-white
                py-4 rounded-2xl
                font-bold text-lg
                transition-all duration-300
                shadow-lg shadow-blue-200
                hover:scale-[1.02]
              "
            >
              Contact Support
            </button>

          </div>

          {/* FAQ RIGHT SIDE */}
          <div className="lg:col-span-3 space-y-5">

            {faqData.map((faq, index) => {
              const isOpen = activeIndex === index;

              return (
                <div
                  key={index}
                  className={`
                    bg-white
                    border rounded-[28px]
                    overflow-hidden
                    transition-all duration-300
                    shadow-sm hover:shadow-xl
                    ${
                      isOpen
                        ? "border-blue-200 shadow-blue-100"
                        : "border-gray-200"
                    }
                  `}
                >

                  {/* QUESTION */}
                  <button
                    onClick={() => handleToggle(index)}
                    className="
                      w-full
                      flex items-center justify-between
                      gap-5
                      text-left
                      px-7 py-6
                    "
                  >

                    <h3 className="text-lg md:text-xl font-bold text-gray-900 leading-8">
                      {faq.question}
                    </h3>

                    <div
                      className={`
                        min-w-12 min-h-12
                        rounded-2xl
                        flex items-center justify-center
                        transition-all duration-300
                        ${
                          isOpen
                            ? "bg-blue-500 text-white rotate-180"
                            : "bg-gray-100 text-gray-700"
                        }
                      `}
                    >
                      {isOpen ? (
                        <FiMinus size={22} />
                      ) : (
                        <FiPlus size={22} />
                      )}
                    </div>

                  </button>

                  {/* ANSWER */}
                  <div
                    className={`
                      grid transition-all duration-500 ease-in-out
                      ${
                        isOpen
                          ? "grid-rows-[1fr] opacity-100"
                          : "grid-rows-[0fr] opacity-0"
                      }
                    `}
                  >

                    <div className="overflow-hidden">

                      <div className="px-7 pb-7">

                        <div className="border-t border-gray-200 pt-5">

                          <p className="text-gray-600 leading-8 font-medium text-base">
                            {faq.answer}
                          </p>

                        </div>

                      </div>

                    </div>

                  </div>

                </div>
              );
            })}

          </div>

        </div>

      </div>

    </section>
  );
};

export default FAQ;