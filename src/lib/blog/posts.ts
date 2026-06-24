import { JOSEPH } from "@/lib/blog/authors";
import { readLearnSingContent } from "@/lib/blog/content/read-learn-sing";
import { screenTimeVsReadingContent } from "@/lib/blog/content/screen-time-vs-reading";
import { bedtimeConversationsContent } from "@/lib/blog/content/bedtime-conversations-with-children";
import { kindnessActivitiesContent } from "@/lib/blog/content/kindness-activities-for-kids";
import { familyTraditionsContent } from "@/lib/blog/content/family-traditions-for-children";
import { emotionalIntelligenceContent } from "@/lib/blog/content/emotional-intelligence-for-kids";
import { characterDevelopmentContent } from "@/lib/blog/content/character-development-for-children";
import { benefitsOfReadingContent } from "@/lib/blog/content/benefits-of-reading-to-children";
import { gratitudeActivitiesContent } from "@/lib/blog/content/gratitude-activities-for-kids";
import { screenFreeActivitiesContent } from "@/lib/blog/content/screen-free-activities-for-kids";
import type { BlogPost, ContentBlock } from "@/lib/blog/types";

export interface TocItem {
  id: string;
  label: string;
}

/** Derives the article TOC straight from its h2 content blocks, so the
 * sidebar/accordion TOC can never drift out of sync with the actual
 * headings rendered in the article body. */
export function getTocItems(content: ContentBlock[]): TocItem[] {
  return content
    .filter((block): block is { type: "h2"; text: string; id: string } => block.type === "h2")
    .map((block) => ({ id: block.id, label: block.text }));
}

