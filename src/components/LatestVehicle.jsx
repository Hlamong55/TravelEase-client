import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { differenceInDays } from "date-fns";
import {
  FaMapMarkerAlt,
  FaStar,
  FaUsers,
  FaSnowflake,
} from "react-icons/fa";
import { GiGearStickPattern } from "react-icons/gi";
import { BsFuelPumpFill } from "react-icons/bs";
import { HiOutlineArrowRight } from "react-icons/hi";

import useAxios from "../hooks/useAxios";

const LatestVehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const axiosInstance = useAxios();

  useEffect(() => {
    axiosInstance
      .get("/latest-vehicle")
      .then((res) => setVehicles(res.data))
      .catch((err) => console.error(err));
  }, [axiosInstance]);

  return (
    <section className="bg-[#f7fafc] py-20 border-t border-gray-200">
      <div className="max-w-7xl mx-auto">

        {/* SECTION TITLE */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-black text-gray-900">
            Latest <span className="text-sky-500">Vehicles</span>
          </h2>

          <p className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto">
            Explore our newest premium rides for your next luxury journey.
          </p>
        </div>

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {vehicles.map((v, index) => {
            const isNew =
              differenceInDays(new Date(), new Date(v.createdAt)) <= 5;

            return (
              <motion.div
                key={v._id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                viewport={{ once: true }}
                className="group bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl transition-all duration-500"
              >

                {/* IMAGE SECTION */}
                <div className="relative overflow-hidden">

                  <img
                    src={
                      v.coverImage ||
                      "https://i.ibb.co/QjkHXLkH/istockphoto-931069196-612x612.jpg"
                    }
                    alt={v.vehicleName}
                    className="w-full h-60 object-cover group-hover:scale-110 transition duration-700"
                  />

                  {/* CATEGORY */}
                  <div className="absolute top-3 left-3">
                    <span className="bg-black backdrop-blur-md text-white text-sm px-3.5 py-1.5 rounded-full font-semibold">
                      {v.category}
                    </span>
                  </div>

                  {/* NEW BADGE */}
                  {isNew && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-sky-500 text-white text-xs px-4 py-1.5 rounded-full font-bold shadow-lg">
                        NEW
                      </span>
                    </div>
                  )}

                  {/* RATING */}
                  <div className="absolute bottom-3 right-3 bg-white backdrop-blur-md px-2.5 py-1.5 rounded-full shadow flex items-center gap-1">
                    <FaStar className="text-yellow-500" />
                    <span className="text-sm font-bold">4.8</span>
                  </div>
                </div>

                {/* CONTENT */}
                <div className="p-4">

                  {/* TITLE */}
                  <h3 className="text-2xl font-black text-gray-900 mb-2 line-clamp-1">
                    {v.vehicleName}
                  </h3>

                  {/* LOCATION */}
                  <div className="flex items-center gap-2 text-gray-600 text-sm mb-5 font-medium">
                    <FaMapMarkerAlt className="text-sky-600" />
                    <span>{v.location}</span>
                  </div>

                  {/* FEATURES */}
                  <div className="grid grid-cols-2 gap-2 mb-5">

                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <FaUsers className="text-sky-500" />
                      <span>4 Seats</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <GiGearStickPattern className="text-sky-500" />
                      <span>Auto</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <BsFuelPumpFill className="text-sky-500" />
                      <span>Petrol</span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-700">
                      <FaSnowflake className="text-sky-500" />
                      <span>AC</span>
                    </div>
                  </div>

                  {/* PRICE + STATUS */}
                  <div className="flex justify-between items-center mb-5">

                    <div>
                      <p className="text-sm text-gray-400">
                        Starting from
                      </p>

                      <h4 className="text-2xl font-black text-sky-600">
                        ${v.pricePerDay}
                        <span className="text-base font-medium text-gray-600">
                          /day
                        </span>
                      </h4>
                    </div>

                    <span
                      className={`px-4 py-2 rounded-2xl text-sm font-bold ${
                        v.availability === "Available"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-500"
                      }`}
                    >
                      {v.availability}
                    </span>
                  </div>

                  {/* BUTTON */}
                  <Link
                    to={`/vehicle/${v._id}`}
                    className="w-full bg-[#1e293b] hover:bg-blue-600 text-white py-3 rounded-2xl flex items-center justify-center gap-2 font-semibold transition-all duration-300"
                  >
                    View Details
                    <HiOutlineArrowRight size={20} />
                  </Link>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default LatestVehicles;