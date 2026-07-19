"use client";

import Link from "next/link";

const menus = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Research", href: "#research" },
  { name: "Certificates", href: "#certificates" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 z-50 w-full bg-[#071A2E]/90 backdrop-blur-md border-b border-white/10">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold text-white">
          Rosa<span className="text-blue-400">.</span>
        </Link>

        {/* Menu */}
        <nav className="hidden md:flex items-center gap-8">
          {menus.map((menu) => (
            <a
              key={menu.name}
              href={menu.href}
              className="text-slate-300 hover:text-blue-400 transition"
            >
              {menu.name}
            </a>
          ))}
        </nav>

        {/* Button */}
<button className="hidden md:block rounded-lg bg-blue-600 px-6 py-2.5 text-white font-medium shadow-md hover:bg-blue-700 hover:shadow-lg transition-all duration-300">
  Download CV
</button>
      </div>
    </header>
  );
}