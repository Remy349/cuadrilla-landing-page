/** Current Cuadrilla release. Change it here and every pin-version command follows. */
export const VERSION = 'v0.1.1';

export const REPO_URL = 'https://github.com/Remy349/cuadrilla';
export const RAW_URL = 'https://raw.githubusercontent.com/Remy349/cuadrilla/main';

export const links = {
  repo: REPO_URL,
  releases: `${REPO_URL}/releases`,
  changelog: `${REPO_URL}/blob/main/CHANGELOG.md`,
  license: `${REPO_URL}/blob/main/LICENSE`,
  readmeEs: `${REPO_URL}/blob/main/README.es.md`,
  opencode: 'https://opencode.ai',
} as const;

export interface NavItem {
  label: string;
  href: string;
}

export const site = {
  name: 'Cuadrilla',
  title: 'Cuadrilla: a tech-lead orchestrator and specialist crew for OpenCode',
  description:
    'An open-source multi-agent setup for OpenCode. One orchestrator triages, plans, delegates and verifies; seven specialists do the work inside strict, audited permission boundaries. MIT licensed.',
  author: 'Santiago Moraga',
  license: 'MIT',
  ogImage: '/og.png',
  ogImageAlt: 'Cuadrilla: your AI coding agent, organized like a real engineering team.',
  locale: 'en_US',
} as const;

export const nav: NavItem[] = [
  { label: 'How it works', href: '#how-it-works' },
  { label: 'Crew', href: '#crew' },
  { label: 'Safety', href: '#safety' },
  { label: 'Commands', href: '#commands' },
  { label: 'Install', href: '#install' },
  { label: 'FAQ', href: '#faq' },
];

export const ui = {
  skipLink: 'Skip to content',
  homeAria: 'Cuadrilla, back to top',
  navLabel: 'Primary',
  mobileNavLabel: 'Primary (mobile)',
  github: 'GitHub',
  githubAria: 'Cuadrilla on GitHub',
  menuOpen: 'Open menu',
  menuClose: 'Close menu',
  copy: 'Copy',
  copied: 'Copied',
  copyAria: 'Copy command to clipboard',
  copiedAnnouncement: 'Copied to clipboard',
} as const;
