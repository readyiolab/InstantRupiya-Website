import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, InfoBlock } from "@/components/site/content-page";
import { pageHead } from "@/lib/site-config";

export const Route = createFileRoute("/about")({
  head: () => pageHead("About Us", "Get to know InstantRupiya."),
  component: Page,
});
function Page() {
  return <ContentPage title="About Us" intro="Get to know InstantRupiya." apply={true}>
      <InfoBlock title="Personal borrowing, online"><p>InstantRupiya helps you begin your personal loan application online.</p></InfoBlock>
      <InfoBlock title="Informed decisions"><p>Understand the cost of borrowing, check your repayment capacity and read the lender’s agreement before accepting any loan.</p></InfoBlock>
  </ContentPage>;
}
