import { useState } from "react";
import { createFileRoute } from "@tanstack/react-router";
import {
  Copy,
  Check,
  Building2,
  Smartphone,
  ShieldCheck,
  FileCheck2,
  ExternalLink,
  Info,
  BadgeCheck,
} from "lucide-react";
import { ContentPage } from "@/components/site/content-page";
import { Button } from "@/components/ui/button";
import { APPLICATION_URL, pageHead } from "@/lib/site-config";
import { RepaymentCalculator } from "@/components/site/repayment-calculator";

export const Route = createFileRoute("/repayment")({
  head: () =>
    pageHead(
      "Loan Repayment",
      "Official loan repayment details for InstantRupiya. Scan & pay via UPI (GPay, PhonePe, Paytm, BHIM) or transfer via NEFT/RTGS/IMPS."
    ),
  component: RepaymentPage,
});

function RepaymentPage() {
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const handleCopy = (text: string, key: string) => {
    if (typeof navigator !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(text);
      setCopiedKey(key);
      setTimeout(() => setCopiedKey(null), 2500);
    }
  };

  return (
    <ContentPage
      title="Loan Repayment"
      intro="Make your EMI and loan repayments quickly and securely using official UPI QR codes or direct Bank Transfer."
      apply={false}
    >
      <div className="space-y-16">
        {/* ========================================================================= */}
        {/* 1. UPI PAYMENT SECTION                                                   */}
        {/* ========================================================================= */}
        <div className="rounded-3xl border border-border/80 bg-card p-6 sm:p-10 shadow-sm">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Smartphone className="h-3.5 w-3.5" />
              UPI Payment
            </div>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-secondary">
              Scan &amp; Pay via UPI
            </h2>
            <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground">
              Scan any of the QR codes below using any UPI app like GPay, PhonePe, Paytm, or BHIM. You can also copy the UPI ID and pay manually.
            </p>
          </div>

          {/* QR Cards Grid */}
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {/* QR CODE 1 */}
            <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border-2 border-emerald-500/20 bg-emerald-500/5 p-6 transition-all hover:border-emerald-500/40 hover:shadow-md">
              <div className="absolute right-4 top-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-emerald-600 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white shadow-xs">
                  <BadgeCheck className="h-3 w-3" />
                  Primary
                </span>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-800 dark:text-emerald-400">
                  QR CODE 1
                </p>
                <h3 className="mt-1 text-lg font-bold text-secondary">
                  Primary repayment UPI ID
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Bank of Baroda BHIM Baroda Pay
                </p>

                {/* QR Image Box */}
                <div className="mt-5 flex justify-center">
                  <div className="overflow-hidden rounded-xl border border-emerald-200/80 bg-white p-3 shadow-xs dark:border-emerald-900/50">
                    <img
                      src="/2.jpeg"
                      alt="QR CODE 1 UPI QR Code"
                      className="h-64 sm:h-72 w-auto max-w-full object-contain rounded-lg"
                      loading="eager"
                    />
                  </div>
                </div>

                {/* UPI ID Display & Copy */}
                <div className="mt-5">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    UPI ID
                  </label>
                  <div className="mt-1 flex items-center justify-between gap-2 rounded-xl border border-emerald-300/60 bg-white px-3.5 py-2.5 shadow-2xs dark:border-emerald-900/40 dark:bg-card">
                    <span className="font-mono text-sm sm:text-base font-bold text-secondary break-all">
                      akmef70147219@barodampay
                    </span>
                    <Button
                      type="button"
                      size="sm"
                      variant="outline"
                      onClick={() => handleCopy("akmef70147219@barodampay", "upi1")}
                      className="shrink-0 h-8 gap-1.5 rounded-lg border-emerald-300 text-emerald-800 hover:bg-emerald-50 dark:border-emerald-800 dark:text-emerald-300"
                    >
                      {copiedKey === "upi1" ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-emerald-600" />
                          <span className="text-xs font-semibold">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span className="text-xs font-semibold">Copy</span>
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-lg bg-emerald-500/10 p-3 text-xs leading-relaxed text-emerald-900 dark:text-emerald-300">
                <span className="font-semibold">Notice:</span> After payment, please share the screenshot with our support team for faster processing.
              </div>
            </div>

            {/* QR CODE 2 */}
            <div className="relative flex flex-col justify-between overflow-hidden rounded-2xl border-2 border-sky-500/20 bg-sky-500/5 p-6 transition-all hover:border-sky-500/40 hover:shadow-md">
              <div className="absolute right-4 top-4">
                <span className="inline-flex items-center gap-1 rounded-full bg-sky-600 px-2.5 py-0.5 text-[11px] font-bold uppercase tracking-wide text-white shadow-xs">
                  <BadgeCheck className="h-3 w-3" />
                  Alternate
                </span>
              </div>

              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-sky-800 dark:text-sky-400">
                  QR CODE 2
                </p>
                <h3 className="mt-1 text-lg font-bold text-secondary">
                  Alternate repayment UPI ID
                </h3>
                <p className="text-xs text-muted-foreground mt-0.5">
                  Paytm Accepted Here
                </p>

                {/* QR Image Box */}
                <div className="mt-5 flex justify-center">
                  <div className="overflow-hidden rounded-xl border border-sky-200/80 bg-white p-3 shadow-xs dark:border-sky-900/50">
                    <img
                      src="/1.png"
                      alt="QR CODE 2 UPI QR Code"
                      className="h-64 sm:h-72 w-auto max-w-full object-contain rounded-lg"
                      loading="eager"
                    />
                  </div>
                </div>

                {/* UPI ID Display & Copy */}
                <div className="mt-5">
                  <label className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                    UPI ID
                  </label>
                  <div className="mt-1 flex items-center justify-between gap-2 rounded-xl border border-sky-300/60 bg-white px-3.5 py-2.5 shadow-2xs dark:border-sky-900/40 dark:bg-card">
                    <span className="font-mono text-sm sm:text-base font-bold text-secondary break-all">
                      paytmqr138mma7vyj@paytm
                    </span>
                    <Button
                      type="button"
                      size="sm"
                      variant="outline"
                      onClick={() => handleCopy("paytmqr138mma7vyj@paytm", "upi2")}
                      className="shrink-0 h-8 gap-1.5 rounded-lg border-sky-300 text-sky-800 hover:bg-sky-50 dark:border-sky-800 dark:text-sky-300"
                    >
                      {copiedKey === "upi2" ? (
                        <>
                          <Check className="h-3.5 w-3.5 text-sky-600" />
                          <span className="text-xs font-semibold">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="h-3.5 w-3.5" />
                          <span className="text-xs font-semibold">Copy</span>
                        </>
                      )}
                    </Button>
                  </div>
                </div>
              </div>

              <div className="mt-4 rounded-lg bg-sky-500/10 p-3 text-xs leading-relaxed text-sky-900 dark:text-sky-300">
                <span className="font-semibold">Notice:</span> After payment, please share the screenshot with our support team for faster processing.
              </div>
            </div>
          </div>

          {/* Works with all UPI apps bar */}
          <div className="mt-8 rounded-2xl border border-border bg-muted/30 p-5">
            <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground text-center sm:text-left">
              Works with all UPI apps:
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-2.5">
              {[
                { name: "GPay", color: "text-blue-600 bg-blue-50 border-blue-200 dark:bg-blue-950/40 dark:border-blue-900" },
                { name: "PhonePe", color: "text-purple-600 bg-purple-50 border-purple-200 dark:bg-purple-950/40 dark:border-purple-900" },
                { name: "Paytm", color: "text-sky-600 bg-sky-50 border-sky-200 dark:bg-sky-950/40 dark:border-sky-900" },
                { name: "BHIM", color: "text-orange-600 bg-orange-50 border-orange-200 dark:bg-orange-950/40 dark:border-orange-900" },
                { name: "Amazon Pay", color: "text-amber-700 bg-amber-50 border-amber-200 dark:bg-amber-950/40 dark:border-amber-900" },
              ].map((app) => (
                <span
                  key={app.name}
                  className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-1.5 text-xs font-bold shadow-2xs ${app.color}`}
                >
                  <Smartphone className="h-3 w-3" />
                  {app.name}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 2. BANK TRANSFER SECTION                                                 */}
        {/* ========================================================================= */}
        <div className="rounded-3xl border border-border/80 bg-card p-6 sm:p-10 shadow-sm">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-3.5 py-1 text-xs font-semibold uppercase tracking-wider text-primary">
              <Building2 className="h-3.5 w-3.5" />
              Bank Transfer
            </div>
            <h2 className="mt-3 text-2xl sm:text-3xl font-extrabold text-secondary">
              Pay via Bank Transfer
            </h2>
            <p className="mt-2 text-sm sm:text-base leading-relaxed text-muted-foreground">
              Use the following bank details to make an NEFT, RTGS, or IMPS transfer. Please use your loan/application ID as the payment reference.
            </p>
          </div>

          <div className="mt-8 overflow-hidden rounded-2xl border border-border bg-gradient-to-br from-card to-muted/20 shadow-xs">
            {/* Header sub-card */}
            <div className="border-b border-border bg-secondary/5 px-6 py-4 sm:flex sm:items-center sm:justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-primary">
                  InstantRupiya Financial Services
                </p>
                <h3 className="text-lg font-extrabold text-secondary mt-0.5">
                  Official Repayment Account
                </h3>
              </div>
              <span className="mt-2 sm:mt-0 inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                <ShieldCheck className="h-3.5 w-3.5" />
                Verified Current Account
              </span>
            </div>

            {/* Details Grid */}
            <div className="grid gap-4 p-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Account Name */}
              <div className="rounded-xl border border-border bg-background/60 p-4">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Account Name
                </span>
                <div className="mt-1.5 flex items-center justify-between gap-2">
                  <p className="text-base font-bold text-secondary">Aarsh Fincon Limited</p>
                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    onClick={() => handleCopy("Aarsh Fincon Limited", "accName")}
                    className="h-7 w-7 text-muted-foreground hover:text-foreground"
                    title="Copy Account Name"
                  >
                    {copiedKey === "accName" ? (
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Account Number */}
              <div className="rounded-xl border border-border bg-background/60 p-4">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Account Number
                </span>
                <div className="mt-1.5 flex items-center justify-between gap-2">
                  <p className="font-mono text-base font-bold tracking-wider text-secondary">
                    16200500005219
                  </p>
                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    onClick={() => handleCopy("16200500005219", "accNum")}
                    className="h-7 w-7 text-muted-foreground hover:text-foreground"
                    title="Copy Account Number"
                  >
                    {copiedKey === "accNum" ? (
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </Button>
                </div>
              </div>

              {/* IFSC Code */}
              <div className="rounded-xl border border-border bg-background/60 p-4">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  IFSC Code
                </span>
                <div className="mt-1.5 flex items-center justify-between gap-2">
                  <p className="font-mono text-base font-bold tracking-wider text-secondary">
                    BARB0UDARAJ
                  </p>
                  <Button
                    type="button"
                    size="icon"
                    variant="ghost"
                    onClick={() => handleCopy("BARB0UDARAJ", "ifsc")}
                    className="h-7 w-7 text-muted-foreground hover:text-foreground"
                    title="Copy IFSC Code"
                  >
                    {copiedKey === "ifsc" ? (
                      <Check className="h-3.5 w-3.5 text-emerald-600" />
                    ) : (
                      <Copy className="h-3.5 w-3.5" />
                    )}
                  </Button>
                </div>
              </div>

              {/* Bank Name */}
              <div className="rounded-xl border border-border bg-background/60 p-4">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Bank Name
                </span>
                <p className="mt-1.5 text-base font-bold text-secondary">
                  Bank Of Baroda
                </p>
              </div>

              {/* Branch */}
              <div className="rounded-xl border border-border bg-background/60 p-4">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Branch
                </span>
                <p className="mt-1.5 text-base font-bold text-secondary">
                  Market Yard
                </p>
              </div>

              {/* Account Type */}
              <div className="rounded-xl border border-border bg-background/60 p-4">
                <span className="text-[11px] font-semibold uppercase tracking-wider text-muted-foreground">
                  Account Type
                </span>
                <p className="mt-1.5 text-base font-bold text-secondary">
                  Current Account
                </p>
              </div>
            </div>

            {/* Guidance banner */}
            <div className="border-t border-border bg-amber-500/10 px-6 py-4 text-xs leading-relaxed text-amber-950 dark:text-amber-300">
              <span className="font-bold uppercase tracking-wide">Important Note:</span> Please use your{" "}
              <strong className="underline">loan/application ID</strong> as the payment reference or narration. After payment, please share the screenshot and UTR with our support team for faster processing.
            </div>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. VERIFIED PAYMENT ADVISORY & PORTAL ACCESS                             */}
        {/* ========================================================================= */}
        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                <ShieldCheck className="h-4 w-4" />
                Security Guidelines
              </div>
              <h3 className="mt-2 text-xl font-bold text-secondary">
                Pay Only to Official Accounts
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Always ensure repayments are made only to <strong>Aarsh Fincon Limited</strong>. InstantRupiya will never ask you to transfer funds to any personal individual bank account or share your UPI PIN / OTP.
              </p>
            </div>
            <div className="mt-6 flex items-center gap-2 text-xs text-muted-foreground">
              <Info className="h-4 w-4 shrink-0 text-primary" />
              Receipts are issued immediately upon credit confirmation.
            </div>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 flex flex-col justify-between">
            <div>
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-primary">
                <FileCheck2 className="h-4 w-4" />
                Track Your Loan Status
              </div>
              <h3 className="mt-2 text-xl font-bold text-secondary">
                Check Real-Time Balance
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Log into your InstantRupiya customer dashboard to view your repayment schedule, outstanding balance, download NOCs, and see payment clearance updates.
              </p>
            </div>
            <div className="mt-6">
              <Button asChild size="lg" className="w-full sm:w-auto h-11 rounded-full gap-2">
                <a href={APPLICATION_URL} target="_blank" rel="noopener noreferrer">
                  Open Loan Portal
                  <ExternalLink className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* EMI Calculator */}
        <RepaymentCalculator />
      </div>
    </ContentPage>
  );
}
