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
  UserCheck,
  CheckCircle2,
  AlertTriangle,
  FolderLock,
  FileSpreadsheet,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";

export const Route = createFileRoute("/kyc-aml-policy")({
  head: () =>
    pageHead(
      "KYC & AML Policy",
      "KYC & AML Policy for InstantRupiya under Aarsh Fincon Limited (RBI Registered NBFC)."
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
  { to: "/kyc-aml-policy", label: "KYC & AML Policy", active: true },
  { to: "/risk-management-policy", label: "Risk Management" },
  { to: "/disclaimer", label: "Legal Disclaimer" },
  { to: "/grievance-redressal", label: "Grievance Policy" },
] as const;

const tocItems = [
  { id: "sec-overview", label: "1. Overview & Mandates" },
  { id: "sec-identification", label: "2. Identification (KYC)" },
  { id: "sec-acceptance", label: "3. Acceptance Norms" },
  { id: "sec-rba", label: "4. Risk-Based Approach" },
  { id: "sec-monitoring", label: "5. Transaction Monitoring" },
  { id: "sec-pep", label: "6. Politically Exposed Persons" },
  { id: "sec-retention", label: "7. Record Retention & Privacy" },
];

function Page() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <ContentPage
      title="KYC & AML Policy"
      intro="Know Your Customer (KYC), Anti-Money Laundering (AML), and Combating Financing of Terrorism (CFT) framework of InstantRupiya (Aarsh Fincon Limited)."
      apply={false}
    >
      {/* Regulatory Header Badge */}
      <div className="mb-8 rounded-2xl border bg-card p-6 shadow-sm transition-all">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <UserCheck className="h-6 w-6" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Statutory Compliance Framework
              </span>
              <h2 className="text-xl font-bold text-secondary">
                KYC &amp; Anti-Money Laundering Policy
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
              <ShieldCheck className="h-4 w-4" />
              <span>Compliance Desk</span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              For KYC verifications, AML disclosures, or customer due diligence queries:
            </p>
            <div className="mt-4 space-y-2 text-xs">
              <a
                href="mailto:support.instantrupiya@aarshfincon.com"
                className="flex items-center gap-2 font-medium text-secondary hover:text-primary transition-colors break-all"
              >
                <Mail className="h-3.5 w-3.5 shrink-0 text-primary" />
                <span>support.instantrupiya@aarshfincon.com</span>
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
              <h3 className="text-2xl font-bold text-secondary">Overview & Statutory Mandates</h3>
            </div>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                At <strong className="text-secondary">InstantRupiya</strong> (operating under the corporate umbrella of <strong className="text-secondary">Aarsh Fincon Limited</strong>, an RBI-registered Non-Banking Financial Company, Registration No. <strong className="text-secondary">B-10.00119</strong>), we enforce a zero-tolerance policy against money laundering, terrorist financing, identity fraud, and financial malpractices.
              </p>
              <p>
                This Policy is framed in strict compliance with the Prevention of Money Laundering Act, 2002 (PMLA), the Prevention of Money-Laundering (Maintenance of Records) Rules, 2005, and the RBI Master Direction on Know Your Customer (KYC).
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="sec-identification" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                2.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Customer Identification Procedure (KYC)</h3>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Prior to sanctioning or disbursing any credit facility, applicant identity is verified using authorized electronic and official mechanisms:
            </p>
            <div className="mt-4 space-y-2 text-xs">
              {[
                "Real-time PAN verification with official Income Tax databases",
                "Aadhaar-based paperless offline XML / Digilocker verification",
                "Officially Valid Documents (Passport, Voter ID, Driving License)",
                "Penny-drop or Account Aggregator bank account verification",
                "Live selfie capture with facial recognition and liveness detection",
                "Video-based Customer Identification Process (V-CIP) where mandated",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 rounded-lg border bg-muted/20 p-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                  <span className="font-medium text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 */}
          <section id="sec-acceptance" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                3.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Customer Acceptance Norms</h3>
            </div>
            <div className="mt-4 rounded-xl border bg-muted/30 p-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                Lending relationships are strictly declined if fictitious details are provided, identity cannot be verified, or the applicant appears on negative sanctions/watchlists.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="sec-rba" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                4.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Risk-Based Approach (RBA)</h3>
            </div>
            <div className="mt-4 rounded-xl border bg-muted/30 p-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                Customers are categorized into Low, Medium, and High-Risk tiers based on geographic profile, occupation, and transaction volume. Enhanced Due Diligence (EDD) is applied to high-risk accounts.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section id="sec-monitoring" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                5.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Transaction Monitoring</h3>
            </div>
            <div className="mt-4 rounded-xl border bg-muted/30 p-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                Ongoing transaction monitoring identifies anomalous velocity, structuring, or suspicious repayments. Where required, Suspicious Transaction Reports (STRs) are filed with FIU-IND.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section id="sec-pep" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                6.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Politically Exposed Persons (PEPs)</h3>
            </div>
            <div className="mt-4 rounded-xl border bg-muted/30 p-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                Applications involving PEPs require Enhanced Due Diligence (EDD), source of wealth verification, and senior management sign-off prior to credit approval.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section id="sec-retention" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                7.0
              </span>
              <div className="flex items-center gap-2">
                <FolderLock className="h-5 w-5 text-primary" />
                <h3 className="text-2xl font-bold text-secondary">Statutory Record Retention & Privacy</h3>
              </div>
            </div>
            <div className="mt-4 rounded-xl border bg-muted/30 p-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                All customer identification records, KYC documents, and transaction logs are securely archived for a minimum period of <strong className="text-secondary">5 years post-account closure</strong> in compliance with PMLA statutory mandates.
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
