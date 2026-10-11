const escapeHtml = (s: string): string =>
  s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

/** Escapes copy and turns `backticked` spans into inline code. Use with set:html. */
export function inline(text: string): string {
  return escapeHtml(text).replace(/`([^`]+)`/g, '<code class="code-inline">$1</code>');
}
