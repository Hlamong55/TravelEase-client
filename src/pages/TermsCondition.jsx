import React from "react";

import {
  FaFileContract,
  FaCarSide,
  FaMoneyBillWave,
  FaBan,
  FaUserShield,
  FaExclamationTriangle,
} from "react-icons/fa";

const termsSections = [
  {
    icon: <FaFileContract />,
    title: "Acceptance of Terms",
    text: "By using TravelEase, users agree to comply with platform policies, legal requirements and all applicable rental agreements.",
  },
  {
    icon: <FaCarSide />,
    title: "Vehicle Listings",
    text: "Vehicle owners are responsible for accurate listings, pricing, vehicle condition and maintaining updated availability information.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Payments & Refunds",
    text: "Payments are securely processed through trusted providers. Refund eligibility depends on booking timing and cancellation policies.",
  },
  {
    icon: <FaBan />,
    title: "Prohibited Activities",
    text: "Users must not engage in fraudulent behavior, unauthorized access, platform abuse or illegal activities while using TravelEase.",
  },
  {
    icon: <FaUserShield />,
    title: "Account Suspension",
    text: "TravelEase reserves the right to suspend or terminate accounts involved in suspicious or harmful activities.",
  },
  {
    icon: <FaExclamationTriangle />,
    title: "Limitation of Liability",
    text: "TravelEase is not responsible for third-party failures, user disputes or damages outside platform control.",
  },
];

const TermsConditions = () => {
  return (
    <section className="bg-[#f6f8fc] min-h-screen">

      {/* HERO */}
      <div className="
        relative overflow-hidden
        bg-gradient-to-br
        from-slate-950
        via-indigo-950
        to-blue-900
        text-white
        py-32 px-6
      ">

        <div className="
          absolute top-0 left-0
          w-[500px] h-[500px]
          bg-indigo-500/20
          blur-3xl rounded-full
        "></div>

        <div className="
          absolute bottom-0 right-0
          w-[500px] h-[500px]
          bg-blue-500/20
          blur-3xl rounded-full
        "></div>

        <div className="
          relative z-10
          max-w-6xl mx-auto
          text-center
        ">

          <div className="
            inline-flex items-center gap-3
            bg-white/10
            border border-white/10
            backdrop-blur-xl
            rounded-full
            px-6 py-3
            mb-8
          ">

            <FaFileContract className="text-blue-300" />

            <span className="
              uppercase tracking-[0.25em]
              text-sm font-bold
              text-blue-100
            ">
              Legal Agreement
            </span>

          </div>

          <h1 className="
            text-5xl md:text-7xl
            font-black leading-tight
          ">
            Terms &
            <span className="text-blue-400">
              {" "}Conditions
            </span>
          </h1>

          <p className="
            text-blue-100
            text-lg md:text-2xl
            font-medium
            leading-relaxed
            mt-8
            max-w-4xl mx-auto
          ">
            Understand the rules, responsibilities
            and conditions for using the TravelEase
            vehicle rental platform.
          </p>

        </div>

      </div>

      {/* TRUST STRIP */}
      <div className="
        max-w-6xl mx-auto
        px-6 -mt-10 relative z-20
      ">

        <div className="
          grid grid-cols-2 md:grid-cols-4
          gap-5
        ">

          {[
            "Transparent Policies",
            "Secure Bookings",
            "Trusted Rentals",
            "Protected Users",
          ].map((item, i) => (
            <div
              key={i}
              className="
                bg-white/90
                backdrop-blur-xl
                border border-gray-200
                rounded-3xl
                py-5 px-4
                text-center
                shadow-sm
              "
            >

              <h3 className="
                text-gray-900
                font-bold
              ">
                {item}
              </h3>

            </div>
          ))}

        </div>

      </div>

      {/* CONTENT */}
      <div className="
        max-w-7xl mx-auto
        px-6 py-24
      ">

        <div className="
          grid grid-cols-1 lg:grid-cols-12
          gap-10
        ">

          {/* SIDEBAR */}
          <div className="lg:col-span-4">

            <div className="
              sticky top-28
              bg-white
              border border-gray-200
              rounded-[32px]
              p-8
              shadow-sm
            ">

              <p className="
                uppercase tracking-[0.25em]
                text-blue-500 text-sm
                font-bold mb-6
              ">
                Quick Navigation
              </p>

              <div className="space-y-4">

                {termsSections.map((item, index) => (
                  <a
                    key={index}
                    href={`#term-${index}`}
                    className="
                      flex items-center gap-4
                      px-4 py-4
                      rounded-2xl
                      text-gray-700
                      font-semibold
                      hover:bg-blue-50
                      hover:text-blue-600
                      transition-all duration-300
                    "
                  >

                    <div className="
                      text-blue-500 text-lg
                    ">
                      {item.icon}
                    </div>

                    {item.title}

                  </a>
                ))}

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="
            lg:col-span-8
            space-y-8
          ">

            {termsSections.map((item, index) => (

              <div
                id={`term-${index}`}
                key={index}
                className="
                  bg-white
                  border border-gray-200
                  rounded-[32px]
                  p-8 md:p-10
                  shadow-sm
                  hover:shadow-xl
                  transition-all duration-500
                "
              >

                <div className="
                  flex items-start gap-5
                ">

                  <div className="
                    w-16 h-16 rounded-2xl
                    bg-blue-100
                    flex items-center justify-center
                    text-blue-600 text-2xl
                    shrink-0
                  ">
                    {item.icon}
                  </div>

                  <div>

                    <h2 className="
                      text-3xl font-black
                      text-gray-900 mb-5
                    ">
                      {item.title}
                    </h2>

                    <p className="
                      text-gray-600
                      text-lg leading-relaxed
                      font-medium
                    ">
                      {item.text}
                    </p>

                  </div>

                </div>

              </div>

            ))}

            {/* CTA */}
            <div className="
              relative overflow-hidden
              bg-gradient-to-r
              from-blue-600
              via-indigo-600
              to-slate-900
              rounded-[32px]
              p-10 md:p-14
              text-white
            ">

              <div className="
                absolute top-0 right-0
                w-72 h-72
                bg-white/10
                rounded-full
                blur-3xl
              "></div>

              <div className="relative z-10">

                <p className="
                  uppercase tracking-[0.25em]
                  text-blue-200 text-sm
                  font-bold mb-4
                ">
                  Legal Support
                </p>

                <h2 className="
                  text-4xl md:text-5xl
                  font-black leading-tight
                ">
                  Questions About
                  <br />
                  Our Terms?
                </h2>

                <p className="
                  text-blue-100
                  text-lg font-medium
                  mt-6 max-w-2xl
                ">
                  Reach out to our legal and support
                  team for clarification regarding
                  bookings, policies and platform rules.
                </p>

                <button className="
                  mt-8
                  h-14 px-8
                  rounded-2xl
                  bg-white
                  text-blue-700
                  font-bold text-lg
                  hover:scale-[1.03]
                  transition-all duration-300
                ">
                  Contact Legal Team
                </button>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default TermsConditions;