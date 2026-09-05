export type Treatment = {
  title: string;
  slug: string;
  image: string;
  description: string;
  overview: string;
};

export const treatments: Treatment[] = [
  {
    title: "Knee Pain",
    slug: "knee-pain",
    image: "/treatment/1.png",
    description:
      "Pain in or around the knee that may indicate a condition affecting the knee joint itself or the soft tissue around the knee.",
    overview:
      "Knee pain is one of the most common orthopaedic conditions affecting people of all ages. It may develop due to injury, arthritis, overuse, or age-related wear and tear. Whether the pain is mild or severe, early diagnosis and the right treatment can help restore mobility and prevent further joint damage.",
  },
  {
    title: "Hip Joint Pain",
    slug: "hip-joint-pain",
    image: "/treatment/2.png",
    description:
      "Hip pain is a common symptom that can be caused by anything from sports injuries to arthritis.",
    overview:
      "Hip joint pain can interfere with walking, sitting, climbing stairs, and daily movement. It may be linked to arthritis, injury, muscle strain, or wear in the joint. Timely assessment helps identify the cause and select treatment that improves comfort and mobility.",
  },
  {
    title: "Low Back Pain",
    slug: "low-back-pain",
    image: "/treatment/3.png",
    description:
      "Low back pain is caused by injury to a muscle or ligament strain. Common causes include improper lifting.",
    overview:
      "Low back pain often develops from muscle strain, ligament injury, posture problems, disc issues, or improper lifting. A structured treatment plan can relieve pain, improve flexibility, and reduce the chances of recurring discomfort.",
  },
  {
    title: "Shoulder Pain",
    slug: "shoulder-pain",
    image: "/treatment/4.png",
    description:
      "The most common cause of shoulder pain occurs when rotator cuff become trapped under bony area in the shoulder.",
    overview:
      "Shoulder pain may result from rotator cuff problems, frozen shoulder, arthritis, instability, or injury. Treatment focuses on reducing pain, restoring range of motion, and helping patients return to comfortable daily activity.",
  },
  {
    title: "Foot & Ankle Pain",
    slug: "foot-ankle-pain",
    image: "/treatment/5.png",
    description:
      "Pain that seems to be getting worse, does not improve, or lasts longer than a few months could be due to an injury.",
    overview:
      "Foot and ankle pain can affect balance, walking, and independence. It may come from sprains, fractures, tendon problems, arthritis, or repeated strain. Accurate diagnosis helps guide treatment and prevent long-term mobility issues.",
  },
  {
    title: "Bone Fracture",
    slug: "bone-fracture",
    image: "/treatment/6.png",
    description:
      "Treatment often involves resetting the bone in place and immobilising it in a cast or splint to give it time to heal.",
    overview:
      "Bone fractures need careful evaluation to restore alignment, stability, and function. Depending on the fracture type, treatment may include immobilisation, medication, rehabilitation, or surgery for secure fixation and healing.",
  },
];

export function getTreatment(slug: string) {
  return treatments.find((treatment) => treatment.slug === slug);
}
