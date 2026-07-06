import Marquee from "@/components/Marquee";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import FilmGrain from "@/components/FilmGrain";

export default function Home() {
  return (
    <div className="page-shell">
      {/* Film grain — fixed overlay above everything */}
      <FilmGrain />

      {/* Sticky ticker bar — 44px */}
      <Marquee />

      {/* Header — logo + nav */}
      <Header />

      {/* Hero fills remaining viewport height */}
      <Hero />
    </div>
  );
}
