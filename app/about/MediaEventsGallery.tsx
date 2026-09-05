"use client";

import Image from "next/image";
import { useState } from "react";

const galleryTabs = [
  {
    id: "media",
    label: "Media",
    images: [
      {
        src: "/media/1.png",
        alt: "Surgical team during an orthopaedic procedure",
      },
      {
        src: "/media/2.png",
        alt: "Doctor performing joint replacement surgery",
      },
      {
        src: "/media/3.png",
        alt: "Dr. Vivek Kumar David with a patient",
      },
      {
        src: "/media/4.png",
        alt: "Dr. Vivek Kumar David at a medical event",
      },
    ],
  },
  {
    id: "radio-city",
    label: "Radio City 91.9 FM",
    images: [
      {
        src: "/about-assets/media-event.png",
        alt: "Dr. Vivek Kumar David at a media event",
      },
      {
        src: "/about-assets/media-patient.png",
        alt: "Dr. Vivek Kumar David with a patient",
      },
    ],
  },
  {
    id: "camp",
    label: "CAMP at Ispat Apartment",
    images: [
      {
        src: "/about-assets/media-patient.png",
        alt: "Dr. Vivek Kumar David during a patient interaction",
      },
      {
        src: "/about-assets/media-event.png",
        alt: "Dr. Vivek Kumar David at a community event",
      },
      {
        src: "/about-assets/media-surgery-1.png",
        alt: "Orthopaedic surgical care team",
      },
    ],
  },
  {
    id: "samarth",
    label: "Samarth Ortho Clinic",
    images: [
      {
        src: "/about-assets/media-surgery-2.png",
        alt: "Doctor performing joint replacement surgery",
      },
      {
        src: "/about-assets/media-surgery-1.png",
        alt: "Surgical team during an orthopaedic procedure",
      },
      {
        src: "/about-assets/media-patient.png",
        alt: "Dr. Vivek Kumar David with a patient",
      },
    ],
  },
] as const;

type GalleryTab = (typeof galleryTabs)[number];

export function MediaEventsGallery() {
  const [activeTab, setActiveTab] = useState<GalleryTab>(galleryTabs[0]);

  return (
    <>
      <div className="mt-8 flex flex-wrap justify-center gap-4 text-sm font-semibold">
        {galleryTabs.map((tab) => {
          const isActive = activeTab.id === tab.id;

          return (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab)}
              className={`rounded px-5 py-2 transition ${
                isActive
                  ? "bg-[#2e86d3] text-white"
                  : "border border-[#73aede] text-[#2e75b6] hover:bg-[#e2f1ff]"
              } ${tab.id === "media" ? "px-8" : ""}`}
            >
              {tab.label}
            </button>
          );
        })}
      </div>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
        {activeTab.images.map((image) => (
          <Image
            key={`${activeTab.id}-${image.src}`}
            src={image.src}
            alt={image.alt}
            width={300}
            height={200}
            className="aspect-[1.48] w-full rounded-md border border-[#b8d4e9] object-cover shadow-sm"
          />
        ))}
      </div>
    </>
  );
}
