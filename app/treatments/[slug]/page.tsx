import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteNavbar } from "../../components/SiteNavbar";
import { getTreatment, treatments } from "../data";

const causes = [
  "Osteoarthritis and rheumatoid arthritis",
  "Sports injuries and ligament tears",
  "Meniscus injuries",
  "Tendon and cartilage damage",
  "Fractures around the joint",
  "Obesity and excessive strain on the joints",
];

const symptoms = [
  "Swelling and stiffness",
  "Difficulty walking or climbing stairs",
  "Clicking or locking of the joint",
  "Reduced range of motion",
  "Weakness while standing",
  "Pain during physical activities",
];

const treatmentOptions = [
  {
    title: "Medications",
    icon: "Rx",
    description:
      "Pain-relieving and anti-inflammatory medications help reduce discomfort, control inflammation, and improve joint function during the early stages.",
  },
  {
    title: "Physiotherapy",
    icon: "PT",
    description:
      "Personalized physiotherapy strengthens the muscles around the joint, improves flexibility, restores mobility, and supports long-term joint health.",
  },
  {
    title: "Lifestyle Modifications",
    icon: "LM",
    description:
      "Maintaining a healthy weight, staying active, and adopting joint-friendly habits can reduce stress and slow the progression of joint damage.",
  },
  {
    title: "Arthroscopy",
    icon: "AR",
    description:
      "A minimally invasive procedure used to diagnose and treat ligament injuries, cartilage damage, and meniscus tears through small incisions.",
  },
  {
    title: "Robotic Knee Replacement",
    icon: "RK",
    description:
      "Advanced robotic-assisted surgery provides greater precision, improved implant alignment, and faster recovery for patients with severe arthritis.",
  },
  {
    title: "Total Knee Replacement Surgery",
    icon: "TK",
    description:
      "This procedure replaces the damaged joint with a durable artificial implant, relieving chronic pain and restoring comfortable movement and mobility.",
  },
];

function CheckIcon() {
  return (
    <span className="relative mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full border border-[#2b82cf]">
      <span className="h-1.5 w-2.5 -rotate-45 border-b border-l border-[#2b82cf]" />
    </span>
  );
}

export function generateStaticParams() {
  return treatments.map((treatment) => ({ slug: treatment.slug }));
}

export default async function TreatmentDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const treatment = getTreatment(slug);

  if (!treatment) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#eef6fd] text-[#26384d]">
      <SiteNavbar active="treatment" />

      <section className="relative h-[288px] overflow-hidden bg-[#9bc7e9] text-white md:h-[290px]">
        <Image
          src={treatment.image}
          alt=""
          width={1205}
          height={800}
          priority
          className="absolute inset-0 h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#d5eafa]/85 via-[#87bde5]/55 to-[#cde5f7]/80" />
        <div className="absolute inset-y-0 left-0 w-1/3 bg-gradient-to-r from-[#e4f2fb]/90 to-transparent" />
        <div className="relative mx-auto flex h-full max-w-6xl items-center px-5">
          <p className="text-xl font-black uppercase tracking-tight text-[#0f5797]">
            Treatment/ {treatment.title}
          </p>
        </div>
      </section>

      <section className="mx-auto grid max-w-6xl gap-5 px-5 py-14 md:grid-cols-[1fr_330px] md:py-16">
        <article className="rounded-md bg-[#e2f0fb] p-4 md:p-5">
          <div className="grid gap-6 md:grid-cols-[1fr_290px]">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-[#555]">
                Understanding {treatment.title}
              </h1>
              <p className="mt-2 max-w-xl text-lg font-medium leading-6 text-[#626262]">
                {treatment.overview}
              </p>
            </div>
            <Image
              src={treatment.image}
              alt={treatment.title}
              width={1205}
              height={800}
              className="aspect-[1.5] w-full rounded-md object-cover"
            />
          </div>

          <section className="mt-10">
            <h2 className="text-3xl font-bold tracking-tight text-[#555]">
              Common Causes
            </h2>
            <ol className="mt-4 divide-y divide-[#b8d8ef]">
              {causes.map((cause, index) => (
                <li
                  key={cause}
                  className="flex items-center gap-4 py-3 text-base font-medium text-[#5d5d5d]"
                >
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#2f86d2] text-xs font-bold text-white">
                    {index + 1}
                  </span>
                  {cause}
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold tracking-tight text-[#555]">
              Symptoms
            </h2>
            <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {symptoms.map((symptom) => (
                <div
                  key={symptom}
                  className="flex min-h-16 items-start gap-4 rounded border border-[#88bdec] px-4 py-3 text-base font-semibold leading-5 text-[#405064]"
                >
                  <CheckIcon />
                  <span>{symptom}</span>
                </div>
              ))}
            </div>
          </section>

          <section className="mt-10">
            <h2 className="text-3xl font-bold tracking-tight text-[#555]">
              Treatment Options
            </h2>
            <div className="mt-4 divide-y divide-[#b8d8ef]">
              {treatmentOptions.map((option) => (
                <div key={option.title} className="flex gap-4 py-4">
                  <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-[#2f86d2] text-[10px] font-bold text-white">
                    {option.icon}
                  </span>
                  <div>
                    <h3 className="text-base font-bold text-[#606060]">
                      {option.title}
                    </h3>
                    <p className="mt-1 text-sm font-medium leading-5 text-[#686868]">
                      {option.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </article>

        <aside className="md:pt-1">
          <h2 className="text-3xl font-bold tracking-tight text-black">
            We Treat
          </h2>
          <nav className="mt-5 space-y-3" aria-label="Treatments">
            {treatments.map((item) => {
              const isActive = item.slug === treatment.slug;

              return (
                <Link
                  key={item.slug}
                  href={`/treatments/${item.slug}`}
                  className={`block rounded border px-4 py-3 text-base font-bold transition ${
                    isActive
                      ? "border-[#2f84cf] bg-[#2f84cf] text-white"
                      : "border-[#6eaee5] text-[#2f3d52] hover:bg-[#e2f1ff]"
                  }`}
                >
                  {item.title}
                </Link>
              );
            })}
          </nav>
        </aside>
      </section>

      <section className="mx-auto max-w-6xl px-5 pb-16">
        <h2 className="text-xl font-bold text-[#25344b]">
          Why Choose Dr. Vivek Kumar David?
        </h2>
        <p className="mt-4 max-w-5xl text-lg font-medium leading-6 text-[#34465a]">
          Dr. Vivek Kumar David provides advanced, personalized orthopaedic
          care using modern surgical techniques and robotic technology to help
          patients recover faster, reduce pain, and regain an active lifestyle.
        </p>
      </section>

      <SiteFooter variant="home" />
    </main>
  );
}
