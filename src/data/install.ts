import { RAW_URL, REPO_URL, VERSION } from './site';

export type InstallOs = 'unix' | 'windows';

export interface InstallSnippet {
  label: string;
  code: string;
  lang: 'bash' | 'powershell' | 'json';
}

export interface InstallTab {
  id: string;
  label: string;
  /** Shorter label for narrow screens. */
  shortLabel?: string;
  /** Used to auto-select the tab from the visitor's OS. */
  os?: InstallOs;
  description: string;
  snippets: InstallSnippet[];
  warning?: string;
}

export const commands = {
  unix: `curl -fsSL ${RAW_URL}/install.sh | bash`,
  unixPinned: `curl -fsSL ${RAW_URL}/install.sh | CUADRILLA_REF=${VERSION} bash`,
  windows: `irm ${RAW_URL}/install.ps1 | iex`,
  windowsPinned: `$env:CUADRILLA_REF = "${VERSION}"; irm ${RAW_URL}/install.ps1 | iex`,
  project: `git clone ${REPO_URL}.git && cd cuadrilla\n./install.sh --project /path/to/your/repo`,
} as const;

export const installTabs: InstallTab[] = [
  {
    id: 'unix',
    label: 'Linux · macOS · WSL · Git Bash',
    shortLabel: 'Linux · macOS',
    os: 'unix',
    description: 'Global install, symlinked, so it updates with `git pull`.',
    snippets: [
      { label: 'Install', code: commands.unix, lang: 'bash' },
      { label: `Pin a release (${VERSION})`, code: commands.unixPinned, lang: 'bash' },
    ],
  },
  {
    id: 'windows',
    label: 'Windows PowerShell',
    shortLabel: 'Windows',
    os: 'windows',
    description: 'Global install for PowerShell 5.1 or 7.',
    snippets: [
      { label: 'Install', code: commands.windows, lang: 'powershell' },
      { label: `Pin a release (${VERSION})`, code: commands.windowsPinned, lang: 'powershell' },
    ],
    warning: 'The Linux command (`curl … | bash`) does not work in PowerShell. Use this one.',
  },
  {
    id: 'project',
    label: 'Per project',
    description:
      'Copies the agents into `.opencode/` in your repo so you can commit them and share them with your team.',
    snippets: [{ label: 'Install into a repo', code: commands.project, lang: 'bash' }],
  },
];

/** The two OS tabs shown in the hero and the final CTA. */
export const quickTabs: InstallTab[] = installTabs.filter((t) => t.os !== undefined);

export const installSection = {
  eyebrow: 'Install',
  title: 'One command, then press Tab',
  intro: 'Requires OpenCode (tested with 1.18) and git.',
  tabsLabel: 'Installation method',
  notes: [
    'Existing files are backed up, never silently overwritten.',
    'Uninstall with `./install.sh --uninstall` (or `install.ps1 -Uninstall`).',
  ],
  nextTitle: 'Then',
  next: [
    'Restart OpenCode.',
    'Press `Tab` until the `cuadrilla` agent appears.',
    'Describe what you need.',
  ],
  modelsTitle: 'Pick your models',
  modelsBody: [
    'No agent hard-codes a model. Use a strong model for `cuadrilla` and `cuadrilla-architect`, and a fast, inexpensive one for the implementers.',
    'Set them per agent in `opencode.json`. Any provider OpenCode supports will work.',
  ],
  modelsFile: 'opencode.json',
} as const;

export const modelsSnippet = `{
  "agent": {
    "cuadrilla": { "model": "provider/strong-model" },
    "cuadrilla-architect": { "model": "provider/strong-model" },
    "cuadrilla-backend": { "model": "provider/fast-model" },
    "cuadrilla-frontend": { "model": "provider/fast-model" },
    "cuadrilla-mobile": { "model": "provider/fast-model" },
    "cuadrilla-devops": { "model": "provider/fast-model" },
    "cuadrilla-qa": { "model": "provider/fast-model" },
    "cuadrilla-git": { "model": "provider/fast-model" }
  }
}`;
