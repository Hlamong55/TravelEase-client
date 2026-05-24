import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion, AnimatePresence } from "framer-motion";
import { Link, useSearchParams } from "react-router";
import useAxios from "../hooks/useAxios";
import { FaMapMarkerAlt } from "react-icons/fa";
import { HiOutlineArrowRight } from "react-icons/hi";

const LIMIT = 12;

const AllVehicles = () => {
  const axiosInstance = useAxios();

  const [vehicles, setVehicles] = useState([]);
  const [total, setTotal] = useState(0);

  const [searchParams, setSearchParams] = useSearchParams();

  // pagination
  const initialPage = Number(searchParams.get("page")) || 1;
  const [page, setPage] = useState(initialPage);

  // homepage search query
  const locationQuery = searchParams.get("location") || "";
  const categoryQuery = searchParams.get("category") || "";

  const [loading, setLoading] = useState(true);

  // dropdown filter
  const [sortCategory, setSortCategory] = useState("all");

  // ===== Slider =====
  const [index, setIndex] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Find Your Perfect Ride 🎯",
      subtitle: "Explore top-rated vehicles with just one click.",
      img: "https://i.ibb.co.com/Mk66vCtT/360-F-313468655-r-HXrxj-TPVPZB4-HBOVR6-NUm-UZNNsbh-CGO.jpg",
    },
    {
      id: 2,
      title: "Luxury & Comfort 👑",
      subtitle: "Choose from sedans, SUVs, and electric cars at best prices.",
      img: "https://i.ibb.co.com/0RbCp6ng/DARCARS-Toyota-of-Frederick-Small-SUV-model-ls3.webp",
    },
    {
      id: 3,
      title: "Book. Drive. Enjoy. 🌍",
      subtitle: "Seamless booking and trusted owners at your fingertips.",
      img: "https://i.ibb.co.com/pjvDYK8M/Ford-Mach-E-awd.webp",
    },
  ];

  // AUTO SLIDER
  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % slides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [slides.length]);

  // update URL page param
  useEffect(() => {
    const params = {};

    if (page) params.page = page;

    if (locationQuery) params.location = locationQuery;

    if (categoryQuery) params.category = categoryQuery;

    setSearchParams(params);
  }, [page, setSearchParams, locationQuery, categoryQuery]);

  // fetch vehicles
  useEffect(() => {
    setLoading(true);

    axiosInstance
      .get(`/vehicles?page=${page}&limit=${LIMIT}`)
      .then((res) => {
        setVehicles(res.data.vehicles);
        setTotal(res.data.total);
      })
      .catch(console.error)
      .finally(() => setLoading(false));
  }, [axiosInstance, page]);

  // filtering
  const filteredVehicles = vehicles.filter((vehicle) => {
    // dropdown category
    const dropdownCategoryMatch =
      sortCategory === "all" ? true : vehicle.category === sortCategory;

    // homepage location search
    const locationMatch = locationQuery
      ? vehicle.location?.toLowerCase().includes(locationQuery.toLowerCase())
      : true;

    // homepage category search
    const categoryMatch = categoryQuery
      ? vehicle.category === categoryQuery
      : true;

    return dropdownCategoryMatch && locationMatch && categoryMatch;
  });

  const availableCars = filteredVehicles.filter(
    (v) => v.availability === "Available",
  ).length;

  const totalPages = Math.ceil(total / LIMIT);

  // loading skeleton
  const SkeletonCard = () => (
    <div className="bg-white rounded-2xl shadow-md p-4 animate-pulse">
      <div className="h-48 bg-gray-300 rounded-xl mb-4"></div>

      <div className="h-4 bg-gray-300 w-1/2 mb-2 rounded"></div>

      <div className="h-4 bg-gray-200 w-3/4 rounded"></div>
    </div>
  );

  return (
    <div className="min-h-screen bg-gray-100">
      {/* SLIDER */}
      <div className="relative w-full overflow-hidden bg-gray-900 mb-12">
        <AnimatePresence mode="wait">
          <motion.div
            key={slides[index].id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1 }}
            className="relative h-[60vh] flex items-center justify-center"
          >
            <motion.img
              src={slides[index].img}
              className="absolute w-full object-cover"
            />

            <div className="absolute inset-0 bg-black/50" />

            <div className="relative z-10 text-center px-4">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
                {slides[index].title}
              </h2>

              <p className="text-lg text-gray-200 max-w-2xl mx-auto">
                {slides[index].subtitle}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* BODY */}
      <div className="max-w-7xl mx-auto px-4 md:px-0.5">
        {/* TOP FILTER BAR */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-10 gap-4">
          <h2 className="text-3xl font-bold text-gray-700">
            Available Cars:
            <span className="text-sky-500 ml-2">{availableCars}</span>
          </h2>

          <select
            className="
              border border-gray-200
              rounded-2xl
              px-5 py-3
              bg-white
              shadow-sm
              outline outline-blue-500
              hover:outline-2
            "
            value={sortCategory}
            onChange={(e) => setSortCategory(e.target.value)}
          >
            <option value="all">All Categories</option>
            <option value="Sedan">Sedan</option>
            <option value="SUV">SUV</option>
            <option value="Electric">Electric</option>
            <option value="Van">Van</option>
          </select>
        </div>

        {/* ACTIVE FILTERS */}
        {(locationQuery || categoryQuery) && (
          <div className="flex flex-wrap gap-3 mb-8">
            {locationQuery && (
              <div className="px-4 py-2 rounded-full bg-sky-100 text-sky-700 font-medium">
                📍 {locationQuery}
              </div>
            )}

            {categoryQuery && (
              <div className="px-4 py-2 rounded-full bg-sky-100 text-sky-700 font-medium">
                🚗 {categoryQuery}
              </div>
            )}
          </div>
        )}

        {/* CARDS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {loading
            ? Array.from({ length: LIMIT }).map((_, i) => (
                <SkeletonCard key={i} />
              ))
            : filteredVehicles.map((vehicle, index) => (
                <motion.div
                  key={vehicle._id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="
                    bg-white
                    rounded-3xl
                    shadow-lg
                    hover:shadow-2xl
                    overflow-hidden
                    hover:-translate-y-2
                    transition-all duration-500
                    border border-gray-100
                  "
                >
                  {/* IMAGE */}
                  <div className="h-56 w-full overflow-hidden relative">
                    <motion.img
                      whileHover={{ scale: 1.08 }}
                      transition={{ duration: 0.5 }}
                      src={vehicle.coverImage}
                      className="w-full h-full object-cover"
                    />

                    <div className="absolute top-3 left-3">
                      <span className="bg-black text-white px-3.5 py-1.5 rounded-full text-sm font-semibold">
                        {vehicle.category}
                      </span>
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-4 space-y-4">
                    <div>
                      <h3 className="text-2xl font-black text-gray-800 line-clamp-1 mb-2">
                      {vehicle.vehicleName}
                    </h3>

                     <p className="flex items-center gap-2 text-gray-600 text-sm mb-5 font-medium">
                      <FaMapMarkerAlt className="text-sky-600" />
                      <span>{vehicle.location}</span>
                    </p>
                    </div>

                   

                    {/* price +  availability */}
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-xs text-gray-500">Starting From</p>

                        <p className="text-2xl font-black text-sky-600">
                          ${vehicle.pricePerDay}
                          <span className="text-sm text-gray-700 font-medium">
                            /day
                          </span>
                        </p>
                      </div>

                      <p
                        className={`inline-block px-4 py-1 rounded-full text-sm font-bold ${
                          vehicle.availability === "Available"
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-500"
                        }`}
                      >
                        {vehicle.availability}
                      </p>
                    </div>

                    <Link
                      to={`/vehicle/${vehicle._id}`}
                      className="w-full bg-[#1e293b] hover:bg-blue-600 text-white py-3 rounded-2xl flex items-center justify-center gap-2 font-semibold transition-all duration-300"
                    >
                      View Details
                      <HiOutlineArrowRight size={20} />
                    </Link>
                  </div>
                </motion.div>
              ))}
        </div>



        {/* PREMIUM PAGINATION */}
        <div className="flex justify-center items-center gap-3 py-16 flex-wrap">
          {/* PREVIOUS */}
          <button
            disabled={page === 1}
            onClick={() => setPage((p) => p - 1)}
            className={`
              h-12 px-6 rounded-xl font-semibold transition-all duration-300
              ${
                page === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-sky-500 hover:text-white hover:border-sky-500 shadow-md hover:-translate-y-1"
              }
            `}
          >
            Previous
          </button>

          {/* PAGE NUMBERS */}
          <div className="flex items-center gap-2">
            {[...Array(totalPages).keys()].map((num) => {
              const pageNumber = num + 1;

              return (
                <button
                  key={pageNumber}
                  onClick={() => setPage(pageNumber)}
                  className={`
                    w-12 h-12 rounded-xl font-bold transition-all duration-300
                    ${
                      page === pageNumber
                        ? "bg-sky-500 text-white shadow-lg shadow-sky-300/40 scale-105"
                        : "bg-white text-gray-700 border border-gray-200 hover:bg-sky-100 hover:border-sky-300"
                    }
                  `}
                >
                  {pageNumber}
                </button>
              );
            })}
          </div>

          {/* NEXT */}
          <button
            disabled={page === totalPages}
            onClick={() => setPage((p) => p + 1)}
            className={`
              h-12 px-6 rounded-2xl font-semibold transition-all duration-300
              ${
                page === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-white text-gray-700 border border-gray-200 hover:bg-sky-500 hover:text-white hover:border-sky-500 shadow-md hover:-translate-y-1"
              }
            `}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllVehicles;
