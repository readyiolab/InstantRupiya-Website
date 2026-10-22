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
  HeartHandshake,
  CheckCircle2,
  Clock,
  UserCheck,
  AlertTriangle,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";

export const Route = createFileRoute("/fair-practices-code")({
  head: () =>
    pageHead(
      "Fair Practices Code",
      "Fair Practices Code followed by InstantRupiya (Aarsh Fincon Limited, RBI Registered NBFC)."
    ),
  component: Page,
});

const legalLinks = [
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms-and-conditions", label: "Terms & Conditions" },
  { to: "/refund-policy", label: "Refund & Cancellation" },
  { to: "/interest-rate-policy", label: "Interest Rate Policy" },
  { to: "/fair-practices-code", label: "Fair Practices Code", active: true },
  { to: "/corporate-governance-policy", label: "Corporate Governance" },
  { to: "/kyc-aml-policy", label: "KYC & AML Policy" },
  { to: "/risk-management-policy", label: "Risk Management" },
  { to: "/disclaimer", label: "Legal Disclaimer" },
  { to: "/grievance-redressal", label: "Grievance Policy" },
] as const;

const tocItems = [
  { id: "sec-overview", label: "1. Overview & Standards" },
  { id: "sec-commitments", label: "2. Core Commitments" },
  { id: "sec-processing", label: "3. Loan Application & Processing" },
  { id: "sec-disclosures", label: "4. Transparent Disclosures & KFS" },
  { id: "sec-non-discrimination", label: "5. Fair Marketing" },
  { id: "sec-recovery", label: "6. Ethical Recovery Standards" },
  { id: "sec-grievance", label: "7. Grievance Redressal Desk" },
];

