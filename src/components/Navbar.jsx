import { useState, useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi";
import { AuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";
import {
  MdOutlineLogin,
  MdDashboard,
  MdAddBox,
  MdDirectionsCar,
  MdBookOnline,
} from "react-icons/md";
import { LuLogOut } from "react-icons/lu";
import { PiUserCirclePlusBold } from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);

  const publicLinks = [
    { name: "Home", to: "/" },
    { name: "All Vehicles", to: "/allVehicles" },
    { name: "About", to: "/about" },
  ];

  const privateLinks = [
    { name: "Dashboard", to: "/dashboard", icon: <MdDashboard /> },
    { name: "Add Vehicle", to: "/dashboard/add-Vehicle", icon: <MdAddBox /> },
    {
      name: "My Vehicles",
      to: "/dashboard/my-Vehicles",
      icon: <MdDirectionsCar />,
    },
    {
      name: "My Bookings",
      to: "/dashboard/my-Bookings",
      icon: <MdBookOnline />,
    },
  ];

  const handleSignOut = () => {
    signOutUser()
      .then(() => toast.success("Logged out successfully ✅"))
      .catch(() => toast.error("Logout failed"));
  };

  return (
    <nav
      className="sticky top-0  z-50  w-full  backdrop-blur-xl 
    bg-[#0B1120]/90  border-b border-white/10  shadow-[0_8px_30px_rgb(0,0,0,0.12)]  transition-all duration-300"
    >
      <div className="max-w-7xl mx-auto py-0.5 px-6">
        <div className="flex items-center justify-between  h-[78px]">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <img
              src="https://i.ibb.co.com/QjkHXLkH/istockphoto-931069196-612x612.jpg"
              alt="logo"
              className="w-12 h-11 rounded-full  border-2 border-white/20  object-cover  transition-transform duration-300  group-hover:scale-110"
            />

            <div>
              <h2 className="text-2xl lg:text-3xl text-white tracking-tight font-extrabold">
                Travel<span className="text-pink-400">Ease</span>
              </h2>

              <p className="text-[10px] uppercase tracking-[2px] lg:tracking-[4px] text-white/60 font-medium ">
                Premium Rentals
              </p>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-6">
            {publicLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                className={({ isActive }) =>
                  `relative text-[15px] font-medium transition-all duration-300
                   ${isActive ? "text-pink-400" : "text-white/80 hover:text-white"}`
                }
              >
                {({ isActive }) => (
                  <span className="relative group">
                    {link.name}

                    <span
                      className={` absolute left-0 -bottom-1 h-0.5  bg-pink-400 rounded-full
                          transition-all duration-300  ${isActive ? "w-full" : "w-0 group-hover:w-full"}
                          `}
                    />
                  </span>
                )}
              </NavLink>
            ))}
          </div>

          <div className="hidden md:flex items-center gap-4">
            {!user ? (
              <>
                <Link
                  to="/login"
                  className="px-4 py-2 bg-pink-500 text-white hover:bg-pink-600  font-semibold  rounded-xl  flex items-center gap-2  transition-all duration-300  hover:-translate-y-0.5  hover:shadow-lg   hover:shadow-pink-500/30"
                >
                  Login <MdOutlineLogin className="text-lg font-semibold" />
                </Link>
                <Link
                  to="/register"
                  className="bg-white/20  backdrop-blur-md  border border-white/30  hover:bg-white hover:text-black  text-white  font-semibold  px-4 py-2  rounded-xl  flex items-center gap-2 transition-all duration-300   hover:-translate-y-0.5"
                >
                  Register <PiUserCirclePlusBold className="text-lg font-semibold" />
                </Link>
              </>
            ) : (
              /* ADVANCED PROFILE DROPDOWN */
              <div className="relative">
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="flex items-center gap-2  px-3 py-2  rounded-full  bg-white/15  hover:bg-white/25  backdrop-blur-xl  border border-white/20  transition-all duration-300  shadow-lg"
                >
                  {user.photoURL ? (
                    <img
                      src={user.photoURL}
                      alt="user"
                      className=" w-11 h-11  rounded-full  object-cover  border-2 border-pink-500"
                    />
                  ) : (
                    <FaUserCircle className="text-white" size={36} />
                  )}

                  <HiChevronDown
                    size={20}
                    className={` text-white transition duration-300
                    ${profileOpen ? "rotate-180" : ""}
                    `}
                  />
                </button>

                {profileOpen && (
                  <div
                    className="absolute right-0 mt-3  w-72  rounded-2xl  overflow-hidden  border border-white/20  bg-[#111827]/98 backdrop-blur-2xl  shadow-[0_20px_50px_rgba(0,0,0,0.4)]  z-50"
                  >
                    {/* USER INFO */}
                    <div className="px-5 py-4 border-b border-white/20 bg-white/5">
                      <div className="flex items-center gap-4">
                        <img
                          src={user.photoURL}
                          alt=""
                          className=" w-13 h-13  rounded-full  border-2 border-pink-500  object-cover"
                        />

                        <div>
                          <p className="font-semibold text-white text-base">
                            {user.displayName || "User"}
                          </p>

                          <p className="text-sm text-gray-400 truncate max-w-[180px]">
                            {user.email}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* PRIVATE LINKS */}
                    <div className="py-2.5">
                      {privateLinks.map((item) => (
                        <Link
                          key={item.name}
                          to={item.to}
                          onClick={() => setProfileOpen(false)}
                          className=" flex items-center gap-4  px-5 py-3  text-white/80  hover:text-pink-400  hover:bg-white/10  transition-all duration-300  text-sm font-medium"
                        >
                          <span className="text-lg">{item.icon}</span>

                          <span>{item.name}</span>
                        </Link>
                      ))}
                    </div>

                    {/* LOGOUT */}
                    <div className="p-3.5 border-t border-white/20">
                      <button
                        onClick={handleSignOut}
                        className=" w-full  flex items-center justify-center gap-3  py-2.5  rounded-xl  bg-red-500/30  hover:bg-red-500/50  border border-red-500/20 text-red-400 hover:text-white  font-semibold  transition-all duration-300"
                      >
                        <LuLogOut size={18} />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* MOBILE MENU ICON */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden"
          >
            {mobileMenuOpen ? <HiX size={24} /> : <HiMenu
            className="text-white hover:bg-white/20"
            size={24} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      {mobileMenuOpen && (
        <div
          className=" md:hidden  fixed top-0 left-0  w-[85%] max-w-lg  bg-[#0B1120]/98  backdrop-blur-2xl  border-r border-white/10  shadow-2xl  z-50  px-6 py-5  overflow-y-auto"
        >
          {/* TOP */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <img
                src="/favicon.png"
                alt=""
                className="w-12 h-12 rounded-full"
              />

              <div>
                <h2 className="text-2xl font-black leading-none">
                  <span className="text-white">Travel</span>

                  <span className="bg-linear-to-r from-pink-500 to-rose-400 bg-clip-text text-transparent">
                    Ease
                  </span>
                </h2>

                <p className="text-[10px] tracking-[3px] uppercase text-gray-400 mt-1">
                  Premium Rentals
                </p>
              </div>
            </div>

            <button
              onClick={() => setMobileMenuOpen(false)}
              className="text-white text-2xl hover:bg-white/20 font-semibold"
            >
              ✕
            </button>
          </div>

          {/* USER INFO */}
          {user && (
            <div className="mt-6  rounded-2xl border border-white/20 bg-white/10 p-3">
              <div className="flex items-center gap-4">
                <img
                  src={user.photoURL}
                  alt=""
                  className=" w-14 h-14  rounded-full  border-2 border-pink-500  object-cover "
                />

                <div>
                  <h3 className="text-white font-semibold">
                    {user.displayName}
                  </h3>

                  <p className="text-sm text-gray-400 truncate">{user.email}</p>
                </div>
              </div>
            </div>
          )}

          {/* PUBLIC LINKS */}
          <div className="flex flex-col gap-3 mt-8">
            {publicLinks.map((link) => (
              <NavLink
                key={link.name}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className="
            text-white/80
            hover:text-pink-400
            transition-all duration-300
            text-lg font-medium  hover:bg-white/10
          "
              >
                {link.name}
              </NavLink>
            ))}

            {/* PRIVATE LINKS */}
            {user &&
              privateLinks.map((item) => (
                <NavLink
                  key={item.name}
                  to={item.to}
                  onClick={() => setMobileMenuOpen(false)}
                  className=" flex items-center gap-3 text-white/80  hover:text-pink-400  transition-all duration-300  font-medium hover:bg-white/10"
                >
                  <span>{item.icon}</span>
                  <span>{item.name}</span>
                </NavLink>
              ))}
          </div>

          {/* AUTH BUTTONS */}
          {!user ? (
            <div className="mt-8 flex flex-col gap-4">
              <Link
                to="/login"
                className=" w-full  bg-pink-500  hover:bg-pink-600  text-white  py-3  rounded-xl  font-semibold  text-center  transition-all duration-300 hover:translate-y-0.5"
              >
                Login
              </Link>

              <Link
                to="/register"
                className=" w-full  border border-white/20  bg-white/10  hover:bg-white/20  text-white  py-3  rounded-xl  font-semibold  text-center transition-all duration-300 hover:translate-y-0.5"
              >
                Register
              </Link>
            </div>
          ) : (
            <button
              onClick={handleSignOut}
              className=" mt-8  w-full  py-3  rounded-xl  bg-red-500/25  hover:bg-red-500/45 hover:text-white  border border-red-500/20  text-red-400  font-semibold  transition-all duration-300"
            >
              Logout
            </button>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
