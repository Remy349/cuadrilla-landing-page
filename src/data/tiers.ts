export interface Tier {
  id: 'T0' | 'T1' | 'T2' | 'T3';
  name: string;
  scope: string;
  handling: string;
  /** 1–4, drives the visual weight of the card. */
  weight: 1 | 2 | 3 | 4;
  /** Short highlighted callout, if any. */
  callout?: string;
}

export const tierSection = {
  eyebrow: 'Triage',
  title: 'Effort matched to the request',
  intro: 'Before anything else, every request gets a tier. The tier decides who gets involved.',
  quote: 'Over-orchestration is a failure mode: a typo fix doesn’t need an architect.',
} as const;

export const tiers: Tier[] = [
  {
    id: 'T0',
    name: 'Question',
    scope: 'Explain, locate, compare.',
    handling: 'Answered directly. No implementers.',
    weight: 1,
  },
  {
    id: 'T1',
    name: 'Small change',
    scope: 'One area, about 1–3 files.',
    handling: 'One specialist, a tight brief, then verification. No architect.',
    weight: 2,
  },
  {
    id: 'T2',
    name: 'Feature',
    scope: 'Several files or areas.',
    handling: 'Discover → plan → contracts first → implement (parallel where safe) → QA gate.',
    weight: 3,
  },
  {
    id: 'T3',
    name: 'Structural / risky',
    scope: 'New module, data-model change, auth, payments, PII.',
    handling: 'The architect designs, then phased execution.',
    weight: 4,
    callout: 'Cuadrilla presents the plan and waits for your approval.',
  },
];
