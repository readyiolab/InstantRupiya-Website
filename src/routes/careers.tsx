import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, InfoBlock } from "@/components/site/content-page";
import { pageHead } from "@/lib/site-config";

export const Route = createFileRoute("/careers")({
  head: () => pageHead("Careers", "Opportunities at InstantRupiya."),
  component: Page,
});
function Page() {
  return <ContentPage title="Careers" intro="Opportunities at InstantRupiya." apply={false}>
      <InfoBlock title="Current opportunities"><p>There are no verified job openings listed here yet. Confirm any vacancy through official company channels before sharing personal information.</p></InfoBlock>
      <InfoBlock title="Stay safe"><p>Do not pay anyone who promises a job with InstantRupiya.</p></InfoBlock>
  </ContentPage>;
}
