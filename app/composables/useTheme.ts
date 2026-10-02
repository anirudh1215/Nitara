/**
 * useTheme Composable
 * -------------------
 * Injects CSS custom properties into :root from siteConfig.theme.
 * SSR-safe — uses useHead() so variables render on the server.
 */
import { siteConfig } from "~~/config/site";

export function useTheme() {
  const { theme } = siteConfig;

  // Build CSS variable string from theme config
  const cssVariables = `
    :root {
      --color-primary: ${theme.primary};
      --color-secondary: ${theme.secondary};
      --color-accent: ${theme.accent};
      --color-bg: ${theme.background};
      --color-text: ${theme.text};
      --color-text-muted: ${theme.textMuted};
      --radius: ${theme.borderRadius};
      --font-family: ${theme.fontFamily};
    }
  `;

  // Inject globally via useHead — works with SSR
  useHead({
    style: [{ innerHTML: cssVariables }],
  });

  return { theme };
}
