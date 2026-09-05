import Image from "next/image";
import type React from "react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteNavbar } from "../components/SiteNavbar";
import { MediaEventsGallery } from "./MediaEventsGallery";
import { PatientReviewsCarousel } from "./PatientReviewsCarousel";

const stats = [
  { label: "Years Experience", value: "10+" },
  { label: "Successful Surgeries", value: "500+" },
  { label: "Knee Replacement", value: "Robotic" },
];

const workExperience = [
  {
    role: "Consultant Joint Replacement Surgeon",
    organization: "PARAS HEC HOSPITAL, RANCHI.",
    dates: "Jun 2024 - Present",
    duration: "2 yrs 2 mos",
    location: "Ranchi, Jharkhand, India",
  },
  {
    role: "Senior Consultant & HOD Joint Replacement Surgery",
    organization: "SHALBY HOSPITAL",
    dates: "May 2023 - Sep 2024",
    duration: "1 yr 5 mos",
    location: "Ranchi, Jharkhand, India - On-site",
  },
  {
    role: "Consultant Joint Replacement & Robotic Surgeon",
    organization: "BELLE VUE",
    dates: "May 2022 - May 2023",
    duration: "1 yr 1 mo",
    location: "Kolkata, West Bengal, India",
  },
  {
    role: "Specialist Joint Replacement & Orthopedics",
    organization: "TATA MAIN HOSPITAL",
    dates: "Aug 2019 - Apr 2022",
    duration: "2 yrs 9 mos",
    location: "Jamshedpur",
  },
  {
    role: "Consultant Orthopedics and Joint Replacement Surgery",
    organization: "FORTIS HOSPITAL",
    dates: "Sep 2018 - Aug 2019",
    duration: "1 yr",
    location: "Kangra",
  },
  {
    role: "Assistant Professor",
    organization: "CHRISTIAN MEDICAL COLLEGE (CMC).",
    dates: "2017 - Aug 2018",
    duration: "1 yr 8 mos",
    location: "Ludhiana Area, India",
  },
];

const publications = [
  "Mittal S, David VK, Sharma V. Incidence of Implant Removal in Surgically Treated Patella Fractures. Cureus. 2022 May 26;14(5).",
  "David VK, Prakash A, Mittal S, Salter-Harris Type 2 Injury of the Proximal Tibial Epiphysis in a 15-year-old Athlete: A Rare Case Report.",
  "Mittal S, Prakash A, David VK, Sarkar S. Management of Adolescent Three-Part Lateral Triplane Ankle Fracture with Ipsilateral Shaft of Tibia Fracture.",
];

