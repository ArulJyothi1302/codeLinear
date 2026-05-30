// import { Home, CreditCard, BarChart3, Settings } from "lucide-react";

// export default function CB7Dashboard() {
//   return (
//     <div
//       className="
//       bg-white
//       rounded-[32px]
//       shadow-2xl
//       overflow-hidden
//       "
//     >
//       <div className="grid grid-cols-[80px_1fr]">
//         {/* Sidebar */}

//         <div className="border-r border-gray-100 p-5">
//           <h2
//             className="
//             text-[#0D6EFD]
//             font-bold
//             text-xl
//             "
//           >
//             CB7
//           </h2>

//           <div className="flex flex-col gap-6 mt-10">
//             <Home size={20} className="text-[#0D6EFD]" />

//             <BarChart3 size={20} className="text-gray-400" />

//             <CreditCard size={20} className="text-gray-400" />

//             <Settings size={20} className="text-gray-400" />
//           </div>
//         </div>

//         {/* Main Content */}

//         <div className="p-8">
//           <div className="flex justify-between items-center">
//             <div>
//               <h3
//                 className="
//                 text-black
//                 text-3xl
//                 font-semibold
//                 "
//               >
//                 Weekly Summary
//               </h3>

//               <p className="text-gray-400 mt-2">
//                 Get summary of your weekly online transactions.
//               </p>
//             </div>

//             <div
//               className="
//               h-10
//               w-10
//               rounded-full
//               bg-orange-300
//               "
//             />
//           </div>

//           {/* Widgets Placeholder */}
//             <div className="mt-4">
//                 <h4 className="text-3xl text-black font-bold">₹ 2850.75</h4>
//               </div>
//           <div className="grid grid-cols-[1.2fr_1fr] gap-6 mt-8">
//             {/* Card */}
//             <div
//               className="
//                 bg-gradient-to-br
//                 from-[#1976ff]
//                 to-[#0b5ed7]
//                 rounded-2xl
//                 p-5
//                 text-white
//                 "
//             >
//               <p className="text-xs opacity-80">Cloud Card</p>

//               <div className="mt-6 flex justify-between text-sm">
//                 <span>5789</span>
//                 <span>••••</span>
//                 <span>2847</span>
//               </div>
//               <div className= "flex justify-between mt-4">
//               <div className="text-sm mt-3">
//                 <p>Card Holder</p>
//                 <p>Jane Smith</p>
//               </div>
//               <div className="text-sm mt-3">
//                 <p>Expiry <data value=""></data>ate</p>
//                 <p>12 / 27 </p>
//               </div>
//               </div>

//               <div className="mt-4 h-2 bg-white/20 rounded-full">
//                 <div
//                   className="
//                     h-full
//                     w-[65%]
//                     bg-white
//                     rounded-full
//                     "
//                 />
//               </div>

//               <div className="flex justify-between mt-3 text-xs">
//                 <span>Money Spent</span>
//                 <span>$1500.50</span>
//               </div>
//             </div>

//             {/* Goals */}
//             <div className="grid grid-cols-3 gap-3">
//               {[
//                 {
//                   amount: "$550",
//                   title: "Holidays",
//                 },
//                 {
//                   amount: "$200",
//                   title: "Renovation",
//                 },
//                 {
//                   amount: "$820",
//                   title: "Xbox",
//                 },
//               ].map((item) => (
//                 <div
//                   key={item.title}
//                   className="
//                 bg-gray-100
//                   rounded-xl
//                    p-3
//                 "
//                 >
//                   <div
//                     className="
//                     h-8
//                     w-8
//                     rounded-lg
//                   bg-white
//                     "
//                   />

//                   <h5 className="mt-4 font-semibold text-black">
//                     {item.amount}
//                   </h5>

//                   <p className="text-xs text-gray-500 mt-1">{item.title}</p>
//                 </div>
//               ))}
//             </div>
//             {/* Transaction History */}
//             <div className="mt-8">
//               <h4 className="text-black font-semibold mb-4">
//                 Transaction History
//               </h4>

