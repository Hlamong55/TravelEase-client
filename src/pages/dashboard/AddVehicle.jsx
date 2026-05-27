import { useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "framer-motion";

import Swal from "sweetalert2";

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
} from "react-icons/fa";

const AddVehicle = () => {
  const axiosInstance = useAxios();

  const { user } = useAuth();

  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    const form = e.target;

    const newVehicle = {
      vehicleName: form.name.value,
      owner: form.owner.value,
      category: form.category.value,
      pricePerDay: parseFloat(form.price.value),
      location: form.location.value,
      availability: form.availability.value,
      description: form.description.value,
      coverImage: form.coverImage.value,
      userEmail: user?.email || "Not Logged In",
      createdAt: new Date(),
    };

    try {
      const res = await axiosInstance.post(
        "/vehicles",
        newVehicle
      );

      if (res.data.insertedId) {
        Swal.fire({
          title: "Vehicle Added Successfully!",
          text: "Your vehicle is now live on TravelEase.",
          icon: "success",
          confirmButtonColor: "#2563eb",
        });

        form.reset();
      }
    } catch (err) {
      Swal.fire({
        title: "Error!",
        text:
          "Something went wrong while adding the vehicle.",
        icon: "error",
        confirmButtonColor: "#EF4444",
      });

      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="min-h-screen bg-gray-200 p-6 md:p-8">

      {/* HEADER */}
      <div className="mb-8">

        <p className="
          text-2xl text-center font-bold tracking-widest uppercase text-blue-600 mb-2
        ">
          Vehicle Management
        </p>

      </div>

      {/* FORM CARD */}
      <motion.div
        initial={{ opacity: 0, y: 35 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className=" bg-white/95  backdrop-blur-xl  border border-gray-300  shadow-xl  rounded-4xl  overflow-hidden"
      >

        {/* TOP BANNER */}
        <div className=" relative  bg-[#0B1120]/90   px-8 md:px-10 py-10 overflow-hidden">

          <div className="
            relative z-10
            flex items-center gap-7
          ">

            <div className=" w-20 h-20 rounded-xl bg-white/10  border  border-white/10  backdrop-blur-xl  flex  items-center justify-center
              text-white text-4xl
            ">
              <FaCarSide size={45}/>
            </div>

            <div className="text-white">

              <p className=" uppercase tracking-[0.25em]  text-blue-300 text-sm  font-semibold mb-2">
                Premium Rental Platform
              </p>

              <h3 className="
                text-3xl md:text-4xl
                font-black
              ">
                Vehicle Registration
              </h3>

              <p className="
                text-blue-100 mt-2
                text-base font-medium
              ">
                Fill in accurate details to attract
                more premium bookings.
              </p>

            </div>

          </div>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="p-8 md:p-12"
        >

          {/* TITLE */}
          <div className="mb-8">

            <h3 className="
              text-2xl font-black
              text-gray-900
            ">
              Vehicle Information
            </h3>

            <p className="
              text-gray-600 mt-2
              text-base font-medium
            ">
              Complete the form below with your
              vehicle details.
            </p>

          </div>

          {/* GRID */}
          <div className="
            grid grid-cols-1 md:grid-cols-2
            gap-8
          ">

            {/* VEHICLE NAME */}
            <div>

              <label className=" flex items-center gap-2  text-[15px]  font-bold  text-gray-800  mb-2
              ">
                <FaCarSide size={25} className="text-blue-500" />
                Vehicle Name
              </label>

              <input
                type="text"
                name="name"
                required
                placeholder="e.g. Toyota Premio"
                className=" w-full h-16  rounded-2xl  border border-gray-400  bg-white px-5  text-[16px]  font-medium  text-gray-800  placeholder:text-gray-400  placeholder:font-medium  outline-none  focus:border-blue-500  focus:ring-4   focus:ring-blue-100  transition-all"
              />

            </div>

            {/* OWNER */}
            <div>

              <label className="
                flex items-center gap-2
                text-[15px]
                font-bold
                text-gray-800
                mb-2
              ">
                <FaUserTie size={25}  className="text-pink-500" />
                Owner Name
              </label>

              <input
                type="text"
                name="owner"
                required
                placeholder="Owner name"
                className=" w-full h-16  rounded-2xl  border border-gray-400  bg-white  px-5  text-[16px]  font-medium  text-gray-800  placeholder:text-gray-400  placeholder:font-medium  outline-none  focus:border-blue-500  focus:ring-4  focus:ring-blue-100  transition-all"
              />

            </div>

            {/* CATEGORY */}
            <div>

              <label className="
                flex items-center gap-2
                text-[15px]
                font-bold
                text-gray-800
                mb-2
              ">
                <FaClipboardList size={25}  className="text-indigo-500" />
                Category
              </label>

              <select
                name="category"
                required
                className=" w-full h-16  rounded-2xl  border border-gray-400  bg-white  px-5  text-[16px]  font-medium  text-gray-800  outline-none  focus:border-blue-500  focus:ring-4  focus:ring-blue-100  transition-all"
              >
                <option value="">
                  Select Category
                </option>

                <option value="Sedan">
                  Sedan
                </option>

                <option value="SUV">
                  SUV
                </option>

                <option value="Electric">
                  Electric
                </option>

                <option value="Van">
                  Van
                </option>

              </select>

            </div>

            {/* PRICE */}
            <div>

              <label className="
                flex items-center gap-2
                text-[15px]
                font-bold
                text-gray-800
                mb-2
              ">
                <FaDollarSign size={25}  className="text-green-500" />
                Price Per Day
              </label>

              <input
                type="number"
                name="price"
                min="1"
                required
                placeholder="e.g. 80"
                className="
                  w-full h-16
                  rounded-2xl
                  border border-gray-400
                  bg-white
                  px-5
                  text-[16px]
                  font-medium
                  text-gray-800
                  placeholder:text-gray-400
                  placeholder:font-medium
                  outline-none
                  focus:border-blue-500
                  focus:ring-4
                  focus:ring-blue-100
                  transition-all
                "
              />

            </div>

            {/* LOCATION */}
            <div>

              <label className="
                flex items-center gap-2
                text-[15px]
                font-bold
                text-gray-800
                mb-2
              ">
                <FaMapMarkerAlt size={25}  className="text-red-500" />
                Location
              </label>

              <input
                type="text"
                name="location"
                required
                placeholder="Dhaka, Bangladesh"
                className="
                  w-full h-16
                  rounded-2xl
                  border border-gray-400
                  bg-white
                  px-5
                  text-[16px]
                  font-medium
                  text-gray-800
                  placeholder:text-gray-400
                  placeholder:font-medium
                  outline-none
                  focus:border-blue-500
                  focus:ring-4
                  focus:ring-blue-100
                  transition-all
                "
              />

            </div>

            {/* AVAILABILITY */}
            <div>

              <label className="
                flex items-center gap-2
                text-[15px]
                font-bold
                text-gray-800
                mb-2
              ">
                <FaCheckCircle size={25} className="text-emerald-500" />
                Availability
              </label>

              <select
                name="availability"
                required
                className="
                  w-full h-16
                  rounded-2xl
                  border border-gray-400
                  bg-white
                  px-5
                  text-[16px]
                  font-medium
                  text-gray-800
                  outline-none
                  focus:border-blue-500
                  focus:ring-4
                  focus:ring-blue-100
                  transition-all
                "
              >
                <option value="Available">
                  Available
                </option>

                <option value="Booked">
                  Booked
                </option>

              </select>

            </div>

          </div>

          {/* IMAGE */}
          <div className="mt-8">

            <label className="
              flex items-center gap-2
              text-[15px]
              font-bold
              text-gray-800
              mb-2
            ">
              <FaImage size={25}  className="text-orange-500" />
              Vehicle Image URL
            </label>

            <input
              type="text"
              name="coverImage"
              required
              placeholder="https://example.com/car.jpg"
              className="
                w-full h-16
                rounded-2xl
                border border-gray-400
                bg-white
                px-5
                text-[16px]
                font-medium
                text-gray-800
                placeholder:text-gray-400
                placeholder:font-medium
                outline-none
                focus:border-blue-500
                focus:ring-4
                focus:ring-blue-100
                transition-all
              "
            />

          </div>

          {/* DESCRIPTION */}
          <div className="mt-8">

            <label className="
              text-[15px]
              font-bold
              text-gray-800
              mb-2 block
            ">
              Vehicle Description
            </label>

            <textarea
              name="description"
              rows="4"
              required
              placeholder="Describe your vehicle features, comfort, mileage and experience..."
              className="
                w-full
                rounded-2xl
                border border-gray-400
                bg-white
                p-5
                text-[16px]
                font-medium
                text-gray-800
                placeholder:text-gray-400
                placeholder:font-medium
                outline-none
                focus:border-blue-500
                focus:ring-4
                focus:ring-blue-100
                transition-all
                resize-none
              "
            ></textarea>

          </div>

          {/* EMAIL */}
          <div className="mt-8">

            <label className="
              text-[15px]
              font-bold
              text-gray-800
              mb-2 block
            ">
              Registered Email
            </label>

            <input
              type="email"
              value={user?.email || ""}
              readOnly
              className="
                w-full h-16
                rounded-2xl
                border border-gray-400
                bg-gray-100
                px-5
                text-[16px]
                font-medium
                text-gray-600
                cursor-not-allowed
              "
            />

          </div>

          {/* BUTTON */}
          <div className="pt-10">

            <button
              type="submit"
              disabled={loading}
              className={`
                h-16 px-14
                rounded-2xl
                font-bold text-lg
                tracking-wide
                transition-all duration-300
                ${
                  loading
                    ? `
                      bg-gray-300
                      cursor-not-allowed
                      text-gray-500
                    `
                    : `
                      bg-[#0B1120]/90
                      text-white
                      hover:bg-blue-600
                      shadow-xl shadow-blue-500/20
                      hover:scale-[1.02]
                      hover:shadow-2xl
                    `
                }
              `}
            >
              {loading
                ? "Adding Vehicle..."
                : "Add Vehicle"}
            </button>

          </div>

        </form>

      </motion.div>

    </section>
  );
};

export default AddVehicle;