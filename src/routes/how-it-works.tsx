import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, InfoBlock } from "@/components/site/content-page";
import { pageHead } from "@/lib/site-config";

export const Route = createFileRoute("/how-it-works")({
  head: () => pageHead("How it works", "Your application journey, from details to a loan decision."),
  component: Page,
});
function Page() {
  return <ContentPage title="How it works" intro="Your application journey, from details to a loan decision." apply={true}>
      <InfoBlock title="01 · Fill basic details"><p>Start your application on the InstantRupiya loan portal and enter your personal and employment details.</p></InfoBlock>
      <InfoBlock title="02 · Submit documents"><p>Provide the identity and income documents requested during your application.</p></InfoBlock>
      <InfoBlock title="03 · Review and accept"><p>Review the offer, charges and repayment schedule. Approval and disbursal are subject to your lender’s checks.</p></InfoBlock>
  </ContentPage>;
}
