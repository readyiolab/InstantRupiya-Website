import { useState } from "react";
import { Calculator } from "lucide-react";
import { Input } from "@/components/ui/input";
import { estimateRepayment } from "@/lib/repayment";

const money = (n: number) => new Intl.NumberFormat("en-IN", {style:"currency", currency:"INR", maximumFractionDigits:0}).format(n);
export function RepaymentCalculator() {
  const [amount, setAmount] = useState("100000");
  const [rate, setRate] = useState("18");
  const [term, setTerm] = useState("12");
  const valid = amount !== "" && rate !== "" && term !== "" && Number(rate) <= 100 && Number(term) <= 600 && Number(amount) <= 10000000;
  const result = valid ? estimateRepayment(Number(amount), Number(rate), Number(term)) : null;
  return <section aria-labelledby="repayment-calculator-title" className="mt-14 border-t pt-12">
    <div className="mb-7 flex items-center gap-3"><Calculator className="text-primary"/><h2 id="repayment-calculator-title" className="text-3xl font-bold text-secondary">Repayment calculator</h2></div>
    <div className="grid gap-8 md:grid-cols-2"><div className="space-y-5">
      <div><label htmlFor="repay-amount" className="mb-2 block font-medium">Loan amount (₹)</label><Input id="repay-amount" type="number" min={1} max={10000000} value={amount} onChange={e=>setAmount(e.target.value)}/></div>
      <div><label htmlFor="repay-rate" className="mb-2 block font-medium">Annual interest rate (%)</label><Input id="repay-rate" type="number" min={0} max={100} step="0.1" value={rate} onChange={e=>setRate(e.target.value)}/></div>
      <div><label htmlFor="repay-term" className="mb-2 block font-medium">Term (months)</label><Input id="repay-term" type="number" min={1} max={600} step={1} value={term} onChange={e=>setTerm(e.target.value)}/></div>
    </div><div className="border-l border-primary pl-6" aria-live="polite" aria-atomic="true">{result ? <><p className="text-sm text-muted-foreground">Estimated monthly payment</p><p data-testid="repayment-monthly" className="mt-3 text-4xl font-extrabold text-secondary">{money(result.monthly)}</p><dl className="mt-8 space-y-4"><div className="flex flex-wrap justify-between gap-2"><dt>Total repayment</dt><dd className="font-bold">{money(result.total)}</dd></div><div className="flex flex-wrap justify-between gap-2"><dt>Total interest</dt><dd className="font-bold">{money(result.interest)}</dd></div></dl></> : <p role="alert">Enter a positive amount, an annual rate from 0–100%, and a whole-number term from 1–600 months.</p>}<p className="mt-6 text-sm leading-relaxed text-muted-foreground">Illustrative reducing-balance estimate only. Fees, taxes, payment dates and lender rounding are excluded. The default 18% is an example, not a loan offer; use the rate in your agreement.</p></div></div>
  </section>;
}