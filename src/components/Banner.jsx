import React from "react";
import { FaListUl } from "react-icons/fa";
import { LuSquareArrowOutUpRight } from "react-icons/lu";
import { Link } from "react-router";
import heroCar from "../assets/heroImg.png";

const Banner = () => {
  return (
    <section className="relative overflow-hidden bg-linear-to-br from-sky-50 via-white to-blue-100">

      {/* LIGHT GLOW */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-sky-300/30 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300/20 blur-[120px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div className="space-y-8 relative z-10">

            {/* BADGE */}
            <div
              className="
                inline-flex items-center gap-2
                px-4 py-2
                rounded-full
                border border-sky-200
                bg-white/80
                backdrop-blur-md
                shadow-sm
              "
            >
              <span className="w-2 h-2 rounded-full bg-sky-500 animate-pulse"></span>

              <p className="text-sm text-slate-700 font-medium">
                Trusted by 15,000+ Travelers
              </p>
            </div>

            {/* HEADING */}
            <div className="space-y-5">

              <h1
                className="
                  text-4xl md:text-6xl lg:text-7xl
                  font-black
                  leading-[1.05]
                  tracking-tight
                  text-slate-900
                "
              >
                Premium Vehicle

                <br />

                <span
                  className="
                    bg-linear-to-r
                    from-pink-400
                    via-pink-500
                    to-pink-400
                    bg-clip-text
                    text-transparent
                  "
                >
                  Booking Platform
                </span>
              </h1>

              <p
                className="
                  text-lg md:text-xl
                  text-slate-600
                  max-w-xl
                  leading-relaxed
                "
              >
                Experience luxury travel with seamless vehicle booking,
                smart trip management, and premium ride experiences
                across Bangladesh.
              </p>
            </div>

            {/* BUTTONS */}
            <div className="flex flex-wrap gap-5">

              <Link
                to="/allVehicles"
                className="
                  group
                  px-8 py-4
                  rounded-2xl
                 bg-[#0B1120]/90
                  hover:bg-pink-500
                  text-white
                  font-semibold
                  shadow-lg shadow-sky-300/40
                  transition-all duration-300
                  hover:-translate-y-1
                "
              >
                <span className="flex items-center gap-2">
                  Explore Vehicles

                  <LuSquareArrowOutUpRight
                    size={22}
                    className="
                      transition-transform duration-300
                      group-hover:translate-x-1
                      group-hover:-translate-y-1
                    "
                  />
                </span>
              </Link>

              <Link
                to="/addVehicle"
                className="
                  px-8 py-4
                  rounded-2xl
                  border border-sky-300
                  bg-white/20
                  hover:bg-[#0B1120]/90
                  hover:text-white
                  font-semibold
                  shadow-md
                  shadow-sky-300/40
                  transition-all duration-300
                  hover:-translate-y-1
                "
              >
                <span className="flex items-center gap-2">
                  List Your Vehicle

                  <FaListUl size={18} />
                </span>
              </Link>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-5 pt-6">

              <div
                className="
                  rounded-2xl
                  border border-sky-200
                  bg-white/10
                  backdrop-blur-md
                  p-5
                  shadow-md
                "
              >
                <h3 className="text-3xl font-black text-slate-900">
                  15K+
                </h3>

                <p className="text-sm text-gray-500 mt-1">
                  Happy Travelers
                </p>
              </div>

              <div
                className="
                  rounded-2xl
                  border border-sky-200
                  bg-white/30
                  backdrop-blur-md
                  p-5
                  shadow-md
                "
              >
                <h3 className="text-3xl font-black text-slate-900">
                  1200+
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  Premium Vehicles
                </p>
              </div>

              <div
                className="
                  rounded-2xl
                  border border-sky-200
                  bg-white/70
                  backdrop-blur-md
                  p-5
                  shadow-md
                "
              >
                <h3 className="text-3xl font-black text-slate-900">
                  24/7
                </h3>

                <p className="text-sm text-slate-500 mt-1">
                  Customer Support
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative flex justify-center">

            {/* GLOW */}
            <div
              className="
                absolute inset-0
                bg-sky-300/30
                blur-[120px]
                rounded-full
              "
            ></div>

            {/* MAIN IMAGE */}
            <img
              src={heroCar}
              alt="Luxury Vehicle"
              className="
                relative z-10
                w-[115%]
                
                max-w-none
                drop-shadow-[0_35px_60px_rgba(0,0,0,0.18)]
                hover:scale-[1.03]
                transition-all duration-500
              "
            />

            {/* FLOATING CARD 1 */}
            <div
              className="
                absolute top-5 left-0
                bg-white/90
                backdrop-blur-md
                border border-pink-100
                rounded-2xl
                p-4
                shadow-xl
              "
            >
              <p className="text-slate-900 font-semibold">
                ⭐ 4.9 Rating
              </p>

              <p className="text-sm text-slate-500">
                Trusted Experience
              </p>
            </div>

            {/* FLOATING CARD 2 */}
            <div
              className="
                absolute -bottom-5 -right-5
                bg-white
                backdrop-blur-md
                border border-pink-100
                rounded-2xl
                p-4
                shadow-xl
              "
            >
              <p className="text-slate-900 font-semibold">
                Instant Booking
              </p>

              <p className="text-sm text-gray-600">
                Fast & Secure
              </p>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;