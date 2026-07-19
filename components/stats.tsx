"use client";

import {
  HiOutlineBriefcase,
  HiOutlineAcademicCap,
  HiOutlineShieldCheck,
} from "react-icons/hi";
import { FiCode } from "react-icons/fi";

const stats = [
  {
    icon: <HiOutlineBriefcase size={24} />,
    value: "5+",
    title: "Projects Completed",
  },
  {
    icon: <FiCode size={24} />,
    value: "5+",
    title: "Technologies",
  },
  {
    icon: <HiOutlineAcademicCap size={24} />,
    value: "2+",
    title: "Research",
  },
  {
    icon: <HiOutlineShieldCheck size={24} />,
    value: "5+",
    title: "Certificates & Awards",
  },
];

export default function Stats() {
  return (
    <section className="relative z-20 -mt-10">
      <div className="mx-auto max-w-6xl px-6">
        <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-2xl">

          <div className="grid grid-cols-2 lg:grid-cols-4">

            {stats.map((item, index) => (
              <div
                key={item.title}
                className={`flex items-center gap-5 p-7 ${
                  index !== stats.length - 1
                    ? "border-r border-slate-200"
                    : ""
                }`}
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-blue-50 text-blue-600">
                  {item.icon}
                </div>

                <div>
                  <h2 className="text-4xl font-bold text-blue-600">
                    {item.value}
                  </h2>

                  <p className="mt-1 text-sm text-slate-600">
                    {item.title}
                  </p>
                </div>
              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
}