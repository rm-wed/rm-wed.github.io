import { ScrollReveal } from "./ScrollReveal";
import { Ornament } from "./Ornament";

interface Venue {
  image: string;
  name: string;
  address: string;
  schedule: string[];
}

const venues: Venue[] = [
  {
    image: "/images/montpellier_mairie.jpg",
    name: "Mairie de Montpellier",
    address: "125 rue de blaabla",
    schedule: ["9h – 12h"],
  },
  {
    image: "/images/chateau_montpellier.jpg",
    name: "Château de Lambda",
    address: "222 rue de blabla",
    schedule: [
      "16h – 18h  Welcome Apéro",
      "18h – 20h  Dinner",
      "20h – 22h  Dance",
    ],
  },
];

export function Schedule() {
  return (
    <section className="relative z-10 bg-parchment px-6 py-20 text-center shadow-[0_-10px_30px_rgba(0,0,0,0.18),0_10px_30px_rgba(0,0,0,0.18)]">
      <ScrollReveal>
        <Ornament />
        <h2 className="mt-6 font-heading text-3xl font-semibold tracking-wide text-wine sm:text-4xl">
          Schedule
        </h2>
      </ScrollReveal>

      <div className="mx-auto mt-14 flex max-w-lg flex-col gap-10">
        {venues.map((v, i) => (
          <ScrollReveal key={v.name} delay={0.15 * i}>
            <VenueCard venue={v} />
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}

function VenueCard({ venue }: { venue: Venue }) {
  return (
    <div className="overflow-hidden rounded-2xl border border-rose/15 bg-parchment-50 shadow-lg">
      <img
        src={venue.image}
        alt={venue.name}
        className="h-56 w-full object-cover"
      />

      <div className="px-6 py-6">
        <h3 className="font-heading text-xl font-semibold text-wine">
          {venue.name}
        </h3>
        <p className="mt-1 font-body text-base text-wine-light">
          {venue.address}
        </p>
        <div className="mt-4 space-y-1">
          {venue.schedule.map((line) => (
            <p key={line} className="font-body text-sm text-wine-light">
              {line}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
}
