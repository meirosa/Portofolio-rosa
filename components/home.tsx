"use client";

import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-[#07162D] text-white"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(59,130,246,.18),transparent_35%)]" />

        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] bg-[size:42px_42px]" />

        <div className="absolute left-0 top-1/2 h-px w-full bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

        <div className="absolute -left-32 top-20 h-80 w-80 rounded-full bg-blue-500/10 blur-[120px]" />

        <div className="absolute -right-32 bottom-0 h-[450px] w-[450px] rounded-full bg-cyan-400/10 blur-[140px]" />
      </div>

      <div className="relative mx-auto flex min-h-[650px] max-w-7xl items-center justify-between px-8 pt-24 pb-20">

        {/* LEFT */}

        <div className="max-w-[560px]">

          <span className="inline-flex rounded-md bg-white/10 px-3 py-1 text-sm text-slate-200 backdrop-blur">
            Hello, I&#39;m
          </span>

          <h1 className="mt-3 text-[72px] font-extrabold leading-[0.95] tracking-tight">
            Mei Rosa
            <span className="block">
              Widyawati
            </span>
          </h1>

          <h2 className="mt-4 text-[32px] font-semibold text-blue-400">
            Applied Informatics Engineering
          </h2>

          <p className="mt-6 max-w-[520px] text-lg leading-8 text-slate-300">
            I build digital solutions that solve real-world problems with
            clean code, intuitive design, and meaningful impact.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">

            {[
              "Software Development",
              "Technical Writing",
              "Manual Testing",
              "GIS & Data Visualization",
            ].map((item) => (
              <span
                key={item}
                className="rounded-lg bg-white/10 px-4 py-2 text-sm backdrop-blur"
              >
                {item}
              </span>
            ))}

          </div>

          <div className="mt-10 flex gap-4">

            <Link
              href="#projects"
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-7 py-3 font-semibold transition hover:bg-blue-700"
            >
              View My Projects
              <HiArrowRight />
            </Link>

            <a
              href="/cv/CV_Mei Rosa Widyawati_SKL.pdf"
              download
              className="flex items-center gap-2 rounded-lg border border-white/20 bg-white/5 px-7 py-3 font-semibold transition hover:bg-white/10"
            >
              Download CV
              <FiDownload />
            </a>

          </div>

        </div>

        {/* RIGHT */}

        <div className="relative hidden lg:flex h-[560px] w-[520px] items-center justify-center">

          {/* Blob */}

          <div className="absolute h-[470px] w-[430px] rounded-[42%_58%_63%_37%/40%_35%_65%_60%] bg-gradient-to-br from-[#2457FF] via-[#3C74FF] to-[#5A9DFF]" />

          {/* Glow */}

          <div className="absolute h-[520px] w-[520px] rounded-full bg-blue-500/20 blur-[100px]" />

          {/* Dot atas */}

          <div className="absolute right-4 top-0 grid grid-cols-4 gap-3 opacity-50">
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className="h-1.5 w-1.5 rounded-full bg-white"
              />
            ))}
          </div>

          {/* Dot bawah */}

          <div className="absolute bottom-8 right-0 grid grid-cols-4 gap-3 opacity-40">
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className="h-1.5 w-1.5 rounded-full bg-white"
              />
            ))}
          </div>

          <Image
            src="/image/fotorosa.png"
            alt="Mei Rosa"
            width={560}
            height={700}
            priority
            className="relative z-10 h-auto w-auto max-w-[500px] object-contain drop-shadow-[0_40px_70px_rgba(0,0,0,.45)]"
          />

        </div>

      </div>
    </section>
  );
}