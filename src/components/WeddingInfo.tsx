import { useState } from "react";
import { useCountdown } from "../hooks/useCountdown";
import { WEDDING_DATE } from "../config";
import { ScrollReveal } from "./ScrollReveal";
import { Ornament } from "./Ornament";
import { RsvpModal } from "./RsvpModal";

interface Props {
  plusOneAllowed: boolean;
  mairieInvited: boolean;
}

export function WeddingInfo({ plusOneAllowed, mairieInvited }: Props) {
  const time = useCountdown(WEDDING_DATE);
  const [rsvpOpen, setRsvpOpen] = useState(false);

  return (
    <section className="relative z-10 bg-parchment px-6 py-20 text-center shadow-[0_-10px_30px_rgba(0,0,0,0.18),0_10px_30px_rgba(0,0,0,0.18)]">
      {/* Heading */}
      <ScrollReveal>
        <Ornament />
        <h2 className="mt-6 font-heading text-3xl font-semibold tracking-wide text-wine sm:text-4xl">
          Nous nous marions !
        </h2>
      </ScrollReveal>

      {/* Countdown */}
      <ScrollReveal className="mt-12" delay={0.15}>
        <div className="flex justify-center gap-4">
          <CountdownUnit value={time.days} label="Jours" />
          <CountdownUnit value={time.hours} label="Heures" />
          <CountdownUnit value={time.minutes} label="Min" />
          <CountdownUnit value={time.seconds} label="Sec" />
        </div>
      </ScrollReveal>

      {/* Date + Location pill */}
      <ScrollReveal className="mt-10" delay={0.25}>
        <div className="inline-flex items-center rounded-full border border-rose/30 bg-parchment-50 px-7 py-3 shadow-sm">
          <span className="font-body text-base font-medium text-wine">
            13 · 06 · 2026
          </span>
          <span className="mx-4 inline-block h-4 w-px bg-rose/40" />
          <span className="font-body text-base font-medium text-wine">
            Montpellier
          </span>
        </div>
      </ScrollReveal>

      {/* RSVP deadline */}
      <ScrollReveal className="mt-10" delay={0.35}>
        <div className="mx-auto max-w-sm rounded-lg border border-rose/50 bg-rose/10 px-5 py-3 shadow-sm">
          <p className="font-heading text-base font-semibold tracking-wide text-wine sm:text-lg">
            Merci de confirmer votre présence
            <br />
            avant le{" "}
            <span className="underline decoration-rose decoration-2 underline-offset-4">
              27 mai 2026
            </span>
          </p>
        </div>
      </ScrollReveal>

      {/* RSVP */}
      <ScrollReveal className="mt-6" delay={0.4}>
        <button
          type="button"
          onClick={() => setRsvpOpen(true)}
          className="rsvp-pulse rounded-full bg-rose px-14 py-4 font-heading text-xl font-semibold tracking-widest text-white transition-colors duration-300 hover:bg-rose-dark"
        >
          Réserver
        </button>
      </ScrollReveal>

      <RsvpModal
        open={rsvpOpen}
        onClose={() => setRsvpOpen(false)}
        plusOneAllowed={plusOneAllowed}
        mairieInvited={mairieInvited}
      />
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
