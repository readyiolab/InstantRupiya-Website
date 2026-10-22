import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage, InfoBlock } from "@/components/site/content-page";
import { pageHead } from "@/lib/site-config";
import { ApplyButton } from "@/components/site/site-shell";

export const Route = createFileRoute("/faqs")({
  head: () => pageHead("Frequently Asked Questions", "Find answers to commonly asked questions about InstantRupiya loans."),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      title="Frequently Asked Questions"
      intro="Common questions and clear answers about personal loan eligibility, application process, documentation, and repayment on InstantRupiya."
      apply={true}
    >
      <div className="space-y-6">
        <InfoBlock title="What is InstantRupiya?">
          <p>
            InstantRupiya is a digital lending platform operated under Aarsh Fincon Limited, an RBI-registered Non-Banking Financial Company (Registration No. B-10.00119), offering fast, transparent, and hassle-free personal loans to salaried individuals.
          </p>
        </InfoBlock>

        <InfoBlock title="What are the eligibility criteria?">
          <p>
            Applicants must be Indian citizens aged 21 years or older, actively employed as salaried professionals with a valid bank account, PAN card, Aadhaar card, and regular monthly income.
          </p>
        </InfoBlock>

        <InfoBlock title="What documents are needed to apply?">
          <p>
            You will need your Permanent Account Number (PAN), Aadhaar card (for paperless e-KYC verification), recent bank statements (last 3-6 months), and recent salary slips.
          </p>
        </InfoBlock>

        <InfoBlock title="How fast is the loan approval and disbursal?">
          <p>
            Once you submit your application and complete digital verification, eligible loans are appraised promptly and disbursed directly to your verified bank account.
          </p>
        </InfoBlock>

        <InfoBlock title="How do I repay my loan?">
          <p>
            Repayments can be made conveniently via e-NACH auto-debit mandates, UPI, net banking, or through our secure online repayment portal. Visit our{" "}
            <Link to="/repayment" className="font-semibold text-primary underline">
              Repayment page
            </Link>{" "}
            for details.
          </p>
        </InfoBlock>

        <InfoBlock title="Who can I contact for questions or support?">
          <p>
            You can reach our customer support desk via phone at{" "}
            <a href="tel:+917827486530" className="font-medium text-primary underline">
              +91-7827486530
            </a>
            , email at{" "}
            <a href="mailto:support.instantrupiya@aarshfincon.com" className="font-medium text-primary underline">
              support.instantrupiya@aarshfincon.com
            </a>
            , or chat directly via{" "}
            <a href="https://wa.me/917827486530" target="_blank" rel="noopener noreferrer" className="font-medium text-primary underline">
              WhatsApp (+91-7827486530)
            </a>.
          </p>
        </InfoBlock>
      </div>
      <div className="mt-8">
        <ApplyButton>Apply for a Loan Now</ApplyButton>
      </div>
    </ContentPage>
  );
}
