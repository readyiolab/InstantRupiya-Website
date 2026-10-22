import { createFileRoute } from "@tanstack/react-router";
import { ShieldCheck, FileText, CalendarDays } from "lucide-react";
import { ContentPage, InfoBlock } from "@/components/site/content-page";
import { Button } from "@/components/ui/button";
import { APPLICATION_URL, pageHead } from "@/lib/site-config";
import { RepaymentCalculator } from "@/components/site/repayment-calculator";

export const Route = createFileRoute("/repayment")({
  head: () => pageHead("Repayment", "Find guidance for repaying your InstantRupiya loan and accessing your loan account."),
  component: RepaymentPage,
});

function RepaymentPage() {
  return <ContentPage title="Loan Repayment" intro="Stay on top of your repayments and keep your loan account up to date." apply={false}>
    <div className="grid gap-12 lg:grid-cols-2">
      <div><h2 className="text-3xl font-bold text-secondary">Access your loan account</h2><p className="mt-4 leading-relaxed text-muted-foreground">Open the InstantRupiya loan portal to check your account. For payment instructions, use the official repayment details in your lender’s communications or loan agreement.</p><Button asChild size="lg" className="mt-6 h-12 rounded-full"><a href={APPLICATION_URL}>Open loan portal</a></Button><p className="mt-4 text-sm text-muted-foreground">No payments are collected on this website.</p></div>
      <div>
        <InfoBlock title="Check your due date"><CalendarDays className="mb-3 text-primary" /><p>Review the amount and due date in your repayment schedule before making a payment.</p></InfoBlock>
        <InfoBlock title="Use verified payment details"><ShieldCheck className="mb-3 text-primary" /><p>Pay only through channels confirmed by your lender. Never send money to an unverified personal account or share your OTP or UPI PIN.</p></InfoBlock>
        <InfoBlock title="Keep your receipt"><FileText className="mb-3 text-primary" /><p>Save your payment reference and confirm the payment is reflected in your loan account. Contact your lender if it is not updated.</p></InfoBlock>
      </div>
    </div>
    <RepaymentCalculator />
  </ContentPage>;
}