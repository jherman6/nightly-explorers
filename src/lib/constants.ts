import type {
  AdventurePage,
  Benefit,
  Checkpoint,
  NavLink,
  QuestTrait,
  WaypointSection,
} from "@/types";

export const SITE = {
  name: "The Nightly Explorers",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://nightlyexplorers.com",
  description:
    "Turn bedtime into a meaningful family adventure. A nightly conversation, challenge, parent insight and story, built around one character trait a week.",
  founder: "Joseph",
  instagram: "https://instagram.com",
  facebook: "https://facebook.com",
};

export const NAV_LINKS: NavLink[] = [
  { href: "/#solution", label: "How It Works" },
  { href: "/#quests", label: "Weekly Quests" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "Our Story" },
];

export const FOOTER_LINKS: NavLink[] = [
  { href: "/about", label: "About" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/ai-policy", label: "AI Policy" },
  { href: "/cookies", label: "Cookies" },
];

export const WAYPOINTS: WaypointSection[] = [
  { id: "hero", label: "Begin" },
  { id: "problem", label: "The Problem" },
  { id: "solution", label: "The Way" },
  { id: "quests", label: "Quests" },
  { id: "sample", label: "Sample Week" },
  { id: "benefits", label: "Becoming" },
  { id: "mission", label: "Mission" },
  { id: "final", label: "Tonight" },
];

export const PROBLEM_POINTS = [
  {
    icon: "⏳",
    title: "Rushed bedtimes",
    description:
      "The day ends in a scramble, and the last few minutes together get swallowed by logistics.",
  },
  {
    icon: "💬",
    title: "Fewer real conversations",
    description:
      '"How was school?" gets a shrug. Deeper questions rarely make it into the routine.',
  },
  {
    icon: "📱",
    title: "Growing screen dependence",
    description:
      "Screens fill the quiet moments that used to be for talking, noticing, and connecting.",
  },
  {
    icon: "🌱",
    title: "No habit for building character",
    description:
      "Parents care deeply about who their kids become — but there's no simple, repeatable way to work on it.",
  },
];

export const CHECKPOINTS: Checkpoint[] = [
  {
    icon: "💬",
    title: "Conversation",
    description:
      "A thoughtful dinner question opens the night's theme and gets everyone talking.",
  },
  {
    icon: "🧭",
    title: "Challenge",
    description:
      "A small shared activity puts that night's lesson into action together.",
  },
  {
    icon: "💡",
    title: "Parent Insight",
    description:
      "A practical, one-minute tip helps you reinforce the moment without overthinking it.",
  },
  {
    icon: "📖",
    title: "Story",
    description:
      "A short bedtime story ties the whole evening together and sends them off dreaming.",
  },
];

export const QUEST_TRAITS: QuestTrait[] = [
  { icon: "🤝", name: "Kindness" },
  { icon: "🦁", name: "Courage" },
  { icon: "💛", name: "Empathy" },
  { icon: "🗝️", name: "Responsibility" },
  { icon: "🌳", name: "Resilience" },
  { icon: "🍃", name: "Gratitude" },
  { icon: "🕯️", name: "Honesty" },
  { icon: "⭐", name: "Confidence" },
];

export const SAMPLE_ADVENTURE: AdventurePage[] = [
  {
    icon: "💬",
    tag: "Conversation",
    title: "Dinner question",
    body: '"What\'s one small thing you could do tomorrow to make someone\'s day a little better?"',
    timing: "At dinner",
  },
  {
    icon: "🧭",
    tag: "Challenge",
    title: "Kindness note",
    body: "Write a kind note for someone in your family and leave it somewhere they'll find it by surprise.",
    timing: "After dinner",
  },
  {
    icon: "💡",
    tag: "Parent Insight",
    title: "Catch it, don't just teach it",
    body: "Kindness sticks best when it's noticed in the moment — try narrating small kind acts as you see them happen during the evening.",
    timing: "For you, the parent",
  },
  {
    icon: "📖",
    tag: "Story",
    title: "The Lantern Who Shared Her Light",
    body: "A small lantern dims her own glow to guide a lost firefly home through the dark — and discovers the forest only grows brighter when light is shared.",
    timing: "At bedtime",
  },
];

export const BENEFITS: Benefit[] = [
  {
    icon: "💬",
    title: "Better conversations",
    description: "Real talk replaces small talk, most nights of the week.",
  },
  {
    icon: "💛",
    title: "More empathy",
    description: "Kids practice seeing things from someone else's side.",
  },
  {
    icon: "⭐",
    title: "Increased confidence",
    description: "Small wins, repeated weekly, add up to real self-trust.",
  },
  {
    icon: "🧠",
    title: "Emotional intelligence",
    description: "Naming feelings becomes a normal part of the day.",
  },
  {
    icon: "🏡",
    title: "Lasting family traditions",
    description:
      "A ritual the whole family looks forward to, not another task.",
  },
  {
    icon: "📖",
    title: "Shared memories",
    description:
      "Stories and challenges become the inside jokes of childhood.",
  },
];
