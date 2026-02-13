import { Hero } from "./components/Hero";
import { WeddingInfo } from "./components/WeddingInfo";
import { LoveStory } from "./components/LoveStory";
import { Schedule } from "./components/Schedule";
import { Registry } from "./components/Registry";
import { Contact } from "./components/Contact";
import { PhotoDivider } from "./components/PhotoDivider";

export default function App() {
  return (
    <main className="flex min-h-dvh flex-col">
      {/* 1 — Hero: full-screen couple photo */}
      <Hero />

      {/* 2 — Countdown, date pill, RSVP */}
      <WeddingInfo />

      {/* Photo divider → love story */}
      <PhotoDivider src="/images/landscape_1.jpg" />

      {/* 3 — Our love story */}
      <LoveStory />

      {/* Photo divider → schedule */}
      <PhotoDivider src="/images/landscape_2.JPG" />

      {/* 4 — Schedule */}
      <Schedule />

      {/* Photo divider → registry */}
      <PhotoDivider src="/images/landscape_3.jpg" />

      {/* 5 — Registry */}
      <Registry />

      {/* Final photo with "See you!" overlay */}
      <PhotoDivider src="/images/see_you.jpg" overlayText="See you!" />

      {/* 6 — Contact */}
      <Contact />
    </main>
  );
}
