import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

interface Props {
  /** Text overlaid on the photo (optional). */
  overlayText?: string;
  /** Placeholder label shown before the real image is provided. */
  placeholder?: string;
  /** Image source URL. When set the placeholder text is replaced. */
  src?: string;
}

/**
 * Full-width photo divider with a subtle parallax.
 * The image translates vertically at a slower rate than the scroll,
 * giving a sense of depth between the content sections.
 */
export function PhotoDivider({ overlayText, placeholder = "Photo", src }: Props) {
  const ref = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Subtle parallax: image shifts slightly as the container scrolls through
  const y = useTransform(scrollYProgress, [0, 1], [25, -25]);

  return (
    <div
      ref={ref}
      className="relative h-[45vh] w-full overflow-hidden bg-parchment-200 sm:h-[55vh]"
    >
      {src ? (
        <motion.img
          src={src}
          alt=""
          style={{ y }}
          className="vintage absolute inset-0 -top-[25px] -bottom-[25px] h-[calc(100%+50px)] w-full object-cover will-change-transform"
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center">
          <span className="text-base italic text-wine/20 select-none">
            {placeholder}
          </span>
        </div>
      )}

      {/* Optional overlay text */}
      {overlayText && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/35">
          <span className="font-script text-5xl text-white drop-shadow-lg sm:text-6xl">
            {overlayText}
          </span>
        </div>
      )}
    </div>
  );
}
