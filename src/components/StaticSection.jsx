import React from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

const StaticSections = () => {
  const categories = [
    {
      title: "Sedans",
      desc: "Comfortable and stylish city rides for everyday travel.",
      img: "https://i.ibb.co.com/1ffYFLj8/What-is-Hatchback-web-insider-sedan-vs-hatchback.jpg",
    },
    {
      title: "SUVs",
      desc: "Perfect for family adventures and long-distance journeys.",
      img: "https://i.ibb.co.com/wZfZzGZp/toyota-landcruiser-prado-altitude-banner-1400x600.jpg",
    },
    {
      title: "Electric",
      desc: "Modern eco-friendly vehicles built for the future.",
      img: "https://i.ibb.co.com/pjvDYK8M/Ford-Mach-E-awd.webp",
    },
    {
      title: "Vans",
      desc: "Spacious vehicles for group trips and cargo transport.",
      img: "https://i.ibb.co.com/8gBPQGYy/gray-cargo-van-driving-rainy-highway-delivery-rain-169016-70096.avif",
    },
  ];

  return (
    <div className="bg-blue-50 overflow-hidden">

      {/* TOP VEHICLE CATEGORIES */}

      <section className="max-w-7xl mx-auto px-6 pt-24">

        {/* HEADER */}
        <div className="text-center mb-12">

          <div className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-blue-100 border border-blue-200 text-blue-700 font-semibold text-sm mb-6">
            Premium Vehicle Collection
          </div>

          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
            Top Vehicle
            <span className="text-blue-600"> Categories</span>
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-gray-600 text-lg leading-8 font-medium">
            Explore luxury vehicles designed for comfortable city rides,
            family tours, business trips, and unforgettable adventures.
          </p>

        </div>

        {/* CATEGORY GRID */}
       <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7">

          {categories.map((cat, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="
                group
                bg-white
                border border-gray-200
                rounded-4xl
                overflow-hidden
                shadow-[0_10px_40px_rgba(0,0,0,0.06)]
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                transition-all duration-500
                hover:-translate-y-2
              "
            >

              {/* IMAGE */}
              <div className="relative overflow-hidden h-64">

                <img
                  src={cat.img}
                  alt={cat.title}
                  className="
                    w-full h-full object-cover
                    group-hover:scale-110
                    transition duration-700
                  "
                />

                <div className="absolute inset-0 bg-linear-to-t from-black/50 to-transparent"></div>

                <div className="absolute bottom-5 left-5">

                  <h3 className="text-3xl font-black text-white tracking-tight">
                    {cat.title}
                  </h3>

                </div>

              </div>

              {/* CONTENT */}
              <div className="p-6">

                <p className="text-gray-600 leading-7 font-medium">
                  {cat.desc}
                </p>

              </div>

            </motion.div>
          ))}

        </div>

      </section>



      {/* TRAVEL EXPERIENCES */}

      <section className="py-24 bg-linear-to-br from-slate-50 via-blue-50 to-pink-50">

        <div className="max-w-7xl mx-auto ">

          {/* HEADER */}
          <div className="text-center mb-12">

            <h2 className="text-4xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">
              Experience Better
              <span className="text-blue-600"> Travel</span>
            </h2>

            <p className="max-w-3xl mx-auto mt-4 text-gray-600 text-lg leading-7 font-medium">
              From airport pickups to luxury road trips —
              TravelEase delivers seamless premium travel experiences
              designed for comfort, safety, and unforgettable journeys.
            </p>

          </div>

          {/* EXPERIENCE GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-7">

            {/* LARGE CARD */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="
                group
                relative
                min-h-[650px]
                rounded-[36px]
                overflow-hidden
                shadow-[0_10px_40px_rgba(0,0,0,0.10)]
              "
            >

              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?q=80&w=1400&auto=format&fit=crop"
                alt="Luxury Travel"
                className="
                  w-full h-full object-cover
                  group-hover:scale-105
                  transition duration-700
                "
              />

              <div className="absolute inset-0 bg-linear-to-t from-black via-black/30 to-transparent"></div>

              <div className="absolute bottom-0 p-10 text-white">

                <span className="bg-white/20 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full text-sm font-semibold">
                  Luxury Experience
                </span>

                <h3 className="text-5xl font-black tracking-tight mt-6 leading-tight">
                  Discover Premium
                  Road Trips
                </h3>

                <p className="mt-6 text-gray-200 leading-8 text-lg max-w-xl font-medium">
                  Enjoy unforgettable journeys with luxury vehicles,
                  scenic destinations, and seamless booking experiences
                  crafted for modern travelers.
                </p>

              </div>

            </motion.div>

            {/* RIGHT GRID */}
            <div className="grid grid-cols-1 gap-7">

              {/* CARD 1 */}
              <motion.div
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="
                  group
                  relative
                  h-[300px]
                  rounded-4xl
                  overflow-hidden
                  shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                "
              >

                <img
                  src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?q=80&w=1400&auto=format&fit=crop"
                  alt="Airport Transfer"
                  className="
                    w-full h-full object-cover
                    group-hover:scale-105
                    transition duration-700
                  "
                />

                <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent"></div>

                <div className="absolute bottom-0 p-7 text-white">

                  <h3 className="text-3xl font-black tracking-tight mb-1">
                    Airport Transfers
                  </h3>

                  <p className="text-gray-200 leading-7 font-medium max-w-md">
                    Stress-free premium airport pickups with reliable
                    drivers and luxury comfort.
                  </p>

                </div>

              </motion.div>

              {/* CARD 2 */}
              <div className="grid grid-cols-1 gap-7">

                {/* BUSINESS */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  viewport={{ once: true }}
                  className="
                    group
                    relative
                    h-[300px]
                    rounded-4xl
                    overflow-hidden
                    shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                  "
                >

                  <img
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?q=80&w=1400&auto=format&fit=crop"
                    alt="Business Travel"
                    className="
                      w-full h-full object-cover
                      group-hover:scale-105
                      transition duration-700
                    "
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent"></div>

                  <div className="absolute bottom-0 p-6 text-white">

                    <h3 className="text-3xl font-black tracking-tight mb-1">
                      Business Trips
                    </h3>

                    <p className="text-gray-200 leading-7 font-medium ">
                      Executive vehicles for modern corporate travel.
                    </p>

                  </div>

                </motion.div>

                {/* FAMILY */}
                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                  className="
                    group
                    relative
                    h-[300px]
                    rounded-4xl
                    overflow-hidden
                    shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                  "
                >

                  <img
                    src="https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=1400&auto=format&fit=crop"
                    alt="Family Travel"
                    className="
                      w-full h-full object-cover
                      group-hover:scale-105
                      transition duration-700
                    "
                  />

                  <div className="absolute inset-0 bg-linear-to-t from-black via-black/20 to-transparent"></div>

                  <div className="absolute bottom-0 p-6 text-white">

                    <h3 className="text-3xl font-black tracking-tight mb-1">
                      Family Tours
                    </h3>

                    <p className="text-gray-200 leading-7 font-medium">
                      Spacious and safe rides for family adventures.
                    </p>

                  </div>

                </motion.div>

              </div>

            </div>

          </div>

        </div>

      </section>

    </div>
  );
};

export default StaticSections;