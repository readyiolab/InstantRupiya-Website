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
  ShieldAlert,
  CheckCircle2,
  Cpu,
  BarChart3,
  Lock,
  FileSpreadsheet,
  Layers,
  Users2,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";

export const Route = createFileRoute("/risk-management-policy")({
  head: () =>
    pageHead(
      "Risk Management Policy",
      "Risk Management Policy of InstantRupiya under Aarsh Fincon Limited (RBI Registered NBFC)."
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
  { to: "/risk-management-policy", label: "Risk Management", active: true },
  { to: "/disclaimer", label: "Legal Disclaimer" },
  { to: "/grievance-redressal", label: "Grievance Policy" },
] as const;

const tocItems = [
  { id: "sec-overview", label: "1. Overview & Governance" },
  { id: "sec-principles", label: "2. Core Risk Principles" },
  { id: "sec-categories", label: "3. Key Risk Categories" },
  { id: "sec-surveillance", label: "4. Surveillance & Early Warning" },
  { id: "sec-mitigation", label: "5. Mitigation & BCP" },
  { id: "sec-roles", label: "6. Roles & Responsibilities" },
];

function Page() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <ContentPage
      title="Risk Management Policy"
      intro="Institutional Enterprise Risk Management (ERM) framework addressing credit risk, operational resilience, liquidity, and cyber defense for InstantRupiya."
      apply={false}
    >
      {/* Regulatory Header Badge */}
      <div className="mb-8 rounded-2xl border bg-card p-6 shadow-sm transition-all">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b pb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <ShieldAlert className="h-6 w-6" />
            </div>
            <div>
              <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Institutional Risk Framework
              </span>
              <h2 className="text-xl font-bold text-secondary">
                Enterprise Risk Management (ERM) Policy
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
              <ShieldAlert className="h-4 w-4" />
              <span>Risk Management Desk</span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              For risk disclosures, security audits, or underwriting compliance inquiries:
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
              <h3 className="text-2xl font-bold text-secondary">Overview & Risk Governance</h3>
            </div>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                At <strong className="text-secondary">InstantRupiya</strong> (operating under the corporate umbrella of <strong className="text-secondary">Aarsh Fincon Limited</strong>, an RBI-registered Non-Banking Financial Company, Registration No. <strong className="text-secondary">B-10.00119</strong>), we maintain an institutional Enterprise Risk Management (ERM) framework designed to identify, assess, monitor, and mitigate operational, financial, and digital lending risks.
              </p>
              <p>
                The framework supports prudent portfolio growth, safeguards stakeholder capital, and reinforces compliance with Reserve Bank of India (RBI) prudential norms.
              </p>
            </div>
          </section>

          {/* Section 2 */}
          <section id="sec-principles" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                2.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Core Risk Principles</h3>
            </div>
            <div className="mt-4 space-y-2.5 text-xs">
              {[
                "Risk management is embedded in all day-to-day operational workflows.",
                "Continuous identification and quantification of emerging credit and tech risks.",
                "Risk-reward optimization integrated into all underwriting decisions.",
                "Proactive monitoring systems to preempt potential financial and system losses.",
                "Dynamic response to market liquidity fluctuations and regulatory updates.",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 rounded-lg border bg-muted/20 p-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                  <span className="font-medium text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 3 */}
          <section id="sec-categories" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                3.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Key Risk Categories & Coverage</h3>
            </div>
            <div className="mt-5 grid gap-4 sm:grid-cols-2 text-xs">
              <div className="rounded-xl border bg-muted/30 p-5">
                <h4 className="font-bold text-secondary text-sm">3.1 Credit & Concentration Risk</h4>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  Borrower default probabilities, portfolio delinquency, and exposure limits.
                </p>
              </div>
              <div className="rounded-xl border bg-muted/30 p-5">
                <h4 className="font-bold text-secondary text-sm">3.2 Operational & Tech Risk</h4>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  Digital platform latency, internal control breakdowns, and vendor dependencies.
                </p>
              </div>
              <div className="rounded-xl border bg-muted/30 p-5">
                <h4 className="font-bold text-secondary text-sm">3.3 Liquidity & Financial Risk</h4>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  Asset-liability mismatches, cost of funds, and cash flow adequacy.
                </p>
              </div>
              <div className="rounded-xl border bg-muted/30 p-5">
                <h4 className="font-bold text-secondary text-sm">3.4 Cybersecurity & InfoSec Risk</h4>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  Data breaches, malware threats, server vulnerabilities, and unauthorized access.
                </p>
              </div>
              <div className="rounded-xl border bg-muted/30 p-5">
                <h4 className="font-bold text-secondary text-sm">3.5 Regulatory & Compliance Risk</h4>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  Non-adherence to statutory laws, RBI circulars, and digital lending mandates.
                </p>
              </div>
              <div className="rounded-xl border bg-muted/30 p-5">
                <h4 className="font-bold text-secondary text-sm">3.6 Strategic & Market Risk</h4>
                <p className="mt-2 text-muted-foreground leading-relaxed">
                  Economic shifts, interest rate cycles, and competitive dynamics.
                </p>
              </div>
            </div>
          </section>

          {/* Section 4 */}
          <section id="sec-surveillance" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                4.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Surveillance & Early Warning</h3>
            </div>
            <div className="mt-4 rounded-xl border bg-muted/30 p-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                Real-time portfolio surveillance dashboards, automated bounce alerts, MIS analytics, and concurrent audits enable early identification and remediation of emerging risk concentrations.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section id="sec-mitigation" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                5.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Mitigation Controls & BCP</h3>
            </div>
            <div className="mt-4 rounded-xl border bg-muted/30 p-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                Mitigation controls include algorithmic underwriting, multi-bureau verification, multi-layer cloud encryption, and comprehensive Business Continuity Planning (BCP) with Disaster Recovery (DR).
              </p>
            </div>
          </section>

          {/* Section 6 */}
          <section id="sec-roles" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                6.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Governance Roles & Responsibilities</h3>
            </div>
            <div className="mt-4 space-y-3 text-xs">
              <div className="rounded-xl border bg-muted/30 p-4">
                <h4 className="font-bold text-secondary text-sm">Board of Directors</h4>
                <p className="mt-1 text-muted-foreground leading-relaxed">
                  Sets risk appetite limits, approves ERM policies, and reviews quarterly risk reports.
                </p>
              </div>
              <div className="rounded-xl border bg-muted/30 p-4">
                <h4 className="font-bold text-secondary text-sm">Senior Management</h4>
                <p className="mt-1 text-muted-foreground leading-relaxed">
                  Implements risk controls, evaluates early warning signals, and enforces SOP compliance.
                </p>
              </div>
              <div className="rounded-xl border bg-muted/30 p-4">
                <h4 className="font-bold text-secondary text-sm">Operating Teams</h4>
                <p className="mt-1 text-muted-foreground leading-relaxed">
                  Maintain everyday operational vigilance and immediately escalate anomalous activities.
                </p>
              </div>
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
