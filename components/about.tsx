"use client";

import { useState } from "react";
import {
  HiOutlineUser,
  HiOutlineAcademicCap,
  HiOutlineSparkles,
  HiOutlineChartBar,
} from "react-icons/hi2";

export default function About() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="about"
      className="relative overflow-hidden bg-gradient-to-b from-slate-1 to-white py-15"
    >
      {/* Background Glow */}
      <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-blue-100 blur-[120px]" />
      <div className="absolute right-0 bottom-0 h-80 w-80 rounded-full bg-sky-100 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl items-start gap-12 px-6 lg:grid-cols-[1.1fr_1fr] lg:px-10">

        {/* ================= LEFT ================= */}

        <div>
          <div className="mb-3 h-1 w-16 rounded-full bg-blue-600" />

          <span className="text-sm font-semibold uppercase tracking-[3px] text-slate-500">
            About Me
          </span>

          <h2 className="mt-4 text-4xl font-bold leading-tight text-slate-900 lg:text-5xl">
            Passionate about{" "}
            <span className="text-blue-600">Technology</span>
            <br />
            and Problem Solving
          </h2>

          <div className="mt-6 h-1 w-24 rounded-full bg-gradient-to-r from-blue-600 to-cyan-400" />

          <p className="mt-8 leading-8 text-slate-600">
            An Applied Informatics Engineering student currently completing the final stage of the program at the Electronic Engineering Polytechnic Institute of Surabaya (PENS). Passionate about technology and digital innovation, I have gained experience through various academic projects that strengthened my analytical thinking, problem-solving abilities, and collaboration skills. I enjoy transforming ideas into meaningful digital solutions through a structured and user-centered approach while continuously learning new technologies to create innovative, functional, and impactful products.
          </p>
<button
  type="button"
  onClick={() => setShowMore(!showMore)}
  className="mt-5 inline-flex items-center gap-3 rounded-xl border border-blue-600 bg-white px-7 py-3 font-semibold text-blue-600 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white hover:shadow-xl"
>
  <HiOutlineUser size={20} />
  {showMore ? "Show Less" : "Read More About Me"}
</button>
        </div>

        {/* ================= RIGHT ================= */}

        <div className="grid grid-cols-1 gap-6">

         {/* Education */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl">

  <div className="flex items-center gap-2">
    <HiOutlineAcademicCap
      size={22}
      className="text-blue-600"
    />

    <h3 className="text-lg font-bold text-blue-600">
      Education
    </h3>
  </div>

  <div className="mt-6 space-y-6">

    {/* D4 */}
    <div>
      <p className="font-semibold text-slate-800">
        Applied Informatics Engineering (Bachelor of Applied Science)
      </p>

      <p className="text-slate-600">
        Politeknik Elektronika Negeri Surabaya
      </p>

      <p className="text-slate-500">
        2025 – Present
      </p>
    </div>

    <div className="border-t border-slate-200 pt-5">

      {/* D3 */}
      <p className="font-semibold text-slate-800">
        Informatics Engineering (Associate Degree)
      </p>

      <p className="text-slate-600">
        Politeknik Elektronika Negeri Surabaya
      </p>

      <p className="text-slate-500">
        2022 – 2025
      </p>

    </div>

  </div>

</div>

          {/* GPA */}
{/* Academic Performance */}

<div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl">

  <div className="flex items-center gap-2">
    <HiOutlineChartBar
      size={22}
      className="text-blue-600"
    />

    <h3 className="text-lg font-bold text-blue-600">
      Academic Performance
    </h3>
  </div>

  <div className="mt-6 space-y-5">

    <div>
      <p className="text-sm text-slate-500">
        Applied Informatics Engineering
      </p>
      <p className="text-3xl font-bold text-slate-900">
        3.74 / 4.00
      </p>
      <p className="text-sm text-slate-500">
        Current GPA
      </p>
    </div>

    <div className="border-t border-slate-200 pt-4">
      <p className="text-sm text-slate-500">
        Associate Degree in Informatics Engineering
      </p>
      <p className="text-2xl font-semibold text-slate-900">
        3.58 / 4.00
      </p>
    </div>

  </div>

</div>

          {/* Interests */}

         <div
  className={`overflow-hidden transition-all duration-700 ${
    showMore ? "max-h-96 opacity-100 mt-6" : "max-h-0 opacity-0"
  }`}
>
  <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-2xl">

    <div className="flex items-center gap-2">
      <HiOutlineSparkles size={22} className="text-blue-600" />

      <h3 className="text-lg font-bold text-blue-600">
        Interests
      </h3>
    </div>

    <ul className="mt-6 space-y-3 text-slate-700">
      <li>• Software Engineering</li>
      <li>• Artificial Intelligence</li>
      <li>• UI / UX Design</li>
      <li>• Data Visualization</li>
      <li>• Digital Innovation</li>
    </ul>

  </div>
</div>
        </div>

      </div>
    </section>
  );
}