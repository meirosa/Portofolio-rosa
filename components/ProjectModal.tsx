"use client";

import Image from "next/image";
import { X, ExternalLink, Star } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { SiGoogledocs, SiFigma } from "react-icons/si";
import type { Project } from "@/data/projects";

type ProjectModalProps = {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
};

export default function ProjectModal({
  project,
  isOpen,
  onClose,
}: ProjectModalProps) {
  if (!isOpen || !project) return null;

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5 backdrop-blur-sm"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative max-h-[90vh] w-full max-w-5xl overflow-y-auto rounded-3xl bg-white shadow-2xl"
      >
        {/* Close */}
        <button
          onClick={onClose}
          className="sticky right-5 top-5 float-right z-20 rounded-full bg-white p-2 shadow-lg transition hover:bg-slate-100"
        >
          <X size={22} />
        </button>

        {/* Hero Image */}
        <div className="relative aspect-video w-full">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
          />

          {project.featured && (
            <span className="absolute left-5 top-5 flex items-center gap-2 rounded-full bg-yellow-400 px-4 py-2 text-sm font-semibold text-white shadow">
              <Star size={14} fill="currentColor" />
              Featured
            </span>
          )}
        </div>

        <div className="p-8">
          {/* Title */}
          <div className="mb-8">
            <h2 className="text-4xl font-bold text-slate-900">
              {project.title}
            </h2>

            <span className="mt-3 inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-medium text-blue-700">
              {project.type}
            </span>
          </div>

          {/* Description */}
          <section className="mb-10">
            <h3 className="mb-3 text-xl font-bold text-slate-800">
              📝 Description
            </h3>

            <p className="leading-8 text-slate-600">
              {project.description}
            </p>
          </section>

          {/* Objective */}
          {project.objective && (
            <section className="mb-10">
              <h3 className="mb-3 text-xl font-bold text-slate-800">
                🎯 Objective
              </h3>

              <p className="leading-8 text-slate-600">
                {project.objective}
              </p>
            </section>
          )}

          {/* Features */}
          {project.features && project.features.length > 0 && (
            <section className="mb-10">
              <h3 className="mb-3 text-xl font-bold text-slate-800">
                ✨ Key Features
              </h3>

              <ul className="list-disc space-y-2 pl-6 text-slate-600">
                {project.features.map((feature) => (
                  <li key={feature}>{feature}</li>
                ))}
              </ul>
            </section>
          )}

          {/* Tech Stack */}
          <section className="mb-10">
            <h3 className="mb-4 text-xl font-bold text-slate-800">
              💻 Tech Stack
            </h3>

            <div className="flex flex-wrap gap-3">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-xl bg-slate-100 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-blue-100 hover:text-blue-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Project Information */}
          {(project.year || project.role || project.type) && (
            <section className="mb-10">
              <h3 className="mb-4 text-xl font-bold text-slate-800">
                📋 Project Information
              </h3>

              <div className="grid gap-5 md:grid-cols-3">
                {project.year && (
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-sm text-slate-500">Year</p>
                    <p className="mt-2 text-lg font-semibold text-slate-800">
                      {project.year}
                    </p>
                  </div>
                )}

                {project.role && (
                  <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                    <p className="text-sm text-slate-500">Role</p>
                    <p className="mt-2 text-lg font-semibold text-slate-800">
                      {project.role}
                    </p>
                  </div>
                )}

                <div className="rounded-2xl border border-slate-200 bg-slate-50 p-5">
                  <p className="text-sm text-slate-500">Category</p>
                  <p className="mt-2 text-lg font-semibold text-slate-800">
                    {project.type}
                  </p>
                </div>
              </div>
            </section>
          )}

          {/* Project Links */}
          {(project.github ||
            project.demo ||
            project.docs ||
            project.uiux) && (
            <section className="mb-10">
              <h3 className="mb-4 text-xl font-bold text-slate-800">
                🔗 Project Links
              </h3>

              <div className="flex flex-wrap gap-4">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl bg-slate-900 px-6 py-3 font-medium text-white transition hover:bg-slate-800"
                  >
                    <FaGithub />
                    GitHub Repository
                  </a>
                )}

                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl bg-blue-600 px-6 py-3 font-medium text-white transition hover:bg-blue-700"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                )}

                {project.docs && (
                  <a
                    href={project.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl bg-[#1A73E8] px-6 py-3 font-medium text-white transition hover:bg-[#1765CC]"
                  >
                    <SiGoogledocs size={18} />
                    Documentation
                  </a>
                )}

                {project.uiux && (
                  <a
                    href={project.uiux}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 rounded-xl bg-[#F24E1E] px-6 py-3 font-medium text-white transition hover:bg-[#D84315]"
                  >
                    <SiFigma size={18} />
                    Figma Design
                  </a>
                )}
              </div>
            </section>
          )}

          {/* Gallery */}
          {project.gallery && project.gallery.length > 0 && (
            <section className="mb-5">
              <h3 className="mb-5 text-xl font-bold text-slate-800">
                🖼 Project Gallery
              </h3>

              <div className="grid gap-5 md:grid-cols-2">
                {project.gallery.map((image, index) => (
                  <div
                    key={index}
                    className="relative aspect-video overflow-hidden rounded-2xl border border-slate-200"
                  >
                    <Image
                      src={image}
                      alt={`${project.title} ${index + 1}`}
                      fill
                      className="object-cover transition duration-300 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </section>
          )}
        </div>
      </div>
    </div>
  );
}