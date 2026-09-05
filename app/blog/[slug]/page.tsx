import Image from "next/image";
import { notFound } from "next/navigation";
import { SiteFooter } from "../../components/SiteFooter";
import { SiteNavbar } from "../../components/SiteNavbar";
import { blogPosts, getBlogPost } from "../data";

const warningSigns = [
  {
    title: "Frequent Bone or Joint Pain",
    body: "Persistent pain in knees, back, hips, legs, or shoulders may indicate weakening bones and should not be ignored.",
  },
  {
    title: "Frequent Fractures",
    body: "If you experience fractures after minor falls or injuries, your bones may not be as strong as they should be.",
  },
  {
    title: "Back Pain",
    body: "Persistent back pain can sometimes occur due to weakened spinal bones.",
  },
  {
    title: "Loss of Height",
    body: "Gradual reduction in height over time may occur because of changes in the bones of the spine.",
  },
  {
    title: "Poor Posture",
    body: "A bent or stooped posture may sometimes indicate weakening of bones.",
  },
  {
    title: "Muscle Weakness",
    body: "Weak muscles and reduced physical strength may increase the risk of falls and bone injuries.",
  },
  {
    title: "Difficulty Performing Daily Activities",
    body: "Difficulty walking, climbing stairs, or lifting objects may suggest bone or joint problems.",
  },
];

const commonCauses = [
  "Calcium deficiency",
  "Vitamin D deficiency",
  "Lack of physical activity",
  "Aging",
  "Smoking",
  "Poor nutrition",
  "Hormonal changes",
  "Family history of bone disease",
];

const dietItems = [
  "Milk and dairy products",
  "Green leafy vegetables",
  "Nuts and seeds",
  "Protein-rich foods",
];

const visitReasons = [
  "Persistent bone or joint pain",
  "Recurrent fractures",
  "Difficulty walking",
  "Back pain lasting for weeks",
  "Reduced mobility",
];

function SocialBadge({
  label,
  className,
}: {
  label: string;
  className: string;
}) {
  return (
    <a
      href="#contact"
      className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-bold text-white ${className}`}
      aria-label={label}
    >
      {label}
    </a>
  );
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }));
}

export default async function BlogDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#eef6fd] text-[#26384d]">
      <SiteNavbar active="blog" />

      <section className="mx-auto max-w-6xl px-5 pb-24 pt-16 md:pb-52">
        <p className="text-xl font-black uppercase tracking-tight text-[#0f5797]">
          Blog / {post.title}
        </p>

        <article className="mt-16 rounded-md border border-[#2a84d3] p-4 md:p-5">
          <div className="grid gap-10 pb-8 md:grid-cols-[1fr_300px] md:items-start">
            <div className="pt-16 md:pt-20">
              <h1 className="text-2xl font-medium leading-8 text-[#2a84d3] md:text-3xl">
                {post.title}
              </h1>

              <div className="mt-6 flex items-center gap-4">
                <span className="flex h-12 w-12 items-center justify-center rounded-full border border-[#8cc1ef] bg-[#d8ecfb] text-xs font-bold text-[#2a84d3]">
                  Dr
                </span>
                <div>
                  <p className="text-sm font-bold text-[#31455c]">
                    {post.author}
                  </p>
                  <p className="mt-1 text-xs font-bold text-[#2a84d3]">
                    {post.date}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm font-medium text-[#4b5968]">Share</p>
              <div className="mt-2 flex gap-5">
                <SocialBadge label="wa" className="bg-[#57c56f]" />
                <SocialBadge label="f" className="bg-[#2387df] text-xl" />
                <SocialBadge label="in" className="rounded bg-[#0b79bc]" />
                <SocialBadge label="X" className="bg-transparent text-2xl text-black" />
              </div>
            </div>

            <Image
              src={post.image}
              alt={post.title}
              width={1205}
              height={1305}
              priority
              className="aspect-[0.93] w-full rounded-md object-cover"
            />
          </div>

          <div className="border-t border-[#d3e2ee] pt-7 text-sm font-medium leading-5 text-[#5a5f66]">
            <p>
              Bones provide structure, support movement, and protect vital
              organs. However, many people ignore early symptoms of bone
              weakness until pain or fractures start affecting daily life.
              Identifying these warning signs early can help prevent serious
              complications and maintain better bone health.
            </p>
            <p className="mt-3">
              If you are looking for an Orthopedic Surgeon in Ranchi or a Bone
              Specialist in Ranchi, understanding these symptoms can help you
              seek timely treatment.
            </p>

            <h2 className="mt-2 font-bold">What is Bone Weakness?</h2>
            <p>
              Bone weakness occurs when bones gradually lose their strength and
              density, making them more likely to become fragile or break
              easily. It may be associated with aging, nutritional deficiencies,
              lifestyle factors, or certain medical conditions.
            </p>

            <h2 className="mt-8 font-bold">
              Warning Signs of Bone Weakness You Should Never Ignore
            </h2>

            <div className="mt-6 space-y-6">
              {warningSigns.map((sign, index) => (
                <section key={sign.title}>
                  <h3 className="font-bold">
                    {index + 1}. {sign.title}
                  </h3>
                  <p>{sign.body}</p>
                </section>
              ))}
            </div>

            <h2 className="mt-2 font-bold">Common Causes of Bone Weakness</h2>
            <ul className="mt-1 list-disc pl-5">
              {commonCauses.map((cause) => (
                <li key={cause}>{cause}</li>
              ))}
            </ul>

            <h2 className="mt-8 font-bold">How to Keep Your Bones Strong</h2>

            <section className="mt-6">
              <h3 className="font-bold">1.Maintain a Healthy Diet</h3>
              <p>Include:</p>
              <ul className="list-disc pl-5">
                {dietItems.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </section>

            <div className="mt-6 space-y-6 font-bold">
              <p>2.Stay Physically Active</p>
              <p>3.Regular exercise helps improve bone strength and balance.</p>
              <p>4.Get Adequate Sunlight</p>
              <p>5.Sun exposure helps the body produce Vitamin D.</p>
              <p>6.Avoid Smoking and Excess Alcohol</p>
            </div>

            <h2 className="mt-12 font-bold">
              When Should You Visit an Orthopedic Surgeon?
            </h2>
            <p className="mt-8 font-bold">
              Consult a specialist if you experience:
            </p>
            <ul className="mt-1">
              {visitReasons.map((reason) => (
                <li key={reason}>✓ {reason}</li>
              ))}
            </ul>

            <p className="mt-1">Expert Orthopedic Care in Ranchi</p>
            <p className="mt-8">
              If you are experiencing bone pain, weakness, or mobility problems,
              consult Dr. Vivek Kumar David for evaluation and treatment.
            </p>
          </div>
        </article>
      </section>

      <SiteFooter variant="home" />
    </main>
  );
}
