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
  Lock,
  Mail,
  Phone,
  MessageCircle,
  UserCheck,
  CreditCard,
  Smartphone,
  MapPin,
  Camera,
  FolderLock,
  CheckCircle2,
  AlertTriangle,
  ArrowRight,
  ExternalLink,
} from "lucide-react";

export const Route = createFileRoute("/privacy-policy")({
  head: () =>
    pageHead(
      "Privacy Policy",
      "Privacy Policy governing digital lending services on the InstantRupiya platform (Aarsh Fincon Limited)."
    ),
  component: Page,
});

const legalLinks = [
  { to: "/privacy-policy", label: "Privacy Policy", active: true },
  { to: "/terms-and-conditions", label: "Terms & Conditions" },
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
  { id: "sec-introduction", label: "1. Introduction & Commitment" },
  { id: "sec-info-collected", label: "2. Information We Collect" },
  { id: "sec-location", label: "3. Location Information" },
  { id: "sec-permissions", label: "4. Camera, Mic & Storage" },
  { id: "sec-purpose", label: "5. Purpose of Collection" },
  { id: "sec-sharing", label: "6. Sharing & Disclosures" },
  { id: "sec-security", label: "7. Data Security Safeguards" },
  { id: "sec-retention", label: "8. Data Retention Policy" },
  { id: "sec-rights", label: "9. User Rights & Consent" },
  { id: "sec-third-party", label: "10. Third-Party Services" },
  { id: "sec-updates", label: "11. Policy Updates & Governance" },
  { id: "sec-contact", label: "12. Grievance & Contact" },
];

