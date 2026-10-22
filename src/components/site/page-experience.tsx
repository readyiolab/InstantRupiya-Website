import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { ArrowUpRight, Check, ShieldCheck, Wallet, FileCheck, Heart, Plane, GraduationCap } from "lucide-react";
import { Button } from "@/components/ui/button";

import heroHome from "@/assets/hero-home.webp";
import personalLoan from "@/assets/personal-loan.webp";
import emiCalculator from "@/assets/emi-calculator.webp";
import howItWorks from "@/assets/how-it-works.webp";
import repayment from "@/assets/repayment.webp";
import aboutUs from "@/assets/about-us.webp";
import contactUs from "@/assets/contact-us.webp";
import legalCompliance from "@/assets/legal-compliance.webp";
import applicationPrep from "@/assets/application-prep.webp";
import careers from "@/assets/careers.webp";
import blogJournal from "@/assets/blog-journal.webp";

export function pageImage(title: string) {
  if (/Personal Loan/i.test(title)) return { src: personalLoan, alt: "A cheerful Indian woman professional in a contemporary cafe celebrating instant loan approval" };
  if (/How it works/i.test(title)) return { src: howItWorks, alt: "An Indian professional displaying a verified digital paperless loan application" };
  if (/EMI Calculator|Calculator/i.test(title)) return { src: emiCalculator, alt: "An Indian woman reviewing monthly budgets and calculating EMI on a tablet" };
  if (/Repayment/i.test(title)) return { src: repayment, alt: "A relieved Indian man verifying digital repayment confirmation on his smartphone" };
  if (/About/i.test(title)) return { src: aboutUs, alt: "Dynamic Indian fintech team collaborating in a modern corporate office" };
  if (/Contact/i.test(title)) return { src: contactUs, alt: "Friendly Indian customer support specialist assisting borrowers" };
  if (/Careers/i.test(title)) return { src: careers, alt: "Passionate Indian tech engineers and product managers collaborating in a tech hub" };
  if (/Application Preparation|Preparation/i.test(title)) return { src: applicationPrep, alt: "Organized financial documents and digital KYC checklist on a study desk" };
  if (/Blog|Journal/i.test(title)) return { src: blogJournal, alt: "Woman reading personal finance and loan advice in a peaceful balcony setting" };
  if (/Privacy|Terms|Refund|Interest|Fair|Governance|KYC|Risk|Disclaimer|Grievance/i.test(title)) {
    return { src: legalCompliance, alt: "Secure digital finance infrastructure and regulatory compliance shield" };
  }
  return { src: heroHome, alt: "Indian professional smiling with smartphone enjoying financial empowerment" };
}

const purposes = [
  { name: "Life moments", icon: Heart, title: "Celebrate without losing sight of your budget", text: "For weddings and family occasions, list essential costs first. Keep a buffer for everyday expenses and compare the total repayment before choosing a loan." },
  { name: "Travel", icon: Plane, title: "A little planning goes a long way", text: "Include transport, accommodation, insurance and a contingency in your travel budget. Choose a repayment schedule that remains comfortable after you return." },
  { name: "Learning", icon: GraduationCap, title: "Plan for your next chapter", text: "Consider course fees, equipment and related expenses together. Compare financing options and weigh future goals against your current repayment capacity." },
] as const;

