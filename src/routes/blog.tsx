import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, InfoBlock } from "@/components/site/content-page";
import { pageHead } from "@/lib/site-config";

export const Route = createFileRoute("/blog")({
  head: () => pageHead("Borrowing Journal", "Read practical guidance on credit scores, personal loan applications and budgeting."),
  component: BlogPage,
});
function BlogPage() {
  return <ContentPage title="Borrowing Journal" intro="A clearer view of credit and everyday borrowing.">
    <InfoBlock title="Applying without a credit history"><p>A limited credit history does not guarantee approval or rejection. Lenders may review your income, employment and existing obligations. Check eligibility before applying and avoid multiple applications in quick succession.</p></InfoBlock>
    <InfoBlock title="Planning a wedding budget"><p>Separate essential costs from optional extras. Set a spending limit and compare the total cost of borrowing, not just the monthly EMI. Leave room for everyday expenses and unexpected costs.</p></InfoBlock>
    <InfoBlock title="Building a healthier credit score"><p>Pay dues on time, keep credit utilisation manageable and review your credit report for errors. A score changes over time; no service can guarantee an instant improvement.</p></InfoBlock>
    <p className="mt-6 text-sm text-muted-foreground">General information only; not personalised financial advice.</p>
  </ContentPage>;
}