export const BLOG_POSTS: BlogPost[] = [
  {
    slug: "read-learn-sing-stories-conversation-music",
    title:
      "Read, Learn, Sing: Why Combining Stories, Conversation, and Music Helps Young Children Thrive",
    metaTitle:
      "Read, Learn, Sing: How Stories, Talk & Music Help Kids Thrive",
    metaDescription:
      "Why combining bedtime stories, conversation, and music does more for a young child's language, emotional development, and memory than any one alone — explained simply.",
    excerpt:
      "Reading, talking, and singing aren't separate evening activities — research on early childhood development suggests they work best as a combination. Here's the evidence behind why.",
    categories: ["Reading", "Family Connection"],
    tags: [
      "bedtime stories for kids",
      "reading with children",
      "social emotional learning at home",
      "family bonding activities",
    ],
    focusKeyword: "bedtime stories for kids",
    secondaryKeywords: [
      "reading with children",
      "emotional intelligence for kids",
      "meaningful family conversations",
      "child development activities",
    ],
    publishedAt: "2026-05-12",
    updatedAt: "2026-06-02",
    readingTime: "9 min read",
    featured: true,
    author: JOSEPH,
    content: readLearnSingContent,
    faqs: [
      {
        question: "What age should I start reading aloud to my child?",
        answer:
          "Most pediatric and literacy organizations recommend starting from infancy — even before a baby understands the words, hearing your voice and the rhythm of language supports early brain development. The habit matters more than the timing, so it's never too late to start if you haven't yet.",
      },
      {
        question: "Does it matter if I read the same book over and over?",
        answer:
          "Not at all — repetition is genuinely useful. Repeated readings help children notice new details, predict what's coming (which builds comprehension), and move vocabulary into long-term memory. A well-worn favorite is doing real developmental work, not just keeping the peace at bedtime.",
      },
      {
        question: "What if I'm not a confident singer?",
        answer:
          "It doesn't matter to your child. The bonding and language benefits of singing come from the rhythm, repetition, and shared moment, not vocal quality. A simple, off-key lullaby sung consistently does more than a polished recording played on a speaker.",
      },
      {
        question: "How long should our nightly story-conversation-song routine take?",
        answer:
          "There's no minimum threshold in the research — even 10–15 consistent minutes a night is enough to build the habit and capture most of the benefit. Consistency matters more than duration.",
      },
      {
        question: "What's the single best thing I can do if I only have a few minutes?",
        answer:
          "Make it a conversation, not a monologue. Whether you're reading, singing, or just talking, asking a question and genuinely listening to the answer is the ingredient most consistently linked to language and emotional development — more than any specific book or song.",
      },
    ],
    relatedSlugs: [
      "screen-time-vs-reading-childs-brain",
      "benefits-of-reading-to-children",
      "bedtime-conversations-with-children",
    ],
    characterTraits: ["Empathy", "Confidence"],
  },
  {
    slug: "screen-time-vs-reading-childs-brain",
    title: "Screen Time vs. Reading: What Happens Inside a Child's Brain?",
    metaTitle: "Screen Time vs. Reading: What Happens in a Child's Brain?",
    metaDescription:
      "A balanced, evidence-based look at how screen time and reading differently affect a young child's attention, language, sleep, and emotional development.",
    excerpt:
      "Screen time and reading engage a young child's brain in genuinely different ways — but the honest answer is more nuanced than \"good\" or \"bad.\" Here's what the research actually shows.",
    categories: ["Screen Time", "Child Development"],
    tags: [
      "screen time alternatives",
      "reducing screen time",
      "toddler behavior",
      "preschool emotional development",
    ],
    focusKeyword: "screen time alternatives",
    secondaryKeywords: [
      "reducing screen time",
      "reading comprehension for young children",
      "parenting tips for toddlers",
      "child development activities",
    ],
    publishedAt: "2026-05-26",
    updatedAt: "2026-06-10",
    readingTime: "10 min read",
    featured: false,
    author: JOSEPH,
    content: screenTimeVsReadingContent,
    faqs: [
      {
        question: "Is all screen time bad for young children?",
        answer:
          "No — the research doesn't support a blanket \"bad\" verdict. The clearest concerns are around solo screen time for children under two, very fast-paced content, and screens right before bed. Co-viewed, high-quality content with a parent who talks about it carries far fewer of those concerns.",
      },
      {
        question: "How much screen time is appropriate for a toddler or preschooler?",
        answer:
          "General pediatric guidance suggests minimal to no screen time under 18–24 months (outside video calls), and roughly an hour or less of high-quality programming per day for preschoolers, ideally co-viewed. Treat this as a helpful general guideline rather than a strict rule for every family and situation.",
      },
      {
        question: "Does watching educational shows count differently than entertainment shows?",
        answer:
          "To some degree, yes — content quality matters. But \"educational\" labeling alone doesn't guarantee a show is well-designed for learning. Slower pacing, clear narrative structure, and content a parent can talk about afterward tend to matter more than the educational label itself.",
      },
      {
        question: "Why does my child seem cranky after screen time but not after reading?",
        answer:
          "This is commonly reported by parents, and a reasonable explanation is that fast-paced, highly stimulating content can leave a child overstimulated without having practiced self-soothing, since the screen supplied the excitement and resolution itself. Reading, by contrast, is paced by the child and caregiver, which tends to be easier to wind down from.",
      },
      {
        question: "Is it okay to use screens during stressful moments, like a long car ride?",
        answer:
          "Using a screen occasionally as a practical tool isn't the same as a daily habit, and the research doesn't suggest occasional situational use causes harm. The patterns linked to developmental concerns involve frequent, heavy, solo use — not an occasional screen during a long drive or a sick day.",
      },
    ],
    relatedSlugs: [
      "read-learn-sing-stories-conversation-music",
      "screen-free-activities-for-kids",
    ],
    characterTraits: ["Responsibility", "Resilience"],
  },
  {
    slug: "bedtime-conversations-with-children",
    title: "The Hidden Power of Bedtime Conversations: Why Five Minutes Matters More Than You Think",
    metaTitle: "Bedtime Conversations With Children: Why 5 Minutes Matters",
    metaDescription:
      "Why five minutes of real bedtime conversation does more for your child's brain and your bond than almost anything else in the day — and how to do it well.",
    excerpt:
      "Bedtime is a uniquely receptive window for connection. Here's what the research says about why five focused minutes of conversation matters more than people realize — and how to make the most of them.",
    categories: ["Bedtime Routines", "Family Connection"],
    tags: [
      "bedtime routine ideas",
      "connecting with your child",
      "talking to kids about their day",
      "bedtime conversation starters",
    ],
    focusKeyword: "bedtime conversations with children",
    secondaryKeywords: [
      "bedtime routine for kids",
      "talking to your child at bedtime",
      "conversation starters for kids",
      "connecting with children before bed",
    ],
    publishedAt: "2026-06-15",
    updatedAt: "2026-06-15",
    readingTime: "7 min read",
    featured: false,
    author: JOSEPH,
    content: bedtimeConversationsContent,
    faqs: [
      {
        question: "What if my child doesn't want to talk at bedtime?",
        answer:
          "That's common, especially at first — some children need a few nights of low-pressure repetition before they open up. Try narrating something specific you noticed during the day instead of asking a direct question; it often works better than waiting for them to volunteer something.",
      },
      {
        question: "How long should a bedtime conversation actually be?",
        answer:
          "There's no required length — two to five minutes of genuine back-and-forth does real work. The research points to the quality of the exchange, not its duration, so a short, attentive conversation is more valuable than a long, distracted one.",
      },
      {
        question: "What if our bedtime routine already feels rushed and chaotic?",
        answer:
          "Start by attaching the conversation to a moment that's already happening, like right after the last book or right before the light goes off, rather than adding a new step. A consistent, tiny window is easier to protect than an additional ritual.",
      },
      {
        question: "Does this work for toddlers who aren't talking much yet?",
        answer:
          "Yes — with toddlers, you can narrate the day yourself (\"You had so much fun at the park today\") and leave space for them to respond however they can, even nonverbally. You're building the same habit of attentive exchange, just at their current stage.",
      },
    ],
    relatedSlugs: [
      "read-learn-sing-stories-conversation-music",
      "family-traditions-for-children",
      "emotional-intelligence-for-kids",
    ],
    characterTraits: ["Empathy", "Confidence"],
  },
  {
    slug: "kindness-activities-for-kids",
    title: "How to Teach Kindness to Young Children Without Lectures or Punishments",
    metaTitle: "Kindness Activities for Kids (Without Lectures)",
    metaDescription:
      "Lectures and forced apologies rarely build real kindness. Here's what the research says actually works, plus simple kindness activities for kids by age.",
    excerpt:
      "Kindness isn't built through lectures — it's modeled, practiced, and noticed. Here's the research behind what actually grows kindness in young children, and simple activities to try by age.",
    categories: ["Character Development", "Parenting"],
    tags: [
      "teaching kindness to kids",
      "empathy activities for kids",
      "positive parenting",
      "raising kind children",
    ],
    focusKeyword: "kindness activities for kids",
    secondaryKeywords: [
      "teaching empathy to children",
      "how to raise a kind child",
      "kindness lessons for preschoolers",
      "positive discipline kindness",
    ],
    publishedAt: "2026-06-16",
    updatedAt: "2026-06-16",
    readingTime: "7 min read",
    featured: false,
    author: JOSEPH,
    content: kindnessActivitiesContent,
    faqs: [
      {
        question: "Should I make my child apologize even if they don't mean it?",
        answer:
          "A forced apology teaches compliance more than kindness. It's usually more effective to first ask what the other person might be feeling, then let an apology follow once your child actually understands the impact — even if that takes a few extra minutes.",
      },
      {
        question: "What if my child is naturally shy or reserved about showing kindness?",
        answer:
          "Kindness doesn't have to be expressive to be real. A quiet child who notices a friend is sad and sits quietly beside them is showing just as much kindness as one who says something out loud — narrate and notice both equally.",
      },
      {
        question: "How should I handle unkindness specifically toward a sibling?",
        answer:
          "Sibling conflict is often less about unkindness and more about competition for attention or fairness. Address the specific moment calmly, and look for separate opportunities to notice sibling kindness when it happens, so it isn't only discussed in the context of conflict.",
      },
      {
        question: "At what age can children start understanding empathy?",
        answer:
          "Basic empathic responses — comforting a crying peer — can appear before age two, but true perspective-taking develops gradually through the preschool years as theory of mind matures, typically strengthening noticeably between ages four and six.",
      },
    ],
    relatedSlugs: [
      "character-development-for-children",
      "gratitude-activities-for-kids",
      "emotional-intelligence-for-kids",
    ],
    characterTraits: ["Kindness", "Empathy"],
  },
  {
    slug: "family-traditions-for-children",
    title: "Building Family Traditions That Children Remember for a Lifetime",
    metaTitle: "Family Traditions for Children That Actually Last",
    metaDescription:
      "The research on family rituals shows it's repetition, not production value, that builds a child's resilience and identity. How to build traditions that stick.",
    excerpt:
      "Children rarely remember the most elaborate family moments — they remember the small, repeated ones. Here's the research behind why family traditions matter, and how to build ones that actually last.",
    categories: ["Family Connection", "Parenting"],
    tags: [
      "family traditions ideas",
      "family rituals for kids",
      "building family connection",
      "family bonding activities",
    ],
    focusKeyword: "family traditions for children",
    secondaryKeywords: [
      "family rituals and routines",
      "fun family traditions to start",
      "family bonding ideas",
      "creating family memories",
    ],
    publishedAt: "2026-06-17",
    updatedAt: "2026-06-17",
    readingTime: "7 min read",
    featured: false,
    author: JOSEPH,
    content: familyTraditionsContent,
    faqs: [
      {
        question: "What if our family doesn't have any traditions yet?",
        answer:
          "It's rarely too late to start, and you likely have more raw material than you think — look for something you already do most weeks and simply name it and repeat it on purpose. Most traditions begin as accidents that got noticed.",
      },
      {
        question: "How many traditions should a family have?",
        answer:
          "There's no magic number — a handful of small, consistent traditions tend to matter more than a long list of occasional ones. Quality and repetition outweigh quantity here.",
      },
      {
        question: "What if my child resists a tradition we've started?",
        answer:
          "Resistance is often about control rather than the tradition itself. Letting your child help shape or adjust part of it — the menu, the song, the order of events — usually restores their buy-in without abandoning the ritual altogether.",
      },
      {
        question: "Can traditions work in blended or co-parenting households?",
        answer:
          "Yes, and small, portable traditions often matter even more here, since they can travel between homes and stay constant even when other circumstances are changing. A shared phrase or song can anchor a child across two households just as well as one.",
      },
    ],
    relatedSlugs: [
      "bedtime-conversations-with-children",
      "screen-free-activities-for-kids",
      "gratitude-activities-for-kids",
    ],
    characterTraits: ["Gratitude", "Confidence"],
  },
  {
    slug: "emotional-intelligence-for-kids",
    title: "Raising Emotionally Intelligent Children in a Distracted World",
    metaTitle: "Emotional Intelligence for Kids in a Distracted World",
    metaDescription:
      "Emotional intelligence is built in small, attentive moments — and easily eroded by distraction. The research on emotion coaching, and how to practice it daily.",
    excerpt:
      "Emotional intelligence isn't taught in one big lesson — it's built in thousands of small, attentive moments. Here's the research on emotion coaching, and what gets in the way today.",
    categories: ["Emotional Intelligence", "Child Development"],
    tags: [
      "emotional intelligence activities",
      "emotion coaching parenting",
      "helping kids manage emotions",
      "raising emotionally healthy kids",
    ],
    focusKeyword: "emotional intelligence for kids",
    secondaryKeywords: [
      "teaching kids to manage emotions",
      "emotion coaching for parents",
      "social emotional development",
      "helping children regulate emotions",
    ],
    publishedAt: "2026-06-18",
    updatedAt: "2026-06-18",
    readingTime: "8 min read",
    featured: false,
    author: JOSEPH,
    content: emotionalIntelligenceContent,
    faqs: [
      {
        question: "Is emotional intelligence the same as being well-behaved?",
        answer:
          "No — a child having a loud meltdown isn't necessarily showing low emotional intelligence. What matters more is whether they can eventually name the feeling, understand it, and recover, which is a skill built over time rather than a constant state of calm.",
      },
      {
        question: "Can emotional intelligence be taught, or is it innate?",
        answer:
          "It's largely built, not fixed. Research on emotion coaching shows that how the adults around a child respond to feelings has a measurable, lasting effect on the child's own regulation and social skills.",
      },
      {
        question: "How do I coach my child's emotions when I'm upset myself?",
        answer:
          "It helps to silently name your own state first — \"I'm getting overwhelmed too\" — before attempting to coach theirs. It's hard to lend a child a calm nervous system you don't currently have access to.",
      },
      {
        question: "What age should emotion coaching start?",
        answer:
          "You can start narrating feelings as soon as a child shows them, even before they can talk — toddlers absorb a feelings vocabulary well before they can produce one themselves, and that early exposure pays off later.",
      },
    ],
    relatedSlugs: [
      "bedtime-conversations-with-children",
      "kindness-activities-for-kids",
      "benefits-of-reading-to-children",
    ],
    characterTraits: ["Empathy", "Resilience"],
  },
  {
    slug: "character-development-for-children",
    title: "What Every Parent Should Know About Early Childhood Character Development",
    metaTitle: "Character Development for Children: A Parent's Guide",
    metaDescription:
      "Character isn't built through a single lesson — it's built through repetition and modeling. What the research says about how character actually develops.",
    excerpt:
      "Character development in early childhood isn't about willpower or a single great lesson — it's built through repetition, modeling, and noticing. Here's what the research actually says.",
    categories: ["Character Development", "Child Development"],
    tags: [
      "character development activities",
      "raising children with good character",
      "early childhood development",
      "character education for kids",
    ],
    focusKeyword: "character development for children",
    secondaryKeywords: [
      "building character in kids",
      "moral development in children",
      "character traits for kids",
      "early childhood character education",
    ],
    publishedAt: "2026-06-19",
    updatedAt: "2026-06-19",
    readingTime: "8 min read",
    featured: false,
    author: JOSEPH,
    content: characterDevelopmentContent,
    faqs: [
      {
        question: "What's the most important character trait to focus on first?",
        answer:
          "There's no universally \"correct\" first trait, but kindness and empathy often work well as a starting point, since they build the social awareness that many other traits depend on. Picking one trait at a time, rather than several, tends to matter more than which one you choose.",
      },
      {
        question: "How long does character development actually take to \"work\"?",
        answer:
          "Character traits build gradually over months and years, not days — the goal of any single week of focus isn't transformation, it's repetition. Look for small, more frequent flickers of the trait rather than a dramatic before-and-after.",
      },
      {
        question: "Is character development different from discipline?",
        answer:
          "Yes — discipline addresses a specific behavior in the moment, while character development is the slower, ongoing process of building the underlying traits that make certain behaviors more natural over time. The two work together, but they aren't the same tool.",
      },
      {
        question: "Does character development look different at different ages?",
        answer:
          "Yes — toddlers are mostly building basic self-control and trust, preschoolers are developing initiative and early empathy, and early school-age children start comparing themselves to peers and building a more durable sense of identity. The traits stay similar; the work underneath shifts with each stage.",
      },
    ],
    relatedSlugs: [
      "kindness-activities-for-kids",
      "gratitude-activities-for-kids",
      "emotional-intelligence-for-kids",
    ],
    characterTraits: ["Honesty", "Responsibility"],
  },
  {
    slug: "benefits-of-reading-to-children",
    title: "How Reading Together Shapes Confidence, Empathy, and Resilience",
    metaTitle: "Benefits of Reading to Children: Confidence & Empathy",
    metaDescription:
      "Reading together builds more than vocabulary — research links it to a child's confidence, empathy, and resilience. Here's how, and how to deepen the effect.",
    excerpt:
      "Reading together does more than build vocabulary — research links it to a child's confidence, empathy, and resilience. Here's the evidence, and simple ways to deepen the benefits.",
    categories: ["Reading", "Character Development"],
    tags: [
      "benefits of reading to children",
      "reading and child development",
      "empathy through books",
      "building confidence in kids",
    ],
    focusKeyword: "benefits of reading to children",
    secondaryKeywords: [
      "why reading to kids matters",
      "books that build empathy",
      "reading and emotional development",
      "confidence building activities for kids",
    ],
    publishedAt: "2026-06-20",
    updatedAt: "2026-06-20",
    readingTime: "7 min read",
    featured: false,
    author: JOSEPH,
    content: benefitsOfReadingContent,
    faqs: [
      {
        question: "Does it matter what books we read, or just that we read?",
        answer:
          "Both matter, but consistency matters more. A mix of stories that reflect your child's own life and stories that introduce something unfamiliar gives the richest mix of confidence-building and empathy-building, but any regular reading habit is doing real work.",
      },
      {
        question: "My child wants to reread the same book over and over — is that a problem?",
        answer:
          "Not at all — repetition is part of how the benefits build. A familiar story still offers real practice in empathy and resilience, and the predictability itself is part of what makes rereading comforting and valuable.",
      },
      {
        question: "What if my child doesn't seem to enjoy reading yet?",
        answer:
          "Try shorter, more interactive sessions with lots of questions and silly voices rather than longer, quieter ones — for many reluctant readers, the experience of being read *to* needs to feel playful before independent reading interest follows.",
      },
      {
        question: "Does listening to audiobooks count the same as reading together?",
        answer:
          "Audiobooks can build vocabulary and narrative comprehension well, but they don't replace the responsive, face-to-face conversation that happens when a parent pauses to ask how a character might be feeling — that exchange is where much of the empathy benefit comes from.",
      },
    ],
    relatedSlugs: [
      "read-learn-sing-stories-conversation-music",
      "emotional-intelligence-for-kids",
      "character-development-for-children",
    ],
    characterTraits: ["Confidence", "Empathy", "Resilience"],
  },
  {
    slug: "gratitude-activities-for-kids",
    title: "The Science of Gratitude: Helping Children Appreciate What They Have",
    metaTitle: "Gratitude Activities for Kids: What the Research Shows",
    metaDescription:
      "Gratitude research links the practice to happiness and even lower materialism in children. Simple, age-appropriate gratitude activities for kids that work.",
    excerpt:
      "Children don't naturally notice what they already have — gratitude is a practiceable skill, and research links it to real benefits, including lower materialism. Here's how to build it by age.",
    categories: ["Character Development", "Emotional Intelligence"],
    tags: [
      "gratitude activities for kids",
      "teaching gratitude to children",
      "raising thankful kids",
      "gratitude journal for kids",
    ],
    focusKeyword: "gratitude activities for kids",
    secondaryKeywords: [
      "how to teach gratitude to children",
      "gratitude journal ideas for kids",
      "thankfulness activities for preschoolers",
      "raising grateful children",
    ],
    publishedAt: "2026-06-21",
    updatedAt: "2026-06-21",
    readingTime: "7 min read",
    featured: false,
    author: JOSEPH,
    content: gratitudeActivitiesContent,
    faqs: [
      {
        question: "Isn't my child too young to really understand gratitude?",
        answer:
          "Even toddlers can begin building the habit through modeling, well before they can articulate it themselves. Hearing you name what you're grateful for plants the pattern long before they can fully participate in it.",
      },
      {
        question: "What if my child still seems ungrateful despite our efforts?",
        answer:
          "Gratitude is a gradually built habit, not a switch — and hedonic adaptation means children (and adults) naturally drift back toward taking things for granted. Consistent, low-pressure practice over months matters more than any single conversation.",
      },
      {
        question: "How is gratitude different from just being polite?",
        answer:
          "Politeness is a social script — saying \"thank you\" on cue. Gratitude is the internal habit of actually noticing something good and why it matters. The script is a fine starting point, but the noticing has to be practiced separately.",
      },
      {
        question: "Can gratitude practice backfire and feel forced?",
        answer:
          "It can, if it's treated as a mandatory performance rather than a genuine moment. Keeping it brief, low-pressure, and modeled by you first — rather than demanded of your child first — tends to keep it feeling natural rather than like a chore.",
      },
    ],
    relatedSlugs: [
      "kindness-activities-for-kids",
      "family-traditions-for-children",
      "character-development-for-children",
    ],
    characterTraits: ["Gratitude", "Kindness"],
  },
  {
    slug: "screen-free-activities-for-kids",
    title: "50 Screen-Free Activities That Strengthen Family Connection",
    metaTitle: "50 Screen-Free Activities for Kids & Family Connection",
    metaDescription:
      "50 screen-free activities, organized by type, that build real family connection — plus the research on why responsive play matters more than any specific activity.",
    excerpt:
      "It's not the activity that builds connection — it's the responsive attention behind it. 50 screen-free activities, organized by type, plus the research on why they work.",
    categories: ["Family Connection", "Screen Time"],
    tags: [
      "screen free activities for kids",
      "things to do without screens",
      "family bonding activities",
      "unplugged family time",
    ],
    focusKeyword: "screen free activities for kids",
    secondaryKeywords: [
      "screen free activities for toddlers",
      "things to do instead of screen time",
      "family activities without technology",
      "reducing screen time ideas",
    ],
    publishedAt: "2026-06-22",
    updatedAt: "2026-06-22",
    readingTime: "9 min read",
    featured: false,
    author: JOSEPH,
    content: screenFreeActivitiesContent,
    faqs: [
      {
        question: "How much screen-free time should we actually aim for each day?",
        answer:
          "There's no single number that fits every family — what matters more is having a few protected, predictable windows (like the hour before bed) rather than chasing a strict total. A bounded swap is easier to sustain than an all-day rule.",
      },
      {
        question: "What if my child says they're bored within minutes of starting?",
        answer:
          "A little boredom right at the start is normal and often necessary — it's frequently the discomfort right before a child settles into imaginative, self-directed play. Resist the urge to immediately rescue them from it.",
      },
      {
        question: "Do these activities require siblings, or do they work for only children?",
        answer:
          "Nearly all of them work just as well one-on-one with a parent as they do with siblings — in fact, several, like the quick connection moments, are designed specifically for one-on-one attention.",
      },
      {
        question: "How do I start without making it a big production?",
        answer:
          "Pick three activities ahead of time and keep them visible — written on a sticky note near the remote or charger works well. Having a ready answer removes the friction that often sends everyone back to a screen by default.",
      },
    ],
    relatedSlugs: [
      "screen-time-vs-reading-childs-brain",
      "family-traditions-for-children",
      "character-development-for-children",
    ],
    characterTraits: ["Courage", "Confidence"],
  },
];

