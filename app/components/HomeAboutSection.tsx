"use client";

import { useState } from "react";

export function HomeAboutSection() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="about" className="mx-auto max-w-6xl px-5 py-16 md:py-20">
      <h2 className="text-4xl font-bold text-[#2a84d3]">
        About Dr. Vivek Kumar David
      </h2>
      <p className="mt-1 text-medium font-lg text-[#2a84d3]">
        Robotic Joint Replacement Surgeon | Orthopaedic Surgeon | Arthroplasty
        Specialist | Sports Injury Expert | Trauma Care Specialist
      </p>
      <div className="mt-8 space-y-8 text-[17px] font-lg leading-9 tracking-wide text-[#34465a]">
        <p>
          Dr. Vivek Kumar David is a highly skilled Orthopaedic and Robotic
          Joint Replacement Surgeon with over 10 years of experience in
          delivering advanced bone and joint care. Having successfully performed
          5,000+ joint replacement and orthopaedic surgeries, he is dedicated to
          helping patients regain mobility, relieve pain, and improve their
          quality of life through evidence-based and patient-centric treatment.
        </p>
        <div className={`${isExpanded ? "block" : "hidden"} space-y-8 md:block`}>
          <p>
            He completed his MBBS followed by MS in Orthopaedics from Christian
            Medical College (CMC), Ludhiana, one of India&apos;s premier medical
            institutions. Further strengthening his expertise, he pursued
            advanced Fellowship training in Arthroplasty (Joint Replacement
            Surgery) and continues to stay at the forefront of modern
            orthopaedic techniques, including robotic-assisted joint replacement
            and minimally invasive procedures.
          </p>
          <div>
            <h3 className="font-bold">Professional Excellence & Achievements</h3>
            <p>
              Dr. Vivek Kumar David has received recognition for his dedication
              to orthopaedics and clinical excellence. His notable achievements
              include:
            </p>
            <ul className="mt-2 list-disc space-y-1 pl-6">
              <li>Times of India Health Icon Award - 2024</li>
              <li>AO Trauma (Switzerland) Certification</li>
              <li>Fellowship in Arthroplasty</li>
              <li>Best Outgoing Postgraduate (CMC) Award</li>
            </ul>
          </div>
          <p>
            These accomplishments reflect his commitment to continuous learning,
            surgical precision, and excellence in patient care.
          </p>
        </div>
      </div>
      {!isExpanded ? (
        <button
          type="button"
          onClick={() => setIsExpanded(true)}
          className="inline-flex items-center text-sm font-semibold text-[#2a84d3] transition hover:bg-[#e9f5ff] md:hidden"
        >
          Read more...
        </button>
      ) : null}
    </section>
  );
}
