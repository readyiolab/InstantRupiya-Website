import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage, InfoBlock } from "@/components/site/content-page";
import { pageHead } from "@/lib/site-config";
import { ApplyButton } from "@/components/site/site-shell";
import { StructuredData } from "@/components/site/structured-data";

export const Route = createFileRoute("/faqs")({
  head: () => pageHead("Frequently Asked Questions", "Find clear answers about InstantRupiya personal loan eligibility, documents, application and repayment."),
  component: Page,
});

const faqs = [
  {
    question: "What is InstantRupiya?",
    answer:
      "InstantRupiya is a digital lending platform operated under Aarsh Fincon Limited, an RBI-registered Non-Banking Financial Company (Registration No. B-10.00119), offering personal loans to salaried individuals.",
  },
  {
    question: "What are the eligibility criteria?",
    answer:
      "Applicants must be Indian citizens aged 21 years or older, actively employed as salaried professionals with a valid bank account, PAN card, Aadhaar card, and regular monthly income.",
  },
  {
    question: "What documents are needed to apply?",
    answer:
      "You will need your Permanent Account Number (PAN), Aadhaar card (for paperless e-KYC verification), recent bank statements (last 3-6 months), and recent salary slips.",
  },
  {
    question: "How fast is the loan approval and disbursal?",
    answer:
      "Once you submit your application and complete digital verification, eligible loans are appraised promptly and disbursed directly to your verified bank account.",
  },
  {
    question: "How do I repay my loan?",
    answer:
      "Repayments can be made via e-NACH auto-debit mandates, UPI, net banking, or the secure online repayment portal. Check the repayment instructions and account details applicable to your loan.",
  },
  {
    question: "Who can I contact for questions or support?",
    answer:
      "Contact support by phone at +91-7827486530, email support@instantrupiya.com, or WhatsApp at +91-7827486530.",
  },
];

function Page() {
  return (
    <>
    <StructuredData
      data={{
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map(({ question, answer }) => ({
          "@type": "Question",
          name: question,
          acceptedAnswer: { "@type": "Answer", text: answer },
        })),
      }}
    />
    <ContentPage
      title="Frequently Asked Questions"
      intro="Common questions and clear answers about personal loan eligibility, application process, documentation, and repayment on InstantRupiya."
      apply={true}
    >
      <div className="space-y-6">
        <InfoBlock title={faqs[0].question}><p>{faqs[0].answer}</p></InfoBlock>
        <InfoBlock title={faqs[1].question}><p>{faqs[1].answer}</p></InfoBlock>
        <InfoBlock title={faqs[2].question}><p>{faqs[2].answer}</p></InfoBlock>
        <InfoBlock title={faqs[3].question}><p>{faqs[3].answer}</p></InfoBlock>
        <InfoBlock title={faqs[4].question}>
          <p>
            {faqs[4].answer} Visit our{" "}
            <Link to="/repayment" className="font-semibold text-primary underline">
              Repayment page
            </Link>{" "}
            for details.
          </p>
        </InfoBlock>
        <InfoBlock title={faqs[5].question}>
          <p>
            Contact our customer support desk by phone at{" "}
            <a href="tel:+917827486530" className="font-medium text-primary underline">
              +91-7827486530
            </a>
            , email{" "}
            <a href="mailto:support@instantrupiya.com" className="font-medium text-primary underline">
              support@instantrupiya.com
            </a>
            , or WhatsApp{" "}
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
    </>
  );
}
