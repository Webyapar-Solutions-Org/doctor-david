import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Image from "next/image";
import Link from "next/link";
import type React from "react";
import { SiteFooter } from "../components/SiteFooter";
import { SiteNavbar } from "../components/SiteNavbar";
import { blogPosts } from "./data";

const posts = blogPosts;

function SearchIcon() {
  return (
    <span className="relative h-5 w-5" aria-hidden="true">
      <span className="absolute left-0 top-0 h-4 w-4 rounded-full border-2 border-[#26384d]" />
      <span className="absolute bottom-0 right-0 h-2 w-0.5 -rotate-45 rounded bg-[#26384d]" />
    </span>
  );
}

function BlogCard({
  title,
  slug,
  image,
}: {
  title: string;
  slug: string;
  image: string;
}) {
  return (
    <article>
      <Image
        src={image}
        alt={title}
        width={1205}
        height={1305}
        className="aspect-[0.9] w-full rounded-md object-cover"
      />
      <h2 className="mt-5 text-lg font-bold leading-6 text-[#2a84d3]">
        {title}
      </h2>
      <Link
        href={`/blog/${slug}`}
        className="mt-5 inline-flex h-9 items-center gap-3 rounded border border-[#2a84d3] px-4 text-sm font-semibold text-[#2a84d3] transition hover:bg-[#e2f1ff]"
      >
        Read this
        <FontAwesomeIcon icon={faArrowRight} className="h-3 w-3" aria-hidden="true" />
      </Link>
    </article>
  );
}

// function PageButton({
//   children,
//   active = false,
// }: {
//   children: React.ReactNode;
//   active?: boolean;
// }) {
//   return (
//     <button
//       className={`flex h-10 min-w-10 items-center justify-center rounded border text-sm font-semibold ${
//         active
//           ? "border-[#2f84cf] bg-[#2f84cf] text-white"
//           : "border-[#8cc1ef] text-[#2d6ea9] hover:bg-[#e2f1ff]"
//       }`}
//       type="button"
//     >
//       {children}
//     </button>
//   );
// }

export default function BlogPage() {
  return (
    <main className="min-h-screen bg-[#eef6fd] text-[#26384d]">
      <SiteNavbar active="blog" />

      <section className="mx-auto max-w-6xl px-5 pb-20 pt-14 md:pb-24">
        <p className="text-2xl font-black uppercase tracking-tight text-[#0f5797]">
          Home / Blog
        </p>

        <div className="mt-20 flex justify-center">
          <label className="flex h-14 w-full max-w-[520px] items-center gap-5 rounded-md border border-[#2a84d3] bg-transparent px-5">
            <SearchIcon />
            <input
              className="w-full bg-transparent text-xl font-medium text-[#26384d] outline-none placeholder:text-[#26384d]"
              aria-label="Search by Speciality"
              placeholder="Search by Speciality"
              type="search"
            />
          </label>
        </div>

        <div className="mt-5 grid gap-x-7 gap-y-9 sm:grid-cols-2 lg:grid-cols-4">
          {posts.map((post) => (
            <BlogCard
              key={post.id}
              title={post.title}
              slug={post.slug}
              image={post.image}
            />
          ))}
        </div>

        {/* <div className="mt-14 flex items-center justify-center gap-4">
          <PageButton>
            <span className="text-2xl leading-none">&lsaquo;</span>
          </PageButton>
          <PageButton active>1</PageButton>
          <PageButton>2</PageButton>
          <span className="px-3 text-sm font-semibold text-[#26384d]">
            .....
          </span>
          <PageButton>10</PageButton>
          <PageButton>
            <span className="text-2xl leading-none">&rsaquo;</span>
          </PageButton>
        </div> */}
      </section>

      <SiteFooter variant="home" />
    </main>
  );
}
