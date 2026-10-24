// Keep application traffic on the verified portal until the new portal is provisioned.
export const APPLICATION_URL = "https://loan.lendigomicrocare.com/";

export function pageHead(title: string, description: string) {
  const fullTitle = `${title} — InstantRupiya`;
  return { meta: [
    { title: fullTitle },
    { name: "description", content: description },
    { property: "og:title", content: fullTitle },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { property: "og:site_name", content: "InstantRupiya" },
    { name: "twitter:title", content: fullTitle },
    { name: "twitter:description", content: description },
    { name: "twitter:card", content: "summary_large_image" },
  ] };
}