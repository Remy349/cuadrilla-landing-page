export const briefSection = {
  eyebrow: 'Self-contained briefs',
  title: 'Subagents start with an empty context',
  intro:
    'A subagent never sees your conversation. Whatever the orchestrator leaves out of the task, the subagent has to guess. So every delegation is a full brief.',
  points: [
    {
      title: 'Nothing implied',
      body: 'Context names the files, conventions and decisions that matter, so the specialist doesn’t rediscover them or invent its own.',
    },
    {
      title: 'Scope cuts both ways',
      body: 'What is in and what is out are both written down, which keeps parallel work on disjoint files.',
    },
    {
      title: 'Verifiable by design',
      body: 'Acceptance criteria are what the orchestrator checks the report against. No criteria, no verification.',
    },
  ],
  cardTitle: 'brief → cuadrilla-backend',
  cardCaption: 'Example brief for the CSV export request above',
} as const;

export const briefExample = `## Goal
Add an endpoint that exports the current user's orders as CSV.

## Context
Orders live in src/orders/. Handlers follow orders.controller.ts;
queries go through OrdersRepository. Tests use the repo's existing runner.

## Scope
In:  GET /orders/export, repository query, handler tests
Out: UI, auth changes, other report formats

## Acceptance criteria
- Responds 200 with text/csv and a header row
- Respects the existing date-range filters
- Returns only the requesting user's orders
- Existing and new tests pass; report the command you ran

## Constraints
- No new dependencies
- Don't touch the database schema
`;
