import { createFileRoute } from "@tanstack/react-router";
import { Link } from "@tanstack/react-router";
import { ApplyButton } from "@/components/site/site-shell";
import { EmiCalc } from "@/components/site/emi-calculator";
import hero from "@/assets/hero-home.webp";
import emiCalculator from "@/assets/emi-calculator.webp";
import howItWorks from "@/assets/how-it-works.webp";
import blogJournal from "@/assets/blog-journal.webp";
import { PageExperience } from "@/components/site/page-experience";
import { TypedText } from "@/components/site/typed-text";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "InstantRupiya — Instant Personal Loans up to ₹2.5 Lakh" },
      { name: "description", content: "Get instant personal loans from ₹10,000 to ₹2,50,000 online with minimal documents. Money in your account within 30 minutes." },
      { property: "og:title", content: "InstantRupiya — Instant Personal Loans" },
      { property: "og:description", content: "Personal loans from ₹10,000 to ₹2,50,000, 100% online, funds in 30 minutes." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const values = ["Innovation", "Trust", "Growth", "Integrity"];
const features = [
  { t: "Easy", d: "Apply with minimum documents. Leave the rest to us.", i: "📝" },
  { t: "Instant", d: "Apply from ₹10,000 to ₹2,50,000 and get money the same day.", i: "⚡" },
  { t: "Online", d: "Apply from website or mobile. No branch visits.", i: "📱" },
  { t: "Secure", d: "Your data is encrypted and shared only with bureaus and regulators.", i: "🔒" },
  { t: "Trust", d: "We trust our borrowers. You can trust us for fair practice.", i: "🤝" },
  { t: "Transparent", d: "Clear charges and terms. No surprises later on.", i: "🔍" },
];
const steps = [
  { t: "Fill Basic Details", d: "Fill an easy application form and get processed within minutes." },
  { t: "Submit Documents", d: "Upload your KYC and income documents to get verified." },
  { t: "Get Instant Funds", d: "Voila! Receive funds in your bank within 30 minutes." },
];
const blogs = [
  "Ways to get an instant personal loan without a CIBIL score",
  "How to plan a wedding budget with a personal loan",
  "5 tips to improve your credit score quickly",
];

function Index() {
  return (
    <div>
      <section className="photo-hero relative isolate overflow-hidden text-primary-foreground">
        <img src={hero} alt="A couple planning their next purchase together" width={1536} height={864} className="absolute inset-0 -z-20 h-full w-full object-cover"/><div className="hero-shade absolute inset-0 -z-10"/>
        <div className="hero-copy mx-auto max-w-7xl px-6 py-14 md:py-20">
          <div className="max-w-xl">
            <p className="mb-4 text-sm uppercase">Personal loans. Personal possibilities.</p>
            <h1 className="text-5xl font-extrabold leading-tight md:text-6xl">InstantRupiya</h1>
            <p className="mt-5 text-xl leading-relaxed opacity-90"><TypedText />A clearer way to take your next step.</p>
            <div className="mt-8 flex gap-4"><ApplyButton light>Apply Now</ApplyButton></div>
            <div className="mt-10 grid grid-cols-4 gap-3">
              {values.map((v) => <div key={v} className="border-t border-primary/40 py-3 text-center text-xs font-medium">{v}</div>)}
            </div>
          </div>
        </div>
      </section>

      <section id="features" className="mx-auto max-w-7xl px-6 py-20">
        <h2 className="text-center text-4xl font-bold text-secondary">Why <span className="text-primary">InstantRupiya</span></h2>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <div key={f.t} className="rounded-3xl border bg-card p-8 shadow-card transition hover:-translate-y-1">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent text-2xl">{f.i}</div>
              <h3 className="mt-5 text-xl font-bold text-secondary">{f.t}</h3>
              <p className="mt-2 text-muted-foreground">{f.d}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="steps" className="bg-soft py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-bold text-secondary">Apply in simple steps</h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {steps.map((s, i) => (
              <div key={s.t} className="relative rounded-3xl bg-card p-8 text-center shadow-card">
                <div className="mx-auto -mt-14 flex h-14 w-14 items-center justify-center rounded-full bg-brand text-xl font-bold text-primary-foreground">{i + 1}</div>
                <h3 className="mt-5 text-xl font-bold text-secondary">{s.t}</h3>
                <p className="mt-2 text-muted-foreground">{s.d}</p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center"><ApplyButton>Apply Now</ApplyButton></div>
        </div>
      </section>

      <section id="emi" className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2">
        <div>
          <p className="font-semibold text-primary">Get money right now!</p>
          <h2 className="mt-2 text-4xl font-bold text-secondary">Fill in an application form on our website</h2>
          <p className="mt-4 text-lg text-muted-foreground">InstantRupiya is always with you when you need money instantly — no questions asked.</p>
          <div className="mt-8 grid grid-cols-3 gap-4 text-center">
            {[["4.5", "Ratings"], ["2.5L+", "Reviews"], ["10M+", "Downloads"]].map(([n, l]) => (
              <div key={l} className="rounded-2xl bg-accent p-4"><p className="text-2xl font-extrabold text-secondary">{n}</p><p className="text-sm text-muted-foreground">{l}</p></div>
            ))}
          </div>
        </div>
        <EmiCalc />
      </section>

      <section className="bg-brand py-16 text-center text-primary-foreground">
        <h2 className="text-4xl font-extrabold">Money today, Momentum tomorrow</h2>
        <p className="mt-3 opacity-90">Charge up your wallet with InstantRupiya, feel the power in you.</p>
        <div className="mt-8"><ApplyButton light>Apply Now</ApplyButton></div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-20 text-center">
        <h2 className="text-3xl font-bold text-secondary">With InstantRupiya, experience the best way to borrow</h2>
        <p className="mt-5 text-muted-foreground">InstantRupiya is a credit-enabled fintech platform offering instant personal loans to salaried professionals in a safe and easy way. Loans from ₹10,000 to ₹2.50 lakh can be used for weddings, festivals, medical bills, travel and more.</p>
      </section>

      <section id="blog" className="bg-soft py-20">
        <div className="mx-auto max-w-7xl px-6">
          <h2 className="text-center text-4xl font-bold text-secondary">Latest from our blog</h2>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {blogs.map((b) => (
              <article key={b} className="overflow-hidden rounded-3xl bg-card shadow-card">
                <img src={b===blogs[0] ? blogJournal : b===blogs[1] ? emiCalculator : howItWorks} alt="Personal finance and everyday planning" width={1536} height={864} loading="lazy" className="h-48 w-full object-cover"/>
                <div className="p-6"><h3 className="font-bold text-secondary">{b}</h3><Link to="/blog" className="mt-3 inline-block text-sm font-semibold text-primary">Read more →</Link></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <PageExperience title="Personal Loan"/>
      <section className="mx-auto max-w-7xl px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-secondary">Already have a loan?</h2>
        <Link to="/repayment" className="mt-4 inline-block font-semibold text-primary underline">Visit Repayment →</Link>
      </section>
    </div>
  );
}
