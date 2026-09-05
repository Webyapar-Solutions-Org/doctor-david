"use client";

import { faChevronLeft, faChevronRight, faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

const reviews = [
  {
    name: "Ramesh S.",
    initials: "RS",
    quote:
      "After suffering from severe knee pain for years, I finally underwent knee replacement surgery. Today, I can walk comfortably and enjoy daily activities again.",
  },
  {
    name: "Anita K.",
    initials: "AK",
    quote:
      "Dr. Vivek explained every step clearly and made the entire treatment journey feel reassuring. My recovery was smoother than I expected.",
  },
  {
    name: "Manoj P.",
    initials: "MP",
    quote:
      "The care, diagnosis, and follow-up were excellent. I was able to return to normal movement with much less pain.",
  },
];

export function PatientReviewsCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeReview = reviews[activeIndex];

  const showPreviousReview = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === 0 ? reviews.length - 1 : currentIndex - 1,
    );
  };

  const showNextReview = () => {
    setActiveIndex((currentIndex) =>
      currentIndex === reviews.length - 1 ? 0 : currentIndex + 1,
    );
  };

  return (
    <>
      <div className="mt-10 grid items-center gap-6 md:grid-cols-[44px_1fr_320px_44px]">
        <button
          type="button"
          onClick={showPreviousReview}
          className="mx-auto flex h-9 w-9 items-center justify-center rounded-full border border-[#92bce0] text-[#2b70af] transition hover:bg-[#e2f1ff]"
          aria-label="Previous review"
        >
          <FontAwesomeIcon icon={faChevronLeft} className="h-4 w-4" aria-hidden="true" />
        </button>
        <article className="bg-[#e2effa] px-8 py-14 text-left">
          <p className="text-xl font-bold italic leading-7 text-[#31455c]">
            &quot;{activeReview.quote}&quot;
          </p>
          <div className="mt-12 flex items-center gap-4">
            <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white text-sm font-bold text-[#2b70af]">
              {activeReview.initials}
            </span>
            <p className="text-sm font-bold text-[#1f2d3d]">
              {activeReview.name}
            </p>
          </div>
        </article>
        <button
          type="button"
          className="flex aspect-[9/16] items-center justify-center rounded-md border border-[#768391] bg-white text-[#6d7d90] transition hover:bg-[#f5f9fd]"
          aria-label="Play patient review video"
        >
          <FontAwesomeIcon icon={faPlay} className="ml-1 h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={showNextReview}
          className="mx-auto flex h-9 w-9 items-center justify-center rounded-full border border-[#92bce0] text-[#2b70af] transition hover:bg-[#e2f1ff]"
          aria-label="Next review"
        >
          <FontAwesomeIcon icon={faChevronRight} className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>
      <div className="mt-12 flex justify-center gap-2">
        {reviews.map((review, index) => (
          <button
            key={review.name}
            type="button"
            onClick={() => setActiveIndex(index)}
            className={`h-2 rounded-full transition ${
              activeIndex === index ? "w-6 bg-[#1d79c8]" : "w-2 bg-[#c3d8e9]"
            }`}
            aria-label={`Show review from ${review.name}`}
          />
        ))}
      </div>
    </>
  );
}
