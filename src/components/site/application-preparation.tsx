import { useEffect, useRef, useState } from "react";
import { Sparkles, LoaderCircle, Square } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Select, SelectTrigger, SelectValue, SelectContent, SelectItem } from "@/components/ui/select";
import { preparationSchema } from "@/lib/preparation-schema";
import { ApplyButton } from "./site-shell";

export function ApplicationPreparation() {
  const [employment,setEmployment] = useState("Salaried");
  const [consent,setConsent] = useState(false);
  const [busy,setBusy] = useState(false);
  const [text,setText] = useState("");
  const [error,setError] = useState("");
  const [complete,setComplete] = useState(false);
  const [checked,setChecked] = useState<number[]>([]);
  const abort = useRef<AbortController | null>(null);
  useEffect(()=>()=>abort.current?.abort(),[]);
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const parsed = preparationSchema.safeParse({needs:form.get("needs"),employment,amount:Number(form.get("amount")),income:Number(form.get("income")),commitments:Number(form.get("commitments")),consent});
    if (!parsed.success) {setError(parsed.error.issues[0]?.message ?? "Check your information.");return;}
    setError("");setText("");setComplete(false);setChecked([]);setBusy(true);
    const controller = new AbortController(); abort.current = controller;
    try {
      const response = await fetch("/api/preparation",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(parsed.data),signal:controller.signal});
      if (!response.ok) {const b = await response.json();throw new Error(b.message ?? "AI preparation unavailable.");}
      if (!response.body) throw new Error("No checklist was returned.");
      const reader = response.body.getReader(); const decoder = new TextDecoder();let buffer="";
      while (true) {
        const {done,value}=await reader.read();buffer+=decoder.decode(value,{stream:!done});
        const lines=buffer.split("\n");buffer=lines.pop() ?? "";
        for (const line of lines) {if (!line) continue;const event=JSON.parse(line);if(event.type==="text")setText(t=>t+event.text);if(event.type==="error")throw new Error(event.message);if(event.type==="done")setComplete(true);}
        if(done)break;
      }
    } catch (e) {setError(controller.signal.aborted ? "Generation stopped. Your information is still here." : e instanceof Error ? e.message : "AI preparation could not finish.");}
    finally {setBusy(false);abort.current=null;}
  }
  const items=text.split("\n").filter(l=>l.trim()).map(l=>l.replace(/^\s*[-*•]\s*|^\d+[.)]\s*/,""));
  return <div className="grid gap-10 lg:grid-cols-2">
    <form onSubmit={submit} className="space-y-5"><div><label htmlFor="prep-needs" className="mb-2 block font-medium">What are you planning?</label><Textarea id="prep-needs" name="needs" required minLength={10} maxLength={600} placeholder="For example: home repairs, with regular salary income and an existing monthly EMI." className="min-h-28"/></div>
      <div className="grid gap-5 sm:grid-cols-2"><div><label htmlFor="prep-amount" className="mb-2 block text-sm font-medium">Desired loan amount (₹)</label><Input id="prep-amount" name="amount" required type="number" min={1000} max={10000000} placeholder="50000"/></div><div><label htmlFor="prep-employment" className="mb-2 block text-sm font-medium">Employment</label><Select value={employment} onValueChange={setEmployment}><SelectTrigger id="prep-employment"><SelectValue/></SelectTrigger><SelectContent>{["Salaried","Self-employed","Other"].map(v=><SelectItem key={v} value={v}>{v}</SelectItem>)}</SelectContent></Select></div><div><label htmlFor="prep-income" className="mb-2 block text-sm font-medium">Approx. monthly take-home (₹)</label><Input id="prep-income" name="income" required type="number" min={0} max={10000000} placeholder="40000"/></div><div><label htmlFor="prep-commitments" className="mb-2 block text-sm font-medium">Monthly expenses & EMIs (₹)</label><Input id="prep-commitments" name="commitments" required type="number" min={0} max={10000000} placeholder="20000"/></div></div>
      <p className="text-sm leading-relaxed text-muted-foreground">Use approximate amounts only. Do not include identity numbers, account details, passwords or OTPs. Your entries are sent to Lovable AI to prepare this checklist and are not saved by this website.</p>
      <div className="flex items-start gap-3"><Checkbox id="prep-consent" checked={consent} onCheckedChange={v=>setConsent(v===true)}/><label htmlFor="prep-consent" className="text-sm">I agree to share these approximate details with AI for preparation guidance.</label></div>
      {error && <p role="alert" className="text-sm text-destructive">{error}</p>}
      <div className="flex flex-wrap gap-3"><Button type="submit" disabled={busy || !consent} className="h-12"><Sparkles/>Create my checklist</Button>{busy && <Button type="button" variant="outline" onClick={()=>abort.current?.abort()}><Square/>Stop</Button>}</div>
    </form>
    <div className="border-l border-primary pl-6"><h2 className="text-2xl font-bold text-secondary">Your preparation checklist</h2>{busy && <p role="status" className="mt-5 flex items-center gap-2 text-sm text-muted-foreground"><LoaderCircle className="animate-spin" size={18}/>Preparing your next steps…</p>}{!text && !busy && <p className="mt-5 text-muted-foreground">Your personalized next steps will appear here.</p>}<ul className="mt-5 space-y-4">{items.map((item,i)=><li key={i} className="flex items-start gap-3"><Checkbox id={`ai-item-${i}`} disabled={!complete} checked={checked.includes(i)} onCheckedChange={v=>setChecked(c=>v===true ? [...c,i] : c.filter(x=>x!==i))}/><label htmlFor={`ai-item-${i}`} className={`text-sm leading-relaxed ${checked.includes(i) ? "line-through text-muted-foreground" : ""}`}>{item}</label></li>)}</ul>{complete && <div className="mt-7 border-t pt-5"><p role="status" className="mb-4 text-sm text-muted-foreground">{checked.length} of {items.length} steps checked</p><ApplyButton/></div>}<p className="mt-8 text-xs leading-relaxed text-muted-foreground">AI-generated guidance can be inaccurate. This is not an eligibility assessment, financial advice or approval. Confirm document requirements, charges and terms directly with your lender.</p></div>
  </div>;
}