/** Splits the leading run of plain paragraph blocks (the article's intro,
 * before the first heading) from the rest of the content, so the intro can
 * be rendered as larger "lede" text while everything else goes through the
 * normal ContentRenderer — without duplicating or dropping any content. */
export function splitLede(content: ContentBlock[]): { lede: ContentBlock[]; rest: ContentBlock[] } {
  let splitAt = 0;
  while (splitAt < content.length && content[splitAt].type === "p") {
    splitAt += 1;
  }
  return { lede: content.slice(0, splitAt), rest: content.slice(splitAt) };
}

export function getAllPosts(): BlogPost[] {
  return [...BLOG_POSTS].sort(
    (a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  );
}

export function getPostBySlug(slug: string): BlogPost | undefined {
  return BLOG_POSTS.find((post) => post.slug === slug);
}

export function getFeaturedPost(): BlogPost {
  return BLOG_POSTS.find((post) => post.featured) ?? BLOG_POSTS[0];
}

export function getAllCategories(): string[] {
  const categories = new Set<string>();
  BLOG_POSTS.forEach((post) => post.categories.forEach((c) => categories.add(c)));
  return Array.from(categories).sort();
}

export function categoryToSlug(category: string): string {
  return category.toLowerCase().replace(/\s+/g, "-");
}

export function getPostsByCategorySlug(categorySlug: string): BlogPost[] {
  return getAllPosts().filter((post) =>
    post.categories.some((c) => categoryToSlug(c) === categorySlug)
  );
}

export function getCategoryNameFromSlug(categorySlug: string): string | undefined {
  return getAllCategories().find((c) => categoryToSlug(c) === categorySlug);
}

export function getRelatedPosts(post: BlogPost): BlogPost[] {
  return post.relatedSlugs
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is BlogPost => Boolean(p));
}

export function searchPosts(query: string): BlogPost[] {
  const q = query.trim().toLowerCase();
  if (!q) return [];
  return getAllPosts().filter((post) => {
    const haystack = [
      post.title,
      post.excerpt,
      ...post.tags,
      ...post.categories,
    ]
      .join(" ")
      .toLowerCase();
    return haystack.includes(q);
  });
}
