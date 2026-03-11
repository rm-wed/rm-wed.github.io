import { ScrollReveal } from "./ScrollReveal";
import { Ornament } from "./Ornament";

export function LoveStory() {
  return (
    <section className="relative z-10 bg-parchment px-6 py-20 text-center shadow-[0_-10px_30px_rgba(0,0,0,0.18),0_10px_30px_rgba(0,0,0,0.18)]">
      <ScrollReveal>
        <Ornament />
        <h2 className="mt-6 font-heading text-3xl font-semibold tracking-wide text-wine sm:text-4xl">
          Notre Histoire
        </h2>
      </ScrollReveal>

      <ScrollReveal className="mx-auto mt-10 max-w-xl" delay={0.15}>
        <p className="font-body text-lg leading-relaxed text-wine-light">
        Notre histoire a commencé il y a quinze ans, au Liban, lorsque nos chemins se sont croisés pour la première fois. Le destin a voulu que nos routes se retrouvent, des années plus tard, en France.
        </p>
        <p className="mt-4 font-body text-lg leading-relaxed text-wine-light">
        Depuis, nous avons parcouru ensemble des boulevards, découvert des cafés cachés et de petits coins secrets, partagé des promenades au soleil et de nombreux éclats de rire.

        </p>
        <p className="mt-4 font-body text-lg leading-relaxed text-wine-light">
        Aujourd’hui, nous sommes prêts à ouvrir un nouveau chapitre de notre histoire. Nous rêvons de le vivre entourés de celles et ceux qui font battre nos cœurs.
        </p>
        <p className="mt-4 font-body text-lg leading-relaxed text-wine-light">
        Nous avons hâte de célébrer notre amour avec vous et de faire de ce jour un souvenir lumineux, doux et inoubliable.
        </p>
      </ScrollReveal>
    </section>
  );
}
