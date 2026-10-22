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
  Lock,
  UserX,
  Gavel,
  Mail,
  Phone,
  MessageCircle,
} from "lucide-react";

export const Route = createFileRoute("/terms-and-conditions")({
  head: () =>
    pageHead(
      "Terms & Conditions",
      "Terms and Conditions governing digital lending services on InstantRupiya (Aarsh Fincon Limited)."
    ),
  component: Page,
});

const legalLinks = [
  { to: "/privacy-policy", label: "Privacy Policy" },
  { to: "/terms-and-conditions", label: "Terms & Conditions", active: true },
  { to: "/refund-policy", label: "Refund & Cancellation" },
  { to: "/interest-rate-policy", label: "Interest Rate Policy" },
  { to: "/fair-practices-code", label: "Fair Practices Code" },
  { to: "/corporate-governance-policy", label: "Corporate Governance" },
  { to: "/kyc-aml-policy", label: "KYC & AML Policy" },
  { to: "/risk-management-policy", label: "Risk Management" },
  { to: "/disclaimer", label: "Legal Disclaimer" },
  { to: "/grievance-redressal", label: "Grievance Policy" },
] as const;

const tocItems = [
  { id: "sec-acceptance", label: "1. Acceptance of Terms" },
  { id: "sec-nature", label: "2. Nature of Services" },
  { id: "sec-security", label: "3. Account Security" },
  { id: "sec-application", label: "4. Loan Application Process" },
  { id: "sec-obligations", label: "5. User Obligations" },
  { id: "sec-ip", label: "6. Intellectual Property" },
  { id: "sec-termination", label: "7. Suspension & Termination" },
  { id: "sec-liability", label: "8. Limitation of Liability" },
  { id: "sec-indemnity", label: "9. Indemnification" },
  { id: "sec-jurisdiction", label: "10. Governing Law & Jurisdiction" },
  { id: "sec-notices", label: "11. Legal Notices & Communication" },
];

