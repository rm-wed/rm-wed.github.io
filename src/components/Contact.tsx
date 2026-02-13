import { ScrollReveal } from "./ScrollReveal";

const contacts = [
  { name: "Rim Kassab", tel: "+33628479752", display: "+33 6 28 47 97 52" },
  {
    name: "Mohamad Sawalhi",
    tel: "+33672046068",
    display: "+33 6 72 04 60 68",
  },
];

export function Contact() {
  return (
    <section className="relative z-10 bg-parchment px-6 py-20 pb-[calc(5rem+env(safe-area-inset-bottom))] text-center shadow-[0_-10px_30px_rgba(0,0,0,0.18),0_10px_30px_rgba(0,0,0,0.18)]">
      <ScrollReveal>
        <h2 className="font-heading text-2xl font-semibold tracking-wide text-wine sm:text-3xl">
          Contact Us
        </h2>
      </ScrollReveal>

      <div className="mx-auto mt-10 flex max-w-sm flex-col gap-4">
        {contacts.map((c, i) => (
          <ScrollReveal key={c.tel} delay={0.12 * i}>
            <a
              href={`tel:${c.tel}`}
              className="flex items-center justify-center gap-3 rounded-full border border-rose/20 bg-parchment-50 px-6 py-4 shadow-md transition-all duration-300 hover:shadow-lg active:scale-[.97]"
            >
              {/* Phone icon */}
              <svg
                className="h-5 w-5 shrink-0 text-rose"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.09 5.18 2 2 0 0 1 5.07 3h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.34a2 2 0 0 1-.45 2.11L9.05 10.4a16 16 0 0 0 6.55 6.55l1.23-1.25a2 2 0 0 1 2.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0 1 22 16.92Z" />
              </svg>
              <span className="font-body text-base font-medium text-wine">
                {c.name}
              </span>
              <span className="font-body text-sm text-wine-light">
                {c.display}
              </span>
            </a>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
