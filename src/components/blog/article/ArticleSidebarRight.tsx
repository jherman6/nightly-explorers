import Link from "next/link";
import { WaitlistForm } from "@/components/waitlist/WaitlistForm";
import { getTraitsByNames } from "@/lib/constants";
import type { BlogPost } from "@/lib/blog/types";
import type { QuestTrait } from "@/types";

const SHIELD_CLIP_PATH = "polygon(50% 0%, 100% 18%, 100% 65%, 50% 100%, 0% 65%, 0% 18%)";

// Evergreen promotional set shown on every article — not tied to the
// specific post — to give readers a taste of the full 52-week curriculum.
const FEATURED_TRAIT_NAMES = ["Kindness", "Empathy", "Gratitude", "Confidence"];

interface ArticleSidebarRightProps {
  relatedPosts: BlogPost[];
  questChipTraits: QuestTrait[];
}

export function ArticleSidebarRight({ relatedPosts, questChipTraits }: ArticleSidebarRightProps) {
  const relatedPost = relatedPosts[0];
  const featuredTraits = getTraitsByNames(FEATURED_TRAIT_NAMES);

  return (
    <aside
      className="flex min-w-0 flex-col gap-6 md:sticky md:overflow-y-auto md:pr-1"
      style={{
        top: "calc(var(--nav-h) + 32px)",
        maxHeight: "calc(100vh - var(--nav-h) - 56px)",
      }}
    >
      {relatedPost ? (
        <div className="rounded-brand border border-[rgba(13,42,22,0.08)] bg-white p-[22px] shadow-[0_14px_32px_-24px_rgba(13,42,22,0.3)]">
          <h3 className="mb-3.5 flex items-center gap-2 font-display text-[16px] font-semibold text-forest-night">
            🗺️ Related Adventures
          </h3>
          <Link href={`/blog/${relatedPost.slug}`} className="block border-b border-[rgba(13,42,22,0.06)] py-2.5">
            <span className="text-[10.5px] font-extrabold uppercase tracking-[0.06em] text-explorer-green">
              {relatedPost.categories[0]}
            </span>
            <span className="mt-[3px] block text-[13.5px] font-bold leading-[1.4] text-forest-night">
              {relatedPost.title}
            </span>
          </Link>
          {questChipTraits.length > 0 ? (
            <div className="mt-1.5 flex flex-wrap gap-2">
              {questChipTraits.map((trait) => (
                <span
                  key={trait.name}
                  className="inline-flex items-center gap-1.5 rounded-full bg-forest-night px-[10px] py-[5px] text-[11.5px] font-bold text-moonbeam"
                >
                  {trait.icon} {trait.name}
                </span>
              ))}
            </div>
          ) : null}
          <Link href="/#quests" className="mt-2.5 inline-block text-[12.5px] font-extrabold text-river-blue">
            View all weekly quests →
          </Link>
        </div>
      ) : null}

      <div className="rounded-brand border border-[rgba(13,42,22,0.08)] bg-white p-[22px] shadow-[0_14px_32px_-24px_rgba(13,42,22,0.3)]">
        <h3 className="mb-3.5 flex items-center gap-2 font-display text-[16px] font-semibold text-forest-night">
          ⭐ Featured Character Traits
        </h3>
        <div className="grid grid-cols-2 gap-2.5">
          {featuredTraits.map((trait) => (
            <div key={trait.name} className="rounded-2xl bg-[rgba(13,42,22,0.03)] px-1.5 py-3.5 text-center">
              <div
                className="mx-auto mb-1.5 flex h-[38px] w-[34px] items-center justify-center bg-gradient-to-br from-amber-light to-amber-glow text-[14px]"
                style={{ clipPath: SHIELD_CLIP_PATH }}
              >
                {trait.icon}
              </div>
              <span className="text-[11.5px] font-bold text-forest-night">{trait.name}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="rounded-brand bg-forest-night p-[22px] text-moonbeam">
        <h3 className="mb-3.5 font-display text-[16px] font-semibold text-moonbeam">Continue the Adventure</h3>
        <p className="mb-3.5 text-[13.5px] leading-[1.6] text-[rgba(242,232,201,0.75)]">
          Get one evening-ready idea like this, delivered to your inbox.
        </p>
        <WaitlistForm source="blog-sidebar" layout="stacked" buttonLabel="Join the Adventure" />
      </div>
    </aside>
  );
}
