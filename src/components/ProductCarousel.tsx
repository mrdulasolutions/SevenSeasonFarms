"use client";

import Image from "next/image";
import { useState } from "react";

export function ProductCarousel({
  images,
  alt,
}: {
  images: string[];
  alt: string;
}) {
  const [i, setI] = useState(0);
  const count = images.length;

  if (count === 0) return null;

  const go = (next: number) => setI((next + count) % count);

  return (
    <div className="relative">
      <div className="relative aspect-square overflow-hidden rounded-3xl bg-forest-deep/5">
        {images.map((src, idx) => (
          <Image
            key={src}
            src={src}
            alt={idx === 0 ? alt : `${alt}, view ${idx + 1}`}
            fill
            sizes="(max-width: 768px) 100vw, 45vw"
            className={`object-cover transition-opacity duration-500 ${
              idx === i ? "opacity-100" : "opacity-0"
            }`}
            priority={idx === 0}
          />
        ))}

        {count > 1 && (
          <>
            <button
              type="button"
              aria-label="Previous image"
              onClick={() => go(i - 1)}
              className="absolute left-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/90 text-forest-deep shadow-md transition hover:bg-ivory hover:text-terracotta"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>
            <button
              type="button"
              aria-label="Next image"
              onClick={() => go(i + 1)}
              className="absolute right-3 top-1/2 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-ivory/90 text-forest-deep shadow-md transition hover:bg-ivory hover:text-terracotta"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>

            <div className="absolute bottom-4 left-1/2 z-10 flex -translate-x-1/2 gap-2">
              {images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Show image ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === i
                      ? "w-6 bg-ivory"
                      : "w-2 bg-ivory/60 hover:bg-ivory/80"
                  }`}
                />
              ))}
            </div>
          </>
        )}
      </div>

      {count > 1 && (
        <div className="mt-4 flex gap-3">
          {images.map((src, idx) => (
            <button
              key={src}
              type="button"
              onClick={() => setI(idx)}
              aria-label={`Show image ${idx + 1}`}
              className={`relative aspect-square w-20 flex-none overflow-hidden rounded-xl ring-2 transition ${
                idx === i
                  ? "ring-terracotta"
                  : "ring-forest/10 hover:ring-forest/30"
              }`}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
