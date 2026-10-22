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
  Landmark,
  CheckCircle2,
  Users2,
  Briefcase,
  AlertCircle,
  FileCheck2,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";

export const Route = createFileRoute("/corporate-governance-policy")({
  head: () =>
    pageHead(
      "Corporate Governance Policy",
      "Corporate Governance framework of InstantRupiya under Aarsh Fincon Limited (RBI Registered NBFC)."
    ),
  component: Page,
});

const legalLinks = [
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms-and-conditions", label: "Terms & Conditions" },
  { to: "/refund-policy", label: "Refund & Cancellation" },
  { to: "/interest-rate-policy", label: "Interest Rate Policy" },
  { to: "/fair-practices-code", label: "Fair Practices Code" },
  { to: "/corporate-governance-policy", label: "Corporate Governance", active: true },
  { to: "/kyc-aml-policy", label: "KYC & AML Policy" },
  { to: "/risk-management-policy", label: "Risk Management" },
  { to: "/disclaimer", label: "Legal Disclaimer" },
  { to: "/grievance-redressal", label: "Grievance Policy" },
] as const;

const tocItems = [
  { id: "sec-overview", label: "1. Overview & Philosophy" },
  { id: "sec-principles", label: "2. Core Principles" },
  { id: "sec-oversight", label: "3. Board Oversight" },
  { id: "sec-committees", label: "4. Board Committees" },
  { id: "sec-erm", label: "5. Enterprise Risk (ERM)" },
  { id: "sec-controls", label: "6. Internal Controls & Audit" },
  { id: "sec-whistleblower", label: "7. Vigil / Whistleblower" },
  { id: "sec-reporting", label: "8. Transparency & Reporting" },
];

function Page() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <ContentPage
      title="Corporate Governance Policy"
      intro="Corporate governance philosophy, board oversight, risk management, and regulatory compliance standards for Aarsh Fincon Limited (InstantRupiya)."
      apply={false}
    >
      {/* Regulatory Header Badge */}
      <div className="mb-8 rounded-2xl border bg-card p-6 shadow-sm transition-all">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Landmark className="h-6 w-6" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Institutional Governance Framework
              </span>
              <h2 className="text-xl font-bold text-secondary">
                Corporate Governance Policy
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
              <Building2 className="h-4 w-4" />
              <span>Compliance Desk</span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              For corporate governance inquiries and institutional communications:
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
              <h3 className="text-2xl font-bold text-secondary">Overview & Corporate Philosophy</h3>
            </div>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                At <strong className="text-secondary">InstantRupiya</strong> (operating under the corporate umbrella of <strong className="text-secondary">Aarsh Fincon Limited</strong>, an RBI-registered Non-Banking Financial Company, Registration No. <strong className="text-secondary">B-10.00119</strong>), we adhere to the highest standards of corporate governance, business ethics, and institutional accountability.
              </p>
              <p>
                Our governance structure is aligned with the Companies Act, 2013, Reserve Bank of India (RBI) NBFC Master Directions, and corporate best practices.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="sec-principles" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                2.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Core Governance Principles</h3>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border bg-muted/30 p-5">
                <h4 className="font-bold text-secondary">Integrity & Ethics</h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Uncompromising honesty and ethical compliance across all operations.
                </p>
              </div>
              <div className="rounded-xl border bg-muted/30 p-5">
                <h4 className="font-bold text-secondary">Accountability</h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Transparent allocation of responsibility and institutional reporting.
                </p>
              </div>
              <div className="rounded-xl border bg-muted/30 p-5">
                <h4 className="font-bold text-secondary">Stakeholder Fairness</h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Equitable treatment of customers, employees, lenders, and regulators.
                </p>
              </div>
              <div className="rounded-xl border bg-muted/30 p-5">
                <h4 className="font-bold text-secondary">Prudent Risk Governance</h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  Robust risk assessment and management of credit/operational exposure.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="sec-oversight" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                3.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Board Oversight</h3>
            </div>
            <div className="mt-4 rounded-xl border bg-muted/30 p-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                The Board of Directors provides strategic leadership, ensures regulatory compliance, approves statutory policies, and reviews quarterly risk and financial health reports.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="sec-committees" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                4.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Board Committees</h3>
            </div>
            <div className="mt-4 grid gap-3 sm:grid-cols-2 text-xs">
              {[
                "Audit Committee",
                "Risk Management Committee",
                "Nomination & Remuneration Committee",
                "Asset Liability Committee (ALCO)",
                "IT Strategy Committee",
                "Customer Service Committee",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 rounded-lg border bg-muted/20 p-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                  <span className="font-medium text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 5 */}
          <section id="sec-erm" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                5.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Enterprise Risk Management (ERM)</h3>
            </div>
            <div className="mt-4 rounded-xl border bg-muted/30 p-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                The company maintains an integrated ERM framework to identify, assess, monitor, and mitigate Credit Risk, Operational Risk, Market Risk, Liquidity Risk, Information Security Risk, and Compliance Risk.
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section id="sec-controls" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                6.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Internal Controls & Audit</h3>
            </div>
            <div className="mt-4 rounded-xl border bg-muted/30 p-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                Independent internal and statutory audits are conducted periodically. Findings and corrective action reports are submitted directly to the Audit Committee.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section id="sec-whistleblower" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                7.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Vigil / Whistleblower Mechanism</h3>
            </div>
            <div className="mt-4 rounded-xl border bg-muted/30 p-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                A confidential reporting channel exists for employees and stakeholders to report suspected fraud, misconduct, or regulatory non-compliance without fear of retaliation.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section id="sec-reporting" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                8.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Transparency & Regulatory Reporting</h3>
            </div>
            <div className="mt-4 rounded-xl border bg-muted/30 p-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                We ensure accurate and timely disclosures across all statutory filings with the Ministry of Corporate Affairs (MCA) and the Reserve Bank of India (RBI).
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
