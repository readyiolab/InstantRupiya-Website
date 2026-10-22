import { describe, expect, it } from "vitest";
import { APPLICATION_URL } from "@/lib/site-config";

describe("Application destination", () => {
  it("uses the exact loan portal requested for every application action", () => {
    expect(APPLICATION_URL).toBe("https://loan.instantrupiya.com/");
  });
});