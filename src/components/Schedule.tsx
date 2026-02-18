import { ScrollReveal } from "./ScrollReveal";
import { Ornament } from "./Ornament";

interface ScheduleItem {
  time: string;
  description: string;
}

interface Venue {
  image: string;
  name: string;
  address: string;
  mapsUrl: string;
  schedule: ScheduleItem[];
}

const venues: Venue[] = [
  {
    image: "/images/montpellier_mairie.jpg",
    name: "Mairie de Montpellier",
    address: "Salle Harvey Milk\n1 place Georges Frêche\n34000 Montpellier",
    mapsUrl: "https://maps.google.com/?q=Mairie+de+Montpellier+1+place+Georges+Frêche+34000+Montpellier",
    schedule: [{ time: "14h00", description: "On se dit \"oui\" à la mairie 💍" }],
  },
  {
    image: "/images/chateau_montpellier.jpg",
    name: "Château Paloma",
    address: "Chem. du Mas de Causse\nÀ l'Estelle, 34970 Lattes",
    mapsUrl: "https://maps.google.com/?q=Chateau+Paloma+Lattes",
    schedule: [
      { time: "17h00", description: "Que la fête commence au Château Paloma !\nArrivée triomphale des mariés, gourmandises à savourer \net bulles à partager dans l'espace privé Lagrange" },
      { time: "19h00 – 21h00", description: "Dîner convivial et raffiné au restaurant du Château Paloma" },
      { time: "21h00 – 1h00", description: "La soirée s'enflamme ! \nDanse, musique et rires pour célébrer ensemble jusqu'au bout de la nuit" },
    ],
  },
];

export function Schedule() {
  return (
    <section className="relative z-10 bg-parchment px-6 py-20 text-center shadow-[0_-10px_30px_rgba(0,0,0,0.18),0_10px_30px_rgba(0,0,0,0.18)]">
      <ScrollReveal>
        <Ornament />
        <h2 className="mt-6 font-heading text-3xl font-semibold tracking-wide text-wine sm:text-4xl">
          Programme
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
        className="vintage h-56 w-full object-cover"
      />

      <div className="px-14 py-6">
        <h3 className="font-heading text-xl font-semibold text-wine">
          {venue.name}
        </h3>

        {/* Clickable address */}
        <a
          href={venue.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-2 inline-flex items-center gap-1.5 font-body text-base text-wine-light underline decoration-rose/30 underline-offset-2 transition-colors hover:text-wine hover:decoration-rose/60"
        >
          <svg
            className="h-4 w-4 shrink-0 text-rose/70"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="whitespace-pre-line text-left">{venue.address}</span>
        </a>

        {/* Separator */}
        <div className="mx-auto my-4 h-px w-16 bg-rose/25" />

        {/* Schedule */}
        <div className="space-y-4 text-center">
          {venue.schedule.map((item) => (
            <div key={item.time} className="flex flex-col items-center">
              <span className="font-heading text-sm font-semibold text-wine">
                {item.time}
              </span>
              {item.description && (
                <span className="mt-0.5 font-body text-sm leading-relaxed text-wine-light whitespace-pre-line">
                  {item.description}
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
