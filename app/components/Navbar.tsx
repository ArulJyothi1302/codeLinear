"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Solutions", href: "/solutions" },
  { label: "Resources", href: "#resources" },
  { label: "About Us", href: "#about" },
  { label: "Contact Us", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const renderNavItem = (item: { label: string; href: string }) => {
    const isActive = item.href.startsWith("/") && pathname === item.href;

    return (
      <Link
        key={item.label}
        href={item.href}
        className={`group relative inline-flex items-center text-sm font-medium transition ${
          isActive ? "text-white" : "text-gray-300 hover:text-white"
        }`}
      >
        {item.label}
        <span
          className={`absolute -bottom-0.5 left-0 h-[2px] w-full bg-[#0D6EFD] transition-transform duration-300 ease-out origin-left ${
            isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
          }`}
        />
      </Link>
    );
  };

  return (
    <header className="w-full py-6 bg-transparent relative">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/">
          <h1 className="text-4xl font-bold tracking-wider">N7</h1>
        </Link>

        <nav className="hidden xl:flex items-center gap-10">
          {navItems.map((item) => renderNavItem(item))}
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
              <nav className="flex flex-col gap-2 text-sm">
                {navItems.map((item) => {
                  const isActive =
                    item.href.startsWith("/") && pathname === item.href;
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      className={`group rounded-xl px-3 py-2 transition ${
                        isActive
                          ? "bg-white/10 text-white"
                          : "text-gray-300 hover:bg-white/10 hover:text-white"
                      }`}
                    >
                      {item.label}
                      <span
                        className={`block h-[2px] w-full bg-[#0D6EFD] mt-2 transition-transform duration-300 ease-out origin-left ${
                          isActive
                            ? "scale-x-100"
                            : "scale-x-0 group-hover:scale-x-100"
                        }`}
                      />
                    </Link>
                  );
                })}
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
