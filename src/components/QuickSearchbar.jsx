import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

import {
  FaSearch,
  FaCarSide,
} from "react-icons/fa";

import { HiOutlineLocationMarker } from "react-icons/hi";

import useAxios from "../hooks/useAxios";

const QuickSearchBar = () => {

  const navigate = useNavigate();
  const axiosInstance = useAxios();

  // SEARCH STATES
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [pickupDate, setPickupDate] = useState("");

  // LOCATION DROPDOWN STATES
  const [allLocations, setAllLocations] = useState([]);
  const [filteredLocations, setFilteredLocations] = useState([]);

  // FETCH LOCATIONS FROM DATABASE
  useEffect(() => {

    axiosInstance
      .get("/vehicle-locations")
      .then((res) => {
        setAllLocations(res.data);
      })
      .catch((err) => console.log(err));

  }, [axiosInstance]);

  // FILTER LOCATION SUGGESTIONS
  useEffect(() => {

    if (!location) {
      setFilteredLocations([]);
      return;
    }

    const matches = allLocations.filter((loc) =>
      loc.toLowerCase().includes(location.toLowerCase())
    );

    setFilteredLocations(matches.slice(0, 5));

  }, [location, allLocations]);

  // SEARCH FUNCTION
  const handleSearch = (e) => {

    e.preventDefault();

    const query = new URLSearchParams();

    if (location) {
      query.append("location", location);
    }

    if (category) {
      query.append("category", category);
    }

    if (pickupDate) {
      query.append("date", pickupDate);
    }

    navigate(`/allVehicles?${query.toString()}`);
  };

  return (

    <div className="relative z-20 max-w-6xl mx-auto px-6 -mt-2 ">

      <form
        onSubmit={handleSearch}
        className="
          bg-white/90
          backdrop-blur-xl
          border-4 border-blue-500
          shadow-[0_10px_40px_rgba(0,0,0,0.08)]
          rounded-3xl
          p-5 md:p-7
        "
      >

        <div className="grid grid-cols-1 md:grid-cols-4 gap-5 items-end">

          {/* LOCATION */}
          <div className="relative">

            <label className="block font-semibold mb-3">
              Pickup Location
            </label>

            <div
              className="
                flex items-center gap-3
                bg-pink-50
                border border-gray-300
                rounded-2xl
                px-4 h-14
                focus-within:border-blue-400
                transition
              "
            >
              <HiOutlineLocationMarker
                className="text-sky-500"
                size={25}
              />

              <input
                type="text"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
                placeholder="Search location..."
                className="
                  w-full bg-transparent outline-none
                text-black placeholder:text-gray-500
                "
              />
            </div>

            {/* LOCATION SUGGESTION DROPDOWN */}
            {filteredLocations.length > 0 && (

              <div
                className="
                  absolute z-50
                  mt-2 w-full
                  bg-white
                  rounded-2xl
                  shadow-2xl
                  border border-gray-100
                  overflow-hidden
                "
              >

                {filteredLocations.map((loc, index) => (

                  <button
                    key={index}
                    type="button"
                    onClick={() => {
                      setLocation(loc);
                      setFilteredLocations([]);
                    }}
                    className="
                      w-full text-left
                      px-4 py-3
                      hover:bg-sky-50
                      transition
                      text-gray-700
                    "
                  >
                    📍 {loc}
                  </button>

                ))}

              </div>
            )}

          </div>

          {/* CATEGORY */}
          <div>

            <label className="block font-semibold mb-3">
              Vehicle Type
            </label>

            <div
              className="
                flex items-center gap-3
                bg-pink-50
                border border-gray-300
                rounded-2xl
                px-4 h-14
                focus-within:border-blue-400
                transition
              "
            >
              <FaCarSide className="text-sky-500" size={25} />

              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="
                  w-full bg-transparent outline-none
                  text-gray-600
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

            <label className="block font-semibold mb-3">
              Pickup Date
            </label>

            <input
              type="date"
              value={pickupDate}
              onChange={(e) => setPickupDate(e.target.value)}
              className="
                w-full h-14
                rounded-2xl
                border border-gray-300
                bg-pink-50
                px-4
                outline-none
                focus:border-blue-400
                transition
              "
            />

          </div>

          {/* SEARCH BUTTON */}
          <button
            type="submit"
            className="
              h-16
              rounded-2xl
              bg-blue-500
              hover:bg-blue-600
              text-white
              font-bold
              text-lg
              transition-all duration-300
              shadow-lg shadow-sky-200
              hover:-translate-y-1
              flex items-center justify-center gap-3
            "
          >
            <FaSearch />

            Search Vehicles
          </button>

        </div>

      </form>

    </div>
  );
};

export default QuickSearchBar;