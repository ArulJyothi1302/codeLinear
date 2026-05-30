"use client";

import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <footer className="relative bg-[#020C17] overflow-hidden">

      {/* Glow */}

      <div className="absolute left-0 top-0 w-[500px] h-[500px] bg-blue-600/10 blur-[180px]" />

      {/* CTA */}

      <section className="max-w-7xl mx-auto px-6 lg:px-10 py-24">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-10">

          <div>
            <h2 className="text-white text-4xl lg:text-6xl font-light leading-tight max-w-2xl">
              Take the full advantage of
              <br />
              going paper-less now.
            </h2>

            <p className="text-gray-400 mt-6 max-w-xl">
              CB7 helps your financial institution improve the client
              experience, automate and optimize procedures, simplify banking
              operations.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              className="
              border
              border-white/20
              px-8
              py-4
              rounded-lg
              text-white
              hover:bg-white/5
              transition
              cursor-pointer
              "
            >
              CONTACT US
            </button>

            <button
              className="
              bg-gradient-to-r
              from-[#1DA1FF]
              to-[#0D6EFD]
              px-8
              py-4
              rounded-lg
              text-white
              hover:scale-105
              transition
              cursor-pointer
              "
            >
              REQUEST DEMO
            </button>
          </div>

        </div>
      </section>

      {/* MAIN FOOTER */}

      <section className="max-w-7xl mx-auto px-6 lg:px-10 pb-20">

        <div className="grid lg:grid-cols-[300px_1fr] gap-16">

          {/* Logo */}

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h1
              className="
              text-[120px]
              lg:text-[180px]
              font-bold
              leading-none
              bg-gradient-to-b
              from-[#19C8FF]
              to-[#0D6EFD]
              bg-clip-text
              text-transparent
              "
            >
              N7
            </h1>
          </motion.div>

          {/* Right */}

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">

            {/* London */}

            <div>
              <h4 className="text-white mb-4">London</h4>

              <p className="text-gray-400 text-sm leading-7">
                Linktia Infosystems Ltd – CB7,
                <br />
                26 Main Road Sundridge,
                <br />
                TN14 6EP,
                England, United Kingdom.
              </p>
            </div>

            {/* Dubai */}

            <div>
              <h4 className="text-white mb-4">Dubai</h4>

              <p className="text-gray-400 text-sm leading-7">
                Linktia Infosystems Ltd –
                <br />
                CB7, Jumeirah Business Center 5,
                Cluster W,
                Jumeirah Lakes Towers,
                Dubai.
              </p>
            </div>

            {/* India */}

            <div>
              <h4 className="text-white mb-4">India</h4>

              <p className="text-gray-400 text-sm leading-7">
                Linktia Infosystems Ltd –
                <br />
                CB7, Nirmal Anand Nagar,
                Suncity Road,
                Pune,
                Maharashtra.
              </p>
            </div>

            {/* Links */}

            <div>
              <h4 className="text-white mb-4">Solutions</h4>

              <ul className="space-y-3">
                {[
                  "Core Banking CB7",
                  "Digital Banking N7",
                  "Open Banking",
                  "Loan Origination",
                  "Loan Management",
                  "Digital Transformation",
                ].map((item) => (
                  <li
                    key={item}
                    className="
                    flex
                    items-center
                    justify-between
                    text-gray-400
                    hover:text-[#1DA1FF]
                    cursor-pointer
                    transition
                    "
                  >
                    {item}

                    <ArrowRight size={14} />
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Second Row */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mt-16">

          <div />

          <div>
            <h4 className="text-white mb-4">
              N7 Banking
            </h4>

            <ul className="space-y-3">
              {[
                "About Us",
                "Solutions",
                "Contact",
                "Company",
                "Careers",
                "Insights",
                "Core Team",
                "Brand Center",
              ].map((item) => (
                <li
                  key={item}
                  className="
                  flex
                  items-center
                  justify-between
                  text-gray-400
                  hover:text-[#1DA1FF]
                  cursor-pointer
                  transition
                  "
                >
                  {item}

                  <ArrowRight size={14} />
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-white mb-4">
              Our Socials
            </h4>

            <ul className="space-y-3">
              {["LinkedIn", "X"].map((item) => (
                <li
                  key={item}
                  className="
                  flex
                  items-center
                  justify-between
                  text-gray-400
                  hover:text-[#1DA1FF]
                  cursor-pointer
                  transition
                  "
                >
                  {item}

                  <ArrowRight size={14} />
                </li>
              ))}
            </ul>
          </div>

        </div>

      </section>

      {/* COPYRIGHT */}

      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 py-6">
          <p className="text-xs text-gray-500">
            Copyright © 2025 Linktia Infosystems Limited (CB7 and N7 are
            commercial brands). Registered under the Companies Act 2006 in
            England and Wales.
          </p>
        </div>
      </div>

    </footer>
  );
}