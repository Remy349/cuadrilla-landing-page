export interface SlashCommand {
  name: string;
  args: string;
  description: string;
  example: string;
  /** Optional list of possible outcomes, rendered as chips. */
  outcomes?: string[];
}

export const commandSection = {
  eyebrow: 'Slash commands',
  title: 'Three shortcuts for common jobs',
  intro: 'Run them from the OpenCode prompt.',
  exampleLabel: 'Example',
  outcomesLabel: 'Verdicts',
} as const;

export const commands: SlashCommand[] = [
  {
    name: '/cuadrilla-plan',
    args: '<request>',
    description: 'Analyzes the request and produces a delegation plan without changing anything.',
    example: '/cuadrilla-plan add rate limiting to the login endpoint',
  },
  {
    name: '/cuadrilla-review',
    args: '[focus]',
    description: 'The architect and QA review your current changes in parallel, then give one verdict.',
    example: '/cuadrilla-review error handling in the new endpoints',
    outcomes: ['ready to merge', 'merge after fixes', 'needs rework'],
  },
  {
    name: '/cuadrilla-commit',
    args: '[and push / open a PR]',
    description: 'Proposes Conventional Commits, waits for your approval, then commits.',
    example: '/cuadrilla-commit and open a PR',
  },
];