function Page() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <ContentPage
      title="Fair Practices Code"
      intro="Standards of transparency, ethical recovery practices, non-discrimination, and fair treatment for all borrowers of InstantRupiya under Aarsh Fincon Limited."
      apply={false}
    >
      {/* Regulatory Header Badge */}
      <div className="mb-8 rounded-2xl border bg-card p-6 shadow-sm transition-all">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <HeartHandshake className="h-6 w-6" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Statutory Lending Code
              </span>
              <h2 className="text-xl font-bold text-secondary">
                Fair Practices Code (FPC)
              </h2>
            </div>
          </div>
          <Button
            onClick={handlePrint}
            variant="outline"
            className="flex items-center gap-2 rounded-full border-primary/40 hover:bg-primary/10"
          >
            <Printer className="h-4 w-4 text-primary" />
            <span>Print Code</span>
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
              Contents in this Code
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
              <UserCheck className="h-4 w-4" />
              <span>Grievance Desk</span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              Grievance Officer: <strong>Ashok Kumar</strong>
            </p>
            <div className="mt-4 space-y-2 text-xs">
              <a
                href="mailto:stpl.collection@aarshfincon.com"
                className="flex items-center gap-2 font-medium text-secondary hover:text-primary transition-colors break-all"
              >
                <Mail className="h-3.5 w-3.5 shrink-0 text-primary" />
                <span>stpl.collection@aarshfincon.com</span>
              </a>
              <a
                href="tel:+918826620992"
                className="flex items-center gap-2 font-medium text-secondary hover:text-primary transition-colors"
              >
                <Phone className="h-3.5 w-3.5 shrink-0 text-primary" />
                <span>+91-88266 20992</span>
              </a>
              <a
                href="mailto:support@instantrupiya.com"
                className="flex items-center gap-2 font-medium text-secondary hover:text-primary transition-colors break-all"
              >
                <Mail className="h-3.5 w-3.5 shrink-0 text-primary" />
                <span>support@instantrupiya.com</span>
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
              <h3 className="text-2xl font-bold text-secondary">Overview & Regulatory Standards</h3>
            </div>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                At <strong className="text-secondary">InstantRupiya</strong> (operating under the corporate umbrella of <strong className="text-secondary">Aarsh Fincon Limited</strong>, an RBI-registered Non-Banking Financial Company, Registration No. <strong className="text-secondary">B-10.00119</strong>), we are committed to conducting digital lending in a fair, ethical, transparent, and responsible manner.
              </p>
              <p>
                This Fair Practices Code (&quot;FPC&quot;) is established in conformity with the Master Directions on Fair Practices Code issued by the Reserve Bank of India (RBI).
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="sec-commitments" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                2.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Core Commitments</h3>
            </div>
            <div className="mt-4 space-y-2.5 text-xs">
              {[
                "Treating every applicant equitably, courteously, and with professional integrity.",
                "Providing transparent, clear, and unambiguous terms and interest rate disclosures.",
                "Enforcing strict data confidentiality and bank-grade privacy standards.",
                "Practicing responsible lending to avoid over-leveraging of borrowers.",
                "Zero tolerance for coercive, aggressive, or harassing recovery practices.",
                "Prompt, impartial, and effective resolution of all customer grievances.",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 rounded-lg border bg-muted/20 p-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                  <span className="font-medium text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 */}
          <section id="sec-processing" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                3.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Loan Application & Processing</h3>
            </div>
            <div className="mt-4 rounded-xl border bg-muted/30 p-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                The loan application workflow is simple, automated, and digital. All eligibility benchmarks and document requirements are communicated upfront, with timely status updates provided during credit evaluation.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="sec-disclosures" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                4.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Transparent Disclosures & KFS</h3>
            </div>
            <div className="mt-4 rounded-xl border bg-muted/30 p-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                Prior to digital agreement execution, every borrower receives a standardized Key Fact Statement (KFS) containing APR, interest rate, repayment schedules, and cooling-off period terms. <strong className="text-secondary">There are zero hidden charges.</strong>
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section id="sec-non-discrimination" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                5.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Fair Marketing & Non-Discrimination</h3>
            </div>
            <div className="mt-4 rounded-xl border bg-muted/30 p-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                All promotional materials are truthful, transparent, and non-misleading. Underwriting decisions are made strictly on objective credit algorithms and income capability, without discrimination on grounds of gender, caste, religion, race, or marital status.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section id="sec-recovery" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                6.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Ethical Recovery & Collection Standards</h3>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              In cases of loan delinquency, recovery processes are governed strictly by RBI debt collection guidelines:
            </p>
            <div className="mt-4 space-y-2 text-xs">
              {[
                "Authorized representatives carry valid ID and identify themselves clearly.",
                "Strict prohibition of harassment, intimidation, coercion, or abusive conduct.",
                "Borrower and family privacy and dignity are respected at all times.",
                "Contact is restricted to reasonable business hours (08:00 to 19:00).",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 rounded-lg border bg-muted/20 p-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                  <span className="font-medium text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 7 */}
          <section id="sec-grievance" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                7.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Grievance Redressal Mechanism</h3>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Borrowers with concerns regarding fair practice compliance may contact our Grievance Redressal Officer:
            </p>
            <div className="mt-5 rounded-xl border bg-accent/30 p-6 space-y-3 text-sm">
              <p className="text-base font-bold text-secondary">
                Grievance Redressal Desk • Aarsh Fincon Limited
              </p>
              <div className="space-y-1.5 text-xs">
                <p><strong>Grievance Officer:</strong> Ashok Kumar</p>
                <p>
                  <strong>Email:</strong>{" "}
                  <a href="mailto:stpl.collection@aarshfincon.com" className="text-primary underline">
                    stpl.collection@aarshfincon.com
                  </a>{" "}
                  | <strong>Phone:</strong>{" "}
                  <a href="tel:+918826620992" className="text-primary underline">
                    +91-88266 20992
                  </a>
                </p>
                <p>
                  <strong>General Support:</strong>{" "}
                  <a href="mailto:support@instantrupiya.com" className="text-primary underline">
                    support@instantrupiya.com
                  </a>
                </p>
              </div>
              <p className="pt-2 text-xs text-muted-foreground border-t">
                Complaints are acknowledged within 24-48 hours and resolved in accordance with our Grievance Policy.
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
