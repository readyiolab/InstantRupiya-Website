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
  Percent,
  CheckCircle2,
  IndianRupee,
  Layers,
  FileSpreadsheet,
  AlertCircle,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";

export const Route = createFileRoute("/interest-rate-policy")({
  head: () =>
    pageHead(
      "Interest Rate Policy",
      "Interest Rate Policy and fee schedule for InstantRupiya under Aarsh Fincon Limited (RBI Registered NBFC)."
    ),
  component: Page,
});

const legalLinks = [
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms-and-conditions", label: "Terms & Conditions" },
  { to: "/refund-policy", label: "Refund & Cancellation" },
  { to: "/interest-rate-policy", label: "Interest Rate Policy", active: true },
  { to: "/fair-practices-code", label: "Fair Practices Code" },
  { to: "/corporate-governance-policy", label: "Corporate Governance" },
  { to: "/kyc-aml-policy", label: "KYC & AML Policy" },
  { to: "/risk-management-policy", label: "Risk Management" },
  { to: "/disclaimer", label: "Legal Disclaimer" },
  { to: "/grievance-redressal", label: "Grievance Policy" },
] as const;

const tocItems = [
  { id: "sec-overview", label: "1. Overview & Compliance" },
  { id: "sec-methodology", label: "2. Determination Methodology" },
  { id: "sec-amount-tenure", label: "3. Loan Amount & Tenure" },
  { id: "sec-apr", label: "4. Annual Percentage Rate (APR)" },
  { id: "sec-fees", label: "5. Schedule of Fees & Charges" },
  { id: "sec-revision", label: "6. Revision of Rates & Charges" },
  { id: "sec-kfs", label: "7. Key Fact Statement (KFS)" },
];

