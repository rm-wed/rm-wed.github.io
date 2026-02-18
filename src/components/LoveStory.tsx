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
          Notre histoire a commencé il y a 15 ans, au Liban, où nos chemins se
          sont croisés pour la première fois. Le destin a voulu que nos routes se
          retrouvent quelques années plus tard à Paris. Depuis, nous avons
          parcouru ensemble les boulevards, flâné le long de la Seine, découvert
          des cafés cachés et des petits coins de la ville qui semblent
          n'exister que pour nous.
        </p>
        <p className="mt-4 font-body text-lg leading-relaxed text-wine-light">
          Plus récemment, nous avons poursuivi notre aventure dans le Sud de la
          France, à Montpellier, savourant les promenades au soleil, les rires
          et les paysages qui deviennent encore plus beaux lorsqu'on les vit à
          deux.
        </p>
        <p className="mt-4 font-body text-lg leading-relaxed text-wine-light">
          Aujourd'hui, nous sommes prêts à ouvrir un nouveau chapitre de notre
          histoire, et nous rêvons de le vivre entourés de ceux qui font battre
          nos cœurs. Nous avons hâte de célébrer notre amour avec vous, et de
          transformer ce jour en un souvenir lumineux, doux et éternel.
        </p>
      </ScrollReveal>
    </section>
  );
}
