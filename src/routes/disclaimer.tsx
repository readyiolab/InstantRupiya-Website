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
  AlertTriangle,
  Scale,
  CheckCircle2,
  AlertCircle,
  HelpCircle,
  ShieldAlert,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";

export const Route = createFileRoute("/disclaimer")({
  head: () =>
    pageHead(
      "Legal Disclaimer",
      "Legal Disclaimer and platform facilitation disclosure for InstantRupiya (Aarsh Fincon Limited)."
    ),
  component: Page,
});

const legalLinks = [
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms-and-conditions", label: "Terms & Conditions" },
  { to: "/refund-policy", label: "Refund & Cancellation" },
  { to: "/interest-rate-policy", label: "Interest Rate Policy" },
  { to: "/fair-practices-code", label: "Fair Practices Code" },
  { to: "/corporate-governance-policy", label: "Corporate Governance" },
  { to: "/kyc-aml-policy", label: "KYC & AML Policy" },
  { to: "/risk-management-policy", label: "Risk Management" },
  { to: "/disclaimer", label: "Legal Disclaimer", active: true },
  { to: "/grievance-redressal", label: "Grievance Policy" },
] as const;

const tocItems = [
  { id: "sec-platform", label: "1. Technology Platform Notice" },
  { id: "sec-lending-authority", label: "2. Lending Partner Authority" },
  { id: "sec-no-advice", label: "3. No Financial/Legal Advice" },
  { id: "sec-limitation", label: "4. Limitation of Responsibility" },
  { id: "sec-acknowledgement", label: "5. User Acknowledgement" },
];

function Page() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <ContentPage
      title="Legal Disclaimer"
      intro="Platform facilitation notice, lending partner authorities, credit decision disclosures, and liability limitations for InstantRupiya."
      apply={false}
    >
      {/* Regulatory Header Badge */}
      <div className="mb-8 rounded-2xl border bg-card p-6 shadow-sm transition-all">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Scale className="h-6 w-6" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Statutory Platform Disclosure
              </span>
              <h2 className="text-xl font-bold text-secondary">
                Legal Disclaimer &amp; Regulatory Disclosures
              </h2>
            </div>
          </div>
          <Button
            onClick={handlePrint}
            variant="outline"
            className="flex items-center gap-2 rounded-full border-primary/40 hover:bg-primary/10"
          >
            <Printer className="h-4 w-4 text-primary" />
            <span>Print Disclaimer</span>
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
              Contents in this Disclaimer
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
              <Scale className="h-4 w-4" />
              <span>Legal Inquiries Desk</span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              For regulatory questions, partner lending disclosures, or legal communications:
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
          <section id="sec-platform" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                1.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Technology Platform Notice</h3>
            </div>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                <strong className="text-secondary">InstantRupiya</strong> is a digital financial technology platform operating under the corporate umbrella of <strong className="text-secondary">Aarsh Fincon Limited</strong> (an RBI-registered Non-Banking Financial Company, Registration No. <strong className="text-secondary">B-10.00119</strong>).
              </p>
              <p>
                <strong className="text-secondary">InstantRupiya</strong> operates as a digital technology facilitator. The platform facilitates loan origination, document submission, and servicing in association with authorized lending partners, banks, and Non-Banking Financial Companies (NBFCs).
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="sec-lending-authority" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                2.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Lending Partner Authority & Credit Decisions</h3>
            </div>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                All credit approvals, sanctioned credit limits, interest rates, processing fees, repayment tenures, and final disbursement decisions are determined exclusively by the respective Regulated Lending Partner based on their credit appraisal models, risk policies, and RBI digital lending norms.
              </p>
              <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4 text-secondary">
                <div className="flex items-start gap-2.5">
                  <AlertTriangle className="h-5 w-5 shrink-0 text-destructive mt-0.5" />
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    <strong className="text-secondary">InstantRupiya does not hold independent authority to approve or reject credit applications, nor does it guarantee specific sanction amounts.</strong>
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="sec-no-advice" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                3.0
              </span>
              <div className="flex items-center gap-2">
                <HelpCircle className="h-5 w-5 text-primary" />
                <h3 className="text-2xl font-bold text-secondary">No Financial, Legal, or Investment Advice</h3>
              </div>
            </div>
            <div className="mt-4 rounded-xl border bg-muted/30 p-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                The information, calculators, guides, and materials available on the InstantRupiya website and mobile application are provided for general informational purposes only. Nothing on this platform should be construed as financial, legal, tax, or investment advice.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="sec-limitation" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                4.0
              </span>
              <div className="flex items-center gap-2">
                <ShieldAlert className="h-5 w-5 text-primary" />
                <h3 className="text-2xl font-bold text-secondary">Limitation of Responsibility</h3>
              </div>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              While we strive to ensure continuous and accurate service, InstantRupiya shall not be liable for:
            </p>
            <div className="mt-4 space-y-2 text-xs">
              {[
                "Credit rejection decisions by partner lenders.",
                "Processing or bank-clearing disbursement delays.",
                "Technical downtime, server latency, or network drops.",
                "Inaccurate details submitted by loan applicants.",
                "Statutory or regulatory policy restrictions.",
                "Third-party verification API downtimes.",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 rounded-lg border bg-muted/20 p-3">
                  <AlertCircle className="h-4 w-4 shrink-0 text-muted-foreground mt-0.5" />
                  <span className="font-medium text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5 */}
          <section id="sec-acknowledgement" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                5.0
              </span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-5 w-5 text-primary" />
                <h3 className="text-2xl font-bold text-secondary">User Acknowledgement & Acceptance</h3>
              </div>
            </div>
            <div className="mt-4 rounded-xl border border-primary/20 bg-muted/30 p-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                Users acknowledge that all borrowing activities involve financial commitments and risks. By accessing, browsing, or using <strong className="text-secondary">InstantRupiya</strong>, you confirm that you have read, understood, and agreed to this Legal Disclaimer, our{" "}
                <Link to="/privacy-policy" className="font-medium text-primary underline">
                  Privacy Policy
                </Link>
                , and our{" "}
                <Link to="/terms-and-conditions" className="font-medium text-primary underline">
                  Terms and Conditions
                </Link>
                .
              </p>
            </div>
          </section>

          {/* Document Footer */}
          <div className="rounded-xl border bg-muted/40 p-4 text-center text-xs text-muted-foreground">
            <p className="font-medium">
              Official Legal Document • InstantRupiya (Aarsh Fincon Limited)
            </p>
            <p className="mt-1">Effective Date: September 2024</p>
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
