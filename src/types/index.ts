export interface NavLink {
  href: string;
  label: string;
}

export interface WaypointSection {
  id: string;
  label: string;
}

export interface WaitlistPayload {
  firstName: string;
  email: string;
  source?: string;
}

export interface ContactPayload {
  name: string;
  email: string;
  message: string;
}

export interface QuestTrait {
  icon: string;
  name: string;
}

export interface Checkpoint {
  icon: string;
  title: string;
  description: string;
}

export interface AdventurePage {
  icon: string;
  tag: string;
  title: string;
  body: string;
  timing: string;
}

export interface Benefit {
  icon: string;
  title: string;
  description: string;
}
