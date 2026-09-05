import Image from "next/image";
import { SiteFooter } from "../components/SiteFooter";
import { SiteNavbar } from "../components/SiteNavbar";

const appointments = [
  {
    name: "Samarth Joint & Arthritis Clinic",
    image: "/contact-1.png",
    address:
      "Shop no 3, Arctic Mall, Bariatu Rd, opposite Old Army School, Morabadi, Ranchi, Jharkhand - 834008",
    time: "5:00 PM to 7:00 PM",
    maps: "https://www.google.com/maps/search/?api=1&query=Samarth%20Joint%20and%20Arthritis%20Clinic%20Ranchi",
  },
  {
    name: "Paras HEC Hospital",
    image: "/contact-2.png",
    address:
      "Near Prabhat Tara School, Khataal, Dhurwa, Ranchi, Jharkhand 834004",
    time: "10:00 AM to 4:00 PM",
    maps: "https://www.google.com/maps/search/?api=1&query=Paras%20HEC%20Hospital%20Ranchi",
  },
];


function PhoneIcon() {
  return (
    <span className="relative h-5 w-5" aria-hidden="true">
      <span className="absolute left-1 top-0 h-4 w-2 rotate-[-28deg] rounded-b-full rounded-t-full border-2 border-white" />
      <span className="absolute bottom-0 right-0 h-2 w-2 rounded-full border-2 border-white" />
    </span>
  );
}

function PinIcon() {
  return (
    <span className="relative mt-1 h-6 w-6 shrink-0" aria-hidden="true">
      <span className="absolute left-1/2 top-0 h-5 w-5 -translate-x-1/2 rounded-full border-2 border-[#2a84d3]" />
      <span className="absolute left-1/2 top-1.5 h-2 w-2 -translate-x-1/2 rounded-full border border-[#2a84d3]" />
      <span className="absolute bottom-0 left-1/2 h-2 w-2 -translate-x-1/2 rotate-45 border-b-2 border-r-2 border-[#2a84d3]" />
    </span>
  );
}

function ClockIcon() {
  return (
    <span
      className="relative mt-0.5 h-6 w-6 shrink-0 rounded-full border-2 border-[#2a84d3]"
      aria-hidden="true"
    >
      <span className="absolute left-1/2 top-1/2 h-2 w-0.5 -translate-x-1/2 -translate-y-full bg-[#2a84d3]" />
      <span className="absolute left-1/2 top-1/2 h-0.5 w-2 -translate-y-1/2 bg-[#2a84d3]" />
    </span>
  );
}

function AppointmentCard({
  name,
  image,
  address,
  time,
  maps,
}: {
  name: string;
  image: string;
  address: string;
  time: string;
  maps: string;
}) {
  return (
    <article>
      <h2 className="text-2xl font-bold text-[#2a84d3]">{name}</h2>
      <Image
        src={image}
        alt={name}
        width={1260}
        height={850}
        className="mt-4 aspect-[1.7] w-full rounded-md object-cover"
      />
      <div className="mt-5 space-y-3 text-lg font-medium leading-6 text-[#666]">
        <p className="flex gap-4">
          <PinIcon />
          <span>{address}</span>
        </p>
        <p className="flex items-center gap-4">
          <ClockIcon />
          <span>Time : {time}</span>
        </p>
      </div>
      <a
        href={maps}
        target="_blank"
        rel="noreferrer"
        className="mt-4 inline-flex h-10 items-center rounded border border-[#2a84d3] px-4 text-lg font-medium text-[#2a84d3] transition hover:bg-[#e2f1ff]"
      >
        View on Google Maps
      </a>
    </article>
  );
}

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#eef6fd] text-[#26384d]">
      <SiteNavbar active="contact" />

      <section className="relative min-h-[530px] overflow-hidden text-white">
        <Image
          src="/contact.png"
          alt=""
          width={1440}
          height={543}
          priority
          className="absolute inset-0 h-full w-full object-cover"
        />
        {/* <Image
          src="/about-assets/doctor-desk.png"
          alt="Dr. Vivek Kumar David seated at his clinic desk"
          width={1940}
          height={2400}
          priority
          className="absolute bottom-0 right-[8%] hidden max-h-[480px] w-auto object-contain md:block"
        /> */}
        <div className="relative mx-auto flex min-h-[530px] max-w-6xl items-center px-5">
          <div className="max-w-lg">
            <h1 className="text-5xl font-bold tracking-tight md:text-6xl">
              Contact US
            </h1>
            <p className="mt-6 text-2xl font-medium leading-8 text-white/95">
              We&apos;re here to help you on your journey to better movement
              and a pain-free life.
            </p>
            <a
              href="tel:+918877733305"
              className="mt-12 inline-flex h-16 items-center gap-5 rounded-full bg-[#1f6eb8] px-12 text-2xl font-medium text-white transition hover:bg-[#195f9f]"
            >
              <PhoneIcon />
              +91 8877733305
            </a>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20">
        <h2 className="text-3xl font-bold text-[#26384d]">For Appointments</h2>
        <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-0">
          {appointments.map((appointment, index) => (
            <div
              key={appointment.name}
              className={index === 0 ? "md:border-r md:border-[#2a84d3] md:pr-12" : "md:pl-12"}
            >
              <AppointmentCard {...appointment} />
            </div>
          ))}
        </div>
      </section>

      <SiteFooter variant="home" />
    </main>
  );
}
