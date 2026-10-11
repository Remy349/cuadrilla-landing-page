import type { ComponentProps } from 'astro/types';
import type { Code } from 'astro:components';

type Theme = Exclude<ComponentProps<typeof Code>['theme'], string | undefined>;

/** Minimal Shiki theme built from the site tokens; every color passes 4.5:1 on the surface. */
export const cuadrillaTheme: Theme = {
  name: 'cuadrilla',
  type: 'dark',
  colors: {
    'editor.background': '#141416',
    'editor.foreground': '#f2f0ea',
  },
  tokenColors: [
    { settings: { foreground: '#f2f0ea' } },
    { scope: ['comment', 'punctuation.definition.comment'], settings: { foreground: '#a1a1aa' } },
    {
      scope: ['string', 'string.quoted', 'punctuation.definition.string'],
      settings: { foreground: '#a7d6a9' },
    },
    { scope: ['support.type.property-name', 'meta.object-literal.key'], settings: { foreground: '#e0a526' } },
    {
      scope: ['keyword', 'storage', 'keyword.operator.pipe', 'keyword.operator.logical'],
      settings: { foreground: '#e0a526' },
    },
    { scope: ['entity.name.function', 'support.function', 'entity.name.command'], settings: { foreground: '#f2f0ea' } },
    { scope: ['variable', 'variable.other', 'variable.parameter'], settings: { foreground: '#e8c27a' } },
    { scope: ['constant', 'constant.numeric', 'constant.other.option'], settings: { foreground: '#c9c4ff' } },
    { scope: ['markup.heading', 'entity.name.section', 'punctuation.definition.heading'], settings: { foreground: '#e0a526', fontStyle: 'bold' } },
    { scope: ['punctuation', 'meta.brace'], settings: { foreground: '#a1a1aa' } },
  ],
};
