import { VERSION } from './site';

export const hero = {
  eyebrow: `Open source · MIT · ${VERSION}`,
  /*
   * Alternative headlines:
   *   - "One tech lead. Seven specialists. Inside OpenCode."
   *   - "Stop prompting one agent. Run a crew."
   */
  headline: 'Your AI coding agent, organized like a real engineering team.',
  subhead:
    'Cuadrilla gives OpenCode a tech-lead orchestrator and seven specialist subagents that work inside strict, audited permissions. It triages each request, writes the briefs and checks the results.',
  ctaPrimary: { label: 'View on GitHub' },
  ctaSecondary: { label: 'See how it works', href: '#how-it-works' },
  installLabel: 'Install globally',
  requirementsNote: 'Requires OpenCode (tested with 1.18) and git.',
} as const;

export type TerminalTone = 'prompt' | 'agent' | 'muted' | 'plan' | 'delegate' | 'ok' | 'report';

export interface TerminalLine {
  tone: TerminalTone;
  text: string;
  /** Optional right-aligned owner / status column. */
  aside?: string;
}

/** Illustrative session shown in the hero terminal mockup. */
export const terminal = {
  title: 'opencode · agent: cuadrilla',
  caption: 'Illustrative session',
  request: 'add CSV export to the orders page',
  lines: [
    { tone: 'agent', text: 'triage', aside: 'T2 · Feature' },
    { tone: 'muted', text: 'grounding: stack, scripts and orders module read from the repo' },
    { tone: 'plan', text: 'plan' },
    { tone: 'plan', text: '  1  map orders module', aside: 'explore' },
    { tone: 'plan', text: '  2  GET /orders/export endpoint', aside: 'backend' },
    { tone: 'plan', text: '  3  export button + states', aside: 'frontend' },
    { tone: 'plan', text: '  4  integration tests', aside: 'qa' },
    { tone: 'delegate', text: '→ brief sent  goal · context · scope · criteria', aside: 'backend' },
    { tone: 'delegate', text: '→ brief sent  goal · context · scope · criteria', aside: 'frontend' },
    { tone: 'ok', text: '✓ verified against acceptance criteria', aside: 'backend' },
    { tone: 'ok', text: '✓ verified against acceptance criteria', aside: 'frontend' },
    { tone: 'ok', text: '✓ test suite run, output checked', aside: 'qa' },
    { tone: 'report', text: 'report: result · changes by agent · verification · open items' },
  ] satisfies TerminalLine[],
} as const;
