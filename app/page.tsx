import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import { HomeAboutSection } from "./components/HomeAboutSection";
import { SiteFooter } from "./components/SiteFooter";
import { SiteNavbar } from "./components/SiteNavbar";

const treatments = [
  {
    title: "Knee Pain",
    image: "/treatment/1.png",
    description:
      "Pain in or around the knee that may indicate a condition affecting the knee joint itself or the soft tissue around the knee.",
  },
  {
    title: "Hip Joint Pain",
    image: "treatment/2.png",
    description:
      "Hip pain is a common symptom that can be caused by anything from sports injuries to arthritis.",
  },
  {
    title: "Low Back Pain",
    image: "treatment/3.png",
    description:
      "Low back pain is caused by injury to a muscle or ligament strain. Common causes include improper lifting.",
  },
  {
    title: "Shoulder Pain",
    image: "/treatment/4.png",
    description:
      "The most common cause of shoulder pain occurs when rotator cuff become trapped under bony area in the shoulder.",
  },
];

const insights = [
  "Bone Weakness: Warning Signs You Should Never Ignore",
];

const whatsappUrl =
  "https://wa.me/918877733305?text=Hello%20Dr.%20Vivek%20Kumar%20David%2C%20I%20would%20like%20to%20book%20an%20appointment.";

function TreatmentCard({
  title,
  image,
  description,
}: {
  title: string;
  image: string;
  description: string;
}) {
  return (
    <article>
      <img
        src={image}
        alt={title}
        className="aspect-[1.5] w-full rounded-md object-cover"
      />
      <h3 className="mt-4 text-base font-bold text-[#2a84d3]">{title}</h3>
      <p className="mt-2 md:min-h-[92px] text-[15px] font-medium leading-5 text-[#46586a]">
        {description}
      </p>
      <a
        href="#treatments"
        className="mt-4 inline-flex h-8 items-center gap-2 rounded border border-[#2a84d3] px-3 text-xs font-semibold text-[#2a84d3] transition hover:bg-[#e9f5ff]"
      >
        Know more
        <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" aria-hidden="true" />
      </a>
    </article>
  );
}

function InsightCard({ title, index }: { title: string; index: number }) {
  return (
    <article>
      <Image
        src="/treatment/5.png"
        alt="Bone weakness warning signs"
        width={1205}
        height={1305}
        className="aspect-[1.05] w-full rounded-md object-cover"
      />
      <h3 className="mt-4 text-base font-bold leading-5 text-[#2a84d3]">
        {title}
      </h3>
      <a
        href="#blog"
        className="mt-4 inline-flex h-8 items-center gap-2 rounded border border-[#2a84d3] px-3 text-xs font-medium text-[#2a84d3] transition hover:bg-[#e9f5ff]"
      >
        Read this
        <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" aria-hidden="true" />
      </a>
      {index === 0 ? (
        <a
          href="/blog"
          className="mt-4 flex h-10 w-28 items-center justify-center gap-2 rounded-md bg-[#0f4d86] text-sm font-medium text-white transition hover:bg-[#0a3c69]"
        >
          Read more
          <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" aria-hidden="true" />
        </a>
      ) : null}
    </article>
  );
}

export default function HomePage() {
  return (
    <main id="home" className="min-h-screen bg-[#eaf4fc] text-[#26384d]">
      <section className="relative min-h-[760px] overflow-hidden bg-[#1d3f7d] text-white">
        <Image
          src="/hero.png"
          alt=""
          width={1440}
          height={1024}
          priority
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0" />

        <SiteNavbar active="home" variant="transparent" />

        <div className="relative z-10 mx-auto grid max-w-6xl items-end gap-8 px-5 pt-8 md:pt-14 md:grid-cols-[0.9fr_1fr]">
          <img
            src="/david.png"
            alt="Dr. Vivek Kumar David"
            width="1000"
            height="4000"
            className="order-2 md:order-1 mx-auto max-h-[640px] w-auto object-contain"
          />
          <div className="order-1 md:order-2 pb-5 md:pb-56">
            <h1 className="max-w-xl text-xl font-medium leading-8 text-white">
              Helping You Move Better. Live Better.
            </h1>
            <p className="mt-2 max-w-xl text-xl font-medium leading-7 text-white/90">
              Every step matters. Through advanced robotic joint replacement,
              precision orthopaedic surgery, and compassionate patient care, our
              mission is to restore mobility, relieve pain, and help you return
              to an active, fulfilling life.
            </p>
            <div className="mt-12">
              <p className="text-xl font-bold">Dr. Vivek Kumar David</p>
              <p className="mt-1 text-lg font-bold">
                Robotic Joint Replacement & Orthopaedic Surgeon
              </p>
            </div>
          </div>
        </div>

        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-3xl text-white shadow-lg ring-4 ring-white/75 transition hover:bg-[#1fb457] md:bottom-12 md:right-12"
          aria-label="Contact on WhatsApp"
        >
          <FontAwesomeIcon icon={faWhatsapp} aria-hidden="true" />
        </a>
      </section>

      <HomeAboutSection />

      <section
        id="treatments"
        className="relative overflow-hidden bg-[#d4eafa] py-16 md:py-20"
      >
        <div className="absolute inset-x-0 top-0 h-28 bg-[#b7d7ef] [clip-path:polygon(0_0,100%_0,100%_100%,0_3%)]" />
        <div className="relative mx-auto max-w-6xl px-5">
          <h2 className="text-3xl font-bold text-[#2a84d3]">Treatments Offered</h2>
          <div className="mt-8 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
            {treatments.map((treatment) => (
              <TreatmentCard key={treatment.title} {...treatment} />
            ))}
          </div>
        </div>
      </section>

      <section id="blog" className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <h2 className="text-3xl font-bold text-[#2a84d3]">
          Orthopaedic Insights
        </h2>
        <p className="mt-4 max-w-5xl text-xl font-medium leading-7 text-[#425366]">
          Explore expert guidance on bone and joint health, injury prevention,
          arthritis care, and advanced treatment options.
        </p>
        <div className="mt-7 h-px w-20 bg-[#2a84d3]" />
        <div className="mt-5 grid gap-7 sm:grid-cols-2 lg:grid-cols-4">
          {insights.map((title, index) => (
            <InsightCard key={`${title}-${index}`} title={title} index={index} />
          ))}
        </div>
      </section>

      <SiteFooter variant="home" />
    </main>
  );
}