//               <div className="space-y-3">
//                 {[
//                   {
//                     name: "Netflix",
//                     amount: "$59.00",
//                   },
//                   {
//                     name: "Spotify",
//                     amount: "$12.00",
//                   },
//                   {
//                     name: "Amazon",
//                     amount: "$99.00",
//                   },
//                   {
//                     name: "Google",
//                     amount: "$30.00",
//                   },
//                 ].map((item) => (
//                   <div
//                     key={item.name}
//                     className="
//                     flex
//                     justify-between
//                     items-center
//                     bg-gray-50
//                     rounded-xl
//                     p-3
//                     "
//                   >
//                     <span className="text-black">{item.name}</span>

//                     <span className="font-medium text-black">
//                       {item.amount}
//                     </span>
//                   </div>
//                 ))}
//               </div>
//             </div>

//             {/* Stats */}
//             <div className="mt-8">
//               <h4 className="text-black font-semibold">Outcome Statistics</h4>

//               <div className="space-y-4 mt-4">
//                 {[
//                   { label: "Shopping", value: 52 },
//                   { label: "Electronics", value: 21 },
//                   { label: "Travel", value: 74 },
//                 ].map((item) => (
//                   <div key={item.label}>
//                     <div className="flex justify-between text-sm">
//                       <span>{item.label}</span>
//                       <span>{item.value}%</span>
//                     </div>

//                     <div className="h-2 bg-gray-200 rounded-full mt-2">
//                       <div
//                         className="h-full bg-[#0D6EFD] rounded-full"
//                         style={{
//                           width: `${item.value}%`,
//                         }}
//                       />
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

"use client";

