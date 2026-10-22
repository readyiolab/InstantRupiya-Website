import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/content-page";
import { pageHead } from "@/lib/site-config";
import { Button } from "@/components/ui/button";
import {
  Printer,
  ShieldCheck,
  Building2,
  FileText,
  Calendar,
  CheckCircle2,
  Clock,
  ArrowRight,
  Mail,
  Phone,
  MessageCircle,
  AlertCircle,
  XCircle,
  Gavel,
} from "lucide-react";

export const Route = createFileRoute("/refund-policy")({
  head: () =>
    pageHead(
      "Refund & Cancellation Policy",
      "Refund & Cancellation Policy for InstantRupiya under Aarsh Fincon Limited (RBI Registered NBFC)."
    ),
  component: Page,
});

const legalLinks = [
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms-and-conditions", label: "Terms & Conditions" },
  { to: "/refund-policy", label: "Refund & Cancellation", active: true },
  { to: "/interest-rate-policy", label: "Interest Rate Policy" },
  { to: "/fair-practices-code", label: "Fair Practices Code" },
  { to: "/corporate-governance-policy", label: "Corporate Governance" },
  { to: "/kyc-aml-policy", label: "KYC & AML Policy" },
  { to: "/risk-management-policy", label: "Risk Management" },
  { to: "/disclaimer", label: "Legal Disclaimer" },
  { to: "/grievance-redressal", label: "Grievance Policy" },
] as const;

const tocItems = [
  { id: "sec-overview", label: "1. Overview & Framework" },
  { id: "sec-cooling-off", label: "2. Cooling-Off Period (72h)" },
  { id: "sec-excess-refund", label: "3. Excess Payments & Timelines" },
  { id: "sec-non-refundable", label: "4. Non-Refundable Items" },
  { id: "sec-procedure", label: "5. Procedure to Request" },
  { id: "sec-amendments", label: "6. Amendments & Jurisdiction" },
];

