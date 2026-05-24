import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
} from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="relative overflow-hidden bg-[#0F172A] text-white">

      {/* TOP GLOW */}
      <div className="absolute top-0 left-0 w-80 h-80 bg-sky-500/10 blur-[120px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 blur-[140px] rounded-full"></div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10 relative z-10">

        {/* TOP SECTION */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* BRAND */}
          <div>
            <div className="flex items-center gap-4 mb-6">

              <img
                src="https://i.ibb.co.com/QjkHXLkH/istockphoto-931069196-612x612.jpg"
                className="w-16 h-16 rounded-full border-2 border-sky-400 object-cover"
                alt="TravelEase Logo"
              />

              <div>
                <h2 className="text-3xl font-black tracking-tight">
                  <span className="text-white">Travel</span>

                  <span className="text-pink-400">Ease</span>
                </h2>

                <p className="text-xs tracking-[4px] text-slate-400 mt-1">
                  PREMIUM RENTALS
                </p>
              </div>
            </div>

            <p className="text-slate-400 leading-relaxed text-sm">
              Experience seamless vehicle booking and premium travel
              management with modern, secure and reliable ride services.
            </p>

            {/* SOCIALS */}
            <div className="flex items-center gap-4 mt-8">

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="
                  w-10 h-10
                  rounded-full
                  border border-white/10
                  bg-white/5
                  flex items-center justify-center
                  hover:bg-pink-500
                  transition-all duration-300
                  hover:-translate-y-1
                "
              >
                <FaFacebookF />
              </a>

              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="
                  w-10 h-10
                  rounded-full
                  border border-white/10
                  bg-white/5
                  flex items-center justify-center
                  hover:bg-pink-500
                  transition-all duration-300
                  hover:-translate-y-1
                "
              >
                <FaInstagram />
              </a>

              <a
                href="https://twitter.com"
                target="_blank"
                rel="noreferrer"
                className="
                  w-10 h-10
                  rounded-full
                  border border-white/10
                  bg-white/5
                  flex items-center justify-center
                  hover:bg-pink-500
                  transition-all duration-300
                  hover:-translate-y-1
                "
              >
                <FaXTwitter />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="
                  w-10 h-10
                  rounded-full
                  border border-white/10
                  bg-white/5
                  flex items-center justify-center
                  hover:bg-pink-500
                  transition-all duration-300
                  hover:-translate-y-1
                "
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">
              Quick Links
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li>
                <Link
                  to="/"
                  className="hover:text-pink-400 transition-all duration-300"
                >
                  Home
                </Link>
              </li>

              <li>
                <Link
                  to="/about"
                  className="hover:text-pink-400 transition-all duration-300"
                >
                  About
                </Link>
              </li>

              <li>
                <Link
                  to="/allVehicles"
                  className="hover:text-pink-400 transition-all duration-300"
                >
                  All Vehicles
                </Link>
              </li>

              <li>
                <Link
                  to="/login"
                  className="hover:text-pink-400 transition-all duration-300"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>

          {/* SERVICES */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">
              Services
            </h3>

            <ul className="space-y-4 text-slate-400">

              <li className="hover:text-pink-400 transition">
                Luxury Car Rental
              </li>

              <li className="hover:text-pink-400 transition">
                Business Trips
              </li>

              <li className="hover:text-pink-400 transition">
                Airport Pickup
              </li>

              <li className="hover:text-pink-400 transition">
                Tour Packages
              </li>

            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-xl font-bold mb-6 text-white">
              Contact Info
            </h3>

            <ul className="space-y-5 text-slate-400">

              <li className="flex items-start gap-3">
                <FaEnvelope className="text-pink-400 mt-1" />

                <span>
                  bijoymarma55@gmail.com
                </span>
              </li>

              <li className="flex items-start gap-3">
                <FaPhoneAlt className="text-pink-400 mt-1" />

                <span>
                  +880 1818-470577
                </span>
              </li>

              <li className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-pink-400 mt-1" />

                <span>
                  Chattogram, Bangladesh
                </span>
              </li>
            </ul>

            {/* MINI NEWSLETTER */}
            {/* <div className="mt-8">

              <p className="text-sm text-slate-400 mb-3">
                Subscribe for travel updates
              </p>

              <div className="flex items-center overflow-hidden rounded-xl border border-white/10 bg-white/5">

                <input
                  type="email"
                  placeholder="Your email"
                  className="
                    bg-transparent
                    px-4 py-3
                    text-sm
                    outline-none
                    w-full
                    placeholder:text-slate-500
                  "
                />

                <button
                  className="
                    bg-sky-500
                    hover:bg-sky-600
                    px-5 py-3
                    text-sm font-semibold
                    transition
                  "
                >
                  Join
                </button>
              </div>
            </div> */}
          </div>
        </div>

        {/* DIVIDER */}
        <div className="border-t border-white/15 mt-10 pt-6">

          <div className="flex flex-col md:flex-row items-center justify-between gap-4">

            <p className="text-slate-400 text-sm text-center md:text-left">
              © {new Date().getFullYear()} TravelEase. All rights reserved.
            </p>

            <div className="flex items-center gap-6 text-sm text-slate-400">

              <Link
                to="/"
                className="hover:text-sky-400 transition"
              >
                Privacy Policy
              </Link>

              <Link
                to="/"
                className="hover:text-sky-400 transition"
              >
                Terms & Conditions
              </Link>

            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;