function Page() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <ContentPage
      title="Interest Rate Policy"
      intro="Transparent framework for determining benchmark interest rates, risk premiums, Annual Percentage Rates (APR), and fee structures on InstantRupiya."
      apply={false}
    >
      {/* Regulatory Header Badge */}
      <div className="mb-8 rounded-2xl border bg-card p-6 shadow-sm transition-all">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Percent className="h-6 w-6" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Statutory Lending Policy
              </span>
              <h2 className="text-xl font-bold text-secondary">
                Interest Rate Policy &amp; Pricing Framework
              </h2>
            </div>
          </div>
          <Button
            onClick={handlePrint}
            variant="outline"
            className="flex items-center gap-2 rounded-full border-primary/40 hover:bg-primary/10"
          >
            <Printer className="h-4 w-4 text-primary" />
            <span>Print Policy</span>
          </Button>
        </div>

        <div className="mt-5 grid grid-cols-2 gap-4 sm:grid-cols-4 text-sm">
          <div className="rounded-xl bg-muted/50 p-3.5">
            <div className="flex items-center gap-2 text-muted-foreground text-xs font-medium uppercase">
              <Building2 className="h-3.5 w-3.5" />
              <span>Regulated Entity</span>
            </div>
            <p className="mt-1 font-bold text-secondary">Aarsh Fincon Limited</p>
          </div>
          <div className="rounded-xl bg-muted/50 p-3.5">
            <div className="flex items-center gap-2 text-muted-foreground text-xs font-medium uppercase">
              <FileText className="h-3.5 w-3.5" />
              <span>Digital Brand</span>
            </div>
            <p className="mt-1 font-bold text-secondary">InstantRupiya</p>
          </div>
          <div className="rounded-xl bg-muted/50 p-3.5">
            <div className="flex items-center gap-2 text-muted-foreground text-xs font-medium uppercase">
              <ShieldCheck className="h-3.5 w-3.5" />
              <span>RBI Reg. Number</span>
            </div>
            <p className="mt-1 font-bold text-secondary">B-10.00119</p>
          </div>
          <div className="rounded-xl bg-muted/50 p-3.5">
            <div className="flex items-center gap-2 text-muted-foreground text-xs font-medium uppercase">
              <Calendar className="h-3.5 w-3.5" />
              <span>Document Status</span>
            </div>
            <p className="mt-1 font-bold text-primary">Operative (September 2024)</p>
          </div>
        </div>
      </div>

      {/* Legal & Regulatory Center Bar */}
      <div className="mb-10 rounded-2xl border bg-muted/30 p-5">
        <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground mb-3">
          Legal & Regulatory Center
        </p>
        <div className="flex flex-wrap gap-2">
          {legalLinks.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className={`rounded-lg px-3.5 py-1.5 text-xs font-medium transition-colors ${
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
      <div className="grid gap-10 lg:grid-cols-[280px_1fr] items-start">
        {/* Sticky Sidebar Navigation */}
        <aside className="space-y-6 lg:sticky lg:top-24">
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
              <span>Inquiries Desk</span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              For queries regarding interest calculations, APR, or the Key Fact Statement:
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
              <h3 className="text-2xl font-bold text-secondary">Overview & Regulatory Compliance</h3>
            </div>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                At <strong className="text-secondary">InstantRupiya</strong> (operating under the corporate umbrella of <strong className="text-secondary">Aarsh Fincon Limited</strong>, an RBI-registered Non-Banking Financial Company, Registration No. <strong className="text-secondary">B-10.00119</strong>), we are committed to complete transparency, fairness, and responsible interest pricing in accordance with the RBI Fair Practices Code.
              </p>
              <p>
                This Interest Rate Policy defines the transparent methodology, risk-based parameters, and statutory disclosures used to determine interest rates, Annual Percentage Rates (APR), and fee structures across all our credit products.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="sec-methodology" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                2.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Interest Rate Determination Methodology</h3>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Interest rates are calculated on a graded risk model. Underwriting algorithms evaluate multiple objective criteria, including:
            </p>
            <div className="mt-4 space-y-2.5 text-xs">
              {[
                "Borrower credit profile, CIBIL/Experian score, and repayment history",
                "Monthly income stability, employer category, and debt obligations",
                "Sanctioned loan amount and requested repayment tenure",
                "Weighted average cost of funds and borrowing expenses",
                "Operational, cloud infrastructure, and administrative overheads",
                "Credit risk loss provisions and portfolio default probabilities",
                "Benchmark market interest rates and regulatory directives",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 rounded-lg border bg-muted/20 p-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                  <span className="font-medium text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 */}
          <section id="sec-amount-tenure" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                3.0
              </span>
              <div className="flex items-center gap-2">
                <IndianRupee className="h-5 w-5 text-primary" />
                <h3 className="text-2xl font-bold text-secondary">Loan Amount & Tenure</h3>
              </div>
            </div>
            <div className="mt-4 rounded-xl border bg-muted/30 p-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                Loans are offered starting from <strong className="text-secondary">₹1,000</strong> up to approved credit limits based on underwriting assessment. Repayment tenures are clearly agreed upon and fixed in the loan amortization schedule before disbursement.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="sec-apr" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                4.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Annual Percentage Rate (APR)</h3>
            </div>
            <div className="mt-4 rounded-xl border bg-muted/30 p-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                The Annual Percentage Rate (APR) represents the comprehensive annualized cost of borrowing, incorporating interest and all applicable processing fees. The exact APR is prominently communicated in the Key Fact Statement (KFS).
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section id="sec-fees" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                5.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Schedule of Fees & Other Charges</h3>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              In addition to interest, certain nominal fees may be levied depending on the product:
            </p>
            <div className="mt-4 space-y-2 text-xs">
              {[
                "Processing Fee (covers verification and onboarding administration)",
                "NACH / Mandate Bounce Charges (for failed auto-debit instances)",
                "Mandate Registration Charges (where applicable)",
                "Loan Restructuring / Rescheduling Charges (if requested)",
                "Statutory GST and government levies as applicable",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 rounded-lg border bg-muted/20 p-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                  <span className="font-medium text-secondary">{item}</span>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-xl border border-primary/30 bg-primary/10 p-4">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4" />
                <span>Zero Upfront Deductions on Rejections</span>
              </div>
              <p className="mt-1 text-xs text-secondary font-medium">
                No processing fees or administrative charges are ever collected from applicants whose applications are declined.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section id="sec-revision" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                6.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Revision of Rates & Charges</h3>
            </div>
            <div className="mt-4 rounded-xl border bg-muted/30 p-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                Interest rates and fee schedules may be reviewed periodically based on market liquidity and cost of funds. Any rate revisions apply strictly prospectively and do not impact active fixed-rate loan contracts.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section id="sec-kfs" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                7.0
              </span>
              <div className="flex items-center gap-2">
                <FileSpreadsheet className="h-5 w-5 text-primary" />
                <h3 className="text-2xl font-bold text-secondary">Key Fact Statement (KFS)</h3>
              </div>
            </div>
            <div className="mt-4 rounded-xl border bg-muted/30 p-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                Prior to digital loan agreement execution, borrowers receive a standardized Key Fact Statement (KFS) containing itemized breakdowns of interest rate, APR, fees, and repayment obligations. <strong className="text-secondary">There are zero hidden charges.</strong>
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
