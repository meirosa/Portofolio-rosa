"use client";

import { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  CalendarDays,
  FileText,
  Handshake,
  Mic2,
  Users,
  X,
} from "lucide-react";

type Activity = {
  role: string;
  title: string;
  organization: string;
  period: string;
  description: string[];
  icon: typeof Mic2;
  image?: string;
};

const activities: Activity[] = [
  {
    role: "Student Speaker",
    title: "Informatics Engineering Program Socialization",
    organization: "Politeknik Elektronika Negeri Surabaya (PENS)",
    period: "2026",
    description: [
      "Represented the Applied Informatics Engineering program during outreach activities.",
      "Shared academic experiences and introduced the study program to prospective students.",
    ],
    icon: Mic2,
    // image: "/image/activities/student-speaker.jpg",
  },

  {
    role: "Member",
    title: "Software Development Community",
    organization: "Politeknik Elektronika Negeri Surabaya (PENS)",
    period: "2022 – Present",
    description: [
      "Collaborated on software development projects and participated in technical workshops.",
      "Expanded knowledge of software engineering practices and emerging technologies.",
    ],
    icon: Users,
    // image: "/image/activities/software-community.jpg",
  },

  {
    role: "Event Division",
    title: "LKMM-TD PENS",
    organization: "Politeknik Elektronika Negeri Surabaya (PENS)",
    period: "2024",
    description: [
      "Planned and coordinated event activities and logistics.",
      "Managed schedules and participant engagement during the program.",
    ],
    icon: CalendarDays,
    // image: "/image/activities/lkmm-td.jpg",
  },

  {
    role: "Secretary",
    title: "DKR Badegan",
    organization: "Dewan Kerja Ranting Badegan",
    period: "2022 – 2023",
    description: [
      "Managed organizational administration, documentation, and official correspondence.",
      "Prepared meeting minutes, reports, and administrative documents.",
      "Coordinated communication between members and organizational leaders.",
    ],
    icon: FileText,
    // image: "/image/activities/dkr-badegan.jpg",
  },

  {
    role: "Liaison Officer",
    title: "Dynamic HIMIT PENS",
    organization: "Politeknik Elektronika Negeri Surabaya (PENS)",
    period: "—",
    description: [
      "Supported communication and coordination between participants and the organizing team.",
      "Assisted with event activities and helped ensure smooth participant engagement.",
    ],
    icon: Handshake,
    // image: "/image/activities/dynamic-himit.jpg",
  },
];

