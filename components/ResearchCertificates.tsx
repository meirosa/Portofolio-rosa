"use client";

import { useState } from "react";
import Image from "next/image";
import { ArrowRight, X, ExternalLink } from "lucide-react";

type Research = {
  title: string;
  description: string;
  methods: string;
  image: string;
  link: string;
};

type Certificate = {
  title: string;
  achievement: string;
  event: string;
  organizer: string;
  year: string;
  level: string;
  image: string;
};

export default function ResearchCertificates() {
  const [showAllResearch, setShowAllResearch] = useState(false);
  const [showAllCertificates, setShowAllCertificates] = useState(false);

  // ==================================================
  // DAFTAR RESEARCH
  // 2 pertama tampil di halaman utama
  // Semua research tampil di popup View More
  // ==================================================

  const researches: Research[] = [
    {
      title: "FuzzyFlood",
      description:
        "Comparative Evaluation of Fuzzy Inference System Models for Flood Vulnerability",
      methods: "Mamdani • Sugeno • Tsukamoto • AHP",
      image: "/image/fuzzyflood.png",
      link: "https://drive.google.com/drive/folders/1DAsdQiBpH4slGnwGJRBFokEBjf2Tylhq?usp=sharing",
    },

    {
      title: "Peta Kerentanan Banjir Surabaya",
      description:
        "Flood Mapping Visualization in Surabaya City Using Fuzzy Method Based on Open Map Data",
      methods: "Fuzzy Mamdani • Open Map Data",
      image: "/image/visualbanjir.png",
      link: "https://drive.google.com/drive/folders/1BegyPTsREGiLz3goR7OEq83aGbsWhPo0?usp=sharing",
    },

    // ==================================================
    // TAMBAHKAN RESEARCH BARU DI SINI
    // Research ke-3 dan seterusnya otomatis masuk View More
    // ==================================================

    // {
    //   title: "Research Baru",
    //   description: "Deskripsi research baru",
    //   methods: "Method • Method",
    //   image: "/image/research-baru.png",
    //   link: "LINK_GOOGLE_DRIVE",
    // },
  ];

  // Hanya 2 research pertama di halaman utama
  const displayedResearch = researches.slice(0, 2);

  // Research ke-3 dan seterusnya
  const remainingResearch = researches.slice(2);

  // ==================================================
  // DAFTAR CERTIFICATES
  // 2 pertama tampil di halaman utama
  // Semua certificate tampil di popup
  // ==================================================

  const certificates: Certificate[] = [

    {
      title: "Olimpiade Matematika",
      achievement: "Medali Perak",
      event: "National Science & Social Competition 6.0",
      organizer: "CV. Divya Cahaya Prestasi",
      year: "2022",
      level: "Tingkat Nasional",
      image:
        "/image/olimpiade-matematika-medali-perak.png",
    },

    {
      title: "Olimpiade Fisika",
      achievement: "Medali Emas",
      event: "National Science & Social Competition 6.0",
      organizer: "CV. Divya Cahaya Prestasi",
      year: "2022",
      level: "Tingkat Nasional",
      image: "/image/olimpiade-fisika-medali-emas.png",
    },

  

    {
      title: "Olimpiade Bahasa Inggris",
      achievement: "Medali Perunggu",
      event: "Indonesian Science Olympiad",
      organizer: "Gantari Competition",
      year: "2022",
      level: "Tingkat Nasional",
      image:
        "/image/olimpiade-bahasa-inggris-medali-perunggu.png",
    },

    {
      title: "Olimpiade Matematika",
      achievement: "Medali Perunggu",
      event: "Indonesian Science Olympiad",
      organizer: "Gantari Competition",
      year: "2022",
      level: "Tingkat Nasional",
      image:
        "/image/olimpiade-matematika-medali-perunggu.png",
    },

        {
      title: "Top 10 Finalis Essay",
      achievement: "Top 10 Finalis",
      event: "Semarak Essai Nasional 2023",
      organizer: "Universitas Swadaya Gunung Jati",
      year: "2023",
      level: "Tingkat Nasional",
      image: "/image/finalis.jpg",
    },
  ];

  // Hanya 2 certificate pertama di halaman utama
  const displayedCertificates = certificates.slice(0, 2);

  // Digunakan untuk menentukan apakah tombol View All muncul
  const remainingCertificates = certificates.slice(2);

  return (
    <section id="research-certificates" className="py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-12 md:grid-cols-2">

          {/* ==================================================
              RESEARCH
          ================================================== */}

          <div
            id="research"
            className="md:border-r md:border-gray-200 md:pr-10"
          >
            <h2 className="mb-8 text-xl font-bold uppercase text-blue-900">
              Research
            </h2>

            {/* Research Cards */}
            <div className="grid grid-cols-2 gap-5">
              {displayedResearch.map((research) => (
                <a
                  key={research.title}
                  href={research.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  {/* Image */}
                  <div className="overflow-hidden rounded-lg border border-gray-200">
                    <Image
                      src={research.image}
                      alt={research.title}
                      width={500}
                      height={300}
                      className="aspect-video w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Title */}
                  <h3 className="mt-4 text-sm font-semibold text-gray-900 transition group-hover:text-blue-700">
                    {research.title}
                  </h3>

                  {/* Description */}
                  <p className="mt-2 text-xs leading-5 text-gray-500">
                    {research.description}
                  </p>

                  {/* Methods */}
                  <p className="mt-2 text-xs text-blue-700">
                    {research.methods}
                  </p>
                </a>
              ))}
            </div>

            {/* View More Research */}
            {remainingResearch.length > 0 && (
              <button
                onClick={() => setShowAllResearch(true)}
                className="mt-8 flex items-center gap-2 rounded-lg border border-blue-300 px-5 py-2 text-sm text-blue-700 transition hover:bg-blue-50"
              >
                View More Research
                <ArrowRight size={16} />
              </button>
            )}
          </div>

          {/* ==================================================
              CERTIFICATES
          ================================================== */}

          <div id="certificates">
            <h2 className="mb-8 text-xl font-bold uppercase text-blue-900">
              Certificates
            </h2>

            {/* Certificate Cards */}
            <div className="grid grid-cols-2 gap-5">
              {displayedCertificates.map((certificate) => (
                <div
                  key={`${certificate.title}-${certificate.achievement}-${certificate.year}`}
                  className="group"
                >
                  {/* Certificate Image */}
                  <div className="overflow-hidden rounded-lg border border-gray-200 bg-gray-50">
                    <Image
                      src={certificate.image}
                      alt={`${certificate.title} - ${certificate.achievement}`}
                      width={500}
                      height={320}
                      className="h-auto w-full object-contain transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Certificate Info */}
                  <h3 className="mt-4 text-sm font-semibold text-gray-900">
                    {certificate.title}
                  </h3>

                  <p className="mt-1 text-xs font-medium text-blue-700">
                    {certificate.achievement}
                  </p>

                  <p className="mt-2 text-xs leading-5 text-gray-500">
                    {certificate.event}
                  </p>

                  <p className="text-xs leading-5 text-gray-500">
                    {certificate.organizer} • {certificate.year}
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    {certificate.level}
                  </p>
                </div>
              ))}
            </div>

            {/* View All Certificates */}
            {remainingCertificates.length > 0 && (
              <button
                onClick={() => setShowAllCertificates(true)}
                className="mt-8 flex items-center gap-2 rounded-lg border border-blue-300 px-5 py-2 text-sm text-blue-700 transition hover:bg-blue-50"
              >
                View All Certificates
                <ArrowRight size={16} />
              </button>
            )}
          </div>
        </div>
      </div>

      {/* ==================================================
          VIEW MORE RESEARCH POPUP
      ================================================== */}

      {showAllResearch && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5 backdrop-blur-sm"
          onClick={() => setShowAllResearch(false)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowAllResearch(false)}
              className="absolute right-5 top-5 rounded-full bg-gray-100 p-2 text-gray-700 transition hover:bg-gray-200"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Popup Title */}
            <h2 className="mb-8 pr-10 text-2xl font-bold text-blue-900">
              All Research
            </h2>

            {/* All Research */}
            <div className="grid gap-6 sm:grid-cols-2">
              {researches.map((research) => (
                <a
                  key={research.title}
                  href={research.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  {/* Image */}
                  <div className="overflow-hidden rounded-xl border border-gray-200">
                    <Image
                      src={research.image}
                      alt={research.title}
                      width={500}
                      height={300}
                      className="aspect-video w-full object-cover transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Title + External Link */}
                  <div className="mt-4 flex items-center justify-between gap-3">
                    <h3 className="font-semibold text-gray-900 transition group-hover:text-blue-700">
                      {research.title}
                    </h3>

                    <ExternalLink
                      size={16}
                      className="shrink-0 text-gray-400 transition group-hover:text-blue-700"
                    />
                  </div>

                  {/* Description */}
                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {research.description}
                  </p>

                  {/* Methods */}
                  <p className="mt-2 text-xs text-blue-700">
                    {research.methods}
                  </p>
                </a>
              ))}
            </div>

            {/* Close */}
            <button
              onClick={() => setShowAllResearch(false)}
              className="mt-8 rounded-lg bg-blue-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-800"
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* ==================================================
          ALL CERTIFICATES POPUP
      ================================================== */}

      {showAllCertificates && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 p-5 backdrop-blur-sm"
          onClick={() => setShowAllCertificates(false)}
        >
          <div
            className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto rounded-2xl bg-white p-8 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setShowAllCertificates(false)}
              className="absolute right-5 top-5 rounded-full bg-gray-100 p-2 text-gray-700 transition hover:bg-gray-200"
              aria-label="Close"
            >
              <X size={20} />
            </button>

            {/* Popup Title */}
            <h2 className="mb-8 pr-10 text-2xl font-bold text-blue-900">
              All Certificates
            </h2>

            {/* All 5 Certificates */}
            <div className="grid gap-6 sm:grid-cols-2">
              {certificates.map((certificate) => (
                <div
                  key={`${certificate.title}-${certificate.achievement}-${certificate.year}`}
                  className="group"
                >
                  {/* Certificate Image */}
                  <div className="overflow-hidden rounded-xl border border-gray-200 bg-gray-50">
                    <Image
                      src={certificate.image}
                      alt={`${certificate.title} - ${certificate.achievement}`}
                      width={500}
                      height={320}
                      className="h-auto w-full object-contain transition duration-300 group-hover:scale-105"
                    />
                  </div>

                  {/* Certificate Info */}
                  <h3 className="mt-4 font-semibold text-gray-900">
                    {certificate.title}
                  </h3>

                  <p className="mt-1 text-sm font-medium text-blue-700">
                    {certificate.achievement}
                  </p>

                  <p className="mt-2 text-sm leading-6 text-gray-500">
                    {certificate.event}
                  </p>

                  <p className="text-sm leading-6 text-gray-500">
                    {certificate.organizer} • {certificate.year}
                  </p>

                  <p className="mt-1 text-xs text-gray-500">
                    {certificate.level}
                  </p>
                </div>
              ))}
            </div>

            {/* Close */}
            <button
              onClick={() => setShowAllCertificates(false)}
              className="mt-8 rounded-lg bg-blue-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-blue-800"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