function Page() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <ContentPage
      title="Terms & Conditions"
      intro="Terms and conditions governing the access and utilization of digital lending services on the InstantRupiya platform."
      apply={false}
    >
      {/* Regulatory Header Badge */}
      <div className="mb-6 sm:mb-8 rounded-2xl border bg-card p-4 sm:p-6 shadow-sm transition-all">
        <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 border-b pb-4 sm:pb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <Scale className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Official Legal Agreement
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-secondary">
                InstantRupiya Digital Lending Terms of Service
              </h2>
            </div>
          </div>
          <Button
            onClick={handlePrint}
            variant="outline"
            className="flex items-center gap-2 rounded-full border-primary/40 hover:bg-primary/10 text-xs sm:text-sm h-9 sm:h-10 px-3 sm:px-4"
          >
            <Printer className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
            <span>Print Terms</span>
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
        {/* Sticky Sidebar Navigation & Contacts (appears first on desktop, lower on mobile) */}
        <aside className="space-y-6 lg:sticky lg:top-24 order-last lg:order-first">
          <div className="rounded-2xl border bg-card p-5 shadow-sm">
            <h3 className="text-sm font-bold uppercase tracking-wider text-secondary flex items-center gap-2">
              <FileText className="h-4 w-4 text-primary" />
              Contents in this Document
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
              <span>Official Legal Desk</span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              For official notices, contract queries, or legal escalations:
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
          <section id="sec-acceptance" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                1.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Acceptance of Terms</h3>
            </div>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                These Terms and Conditions (&quot;Terms&quot;) constitute a legally binding agreement between you (&quot;User&quot;, &quot;Borrower&quot;) and <strong className="text-secondary">InstantRupiya</strong>, operated under the corporate umbrella of <strong className="text-secondary">Aarsh Fincon Limited</strong> (an RBI-registered Non-Banking Financial Company, Registration No. <strong className="text-secondary">B-10.00119</strong>).
              </p>
              <p>By accessing, registering on, or utilizing our services, you confirm that:</p>
              <ul className="space-y-2 text-xs">
                <li className="flex items-start gap-2.5 rounded-lg border bg-muted/20 p-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                  <span>You are an Indian citizen of at least 18 years of age and legally competent to enter into a binding contract.</span>
                </li>
                <li className="flex items-start gap-2.5 rounded-lg border bg-muted/20 p-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                  <span>You have provided true, accurate, current, and complete personal and financial information.</span>
                </li>
                <li className="flex items-start gap-2.5 rounded-lg border bg-muted/20 p-3">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                  <span>You agree to comply with all applicable local, national, and RBI regulatory guidelines.</span>
                </li>
              </ul>
            </div>
          </section>

          {/* Section 2 */}
          <section id="sec-nature" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                2.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Nature of Services & Platform Facilitation</h3>
            </div>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                <strong className="text-secondary">InstantRupiya</strong> operates as a digital financial technology platform that facilitates borrower onboarding, document collection, credit assessment, and loan servicing in collaboration with authorized and regulated lending partners.
              </p>
              <div className="rounded-xl border border-primary/20 bg-primary/5 p-4 text-secondary">
                <h4 className="font-bold text-xs uppercase tracking-wider text-primary">
                  Underwriting Disclaimers
                </h4>
                <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                  InstantRupiya does not guarantee automatic loan approval, specific loan amounts, or fixed processing timelines. Final underwriting, risk rating, interest pricing, and credit decisions rest solely with the respective Regulated Entity.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="sec-security" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                3.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Registration & Account Security</h3>
            </div>
            <div className="mt-4 rounded-xl border bg-muted/30 p-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                Users must maintain the strict confidentiality of their account credentials, passwords, and OTPs. Any actions taken through an authenticated user account are deemed to be authorized by the registered user.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="sec-application" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                4.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Loan Application Process</h3>
            </div>
            <div className="mt-4 rounded-xl border bg-muted/30 p-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                Applicants must submit valid Officially Valid Documents (PAN, Aadhaar/address proof, bank statements, and income slips). Submitting an application does not constitute a commitment to disburse funds.
              </p>
            </div>
          </section>

          {/* Section 5 */}
          <section id="sec-obligations" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                5.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">User Obligations & Prohibited Conduct</h3>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              Users agree to utilize the platform solely for lawful purposes. Prohibited activities include:
            </p>
            <div className="mt-4 space-y-2.5 text-xs">
              {[
                "Providing false, forged, or misleading documentation.",
                "Impersonating another person or entity.",
                "Engaging in money laundering or fraudulent schemes.",
                "Attempting unauthorized server access or reverse engineering.",
                "Distributing viruses, malware, or harmful automated bots.",
                "Violating RBI guidelines or statutory Indian laws.",
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-2.5 rounded-lg border bg-muted/20 p-3">
                  <UserX className="h-4 w-4 shrink-0 text-destructive mt-0.5" />
                  <span className="font-medium text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 6 */}
          <section id="sec-ip" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                6.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Intellectual Property Rights</h3>
            </div>
            <div className="mt-4 rounded-xl border bg-muted/30 p-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                All trademarks, logos, UI designs, and software belong exclusively to <strong className="text-secondary">InstantRupiya</strong> and <strong className="text-secondary">Aarsh Fincon Limited</strong>. Unauthorized use, copying, or reverse compilation is strictly prohibited.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section id="sec-termination" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                7.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Suspension & Termination</h3>
            </div>
            <div className="mt-4 rounded-xl border bg-muted/30 p-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                We reserve the right to suspend or terminate account access immediately if terms are violated, fraud is suspected, or statutory directives necessitate restriction.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section id="sec-liability" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                8.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Limitation of Liability</h3>
            </div>
            <div className="mt-4 rounded-xl border bg-muted/30 p-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                To the maximum extent permitted by law, InstantRupiya shall not be liable for indirect, incidental, or consequential damages resulting from technical downtime, network failure, or rejected credit applications.
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section id="sec-indemnity" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                9.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Indemnification</h3>
            </div>
            <div className="mt-4 rounded-xl border bg-muted/30 p-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                Users agree to indemnify and hold harmless InstantRupiya, Aarsh Fincon Limited, and its officers against any losses, liabilities, or legal expenses arising from misuse of services or breach of these Terms.
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section id="sec-jurisdiction" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                10.0
              </span>
              <div className="flex items-center gap-2">
                <Gavel className="h-5 w-5 text-primary" />
                <h3 className="text-2xl font-bold text-secondary">Governing Law & Jurisdiction</h3>
              </div>
            </div>
            <div className="mt-4 rounded-xl border bg-muted/30 p-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                These Terms are governed by and construed in accordance with the substantive laws of India. Any legal dispute or proceeding arising out of or related to these Terms shall be subject to the exclusive jurisdiction of the competent courts in <strong className="text-secondary">New Delhi, India</strong>.
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section id="sec-notices" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                11.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Legal Notices & Communication</h3>
            </div>
            <div className="mt-5 rounded-xl border bg-accent/30 p-6 space-y-3 text-sm">
              <p className="text-base font-bold text-secondary">
                Aarsh Fincon Limited (InstantRupiya)
              </p>
              <div className="grid gap-2 text-xs sm:grid-cols-2">
                <div>
                  <span className="text-muted-foreground">Registration No.:</span>{" "}
                  <strong className="text-secondary">B-10.00119 (RBI Registered NBFC)</strong>
                </div>
                <div>
                  <span className="text-muted-foreground">Official Inquiries:</span>{" "}
                  <a
                    href="mailto:support.instantrupiya@aarshfincon.com"
                    className="font-medium text-primary underline break-all"
                  >
                    support.instantrupiya@aarshfincon.com
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Document Footer */}
          <div className="rounded-xl border bg-muted/40 p-4 text-center text-xs text-muted-foreground">
            <p className="font-medium">
              Official Legal Terms • InstantRupiya (Aarsh Fincon Limited)
            </p>
            <p className="mt-1">Effective Date: September 2024</p>
          </div>
        </div>
      </div>
    </ContentPage>
  );
}
