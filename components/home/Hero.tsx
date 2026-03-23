"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const collageLeft: { src: string; alt: string; wrap: string; img: string }[] = [
  {
    src: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop",
    alt: "Ubud rice terraces",
    wrap: "relative -rotate-6",
    img: "rounded-2xl shadow-sm ring-4 ring-white transition-all duration-200",
  },
  {
    src: "https://images.unsplash.com/photo-1544644181-3ac98e9e0ed9?q=80&w=800&auto=format&fit=crop",
    alt: "Tropical coast in Bali",
    wrap: "relative translate-x-6 -translate-y-8 rotate-3",
    img: "rounded-2xl shadow-sm ring-4 ring-white transition-all duration-200",
  },
];

const collageRight: { src: string; alt: string; wrap: string; img: string }[] = [
  {
    src: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop",
    alt: "Beach in Bali",
    wrap: "relative rotate-2",
    img: "rounded-2xl shadow-sm ring-4 ring-white transition-all duration-200",
  },
  {
    src: "https://images.unsplash.com/photo-1518548419970-58e3b4079ab2?q=80&w=800&auto=format&fit=crop",
    alt: "Temple in Bali",
    wrap: "relative -translate-x-4 -translate-y-10 -rotate-3",
    img: "rounded-2xl shadow-sm ring-4 ring-white transition-all duration-200",
  },
];

function LandmarkBackdrop() {
  return (
    <svg
      className="pointer-events-none absolute bottom-0 left-1/2 h-48 w-[min(100%,1200px)] -translate-x-1/2 text-amber-900/[0.09] md:h-64"
      viewBox="0 0 1200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <path
        d="M80 180 L80 90 L95 75 L110 90 L110 180 M95 75 L95 55 L105 55 L105 75"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M200 180 L200 100 L230 70 L260 100 L260 180 M230 70 L230 40 L245 30 L260 40 L260 70"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M400 180 L400 120 L420 100 L440 120 L440 180 M420 100 L420 60 L435 45 L450 60 L450 100"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M560 180 V95 L580 75 L600 95 V180 M590 95 L590 55 L610 40 L630 55 L630 95"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M720 180 V130 L750 100 L780 130 V180"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M880 180 V70 L900 50 L920 70 V180 M900 50 L900 30 L910 20 L920 30"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M1020 180 V110 L1040 90 L1060 110 V180"
        stroke="currentColor"
        strokeWidth="2"
      />
    </svg>
  );
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-white pb-6 pt-10 md:pb-10 md:pt-14">
      <LandmarkBackdrop />

      <div className="relative z-[1] mx-auto max-w-7xl px-4 md:px-8">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,520px)_minmax(0,1fr)] lg:gap-6">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative hidden min-h-[320px] flex-col items-end justify-center gap-4 justify-self-end lg:flex"
          >
            <div className={`h-56 w-44 ${collageLeft[0].wrap}`}>
              <div className={`relative h-full w-full overflow-hidden ${collageLeft[0].img}`}>
                <Image
                  src={collageLeft[0].src}
                  alt={collageLeft[0].alt}
                  fill
                  className="object-cover"
                  sizes="176px"
                />
              </div>
            </div>
            <div className={`h-40 w-40 ${collageLeft[1].wrap}`}>
              <div className={`relative h-full w-full overflow-hidden ${collageLeft[1].img}`}>
                <Image
                  src={collageLeft[1].src}
                  alt={collageLeft[1].alt}
                  fill
                  className="object-cover"
                  sizes="160px"
                />
              </div>
            </div>
          </motion.div>

          <div className="mx-auto max-w-xl text-center lg:mx-0 lg:max-w-none">
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground md:text-5xl lg:text-6xl"
            >
              Your world,{" "}
              <span className="text-primary">crafted for you</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.12 }}
              className="mt-2 max-w-lg text-base text-zinc-500 md:mx-auto md:text-lg lg:mx-0"
            >
              Global holidays, hand-picked stays, and seamless planning—so every trip feels unmistakably yours.
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="relative hidden min-h-[320px] flex-col items-start justify-center gap-4 justify-self-start lg:flex"
          >
            <div className={`h-40 w-52 ${collageRight[0].wrap}`}>
              <div className={`relative h-full w-full overflow-hidden ${collageRight[0].img}`}>
                <Image
                  src={collageRight[0].src}
                  alt={collageRight[0].alt}
                  fill
                  className="object-cover"
                  sizes="208px"
                />
              </div>
            </div>
            <div className={`h-60 w-44 ${collageRight[1].wrap}`}>
              <div className={`relative h-full w-full overflow-hidden ${collageRight[1].img}`}>
                <Image
                  src={collageRight[1].src}
                  alt={collageRight[1].alt}
                  fill
                  className="object-cover"
                  sizes="176px"
                />
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-8 flex justify-center gap-3 lg:hidden"
        >
          {[
            collageLeft[0],
            collageRight[0],
            collageLeft[1],
          ].map((item, i) => (
            <div
              key={i}
              className="relative h-24 w-20 overflow-hidden rounded-xl shadow-md ring-2 ring-white"
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover"
                sizes="80px"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