function Page() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <ContentPage
      title="Refund & Cancellation Policy"
      intro="Official policy defining the statutory cooling-off period for loan cancellations and excess repayment refund procedures on InstantRupiya."
      apply={false}
    >
      {/* Regulatory Header Badge */}
      <div className="mb-6 sm:mb-8 rounded-2xl border bg-card p-4 sm:p-6 shadow-sm transition-all">
        <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 border-b pb-4 sm:pb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Clock className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Statutory Lending Policy
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-secondary">
                Refund &amp; Loan Cancellation Policy
              </h2>
            </div>
          </div>
          <Button
            onClick={handlePrint}
            variant="outline"
            className="flex items-center gap-2 rounded-full border-primary/40 hover:bg-primary/10 text-xs sm:text-sm h-9 sm:h-10 px-3 sm:px-4"
          >
            <Printer className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
            <span>Print Policy</span>
          </Button>
        </div>

        <div className="mt-4 sm:mt-5 grid grid-cols-2 gap-2.5 sm:gap-4 sm:grid-cols-4 text-xs sm:text-sm">
          <div className="rounded-xl bg-muted/50 p-3 sm:p-3.5">
            <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground text-[10px] sm:text-xs font-medium uppercase">
              <Building2 className="h-3.5 w-3.5 shrink-0" />
              <span>Regulated Entity</span>
            </div>
            <p className="mt-1 font-bold text-secondary text-xs sm:text-sm">Aarsh Fincon Limited</p>
          </div>
          <div className="rounded-xl bg-muted/50 p-3 sm:p-3.5">
            <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground text-[10px] sm:text-xs font-medium uppercase">
              <FileText className="h-3.5 w-3.5 shrink-0" />
              <span>Digital Brand</span>
            </div>
            <p className="mt-1 font-bold text-secondary text-xs sm:text-sm">InstantRupiya</p>
          </div>
          <div className="rounded-xl bg-muted/50 p-3 sm:p-3.5">
            <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground text-[10px] sm:text-xs font-medium uppercase">
              <ShieldCheck className="h-3.5 w-3.5 shrink-0" />
              <span>RBI Reg. Number</span>
            </div>
            <p className="mt-1 font-bold text-secondary text-xs sm:text-sm">B-10.00119</p>
          </div>
          <div className="rounded-xl bg-muted/50 p-3 sm:p-3.5">
            <div className="flex items-center gap-1.5 sm:gap-2 text-muted-foreground text-[10px] sm:text-xs font-medium uppercase">
              <Calendar className="h-3.5 w-3.5 shrink-0" />
              <span>Document Status</span>
            </div>
            <p className="mt-1 font-bold text-primary text-xs sm:text-sm">Operative (Sept 2024)</p>
          </div>
        </div>
      </div>

      {/* Legal & Regulatory Center Bar */}
      <div className="mb-8 sm:mb-10 rounded-2xl border bg-muted/30 p-4 sm:p-5">
        <p className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
          Legal &amp; Regulatory Center
        </p>
        <div className="flex flex-wrap gap-1.5 sm:gap-2">
          {legalLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`rounded-lg px-2.5 sm:px-3.5 py-1.5 text-xs font-medium transition-colors ${
                item.active
                  ? "bg-secondary text-secondary-foreground font-semibold shadow-sm"
                  : "bg-card text-secondary hover:bg-primary/10 hover:text-primary border"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="grid gap-8 lg:gap-10 lg:grid-cols-[280px_1fr] items-start">
        {/* Sticky Sidebar Navigation (appears first on desktop, lower on mobile) */}
        <aside className="space-y-6 lg:sticky lg:top-24 order-last lg:order-first">
          <div className="rounded-2xl border bg-card p-5 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-wider text-secondary flex items-center gap-2">
              <FileText className="h-4 w-4 text-primary" />
              Contents in this Policy
            </h3>
            <nav className="mt-4 space-y-1.5 text-xs">
              {tocItems.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="block rounded-lg px-3 py-2 text-muted-foreground hover:bg-muted hover:text-primary font-medium transition-colors"
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </div>

          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5">
            <div className="flex items-center gap-2 text-primary font-bold text-sm">
              <Mail className="h-4 w-4" />
              <span>Refund Support Desk</span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              To initiate a cooling-off cancellation or report excess debits:
            </p>
            <div className="mt-4 space-y-2 text-xs">
              <a
                href="mailto:support@instantrupiya.com"
                className="flex items-center gap-2 font-medium text-secondary hover:text-primary transition-colors break-all"
              >
                <Mail className="h-3.5 w-3.5 shrink-0 text-primary" />
                <span>support@instantrupiya.com</span>
              </a>
              <a
                href="tel:+917827486530"
                className="flex items-center gap-2 font-medium text-secondary hover:text-primary transition-colors"
              >
                <Phone className="h-3.5 w-3.5 shrink-0 text-primary" />
                <span>+91-7827486530</span>
              </a>
              <a
                href="https://wa.me/917827486530"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 font-medium text-secondary hover:text-primary transition-colors"
              >
                <MessageCircle className="h-3.5 w-3.5 shrink-0 text-green-600" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </aside>

        {/* Content Body */}
        <div className="space-y-10 text-secondary">
          {/* Section 1 */}
          <section id="sec-overview" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                1.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Overview & Regulatory Framework</h3>
            </div>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                At <strong className="text-secondary">InstantRupiya</strong>, operated under the umbrella of{" "}
                <strong className="text-secondary">Aarsh Fincon Limited</strong> (an RBI-registered Non-Banking Financial Company, Registration No. <strong className="text-secondary">B-10.00119</strong>), we are committed to maintaining fair, transparent, and consumer-centric lending practices.
              </p>
              <p>
                This Refund & Cancellation Policy defines the statutory cooling-off look-up period for loan cancellations and details the accounting reconciliation process for excess payment refunds in compliance with Reserve Bank of India (RBI) digital lending guidelines.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="sec-cooling-off" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                2.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Cooling-Off Period (Loan Cancellation Rights)</h3>
            </div>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <div className="rounded-xl border border-primary/30 bg-primary/10 p-4 text-secondary">
                <h4 className="font-bold text-xs uppercase tracking-wider text-primary">
                  Statutory 3-Day / 72-Hour Look-up Window:
                </h4>
                <p className="mt-1 text-xs text-secondary font-medium">
                  Every borrower is legally entitled to a Cooling-Off Period of 3 (Three) calendar days / 72 hours commencing from the exact timestamp of loan disbursement into their registered bank account.
                </p>
              </div>

              <p className="font-semibold text-secondary text-sm">During the 72-hour cooling-off period:</p>
              <ul className="space-y-2 text-xs">
                <li className="flex items-start gap-2.5 rounded-lg border bg-muted/20 p-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                  <span>The borrower may voluntarily cancel the loan without incurring any foreclosure penalties or cancellation fees.</span>
                </li>
                <li className="flex items-start gap-2.5 rounded-lg border bg-muted/20 p-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                  <span>The borrower must repay the full principal amount disbursed into their bank account.</span>
                </li>
                <li className="flex items-start gap-2.5 rounded-lg border bg-muted/20 p-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                  <span>Interest shall be payable strictly for the proportionate actual days the loan remained outstanding.</span>
                </li>
                <li className="flex items-start gap-2.5 rounded-lg border bg-muted/20 p-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                  <span>Any statutory levies, GST, or third-party verification charges already deposited with government bodies may be recovered.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 3 */}
          <section id="sec-excess-refund" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                3.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Refund of Excess Payments & Settlement Adjustments</h3>
            </div>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>Refunds are processed in all circumstances where an excess credit has been received from the borrower, including:</p>
              <ul className="space-y-2 text-xs">
                <li className="flex items-start gap-2.5 rounded-lg border bg-muted/20 p-3">
                  <ArrowRight className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                  <span>Duplicate payment debits occurring during online payment transactions.</span>
                </li>
                <li className="flex items-start gap-2.5 rounded-lg border bg-muted/20 p-3">
                  <ArrowRight className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                  <span>Overpaid EMI amounts exceeding the contractual amortization balance.</span>
                </li>
                <li className="flex items-start gap-2.5 rounded-lg border bg-muted/20 p-3">
                  <ArrowRight className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                  <span>Payment gateway transaction timeouts or banking clearing discrepancies.</span>
                </li>
                <li className="flex items-start gap-2.5 rounded-lg border bg-muted/20 p-3">
                  <ArrowRight className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                  <span>Excess amounts recovered following formal loan closure or one-time settlement (OTS).</span>
                </li>
              </ul>

              <div className="rounded-xl border border-primary/20 bg-muted/30 p-4">
                <h4 className="font-bold text-xs uppercase tracking-wider text-secondary">
                  Refund Processing Timeline:
                </h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Upon internal reconciliation and ledger validation, refunds will be credited electronically to the borrower&apos;s registered source bank account within <strong className="text-secondary">5 to 10 business days</strong>. <strong className="text-destructive">Cash refunds are strictly prohibited.</strong>
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="sec-non-refundable" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                4.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Non-Refundable Items</h3>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Refunds shall not be applicable for:
            </p>
            <div className="mt-4 space-y-2 text-xs">
              {[
                "Accrued interest lawfully charged per the loan agreement.",
                "Processing fees on disbursed loans outside the cooling-off window.",
                "Government statutory taxes and stamp duties deposited.",
                "Legitimate bounce or overdue recovery charges incurred.",
                "Cancellation requests submitted after the 72-hour window expires.",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 rounded-lg border bg-muted/20 p-3">
                  <XCircle className="h-4 w-4 shrink-0 text-destructive mt-0.5" />
                  <span className="font-medium text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5 */}
          <section id="sec-procedure" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                5.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Procedure to Request Cancellation or Refund</h3>
            </div>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                To initiate a cooling-off loan cancellation or excess refund claim, email our support desk at{" "}
                <a
                  href="mailto:support@instantrupiya.com"
                  className="font-medium text-primary underline"
                >
                  support@instantrupiya.com
                </a>{" "}
                with the following details:
              </p>
              <div className="grid gap-2 sm:grid-cols-2 text-xs">
                <div className="rounded-lg border bg-muted/30 p-3">
                  <span className="text-muted-foreground">1. Registered Mobile No.</span>
                </div>
                <div className="rounded-lg border bg-muted/30 p-3">
                  <span className="text-muted-foreground">2. Loan Account Number</span>
                </div>
                <div className="rounded-lg border bg-muted/30 p-3">
                  <span className="text-muted-foreground">3. Reason for Request</span>
                </div>
                <div className="rounded-lg border bg-muted/30 p-3">
                  <span className="text-muted-foreground">4. Proof of Payment / UTR</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 6 */}
          <section id="sec-amendments" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                6.0
              </span>
              <div className="flex items-center gap-2">
                <Gavel className="h-5 w-5 text-primary" />
                <h3 className="text-2xl font-bold text-secondary">Amendments & Dispute Redressal</h3>
              </div>
            </div>
            <div className="mt-4 rounded-xl border bg-muted/30 p-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                <strong className="text-secondary">Aarsh Fincon Limited</strong> reserves the right to amend this Policy periodically in accordance with regulatory directives. Any disputes arising hereunder shall be subject to the exclusive jurisdiction of the competent courts in <strong className="text-secondary">New Delhi, India</strong>.
              </p>
            </div>
          </section>

          {/* Document Footer */}
          <div className="rounded-xl border bg-muted/40 p-4 text-center text-xs text-muted-foreground">
            <p className="font-medium">
              Official Policy Document • InstantRupiya (Aarsh Fincon Limited)
            </p>
            <p className="mt-1">Effective Date: September 2024</p>
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
