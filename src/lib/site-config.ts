export const APPLICATION_URL =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_APPLICATION_URL) ||
  "https://loan.instantrupiya.com/";

const configuredSiteUrl =
  (typeof import.meta !== "undefined" && import.meta.env?.VITE_SITE_URL) ||
  "https://instantrupiya.com";
export const SITE_URL = new URL(configuredSiteUrl).origin;

const routeByTitle: Record<string, string> = {
  "About Us": "/about",
  "Frequently Asked Questions": "/faqs",
  "Legal Disclaimer": "/disclaimer",
  "Loan Repayment": "/repayment",
  "KYC & AML Policy": "/kyc-aml-policy",
  "Refund & Cancellation Policy": "/refund-policy",
  "Terms & Conditions": "/terms-and-conditions",
};

export function pageHead(title: string, description: string, pathname?: string) {
  const fullTitle = `${title} — InstantRupiya`;
  const path = pathname ?? routeByTitle[title] ?? `/${title.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "")}`;
  const canonicalUrl = new URL(path, SITE_URL).toString();
  const imageUrl = new URL("/logo.webp", SITE_URL).toString();

  return { meta: [
    { title: fullTitle },
    { name: "description", content: description },
    { name: "robots", content: "index, follow" },
    { property: "og:url", content: canonicalUrl },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "InstantRupiya" },
    { property: "og:image", content: imageUrl },
    { property: "og:image:alt", content: "InstantRupiya logo" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:image", content: imageUrl },
  ], links: [{ rel: "canonical", href: canonicalUrl }] };
}