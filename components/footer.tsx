"use client";

import Link from "next/link";
import {
  FaGithub,
  FaLinkedinIn,
  FaEnvelope,
  FaArrowUp,
  FaArrowRight,
  FaLocationDot,
} from "react-icons/fa6";

export default function Footer() {
  return (
    <footer
      id="contact"
      className="bg-[#071C4D] text-white"
    >
      <div className="mx-auto max-w-7xl px-6 py-5">

        {/* ================= TOP ================= */}

        <div className="grid items-center gap-6 border-b border-white/10 pb-5 lg:grid-cols-[1.7fr_1.2fr_1fr_auto]">

          {/* LEFT */}

          <div className="lg:border-r lg:border-white/10 lg:pr-6">

            <h2 className="text-3xl font-bold leading-tight">
              Let&apos;s Build Something
              <br />
              Great Together!
            </h2>

            <p className="mt-2 max-w-sm text-sm leading-6 text-slate-300">
              I&apos;m open to internships, collaborations, and opportunities
              to build impactful digital products.
            </p>

          </div>

          {/* CONTACT */}

          <div className="space-y-3 lg:border-r lg:border-white/10 lg:px-6">

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600/20">
                <FaEnvelope
                  className="text-blue-400"
                  size={15}
                />
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-widest text-slate-400">
                  Email
                </p>

                <p className="text-sm">
                  rosaaa2900@gmail.com
                </p>
              </div>

            </div>

            <div className="flex items-center gap-3">

              <div className="flex h-9 w-9 items-center justify-center rounded-full bg-blue-600/20">
                <FaLocationDot
                  className="text-blue-400"
                  size={15}
                />
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-widest text-slate-400">
                  Location
                </p>

                <p className="text-sm">
                  Surabaya, Indonesia
                </p>
              </div>

            </div>

          </div>

          {/* SOCIAL */}

          <div className="lg:border-r lg:border-white/10 lg:px-6">

            <p className="mb-3 text-[11px] uppercase tracking-widest text-slate-400">
              Follow Me
            </p>

            <div className="flex gap-3">

              <Link
                href="https://linkedin.com/in/meirosa"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition duration-300 hover:bg-blue-600"
              >
                <FaLinkedinIn size={16} />
              </Link>

              <Link
                href="https://github.com/meirosa"
                target="_blank"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition duration-300 hover:bg-blue-600"
              >
                <FaGithub size={16} />
              </Link>

              <Link
                href="mailto:meirosa350@gmail.com"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 transition duration-300 hover:bg-blue-600"
              >
                <FaEnvelope size={16} />
              </Link>

            </div>

          </div>

          {/* BUTTON */}

          <div className="flex justify-start lg:justify-end">

            <Link
              href="mailto:meirosa350@gmail.com"
              className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-6 py-2.5 text-sm font-semibold transition hover:bg-blue-700"
            >
              Contact Me
              <FaArrowRight size={14} />
            </Link>

          </div>

        </div>

        {/* ================= BOTTOM ================= */}

<div className="relative mt-3">

  <p className="text-center text-xs text-slate-400">
    © 2022 Mei Rosa Widyawati. All Rights Reserved.
  </p>

  <a
    href="#home"
    className="absolute right-0 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-lg border border-white/15 transition hover:bg-[#07162D]"
  >
    <FaArrowUp size={14} />
  </a>

</div>

      </div>
    </footer>
  );
}