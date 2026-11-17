import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, InfoBlock } from "@/components/site/content-page";
import { pageHead, SITE_URL } from "@/lib/site-config";
import { StructuredData } from "@/components/site/structured-data";

export const Route = createFileRoute("/personal-loan")({
  head: () => pageHead("Personal Loan", "Explore personal borrowing with InstantRupiya."),
  component: Page,
});
function Page() {
  return <>
    <StructuredData
      data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: "Personal loan information and application access",
        serviceType: "Personal loan",
        description:
          "Explore personal borrowing information and access the loan application portal through InstantRupiya. Loan approval, rates, fees and terms are determined by the applicable regulated lender.",
        url: `${SITE_URL}/personal-loan`,
        provider: { "@id": `${SITE_URL}/#organization` },
        areaServed: { "@type": "Country", name: "India" },
      }}
    />
    <ContentPage title="Personal Loan" intro="Explore personal borrowing with InstantRupiya." apply={true}>
      <InfoBlock title="A loan for your needs"><p>Plan for medical expenses, travel, celebrations or other personal needs. Choose an amount you can comfortably repay.</p></InfoBlock>
      <InfoBlock title="Apply online"><p>Continue to the InstantRupiya loan portal to start your application and provide the details requested there.</p></InfoBlock>
      <InfoBlock title="Review your offer"><p>Check your lender’s interest rate, fees, repayment schedule and eligibility requirements before accepting an offer.</p></InfoBlock>
    </ContentPage>
  </>;
}
