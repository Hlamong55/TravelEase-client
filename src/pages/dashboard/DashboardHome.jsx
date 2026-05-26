import {
  FaCar,
  FaClipboardList,
  FaCheckCircle,
  FaClock,
  FaArrowUp,
  FaCalendarAlt,
  FaMapMarkerAlt,
  FaStar,
} from "react-icons/fa";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
} from "recharts";

const stats = [
  {
    title: "Total Vehicles",
    value: 14,
    growth: "+12%",
    icon: <FaCar />,
    bg: "bg-blue-50",
    text: "text-blue-600",
  },
  {
    title: "My Bookings",
    value: 12,
    growth: "+18%",
    icon: <FaClipboardList />,
    bg: "bg-purple-50",
    text: "text-purple-600",
  },
  {
    title: "Completed Trips",
    value: 9,
    growth: "+9%",
    icon: <FaCheckCircle />,
    bg: "bg-green-50",
    text: "text-green-600",
  },
  {
    title: "Pending Requests",
    value: 3,
    growth: "+2%",
    icon: <FaClock />,
    bg: "bg-orange-50",
    text: "text-orange-500",
  },
];

const chartData = [
  { name: "Jan", bookings: 2 },
  { name: "Feb", bookings: 4 },
  { name: "Mar", bookings: 6 },
  { name: "Apr", bookings: 3 },
  { name: "May", bookings: 8 },
  { name: "Jun", bookings: 10 },
];

const recentBookings = [
  {
    id: 1,
    vehicle: "Toyota Premio",
    date: "12 Jan 2026",
    location: "Dhaka",
    status: "Completed",
    image:
      "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 2,
    vehicle: "Audi E-tron",
    date: "16 Jan 2026",
    location: "Chattogram",
    status: "Pending",
    image:
      "https://images.unsplash.com/photo-1502877338535-766e1452684a?q=80&w=400&auto=format&fit=crop",
  },
  {
    id: 3,
    vehicle: "Ford Transit",
    date: "18 Jan 2026",
    location: "Sylhet",
    status: "Completed",
    image:
      "https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?q=80&w=400&auto=format&fit=crop",
  },
];

