export interface FaqItem {
  question: string;
  answer: string;
}

export const faqSection = {
  eyebrow: 'FAQ',
  title: 'Questions',
} as const;

export const faq: FaqItem[] = [
  {
    question: 'Does it work with my model provider?',
    answer:
      'Yes. No agent hard-codes a model, so Cuadrilla works with any provider OpenCode supports. You choose the model for each agent in `opencode.json`.',
  },
  {
    question: 'Is it a separate app?',
    answer:
      'No. Cuadrilla is a set of agent and command definitions (Markdown + YAML) that OpenCode loads. There is no service, server or background process.',
  },
  {
    question: 'Will it commit without asking?',
    answer:
      'No. Only `cuadrilla-git` can commit, it acts only when you ask, and commit and push always prompt for your approval. Force-push, `reset --hard`, `git clean` and history rewrites are denied outright.',
  },
  {
    question: 'Does it support Windows?',
    answer:
      'Yes. There is a PowerShell installer for PowerShell 5.1 and 7. WSL and Git Bash use the same shell installer as Linux and macOS.',
  },
  {
    question: 'Can my team share it?',
    answer:
      'Yes. The per-project install copies everything into `.opencode/` in your repo, so you commit it and everyone gets the same crew.',
  },
  {
    question: 'What languages and frameworks does it support?',
    answer:
      'It is stack-agnostic. The specialists detect the language, framework and test runner from your repo instead of assuming one. Mobile covers React Native/Expo, Flutter and native iOS/Android; DevOps covers Azure, AWS, GCP and plain VPS setups.',
  },
  {
    question: 'Does it answer in my language?',
    answer: 'Yes. The prompts are written in English, but Cuadrilla answers in whatever language you write in.',
  },
  {
    question: 'Is it free?',
    answer:
      'Yes. Cuadrilla is open source under the MIT license. Model usage is between you and your provider.',
  },
];
