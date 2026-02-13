import { REGISTRY_URL } from "../config";
import { ScrollReveal } from "./ScrollReveal";
import { Ornament } from "./Ornament";

export function Registry() {
  return (
    <section className="relative z-10 bg-parchment px-6 py-20 text-center shadow-[0_-10px_30px_rgba(0,0,0,0.18),0_10px_30px_rgba(0,0,0,0.18)]">
      <ScrollReveal>
        <Ornament />
        <h2 className="mt-6 font-heading text-3xl font-semibold tracking-wide text-wine sm:text-4xl">
          Registry
        </h2>
      </ScrollReveal>

      <ScrollReveal className="mx-auto mt-10 max-w-xl" delay={0.15}>
        <p className="font-body text-lg leading-relaxed text-wine-light">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Your
          generosity means the world to us. More details to come.
        </p>
      </ScrollReveal>

      <ScrollReveal className="mt-10" delay={0.25}>
        <a
          href={REGISTRY_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-rose px-12 py-3.5 font-heading text-lg font-medium tracking-wide text-white shadow-md transition-all duration-300 hover:bg-rose-dark hover:shadow-lg active:scale-[.97]"
        >
          Contribute
        </a>
      </ScrollReveal>
    </section>
  );
}
