"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectCardProps = {
  project: Project;
  onClick: () => void;
};

export default function ProjectCard({
  project,
  onClick,
}: ProjectCardProps) {
  return (
    <div
      onClick={onClick}
      className="
        group
        relative
        cursor-pointer
        overflow-hidden
        rounded-2xl
        border
        border-slate-200
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-2
        hover:border-blue-500
        hover:shadow-2xl
      "
    >
      {/* Image */}
      <div className="relative h-52 overflow-hidden">
        <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />

        {/* Overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 transition duration-300 group-hover:opacity-100">
          <span className="rounded-full bg-white px-5 py-2 text-sm font-semibold text-slate-800 shadow-lg">
            View Details
          </span>
        </div>

        {/* Featured */}
        {project.featured && (
          <span className="absolute left-3 top-3 flex items-center gap-1 rounded-full bg-yellow-400 px-3 py-1 text-xs font-semibold text-white shadow">
            <Star size={12} fill="currentColor" />
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div className="flex h-[260px] flex-col p-5">
        <h3 className="text-xl font-bold text-slate-800 transition group-hover:text-blue-600">
          {project.title}
        </h3>

        <span className="mt-2 inline-block rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600">
          {project.type}
        </span>

        <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-500">
          {project.description}
        </p>

        {/* Tech Stack */}
        <div className="mt-5 flex flex-wrap gap-2">
          {project.tech.slice(0, 4).map((tech) => (
            <span
              key={tech}
              className="rounded-lg bg-slate-100 px-2.5 py-1 text-xs text-slate-600"
            >
              {tech}
            </span>
          ))}

          {project.tech.length > 4 && (
            <span className="rounded-lg bg-blue-50 px-2.5 py-1 text-xs text-blue-600">
              +{project.tech.length - 4}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}