import type { Config, Context } from "netlify:edge";

// ISO 3166-1 alpha-2 codes for Spanish-speaking countries
const SPANISH_COUNTRIES = new Set([
  "AR", "BO", "CL", "CO", "CR", "CU", "DO", "EC",
  "SV", "GQ", "GT", "HN", "MX", "NI", "PA", "PY",
  "PE", "PR", "ES", "UY", "VE",
]);

export default async function handler(req: Request, context: Context) {
  const url = new URL(req.url);

  // Only auto-detect on the root homepage
  if (url.pathname !== "/") return;

  // Respect explicit user preference (set when clicking the language switcher)
  const cookie = req.headers.get("cookie") ?? "";
  if (cookie.includes("lang-pref=")) return;

  // Primary: check visitor's country via Netlify geo
  const countryCode = (context.geo?.country?.code ?? "").toUpperCase();
  if (SPANISH_COUNTRIES.has(countryCode)) return;

  // Fallback: check Accept-Language header
  const acceptLang = req.headers.get("accept-language") ?? "";
  const prefersSpanish = acceptLang
    .split(",")
    .map((l) => l.split(";")[0].trim().toLowerCase())
    .some((l) => l.startsWith("es"));

  if (prefersSpanish) return;

  // Non-Spanish visitor → redirect to English homepage
  return Response.redirect(new URL("/en", url.origin), 302);
}

export const config: Config = {
  path: "/",
};