function PurposeExplorer() {
  const [selected, setSelected] = useState(0);
  const item = purposes[selected] ?? purposes[0];
  return <div className="grid gap-8 lg:grid-cols-2"><div><p className="section-kicker">ROOM FOR WHAT MATTERS</p><h2 className="mt-3 text-3xl font-bold text-secondary sm:text-4xl">Your plans.<br />Your possibilities.</h2><div role="tablist" aria-label="Loan purposes" className="mt-6 flex flex-wrap gap-2">{purposes.map((p,i) => <Button key={p.name} role="tab" aria-selected={selected===i} variant={selected===i ? "secondary" : "outline"} onClick={() => setSelected(i)}><p.icon />{p.name}</Button>)}</div><div role="tabpanel" className="mt-6 min-h-44"><h3 className="text-xl font-bold">{item.title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{item.text}</p></div><Link to="/emi-calculator" className="inline-flex items-center gap-2 font-semibold text-primary">Plan your EMI <ArrowUpRight size={18} /></Link></div><img src={personalLoan} alt="A professional woman celebrating her personal finance goals" loading="lazy" width={1536} height={864} className="h-full min-h-64 w-full rounded-lg object-cover" /></div>;
}

function Preparation({ repayment }: { repayment: boolean }) {
  const items = repayment ? ["Checked the amount and due date", "Verified the lender’s payment channel", "Saved the payment reference"] : ["Reviewed my monthly budget", "Prepared identity and income documents", "Read the interest, fees and repayment terms"];
  const [checked, setChecked] = useState<string[]>([]);
  return <div className="grid items-start gap-8 lg:grid-cols-2"><div><p className="section-kicker">A LITTLE PREPARATION</p><h2 className="mt-3 text-3xl font-bold text-secondary">{repayment ? "Your repayment checklist" : "Ready for the next step?"}</h2><p className="mt-4 max-w-md text-muted-foreground">{repayment ? "Keep these essentials in mind each time you repay. A clear record makes follow-up easier." : "Make an informed decision. A few simple checks can help you approach borrowing with more confidence."}</p></div><div className="rounded-lg border bg-card p-6"><div className="mb-5 flex items-center justify-between"><span className="font-semibold">Your progress</span><span className="text-sm text-primary">{checked.length} / 3</span></div><progress aria-label="Checklist progress" max={3} value={checked.length} className="mb-5 h-2 w-full accent-primary" />{items.map(item => <label key={item} className="flex cursor-pointer items-start gap-3 border-t py-4 text-sm"><input type="checkbox" checked={checked.includes(item)} onChange={e => setChecked(e.target.checked ? [...checked,item] : checked.filter(v=>v!==item))} className="mt-1 size-4 accent-primary" />{item}</label>)}{checked.length===3 && <p role="status" className="mt-2 flex items-center gap-2 text-sm font-medium text-primary"><Check size={16} />Checklist complete</p>}</div></div>;
}

function Questions({ title }: { title: string }) {
  const repayment = /Repayment/.test(title);
  const legal = /Privacy|Terms|Grievance/.test(title);
  const questions = repayment ? [
    ["Where can I find my repayment schedule?", "Check your loan agreement and your lender’s official account portal. The schedule should show the payment amounts and due dates applicable to your loan."],
    ["What if a payment does not appear in my account?", "Keep the transaction reference, amount and date. Contact your lender through verified support channels and ask for confirmation before making a duplicate payment."],
    ["What should I do if I may miss a payment?", "Contact your lender as early as possible to discuss your situation. Any late charges or available options are governed by your loan agreement."],
  ] : legal ? [
    ["Which terms apply to my loan?", "Your lender’s official loan agreement and disclosures govern the loan. Read the final offer before accepting it; website guidance is not a substitute for that agreement."],
    ["What information should I avoid sharing?", "Never share OTPs, passwords, card PINs or UPI PINs. Use verified channels for identity and financial documents, and review the portal’s privacy notice first."],
    ["Where can I get account-specific help?", "Use the verified contact details in your loan agreement. The company-approved policy and escalation contacts for this website are still awaiting publication."],
  ] : [
    ["Does applying guarantee a loan?", "No. A lender reviews your application, documents and eligibility. Check the offered rate, fees and repayment schedule carefully before accepting a loan."],
    ["What documents might be requested?", "You may be asked for identity, address and income information. The exact requirements are shown during the application; submit documents only through verified channels."],
    ["How do I compare loan offers?", "Compare the total repayment, annualised cost, processing charges and any late or early repayment conditions—not just the monthly EMI."],
    ["Where do I start my application?", "Use any Apply Now button to continue to the InstantRupiya loan portal. Review the information and policies shown there before submitting your application."],
  ];
  return <div className="grid gap-8 lg:grid-cols-[1fr_1.5fr]"><div><p className="section-kicker">GOOD QUESTIONS. CLEARER ANSWERS.</p><h2 className="mt-3 text-3xl font-bold text-secondary">A little more clarity.</h2><p className="mt-4 text-muted-foreground">The details worth knowing before your next step.</p></div><div>{questions.map(([q,a]) => <details key={q} className="faq-row group border-b py-5"><summary className="flex cursor-pointer list-none items-center justify-between gap-5 font-semibold">{q}<span aria-hidden="true" className="text-2xl font-normal text-primary group-open:rotate-45 transition-transform">+</span></summary><p className="pt-4 leading-relaxed text-muted-foreground">{a}</p></details>)}</div></div>;
}

function TopicExplorer({ title }: { title: string }) {
  const topics = /Careers/.test(title) ? [
    ["Customer experience", "Put people first", "Thoughtful communication and careful follow-up matter in financial services. Look for verified opportunities that match your strengths in helping people understand their options."],
    ["Technology", "Build for clarity", "Digital experiences should be accessible, reliable and easy to understand. These are areas to explore if you enjoy problem solving and building useful products."],
    ["Operations", "Make the details count", "Accurate records, careful processes and consistent coordination help teams deliver dependable experiences. No vacancies are currently confirmed on this website."],
  ] : /Contact|Grievance/.test(title) ? [
    ["Application", "Help with your application", "Check your application status on the loan portal. For a document or decision query, use the support channel shown there and keep your application reference ready."],
    ["Repayment", "Help with a payment", "Keep the payment reference, date and amount ready. Ask your lender to confirm the payment status through their verified support channel before retrying."],
    ["Complaint", "Raise a clear concern", "Describe what happened, when it happened and the outcome you are requesting. Save your complaint reference and follow the lender’s published escalation process."],
  ] : /Privacy|Terms/.test(title) ? [
    ["Before applying", "Know what you are sharing", "Review the privacy notice and terms on the loan portal. Understand why documents are requested and use only verified upload channels. The company-approved website policy is awaiting publication."],
    ["Before accepting", "Read the final agreement", "Check the lender identity, costs, repayment schedule and conditions. Ask your lender to clarify anything you do not understand before accepting the offer."],
    ["Keep a record", "Your documents matter", "Retain your agreement and important communications securely. Avoid posting loan references, bank details or identity documents publicly."],
  ] : /About/.test(title) ? [
    ["Clarity", "A more informed starting point", "A personal loan is a financial commitment. Our website brings together application access, repayment guidance and planning information so you can consider your next step with more context."],
    ["Planning", "Your budget comes first", "Borrowing should fit your everyday life. Consider existing commitments and keep room for essentials before deciding on an amount and tenure."],
    ["Awareness", "Confidence through information", "Read your lender’s disclosures, verify communication channels and keep your records safe. Good questions are an important part of any borrowing decision."],
  ] : /Journal/.test(title) ? [
    ["Credit", "Start with your credit picture", "Review your credit report, check for errors and understand your existing obligations. Consistent on-time repayments are more useful than promises of an instant score increase."],
    ["Budgeting", "Give every expense a place", "List essentials, regular commitments and planned purchases. Build a buffer before taking on another monthly payment, and revisit your budget when circumstances change."],
    ["Borrowing", "Compare the whole offer", "Look at total repayment and fees alongside the EMI. A longer tenure can reduce the monthly payment while increasing the overall interest paid."],
  ] : [
    ["Loan amount", "Start with what you actually need", "Include the expense you are planning for without borrowing more than necessary. Compare the resulting monthly estimate against the room in your budget."],
    ["Tenure", "Balance monthly comfort and total cost", "A longer tenure generally lowers the monthly payment but can increase total interest. Compare both the monthly payment and total repayment before deciding."],
    ["Interest & fees", "An estimate is not an offer", "The calculator uses an illustrative rate and excludes fees. Your lender’s actual offer may use different terms; check the final disclosures and repayment schedule."],
  ];
  const [selected,setSelected] = useState(0);
  const current = topics[selected] ?? topics[0];
  if (!current) return null;
  return <div className="grid gap-10 lg:grid-cols-2"><img src={pageImage(title).src} alt={pageImage(title).alt} width={1536} height={864} loading="lazy" className="h-80 w-full rounded-lg object-cover"/><div><p className="section-kicker">TAKE A CLOSER LOOK</p><h2 className="mt-3 text-3xl font-bold text-secondary">{ /Contact|Grievance/.test(title) ? "What can we help with?" : /Journal/.test(title) ? "Explore the essentials." : /Careers/.test(title) ? "Where could you make a difference?" : "The details that matter."}</h2><div role="tablist" aria-label="Information topics" className="mt-5 flex flex-wrap gap-2">{topics.map(([label],i)=><Button key={label} role="tab" aria-selected={selected===i} variant={selected===i ? "secondary" : "outline"} onClick={()=>setSelected(i)}>{label}</Button>)}</div><div role="tabpanel" className="mt-6 min-h-40"><h3 className="text-xl font-bold">{current[1]}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{current[2]}</p></div></div></div>;
}

export function PageExperience({ title }: { title: string }) {
  const legal = /Privacy|Terms|Grievance/.test(title);
  return <>
    <section className="reveal-section border-y bg-muted py-16"><div className="mx-auto max-w-6xl px-6">{/Personal Loan|How it works/.test(title) ? <PurposeExplorer /> : /Repayment/.test(title) ? <Preparation repayment /> : <TopicExplorer title={title} />}</div></section>
    <section className="reveal-section mx-auto max-w-6xl px-6 py-16"><div className="mb-10"><p className="section-kicker">{legal ? "KEEP YOURSELF INFORMED" : "BORROW WITH PERSPECTIVE"}</p><h2 className="mt-3 text-3xl font-bold text-secondary">Small checks. Better decisions.</h2></div><div className="grid gap-8 sm:grid-cols-3">{[{icon:Wallet,title:"Know the full cost",text:"Look beyond the EMI. Consider interest, processing fees and the total amount repayable over the loan tenure."},{icon:FileCheck,title:"Read before accepting",text:"Check the repayment schedule and conditions in your agreement. Keep a copy of the documents for your records."},{icon:ShieldCheck,title:"Keep your details safe",text:"Use verified lender channels. Never share an OTP, password or payment PIN with another person."}].map(v=><div key={v.title} className="border-t-2 border-primary pt-6"><v.icon className="mb-5 text-primary" size={30}/><h3 className="text-xl font-bold text-secondary">{v.title}</h3><p className="mt-3 leading-relaxed text-muted-foreground">{v.text}</p></div>)}</div></section>
    <section className="reveal-section border-t bg-card py-16"><div className="mx-auto max-w-6xl px-6"><Questions title={title}/></div></section>
  </>;
}