export default function Activities() {
  const [showAllActivities, setShowAllActivities] = useState(false);

  // Hanya menampilkan 2 activity di halaman utama
  const displayedActivities = activities.slice(0, 2);

  return (
    <section
      id="activities"
      className="bg-white pt-8 pb-10"
    >
      <div className="mx-auto max-w-7xl rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:p-12">

        {/* ================= HEADING ================= */}
        <div className="mb-10">
          <span className="text-sm font-semibold uppercase tracking-[3px] text-blue-600">
            Activities
          </span>

          <h2 className="mt-2 text-4xl font-bold text-slate-900">
            Activities & Leadership
          </h2>

          <div className="mt-4 h-1 w-24 rounded-full bg-blue-600" />
        </div>

        {/* ================= ACTIVITY CARDS ================= */}
        <div className="grid gap-6 md:grid-cols-2">
          {displayedActivities.map((activity) => {
            const Icon = activity.icon;

            return (
              <article
                key={`${activity.role}-${activity.title}`}
                className="overflow-hidden rounded-2xl border border-slate-200 bg-white transition duration-300 hover:-translate-y-1 hover:shadow-md"
              >
                {/* Image / Icon */}
                {activity.image ? (
                  <div className="relative h-36 w-full overflow-hidden bg-slate-100">
                    <Image
                      src={activity.image}
                      alt={activity.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                ) : (
                  <div className="flex h-20 items-center px-5">
                    <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
                      <Icon size={21} strokeWidth={1.8} />
                    </div>
                  </div>
                )}

                {/* Content */}
                <div className="px-5 pb-5">
                  <div className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                        {activity.role}
                      </p>

                      <h3 className="mt-1.5 text-lg font-bold leading-snug text-slate-900">
                        {activity.title}
                      </h3>
                    </div>

                    <span className="shrink-0 rounded-full bg-slate-100 px-3 py-1 text-[11px] font-medium text-slate-600">
                      {activity.period}
                    </span>
                  </div>

                  <p className="mt-1.5 text-sm font-medium text-slate-600">
                    {activity.organization}
                  </p>

                  <ul className="mt-3 space-y-1.5">
                    {activity.description.map((item, index) => (
                      <li
                        key={index}
                        className="flex gap-2 text-sm leading-5 text-slate-500"
                      >
                        <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </article>
            );
          })}
        </div>

        {/* ================= VIEW ALL ================= */}
        {activities.length > 2 && (
          <div className="mt-7 flex justify-center">
            <button
              type="button"
              onClick={() => setShowAllActivities(true)}
              className="group inline-flex items-center gap-2 text-sm font-semibold text-blue-700 transition hover:text-blue-900"
            >
              View All Activities

              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-1"
              />
            </button>
          </div>
        )}
      </div>

      {/* ================= MODAL ================= */}
      {showAllActivities && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
          onClick={() => setShowAllActivities(false)}
        >
          <div
            className="relative max-h-[88vh] w-full max-w-5xl overflow-y-auto rounded-2xl bg-white p-6 shadow-xl lg:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close */}
            <button
              type="button"
              onClick={() => setShowAllActivities(false)}
              className="absolute right-5 top-5 rounded-full p-2 text-slate-500 transition hover:bg-slate-100 hover:text-slate-900"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Modal Heading */}
            <div className="mb-8 pr-10">
              <span className="text-sm font-semibold uppercase tracking-[3px] text-blue-600">
                Activities
              </span>

              <h2 className="mt-2 text-3xl font-bold text-slate-900">
                All Activities & Leadership
              </h2>

              <div className="mt-4 h-1 w-20 rounded-full bg-blue-600" />
            </div>

            {/* All Activities */}
            <div className="grid gap-5 md:grid-cols-2">
              {activities.map((activity) => {
                const Icon = activity.icon;

                return (
                  <article
                    key={`${activity.role}-${activity.title}`}
                    className="overflow-hidden rounded-xl border border-slate-200 bg-white"
                  >
                    {/* Image / Icon */}
                    {activity.image ? (
                      <div className="relative h-32 w-full overflow-hidden bg-slate-100">
                        <Image
                          src={activity.image}
                          alt={activity.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    ) : (
                      <div className="flex h-20 items-center px-5">
                        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-50 text-blue-600">
                          <Icon size={20} strokeWidth={1.8} />
                        </div>
                      </div>
                    )}

                    {/* Content */}
                    <div className="px-5 pb-5">
                      <div className="flex items-start justify-between gap-3">
                        <div className="min-w-0">
                          <p className="text-xs font-semibold uppercase tracking-wider text-blue-600">
                            {activity.role}
                          </p>

                          <h3 className="mt-1 text-base font-bold leading-snug text-slate-900">
                            {activity.title}
                          </h3>
                        </div>

                        <span className="shrink-0 rounded-full bg-slate-100 px-2.5 py-1 text-[11px] text-slate-500">
                          {activity.period}
                        </span>
                      </div>

                      <p className="mt-1.5 text-sm font-medium text-slate-600">
                        {activity.organization}
                      </p>

                      <ul className="mt-3 space-y-1.5">
                        {activity.description.map((item, index) => (
                          <li
                            key={index}
                            className="flex gap-2 text-sm leading-5 text-slate-500"
                          >
                            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </article>
                );
              })}
            </div>

            {/* Close Button */}
            <div className="mt-7 flex justify-end">
              <button
                type="button"
                onClick={() => setShowAllActivities(false)}
                className="rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}