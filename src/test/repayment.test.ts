import { describe, expect, it } from "vitest";
import { estimateRepayment } from "@/lib/repayment";
describe("Repayment estimates", () => {
  it("calculates monthly repayment from amount, interest and term", () => {
    expect(estimateRepayment(100000,18,12)?.monthly).toBeCloseTo(9167.9993,2);
    expect(estimateRepayment(100000,18,12)?.total).toBeCloseTo(110015.99,2);
  });
  it("supports zero interest", () => { expect(estimateRepayment(120000,0,12)).toEqual({monthly:10000,total:120000,interest:0}); });
  it("rejects invalid terms and inputs", () => { expect(estimateRepayment(10000,18,0)).toBeNull(); expect(estimateRepayment(10000,-1,12)).toBeNull(); expect(estimateRepayment(10000,18,1.5)).toBeNull(); });
});