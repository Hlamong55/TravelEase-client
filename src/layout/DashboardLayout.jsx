import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";

import { AuthContext } from "../context/AuthContext";

import {
  FaTachometerAlt,
  FaUser,
  FaCar,
  FaPlusCircle,
  FaClipboardList,
  FaBars,
  FaTimes,
  FaHome,
  FaChartLine,
} from "react-icons/fa";

import { LuLogOut } from "react-icons/lu";

const DashboardLayout = () => {
  const { user, signOutUser } = useContext(AuthContext);

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = async () => {
    await signOutUser();
    navigate("/login");
  };

  return (
    <div className="min-h-screen bg-[#f6f8fc] flex overflow-hidden">

      {/* ================ */}
      {/* SIDEBAR */}
      <aside
        className={` fixed md:sticky top-0 left-0 z-50  h-screen w-[280px]  bg-linear-to-b  from-[#0f172a]  via-[#111827]  to-[#1e293b]  text-white  flex flex-col  transition-all duration-300
          ${
            open
              ? "translate-x-0"
              : "-translate-x-full md:translate-x-0"
          }
        `}
      >

        {/* LOGO */}
        <div className=" px-7 py-6  border-b border-white/10  flex items-center justify-between
        ">

          <div>

            <h2 className="text-3xl font-black tracking-tight">
              Travel<span className="text-pink-500">Ease</span>
            </h2>

            <p className=" text-[10px] tracking-[0.45em] text-gray-400  mt-1.5 uppercase
            ">
              Premium Rentals
            </p>

          </div>

          <button
            onClick={() => setOpen(false)}
            className="md:hidden text-2xl"
          >
            <FaTimes />
          </button>

        </div>

        {/* NAVIGATION */}
        <nav className="flex-1 px-4 py-6 overflow-y-auto">

          <p className=" text-[11px] uppercase  tracking-[0.25em] text-gray-400  px-3 mb-3
          ">
            Main Menu
          </p>

          <div className="space-y-1.5">

            <NavItem
              to="/dashboard"
              icon={<FaTachometerAlt />}
              label="Overview"
              end
            />

            <NavItem
              to="/dashboard/profile"
              icon={<FaUser />}
              label="My Profile"
            />

            <NavItem
              to="/dashboard/add-vehicle"
              icon={<FaPlusCircle />}
              label="Add Vehicle"
            />

            <NavItem
              to="/dashboard/my-vehicles"
              icon={<FaCar />}
              label="My Vehicles"
            />

            <NavItem
              to="/dashboard/my-bookings"
              icon={<FaClipboardList />}
              label="My Bookings"
            />

          </div>

          {/* QUICK ACCESS */}
          <div className="pt-8">

            <p className=" text-[11px] uppercase  tracking-[0.25em]  text-gray-400  px-3 mb-3
            ">
              Quick Access
            </p>

            <div>

              <NavItem
                to="/"
                icon={<FaHome />}
                label="Back to Home"
              />

              <NavItem
                to="/allVehicles"
                icon={<FaChartLine />}
                label="Explore Vehicles"
              />

            </div>

          </div>

        </nav>

        {/* LOGOUT */}
        <div className="p-4 border-t border-white/20">

          <button
            onClick={handleLogout}
            className="
              w-full
              flex items-center justify-center gap-3
              py-3.5 rounded-xl
              bg-red-500/20
              border border-red-500/50
              text-red-400
              font-bold
              hover:bg-red-500
              hover:text-white
              transition-all duration-300
            "
          >
            <LuLogOut size={18} />
            Logout
          </button>

        </div>

      </aside>

      {/* ================== */}
      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col min-w-0">

        {/* HEADER */}
        <header className="  sticky top-0 z-40  h-20  bg-white/90  backdrop-blur-xl  border-b border-gray-300 shadow-xl  flex items-center justify-between  px-5 md:px-8">

          {/* LEFT */}
          <div className="flex items-center gap-4">

            {/* MOBILE BTN */}
            <button
              onClick={() => setOpen(true)}
              className=" md:hidden  w-11 h-11 rounded-xl bg-gray-100 flex items-center justify-center  text-lg text-gray-700"
            >
              <FaBars />
            </button>

            {/* TITLE */}
            <div>

              <p className="
                text-sm uppercase tracking-[0.2em]
                text-blue-500 font-semibold
              ">
                Dashboard
              </p>

              <h1 className=" text-xl md:text-2xl font-black text-gray-900">
                Welcome Back,
                <span className="text-blue-600">
                  {" "}
                  {user?.displayName?.split(" ")[0] || "Traveler"}
                </span>
              </h1>

            </div>

          </div>

          {/* RIGHT */}
          <div className="flex items-center gap-4">

            {/* STATUS */}
            <div className=" hidden lg:flex  items-center gap-2  bg-green-50  border border-green-300  px-4 py-2.5 rounded-xl
            ">

              <div className="
                w-2.5 h-2.5 rounded-full
                bg-green-500 animate-pulse
              "></div>

              <p className="text-green-700 font-semibold text-sm">
                Active
              </p>

            </div>

            {/* PROFILE */}
            <div className="relative group">

              <div className=" flex items-center gap-3  bg-gray-50  border border-gray-200  rounded-2xl  px-3 py-2  cursor-pointer   hover:bg-gray-200  transition">

                <img
                  src={
                    user?.photoURL ||
                    "https://i.ibb.co/2kR5zqM/user.png"
                  }
                  alt="user"
                  className="
                    w-11 h-11 rounded-full
                    object-cover
                    border-2 border-blue-500
                  "
                />

                <div className="hidden sm:block">

                  <h3 className="font-bold text-gray-900 text-sm">
                    {user?.displayName || "Traveler"}
                  </h3>

                  <p className="text-xs text-gray-600">
                    Premium User
                  </p>

                </div>

              </div>

              {/* DROPDOWN */}
              <div className=" absolute right-0 mt-2  w-60  bg-white  border border-gray-400  rounded-3xl  shadow-[0_20px_60px_rgba(0,0,0,0.08)]  opacity-0 invisible  group-hover:opacity-100  group-hover:visible  transition-all duration-300  overflow-hidden">


                <div className="p-3">

                  <NavLink
                    to="/"
                    className=" flex items-center gap-3  px-4 py-3 rounded-xl hover:bg-blue-100 hover:text-blue-600  font-semibold  transition"
                  >
                    <FaHome />
                    Home
                  </NavLink>

                  <NavLink
                    to="/dashboard/profile"
                    className=" flex items-center gap-3 px-4 py-3 rounded-2xl  hover:bg-blue-100  hover:text-blue-600  font-semibold  transition"
                  >
                    <FaUser />
                    Profile
                  </NavLink>

                  <button
                    onClick={handleLogout}
                    className=" w-full  flex items-center gap-3  px-4 py-3 rounded-2xl  text-red-500  hover:bg-red-100  font-semibold  transition"
                  >
                    <LuLogOut />
                    Logout
                  </button>

                </div>

              </div>

            </div>

          </div>

        </header>

        {/* MAIN CONTENT */}
        <main className="flex-1 overflow-y-auto">
          <Outlet />
        </main>

      </div>

      {/* MOBILE OVERLAY */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="
            fixed inset-0 z-40
            bg-black/40
            backdrop-blur-sm
            md:hidden
          "
        ></div>
      )}

    </div>
  );
};

export default DashboardLayout;

/* ================================================= */
/* NAV ITEM */
/* ================================================= */
const NavItem = ({ to, icon, label, end = false }) => (
  <NavLink
    to={to}
    end={end}
    className={({ isActive }) =>
      `
      flex items-center gap-3  px-4 py-3  rounded-xl  font-semibold  transition-all duration-300
      ${
        isActive
          ? `
            bg-linear-to-r  from-blue-500  to-indigo-500  text-white  shadow-lg shadow-blue-500/20
          `
          : `
            text-gray-300
            hover:bg-white/10
            hover:text-white
          `
      }
    `
    }
  >

    <span className="text-lg">
      {icon}
    </span>

    <span className="text-[15px]">
      {label}
    </span>

  </NavLink>
);