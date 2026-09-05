import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import { SiteFooter } from "../components/SiteFooter";
import { SiteNavbar } from "../components/SiteNavbar";
import { treatments } from "./data";

function TreatmentCard({
  title,
  slug,
  image,
  description,
}: {
  title: string;
  slug: string;
  image: string;
  description: string;
}) {
  return (
    <article>
      <Image
        src={image}
        alt={title}
        width={1205}
        height={800}
        className="aspect-[1.5] w-full rounded-md object-cover"
      />
      <h3 className="mt-4 text-base font-bold text-[#2a84d3]">{title}</h3>
      <p className="mt-2 min-h-[88px] text-[15px] font-medium leading-5 text-[#495969]">
        {description}
      </p>
      <Link
        href={`/treatments/${slug}`}
        className="mt-3 inline-flex h-8 items-center gap-2 rounded border border-[#2a84d3] px-3 text-xs font-semibold text-[#2a84d3] transition hover:bg-[#e2f1ff]"
      >
        Know more
        <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" aria-hidden="true" />
      </Link>
    </article>
  );
}

export default function TreatmentsPage() {
  return (
    <main className="min-h-screen bg-[#eef6fd] text-[#26384d]">
      <SiteNavbar active="treatment" />

      <section className="relative h-[318px] overflow-hidden bg-[#7eaed2] text-white md:h-[320px]">
        <Image
          src="/treatment.png"
          alt=""
          width={1440}
          height={400}
          priority
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07345b]/90 via-[#2f78af]/30 to-[#bad5ea]/10" />
        <div className="relative mx-auto flex h-full max-w-6xl items-center px-5">
          <p className="text-xl font-black uppercase tracking-tight text-white">
            Home / Treatment
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl items-center gap-8 px-5 py-16 md:grid-cols-[0.86fr_1.7fr] md:py-20">
        <div className="overflow-hidden rounded-md border border-[#69a7d8] bg-white shadow-sm">
          <Image
            src="/smile.png"
            alt="Dr. Vivek Kumar David seated at his clinic desk"
            width={1940}
            height={2400}
            className="aspect-[0.8] h-full w-full object-cover"
          />
        </div>
        <div>
          <h1 className="max-w-3xl text-2xl font-bold leading-8 tracking-tight text-[#26384d] md:text-3xl md:leading-9">
            Advanced Robotic & Conventional Knee Replacement Treatment
          </h1>
          <div className="mt-4 max-w-3xl space-y-5 text-base font-medium leading-6 text-[#34465a]">
            <p>
              Knee pain caused by arthritis, injury, or age-related wear can
              significantly affect your mobility and quality of life. When
              medications, physiotherapy, and lifestyle modifications no longer
              provide relief, knee replacement surgery offers a safe and
              effective solution to restore movement and reduce pain.
            </p>
            <p>
              At our clinic, we specialize in robotic-assisted and conventional
              knee replacement procedures, using advanced technology to ensure
              greater precision, improved implant alignment, and faster
              recovery. Every treatment plan is personalized based on the
              patient&apos;s condition, lifestyle, and long-term goals.
            </p>
            <p className="font-bold">
              Dr. Vivek Kumar David combines years of surgical expertise with
              patient-centered care, delivering advanced knee replacement
              solutions focused on long-lasting mobility, reduced pain, and an
              improved quality of life.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16 md:pb-20">
        <h2 className="text-3xl font-bold tracking-tight text-black">
          Treatments Offered
        </h2>
        <div className="mt-9 grid gap-x-7 gap-y-8 sm:grid-cols-2 lg:grid-cols-4">
          {treatments.map((treatment, index) => (
            <TreatmentCard
              key={`${treatment.slug}-${index}`}
              {...treatment}
            />
          ))}
          {treatments.slice(2, 4).map((treatment, index) => (
            <TreatmentCard
              key={`${treatment.slug}-repeat-${index}`}
              {...treatment}
            />
          ))}
        </div>
      </section>

      <SiteFooter variant="home" />
    </main>
  );
}
