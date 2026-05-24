import React, { useState } from "react";
import { useNavigate } from "react-router";

import {
  FaMapMarkerAlt,
  FaSearch,
} from "react-icons/fa";

import { MdDirectionsCar } from "react-icons/md";

const QuickSearchBar = () => {
  const navigate = useNavigate();

  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    const query = new URLSearchParams();

    if (location) {
      query.append("location", location);
    }

    if (category) {
      query.append("category", category);
    }

    navigate(`/allVehicles?${query.toString()}`);
  };

  return (
    <section className="relative z-20 -mt-14 px-5">

      <div
        className="
          max-w-6xl mx-auto
          bg-white/90
          backdrop-blur-2xl
          border border-white/20
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
          rounded-4xl
          p-5 md:p-7
        "
      >

        <form
          onSubmit={handleSearch}
          className="
            grid
            grid-cols-1
            md:grid-cols-4
            gap-5
            items-end
          "
        >

          {/* LOCATION */}
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Pickup Location
            </label>

            <div
              className="
                flex items-center gap-3
                bg-gray-50
                border border-gray-200
                rounded-2xl
                px-4 py-4
              "
            >
              <FaMapMarkerAlt className="text-sky-500" />

              <input
                type="text"
                placeholder="Enter location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                className="
                  bg-transparent
                  outline-none
                  w-full
                  text-gray-700
                "
              />
            </div>
          </div>

          {/* CATEGORY */}
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Vehicle Type
            </label>

            <div
              className="
                flex items-center gap-3
                bg-gray-50
                border border-gray-200
                rounded-2xl
                px-4 py-4
              "
            >
              <MdDirectionsCar className="text-sky-500 text-xl" />

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="
                  bg-transparent
                  outline-none
                  w-full
                  text-gray-700
                "
              >
                <option value="">Select Category</option>
                <option value="SUV">SUV</option>
                <option value="Sedan">Sedan</option>
                <option value="Electric">Electric</option>
                <option value="Van">Van</option>
              </select>
            </div>
          </div>

          {/* DATE */}
          <div>
            <label className="text-sm font-semibold text-gray-700 mb-2 block">
              Pickup Date
            </label>

            <input
              type="date"
              className="
                w-full
                bg-gray-50
                border border-gray-200
                rounded-2xl
                px-4 py-4
                outline-none
                text-gray-700
              "
            />
          </div>

          {/* BUTTON */}
          <button
            type="submit"
            className="
              h-[58px]
              rounded-2xl
              bg-sky-500
              hover:bg-sky-600
              text-white
              font-semibold
              flex items-center justify-center gap-3
              shadow-lg shadow-sky-300/40
              transition-all duration-300
              hover:-translate-y-1
            "
          >
            <FaSearch />

            Search Vehicles
          </button>
        </form>
      </div>
    </section>
  );
};

export default QuickSearchBar;