import type { Metadata } from "next";
import { Treeline } from "@/components/ui/Treeline";
import { StoryReveal } from "@/components/ui/StoryReveal";
import { buildMetadata } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "About",
  description:
    "The story behind The Nightly Explorers — why one bedtime moment with a two-year-old turned into a nightly ritual for families.",
  path: "/about",
});

const teaserParagraphs = [
  "The idea for The Nightly Explorers started in a place many parents know well: bedtime.",
  "My daughter was around two years old, and like many children her age, she loved stories. In fact, she often wanted me to read the same books over and over again. While I loved those moments together, I began to notice something.",
  "The story would end, but the opportunity for connection didn't have to.",
  "I started wondering what would happen if the lessons inside those stories could be all throughout the evening. What if a simple conversation at dinner connected to the story we would read? What if that conversation inspired a small family activity? What if it helped parents reinforce positive behaviors in a way that felt natural instead of forced?",
  "At the same time, I was becoming increasingly aware of how much screen time was competing for our attention. Like many families, we were navigating a world filled with distractions. I wasn't looking for another app or another digital activity. I was looking for a way to create more meaningful moments together.",
  "When I explored existing resources, I found plenty of educational content and entertainment, but very little focused on helping families connect with one another. The lessons were there, but the relationships were often missing.",
  "That's why I created The Nightly Explorers.",
];

const restParagraphs = [
  "Each week focuses on a character trait like kindness, courage, empathy, gratitude, or resilience. Through conversation, shared activities, parenting insights, and bedtime stories, families are given simple ways to turn ordinary evenings into meaningful experiences.",
  "This mission is deeply personal to me.",
  "Growing up, I often wished for more connection and intentional family moments. Those experiences shaped how I think about parenting today. More than anything, I want my daughter to grow up feeling supported, understood, and connected to the people who love her most.",
  "I also want her to learn many of the life lessons that took me years to discover on my own—lessons about kindness, confidence, empathy, resilience, and character.",
  "The Nightly Explorers is my attempt to help families create those moments together.",
  "Not because parents need another thing on their to-do list.",
  "But because some of the most important lessons in life are learned during the small moments we share every day.",
  "My hope is that years from now, families won't remember every story they read or every challenge they completed.",
  "They'll remember the conversations they had, the traditions they built, and the feeling of being together.",
  "One evening at a time.",
];

export default function AboutPage() {
  return (
    <>
      <section className="relative bg-forest-night py-[150px]">
        <div className="mx-auto w-full max-w-container px-6 text-center">
          <p className="eyebrow mx-auto justify-center">about the founder</p>
          <h1 className="mx-auto mt-4 max-w-[640px] font-display text-[clamp(32px,5vw,52px)] font-semibold text-moonbeam">
            One evening at a time.
          </h1>
        </div>
      </section>

      <section className="relative bg-moonbeam py-[100px]">
        <Treeline fill="#F2E8C9" />
        <div className="mx-auto w-full max-w-[640px] px-6">
          <StoryReveal
            teaser={
              <div className="space-y-5 text-[16.5px] leading-[1.75] text-[#2c3b30]">
                {teaserParagraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
              </div>
            }
            rest={
              <div className="mt-5 space-y-5 text-[16.5px] leading-[1.75] text-[#2c3b30]">
                {restParagraphs.map((paragraph, i) => (
                  <p key={i}>{paragraph}</p>
                ))}
                <p className="pt-2 font-display text-[18px] italic text-forest-night">
                  — Joseph
                  <br />
                  Founder, The Nightly Explorers
                </p>
              </div>
            }
          />
        </div>
      </section>
    </>
  );
}
