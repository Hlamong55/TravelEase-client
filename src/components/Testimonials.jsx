import { useEffect, useRef, useState } from "react";

import {
  FaUsers,
  FaCarSide,
  FaRoute,
  FaUserTie,
  FaStar,
  FaQuoteLeft,
  FaCheckCircle,
} from "react-icons/fa";

import { MdVerified } from "react-icons/md";

const statIcons = {
  users: (
    <div className="w-18 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
      <FaUsers className="text-4xl text-blue-600" />
    </div>
  ),

  vehicles: (
    <div className="w-18 h-16 rounded-2xl bg-pink-100 flex items-center justify-center">
      <FaCarSide className="text-4xl text-pink-500" />
    </div>
  ),

  bookings: (
    <div className="w-18 h-16 rounded-2xl bg-blue-100 flex items-center justify-center">
      <FaRoute className="text-4xl text-blue-600" />
    </div>
  ),

  owners: (
    <div className="w-18 h-16 rounded-2xl bg-pink-100 flex items-center justify-center">
      <FaUserTie className="text-4xl text-pink-500" />
    </div>
  ),
};

const SPEED = 0.7;

const Testimonials = () => {
  const [stats, setStats] = useState([]);
  const [testimonials, setTestimonials] = useState([]);

  const trackRef = useRef(null);
  const posRef = useRef(0);
  const pausedRef = useRef(false);

  useEffect(() => {
    fetch("/testimonials.json")
      .then((res) => res.json())
      .then((data) => {
        setStats(data.stats || []);
        setTestimonials(data.testimonials || []);
      });
  }, []);

  /* INFINITE SLIDER */
  useEffect(() => {
    let raf;

    const animate = () => {
      if (!pausedRef.current && trackRef.current) {
        posRef.current -= SPEED;

        const halfWidth = trackRef.current.scrollWidth / 2;

        if (Math.abs(posRef.current) >= halfWidth) {
          posRef.current = 0;
        }

        trackRef.current.style.transform = `translateX(${posRef.current}px)`;
      }

      raf = requestAnimationFrame(animate);
    };

    animate();

    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative py-24 overflow-hidden bg-linear-to-br from-blue-50 via-slate-50 to-blue-50">

      {/* BLUR EFFECTS */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-blue-200/30 blur-3xl rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-72 h-72 bg-pink-100/30 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto px-4 relative z-10">

        {/* TOP HEADER */}
        <div className="text-center mb-16">

          <h2 className="text-3xl md:text-5xl font-black tracking-tight text-gray-900 leading-tight">
            Real Stories From
            <span className="text-blue-600"> Happy Users</span>
          </h2>

          <p className="max-w-2xl mx-auto mt-6 text-gray-600 text-lg leading-6 font-medium">
            Discover why thousands of travelers and vehicle owners trust
            TravelEase for smooth, secure, and premium travel experiences.
          </p>

        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-7 mb-24">

          {stats.map((stat) => (
            <div
              key={stat.id}
              className="
                bg-white/80
                backdrop-blur-xl
                border border-gray-200
                rounded-2xl
                p-8
                shadow-[0_10px_40px_rgba(0,0,0,0.06)]
                hover:-translate-y-2
                hover:shadow-[0_20px_60px_rgba(0,0,0,0.10)]
                transition-all duration-300
                group
              "
            >

              <div className="flex justify-center mb-5">
                {statIcons[stat.id]}
              </div>

              <h3 className="text-4xl font-black tracking-tight text-gray-900 text-center">
                {stat.value}+
              </h3>

              <p className="text-gray-600 font-semibold text-center mt-2 text-lg">
                {stat.label}
              </p>

            </div>
          ))}

        </div>

        {/* TESTIMONIAL TITLE */}
        <div className="flex items-center justify-between mb-10">

          <div>

            <h3 className="text-4xl font-black tracking-tight text-gray-900">
              What People Say
            </h3>

            <p className="text-gray-600 font-medium mt-3">
              Genuine reviews from customers and vehicle owners
            </p>

          </div>

          <div className="hidden md:flex items-center gap-2 px-5 py-4 rounded-xl bg-white border border-gray-200 shadow-sm">

            <FaCheckCircle size={22} className="text-green-500" />

            <span className="font-semibold text-gray-700">
              Verified Reviews
            </span>

          </div>

        </div>

        {/* TESTIMONIAL SLIDER */}
        <div className="overflow-hidden relative">

          <div
            ref={trackRef}
            className="flex gap-7 w-max py-4"
          >

            {[...testimonials, ...testimonials].map((item, index) => (

              <div
                key={index}
                onMouseEnter={() => (pausedRef.current = true)}
                onMouseLeave={() => (pausedRef.current = false)}
                className=" relative  w-[360px]  shrink-0  bg-white/85  backdrop-blur-xl  border border-gray-200  rounded-4xl  p-8  shadow-[0_10px_40px_rgba(0,0,0,0.06)]  hover:-translate-y-2  hover:shadow-[0_20px_60px_rgba(0,0,0,0.12)]  transition-all duration-300  cursor-pointer  overflow-hidden"
              >

                {/* TOP GRADIENT */}
                <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-blue-500 via-sky-300 to-pink-400"></div>

                {/* QUOTE ICON */}
                <div className="absolute top-7 right-7 opacity-10">
                  <FaQuoteLeft className="text-6xl text-blue-500" />
                </div>

                {/* USER */}
                <div className="flex items-center gap-4 mb-6">

                  <div className="relative">

                    <img
                      src={item.avatar}
                      alt={item.name}
                      className="
                        w-16 h-16
                        rounded-2xl
                        object-cover
                        border-2 border-blue-100
                      "
                    />

                    <div className="
                      absolute -bottom-1 -right-1
                      w-6 h-6 rounded-full
                      bg-green-500
                      border-2 border-white
                    "></div>

                  </div>

                  <div>

                    <h4 className="text-xl font-bold tracking-tight text-gray-900">
                      {item.name}
                    </h4>

                    <p className="text-gray-500 font-semibold text-sm mt-1">
                      {item.role}
                    </p>

                  </div>

                </div>

                {/* QUOTE */}
                <p className="text-gray-700 leading-8 font-medium text-[16px] min-h-[110px]">
                  “{item.quote}”
                </p>

                {/* FOOTER */}
                <div className="flex items-center justify-between mt-8 pt-6 border-t border-gray-100">

                  {/* STARS */}
                  <div className="flex items-center gap-1 text-yellow-400 text-lg">

                    {Array.from({ length: item.rating }).map((_, i) => (
                      <FaStar key={i} />
                    ))}

                  </div>

                  {/* VERIFIED */}
                  <div className="flex items-center gap-1 text-sm font-semibold text-green-600">

                    <FaCheckCircle size={16}/>

                    Verified

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Testimonials;