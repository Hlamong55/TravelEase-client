import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

import Swal from "sweetalert2";

// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import useAxios from "../../hooks/useAxios";
import useAuth from "../../hooks/useAuth";

import {
  FaCarSide,
  FaMapMarkerAlt,
  FaDollarSign,
  FaImage,
  FaClipboardList,
  FaUserTie,
  FaCheckCircle,
  FaArrowLeft,
  FaSave,
} from "react-icons/fa";

const UpdateVehicle = () => {
  const { id } = useParams();

  const axiosInstance = useAxios();

  const { user } = useAuth();

  const navigate = useNavigate();

  const [vehicle, setVehicle] = useState(null);

  const [loading, setLoading] = useState(true);

  const [imagePreview, setImagePreview] = useState("");

  useEffect(() => {
    axiosInstance
      .get(`/vehicles/${id}`)
      .then((res) => {
        setVehicle(res.data);
        setImagePreview(res.data.coverImage);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [axiosInstance, id]);

  const handleUpdateVehicle = (e) => {
    e.preventDefault();

    const form = e.target;

    const updatedVehicle = {
      vehicleName: form.name.value,
      owner: form.owner.value,
      category: form.category.value,
      pricePerDay: parseFloat(form.price.value),
      location: form.location.value,
      availability: form.availability.value,
      description: form.description.value,
      coverImage: form.image.value,
      userEmail: user?.email,
    };

    axiosInstance
      .put(`/vehicles/${id}`, updatedVehicle)
      .then(() => {
        Swal.fire({
          icon: "success",
          title: "Vehicle Updated Successfully!",
          text: "Your vehicle details have been updated.",
          confirmButtonColor: "#2563eb",
        });

        navigate("/dashboard/my-vehicles");
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Failed to Update Vehicle!",
        });
      });
  };

  // LOADING
  if (loading) {
    return (
      <section
        className=" min-h-screen  bg-[#f6f8fc]  flex items-center justify-center  p-6
      "
      >
        <div
          className=" bg-white  border border-gray-200  rounded-4xl  shadow-sm  px-12 py-14  text-center
        "
        >
          <div
            className=" w-16 h-16 rounded-full  border-4 border-blue-100  border-t-blue-600  animate-spin  mx-auto mb-6
          "
          ></div>

          <h3
            className="
            text-2xl font-black
            text-gray-900
          "
          >
            Loading Vehicle Data...
          </h3>

          <p
            className="
            text-gray-500 mt-3
            font-medium
          "
          >
            Please wait while we fetch your vehicle information.
          </p>
        </div>
      </section>
    );
  }

  // NOT FOUND
  if (!vehicle) {
    return (
      <section
        className=" min-h-screen bg-[#f6f8fc]  flex items-center justify-center  p-6
      "
      >
        <div
          className=" bg-white  border border-gray-200  rounded-4xl  shadow-sm  px-12 py-14  text-center
        "
        >
          <h3
            className="
            text-3xl font-black
            text-gray-900
          "
          >
            Vehicle Not Found
          </h3>

          <p
            className="
            text-gray-500 mt-3
            font-medium
          "
          >
            The requested vehicle does not exist.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className=" mx-auto min-h-screen bg-gray-200 p-6 md:p-10">

      {/* TOP */}
      <div
        className=" relative flex items-center justify-center mb-10"
      >
        <button
          onClick={() => navigate(-1)}
          className=" absolute top-8 left-2 text-xl underline tracking-wider rounded-2xl hover:text-blue-500 hover:scale-105 text-gray-700  font-bold  flex items-center gap-2  transition-all duration-300"
        >
          <FaArrowLeft size={20} />
          Back to Vehicle
        </button>

        <div>
          <p
            className=" text-2xl text-center font-bold tracking-widest  uppercase text-blue-600  mb-2"
          >
            Vehicle Management
          </p>
        </div>
      </div>

      {/* CARD */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.45 }}
        className=" max-w-8xl mx-auto  bg-white  border border-gray-300  rounded-3xl  shadow-sm  overflow-hidden"
      >
        {/* TOP BANNER */}
        <div
          className=" relative  bg-[#0B1120]/90  px-8 md:px-10  py-8  overflow-hidden
        "
        >

          <div
            className="relative z-10 flex items-center gap-8"
          >
            <div
              className=" w-20 h-20 rounded-xl  bg-white/10  border border-white/10  backdrop-blur-xl  flex items-center justify-center  text-white text-4xl
            "
            >
              <FaCarSide />
            </div>

            <div className="text-white">
              <p
                className=" uppercase tracking-[0.25em] text-blue-100 text-sm font-semibold mb-2 "
              >
                Premium Rental Platform
              </p>

              <h3
                className=" text-3xl md:text-4xl font-black"
              >
                Edit Vehicle Information
              </h3>

              <p
                className="
                text-blue-100 mt-2
                text-base font-medium
              "
              >
                Keep your listing updated for better bookings.
              </p>
            </div>
          </div>
        </div>

        {/* BODY */}
        <div
          className="
          grid grid-cols-1 xl:grid-cols-5
        "
        >
          {/* LEFT IMAGE */}
          <div
            className=" xl:col-span-2  border-r border-gray-200  bg-gray-50 p-8"
          >
            <div
              className="sticky top-8"
            >
              <p
                className=" text-sm uppercase tracking-[0.25em] text-gray-600 font-bold mb-5"
              >
                Vehicle Preview
              </p>

              <div
                className=" rounded-3xl overflow-hidden  border border-gray-200  bg-white"
              >
                <img
                  src={
                    imagePreview ||
                    "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=1200&auto=format&fit=crop"
                  }
                  alt="preview"
                  className="
                    w-full h-[420px]
                    object-cover
                  "
                />
              </div>

              <div
                className=" mt-6 bg-white  border border-gray-300  rounded-3xl  p-6
              "
              >
                <h3
                  className=" text-3xl font-black text-gray-900"
                >
                  {vehicle.vehicleName}
                </h3>

                <div
                  className="
                  flex items-center gap-2
                  mt-3 text-gray-700
                  font-medium
                "
                >
                  <FaMapMarkerAlt size={20} className="text-red-500" />
                  {vehicle.location}
                </div>

                <div
                  className=" mt-7 flex items-center justify-between"
                >
                  <div>
                    <p
                      className=" text-gray-600"
                    >
                      Rental Price
                    </p>

                    <h4
                      className=" text-4xl font-black text-gray-900"
                    >
                      ${vehicle.pricePerDay}
                      <span
                        className="
                        text-lg font-semibold
                        text-gray-600
                      "
                      >
                        /day
                      </span>
                    </h4>
                  </div>

                  <span
                    className={`
                    px-5 py-3 rounded-3xl
                    text-sm font-bold
                    ${
                      vehicle.availability === "Available"
                        ? `
                          bg-green-100
                          text-green-700
                        `
                        : `
                          bg-red-100
                          text-red-700
                        `
                    }
                  `}
                  >
                    {vehicle.availability}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT FORM */}
          <div
            className=" xl:col-span-3  p-8 md:p-10"
          >
            <form onSubmit={handleUpdateVehicle}>
              {/* SECTION */}
              <div className="mb-10">
                <h3
                  className=" text-3xl font-black text-gray-900 mb-2"
                >
                  Vehicle Information
                </h3>

                <p
                  className=" text-gray-600 font-medium"
                >
                  Update your vehicle details and pricing.
                </p>
              </div>

              {/* GRID */}
              <div
                className="
                grid grid-cols-1 md:grid-cols-2
                gap-8
              "
              >
                {/* VEHICLE NAME */}
                <div>
                  <label
                    className=" flex items-center gap-2 text-[15px]  font-semibold  text-gray-800  mb-2
                  "
                  >
                    <FaCarSide size={20} className="text-blue-500" />
                    Vehicle Name
                  </label>

                  <input
                    type="text"
                    name="name"
                    defaultValue={vehicle.vehicleName}
                    required
                    className=" w-full h-16  rounded-2xl  border border-gray-300  bg-white  px-5  text-[16px]  font-medium  text-gray-800  outline-none  focus:border-blue-500  focus:ring-4  focus:ring-blue-100  transition-all"
                  />
                </div>

                {/* OWNER */}
                <div>
                  <label
                    className=" flex items-center gap-2  text-[15px]  font-semibold  text-gray-800  mb-2
                  "
                  >
                    <FaUserTie size={20} className="text-pink-500" />
                    Owner Name
                  </label>

                  <input
                    type="text"
                    name="owner"
                    defaultValue={vehicle.owner}
                    required
                    className=" w-full h-16  rounded-2xl  border border-gray-300  bg-white  px-5  text-[16px]  font-medium  text-gray-800  outline-none  focus:border-blue-500  focus:ring-4  focus:ring-blue-100  transition-all"
                  />
                </div>

                {/* CATEGORY */}
                <div>
                  <label
                    className=" flex items-center gap-2  text-[15px]  font-semibold  text-gray-800  mb-2
                  "
                  >
                    <FaClipboardList size={20} className="text-indigo-500" />
                    Category
                  </label>

                  <select
                    name="category"
                    defaultValue={vehicle.category}
                    className=" w-full h-16  rounded-2xl  border border-gray-300  bg-white  px-5  text-[16px]  font-medium  text-gray-800  outline-none  focus:border-blue-500  focus:ring-4  focus:ring-blue-100  transition-all"
                  >
                    <option value="Sedan">Sedan</option>

                    <option value="SUV">SUV</option>

                    <option value="Electric">Electric</option>

                    <option value="Van">Van</option>
                  </select>
                </div>

                {/* PRICE */}
                <div>
                  <label
                    className=" flex items-center gap-2  text-[15px]  font-semibold  text-gray-800  mb-2
                  "
                  >
                    <FaDollarSign size={20} className="text-green-500" />
                    Price Per Day
                  </label>

                  <input
                    type="number"
                    name="price"
                    min="1"
                    defaultValue={vehicle.pricePerDay}
                    required
                    className=" w-full h-16  rounded-2xl  border border-gray-300  bg-white  px-5  text-[16px]  font-medium  text-gray-800  outline-none  focus:border-blue-500  focus:ring-4  focus:ring-blue-100  transition-all"
                  />
                </div>

                {/* LOCATION */}
                <div>
                  <label
                    className=" flex items-center gap-2  text-[15px]  font-semibold  text-gray-800  mb-2
                  "
                  >
                    <FaMapMarkerAlt size={20} className="text-red-500" />
                    Location
                  </label>

                  <input
                    type="text"
                    name="location"
                    defaultValue={vehicle.location}
                    required
                    className=" w-full h-16  rounded-2xl  border border-gray-300  bg-white  px-5  text-[16px]  font-medium  text-gray-800  outline-none  focus:border-blue-500  focus:ring-4  focus:ring-blue-100  transition-all"
                  />
                </div>

                {/* AVAILABILITY */}
                <div>
                  <label
                    className=" flex items-center gap-2  text-[15px]  font-semibold  text-gray-800  mb-2
                  "
                  >
                    <FaCheckCircle size={20} className="text-emerald-500" />
                    Availability
                  </label>

                  <select
                    name="availability"
                    defaultValue={vehicle.availability}
                    className=" w-full h-16  rounded-2xl border border-gray-300  bg-white  px-5  text-[16px]  font-medium  text-gray-800  outline-none  focus:border-blue-500  focus:ring-4  focus:ring-blue-100  transition-all"
                  >
                    <option value="Available">Available</option>

                    <option value="Booked">Booked</option>
                  </select>
                </div>
              </div>

              {/* IMAGE */}
              <div className="mt-8">
                <label
                  className=" flex items-center gap-2  text-[15px] font-semibold text-gray-800 mb-2
                "
                >
                  <FaImage size={20} className="text-orange-500" />
                  Cover Image URL
                </label>

                <input
                  type="text"
                  name="image"
                  defaultValue={vehicle.coverImage}
                  onChange={(e) => setImagePreview(e.target.value)}
                  className=" w-full h-16 rounded-2xl  border border-gray-300  bg-white  px-5  text-[16px]  font-medium  text-gray-800  outline-none  focus:border-blue-500  focus:ring-4  focus:ring-blue-100  transition-all"
                />
              </div>

              {/* DESCRIPTION */}
              <div className="mt-8">
                <label
                  className=" text-[15px] font-semibold text-gray-800 mb-3 block
                "
                >
                  Vehicle Description
                </label>

                <textarea
                  name="description"
                  defaultValue={vehicle.description}
                  rows="6"
                  className=" w-full  rounded-2xl  border border-gray-300  bg-white  p-5  text-[16px]  font-medium  text-gray-800  outline-none  focus:border-blue-500  focus:ring-4  focus:ring-blue-100  transition-all  resize-none"
                ></textarea>
              </div>

              {/* BUTTONS */}
              <div
                className=" flex flex-col sm:flex-row gap-4  pt-10
              "
              >
                <button
                  type="button"
                  onClick={() => navigate(-1)}
                  className=" h-16 px-10  rounded-2xl  border border-gray-400  bg-gray-200 hover:bg-white  text-gray-700  font-bold text-lg transition-all duration-300"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className=" h-16 px-10  rounded-2xl  bg-[#0B1120]/90  hover:bg-blue-500  text-white  font-bold text-lg  shadow-xl shadow-blue-500/20  hover:scale-[1.02]  transition-all duration-300  flex items-center justify-center gap-3"
                >
                  <FaSave />
                  Save Changes
                </button>
              </div>
            </form>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default UpdateVehicle;
