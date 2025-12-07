"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Skills", href: "/skill" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [time, setTime] = useState("");
  const [menuOpen, setMenuOpen] = useState(false);

  // Update time every second
  useEffect(() => {
    const interval = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-gray-900 text-white shadow-md sticky top-0 z-50">
      <nav className="relative container mx-auto py-4 px-6 flex items-center justify-center md:justify-center">
        {/* DESKTOP NAV */}
        <div className="hidden md:flex gap-3 bg-gray-700 rounded-full px-4 py-2">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`px-3 py-1 rounded-full transition-colors ${
                  isActive ? "bg-gray-300 text-black" : "bg-gray-600 hover:bg-gray-500"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          className="md:hidden absolute right-6 flex flex-col justify-center items-center gap-1"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${
              menuOpen ? "rotate-45 translate-y-1" : ""
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-opacity ${
              menuOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <span
            className={`block w-6 h-0.5 bg-white transition-transform ${
              menuOpen ? "-rotate-45 -translate-y-1" : ""
            }`}
          />
        </button>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="absolute top-full left-0 w-full bg-gray-800 flex flex-col gap-2 p-4 md:hidden items-center">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className={`px-3 py-2 rounded transition-colors ${
                  pathname === item.href ? "bg-gray-300 text-black" : "hover:bg-gray-700"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="mt-2 font-mono text-sm">{time}</div>
          </div>
        )}
      </nav>
    </header>
  );
}