function SmallIcon({ children }: { children: React.ReactNode }) {
  return (
    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-sm bg-[#e5f0fb] text-xs font-bold text-[#244f7f]">
      {children}
    </span>
  );
}

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-[#eef6fd] text-[#28394f]">
      <SiteNavbar active="about" />

      <section className="relative min-h-[620px] overflow-hidden text-white md:min-h-[570px]">
        <Image
          src="/about.png"
          alt=""
          width={1440}
          height={760}
          priority
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="relative z-10 mx-auto max-w-6xl px-5 pt-8 md:pt-10">
          <p className="text-sm font-bold uppercase tracking-wide text-white md:text-base">
            Home / About
          </p>
        </div>
        <div className="relative z-10 mx-auto grid max-w-6xl items-end gap-8 px-5 pt-5 md:min-h-[520px] md:grid-cols-[0.9fr_1.35fr] md:gap-12 md:pt-0">
          <Image
            src="/david.png"
            alt="Dr. Vivek Kumar David"
            width={447}
            height={823}
            priority
            className="order-2 mx-auto max-h-[430px] w-auto self-end object-contain md:order-1 md:h-[520px] md:max-h-none"
          />
          <div className="order-1 pb-0 md:order-2 md:pb-32">
            <p className="max-w-2xl text-base font-medium italic leading-6 text-white/95 md:text-lg md:leading-7">
              &quot;My goal is simple - to help my patients move better, live
              better, and enjoy a pain-free life.&quot;
            </p>
            <h1 className="mt-12 text-4xl font-bold tracking-tight md:mt-16 md:text-5xl">
              Dr. Vivek Kumar David
            </h1>
            <p className="mt-5 text-base font-semibold text-white/95 md:text-xl">
              Consultant Robotic Joint Replacement & Orthopaedic Surgeon
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-12 px-5 py-16 md:grid-cols-[1.1fr_0.9fr] md:py-20">
        <div className="self-center">
          <h2 className="text-4xl font-bold tracking-tight text-[#29394f]">
            Dr. Vivek Kumar David
          </h2>
          <p className="mt-5 text-base font-semibold text-[#52687f]">
            MBBS, MS Ortho (CMC)
          </p>
          <p className="mt-5 inline-flex rounded bg-[#2c85cf] px-4 py-2 text-sm font-semibold text-white">
            Sr. Consultant and HOD Dept. of Joint Replacement & Orthopaedics
          </p>
          <p className="mt-8 text-sm italic text-[#7c8b9a]">
            Best Joint Pain Doctor | Best Arthritis Doctor | Best Orthopedic
          </p>
          <div className="mt-12 h-px bg-[#bcd6ec]" />
          <div className="mt-12 grid grid-cols-3 divide-x divide-[#c5dced]">
            {stats.map((stat) => (
              <div key={stat.label} className="px-5 first:pl-0">
                <div className="mb-3 h-4 w-4 rounded-full border-2 border-[#244f7f]" />
                <p className="text-sm font-bold text-[#344960]">
                  {stat.value}
                </p>
                <p className="mt-1 text-xs font-semibold leading-4 text-[#63788d]">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="overflow-hidden rounded-md border border-[#9cc4e4] bg-white shadow-sm">
          <Image
            src="/smile.png"
            alt="Dr. Vivek Kumar David seated at his clinic desk"
            width={1940}
            height={2400}
            className="aspect-[4/5] h-full w-full object-cover"
          />
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-14">
        <h2 className="text-4xl font-bold tracking-tight text-[#29394f]">
          Work Experience
        </h2>
        <div className="mt-6 divide-y divide-[#c8dfef]">
          {workExperience.map((job) => (
            <article
              key={`${job.role}-${job.organization}`}
              className="grid gap-4 py-5 sm:grid-cols-[44px_1fr]"
            >
              <SmallIcon>Dr</SmallIcon>
              <div>
                <h3 className="text-lg font-bold text-[#34465c]">
                  {job.role}
                </h3>
                <p className="mt-1 text-sm font-bold uppercase tracking-wide text-[#52687f]">
                  {job.organization}
                </p>
                <p className="mt-3 text-sm font-medium text-[#5f7488]">
                  {job.dates} - {job.duration}
                </p>
                <p className="mt-1 text-sm text-[#5f7488]">{job.location}</p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-5 pb-16 md:grid-cols-2">
        <article className="rounded-md border border-[#8dbfe4] bg-[#e7f2fc] p-5">
          <h2 className="text-2xl font-bold text-[#2c3d52]">
            Publications and Presentations
          </h2>
          <ul className="mt-4 list-disc space-y-3 pl-5 text-sm font-medium leading-5 text-[#33475e]">
            {publications.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </article>
        <article className="rounded-md border border-[#8dbfe4] bg-[#e7f2fc] p-5">
          <h2 className="text-2xl font-bold text-[#2c3d52]">
            Certifications and Affiliations
          </h2>
          <ul className="mt-4 list-disc pl-5 text-sm font-medium leading-5 text-[#33475e]">
            <li>Certificate from Harvard Medical School (Knee & Hips)</li>
          </ul>
        </article>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 text-center">
        <h2 className="text-4xl font-bold tracking-tight text-[#29394f]">
          Media & Events
        </h2>
        <MediaEventsGallery />
      </section>

      <section className="mx-auto max-w-6xl border-t border-[#c6ddeb] px-5 py-16 text-center">
        <h2 className="text-3xl font-bold tracking-tight text-[#1f2d3d]">
          Our Patient Reviews
        </h2>
        <p className="mx-auto mt-3 max-w-4xl text-sm font-medium text-[#687c90]">
          Hear from patients who regained mobility, comfort, and independence
          through personalized orthopaedic care and advanced treatment
          solutions.
        </p>
        <PatientReviewsCarousel />
      </section>

      <SiteFooter />
    </main>
  );
}
