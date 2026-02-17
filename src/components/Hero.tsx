import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

/**
 * Full-viewport hero with the couple photo as background and their names
 * elegantly overlaid at the bottom.
 * The photo has a subtle parallax — it moves slower than the scroll.
 */
export function Hero() {
  const ref = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Image drifts down gently as you scroll past the hero
  const y = useTransform(scrollYProgress, [0, 1], [0, 40]);

  return (
    <section
      ref={ref}
      className="relative h-dvh w-full overflow-hidden bg-black"
    >
      {/* ── Couple photo with parallax ── */}
      <motion.img
        src="/images/couple_photo.JPG"
        alt="Rim & Mohamad"
        style={{ y }}
        className="absolute inset-0 h-[calc(100%+40px)] w-full object-cover object-[center_25%] will-change-transform"
      />

      {/* ── Bottom gradient for text legibility ── */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-2/5 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

      {/* ── Names ── */}
      <motion.div
        className="absolute inset-x-0 bottom-16 flex flex-col items-center pb-[env(safe-area-inset-bottom)]"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, delay: 0.3, ease: "easeOut" }}
      >
        <h1 className="font-script text-[2.75rem] leading-tight text-white drop-shadow-lg sm:text-6xl">
          Rim &amp; Mohamad
        </h1>
      </motion.div>
    </section>
  );
}
