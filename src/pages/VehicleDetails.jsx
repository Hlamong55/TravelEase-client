import { useEffect, useState, useContext } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";
import {
  FaCarSide,
  FaMapMarkerAlt,
  FaStar,
  FaUserCircle,
  FaCheckCircle,
  FaSnowflake,
  FaBluetoothB,
  FaGasPump,
} from "react-icons/fa";

import {
  MdSecurity,
  MdAirlineSeatReclineExtra,
} from "react-icons/md";

import { GrMoney } from "react-icons/gr";
import { GiGearStickPattern } from "react-icons/gi";
import useAxios from "../hooks/useAxios";
import Swal from "sweetalert2";
import { AuthContext } from "../context/AuthContext";

const VehicleDetails = () => {
  const { id } = useParams();
  const axiosInstance = useAxios();
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState(null);
  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(`/vehicles/${id}`)
      .then((res) => setVehicle(res.data))
      .catch((err) => console.error(err));

    axiosInstance
      .get("/vehicles")
      .then((res) => {
        setVehicles(res.data.vehicles || []);
      })
      .catch((err) => console.error(err));
  }, [axiosInstance, id]);

  if (!vehicle) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <span className="loading loading-spinner loading-lg text-blue-500"></span>
      </div>
    );
  }

  const {
    coverImage,
    vehicleName,
    description,
    category,
    location,
    availability,
    pricePerDay,
    owner,
    userEmail,
  } = vehicle;

  const relatedVehicles = vehicles
    .filter((v) => v._id !== vehicle._id)
    .slice(0, 3);

  /* BOOKING */
  const handleBooking = async () => {
    if (!user) {
      Swal.fire({
        title: "Login Required 🔒",
        text: "Please login to book this vehicle.",
        icon: "warning",
        showCancelButton: true,
        confirmButtonText: "Login Now",
        confirmButtonColor: "red",
      }).then((res) => {
        if (res.isConfirmed) {
          navigate("/login", {
            state: { from: `/vehicle/${id}` },
          });
        }
      });

      return;
    }

    const result = await Swal.fire({
      title: "Confirm Booking?",
      text: `Book ${vehicleName} for $${pricePerDay}/day?`,
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, Book It",
    });

    if (!result.isConfirmed) return;

    try {
      await axiosInstance.post("/bookings", {
        vehicleId: id,
        vehicleName,
        pricePerDay,
        owner,
        userEmail: user.email,
        status: "pending",
        bookingDate: new Date(),
      });

      await axiosInstance.patch(`/vehicles/${id}`, {
        availability: "Booked",
      });

      setVehicle((prev) => ({
        ...prev,
        availability: "Booked",
      }));

      await Swal.fire({
        icon: "success",
        title: "Booking Confirmed 🚘",
        text: "Your booking request has been submitted successfully!",
        confirmButtonColor: "#2563eb",
      });

      navigate("/myBookings");

    } catch {
      Swal.fire({
        icon: "error",
        title: "Booking Failed",
        text: "Please try again later.",
      });
    }
  };

  return (
    <section className="bg-gray-100 min-h-screen py-6">
      <div className="max-w-[1450px] mx-auto px-5">

        {/* HERO IMAGE */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className=" rounded-4xl  overflow-hidden  shadow-[0_20px_60px_rgba(0,0,0,0.20)]  bg-white  border border-gray-200  relative"
        >
          <img
            src={coverImage}
            alt={vehicleName}
            className="
              w-full
              md:h-[550px]
              object-cover
              hover:scale-105
              transition duration-700"
          />

        </motion.div>

        {/* TITLE SECTION */}
        <div className="my-10 px-4">

          <h1
            className=" text-5xl md:text-6xl  font-black  tracking-tight  text-gray-900  leading-tight"
          >
            {vehicleName}
          </h1>

          <p className="flex items-center gap-2 text-gray-700 mt-4 text-lg font-semibold">
            <FaMapMarkerAlt size={22} className="text-blue-500" />
            {location}
          </p>

          {/* BADGES */}
          <div className="flex flex-wrap gap-3 mt-5">

            <span
              className="
                px-4 py-2 rounded-full
                bg-yellow-100
                border border-gray-400
                text-yellow-600
                 font-semibold
                flex items-center gap-2
              "
            >
              <FaStar size={20}/>
              4.8 Rated
            </span>

            <span
              className="
                px-4 py-2 rounded-full
                bg-green-100
                border border-gray-400
                text-green-700
                 font-semibold
                flex items-center gap-2
              "
            >
              <FaCheckCircle size={18}/>
              Verified Vehicle
            </span>

            <span
              className="
                px-4 py-2 rounded-full
                bg-pink-100
                border border-gray-400
                text-pink-700
               font-semibold
                flex items-center gap-2
              "
            >
              <MdSecurity size={20}/>
              Secure Booking
            </span>

          </div>

          {/* META */}
          <div className="flex flex-wrap gap-8 mt-5 text-sm text-gray-700 font-medium">
            <span>🚘 120+ Trips Completed</span>
            <span>✔ Fully Insured</span>
            <span>🕒 Recently Added</span>
          </div>

        </div>

        {/* MAIN GRID */}
        <div className="grid lg:grid-cols-3 gap-8">

          {/* LEFT SIDE */}
          <div className="lg:col-span-2 space-y-7">

            {/* DESCRIPTION */}
            <div
              className="
                bg-white/95
                backdrop-blur-xl
                border border-gray-200
                rounded-[30px]
                p-6
                shadow-[0_10px_40px_rgba(0,0,0,0.10)]
              "
            >

              <h2 className="text-2xl font-bold tracking-tight text-gray-900 border-b border-gray-400 mb-5">
                About This Vehicle
              </h2>

              <p className="text-gray-700 leading-8 text-lg font-medium">
                {description}
              </p>

              {/* INFO */}
              <div className="grid md:grid-cols-2 gap-5 mt-8">

                <div className="bg-blue-100 border border-blue-200 rounded-2xl p-5">
                  <p className="text-gray-600 text-sm font-semibold mb-2">
                    Vehicle Category
                  </p>

                  <h3 className="text-2xl font-bold text-gray-900">
                    {category}
                  </h3>
                </div>

                <div className="bg-pink-100 border border-pink-200 rounded-2xl p-5">
                  <p className="text-gray-600 text-sm font-semibold mb-3">
                    Availability
                  </p>

                  <span
                    className={`
                      px-4 py-2 rounded-xl text-lg font-bold
                      ${
                        availability === "Available"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-300 text-red-700"
                      }
                    `}
                  >
                    {availability}
                  </span>
                </div>

              </div>
            </div>

            {/* FEATURES */}
            <div
              className="
                bg-white/95
                backdrop-blur-xl
                border border-gray-200
                rounded-[30px]
                p-6
                shadow-[0_10px_40px_rgba(0,0,0,0.10)]
              "
            >

              <h2 className="text-2xl font-bold tracking-tight text-gray-900 border-b border-gray-400 mb-7">
                Premium Features
              </h2>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-5">

                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 text-center">
                  <GiGearStickPattern className="mx-auto text-4xl text-blue-500 mb-3" />
                  <p className="font-bold">
                    Automatic
                  </p>
                </div>

                <div className="bg-pink-50 border border-pink-200 rounded-2xl p-5 text-center">
                  <FaSnowflake className="mx-auto text-4xl text-pink-500 mb-3" />
                  <p className="font-bold ">
                    Air Conditioning
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 text-center">
                  <FaBluetoothB className="mx-auto text-4xl text-blue-500 mb-3" />
                  <p className="font-bold ">
                    Bluetooth
                  </p>
                </div>

                <div className="bg-pink-50 border border-pink-200 rounded-2xl p-5 text-center">
                  <MdAirlineSeatReclineExtra className="mx-auto text-4xl text-pink-500 mb-3" />
                  <p className="font-bold ">
                    Comfortable Seats
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-2xl p-5 text-center">
                  <FaGasPump className="mx-auto text-4xl text-blue-500 mb-3" />
                  <p className="font-bold ">
                    Fuel Efficient
                  </p>
                </div>

                <div className="bg-pink-50 border border-pink-200 rounded-2xl p-5 text-center">
                  <FaCarSide className="mx-auto text-4xl text-pink-500 mb-3" />
                  <p className="font-bold ">
                    Smooth Ride
                  </p>
                </div>

              </div>

            </div>

            {/* RENTAL RULES */}
            <div
              className="
                bg-white/95
                backdrop-blur-xl
                border border-gray-200
                rounded-[30px]
                p-8
                shadow-[0_10px_40px_rgba(0,0,0,0.10)]
              "
            >

              <h2 className="text-2xl font-bold tracking-tight text-gray-900 border-b border-gray-400 mb-6">
                Rental Rules
              </h2>

              <ul className="space-y-4 text-gray-800 font-medium">

                <li>• Valid driving license required</li>

                <li>• Fuel cost not included</li>

                <li>• Late return may incur additional charges</li>

                <li>• No illegal usage allowed</li>

                <li>• Driver must be 18+ years old</li>

              </ul>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6 sticky top-28 h-fit">

            {/* PRICE CARD */}
            <div
              className="
                bg-white
                border border-gray-200
                rounded-[30px]
                shadow-[0_10px_40px_rgba(0,0,0,0.10)]
                p-7
                text-center
              "
             >

              <p className="text-gray-600 font-semibold flex items-center justify-center gap-2">
                <GrMoney className="text-blue-500" />
                Starting From
              </p>

              <h2 className="text-5xl font-black text-blue-600 tracking-tight mt-3">
                ${pricePerDay} <span className="text-gray-500 text-xl mt-2 font-medium">
                / per day
              </span>
              </h2>

              

              {/* BOOK BUTTON */}
              <button
                onClick={handleBooking}
                disabled={availability !== "Available"}
                className={`w-full py-4 rounded-2xl font-bold text-lg mt-7 transition-all duration-300 ${
                  availability === "Available"
                    ? "bg-linear-to-r from-blue-500 to-sky-500 hover:from-blue-600 hover:to-sky-600 text-white shadow-lg shadow-blue-200 hover:scale-[1.02]"
                    : "bg-gray-300 text-gray-500 cursor-not-allowed"
                }`}
              >
                {availability === "Available"
                  ? "Book This Vehicle"
                  : "Already Booked"}
              </button>

            </div>

            {/* OWNER CARD */}
            <div
              className="
                bg-white
                border border-gray-200
                rounded-[30px]
                shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                p-6
              "
             >

              <h3 className="text-2xl font-bold text-gray-900 border-b border-gray-300 mb-5">
                Vehicle Owner
              </h3>

              <div className="flex items-center gap-5">

                <FaUserCircle className="text-7xl" />

                <div>
                  <p className="font-bold text-gray-900 text-lg">
                    {owner}
                  </p>

                  <p className="text-gray-500 font-medium">
                    {userEmail}
                  </p>
                </div>

              </div>

            </div>

            {/* RATING CARD */}
            <div
              className="
                bg-white
                border border-gray-200
                rounded-[30px]
                shadow-[0_10px_40px_rgba(0,0,0,0.08)]
                p-6
              "
            >

              <h3 className="text-2xl font-bold text-gray-900 border-b border-gray-300 mb-5">
                User Rating
              </h3>

              <div className="flex gap-1 text-yellow-500 text-2xl">
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar />
                <FaStar className="opacity-50" />
              </div>

              <p className="text-gray-600 text-lg mt-3 font-bold">
                4.8 average rating from renters
              </p>

              <div className="mt-4 flex items-center gap-2 text-gray-700 font-medium">
                <span>120+ verified reviews</span>
              </div>

            </div>

          </div>

        </div>

        {/* RELATED VEHICLES */}
        <div className="mt-24">

          <div className="flex items-center justify-between mb-10">

            <h2 className="text-4xl font-black text-gray-900 tracking-tight">
              You May Also Like
            </h2>

            <Link
              to="/allVehicles"
              className="text-blue-600 text-lg font-bold hover:underline"
            >
              View All →
            </Link>

          </div>

          <div className="grid md:grid-cols-3 gap-7">

            {relatedVehicles.map((v) => (
              <div
                key={v._id}
                className="
                  bg-white
                  border border-gray-200
                  rounded-[30px]
                  overflow-hidden
                  shadow-[0_10px_40px_rgba(0,0,0,0.06)]
                  hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]
                  transition duration-300
                "
              >

                <div className="overflow-hidden">
                  <img
                    src={v.coverImage}
                    alt={v.vehicleName}
                    className="
                      w-full
                      h-64
                      object-cover
                      hover:scale-105
                      transition duration-500
                    "
                  />
                </div>

                <div className="p-6">

                  <div className="flex justify-between items-center">

                    <h3 className="text-2xl font-bold text-gray-900">
                      {v.vehicleName}
                    </h3>

                    <span className="text-blue-600 font-black text-2xl">
                      ${v.pricePerDay}
                    </span>

                  </div>

                  <div className="flex items-center gap-2 mt-3 text-gray-600 font-medium">
                    <FaMapMarkerAlt className="text-blue-500" />
                    {v.location}
                  </div>

                  <Link
                    to={`/vehicle/${v._id}`}
                    className="
                      mt-6 inline-block w-full text-center
                      bg-[#1e293b] hover:bg-blue-600
                      text-white
                      py-3 rounded-2xl
                      font-bold
                      transition
                    "
                  >
                    View Details
                  </Link>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>
    </section>
  );
};

export default VehicleDetails;