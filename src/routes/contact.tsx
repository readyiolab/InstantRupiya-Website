import { createFileRoute, Link } from "@tanstack/react-router";
import { ContentPage, InfoBlock } from "@/components/site/content-page";
import { pageHead } from "@/lib/site-config";
import { ApplyButton } from "@/components/site/site-shell";

export const Route = createFileRoute("/contact")({
  head: () => pageHead("Contact", "Get help with your application or existing loan."),
  component: Page,
});
function Page() {
  return <ContentPage title="Contact" intro="Get help with your application or existing loan." apply={false}>
      <InfoBlock title="Application enquiries"><p>Open the loan portal to access your application and the support options provided there.</p></InfoBlock>
      <InfoBlock title="Existing loans"><p>Use the contact details in your loan agreement or lender communications for account-specific assistance.</p></InfoBlock>
      <InfoBlock title="Complaints"><p>Visit our Grievance Redressal page for guidance on raising a loan-related concern.</p></InfoBlock>
      <Link to="/grievance-redressal" className="inline-block py-4 font-semibold text-primary underline">Grievance Redressal →</Link>
      <div className="mt-4"><ApplyButton>Open loan portal</ApplyButton></div>
  </ContentPage>;
}
