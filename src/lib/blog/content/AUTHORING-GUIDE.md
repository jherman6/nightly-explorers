# Blog Article Content Guide

This is the checklist for every new article so it renders with the full
three-column template (reading trail, TOC, sidebars, dividers, pull quotes,
callouts) the same way `read-learn-sing.ts` and `screen-time-vs-reading.ts`
do. Nothing here is optional scaffolding — skip a step and that one piece
just won't appear for that article; it won't break the page.

## 1. Register the post in `posts.ts`

Every post entry needs:

```ts
characterTraits: ["Empathy", "Confidence"],  // pick 1–3 from QUEST_TRAITS below
```

Trait names must exactly match one of the 8 names in `QUEST_TRAITS`
(`src/lib/constants.ts`): Kindness, Courage, Empathy, Responsibility,
Resilience, Gratitude, Honesty, Confidence. These power the "Related
Character Traits" badges in the left sidebar and the quest chips in the
right sidebar. Skip this field and those two elements simply don't render
for that post — no error, just a quieter page.

## 2. Structure the content array in `content/<slug>.ts`

- **TOC and reading trail are automatic.** Every `h2` block becomes a TOC
  entry and a stop on the progress trail. Don't hand-write a TOC anywhere —
  if it's not an `h2`, it won't show up there.
- **Lede paragraphs are automatic too.** Whatever `p` blocks come before
  your first heading render larger, as the article's intro. No special
  flag needed — just don't put an `h2`/`h3` before the intro is done.
- **Chapter dividers** — add `{ type: "divider", icon: "🌿" }` between major
  `h2` sections. Aim for 2–3 per article, evenly spaced. Stick to the
  🌿 → 🧭 → ✦ icon order used in both existing articles so the rhythm feels
  consistent across the blog.
- **One pull quote** — `{ type: "pullquote", text: "..." }` — pull the
  single most quotable insight from a section you've just written. One per
  article is plenty; more starts to feel busy.
- **Three typed callouts** — one of each variant, in this order:
  ```ts
  { type: "callout", variant: "research", label: "🔬 What the Research Shows", text: "..." }
  { type: "callout", variant: "parent-tip", label: "💡 Parent Tip", text: "..." }
  { type: "callout", variant: "family-activity", label: "🧭 Family Activity", text: "..." }
  ```
  A callout with no `variant`/`label` still renders (defaults to the amber
  research-style look), so this is a nice-to-have for richness, not a
  requirement that'll break anything if you forget one.

## 3. Everything else is already handled

The `[slug]/page.tsx` template, sidebars, FAQ accordion, author bio, and
related-articles grid all work off whatever's in `posts.ts` and
`content/<slug>.ts` automatically — there's no per-article layout work
required beyond the two steps above.