const DashboardHome = () => {
  return (
    <div className="min-h-screen bg-[#f6f8fc] p-6 md:p-8">
 
      {/* HEADER */}
      <div className=" mb-8">

          <p className="text-2xl text-center font-bold tracking-widest uppercase text-blue-600 mb-2">
            Dashboard Overview
          </p>
      
      </div>

      {/* ========================= */}
      {/* STATS */}
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">

        {stats.map((item, i) => (
          <div
            key={i}
            className="
              group
              relative
              overflow-hidden
              bg-white
              rounded-[28px]
              border border-gray-200
              p-6
              shadow-sm
              hover:shadow-xl
              transition-all duration-500
              hover:-translate-y-1
            "
          >

            {/* TOP */}
            <div className="flex items-start justify-between">

              <div>

                <p className="text-gray-500 text-sm font-semibold">
                  {item.title}
                </p>

                <h3 className="text-4xl font-black text-gray-900 mt-3">
                  {item.value}
                </h3>

              </div>

              <div
                className={`
                  w-16 h-16 rounded-2xl
                  flex items-center justify-center
                  text-3xl
                  ${item.bg}
                  ${item.text}
                `}
              >
                {item.icon}
              </div>

            </div>

            {/* BOTTOM */}
            <div className="mt-8 flex items-center gap-2">

              <div className="
                w-7 h-7 rounded-full
                bg-green-100
                flex items-center justify-center
                text-green-600 text-xs
              ">
                <FaArrowUp />
              </div>

              <p className="text-sm font-semibold text-gray-600">
                <span className="text-green-600 font-bold">
                  {item.growth}
                </span>{" "}
                from last month
              </p>

            </div>

            {/* GLOW */}
            <div className="
              absolute -top-10 -right-10
              w-32 h-32
              bg-blue-100/40
              blur-3xl
              rounded-full
              opacity-0 group-hover:opacity-100
              transition
            "></div>

          </div>
        ))}

      </div>

      {/* ================================================= */}
      {/* CHART + SUMMARY */}
      {/* ================================================= */}
      <div className="grid lg:grid-cols-3 gap-6 mt-10">

        {/* CHART */}
        <div className="
          lg:col-span-2
          bg-white
          rounded-[32px]
          border border-gray-200
          p-7
          shadow-sm
        ">

          {/* HEADER */}
          <div className="flex items-center justify-between mb-8">

            <div>

              <h3 className="text-2xl font-black text-gray-900">
                Booking Analytics
              </h3>

              <p className="text-gray-500 mt-1 font-medium">
                Monthly booking performance overview
              </p>

            </div>

            <div className=" bg-blue-50
              text-blue-600
              px-4 py-2
              rounded-full
              text-sm
              font-bold
            ">
              +24% Growth
            </div>

          </div>

          {/* CHART */}
          <ResponsiveContainer width="100%" height={350}>

            <AreaChart data={chartData}>

              <defs>
                <linearGradient
                  id="colorBookings"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop
                    offset="5%"
                    stopColor="#2563eb"
                    stopOpacity={0.4}
                  />

                  <stop
                    offset="95%"
                    stopColor="#2563eb"
                    stopOpacity={0}
                  />
                </linearGradient>
              </defs>

              <CartesianGrid
                strokeDasharray="4 4"
                stroke="#e5e7eb"
              />

              <XAxis
                dataKey="name"
                tick={{ fill: "#6b7280" }}
              />

              <YAxis tick={{ fill: "#6b7280" }} />

              <Tooltip />

              <Area
                type="monotone"
                dataKey="bookings"
                stroke="#2563eb"
                fillOpacity={1}
                fill="url(#colorBookings)"
                strokeWidth={4}
              />

            </AreaChart>

          </ResponsiveContainer>

        </div>

        {/* SIDE SUMMARY */}
        <div className="
          bg-gradient-to-br
          from-blue-600
          via-blue-700
          to-slate-900
          rounded-[32px]
          p-7
          text-white
          relative
          overflow-hidden
        ">

          {/* BLUR */}
          <div className="
            absolute top-0 right-0
            w-40 h-40
            bg-white/10
            blur-3xl
            rounded-full
          "></div>

          <div className="relative z-10">

            <p className="uppercase tracking-[0.2em] text-sm text-blue-200 font-semibold">
              Performance
            </p>

            <h3 className="text-4xl font-black mt-4 leading-tight">
              Your dashboard is growing fast 🚀
            </h3>

            <p className="mt-5 text-blue-100 leading-8 font-medium">
              Keep tracking bookings and customer activities
              to improve your premium rental services.
            </p>

            {/* MINI STATS */}
            <div className="space-y-5 mt-10">

              <div className="
                bg-white/10
                border border-white/10
                rounded-2xl
                p-5
                backdrop-blur-xl
              ">

                <p className="text-blue-200 text-sm font-medium">
                  Average Rating
                </p>

                <div className="flex items-center gap-2 mt-2">

                  <FaStar className="text-yellow-400" />

                  <h4 className="text-3xl font-black">
                    4.9
                  </h4>

                </div>

              </div>

              <div className="
                bg-white/10
                border border-white/10
                rounded-2xl
                p-5
                backdrop-blur-xl
              ">

                <p className="text-blue-200 text-sm font-medium">
                  Active Customers
                </p>

                <h4 className="text-3xl font-black mt-2">
                  1.2K+
                </h4>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ================================================= */}
      {/* RECENT BOOKINGS */}
      {/* ================================================= */}
      <div className="
        mt-10
        bg-white
        rounded-[32px]
        border border-gray-200
        shadow-sm
        overflow-hidden
      ">

        {/* HEADER */}
        <div className="
          px-7 py-6
          border-b border-gray-100
          flex items-center justify-between
        ">

          <div>

            <h3 className="text-2xl font-black text-gray-900">
              Recent Bookings
            </h3>

            <p className="text-gray-500 mt-1 font-medium">
              Latest customer booking activities
            </p>

          </div>

          <button className="
            px-5 py-2.5 rounded-full
            bg-blue-50
            text-blue-600
            font-bold
            hover:bg-blue-100
            transition
          ">
            View All
          </button>

        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">

          <table className="w-full">

            <thead className="bg-gray-50">

              <tr>

                <th className="text-left px-7 py-5 text-sm font-bold text-gray-600">
                  Vehicle
                </th>

                <th className="text-left px-7 py-5 text-sm font-bold text-gray-600">
                  Booking Date
                </th>

                <th className="text-left px-7 py-5 text-sm font-bold text-gray-600">
                  Location
                </th>

                <th className="text-left px-7 py-5 text-sm font-bold text-gray-600">
                  Status
                </th>

              </tr>

            </thead>

            <tbody>

              {recentBookings.map((booking) => (
                <tr
                  key={booking.id}
                  className="
                    border-t border-gray-100
                    hover:bg-gray-50
                    transition
                  "
                >

                  {/* VEHICLE */}
                  <td className="px-7 py-5">

                    <div className="flex items-center gap-4">

                      <img
                        src={booking.image}
                        alt={booking.vehicle}
                        className="
                          w-16 h-16
                          rounded-2xl
                          object-cover
                        "
                      />

                      <div>

                        <h4 className="font-black text-gray-900 text-lg">
                          {booking.vehicle}
                        </h4>

                        <p className="text-gray-500 text-sm font-medium">
                          Premium Vehicle
                        </p>

                      </div>

                    </div>

                  </td>

                  {/* DATE */}
                  <td className="px-7 py-5">

                    <div className="flex items-center gap-3 text-gray-700 font-medium">

                      <FaCalendarAlt className="text-blue-500" />

                      {booking.date}

                    </div>

                  </td>

                  {/* LOCATION */}
                  <td className="px-7 py-5">

                    <div className="flex items-center gap-3 text-gray-700 font-medium">

                      <FaMapMarkerAlt className="text-pink-500" />

                      {booking.location}

                    </div>

                  </td>

                  {/* STATUS */}
                  <td className="px-7 py-5">

                    <span
                      className={`
                        px-4 py-2 rounded-full
                        text-sm font-bold
                        ${
                          booking.status === "Completed"
                            ? "bg-green-100 text-green-600"
                            : "bg-yellow-100 text-yellow-600"
                        }
                      `}
                    >
                      {booking.status}
                    </span>

                  </td>

                </tr>
              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default DashboardHome;