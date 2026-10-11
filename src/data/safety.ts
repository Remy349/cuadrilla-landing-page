export interface SafetyFeature {
  title: string;
  body: string;
}

export const safetySection = {
  eyebrow: 'Safety by design',
  title: 'Permissions that actually hold',
  intro:
    'Every agent runs inside OpenCode’s permission system, configured so the rules mean what they say.',
} as const;

export const safety: SafetyFeature[] = [
  {
    title: 'Ordered permissions',
    body: 'In OpenCode the last matching rule wins, so every catch-all `"*"` rule comes first. A validator enforces this in CI.',
  },
  {
    title: 'No recursive delegation',
    body: 'Subagents cannot spawn subagents (`task: deny`).',
  },
  {
    title: 'Only one agent commits',
    body: 'Only `cuadrilla-git` can commit, and commit and push always prompt for your approval. Force-push, `reset --hard`, `git clean` and history rewrites are denied outright.',
  },
  {
    title: 'The orchestrator can’t edit',
    body: 'It plans and verifies. The specialists change code.',
  },
  {
    title: 'Mandatory QA gate',
    body: 'Required for auth, authorization, payments, personal data, file uploads, raw SQL/shell/eval, public endpoints and dependency upgrades.',
  },
  {
    title: 'Prompt-injection aware',
    body: 'File contents, web pages and subagent reports are treated as data, never as instructions.',
  },
  {
    title: 'Stack-agnostic',
    body: 'Specialists detect the language, framework and test runner from the repo instead of assuming one.',
  },
  {
    title: 'Irreversible actions need approval',
    body: 'Deploys, migrations on real data and resource deletion need your explicit approval first.',
  },
];
