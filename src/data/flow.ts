export interface FlowStep {
  name: string;
  summary: string;
}

export const flowSection = {
  eyebrow: 'How it works',
  title: 'One loop, seven steps',
  intro:
    'The cuadrilla agent runs the same loop on every request. It never edits files itself: it plans, delegates and verifies.',
  stepLabel: 'Step',
} as const;

export const flow: FlowStep[] = [
  { name: 'Triage', summary: 'Classify the request into a tier before doing anything.' },
  {
    name: 'Ground',
    summary: 'Inspect the real repo: stack, scripts, conventions, relevant files. No planning from assumptions.',
  },
  {
    name: 'Clarify',
    summary: 'Ask only what blocks the plan. Three questions at most, each with a recommended default.',
  },
  {
    name: 'Plan',
    summary: 'Order work by dependency. Parallel tasks only when they touch disjoint files.',
  },
  {
    name: 'Delegate',
    summary: 'Send self-contained briefs: Goal, Context, Scope, Acceptance criteria, Constraints.',
  },
  {
    name: 'Verify',
    summary: 'Check each report against its criteria and the commands run. Two retries, then escalate to you.',
  },
  {
    name: 'Deliver',
    summary: 'One report: result, changes by agent, real verification, assumptions and open items.',
  },
];
