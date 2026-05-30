"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Bell, Wallet, HandCoins, Grid2X2, ArrowUpRight } from "lucide-react";

export default function Hero() {
  const [balanceOpen, setBalanceOpen] = useState(true);
  const [activityOpen, setActivityOpen] = useState(true);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleChange = (e:any) => {
      if (e.matches) {
        setBalanceOpen(true);
        setActivityOpen(true);
      }
    };

    // Handle media query changes
    mediaQuery.addEventListener("change", handleChange);

    // Set initial state based on current window size
    if (mediaQuery.matches) {
      setBalanceOpen(true);
      setActivityOpen(true);
    }

    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  const balanceCardWidthClass = balanceOpen
    ? "md:max-w-[280px]"
    : "md:max-w-[170px]";

  return (
    <section className="relative overflow-visible pt-16 pb-24 md:pt-24 md:pb-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12 lg:gap-16">
          <div className="text-center lg:text-left">
            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-light leading-tight"
            >
              The new foundation
              <br />
              of modern banking
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mt-8 text-gray-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed text-base sm:text-lg"
            >
              We drive innovation and growth, provide seamless customer
              experience and operational excellence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-col sm:flex-row sm:justify-center lg:justify-start gap-4 mt-10"
            >
              <button className="w-full sm:w-auto px-8 py-4 bg-[#0D6EFD] rounded-lg font-medium hover:scale-105 hover:bg-[#0056d6] transition-all">
                REQUEST DEMO
              </button>

              <button className="w-full sm:w-auto px-8 py-4 border border-white/20 rounded-lg hover:bg-white hover:text-black transition-all">
                CONTACT US
              </button>
            </motion.div>
          </div>

          <div className="relative flex justify-center items-center pt-6 lg:pt-0">
            <div className="absolute -top-10 w-[420px] h-[420px] md:w-[600px] md:h-[600px] lg:w-[700px] lg:h-[700px] rounded-full bg-[#0D6EFD] opacity-20 blur-[140px] md:blur-[180px]" />

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                duration: 1,
              }}
              className="relative"
            >
              <Image
                src="/hero/woman.svg"
                alt="Hero"
                width={450}
                height={340}
                priority
                className="w-[280px] sm:w-[320px] md:w-[420px] lg:w-[450px] h-auto"
              />

              {/* BALANCE CARD */}

              <motion.div
                animate={{
                  y: [0, -12, 0],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                whileHover={{
                  scale: 1.03,
                }}
                className={`
                relative
                mx-auto
                mt-4
                w-full
                max-w-[220px]
                sm:max-w-[240px]
                ${balanceCardWidthClass}

                md:absolute
                md:top-4
                md:left-[240px]
                md:mx-0
                md:mt-0

                lg:absolute
                lg:top-4
                lg:right-0
                lg:max-w-[340px]

                rounded-[24px]
                overflow-hidden
                border
                border-white/10
                bg-white/80
                backdrop-blur-[30px]
                p-3
                sm:p-4
              `}
              >
                <div
                  className="flex justify-between items-center gap-2"
                  onClick={() => {
                    if (window.innerWidth >= 768 && window.innerWidth < 1024) {
                      setBalanceOpen((prev) => !prev);
                    }
                  }}
                >
                  <div className="flex gap-2 items-center">
                    <Image
                      src="/hero/char.svg"
                      alt=""
                      width={42}
                      height={42}
                      className="rounded-full w-8 h-8 sm:w-9 sm:h-9"
                    />

                    <div className="min-w-0">
                      <h4 className="text-black font-semibold text-sm sm:text-base">
                        Toni Kross
                      </h4>

                      <p className="text-gray-500 text-[10px] sm:text-xs">
                        Good Morning
                      </p>
                    </div>
                  </div>

                  <button className="h-8 w-8 sm:h-9 sm:w-9 rounded-full bg-black flex items-center justify-center hover:bg-[#0D6EFD] transition-all flex-shrink-0">
                    <Bell size={15} />
                  </button>
                </div>

                {balanceOpen && (
                  <>
                    <div className="mt-3">
                      <p className="text-gray-500 text-[10px] sm:text-xs">
                        Total balance
                      </p>

                      <div className="flex items-end gap-2">
                        <h2 className="text-[#0D2A7A] text-2xl sm:text-[28px] leading-none font-bold">
                          $42,295.00
                        </h2>

                        <span className="text-[#0D2A7A] text-xs sm:text-sm">
                          USD
                        </span>
                      </div>
                    </div>

                    <div className="border-t border-gray-200 mt-3 pt-3">
                      <div className="grid grid-cols-3 gap-2">
                        <button className="group flex items-center justify-center rounded-2xl bg-black h-10 w-10 sm:h-11 sm:w-11 transition-all hover:bg-[#0D6EFD]">
                          <Wallet size={16} className="sm:w-5 sm:h-5" />
                        </button>

                        <button className="group flex items-center justify-center rounded-2xl bg-black h-10 w-10 sm:h-11 sm:w-11 transition-all hover:bg-[#0D6EFD]">
                          <HandCoins size={16} className="sm:w-5 sm:h-5" />
                        </button>

                        <button className="group flex items-center justify-center rounded-2xl bg-black h-10 w-10 sm:h-11 sm:w-11 transition-all hover:bg-[#0D6EFD]">
                          <Grid2X2 size={16} className="sm:w-5 sm:h-5" />
                        </button>
                      </div>
                    </div>
                  </>
                )}

                <div className="hidden md:block lg:hidden mt-2 text-xs text-gray-500">
                  {balanceOpen ? "Tap to collapse" : "Tap to expand"}
                </div>
              </motion.div>

              {/* ACTIVITY CARD */}

              <motion.div
                animate={{
                  y: [0, 12, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
                whileHover={{
                  scale: 1.03,
                }}
                className="
                relative
                mx-auto
                mt-4
                w-full
                max-w-[220px]
                sm:max-w-[250px]

                md:absolute
                md:bottom-[-20px]
                md:left-[-50px]
                ${activityCardWidthClass}
                md:mx-0
                md:mt-0

                lg:absolute
                lg:bottom-[-30px]
                lg:left-[-120px]
                lg:w-[360px]

                rounded-[20px]
                bg-white/80
                backdrop-blur-[20px]
                border
                border-white/10
                p-3
                sm:p-4
              "
              >
                <div
                  className="flex justify-between items-center"
                  onClick={() => {
                    if (window.innerWidth >= 768 && window.innerWidth < 1024) {
                      setActivityOpen((prev) => !prev);
                    }
                  }}
                >
                  <h3 className="text-black font-bold text-base sm:text-lg">
                    Recent activity
                  </h3>

                  <button className="h-8 w-8 rounded-full bg-black flex items-center justify-center text-white">
                    <ArrowUpRight
                      size={14}
                      className={`transition-transform ${
                        activityOpen ? "rotate-45" : ""
                      }`}
                    />
                  </button>
                </div>

                {activityOpen && (
                  <>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {["This Day", "This Week", "This Month", "6 Month"].map(
                        (item, index) => (
                          <button
                            key={item}
                            className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-full text-[10px] sm:text-xs transition-all ${
                              index === 1
                                ? "bg-[#0D2A7A] text-white"
                                : "bg-white text-gray-600 hover:bg-[#0D6EFD] hover:text-white"
                            }`}
                          >
                            {item}
                          </button>
                        ),
                      )}
                    </div>

                    <div className="flex gap-2 sm:gap-3 items-center mt-3">
                      <div
                        className="
                        h-8 sm:h-10
                        w-8 sm:w-10
                        rounded-xl
                        bg-[#8B7CF8]
                        flex
                        items-center
                        justify-center
                        flex-shrink-0
                      "
                      >
                        <ArrowUpRight
                          size={14}
                          className="sm:w-5 sm:h-5 text-white"
                        />
                      </div>

                      <div className="min-w-0 flex-1">
                        <h4 className="text-black font-semibold text-xs sm:text-sm leading-tight">
                          To Jin
                        </h4>

                        <p className="text-gray-500 text-[10px] sm:text-xs">
                          Work • 12 Jun 2022
                        </p>
                      </div>

                      <span className="text-red-500 text-sm sm:text-base font-bold flex-shrink-0">
                        -$59
                      </span>
                    </div>
                  </>
                )}

                <div className="hidden md:block lg:hidden mt-2 text-xs text-gray-500">
                  {activityOpen ? "Tap to collapse" : "Tap to expand"}
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
