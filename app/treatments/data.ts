export type Treatment = {
  title: string;
  slug: string;
  image: string;
  description: string;
  overview: string;
  causes: string[];
  symptoms: string[];
  treatmentOptions: {
    title: string;
    icon: string;
    description: string;
  }[];
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
    causes: [
      "Osteoarthritis and rheumatoid arthritis",
      "Sports injuries and ligament tears",
      "Meniscus injuries",
      "Tendon and cartilage damage",
      "Fractures around the knee joint",
      "Obesity and excessive strain on the joints",
    ],
    symptoms: [
      "Swelling and stiffness",
      "Difficulty walking or climbing stairs",
      "Clicking or locking of the knee",
      "Reduced range of motion",
      "Weakness while standing",
      "Pain during physical activities",
    ],
    treatmentOptions: [
      {
        title: "Medications",
        icon: "Rx",
        description:
          "Pain-relieving and anti-inflammatory medications help reduce discomfort, control inflammation, and improve joint function during the early stages of knee conditions.",
      },
      {
        title: "Physiotherapy",
        icon: "PT",
        description:
          "Personalized physiotherapy strengthens the muscles around the knee, improves flexibility, restores mobility, and supports long-term joint health.",
      },
      {
        title: "Lifestyle Modifications",
        icon: "LM",
        description:
          "Maintaining a healthy weight, staying active, and adopting joint-friendly habits can reduce stress on the knee and slow the progression of joint damage.",
      },
      {
        title: "Arthroscopy",
        icon: "AR",
        description:
          "A minimally invasive procedure used to diagnose and treat ligament injuries, cartilage damage, and meniscus tears through small incisions, promoting quicker recovery.",
      },
      {
        title: "Robotic Knee Replacement",
        icon: "RK",
        description:
          "Advanced robotic-assisted surgery provides greater precision, improved implant alignment, and faster recovery for patients with severe knee arthritis.",
      },
      {
        title: "Total Knee Replacement Surgery",
        icon: "TK",
        description:
          "This procedure replaces the damaged knee joint with a durable artificial implant, relieving chronic pain and restoring comfortable movement and mobility.",
      },
    ],
  },
  {
    title: "Hip Joint Pain",
    slug: "hip-joint-pain",
    image: "/treatment/2.png",
    description:
      "Hip pain is a common symptom that can be caused by anything from sports injuries to arthritis.",
    overview:
      "Hip joint pain can affect mobility, balance, and everyday activities such as walking, climbing stairs, or sitting comfortably. It may result from arthritis, injury, or age-related joint degeneration. Early diagnosis and timely treatment can help relieve pain, improve movement, and restore an active lifestyle.",
    causes: [
      "Osteoarthritis",
      "Rheumatoid Arthritis",
      "Hip Fractures",
      "Bursitis",
      "Tendon or Muscle Strain",
      "Sports or Overuse Injuries",
    ],
    symptoms: [
      "Pain in the hip or groin",
      "Reduced range of motion",
      "Pain while walking or climbing stairs",
      "Swelling or tenderness",
      "Difficulty standing after sitting",
      "Limping or difficulty bearing weight",
    ],
    treatmentOptions: [
      {
        title: "Medications",
        icon: "Rx",
        description:
          "Pain-relieving and anti-inflammatory medications help reduce pain and inflammation.",
      },
      {
        title: "Physiotherapy",
        icon: "PT",
        description:
          "Targeted exercises strengthen the hip muscles, improve flexibility, and restore joint mobility.",
      },
      {
        title: "Lifestyle Modifications",
        icon: "LM",
        description:
          "Weight management, low-impact exercises, and activity modification help reduce stress on the hip joint.",
      },
      {
        title: "Injection Therapy",
        icon: "IN",
        description:
          "Corticosteroid or lubricating injections may be recommended to reduce pain and improve joint function.",
      },
      {
        title: "Robotic Hip Replacement",
        icon: "RH",
        description:
          "Robotic-assisted hip replacement offers greater surgical precision, improved implant positioning, and faster recovery for patients with advanced hip arthritis.",
      },
      {
        title: "Total Hip Replacement Surgery",
        icon: "TH",
        description:
          "When conservative treatments are no longer effective, hip replacement surgery replaces the damaged joint with an artificial implant, relieving pain and restoring comfortable movement.",
      },
    ],
  },
  {
    title: "Low Back Pain",
    slug: "low-back-pain",
    image: "/treatment/3.png",
    description:
      "Low back pain is caused by injury to a muscle or ligament strain. Common causes include improper lifting.",
    overview:
      "Low back pain is one of the most common musculoskeletal conditions, affecting people of all ages. It can result from muscle strain, poor posture, injury, or age-related changes in the spine. Early diagnosis and appropriate treatment can help relieve pain, improve mobility, and prevent recurring problems.",
    causes: [
      "Muscle or ligament strain",
      "Herniated (slipped) disc",
      "Degenerative disc disease",
      "Arthritis of the spine",
      "Poor posture or prolonged sitting",
      "Sports injuries or heavy lifting",
    ],
    symptoms: [
      "Persistent pain in the lower back",
      "Stiffness and reduced flexibility",
      "Pain that radiates to the hips or legs",
      "Muscle spasms",
      "Difficulty standing, walking, or bending",
    ],
    treatmentOptions: [
      {
        title: "Medications",
        icon: "Rx",
        description:
          "Pain relievers and anti-inflammatory medications help reduce discomfort and control inflammation.",
      },
      {
        title: "Physiotherapy",
        icon: "PT",
        description:
          "Targeted exercises strengthen the back muscles, improve posture, and restore flexibility.",
      },
      {
        title: "Lifestyle Modifications",
        icon: "LM",
        description:
          "Maintaining a healthy weight, practicing good posture, and regular physical activity help reduce strain on the lower back.",
      },
      {
        title: "Injection Therapy",
        icon: "IN",
        description:
          "For persistent pain, targeted injections may be recommended to reduce inflammation and provide relief.",
      },
      {
        title: "Minimally Invasive Procedures",
        icon: "MI",
        description:
          "Certain spine conditions can be treated using minimally invasive techniques that promote faster recovery and less discomfort.",
      },
      {
        title: "Surgical Treatment",
        icon: "ST",
        description:
          "In severe cases where conservative treatments are ineffective, surgery may be recommended to relieve pressure on nerves and restore spinal stability.",
      },
    ],
  },
  {
    title: "Shoulder Pain",
    slug: "shoulder-pain",
    image: "/treatment/4.png",
    description:
      "The most common cause of shoulder pain occurs when rotator cuff become trapped under bony area in the shoulder.",
    overview:
      "Shoulder pain may result from rotator cuff problems, frozen shoulder, arthritis, instability, or injury. Treatment focuses on reducing pain, restoring range of motion, and helping patients return to comfortable daily activity.",
    causes: [
      "Rotator cuff injuries",
      "Frozen shoulder",
      "Arthritis",
      "Shoulder instability",
      "Tendon inflammation",
      "Sports or overuse injuries",
    ],
    symptoms: [
      "Pain while lifting the arm",
      "Stiffness and reduced motion",
      "Weakness in the shoulder",
      "Pain at night",
      "Swelling or tenderness",
      "Difficulty with daily activities",
    ],
    treatmentOptions: [
      {
        title: "Medications",
        icon: "Rx",
        description:
          "Pain-relieving and anti-inflammatory medications may help reduce discomfort and swelling.",
      },
      {
        title: "Physiotherapy",
        icon: "PT",
        description:
          "Targeted exercises help restore strength, flexibility, and shoulder movement.",
      },
      {
        title: "Lifestyle Modifications",
        icon: "LM",
        description:
          "Activity changes, posture correction, and guided home care can reduce stress on the shoulder.",
      },
      {
        title: "Injection Therapy",
        icon: "IN",
        description:
          "Injections may be recommended to reduce inflammation and improve comfort in selected conditions.",
      },
      {
        title: "Minimally Invasive Procedures",
        icon: "MI",
        description:
          "Arthroscopic procedures can diagnose and treat selected tendon, cartilage, and joint problems through small incisions.",
      },
      {
        title: "Surgical Treatment",
        icon: "ST",
        description:
          "Surgery may be advised when severe injury or persistent symptoms do not improve with conservative treatment.",
      },
    ],
  },
  {
    title: "Foot & Ankle Pain",
    slug: "foot-ankle-pain",
    image: "/treatment/5.png",
    description:
      "Pain that seems to be getting worse, does not improve, or lasts longer than a few months could be due to an injury.",
    overview:
      "Foot and ankle pain can affect your ability to walk, stand, or perform everyday activities. It may result from injuries, arthritis, overuse, or structural problems. Early diagnosis and proper treatment can help relieve pain, restore movement, and prevent long-term complications.",
    causes: [
      "Ankle Sprains",
      "Fractures",
      "Arthritis",
      "Plantar Fasciitis",
      "Achilles Tendon Injury",
      "Sports or Overuse Injuries",
    ],
    symptoms: [
      "Pain while walking or standing",
      "Swelling around the foot or ankle",
      "Stiffness and reduced mobility",
      "Tenderness or bruising",
      "Difficulty bearing weight",
      "Instability of the ankle",
    ],
    treatmentOptions: [
      {
        title: "Medications",
        icon: "Rx",
        description:
          "Pain-relieving and anti-inflammatory medications help reduce pain and swelling.",
      },
      {
        title: "Physiotherapy",
        icon: "PT",
        description:
          "Strengthening and mobility exercises improve flexibility, balance, and overall foot and ankle function.",
      },
      {
        title: "Lifestyle Modifications",
        icon: "LM",
        description:
          "Supportive footwear, activity modification, weight management, and orthotic support help reduce stress on the foot and ankle.",
      },
      {
        title: "Injection Therapy",
        icon: "IN",
        description:
          "Splints, braces, or casts may be recommended to stabilize the injured area and promote healing.",
      },
      {
        title: "Minimally Invasive Procedures",
        icon: "MI",
        description:
          "Certain tendon, ligament, and joint conditions can be treated using minimally invasive techniques for quicker recovery.",
      },
      {
        title: "Surgical Treatment",
        icon: "ST",
        description:
          "For severe fractures, ligament injuries, or advanced arthritis, surgery may be required to restore stability, relieve pain, and improve function.",
      },
    ],
  },
  {
    title: "Bone Fracture",
    slug: "bone-fracture",
    image: "/treatment/6.png",
    description:
      "Treatment often involves resetting the bone in place and immobilising it in a cast or splint to give it time to heal.",
    overview:
      "A bone fracture is a break or crack in a bone caused by trauma, falls, sports injuries, or underlying bone conditions. Prompt diagnosis and appropriate treatment are essential to ensure proper healing, restore function, and prevent long-term complications.",
    causes: [
      "Falls and Accidents",
      "Sports Injuries",
      "Road Traffic Accidents",
      "Osteoporosis",
      "Direct Trauma or Impact",
      "Repetitive Stress Injuries",
    ],
    symptoms: [
      "Severe pain at the injury site",
      "Swelling and bruising",
      "Difficulty moving or bearing weight",
      "Visible deformity",
      "Tenderness around the affected bone",
      "Numbness or tingling",
    ],
    treatmentOptions: [
      {
        title: "Immobilization",
        icon: "IM",
        description:
          "Casts, splints, or braces are used to keep the fractured bone in the correct position while it heals.",
      },
      {
        title: "Medications",
        icon: "Rx",
        description:
          "Pain-relieving and anti-inflammatory medications help manage pain and reduce swelling during recovery.",
      },
      {
        title: "Physiotherapy",
        icon: "PT",
        description:
          "Rehabilitation exercises help restore strength, flexibility, and normal movement after the bone has healed.",
      },
      {
        title: "Fracture Fixation Surgery",
        icon: "FF",
        description:
          "Severe or displaced fractures may require surgical fixation using plates, screws, rods, or pins to stabilize the bone.",
      },
      {
        title: "Minimally Invasive Procedures",
        icon: "MI",
        description:
          "Certain fractures can be treated using minimally invasive surgical techniques, resulting in smaller incisions and faster recovery.",
      },
      {
        title: "Follow-up & Rehabilitation",
        icon: "FR",
        description:
          "Regular follow-up appointments and a personalized rehabilitation program ensure proper healing and help patients safely return to their daily activities.",
      },
    ],
  },
];

export function getTreatment(slug: string) {
  return treatments.find((treatment) => treatment.slug === slug);
}
