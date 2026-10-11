export interface Problem {
  failure: string;
  failureDetail: string;
  fix: string;
  fixDetail: string;
}

export const problemSection = {
  eyebrow: 'The problem → the fix',
  title: 'Multi-agent setups fail in the same four places',
  intro: 'Cuadrilla is built around each one.',
  failureLabel: 'Failure mode',
  fixLabel: 'Cuadrilla',
} as const;

export const problems: Problem[] = [
  {
    failure: 'The orchestrator over-plans trivial work',
    failureDetail: 'A one-line fix gets a design review, a plan and three subagents.',
    fix: 'Tiered triage',
    fixDetail:
      'Every request is classified from T0 to T3 first. Questions are answered directly; only structural or risky work gets the architect.',
  },
  {
    failure: 'Subagents get vague one-line tasks',
    failureDetail: 'They start with an empty context, so they guess.',
    fix: 'Self-contained briefs',
    fixDetail:
      'Each delegation carries Goal, Context, Scope, Acceptance criteria and Constraints. Nothing depends on a conversation the subagent never saw.',
  },
  {
    failure: 'Nobody checks the result',
    failureDetail: '"Should work" gets reported as done.',
    fix: 'Verification gates',
    fixDetail:
      'Each report is checked against its acceptance criteria and the commands actually run. Two retries at most, then it comes back to you.',
  },
  {
    failure: 'Permissions are looser than they look',
    failureDetail: 'A catch-all rule placed last quietly overrides the specific ones.',
    fix: 'Permissions that actually hold',
    fixDetail:
      'Rules are ordered so the catch-all comes first, a validator enforces it in CI, and only one agent can commit.',
  },
];
