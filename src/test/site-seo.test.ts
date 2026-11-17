import { describe, expect, it } from "vitest";
import { pageHead, SITE_URL } from "@/lib/site-config";

describe("Page SEO metadata", () => {
  it("uses each route's canonical URL and shares its title and description", () => {
    const description = "Answers about personal loan eligibility and repayment.";
    const head = pageHead("Frequently Asked Questions", description);

    expect(head.links).toContainEqual({
      rel: "canonical",
      href: `${SITE_URL}/faqs`,
    });
    expect(head.meta).toContainEqual({
      property: "og:url",
      content: `${SITE_URL}/faqs`,
    });
    expect(head.meta).toContainEqual({
      name: "description",
      content: description,
    });
    expect(head.meta).toContainEqual({
      name: "twitter:card",
      content: "summary_large_image",
    });
  });

  it("allows explicit paths for titles that differ from their route slugs", () => {
    const head = pageHead("Loan Repayment", "Repayment guidance.", "/repayment");

    expect(head.links).toContainEqual({
      rel: "canonical",
      href: `${SITE_URL}/repayment`,
    });
  });
});
