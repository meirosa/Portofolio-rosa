"use client";

import { useState } from "react";
import { projects, type Project } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import ProjectModal from "@/components/ProjectModal";

const filters = [
  {
    label: "All",
    value: "all",
  },
  {
    label: "Web Projects",
    value: "web",
  },
  {
    label: "Android Apps",
    value: "mobile",
  },
  {
    label: "Technical Writing",
    value: "documentation",
  },
  {
    label: "QA & Testing",
    value: "qa",
  },
];

export default function Projects() {
  const [active, setActive] = useState("all");
  const [showAll, setShowAll] = useState(false);

  // Modal
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const filteredProjects =
    active === "all"
      ? projects
      : projects.filter((project) => project.category === active);

  const displayedProjects = showAll
    ? filteredProjects
    : filteredProjects.slice(0, 4);

  const handleOpenModal = (project: Project) => {
    setSelectedProject(project);
    setIsOpen(true);
  };

  const handleCloseModal = () => {
    setIsOpen(false);
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="mx-auto max-w-7xl px-6 py-20"
    >
      {/* Header */}
      <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
        <h2 className="text-3xl font-bold text-slate-900">
          ALL PROJECTS
        </h2>

        {/* Filter */}
        <div className="flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter.value}
              onClick={() => {
                setActive(filter.value);
                setShowAll(false);
              }}
              className={`rounded-full px-4 py-2 text-sm font-medium transition ${
                active === filter.value
                  ? "bg-blue-600 text-white shadow-lg"
                  : "border border-slate-200 bg-white hover:bg-slate-100"
              }`}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </div>

      {/* Cards */}
      <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 lg:grid-cols-4">
        {displayedProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => handleOpenModal(project)}
          />
        ))}
      </div>

      {/* View More */}
      {filteredProjects.length > 4 && (
        <div className="mt-14 flex justify-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="rounded-xl border border-blue-600 px-8 py-3 font-semibold text-blue-600 transition hover:bg-blue-600 hover:text-white"
          >
            {showAll ? "View Less ↑" : "View More →"}
          </button>
        </div>
      )}

      {/* Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={isOpen}
        onClose={handleCloseModal}
      />
    </section>
  );
}