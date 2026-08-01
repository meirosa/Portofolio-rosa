"use client";

import Image from "next/image";
import { IconType } from "react-icons";
import {
  FaGraduationCap,
  FaBriefcase,
  FaLaptopCode,
  FaRocket,
} from "react-icons/fa";

type TimelineItem = {
  year: string;
  title: string;
  description: string;
  icon: IconType;
};

const timeline: TimelineItem[] = [
  {
    year: "2022",
    title: "Associate Degree Student",
    description:
      "Started my academic journey in Informatics Engineering, building a strong foundation in programming, databases, and software development.",
    icon: FaGraduationCap,
  },
  {
    year: "2024",
    title: "QA, Product Owner & Product Knowledge Intern",
    description:
      "Completed an internship at PT. Inovasi Teknologi Solusindo (Trustmedis), contributing to product management, quality assurance, sprint planning, software testing, and technical documentation.",
    icon: FaBriefcase,
  },
  {
    year: "2026",
    title: "Final Year Project",
    description:
      "Developed FuzzyFlood, a web-based GIS application for evaluating flood vulnerability using Fuzzy Inference System models.",
    icon: FaLaptopCode,
  },
  {
    year: "Present",
    title: "Open to Work",
    description:
      "Actively seeking opportunities to contribute, grow professionally, and create impactful digital solutions in the technology industry.",
    icon: FaRocket,
  },
];

export default function Experience() {
  return (
<section
  id="experience"
  className="bg-white pt-8 pb-10"
    >
      <div className="mx-auto max-w-7xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-12">

        {/* Heading */}
        <div className="mb-12">
          <span className="text-sm font-semibold uppercase tracking-[3px] text-blue-600">
            Journey
          </span>

          <h2 className="mt-2 text-4xl font-bold text-slate-900">
            Experience Timeline
          </h2>

          <div className="mt-4 h-1 w-24 rounded-full bg-blue-600" />
        </div>

        <div className="grid items-start gap-14 lg:grid-cols-[1fr_320px]">

          {/* LEFT */}
          <div>

            {/* Timeline */}
            <div className="relative">

              {/* Line */}
              <div className="absolute top-5 left-0 right-0 h-[3px] rounded-full bg-slate-200" />

              <div className="relative grid grid-cols-4 gap-6">

                {timeline.map((item) => {
                  const Icon = item.icon;

                  return (
                    <div key={item.year}>

                      {/* Circle */}
                      <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border-4 border-blue-100 bg-white shadow">
                        <Icon
                          size={18}
                          className="text-blue-600"
                        />
                      </div>

                      {/* Content */}
                      <div className="mt-7">

                        <p className="font-bold text-blue-600">
                          {item.year}
                        </p>

                        <h3 className="mt-2 font-semibold text-slate-900">
                          {item.title}
                        </h3>

                        <p className="mt-3 text-sm leading-7 text-slate-600">
                          {item.description}
                        </p>

                      </div>

                    </div>
                  );
                })}
              </div>
            </div>

          </div>

          {/* RIGHT */}
          <div className="hidden lg:flex justify-center">
            <Image
              src="/image/ilustrasi.png"
              alt="Experience Illustration"
              width={320}
              height={320}
              className="object-contain"
            />
          </div>

        </div>

      </div>
    </section>
  );
}