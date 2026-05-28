import { useEffect, useState } from "react";

import { Link } from "react-router";

import { format } from "date-fns";

import Swal from "sweetalert2";

import useAxios from "../../hooks/useAxios";

import {
  FaCalendarAlt,
  FaCarSide,
  FaEye,
  FaTrashAlt,
  FaUserTie,
} from "react-icons/fa";

const MyBookings = () => {
  const axiosInstance = useAxios();

  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const fetchBookings = async () => {
      try {
        const res = await axiosInstance.get("/bookings");
        setBookings(res.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchBookings();
  }, [axiosInstance]);

  const handleCancel = (bookingId, vehicleId) => {
    Swal.fire({
      title: "Cancel Booking?",
      text: "This booking will be permanently removed.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, Cancel",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axiosInstance.delete(`/bookings/${bookingId}`);

          await axiosInstance.patch(`/vehicles/${vehicleId}`, {
            availability: "Available",
          });

          setBookings((prev) => prev.filter((b) => b._id !== bookingId));

          Swal.fire({
            icon: "success",
            title: "Booking Cancelled",
            timer: 1500,
            showConfirmButton: false,
          });
        } catch (err) {
          console.error(err);

          Swal.fire({
            icon: "error",
            title: "Cancellation Failed",
          });
        }
      }
    });
  };

  return (
    <section
      className="
      min-h-screen
      bg-gray-100
      p-6 md:p-8
    "
    >
      {/* HEADER */}
      <div
        className="mb-10
      "
      >
        <div>
          <p
            className="
             text-2xl text-center font-bold tracking-widest uppercase text-blue-600 mb-2
          "
          >
            Booking Management
          </p>

          <h2
            className="
            text-2xl text-center md:text-4xl
            font-black text-gray-900
          "
          >
            My Bookings: {bookings.length}
          </h2>
        </div>
      </div>

      {/* EMPTY */}
      {bookings.length === 0 ? (
        <div
          className="
          bg-white
          border border-gray-200
          rounded-4xl
          shadow-sm
          py-24 px-8
          text-center
        "
        >
          <div
            className="
            w-24 h-24 rounded-full
            bg-blue-100
            flex items-center justify-center
            text-blue-600 text-5xl
            mx-auto
          "
          >
            <FaCarSide />
          </div>

          <h3
            className="
            text-3xl font-black
            text-gray-900 mt-8
          "
          >
            No Bookings Yet
          </h3>

          <p
            className="
            text-gray-500 mt-4
            text-lg font-medium
            max-w-xl mx-auto
          "
          >
            Browse premium vehicles and book your next travel experience.
          </p>

          <Link
            to="/allVehicles"
            className="
              inline-flex items-center gap-3
              mt-10
              h-14 px-8
              rounded-2xl
              bg-linear-to-r
              from-blue-600
              via-indigo-600
              to-slate-900
              text-white
              font-bold
              text-lg
              shadow-xl shadow-blue-500/20
              hover:scale-[1.03]
              transition-all duration-300
            "
          >
            Explore Vehicles
          </Link>
        </div>
      ) : (
        <div
          className="
          bg-white
          border border-gray-400
          rounded-2xl
          shadow-sm
          overflow-hidden
        "
        >
          {/* TABLE HEADER */}
          <div
            className="
            hidden lg:grid
            grid-cols-12
            gap-4
            px-8 py-6
            bg-[#0B1120]/90 
            border-b border-gray-200
          "
          >
            <div
              className="
              col-span-4
              text-sm font-bold
              text-white uppercase
            "
            >
              Vehicle
            </div>

            <div
              className="
              col-span-2
              text-sm font-bold
              text-white uppercase
            "
            >
              Owner
            </div>

            <div
              className="
              col-span-2
              text-sm font-bold
              text-white uppercase
            "
            >
              Date
            </div>

            <div
              className="
              col-span-2
              text-sm font-bold
              text-white uppercase
            "
            >
              Price
            </div>

            <div
              className="
              col-span-2
              text-sm font-bold
              text-white uppercase text-right
            "
            >
              Actions
            </div>
          </div>

          {/* LIST */}
          <div>
            {bookings.map((b, index) => {
              const bookingDate = b.bookingDate
                ? new Date(b.bookingDate)
                : null;

              return (
                <div
                  key={b._id}
                  className={`
                    grid grid-cols-1 lg:grid-cols-12
                    gap-6 lg:gap-4
                    items-center
                    px-6 lg:px-8
                    py-4 border-b-2 border-gray-200
                    hover:bg-blue-100/40
                    transition-all duration-300
                    ${
                      index !== bookings.length - 1
                        ? "border-b border-gray-100"
                        : ""
                    }
                  `}
                >
                  {/* VEHICLE */}
                  <div
                    className="
                    lg:col-span-4
                    flex items-center gap-5
                  "
                  >
                    <div
                      className="
                      w-24 h-20
                      rounded-2xl
                      overflow-hidden
                      shrink-0
                      border border-gray-200
                    "
                    >
                      <img
                        src={
                          b.coverImage ||
                          "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop"
                        }
                        alt={b.vehicleName}
                        className="
                          w-full h-full
                          object-cover
                        "
                      />
                    </div>

                    <div>
                      <h3
                        className="
                        text-2xl font-black
                        text-gray-900
                      "
                      >
                        {b.vehicleName}
                      </h3>

                      <div
                        className="
                        flex items-center gap-2
                        mt-2
                      "
                      >
                        <span
                          className={`
                          px-3 py-1 rounded-full
                          text-xs font-bold
                          ${
                            b.status === "Pending"
                              ? `
                                bg-amber-100
                                text-amber-700
                              `
                              : `
                                bg-green-100
                                text-green-700
                              `
                          }
                        `}
                        >
                          {b.status}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* OWNER */}
                  <div
                    className="
                    lg:col-span-2
                    flex items-center gap-3
                  "
                  >
                    <div
                      className="
                      w-11 h-11 rounded-xl
                      bg-pink-100
                      flex items-center justify-center
                      text-pink-600
                    "
                    >
                      <FaUserTie />
                    </div>

                    <div>
                      <p
                        className="
                        text-xs uppercase
                        tracking-wide
                        text-gray-400 font-bold
                        mb-1 lg:hidden
                      "
                      >
                        Owner
                      </p>

                      <h4
                        className="
                        text-base font-bold
                        text-gray-900
                      "
                      >
                        {b.owner || b.ownerName}
                      </h4>
                    </div>
                  </div>

                  {/* DATE */}
                  <div
                    className="
                    lg:col-span-2
                    flex items-center gap-3
                  "
                  >
                    <div
                      className="
                      w-11 h-11 rounded-xl
                      bg-blue-100
                      flex items-center justify-center
                      text-blue-600
                    "
                    >
                      <FaCalendarAlt />
                    </div>

                    <div>
                      <p
                        className="
                        text-xs uppercase
                        tracking-wide
                        text-gray-400 font-bold
                        mb-1 lg:hidden
                      "
                      >
                        Booking Date
                      </p>

                      <h4
                        className="
                        text-sm font-bold
                        text-gray-900
                      "
                      >
                        {bookingDate
                          ? format(bookingDate, "dd MMM yyyy")
                          : "N/A"}
                      </h4>
                    </div>
                  </div>

                  {/* PRICE */}
                  <div
                    className="
                    lg:col-span-2
                  "
                  >
                    <p
                      className="
                      text-xs uppercase
                      tracking-wide
                      text-gray-400 font-bold
                      mb-2 lg:hidden
                    "
                    >
                      Rental Price
                    </p>

                    <h3
                      className="
                      text-3xl font-black
                      text-gray-900
                    "
                    >
                      ${b.pricePerDay}
                      <span
                        className="
                        text-base font-semibold
                        text-gray-500
                      "
                      >
                        /day
                      </span>
                    </h3>
                  </div>

                  {/* ACTIONS */}
                  <div
                    className="
                    lg:col-span-2
                    flex lg:justify-end
                    gap-3
                  "
                  >
                    <Link
                      to={`/vehicle/${b.vehicleId}`}
                      className="
                        h-12 px-5
                        rounded-2xl
                        bg-blue-50
                        hover:bg-blue-600
                        border border-blue-100
                        text-blue-600
                        hover:text-white
                        font-bold text-sm
                        flex items-center justify-center gap-2
                        transition-all duration-300
                      "
                    >
                      <FaEye />
                      View
                    </Link>

                    <button
                      onClick={() => handleCancel(b._id, b.vehicleId)}
                      className="
                        h-12 px-5
                        rounded-2xl
                        bg-red-50
                        hover:bg-red-500
                        border border-red-100
                        text-red-600
                        hover:text-white
                        font-bold text-sm
                        flex items-center justify-center gap-2
                        transition-all duration-300
                      "
                    >
                      <FaTrashAlt />
                      Cancel
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </section>
  );
};

export default MyBookings;
