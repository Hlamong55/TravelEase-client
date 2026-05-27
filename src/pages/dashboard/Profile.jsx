import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

import Swal from "sweetalert2";

import { auth } from "../../firebase/firebase.init";

import { updateProfile } from "firebase/auth";

import {
  FaUser,
  FaEnvelope,
  FaCamera,
  FaShieldAlt,
} from "react-icons/fa";

const Profile = () => {
  const { user } = useContext(AuthContext);

  const [name, setName] = useState(
    user?.displayName || ""
  );

  const [photo, setPhoto] = useState(
    user?.photoURL || ""
  );

  const [previewPhoto, setPreviewPhoto] = useState(
    user?.photoURL ||
      "https://i.ibb.co/2kR8Y0M/default-user.png"
  );

  const [loading, setLoading] = useState(false);

  const handleUpdate = async (e) => {
    e.preventDefault();

    const result = await Swal.fire({
      title: "Update Profile?",
      text: "Are you sure you want to save these changes?",
      icon: "question",
      showCancelButton: true,
      confirmButtonColor: "#2563eb",
      cancelButtonColor: "#ef4444",
      confirmButtonText: "Yes, Update",
    });

    if (!result.isConfirmed) return;

    try {
      setLoading(true);

      await updateProfile(auth.currentUser, {
        displayName: name,
        photoURL: photo,
      });

      setPreviewPhoto(photo);

      Swal.fire({
        icon: "success",
        title: "Profile Updated!",
        text:
          "Your profile information has been updated successfully.",
        timer: 1800,
        showConfirmButton: false,
      });
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Update Failed",
        text:
          error.message || "Something went wrong!",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-200 p-6 md:p-8">

      {/* HEADER */}
      <div className="mb-8">

        <p className="
          text-2xl text-center font-bold tracking-widest uppercase text-blue-600 mb-2
        ">
          User Profile
        </p>

      </div>

      {/* MAIN CARD */}
      <div className="
        bg-white
        border border-gray-300
        rounded-4xl
        shadow-sm
        overflow-hidden
      ">

        {/* TOP SECTION */}
        <div className=" relative  bg-[#0B1120]/90  px-8 md:px-10  py-10  overflow-hidden
        ">

          <div className="
            relative z-10
            flex flex-col md:flex-row
            items-center gap-8
          ">

            {/* IMAGE */}
            <div className="relative">

              <img
                src={previewPhoto}
                alt="Profile"
                className=" w-36 h-36  rounded-[30px]  object-cover  border-4 border-white  shadow-2xl"
              />

              <div className=" absolute -bottom-2 -right-2  w-12 h-12 rounded-4xl  bg-blue-500  border-4 border-white  flex items-center justify-center  text-white text-lg">
                <FaCamera />
              </div>

            </div>

            {/* USER INFO */}
            <div className="text-center md:text-left text-white">

              <h3 className="
                text-4xl font-black
                leading-tight
              ">
                {user?.displayName ||
                  "Anonymous User"}
              </h3>

              <p className="
                text-blue-100
                mt-3 text-lg
                font-medium
              ">
                {user?.email}
              </p>

              <div className="
                flex flex-wrap items-center gap-4
                mt-6 justify-center md:justify-start
              ">

                <span className=" px-5 py-2 rounded-full  border border-white/10  backdrop-blur-xl  text-sm font-semibold
                ">
                  Verified User
                </span>

                <span className=" px-5 py-2 rounded-full  bg-green-500/20  border border-green-400/20  text-green-200  text-sm font-semibold
                ">
                  Active Account
                </span>

              </div>

            </div>

          </div>

        </div>

        {/* FORM */}
        <div className="p-8 md:p-10">

          <form
            onSubmit={handleUpdate}
            className="grid grid-cols-1 md:grid-cols-2 gap-7"
          >

            {/* NAME */}
            <div>

              <label className=" flex items-center gap-2  font-bold  text-gray-700 mb-3
              ">
                <FaUser size={20} className="text-blue-500" />
                Full Name
              </label>

              <input
                type="text"
                value={name}
                onChange={(e) =>
                  setName(e.target.value)
                }
                className=" w-full h-14 rounded-2xl border border-gray-400  bg-gray-200 px-5  outline-none  font-medium focus:border-2 focus:border-blue-600 focus:bg-gray-100 transition"
                placeholder="Enter your name"
              />

            </div>

            {/* PHOTO URL */}
            <div>

              <label className=" flex items-center gap-2 font-bold text-gray-700 mb-3
              ">
                <FaCamera size={20} className="text-pink-500" />
                Profile Image URL
              </label>

              <input
                type="text"
                value={photo}
                onChange={(e) =>
                  setPhoto(e.target.value)
                }
                className=" w-full h-14 rounded-2xl  border border-gray-400  bg-gray-200  px-5  outline-none  font-medium  focus:border-blue-600 focus:border-2 focus:bg-gray-100  transition"
                placeholder="Paste image URL"
              />

            </div>

            {/* EMAIL */}
            <div>

              <label className="flex items-center gap-2 font-bold  text-gray-700 mb-3">

                <FaEnvelope size={20} className="text-orange-500" />
                Email Address
              </label>

              <input
                type="email"
                value={user?.email || ""}
                readOnly
                className=" w-full h-14  rounded-2xl  border border-gray-400  bg-gray-200  px-5 text-gray-700 font-medium cursor-not-allowed"
              />

            </div>

            {/* ROLE */}
            <div>

              <label className=" flex items-center gap-2 font-bold  text-gray-700 mb-3
              ">
                <FaShieldAlt size={20} className="text-green-500" />
                Account Role
              </label>

              <input
                type="text"
                value="Car Owner"
                readOnly
                className=" w-full h-14  rounded-2xl  border border-gray-400  bg-gray-200  px-5  text-gray-700 font-medium  cursor-not-allowed"
              />

            </div>

            {/* BUTTON */}
            <div className="md:col-span-2 pt-4">

              <button
                type="submit"
                disabled={loading}
                className=" h-14 px-10  rounded-2xl  bg-[#0B1120]/90  text-white  font-bold  text-lg  hover:bg-blue-600  shadow-lg shadow-blue-500/20  hover:scale-[1.02]  transition-all  duration-300  disabled:opacity-70  disabled:cursor-not-allowed"
              >
                {loading
                  ? "Updating..."
                  : "Update Profile"}
              </button>

            </div>

          </form>

        </div>

      </div>

    </div>
  );
};

export default Profile;