import { motion } from "framer-motion";
import {
  Home,
  CreditCard,
  BarChart3,
  Settings,
  Wallet,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const sidebarItems = [
  {
    icon: Home,
    label: "Overview",
    active: true,
  },
  {
    icon: CreditCard,
    label: "Cards",
  },
  {
    icon: Wallet,
    label: "Wallet",
  },
  {
    icon: BarChart3,
    label: "Reports",
  },
  {
    icon: Settings,
    label: "Settings",
  },
];

const goals = [
  {
    amount: "$550",
    title: "Holiday",
  },
  {
    amount: "$200",
    title: "Renovation",
  },
  {
    amount: "$820",
    title: "Gaming",
  },
];

export default function CB7Dashboard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="
      rounded-[36px]
      overflow-hidden
      border
      border-white/10
      bg-[#111827]
      shadow-[0_40px_120px_rgba(0,0,0,.45)]
      "
    >
      <div className="grid grid-cols-1 lg:grid-cols-[120px_minmax(0,1fr)]">
        {/* SIDEBAR */}

        <aside
          className="
          border-b
          border-white/10
          lg:border-b-0
          lg:border-r
          bg-[#0B1220]
          p-6
          "
        >
          <h2
            className="
            text-[#3B82F6]
            font-bold
            text-3xl
            "
          >
            CB7
          </h2>

          <div className="mt-12 space-y-4">
            {sidebarItems.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className={`
                    relative
                    flex
                    flex-col
                    items-center
                    justify-center
                    gap-2
                    h-14
                    rounded-2xl
                    border-l-4
                    transition-all
                    duration-300
                    cursor-pointer
                    overflow-hidden

                    ${
                      item.active
                        ? "bg-[#3B82F6] text-white border-blue-500"
                        : "text-gray-500 border-transparent hover:bg-white/5 hover:text-white hover:border-blue-500"
                    }
                  `}
                >
                  <Icon size={18} />

                  <span className="text-[10px]">{item.label}</span>
                </div>
              );
            })}
          </div>
        </aside>

        {/* CONTENT */}

        <main className="p-6 lg:p-10">
          {/* HEADER */}

          <div
            className="
            flex
            flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            gap-6
            "
          >
            <div>
              <h2
                className="
                text-white
                text-3xl
                lg:text-5xl
                font-bold
                "
              >
                Weekly Summary
              </h2>

              <p className="text-gray-400 mt-3">
                Get summary of your weekly online transactions.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <div
                className="
                h-12
                w-12
                rounded-full
                bg-gradient-to-br
                from-yellow-400
                to-orange-500
                "
              />

              <div>
                <p className="text-white font-medium">Andrew Smith</p>

                <p className="text-xs text-gray-400">Admin Account</p>
              </div>
            </div>
          </div>

          {/* TOP SECTION */}

          <div className="grid xl:grid-cols-[2fr_minmax(0,1fr)] gap-6 mt-10">
            {/* CARD + BALANCE */}

            <div
              className="
              bg-[#0B1220]
              rounded-[28px]
              border
              border-white/10
              p-6
              "
            >
              <h3
                className="
                text-white
                font-semibold
                text-lg
                mb-6
                "
              >
                Premium Card
              </h3>

              <div className="flex flex-col xl:flex-row gap-8">
                {/* CARD */}

                <motion.div
                  whileHover={{
                    y: -6,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                  relative
                  w-full
                  xl:flex-1
                  min-h-[220px]
                  overflow-hidden
                  rounded-[28px]
                  bg-gradient-to-br
                  from-[#2563EB]
                  via-[#3B82F6]
                  to-[#60A5FA]
                  p-6
                  text-white
                  shadow-2xl
                  "
                >
                  <div className="absolute -right-8 -bottom-8 h-32 w-32 rounded-full bg-white/10" />
                  <div className="absolute right-10 bottom-0 h-20 w-20 rounded-full bg-white/10" />

                  <p className="text-xs opacity-70">PREMIUM ACCOUNT</p>

                  <h4 className="mt-2 text-2xl font-semibold">Cloud Card</h4>

                  <div className="mt-10 text-[20px] sm:text-[22px] tracking-[0.3em] sm:tracking-[0.35em] break-words">
                    5789 •••• •••• 2847
                  </div>

                  <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-between text-sm">
                    <div>
                      <p className="opacity-70">Card Holder</p>

                      <p>Jane Smith</p>
                    </div>

                    <div>
                      <p className="opacity-70">Expiry</p>

                      <p>12 / 27</p>
                    </div>
                  </div>
                </motion.div>

                {/* BALANCE */}

                <div
                  className="
                  flex
                  flex-col
                  justify-center
                  w-full
                  xl:w-[260px]
                  mt-6
                  xl:mt-0
                  min-w-0
                  "
                >
                  <h2
                    className="
                    text-5xl
                    font-bold
                    text-white
                    "
                  >
                    ₹2850.75
                  </h2>

                  <p className="text-gray-400 mt-2">Current Balance</p>

                  <div className="space-y-5 mt-8">
                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <ArrowUpRight size={18} className="text-green-400" />

                        <span className="text-green-400">Income</span>
                      </div>

                      <span className="text-green-400 font-semibold">
                        $1500.50
                      </span>
                    </div>

                    <div className="flex justify-between">
                      <div className="flex items-center gap-2">
                        <ArrowDownRight size={18} className="text-red-400" />

                        <span className="text-red-400">Outcome</span>
                      </div>

                      <span className="text-red-400 font-semibold">
                        $350.60
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-8">
                    <span className="text-sm text-gray-400">
                      Deactivate Card
                    </span>

                    <button
                      className="
                      w-12
                      h-6
                      rounded-full
                      bg-[#3B82F6]
                      relative
                      "
                    >
                      <span
                        className="
                        absolute
                        right-1
                        top-1
                        h-4
                        w-4
                        rounded-full
                        bg-white
                        "
                      />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* GOALS */}

            <div>
              <h3
                className="
                text-white
                font-semibold
                text-lg
                mb-6
                "
              >
                Goals
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-3 xl:grid-cols-1 gap-4">
                {goals.map((goal, index) => (
                  <motion.div
                    key={goal.title}
                    whileHover={{
                      y: -5,
                      scale: 1.02,
                    }}
                    className="
                    bg-[#0B1220]
                    border
                    border-white/10
                    rounded-[24px]
                    p-5
                    cursor-pointer
                    "
                  >
                    <div
                      className={`
                      h-10
                      w-10
                      rounded-xl
                      mb-4

                      ${
                        index === 0
                          ? "bg-green-500/20"
                          : index === 1
                            ? "bg-orange-500/20"
                            : "bg-blue-500/20"
                      }
                      `}
                    />

                    <h4
                      className="
                      text-white
                      text-xl
                      font-semibold
                      "
                    >
                      {goal.amount}
                    </h4>

                    <p className="text-gray-400 text-sm mt-1">{goal.title}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* BOTTOM SECTION */}

          <div className="grid xl:grid-cols-[2fr_minmax(0,1fr)] gap-6 mt-6">
            {/* TRANSACTION HISTORY */}

            <div
              className="
              bg-[#0B1220]
              border
              border-white/10
              rounded-[28px]
              p-6
              "
            >
              <div className="flex items-center justify-between mb-6">
                <h3
                  className="
                  text-white
                  text-lg
                  font-semibold
                  "
                >
                  Transaction History
                </h3>

                <button
                  className="
                  text-sm
                  text-blue-400
                  hover:text-blue-300
                  "
                >
                  View All
                </button>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full min-w-full lg:min-w-[500px]">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left text-gray-500 pb-4 text-sm font-medium">
                        Receiver
                      </th>

                      <th className="text-left text-gray-500 pb-4 text-sm font-medium">
                        Type
                      </th>

                      <th className="text-left text-gray-500 pb-4 text-sm font-medium">
                        Date
                      </th>

                      <th className="text-right text-gray-500 pb-4 text-sm font-medium">
                        Amount
                      </th>
                    </tr>
                  </thead>

                  <tbody>
                    {[
                      {
                        name: "Netflix",
                        type: "Subscription",
                        date: "12 Jan",
                        amount: "-$59.00",
                      },
                      {
                        name: "Spotify",
                        type: "Music",
                        date: "10 Jan",
                        amount: "-$12.00",
                      },
                      {
                        name: "Amazon",
                        type: "Shopping",
                        date: "09 Jan",
                        amount: "-$99.00",
                      },
                      {
                        name: "Google",
                        type: "Services",
                        date: "07 Jan",
                        amount: "-$30.00",
                      },
                    ].map((item) => (
                      <tr
                        key={item.name}
                        className="
                        border-b
                        border-white/5
                        hover:bg-white/5
                        transition-colors
                        "
                      >
                        <td className="py-5 text-white">{item.name}</td>

                        <td className="text-gray-400">{item.type}</td>

                        <td className="text-gray-400">{item.date}</td>

                        <td className="text-right text-red-400 font-medium">
                          {item.amount}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* STATISTICS */}

            <div
              className="
              bg-[#0B1220]
              border
              border-white/10
              rounded-[28px]
              p-6
              "
            >
              <h3
                className="
                text-white
                text-lg
                font-semibold
                mb-6
                "
              >
                Outcome Statistics
              </h3>

              <div className="space-y-6">
                {[
                  {
                    label: "Shopping",
                    value: 52,
                    color: "bg-blue-500",
                  },
                  {
                    label: "Electronics",
                    value: 21,
                    color: "bg-orange-500",
                  },
                  {
                    label: "Travel",
                    value: 74,
                    color: "bg-green-500",
                  },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{item.label}</span>

                      <span className="text-white">{item.value}%</span>
                    </div>

                    <div className="h-3 bg-white/5 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{
                          width: `${item.value}%`,
                        }}
                        viewport={{ once: true }}
                        transition={{
                          duration: 1,
                        }}
                        className={`
                        h-full
                        rounded-full
                        ${item.color}
                        `}
                      />
                    </div>
                  </div>
                ))}
              </div>

              <div
                className="
                mt-8
                p-5
                rounded-2xl
                bg-gradient-to-br
                from-blue-600/20
                to-purple-600/20
                border
                border-blue-500/20
                "
              >
                <p className="text-gray-400 text-sm">Monthly Spend</p>

                <h3
                  className="
                  text-white
                  text-3xl
                  font-bold
                  mt-2
                  "
                >
                  $3,560
                </h3>

                <p className="text-green-400 text-sm mt-2">
                  +12.5% from last month
                </p>
              </div>
            </div>
          </div>
        </main>
      </div>
    </motion.div>
  );
}
