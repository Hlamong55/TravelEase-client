import React from "react";

import {
  FaFileContract,
  FaCarSide,
  FaMoneyBillWave,
  FaBan,
  FaUserShield,
  FaExclamationTriangle,
  FaChevronRight,
} from "react-icons/fa";

const termsSections = [
  {
    icon: <FaFileContract />,
    title: "Acceptance of Terms",
    text: "By using TravelEase, users agree to comply with all booking policies, rental conditions and platform regulations provided by the service.",
  },
  {
    icon: <FaCarSide />,
    title: "Vehicle Listings & Rentals",
    text: "Vehicle owners are responsible for accurate listing information, pricing, availability and maintaining the condition of listed vehicles.",
  },
  {
    icon: <FaMoneyBillWave />,
    title: "Payments & Refund Policy",
    text: "Payments are securely processed through trusted payment gateways. Refund eligibility depends on booking duration and cancellation timing.",
  },
  {
    icon: <FaBan />,
    title: "Restricted Activities",
    text: "Users must not engage in fraudulent activity, fake bookings, unauthorized platform access or illegal vehicle usage under any circumstances.",
  },
  {
    icon: <FaUserShield />,
    title: "Account Responsibility",
    text: "Users are responsible for protecting their account credentials and ensuring all activities under their account remain lawful and secure.",
  },
  {
    icon: <FaExclamationTriangle />,
    title: "Limitation of Liability",
    text: "TravelEase shall not be responsible for losses, delays or damages caused by third-party services, users or situations outside platform control.",
  },
];

