import { createFileRoute } from "@tanstack/react-router";
import { ContentPage } from "@/components/site/content-page";
import { ApplicationPreparation } from "@/components/site/application-preparation";
import { pageHead } from "@/lib/site-config";
export const Route = createFileRoute("/application-preparation")({
  head:()=>pageHead("Application Preparation", "Prepare for your personal loan application with an AI-powered checklist tailored to your needs and approximate financial circumstances."),
  component:()=> <ContentPage title="Application Preparation" intro="A thoughtful start to your borrowing journey. Prepare your documents and budget before taking the next step."><ApplicationPreparation/></ContentPage>,
});
