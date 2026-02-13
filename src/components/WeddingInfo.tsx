import { useCountdown } from "../hooks/useCountdown";
import { WEDDING_DATE } from "../config";
import { ScrollReveal } from "./ScrollReveal";
import { Ornament } from "./Ornament";

export function WeddingInfo() {
  const time = useCountdown(WEDDING_DATE);

  return (
    <section className="relative z-10 bg-parchment px-6 py-20 text-center shadow-[0_-10px_30px_rgba(0,0,0,0.18),0_10px_30px_rgba(0,0,0,0.18)]">
      {/* Heading */}
      <ScrollReveal>
        <Ornament />
        <h2 className="mt-6 font-heading text-3xl font-semibold tracking-wide text-wine sm:text-4xl">
          We are getting married!
        </h2>
      </ScrollReveal>

      {/* Countdown */}
      <ScrollReveal className="mt-12" delay={0.15}>
        <div className="flex justify-center gap-4">
          <CountdownUnit value={time.days} label="Days" />
          <CountdownUnit value={time.hours} label="Hours" />
          <CountdownUnit value={time.minutes} label="Min" />
          <CountdownUnit value={time.seconds} label="Sec" />
        </div>
      </ScrollReveal>

      {/* Date + Location pill */}
      <ScrollReveal className="mt-10" delay={0.25}>
        <div className="inline-flex items-center rounded-full border border-rose/30 bg-parchment-50 px-7 py-3 shadow-sm">
          <span className="font-body text-base font-medium text-wine">
            30 · 05 · 2026
          </span>
          <span className="mx-4 inline-block h-4 w-px bg-rose/40" />
          <span className="font-body text-base font-medium text-wine">
            Montpellier
          </span>
        </div>
      </ScrollReveal>

      {/* RSVP */}
      <ScrollReveal className="mt-10" delay={0.35}>
        <button
          type="button"
          className="rounded-full bg-rose px-12 py-3.5 font-heading text-lg font-medium tracking-wide text-white shadow-md transition-all duration-300 hover:bg-rose-dark hover:shadow-lg active:scale-[.97]"
        >
          RSVP
        </button>
      </ScrollReveal>
    </section>
  );
}

/* ─── Small countdown tile ─── */

function CountdownUnit({ value, label }: { value: number; label: string }) {
  return (
    <div className="flex flex-col items-center gap-2">
      <div className="flex h-[4.2rem] w-[4.2rem] items-center justify-center rounded-xl border border-rose/20 bg-parchment-50 shadow-md">
        <span className="font-heading text-2xl font-semibold text-wine">
          {String(value).padStart(2, "0")}
        </span>
      </div>
      <span className="font-body text-xs uppercase tracking-widest text-wine-light">
        {label}
      </span>
    </div>
  );
}
