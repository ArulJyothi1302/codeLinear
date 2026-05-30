"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full py-6 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
       <Link href="/">
          <h1 className="text-4xl font-bold tracking-wider">N7</h1>
        </Link>

        <nav className="hidden xl:flex items-center gap-10 text-sm text-gray-300">
          <Link href="/solutions">Solutions</Link>
          <a href="#">Resources</a>
          <a href="#">About Us</a>
          <a href="#">Contact Us</a>
        </nav>

        <div className="hidden xl:flex items-center gap-4">
          <button className="bg-[#0D6EFD] hover:bg-[#0B5ED7] transition px-6 py-3 rounded-md text-sm font-medium">
            REQUEST DEMO
          </button>
        </div>

        <div className="xl:hidden relative">
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="inline-flex items-center justify-center rounded-md border border-white/20 bg-white/10 p-3 text-white transition hover:bg-white/20"
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
          >
            <span className="sr-only">
              {isOpen ? "Close menu" : "Open menu"}
            </span>
            {isOpen ? (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M6 6l12 12M6 18L18 6" />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>

          {isOpen ? (
            <div className="absolute top-full right-0 z-20 mt-2 w-[240px] rounded-3xl border border-white/10 bg-slate-950/95 backdrop-blur-xl p-4 shadow-2xl">
              <nav className="flex flex-col gap-2 text-sm text-gray-300">
                <a
                  href="#"
                  className="rounded-xl px-3 py-2 hover:bg-white/10 transition"
                >
                  Solutions
                </a>
                <a
                  href="#"
                  className="rounded-xl px-3 py-2 hover:bg-white/10 transition"
                >
                  Resources
                </a>
                <a
                  href="#"
                  className="rounded-xl px-3 py-2 hover:bg-white/10 transition"
                >
                  About Us
                </a>
                <a
                  href="#"
                  className="rounded-xl px-3 py-2 hover:bg-white/10 transition"
                >
                  Contact Us
                </a>
              </nav>
              <button className="mt-3 w-full bg-[#0D6EFD] hover:bg-[#0B5ED7] transition px-4 py-2 rounded-xl text-sm font-medium">
                REQUEST DEMO
              </button>
            </div>
          ) : null}
        </div>
      </div>
    </header>
  );
}
