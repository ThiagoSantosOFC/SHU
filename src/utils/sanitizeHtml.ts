import sanitizeHtml from "sanitize-html";

export function sanitizeHtmlForLogin(html: string): string {
  return sanitizeHtml(html, {
    allowedTags: [],
    allowedAttributes: {},
  });
}

