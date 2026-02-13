import { ScrollReveal } from "./ScrollReveal";
import { Ornament } from "./Ornament";

export function LoveStory() {
  return (
    <section className="relative z-10 bg-parchment px-6 py-20 text-center shadow-[0_-10px_30px_rgba(0,0,0,0.18),0_10px_30px_rgba(0,0,0,0.18)]">
      <ScrollReveal>
        <Ornament />
        <h2 className="mt-6 font-heading text-3xl font-semibold tracking-wide text-wine sm:text-4xl">
          Our Love Story
        </h2>
      </ScrollReveal>

      <ScrollReveal className="mx-auto mt-10 max-w-xl" delay={0.15}>
        <p className="font-body text-lg leading-relaxed text-wine-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          ullamcorper velit vitae felis tincidunt, a facilisis libero lacinia.
          Sed vehicula, sapien ac luctus ullamcorper, augue erat auctor justo,
          nec efficitur risus turpis non lacus. Integer at urna sit amet nisl
          tincidunt pellentesque sed ac orci. Vivamus id nulla vel ligula
          suscipit posuere vel in odio.
        </p>
      </ScrollReveal>
    </section>
  );
}