function Page() {
  const handlePrint = () => {
    if (typeof window !== "undefined") {
      window.print();
    }
  };

  return (
    <ContentPage
      title="Privacy Policy"
      intro="Privacy Policy governing digital lending services on the InstantRupiya platform."
      apply={false}
    >
      {/* Regulated Entity & Status Banner */}
      <div className="mb-6 sm:mb-8 rounded-2xl border bg-card p-4 sm:p-6 shadow-sm transition-all">
        <div className="flex flex-wrap items-center justify-between gap-3 sm:gap-4 border-b pb-4 sm:pb-5">
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 sm:h-12 sm:w-12 shrink-0 items-center justify-center rounded-xl bg-primary/10 text-primary">
              <ShieldCheck className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <div>
              <span className="text-[10px] sm:text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                Official Regulatory Document
              </span>
              <h2 className="text-lg sm:text-xl font-bold text-secondary">
                InstantRupiya Digital Lending Privacy Notice
              </h2>
            </div>
          </div>
          <Button
            onClick={handlePrint}
            variant="outline"
            className="flex items-center gap-2 rounded-full border-primary/40 hover:bg-primary/10 text-xs sm:text-sm h-9 sm:h-10 px-3 sm:px-4"
          >
            <Printer className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary" />
            <span>Print Document</span>
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
        {/* Sticky Sidebar Navigation & Inquiries (appears first on desktop, lower on mobile) */}
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

          {/* Regulatory Inquiries Desk */}
          <div className="rounded-2xl border border-primary/30 bg-primary/5 p-5">
            <div className="flex items-center gap-2 text-primary font-bold text-sm">
              <Mail className="h-4 w-4" />
              <span>Regulatory Inquiries Desk</span>
            </div>
            <p className="mt-2 text-xs text-muted-foreground leading-relaxed">
              For official legal notices, compliance queries, or grievance escalations:
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
          <section id="sec-introduction" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                1.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Introduction & Corporate Commitment</h3>
            </div>
            <div className="mt-4 space-y-4 text-sm leading-relaxed text-muted-foreground">
              <p>
                At <strong className="text-secondary">InstantRupiya</strong> (operating under the corporate
                umbrella of <strong className="text-secondary">Aarsh Fincon Limited</strong>, an RBI-registered
                Non-Banking Financial Company with Registration No.{" "}
                <strong className="text-secondary">B-10.00119</strong>), we are dedicated to protecting the
                privacy, confidentiality, and data integrity of all users who access or use our digital platform,
                mobile applications, and financial services.
              </p>
              <p>
                This Privacy Policy explains the categories of personal, financial, and device information we
                collect, how it is processed, stored, shared with regulated partners, and safeguarded against
                unauthorized access.
              </p>
              <div className="rounded-xl border border-destructive/20 bg-destructive/5 p-4 text-secondary">
                <div className="flex items-start gap-2.5">
                  <AlertTriangle className="h-5 w-5 shrink-0 text-destructive mt-0.5" />
                  <div>
                    <h4 className="font-bold text-xs uppercase tracking-wider text-destructive">
                      Mandatory Acceptance
                    </h4>
                    <p className="mt-1 text-xs text-muted-foreground leading-relaxed">
                      By accessing, downloading, registering with, or utilizing any services provided by{" "}
                      <strong className="text-secondary">InstantRupiya</strong>, you acknowledge that you have
                      read, understood, and agreed to be bound by the terms of this Privacy Policy. If you do not
                      agree with any part of this Policy, you must discontinue use of our services immediately.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Section 2 */}
          <section id="sec-info-collected" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                2.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Categories of Information We Collect</h3>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              To provide credit appraisal, loan underwriting, and digital disbursement services efficiently and in
              compliance with RBI guidelines, InstantRupiya may collect and process the following information:
            </p>

            <div className="mt-6 space-y-4">
              <div className="rounded-xl border bg-muted/30 p-5">
                <div className="flex items-center gap-3">
                  <UserCheck className="h-5 w-5 text-primary" />
                  <h4 className="font-bold text-secondary">2.1 Personal Identification Data</h4>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Includes full name, date of birth, gender, residential address, mobile number, email address,
                  Permanent Account Number (PAN), Aadhaar details (obtained strictly in accordance with legally
                  permitted UIDAI/offline XML guidelines), and selfie/photograph for biometric liveness matching.
                </p>
              </div>

              <div className="rounded-xl border bg-muted/30 p-5">
                <div className="flex items-center gap-3">
                  <CreditCard className="h-5 w-5 text-primary" />
                  <h4 className="font-bold text-secondary">2.2 Financial & Employment Data</h4>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Includes bank account number, IFSC code, monthly salary/income statements, employment details,
                  employer name, existing loan obligations, and credit bureau scores retrieved from authorized
                  credit information companies (CIBIL, Experian, CRIF, Equifax).
                </p>
              </div>

              <div className="rounded-xl border bg-muted/30 p-5">
                <div className="flex items-center gap-3">
                  <Smartphone className="h-5 w-5 text-primary" />
                  <h4 className="font-bold text-secondary">2.3 Technical & Device Information</h4>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Includes device hardware model, operating system version, IP address, unique device identifiers,
                  browser type, telecommunication network carrier details, and session timestamps to verify
                  authorized access and mitigate cyber-fraud.
                </p>
              </div>
            </div>
          </section>

          {/* Section 3 */}
          <section id="sec-location" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                3.0
              </span>
              <div className="flex items-center gap-2">
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="text-2xl font-bold text-secondary">Location Information</h3>
              </div>
            </div>
            <div className="mt-4 rounded-xl border bg-muted/30 p-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                We may collect real-time or approximate geolocation information strictly during the loan application
                and onboarding workflow to verify residential serviceability, prevent fraudulent remote logins, comply
                with RBI digital lending territorial regulations, and confirm identity authenticity.
              </p>
            </div>
          </section>

          {/* Section 4 */}
          <section id="sec-permissions" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                4.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">
                Mobile Device Permissions (Camera, Microphone & Storage)
              </h3>
            </div>
            <div className="mt-6 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border bg-muted/30 p-5">
                <div className="flex items-center gap-2 text-secondary font-bold">
                  <Camera className="h-5 w-5 text-primary" />
                  <h4>Camera & Microphone Access</h4>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Camera permissions are required to capture live KYC selfies, upload identity proofs, and perform
                  optical document verification. Microphone access may be utilized solely where video customer
                  identification (V-CIP) is mandated by lending partners.
                </p>
              </div>

              <div className="rounded-xl border bg-muted/30 p-5">
                <div className="flex items-center gap-2 text-secondary font-bold">
                  <FolderLock className="h-5 w-5 text-primary" />
                  <h4>Storage / File Access</h4>
                </div>
                <p className="mt-2 text-xs leading-relaxed text-muted-foreground">
                  Storage access is required on a one-time basis to enable users to upload bank statements, salary
                  slips, and utility bills.{" "}
                  <strong className="text-secondary">
                    We do not access, scan, or copy personal photo galleries or private media.
                  </strong>
                </p>
              </div>
            </div>
          </section>

          {/* Section 5 */}
          <section id="sec-purpose" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                5.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Purpose of Information Collection</h3>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              The data collected by InstantRupiya is utilized exclusively for legitimate financial and regulatory
              operations:
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {[
                "Customer identity verification and digital KYC onboarding",
                "Loan application evaluation and creditworthiness assessment",
                "Underwriting and debt-to-income risk calculations",
                "Fraud prevention, anti-impersonation, and risk mitigation",
                "Statutory compliance with RBI and financial regulations",
                "Customer support, grievance handling, and loan servicing",
                "Communication regarding loan status, repayment, and KFS",
                "Security monitoring, system auditing, and account integrity",
              ].map((purpose, idx) => (
                <div key={idx} className="flex items-start gap-2.5 rounded-lg border bg-muted/20 p-3 text-xs">
                  <CheckCircle2 className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                  <span className="font-medium text-secondary">{purpose}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Section 6 */}
          <section id="sec-sharing" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                6.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Information Sharing & Disclosures</h3>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              InstantRupiya shares user information strictly on a need-to-know basis with verified partners to fulfill
              lending operations:
            </p>
            <ul className="mt-4 space-y-2.5 text-xs text-muted-foreground">
              <li className="flex items-start gap-2 rounded-lg border bg-muted/20 p-3">
                <ArrowRight className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <div>
                  <strong className="text-secondary">Regulated Lending Partners:</strong> Partner banks and NBFCs
                  for credit sanction and loan disbursement.
                </div>
              </li>
              <li className="flex items-start gap-2 rounded-lg border bg-muted/20 p-3">
                <ArrowRight className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <div>
                  <strong className="text-secondary">Credit Bureaus:</strong> Authorized credit information companies
                  (CIBIL, Experian, CRIF, Equifax).
                </div>
              </li>
              <li className="flex items-start gap-2 rounded-lg border bg-muted/20 p-3">
                <ArrowRight className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <div>
                  <strong className="text-secondary">KYC Verification Agencies:</strong> Government-authorized
                  verification utilities (NSDL, UIDAI, Digilocker).
                </div>
              </li>
              <li className="flex items-start gap-2 rounded-lg border bg-muted/20 p-3">
                <ArrowRight className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <div>
                  <strong className="text-secondary">Payment & Banking Service Providers:</strong> Regulated payment
                  gateways for secure disbursement and NACH mandate processing.
                </div>
              </li>
              <li className="flex items-start gap-2 rounded-lg border bg-muted/20 p-3">
                <ArrowRight className="h-4 w-4 shrink-0 text-primary mt-0.5" />
                <div>
                  <strong className="text-secondary">Statutory Authorities:</strong> Law enforcement or judicial bodies
                  where explicitly mandated by legal decree.
                </div>
              </li>
            </ul>

            <div className="mt-5 rounded-xl border border-primary/30 bg-primary/10 p-4">
              <div className="flex items-center gap-2 text-primary font-bold text-xs uppercase tracking-wider">
                <ShieldCheck className="h-4 w-4" />
                <span>Non-Sale Assurance</span>
              </div>
              <p className="mt-1 text-xs text-secondary font-medium">
                We never sell, rent, or trade your personal or financial data to third-party advertisers.
              </p>
            </div>
          </section>

          {/* Section 7 */}
          <section id="sec-security" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                7.0
              </span>
              <div className="flex items-center gap-2">
                <Lock className="h-5 w-5 text-primary" />
                <h3 className="text-2xl font-bold text-secondary">Data Security Safeguards</h3>
              </div>
            </div>
            <div className="mt-4 rounded-xl border bg-muted/30 p-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                We enforce bank-grade administrative, technical, and physical safeguards. All data transmission is
                secured using <strong className="text-secondary">256-bit SSL encryption</strong>, with strict server
                firewalling, access logs, and encrypted database storage.
              </p>
            </div>
          </section>

          {/* Section 8 */}
          <section id="sec-retention" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                8.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Data Retention Policy</h3>
            </div>
            <div className="mt-4 rounded-xl border bg-muted/30 p-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                Personal and financial records are retained only for as long as necessary to fulfill lending, legal,
                audit, and statutory requirements (including the minimum{" "}
                <strong className="text-secondary">5-year retention mandate</strong> under the Prevention of Money
                Laundering Act (PMLA) and RBI regulations).
              </p>
            </div>
          </section>

          {/* Section 9 */}
          <section id="sec-rights" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                9.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">User Rights & Consent Withdrawal</h3>
            </div>
            <div className="mt-4 rounded-xl border bg-muted/30 p-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                Users possess the legal right to review their personal information, request rectification of
                inaccurate data, withdraw app permissions via device settings, or request account closure (subject to
                the full settlement of all outstanding loan dues and statutory compliance).
              </p>
            </div>
          </section>

          {/* Section 10 */}
          <section id="sec-third-party" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                10.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Third-Party Services</h3>
            </div>
            <div className="mt-4 rounded-xl border bg-muted/30 p-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                Our platform may contain links to authorized external banking or payment partners. Users are encouraged
                to review the respective privacy notices of third-party service providers.
              </p>
            </div>
          </section>

          {/* Section 11 */}
          <section id="sec-updates" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                11.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Policy Updates & Governance</h3>
            </div>
            <div className="mt-4 rounded-xl border bg-muted/30 p-5 text-sm leading-relaxed text-muted-foreground">
              <p>
                InstantRupiya reserves the right to amend this Privacy Policy periodically. Updated versions become
                immediately effective upon publication on this platform.
              </p>
            </div>
          </section>

          {/* Section 12 */}
          <section id="sec-contact" className="scroll-mt-28 rounded-2xl border bg-card p-7 shadow-sm">
            <div className="flex items-center gap-3">
              <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-xs font-bold text-primary">
                12.0
              </span>
              <h3 className="text-2xl font-bold text-secondary">Grievance Redressal & Contact Desk</h3>
            </div>
            <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
              For privacy-related inquiries, data access requests, or formal grievances, please reach out to our
              designated Nodal Compliance Officer:
            </p>
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
                  <span className="text-muted-foreground">Digital Lending Brand:</span>{" "}
                  <strong className="text-secondary">InstantRupiya</strong>
                </div>
                <div>
                  <span className="text-muted-foreground">Official Email:</span>{" "}
                  <a
                    href="mailto:support.instantrupiya@aarshfincon.com"
                    className="font-medium text-primary underline break-all"
                  >
                    support.instantrupiya@aarshfincon.com
                  </a>
                </div>
                <div>
                  <span className="text-muted-foreground">Helpline:</span>{" "}
                  <a href="tel:+917827486530" className="font-medium text-primary underline">
                    +91-7827486530
                  </a>
                </div>
              </div>
            </div>
          </section>

          {/* Document Footer Certificate */}
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
