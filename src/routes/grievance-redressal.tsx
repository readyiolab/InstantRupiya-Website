import { createFileRoute } from "@tanstack/react-router";
import { ContentPage, InfoBlock } from "@/components/site/content-page";
import { pageHead } from "@/lib/site-config";

export const Route = createFileRoute("/grievance-redressal")({
  head: () => pageHead("Grievance Redressal", "Official Grievance Redressal Mechanism for InstantRupiya (Aarsh Fincon Limited)."),
  component: Page,
});

function Page() {
  return (
    <ContentPage
      title="Grievance Redressal"
      intro="Official grievance redressal mechanism and escalation matrix for InstantRupiya under Aarsh Fincon Limited (RBI-Registered NBFC)."
      apply={false}
    >
      <div className="mb-8 rounded-xl border bg-card p-6 shadow-sm">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 text-sm">
          <div>
            <p className="text-xs uppercase text-muted-foreground font-semibold">Regulated Entity</p>
            <p className="font-bold text-secondary mt-1">Aarsh Fincon Limited</p>
          </div>
          <div>
            <p className="text-xs uppercase text-muted-foreground font-semibold">Digital Brand</p>
            <p className="font-bold text-secondary mt-1">InstantRupiya</p>
          </div>
          <div>
            <p className="text-xs uppercase text-muted-foreground font-semibold">RBI Reg. Number</p>
            <p className="font-bold text-secondary mt-1">B-10.00119</p>
          </div>
          <div>
            <p className="text-xs uppercase text-muted-foreground font-semibold">Document Status</p>
            <p className="font-bold text-primary mt-1">Operative (September 2024)</p>
          </div>
        </div>
      </div>

      <InfoBlock title="Level 1 · Customer Support Desk">
        <p>
          If you have any query, dispute, or complaint regarding your loan application or account, please write to our support team with your loan ID and registered mobile number:
        </p>
        <div className="mt-3 rounded-lg border bg-accent/40 p-4 text-sm space-y-1">
          <p><strong>Email:</strong> <a href="mailto:support.instantrupiya@aarshfincon.com" className="text-primary underline">support.instantrupiya@aarshfincon.com</a></p>
          <p><strong>Helpline:</strong> <a href="tel:+917827486530" className="text-primary underline">+91-7827486530</a></p>
          <p><strong>Response Turnaround Time:</strong> 24 to 48 working hours</p>
        </div>
      </InfoBlock>

      <InfoBlock title="Level 2 · Grievance Redressal Officer (Escalation)">
        <p>
          If your grievance is not resolved within 7 business days or you are unsatisfied with the resolution provided at Level 1, you may escalate your concern to our designated Grievance Redressal Officer:
        </p>
        <div className="mt-3 rounded-lg border bg-card p-4 text-sm space-y-2">
          <p><strong>Grievance Officer:</strong> Ashok Kumar</p>
          <p><strong>Entity:</strong> Aarsh Fincon Limited (InstantRupiya)</p>
          <p><strong>RBI Registration No.:</strong> B-10.00119</p>
          <p><strong>Direct Email:</strong> <a href="mailto:stpl.collection@aarshfincon.com" className="text-primary underline">stpl.collection@aarshfincon.com</a></p>
          <p><strong>Direct Helpline:</strong> <a href="tel:+918826620992" className="text-primary underline">+91-88266 20992</a></p>
          <p><strong>General Support:</strong> <a href="mailto:support.instantrupiya@aarshfincon.com" className="text-primary underline">support.instantrupiya@aarshfincon.com</a></p>
        </div>
      </InfoBlock>

      <InfoBlock title="Level 3 · Reserve Bank of India Ombudsman">
        <p>
          If your complaint remains unaddressed within 30 days of filing with the NBFC, or if you are not satisfied with the reply, you may appeal under the Reserve Bank – Integrated Ombudsman Scheme (RB-IOS) through the RBI CMS portal at{" "}
          <a href="https://cms.rbi.org.in" target="_blank" rel="noopener noreferrer" className="text-primary underline font-medium">
            cms.rbi.org.in
          </a>.
        </p>
      </InfoBlock>
    </ContentPage>
  );
}
