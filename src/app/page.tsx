import { Benefits } from "@/components/sections/Benefits";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Hero } from "@/components/sections/Hero";
import { Mission } from "@/components/sections/Mission";
import { Problem } from "@/components/sections/Problem";
import { Quests } from "@/components/sections/Quests";
import { SampleAdventure } from "@/components/sections/SampleAdventure";
import { Solution } from "@/components/sections/Solution";
import { TrailProgress } from "@/components/layout/TrailProgress";

export default function HomePage() {
  return (
    <>
      <TrailProgress />
      <Hero />
      <Problem />
      <Solution />
      <Quests />
      <SampleAdventure />
      <Benefits />
      <Mission />
      <FinalCTA />
    </>
  );
}
