"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import {solutions} from "../utils/data";

export default function Solutions() {
  return (
    <section className="py-32">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid lg:grid-cols-[350px_1fr] gap-24">

          {/* LEFT */}

          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl leading-tight font-light">
              All of our solutions are tailor-made to your needs
            </h2>

            <button
              className="
              mt-10
              border
              border-white/20
              px-8
              py-4
              rounded-lg
              text-sm
              hover:bg-white
              hover:text-black
              transition-all
              "
            >
              REQUEST DEMO
            </button>
          </motion.div>

          {/* RIGHT */}

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-20">
            {solutions.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: index * 0.1,
                }}
                className="group"
              >
                <div className="flex items-center justify-between">

                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={28}
                    height={28}
                  />

                  {item.tag && (
                    <span className="text-xs text-gray-500">
                      {item.tag}
                    </span>
                  )}
                </div>

                <h3
                  className="
                  mt-6
                  text-2xl
                  font-light
                  group-hover:text-[#0D6EFD]
                  transition-colors
                  "
                >
                  {item.title}
                </h3>

                <p
                  className="
                  mt-5
                  text-sm
                  text-gray-400
                  leading-7
                  "
                >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Dolore atque sed aliquid reiciendis.
                </p>

                <button
                  className="
                  mt-6
                  flex
                  items-center
                  gap-2
                  text-[#0D6EFD]
                  text-sm
                  group-hover:gap-4
                  transition-all
                  "
                >
                  LEARN MORE
                  <ArrowRight size={14} />
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}