import { useEffect, useState } from "react";

import Swal from "sweetalert2";

import { Link } from "react-router";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";

import {
  FaCarSide,
  FaMapMarkerAlt,
  FaEdit,
  FaTrashAlt,
  FaEye,
  FaPlus,
} from "react-icons/fa";

const MyVehicles = () => {
  const axiosInstance = useAxios();

  const { user } = useAuth();

  const [vehicles, setVehicles] = useState([]);

  useEffect(() => {
    if (user?.email) {
      axiosInstance
        .get(`/vehicles/user/${user.email}`)
        .then((res) => setVehicles(res.data))
        .catch((err) => console.error(err));
    }
  }, [axiosInstance, user]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Delete Vehicle?",
      text:
        "This vehicle will be permanently removed.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Delete",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosInstance
          .delete(`/vehicles/${id}`)
          .then(() => {
            setVehicles((prev) =>
              prev.filter((v) => v._id !== id)
            );

            Swal.fire(
              "Deleted!",
              "Vehicle removed successfully.",
              "success"
            );
          })
          .catch(() => {
            Swal.fire(
              "Error!",
              "Failed to delete vehicle.",
              "error"
            );
          });
      }
    });
  };

  return (
    <section className="
      min-h-screen
      bg-gray-100
      p-6 md:p-8
    ">

      {/* HEADER */}
      <div className="mb-10
      ">

        <div>

          <p className="
            text-2xl text-center font-bold tracking-widest uppercase text-blue-600 mb-2
          ">
            Vehicle Management
          </p>

          <h2 className=" text-3xl text-center md:text-4xl font-black text-gray-900
          ">
            My Vehicles: {vehicles.length}
          </h2>

        </div>

      </div>

      {/* EMPTY STATE */}
      {vehicles.length === 0 ? (

        <div className=" bg-white  border border-gray-200 rounded-4xl shadow-sm  py-24 px-8 text-center
        ">

          <div className="  w-24 h-24 rounded-full  bg-blue-100  flex items-center justify-center  text-blue-600 text-5xl  mx-auto
          ">
            <FaCarSide />
          </div>

          <h3 className="
            text-3xl font-black
            text-gray-900 mt-8
          ">
            No Vehicles Found
          </h3>

          <p className="
            text-gray-500 mt-4
            text-lg font-medium
            max-w-xl mx-auto
          ">
            Start listing your premium vehicles
            to receive bookings from travelers.
          </p>

          <Link
            to="/dashboard/add-vehicle"
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
            <FaPlus />
            Add Vehicle
          </Link>

        </div>

      ) : (

        <div className="
          grid grid-cols-1
          sm:grid-cols-2
          xl:grid-cols-3
          gap-8
        ">

          {vehicles.map((vehicle, index) => (

            <motion.div
              key={vehicle._id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                delay: index * 0.08,
                duration: 0.4,
              }}
              viewport={{ once: true }}
              className="  group  bg-white  border border-gray-200  rounded-4xl  shadow-sm  overflow-hidden  hover:shadow-xl  hover:-translate-y-1  transition-all duration-500"
            >

              {/* IMAGE */}
              <div className="
                relative
                h-60 overflow-hidden
              ">

                <motion.img
                  whileHover={{ scale: 1.06 }}
                  transition={{ duration: 0.5 }}
                  src={
                    vehicle.coverImage ||
                    "https://i.ibb.co/QjkHXLkH/istockphoto-931069196-612x612.jpg"
                  }
                  alt={vehicle.vehicleName}
                  className="
                    w-full h-full object-cover
                  "
                />

                {/* OVERLAY */}
                <div className="
                  absolute inset-0
                  bg-linear-to-t
                  from-black/80
                  via-black/20
                  to-transparent
                "></div>

                {/* STATUS */}
                <div className="
                  absolute top-5 right-5
                ">

               

                </div>

                {/* TITLE */}
                <div className="
                  absolute bottom-5 left-3
                ">

                  <h3 className="
                    text-2xl font-black
                    text-white
                  ">
                    {vehicle.vehicleName}
                  </h3>

                  <div className="
                    flex items-center gap-2
                    mt-1 text-white/90
                    font-medium
                  ">
                    <FaMapMarkerAlt />
                    {vehicle.location}
                  </div>

                </div>

              </div>

              {/* CONTENT */}
              <div className="p-5">

                {/* PRICE */}
                <div className="
                  flex items-center justify-between
                  mb-7
                ">

                  <div>

                    <p className="
                      text-sm text-gray-600
                      font-medium
                    ">
                      Rental Price
                    </p>

                    <h4 className="
                      text-3xl font-black
                      text-gray-900
                    ">
                      ${vehicle.pricePerDay}
                      <span className="
                        text-lg font-semibold
                        text-gray-500
                      ">
                        /day
                      </span>
                    </h4>

                  </div>

                  <div 
                    className={`
                      px-4 py-2 rounded-2xl
                      text-sm font-bold
                      
                      border
                      ${
                        vehicle.availability ===
                        "Available"
                          ? `
                            bg-green-50
                            border-green-400
                            text-green-500
                          `
                          : `
                            bg-red-50
                            border-red-400
                            text-red-400
                          `
                      }
                    `}
                  >
                    {vehicle.availability}
      
                  </div>

                </div>

                {/* BUTTONS */}
                <div className="
                  grid grid-cols-3 gap-3
                ">

                  {/* DETAILS */}
                  <Link
                    to={`/vehicle/${vehicle._id}`}
                    className="
                      h-12 rounded-xl
                      bg-blue-100
                      hover:bg-blue-500
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

                  {/* UPDATE */}
                  <Link
                    to={`/updateDetails/${vehicle._id}`}
                    className="
                      h-12 rounded-xl
                      bg-amber-100
                      hover:bg-amber-500
                      border border-amber-100
                      text-amber-600
                      hover:text-white
                      font-bold text-sm
                      flex items-center justify-center gap-2
                      transition-all duration-300
                    "
                  >
                    <FaEdit />
                    Edit
                  </Link>

                  {/* DELETE */}
                  <button
                    onClick={() =>
                      handleDelete(vehicle._id)
                    }
                    className="
                      h-12 rounded-xl
                      bg-red-100
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
                    Delete
                  </button>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      )}

    </section>
  );
};

export default MyVehicles;