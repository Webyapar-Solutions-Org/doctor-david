export type BlogPost = {
  id: number;
  title: string;
  slug: string;
  image: string;
  author: string;
  date: string;
};

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Bone Weakness: Warning Signs You Should Never Ignore",
    slug: "bone-weakness-warning-signs-you-should-never-ignore",
    image: "/treatment/5.png",
    author: "Dr. Vivek Kumar David",
    date: "21 May 2026",
  },
];

export function getBlogPost(slug: string) {
  return blogPosts.find((post) => post.slug === slug);
}
