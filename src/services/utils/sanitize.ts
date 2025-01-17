import DOMPurify from 'isomorphic-dompurify';

const TEMPORARY_A_TARGET = 'data-sanitize-target';

if (typeof window !== 'undefined') {
  DOMPurify.addHook('beforeSanitizeAttributes', (node) => {
    if (node instanceof Element && node.tagName === 'A') {
      const target = node.getAttribute('target');
      if (!target) return;
      node.setAttribute(TEMPORARY_A_TARGET, target);
    }
  });

  DOMPurify.addHook('afterSanitizeAttributes', (node) => {
    if (node instanceof Element && node.tagName === 'A') {
      const target = node.getAttribute(TEMPORARY_A_TARGET);
      if (!target) return;
      node.setAttribute('target', target);
    }
  });
}

export const sanitizeText = (text: string) => {
  if (typeof window === 'undefined') return text;

  return DOMPurify.sanitize(text);
};
