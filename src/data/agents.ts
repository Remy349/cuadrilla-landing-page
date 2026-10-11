export type WritesKind = 'no' | 'yes' | 'scoped';

export interface Agent {
  name: string;
  role: string;
  writes: { kind: WritesKind; label: string };
  /** Group label used in the crew diagram. */
  group: 'lead' | 'discover' | 'design' | 'build' | 'gate' | 'ship';
  builtIn?: boolean;
}

export const crewSection = {
  eyebrow: 'Meet the crew',
  title: 'One lead, seven specialists',
  intro:
    'Nine agents in total: the orchestrator, seven Cuadrilla specialists and OpenCode’s built-in explorer. Each one can only touch what its role needs.',
  writesLabel: 'Writes code',
  builtInLabel: 'built-in',
  diagramLabel: 'Crew structure: the cuadrilla orchestrator delegates to eight agents',
  groups: {
    lead: 'Lead',
    discover: 'Discover',
    design: 'Design',
    build: 'Build',
    gate: 'Gate',
    ship: 'Ship',
  },
} as const;

export const agents: Agent[] = [
  {
    name: 'cuadrilla',
    role: 'Tech-lead orchestrator: triages, grounds, plans, delegates, verifies, reports. Never edits files.',
    writes: { kind: 'no', label: 'No' },
    group: 'lead',
  },
  {
    name: 'explore',
    role: 'Fast read-only discovery: stack, conventions, where things live.',
    writes: { kind: 'no', label: 'No' },
    group: 'discover',
    builtIn: true,
  },
  {
    name: 'cuadrilla-architect',
    role: 'Module boundaries, contracts, data flow (hexagonal, SOLID, DDD tactics), design reviews, ADRs.',
    writes: { kind: 'scoped', label: 'ADRs only' },
    group: 'design',
  },
  {
    name: 'cuadrilla-backend',
    role: 'APIs, business logic, persistence, migrations, jobs, integrations.',
    writes: { kind: 'yes', label: 'Yes' },
    group: 'build',
  },
  {
    name: 'cuadrilla-frontend',
    role: 'Components, pages, routing, client state, a11y, loading/error/empty states.',
    writes: { kind: 'yes', label: 'Yes' },
    group: 'build',
  },
  {
    name: 'cuadrilla-mobile',
    role: 'React Native/Expo, Flutter, native iOS/Android: screens, navigation, offline behavior.',
    writes: { kind: 'yes', label: 'Yes' },
    group: 'build',
  },
  {
    name: 'cuadrilla-devops',
    role: 'Dockerfiles, CI/CD, IaC, cloud config (Azure, AWS, GCP, VPS), env and secrets wiring.',
    writes: { kind: 'scoped', label: 'Infra files only' },
    group: 'build',
  },
  {
    name: 'cuadrilla-qa',
    role: 'Security audit (OWASP Top 10, secrets, authz, dependencies) and tests: unit, integration, e2e.',
    writes: { kind: 'scoped', label: 'Test files only' },
    group: 'gate',
  },
  {
    name: 'cuadrilla-git',
    role: 'Conventional Commits, branches, push, PRs. Only when you ask.',
    writes: { kind: 'no', label: 'No' },
    group: 'ship',
  },
];
