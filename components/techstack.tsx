"use client";

import { useState } from "react";
import { IconType } from "react-icons";

import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaFigma,
  FaPython,
  FaDatabase,
  FaMapMarkedAlt,
  FaMicrosoft,
  FaCode,
} from "react-icons/fa";

import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiLaravel,
  SiFastapi,
  SiMysql,
  SiSupabase,
  SiPostgresql,
  SiPostman,
  SiQgis,
  SiOpencv,
  SiScikitlearn,
  SiNumpy,
  SiCanvas,
  SiNotion,
  SiJira,
} from "react-icons/si";

type TechItem = {
  name: string;
  icon: IconType;
  color: string;
};

const frontend: TechItem[] = [
  { name: "HTML", icon: FaHtml5, color: "#E34F26" },
  { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
  { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
  { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
  { name: "React", icon: FaReact, color: "#61DAFB" },
  { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
  { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
];

const backend: TechItem[] = [
  { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
  { name: "FastAPI", icon: SiFastapi, color: "#009688" },
  { name: "Node.js", icon: FaNodeJs, color: "#339933" },
  { name: "Python", icon: FaPython, color: "#3776AB" },
];

const database: TechItem[] = [
  { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
  { name: "MySQL", icon: SiMysql, color: "#4479A1" },
  { name: "Supabase", icon: SiSupabase, color: "#3ECF8E" },
];

const ai: TechItem[] = [
  { name: "YOLOv8", icon: FaPython, color: "#3776AB" },
  { name: "OpenCV", icon: SiOpencv, color: "#5C3EE8" },
  { name: "NumPy", icon: SiNumpy, color: "#4D77CF" },
  { name: "Scikit-Learn", icon: SiScikitlearn, color: "#F7931E" },
  { name: "Scikit-Fuzzy", icon: FaPython, color: "#3776AB" },
];

const gis: TechItem[] = [
  { name: "QGIS", icon: SiQgis, color: "#589632" },
  { name: "Leaflet", icon: FaMapMarkedAlt, color: "#199900" },
  { name: "GeoJSON", icon: FaMapMarkedAlt, color: "#4CAF50" },
];

const visualization: TechItem[] = [
  { name: "Metabase", icon: FaDatabase, color: "#509EE3" },
];

const design: TechItem[] = [
  { name: "Figma", icon: FaFigma, color: "#A259FF" },
  { name: "Canva", icon: SiCanvas, color: "#00C4CC" },
];

const tools: TechItem[] = [
  { name: "Git", icon: FaGitAlt, color: "#F05032" },
  { name: "GitHub", icon: FaGithub, color: "#181717" },
  { name: "Postman", icon: SiPostman, color: "#FF6C37" },
  { name: "Notion", icon: SiNotion, color: "#000000" },
  { name: "Jira", icon: SiJira, color: "#0052CC" },
  { name: "VS Code", icon: FaCode, color: "#007ACC" },
];

const productivity: TechItem[] = [
  { name: "Word", icon: FaMicrosoft, color: "#185ABD" },
  { name: "Excel", icon: FaMicrosoft, color: "#107C41" },
  { name: "PowerPoint", icon: FaMicrosoft, color: "#D24726" },
];

function TechGroup({
  title,
  items,
}: {
  title: string;
  items: TechItem[];
}) {
  return (
    <div>
      <h3 className="mb-5 text-sm font-semibold uppercase tracking-wider text-slate-500">
        {title}
      </h3>

      <div className="flex flex-wrap gap-6">
        {items.map((item) => {
          const Icon = item.icon;

          return (
            <div
              key={item.name}
              className="flex w-20 flex-col items-center gap-2 rounded-xl p-3 transition duration-300 hover:-translate-y-1 hover:bg-slate-50"
            >
              <Icon size={36} color={item.color} />

              <span className="text-center text-xs text-slate-600">
                {item.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function TechStack() {
  const [showAll, setShowAll] = useState(false);

  return (
    <section id="tech-stack" className="bg-white pt-8 pb-10">
      <div className="mx-auto max-w-7xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-10">
        <div className="mb-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-3xl font-bold text-slate-900">
            TECH STACK
          </h2>

          <button
            onClick={() => setShowAll(!showAll)}
            className="rounded-xl border border-blue-600 px-5 py-2 text-sm font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
          >
            {showAll ? "Show Less" : "View All Technologies"}
          </button>
        </div>

        {/* Selalu tampil */}
        <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-3">
          <TechGroup title="Frontend" items={frontend} />
          <TechGroup title="Backend" items={backend} />
          <TechGroup title="Database & Cloud" items={database} />
        </div>

        {/* Expand di bawah, bukan pindah halaman */}
        <div
          className={`overflow-hidden transition-all duration-700 ease-in-out ${
            showAll ? "mt-12 max-h-[3000px] opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="grid gap-12 md:grid-cols-2 xl:grid-cols-3">
            <TechGroup title="Artificial Intelligence" items={ai} />
            <TechGroup title="GIS & Mapping" items={gis} />
            <TechGroup title="Data Visualization" items={visualization} />
            <TechGroup title="Design" items={design} />
            <TechGroup title="Developer Tools" items={tools} />
            <TechGroup title="Productivity" items={productivity} />
          </div>
        </div>
      </div>
    </section>
  );
}