const TermsConditions = () => {
  return (
    <section
      className="
        bg-gray-200
        min-h-screen
      "
    >

      {/* HERO */}
      <div
        className=" relative overflow-hidden bg-[#0F172A]/90 py-20 px-6 text-white "
      >

        {/* GLOW */}
        <div
          className=" absolute top-0 left-0 w-[600px] h-[600px] bg-blue-500/20 blur-3xl rounded-full"
        ></div>

        <div
          className="
            absolute bottom-0 right-0
            w-[600px] h-[600px]
            bg-indigo-500/20
            blur-3xl rounded-full
          "
        ></div>

        <div
          className="
            absolute inset-0
            bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,0.22),transparent_35%)]
          "
        ></div>

        <div
          className="
            relative z-10
            max-w-[1600px]
            mx-auto
            text-center
          "
        >

          <div
            className=" inline-flex items-center gap-3 bg-white/10 border border-white/10 backdrop-blur-3xl rounded-full px-7 py-4 mb-10"
          >

            <FaFileContract className="text-blue-200" />

            <span
              className=" uppercase tracking-[0.35em] text-sm font-bold text-blue-100"
            >
              Terms & Conditions
            </span>

          </div>

          <h1
            className=" text-6xl font-black leading-[0.95] max-w-6xl mx-auto"
          >
            Platform
            <span className="text-blue-400">
              {" "}Terms
            </span>
          </h1>

          <p
            className=" text-xl text-gray-300 leading-10 font-medium max-w-4xl mx-auto mt-12"
          >
            Understand the rules, booking policies
            and responsibilities that ensure safe,
            transparent and premium travel experiences
            across the TravelEase platform.
          </p>

        </div>

      </div>

      {/* TRUST STRIP */}
      <div
        className=" max-w-7xl mx-auto px-6 -mt-12 relative z-20 "
      >

        <div
          className="
            grid grid-cols-2 md:grid-cols-4
            gap-6
          "
        >

          {[
            "Verified Policies",
            "Trusted Platform",
            "Secure Bookings",
            "Protected Users",
          ].map((item, i) => (
            <div
              key={i}
              className=" h-24 bg-white backdrop-blur-xl border border-gray-400 shadow-xl rounded-3xl flex items-center justify-center"
            >

              <h3
                className="
                  text-gray-900
                  font-bold text-lg
                "
              >
                {item}
              </h3>

            </div>
          ))}

        </div>

      </div>

      {/* MAIN */}
      <div
        className=" max-w-7xl mx-auto px-6 py-20"
      >

        <div
          className=" grid grid-cols-1 xl:grid-cols-[340px_1fr] gap-10"
        >

          {/* SIDEBAR */}
          <div>

            <div
              className=" sticky top-32 bg-white/70 backdrop-blur-2xl border border-white/20 shadow-xl rounded-xl p-6"
            >

              <p
                className="
                  uppercase tracking-[0.35em]
                  text-blue-500
                  font-bold mb-8
                "
              >
                Quick Navigation
              </p>

              <div className="space-y-3">

                {termsSections.map((item, index) => (
                  <a
                    key={index}
                    href={`#section-${index}`}
                    className=" flex items-center justify-between gap-4 px-5 py-5 rounded-2xl text-gray-700 font-semibold hover:bg-blue-100 hover:text-blue-600 hover:translate-x-1 transition-all duration-300"
                  >

                    <div className="flex items-center gap-4">

                      <div className=" text-slate-700 text-lg ">
                        {item.icon}
                      </div>

                      <span>
                        {item.title}
                      </span>

                    </div>

                    <FaChevronRight className="text-sm" />

                  </a>
                ))}

              </div>

            </div>

          </div>

          {/* CONTENT */}
          <div className="space-y-6">

            {termsSections.map((item, index) => (
              <div
                id={`section-${index}`}
                key={index}
                className=" bg-white/75 backdrop-blur-xl border border-white/50 shadow-lg rounded-2xl p-8 md:p-12 hover:-translate-y-1 hover:shadow-2xl transition-all duration-500"
              >

                <div className="
                  flex flex-col md:flex-row
                  gap-8
                ">

                  <div
                    className=" w-20 h-20 rounded-3xl bg-blue-100 flex items-center justify-center text-slate-700 text-3xl shrink-0"
                  >
                    {item.icon}
                  </div>

                  <div>

                    <h2
                      className="
                        text-4xl
                        font-black
                        text-gray-900
                        mb-6
                      "
                    >
                      {item.title}
                    </h2>

                    <p
                      className="
                        text-gray-600
                        text-xl
                        leading-9
                        font-medium
                        max-w-4xl
                      "
                    >
                      {item.text}
                    </p>

                  </div>

                </div>

              </div>
            ))}

            {/* LARGE CTA */}
            <div
              className=" relative overflow-hidden bg-[#0f172a] rounded-2xl p-14 text-white shadow-2xl"
            >

              <div
                className="
                  absolute top-0 right-0
                  w-[500px] h-[500px]
                  bg-blue-500/20
                  blur-3xl rounded-full
                "
              ></div>

              <div
                className="
                  absolute bottom-0 left-0
                  w-[400px] h-[400px]
                  bg-indigo-500/20
                  blur-3xl rounded-full
                "
              ></div>

              <div className="relative z-10">

                <p
                  className="
                    uppercase tracking-[0.35em]
                    text-blue-300 text-sm
                    font-bold mb-6
                  "
                >
                  Legal Support
                </p>

                <h2
                  className=" text-5xl font-black leading-tight max-w-4xl"
                >
                  Questions About
                  <br />
                  Our Policies?
                </h2>

                <p
                  className=" text-gray-300 text-lg leading-9 font-medium mt-6"
                >
                  Our legal and support team are
                  available to help regarding
                  platform rules, booking policies,
                  cancellations and rental agreements.
                </p>

                <div className="
                  flex flex-wrap gap-5
                  mt-8
                ">

                  <button
                    className="
                      h-16 px-10
                      rounded-2xl
                      bg-white
                      text-slate-900
                      font-bold text-lg
                      hover:scale-[1.03]
                      transition-all duration-300
                    "
                  >
                    Contact Support
                  </button>

                  <button
                    className=" h-16 px-10 rounded-2xl border border-white/20 bg-white/5 backdrop-blur-xl text-white font-bold text-lg hover:bg-white/10 transition-all duration-300"
                  >
                    Read Booking Rules
                  </button>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default TermsConditions;