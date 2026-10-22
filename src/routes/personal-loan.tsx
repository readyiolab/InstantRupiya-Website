import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, InfoBlock } from "@/components/site/content-page";
import { pageHead } from "@/lib/site-config";

export const Route = createFileRoute("/personal-loan")({
  head: () => pageHead("Personal Loan", "Explore personal borrowing with InstantRupiya."),
  component: Page,
});
function Page() {
  return <ContentPage title="Personal Loan" intro="Explore personal borrowing with InstantRupiya." apply={true}>
      <InfoBlock title="A loan for your needs"><p>Plan for medical expenses, travel, celebrations or other personal needs. Choose an amount you can comfortably repay.</p></InfoBlock>
      <InfoBlock title="Apply online"><p>Continue to the InstantRupiya loan portal to start your application and provide the details requested there.</p></InfoBlock>
      <InfoBlock title="Review your offer"><p>Check your lender’s interest rate, fees, repayment schedule and eligibility requirements before accepting an offer.</p></InfoBlock>
  </ContentPage>;
}
