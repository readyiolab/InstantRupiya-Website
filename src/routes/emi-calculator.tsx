import { createFileRoute } from "@tanstack/react-router";
import { EmiCalc } from "@/components/site/emi-calculator";
import { ContentPage } from "@/components/site/content-page";
import { pageHead } from "@/lib/site-config";

export const Route = createFileRoute("/emi-calculator")({
  head: () => pageHead("EMI Calculator", "Estimate your monthly personal loan repayments with the InstantRupiya EMI calculator."),
  component: CalculatorPage,
});
function CalculatorPage() {
  return <ContentPage title="EMI Calculator" intro="Plan your monthly repayments before you apply.">
    <div className="grid items-center gap-12 lg:grid-cols-2"><div><h2 className="text-3xl font-bold text-secondary">Make room for your EMI</h2><p className="mt-4 leading-relaxed text-muted-foreground">Compare loan amounts and tenures to estimate a monthly payment that fits your budget.</p><p className="mt-5 text-sm text-muted-foreground">This estimate uses an illustrative 18% annual interest rate, not a confirmed loan offer. Fees are not included. Review your lender’s actual terms before borrowing.</p></div><EmiCalc /></div>
  </ContentPage>;
}