import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import {
  FaCheckCircle,
  FaShieldAlt,
  FaWallet,
  FaHeadset,
  FaArrowRight,
} from "react-icons/fa";

const About = () => {
  const [activeTab, setActiveTab] = useState("values");

  return (
    <div className="bg-gray-100 overflow-hidden">

      {/* ============================= */}
      {/* HERO */}
      <section className="relative py-44 overflow-hidden px-4">

        <img
          src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1800&auto=format&fit=crop"
          alt="Travel"
          className="absolute inset-0 w-full h-full object-cover"
        />

        <div className="absolute inset-0 bg-black/55"></div>

        <div className="relative z-10 h-full flex items-center">

          <div className="max-w-[1240px] mx-auto px-4 w-full">

            <motion.div
              initial={{ opacity: 0, y: 70 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
              className="max-w-5xl"
            >

              <p className="uppercase tracking-[0.45em] text-sm md:text-lg font-bold text-white mb-8">
                About Travel<span className="text-pink-400">Ease</span>
              </p>

              <h1 className="text-4xl md:text-7xl font-black leading-[0.9] tracking-tight text-white">

                Travel,
                <br />

                without limits.

              </h1>

              <p className="mt-10 text-lg md:text-2xl leading-relaxed text-gray-200 max-w-3xl font-medium">

                Premium vehicle booking experiences designed
                for modern travelers who value comfort,
                simplicity, and freedom.

              </p>

            </motion.div>

          </div>

        </div>

      </section>

      {/* ================================== */}
      {/* ABOUT US SECTION */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-4">

          <div className=" rounded-xl  border border-gray-200">

            <div className="grid lg:grid-cols-3 gap-6 items-center">

              {/* LEFT IMAGE */}
              <div className="
                relative overflow-hidden
                rounded-2xl
                h-[450px]
              ">

                <img
                  src="https://i.ibb.co.com/DDKs2kYp/6536b102639467444ddf03e9-rentacar.jpg"
                  alt="Luxury"
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />

              </div>

              {/* CENTER */}
              <div className=" bg-white  rounded-2xl  p-10 text-center  h-[450px]  flex flex-col justify-center border border-gray-300">

                <h2 className="text-5xl font-black text-gray-900">
                  About <span className="text-blue-500">Us</span>
                </h2>

                <p className="mt-6 text-gray-600 leading-6 text-lg font-medium">

                  Your trusted platform for premium vehicle booking
                  and seamless travel experiences.

                </p>

                <p className="mt-6 text-gray-600 leading-6 text-lg font-medium">

                  We combine comfort, trusted service,
                  and modern technology to make every journey smooth,
                  reliable, and memorable.

                </p>

                <button className="
                  mt-8
                  bg-[#0B1120]/90 hover:bg-blue-600
                  text-white
                  px-8 py-4 rounded-full
                  font-bold
                  transition-all duration-300
                  hover:-translate-y-1
                  mx-auto
                ">
                  Learn More
                </button>

              </div>

              {/* RIGHT IMAGE */}
              <div className="
                relative overflow-hidden
                rounded-2xl
                h-[450px]
              ">

                <img
                  src="https://i.ibb.co.com/G4gW47Hm/new-car-buying-in-uganda.png"
                  alt="Business Travel"
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* ============================== */}
      {/* WHAT WE STAND FOR */}
      <section className="py-20">

        <div className="max-w-7xl mx-auto px-4">

          {/* TABS */}
          <div className="max-w-xl mx-auto rounded-full flex justify-center gap-5 mb-12 flex-wrap bg-gray-200 border border-gray-300 py-2.5">

            <button
              onClick={() => setActiveTab("values")}
              className={`
                px-8 py-4 rounded-full font-bold text-lg transition-all
                ${
                  activeTab === "values"
                    ? "bg-[#0B1120]/90 text-white shadow-lg"
                    : "bg-white hover:bg-blue-500 hover:text-white text-gray-700 border border-gray-200"
                }
              `}
            >
              Our Values
            </button>

            <button
              onClick={() => setActiveTab("mission")}
              className={`
                px-8 py-4 rounded-full font-bold text-lg transition-all
                ${
                  activeTab === "mission"
                    ? "bg-[#0B1120]/90 text-white shadow-lg"
                    : "bg-white hover:bg-blue-500 hover:text-white text-gray-700 border border-gray-200"
                }
              `}
            >
              Our Mission
            </button>

            <button
              onClick={() => setActiveTab("vision")}
              className={`
                px-8 py-4 rounded-full font-bold text-lg transition-all
                ${
                  activeTab === "vision"
                    ? "bg-[#0B1120]/90 text-white shadow-lg"
                    : "bg-white hover:bg-blue-500 hover:text-white text-gray-700 border border-gray-200"
                }
              `}
            >
              Our Vision
            </button>

          </div>

          {/* CONTENT */}
          <div className="grid lg:grid-cols-2 gap-8 items-center">

            {/* LEFT */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >

              <h2 className="text-5xl font-black text-gray-900 leading-tight">

                {activeTab === "values" && (
                  <>
                    What We <span className="text-blue-500">Stand</span> For
                  </>
                )}

                {activeTab === "mission" && (
                  <>
                    Our <span className="text-blue-500">Mission</span>
                  </>
                )}

                {activeTab === "vision" && (
                  <>
                    Our <span className="text-blue-500">Vision</span>
                  </>
                )}

              </h2>

              <p className="mt-8 text-gray-600 leading-6 text-lg font-medium max-w-xl">

                {activeTab === "values" &&
                  "Our values drive our commitment to transparency, trust, premium service, and unforgettable travel experiences."}

                {activeTab === "mission" &&
                  "Our mission is to simplify modern travel with trusted vehicles, seamless booking, and premium customer experiences."}

                {activeTab === "vision" &&
                  "We envision a future where travel becomes smarter, smoother, and more accessible for everyone."}

              </p>

              <div className="mt-6 space-y-6">

                {[
                  "Leveraging technology to simplify booking.",
                  "Transparent pricing without hidden fees.",
                  "Premium comfort for every traveler.",
                  "Customer satisfaction is our priority.",
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">

                    <div className="
                      w-10 h-8 rounded-full
                      bg-green-100
                      flex items-center justify-center
                      text-green-600 shrink-0 mt-1
                    ">
                      <FaCheckCircle size={20} />
                    </div>

                    <p className="text-gray-700 text-lg font-medium leading-9">
                      {item}
                    </p>

                  </div>
                ))}

              </div>

            </motion.div>

            {/* RIGHT IMAGES */}
            <motion.div
              key={activeTab + "img"}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-2 gap-4"
            >

              <div className="
                overflow-hidden rounded-[35px]
                h-[550px]
              ">

                <img
                  src="https://i.ibb.co.com/gbfqQgXk/154926531.webp"
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />

              </div>

              <div className="
                overflow-hidden rounded-[35px]
                h-[550px]
                mt-16
              ">

                <img
                  src="https://i.ibb.co.com/XrSL7Sn3/driver-hand-steering-wheel-gps-navigation-motion-highway-169016-68566.avif"
                  alt="Luxury"
                  className="w-full h-full object-cover hover:scale-105 transition duration-700"
                />

              </div>

            </motion.div>

          </div>

        </div>

      </section>

      {/* ================================== */}
      {/* WHY CHOOSE US */}
    <section className="py-20">

  <div className="max-w-7xl mx-auto px-4">

    {/* HEADER */}
    <div className="text-center mb-20">

      <h2 className="text-5xl md:text-6xl font-black text-gray-900">
        Why <span className="text-blue-500">Choose</span> Us
      </h2>

      <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-3xl mx-auto leading-9 font-medium">
        TravelEase delivers premium vehicle booking experiences
        with trusted rides, transparent pricing, and seamless customer support.
      </p>

    </div>

    {/* MAIN LAYOUT */}
    <div className="grid lg:grid-cols-3 items-center gap-12">

      {/* LEFT */}
      <div className="space-y-20">

        {/* ITEM */}
        <div className="max-w-sm">

          <div className="text-blue-600 text-5xl mb-3">
            <FaShieldAlt />
          </div>

          <h3 className="text-3xl font-black text-gray-900">
            Trusted Vehicles
          </h3>

          <p className="mt-5 text-gray-600 text-lg leading-6 font-medium">
            Verified premium vehicles maintained for comfort,
            safety, and reliable long-distance travel.
          </p>

        </div>

        {/* ITEM */}
        <div className="max-w-sm">

          <div className="text-blue-600 text-5xl mb-3">
            <FaWallet />
          </div>

          <h3 className="text-3xl font-black text-gray-900">
            Transparent Pricing
          </h3>

          <p className="mt-5 text-gray-600 text-lg leading-6 font-medium">
            Clear daily pricing with no hidden charges,
            giving travelers complete booking confidence.
          </p>

        </div>

      </div>

      {/* CENTER IMAGE */}
      <div className="flex justify-center">

        <div className="
          w-[340px] h-[340px]
          md:w-[420px] md:h-[420px]
          rounded-full
          overflow-hidden
          shadow-[0_20px_60px_rgba(0,0,0,0.10)]
        ">

          <img
            src="https://i.ibb.co.com/p6z3kr9W/360-F-68844809-Kcq-JYkz-Vvn-Evc-PPrbd-PBJb-AW37-Kt-Ns-OX.jpg"
            alt="Luxury Vehicle"
            className="w-full h-full object-cover"
          />

        </div>

      </div>

      {/* RIGHT */}
      <div className="space-y-20">

        {/* ITEM */}
        <div className="max-w-sm ml-auto">

          <div className="text-blue-600 text-5xl mb-3">
            <FaHeadset />
          </div>

          <h3 className="text-3xl font-black text-gray-900">
            Dedicated Support
          </h3>

          <p className="mt-5 text-gray-600 text-lg leading-6 font-medium">
            Fast and friendly assistance before,
            during, and after every booking experience.
          </p>

        </div>

        {/* ITEM */}
        <div className="max-w-sm ml-auto">

          <div className="text-blue-600 text-5xl mb-3">
            <FaCheckCircle />
          </div>

          <h3 className="text-3xl font-black text-gray-900">
            Premium Experience
          </h3>

          <p className="mt-5 text-gray-600 text-lg leading-6 font-medium">
            Seamless booking, modern travel comfort,
            and memorable journeys across Bangladesh.
          </p>

        </div>

      </div>

    </div>

  </div>

    </section>

      {/* =============================== */}
      {/* CTA */}
      
      <section className="py-24 bg-[#f7f7f7]">

        <div className="max-w-[1400px] mx-auto px-6">

          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="
              relative overflow-hidden
              rounded-[50px]
              h-[650px]
            "
          >

            {/* IMAGE */}
            <img
              src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=1800&auto=format&fit=crop"
              alt="Travel CTA"
              className="absolute inset-0 w-full h-full object-cover"
            />

            {/* OVERLAY */}
            <div className="absolute inset-0 bg-black/55"></div>

            {/* CONTENT */}
            <div className="
              relative z-10
              h-full
              flex flex-col items-center justify-center
              text-center
              px-6
            ">

              <p className="uppercase tracking-[0.45em] text-sm font-bold text-white mb-8">
                Start Your Journey
              </p>

              <h2 className="text-5xl md:text-7xl font-black text-white leading-[1.05] max-w-5xl">

                Explore premium travel
                experiences with confidence.

              </h2>

              <p className="mt-8 text-gray-200 text-xl leading-9 max-w-3xl font-medium">

                Discover trusted vehicles, seamless booking,
                and unforgettable journeys designed for modern travelers.

              </p>

              {/* BUTTONS */}
              <div className="flex flex-wrap justify-center gap-6 mt-12">

                <Link
                  to="/allVehicles"
                  className="
                    inline-flex items-center gap-3
                    bg-white hover:bg-gray-100
                    text-gray-900
                    px-9 py-5 rounded-full
                    text-lg font-black
                    transition-all duration-300
                    hover:-translate-y-1
                  "
                >
                  Explore Vehicles
                  <FaArrowRight />
                </Link>

                <Link
                  to="/addVehicle"
                  className="
                    inline-flex items-center gap-3
                    bg-white/10 hover:bg-white/20
                    backdrop-blur-xl
                    border border-white/20
                    text-white
                    px-9 py-5 rounded-full
                    text-lg font-black
                    transition-all duration-300
                  "
                >
                  List Your Vehicle
                </Link>

              </div>

            </div>

          </motion.div>

        </div>

      </section>

    </div>
  );
};

export default About;