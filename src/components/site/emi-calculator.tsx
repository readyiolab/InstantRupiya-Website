import { useState } from "react";
export function EmiCalc() {
  const [amt, setAmt] = useState(100000);
  const [months, setMonths] = useState(12);
  const r = 0.18 / 12;
  const emi = Math.round((amt * r * (1 + r) ** months) / ((1 + r) ** months - 1));
  const f = (n: number) => "₹" + n.toLocaleString("en-IN");
  return (
    <div className="rounded-lg border bg-card p-6 shadow-card sm:p-8">
      <h3 className="text-2xl font-bold text-secondary">EMI Calculator</h3>
      <label htmlFor="loan-amount" className="mt-6 block text-sm text-muted-foreground">Loan amount: <b className="text-foreground">{f(amt)}</b></label>
      <input id="loan-amount" type="range" min={10000} max={250000} step={5000} value={amt} onChange={(e) => setAmt(+e.target.value)} className="mt-3 w-full accent-primary" />
      <label htmlFor="loan-tenure" className="mt-4 block text-sm text-muted-foreground">Tenure: <b className="text-foreground">{months} months</b></label>
      <input id="loan-tenure" type="range" min={3} max={36} value={months} onChange={(e) => setMonths(+e.target.value)} className="mt-3 w-full accent-primary" />
      <div className="mt-6 rounded-lg bg-accent p-5 text-center" aria-live="polite">
        <p className="text-sm text-muted-foreground">Monthly EMI (at 18% p.a.)</p>
        <p className="text-4xl font-extrabold text-secondary">{f(emi)}</p>
      </div>
      <div className="mt-5 grid grid-cols-2 gap-4 border-t pt-5 text-sm"><div><p className="text-muted-foreground">Total repayment</p><p className="mt-2 font-bold">{f(emi*months)}</p></div><div><p className="text-muted-foreground">Estimated interest</p><p className="mt-2 font-bold">{f(emi*months-amt)}</p></div></div>
    </div>
  );
}
