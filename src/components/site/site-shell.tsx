import { Link, useLocation } from "@tanstack/react-router";
import { useEffect, useRef, useState, type ReactNode } from "react";
import { Menu, X, ArrowUpRight, ChevronDown, Wallet, Calculator, CircleHelp, ShieldCheck, Phone, Mail, MessageCircle, Building2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent, SheetTitle, SheetClose } from "@/components/ui/sheet";
import { APPLICATION_URL } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const logoUrl = "/logo.png";

const nav = [
  { to: "/personal-loan", label: "Personal Loan" },
  { to: "/how-it-works", label: "How it works" },
  { to: "/emi-calculator", label: "EMI Calculator" },
  { to: "/repayment", label: "Repayment" },
  { to: "/application-preparation", label: "Application Preparation" },
  { to: "/blog", label: "Blog" },
  { to: "/contact", label: "Contact" },
] as const;

export function ApplyButton({
  children = "Apply Now",
  light = false,
  onClick,
  className = "",
}: {
  children?: ReactNode;
  light?: boolean;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <Button
      asChild
      variant={light ? "outline" : "default"}
      className={cn(
        "rounded-full font-semibold transition-all shadow-sm",
        light ? "text-secondary" : "",
        className ? className : "h-11 px-5 sm:h-12 sm:px-6"
      )}
    >
      <a href={APPLICATION_URL} onClick={onClick} className="inline-flex items-center gap-1.5">
        <span>{children}</span>
        <ArrowUpRight className="h-4 w-4 shrink-0" />
      </a>
    </Button>
  );
}

export function SiteShell({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);
  const [explore, setExplore] = useState(false);
  const [progress, setProgress] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const shell = useRef<HTMLDivElement>(null);
  const exploreTimer = useRef<ReturnType<typeof setTimeout> | null>(null);
  const pathname = useLocation({ select: location => location.pathname });

  const handleExploreOpen = () => {
    if (exploreTimer.current) {
      clearTimeout(exploreTimer.current);
      exploreTimer.current = null;
    }
    setExplore(true);
  };

  const handleExploreCloseWithDelay = () => {
    if (exploreTimer.current) {
      clearTimeout(exploreTimer.current);
    }
    exploreTimer.current = setTimeout(() => {
      setExplore(false);
    }, 200);
  };

  const handleExploreCloseImmediate = () => {
    if (exploreTimer.current) {
      clearTimeout(exploreTimer.current);
      exploreTimer.current = null;
    }
    setExplore(false);
  };

  useEffect(() => {
    return () => {
      if (exploreTimer.current) clearTimeout(exploreTimer.current);
    };
  }, []);

  useEffect(() => { setOpen(false); setExplore(false); }, [pathname]);
  useEffect(() => {
    let frame = 0;
    const update = () => { const total = document.documentElement.scrollHeight - window.innerHeight; setProgress(total > 0 ? window.scrollY / total * 100 : 0); setScrolled(window.scrollY > 64); };
    const onScroll = () => { if (frame) return; frame = requestAnimationFrame(() => { update(); frame = 0; }); };
    window.addEventListener("scroll", onScroll, { passive: true });
    const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add("is-visible"); observer.unobserve(entry.target); } }), { threshold: 0.08 });
    shell.current?.querySelectorAll("main section:not(.photo-hero)").forEach(el => { el.classList.add("reveal-section"); if (el.getBoundingClientRect().top >= window.innerHeight) el.classList.add("reveal-pending"); observer.observe(el); });
    update();
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(frame); observer.disconnect(); };
  }, [children]);
  useEffect(() => { const close = (e: KeyboardEvent) => { if (e.key === "Escape") { setExplore(false); setOpen(false); } }; window.addEventListener("keydown", close); return () => window.removeEventListener("keydown", close); }, []);
  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 1280px)");
    const closeOnDesktop = () => { if (desktop.matches) setOpen(false); };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  return <div ref={shell} className="overflow-x-clip">
    <div className="bg-secondary px-3 py-1.5 text-center text-[11px] sm:text-xs text-secondary-foreground">
      <span className="inline-flex items-center gap-1.5 sm:gap-2">
        <ShieldCheck size={13} className="shrink-0 text-primary" />
        <span>Your plans deserve a thoughtful next step.</span>
        <Link to="/emi-calculator" className="hidden underline font-semibold sm:inline">Plan your EMI →</Link>
      </span>
    </div>
    <div className={`nav-dock sticky top-0 z-50 ${scrolled ? "is-scrolled" : ""}`}>
      <header className="site-header relative border-b bg-card/95 backdrop-blur">
        <div className="nav-inner mx-auto flex max-w-7xl items-center justify-between gap-2 px-3 py-2 sm:gap-3 sm:px-4 sm:py-3 lg:px-6">
          <Link
            to="/"
            aria-label="InstantRupiya home"
            onClick={() => { setOpen(false); setExplore(false); }}
            className="brand-lockup flex shrink-0 items-center"
          >
            <img
              src={logoUrl}
              alt="InstantRupiya"
              className="h-9 w-[125px] sm:h-12 sm:w-[170px] md:h-14 md:w-[195px] object-contain transition-all"
            />
          </Link>
          <nav aria-label="Main navigation" className="hidden items-center gap-1 text-sm font-medium text-secondary xl:flex">
            <Link to="/" onMouseEnter={handleExploreCloseImmediate} className="nav-item px-3 py-3" activeOptions={{ exact: true }} activeProps={{ className: "nav-item is-active px-3 py-3" }}>Home</Link>
            <Link to="/about" onMouseEnter={handleExploreCloseImmediate} className="nav-item px-3 py-3" activeProps={{ className: "nav-item is-active px-3 py-3" }}>About</Link>
            <Link to="/contact" onMouseEnter={handleExploreCloseImmediate} className="nav-item px-3 py-3" activeProps={{ className: "nav-item is-active px-3 py-3" }}>Contact</Link>
            <div
              className="relative inline-flex items-center"
              onMouseEnter={handleExploreOpen}
              onMouseLeave={handleExploreCloseWithDelay}
            >
              <Button
                variant="ghost"
                aria-expanded={explore}
                aria-controls="explore-menu"
                onClick={() => setExplore(prev => !prev)}
                className="h-11 font-medium"
              >
                Explore <ChevronDown className={explore ? "rotate-180 transition-transform" : "transition-transform"} />
              </Button>
            </div>
          </nav>
          <div className="flex items-center gap-1.5 sm:gap-2">
            <ApplyButton className="h-9 px-3 text-xs sm:h-11 sm:px-5 sm:text-sm font-semibold" />
            <Button
              asChild
              variant="outline"
              className="hidden h-11 rounded-full border-primary px-4 text-secondary sm:inline-flex lg:h-12 lg:px-5"
            >
              <Link to="/repayment">Repay Now</Link>
            </Button>
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 sm:h-10 sm:w-10 xl:hidden rounded-lg hover:bg-accent"
                  aria-label="Open menu"
                >
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent
                side="left"
                className="mobile-menu flex flex-col border-0 bg-background p-0 w-full max-w-sm sm:max-w-md"
                aria-describedby={undefined}
              >
                <SheetTitle className="sr-only">InstantRupiya menu</SheetTitle>
                
                {/* Mobile Drawer Top Header */}
                <div className="flex shrink-0 items-center justify-between border-b px-5 py-4 sm:px-6">
                  <Link to="/" aria-label="InstantRupiya home" onClick={() => setOpen(false)}>
                    <img src={logoUrl} alt="InstantRupiya" className="h-10 w-[140px] sm:h-12 sm:w-[170px] object-contain" />
                  </Link>
                  <SheetClose asChild>
                    <Button variant="ghost" size="icon" className="h-9 w-9 rounded-full" aria-label="Close menu">
                      <X className="h-5 w-5" />
                    </Button>
                  </SheetClose>
                </div>

                {/* Mobile Drawer Scroll Area */}
                <div className="min-h-0 flex-1 overflow-y-auto overscroll-contain px-5 py-5 sm:px-6 space-y-6">
                  
                  {/* Explore & Products Cards */}
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-primary">
                      Explore Products &amp; Tools
                    </p>
                    <div className="mt-2.5 grid grid-cols-1 gap-2">
                      {[
                        { to: "/personal-loan", label: "Personal Loan", desc: "Instant credit up to ₹5,00,000", icon: Wallet },
                        { to: "/emi-calculator", label: "EMI Calculator", desc: "Plan monthly budget & tenure", icon: Calculator },
                        { to: "/repayment", label: "Repay Loan", desc: "Direct repayment portal", icon: ShieldCheck },
                        { to: "/application-preparation", label: "Application Prep", desc: "Check docs & readiness checklist", icon: Building2 },
                      ].map(item => (
                        <Link
                          key={item.to}
                          to={item.to}
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-3 rounded-xl border border-border/60 bg-card p-3 transition-colors hover:bg-accent active:bg-muted"
                        >
                          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                            <item.icon className="h-4 w-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-bold text-sm text-secondary truncate">{item.label}</p>
                            <p className="text-xs text-muted-foreground truncate">{item.desc}</p>
                          </div>
                          <ArrowUpRight className="h-4 w-4 text-primary shrink-0" />
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Main Pages Navigation */}
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                      Company &amp; Resources
                    </p>
                    <nav aria-label="Mobile navigation" className="mt-2 divide-y divide-border/60 rounded-xl border border-border/60 bg-card overflow-hidden">
                      {[
                        { to: "/", label: "Home" },
                        { to: "/about", label: "About Us" },
                        { to: "/how-it-works", label: "How It Works" },
                        { to: "/faqs", label: "FAQs" },
                        { to: "/blog", label: "Financial Blog" },
                        { to: "/contact", label: "Contact Us" },
                      ].map(n => (
                        <Link
                          key={n.to}
                          to={n.to}
                          activeOptions={{ exact: true }}
                          onClick={() => setOpen(false)}
                          className="flex items-center justify-between px-4 py-3 text-sm font-medium text-secondary transition-colors hover:bg-accent hover:text-primary"
                          activeProps={{ className: "bg-primary/5 text-primary font-bold" }}
                        >
                          <span>{n.label}</span>
                          <ArrowUpRight size={16} className="text-muted-foreground opacity-60" />
                        </Link>
                      ))}
                    </nav>
                  </div>

                  {/* Legal & Regulatory Hub */}
                  <div>
                    <p className="text-[11px] font-bold uppercase tracking-wider text-muted-foreground">
                      Legal &amp; Compliance (Aarsh Fincon Ltd)
                    </p>
                    <div className="mt-2 grid grid-cols-2 gap-1.5 text-xs">
                      {[
                        { to: "/privacy-policy", label: "Privacy Policy" },
                        { to: "/terms-and-conditions", label: "Terms & Conditions" },
                        { to: "/refund-policy", label: "Refund Policy" },
                        { to: "/interest-rate-policy", label: "Interest Rate" },
                        { to: "/fair-practices-code", label: "Fair Practices" },
                        { to: "/grievance-redressal", label: "Grievance Policy" },
                      ].map(l => (
                        <Link
                          key={l.to}
                          to={l.to}
                          onClick={() => setOpen(false)}
                          className="rounded-lg border border-border/40 bg-card px-2.5 py-2 font-medium text-muted-foreground hover:bg-accent hover:text-secondary text-center truncate"
                        >
                          {l.label}
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* NBFC & Support Callout */}
                  <div className="rounded-xl border border-primary/20 bg-primary/5 p-3.5 text-xs space-y-2">
                    <p className="font-semibold text-secondary flex items-center gap-1.5">
                      <ShieldCheck className="h-4 w-4 text-primary shrink-0" />
                      <span>RBI Registered NBFC Partner</span>
                    </p>
                    <p className="text-muted-foreground">Aarsh Fincon Limited (Reg. No. B-10.00119)</p>
                    <div className="pt-1 flex flex-wrap gap-3 text-xs">
                      <a
                        href="tel:+917827486530"
                        className="inline-flex items-center gap-1 font-semibold text-secondary hover:text-primary"
                      >
                        <Phone size={12} className="text-primary shrink-0" /> +91-7827486530
                      </a>
                      <a
                        href="https://wa.me/917827486530"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 font-semibold text-green-600 hover:text-green-700"
                      >
                        <MessageCircle size={12} className="shrink-0" /> WhatsApp
                      </a>
                    </div>
                  </div>

                </div>

                {/* Mobile Drawer Bottom Action Bar */}
                <div className="mobile-menu-actions shrink-0 border-t bg-card px-5 py-4 sm:px-6">
                  <div className="flex gap-2">
                    <ApplyButton onClick={() => setOpen(false)} className="flex-1 h-11 text-xs sm:text-sm font-semibold" />
                    <Button asChild variant="outline" className="flex-1 h-11 rounded-full border-primary text-secondary text-xs sm:text-sm">
                      <Link to="/repayment" onClick={() => setOpen(false)}>Repay Now</Link>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>

        {/* Explore Mega Menu for Desktop & Tablet */}
        {explore && (
          <div
            id="explore-menu"
            onMouseEnter={handleExploreOpen}
            onMouseLeave={handleExploreCloseWithDelay}
            className="nav-panel absolute inset-x-0 top-full border-b bg-card p-4 sm:p-6 lg:p-8 shadow-card max-h-[85vh] overflow-y-auto"
          >
            <div className="mx-auto grid max-w-6xl gap-6 lg:gap-8 lg:grid-cols-[1fr_2fr]">
              <div className="border-b pb-5 lg:border-b-0 lg:border-r lg:pb-0 lg:pr-8">
                <p className="section-kicker">YOUR NEXT CHAPTER</p>
                <h2 className="mt-2 text-2xl sm:text-3xl font-bold text-secondary">
                  A little clarity.<br className="hidden sm:inline" />More possibility.
                </h2>
                <p className="mt-2 sm:mt-4 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                  Explore borrowing, plan your repayments and find the information you need.
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
                {[
                  { to: "/personal-loan", label: "Personal Loan", desc: "Explore your borrowing journey", icon: Wallet },
                  { to: "/emi-calculator", label: "EMI Calculator", desc: "Put your monthly budget first", icon: Calculator },
                  { to: "/about", label: "About InstantRupiya", desc: "Get to know the platform", icon: CircleHelp },
                  { to: "/repayment", label: "Repayment", desc: "Keep your account on track", icon: ShieldCheck }
                ].map(n => (
                  <Link
                    key={n.to}
                    to={n.to}
                    onClick={() => {
                      handleExploreCloseImmediate();
                    }}
                    className="group flex gap-3.5 sm:gap-4 rounded-xl p-3 sm:p-4 transition-colors hover:bg-accent border border-transparent hover:border-border"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <n.icon className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="font-bold text-sm sm:text-base text-secondary flex items-center">
                        {n.label}
                        <ArrowUpRight size={14} className="ml-1.5 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 text-primary" />
                      </p>
                      <p className="mt-1 text-xs sm:text-sm text-muted-foreground">{n.desc}</p>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        )}
        <progress aria-label="Page reading progress" value={progress} max={100} className="reading-progress absolute bottom-0 h-0.5 w-full" />
      </header>
    </div>
    <main>{children}<section aria-label="Application next steps" className="bg-brand px-6 py-12 text-center text-primary-foreground"><h2 className="mb-6 text-3xl font-bold">Take the next step with InstantRupiya</h2><div className="flex flex-wrap justify-center gap-4"><ApplyButton light /><Button asChild variant="outline" className="h-12 rounded-full px-6 text-secondary"><Link to="/application-preparation">Prepare my application<ArrowUpRight /></Link></Button></div></section></main>
    <footer className="bg-secondary text-secondary-foreground">
      {/* Top Pre-Footer Callout Bar */}
      <div className="border-b border-white/10 bg-secondary/95 py-5">
        <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-between gap-4 px-6">
          <div className="flex flex-wrap items-center gap-3 text-xs">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-primary/20 px-3 py-1 font-semibold text-primary">
              <ShieldCheck size={14} /> RBI Registered NBFC
            </span>
            <span className="opacity-80">
              Registration No. <strong className="text-white">B-10.00119</strong> (Aarsh Fincon Limited)
            </span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden text-xs opacity-80 md:inline">
              Empowering your financial journey with cutting-edge technology and expert insights.
            </span>
            <a
              href="https://wa.me/917827486530"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-xs font-bold text-white transition-colors hover:bg-green-500 shadow-sm"
            >
              <MessageCircle size={15} /> Chat with us
            </a>
          </div>
        </div>
      </div>

      {/* Main Footer Links & Info Grid */}
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 sm:grid-cols-2 lg:grid-cols-12">
        {/* Brand & Regulatory Details */}
        <div className="lg:col-span-4">
          <Link to="/" aria-label="InstantRupiya home">
            <img src={logoUrl} alt="InstantRupiya" className="h-16 rounded-xl bg-card px-3 py-1.5 object-contain" />
          </Link>
          <p className="mt-4 text-sm leading-relaxed opacity-85">
            Empowering your financial journey with cutting-edge technology and expert insights. Instant personal loans, the best way you can borrow.
          </p>
          <div className="mt-5 rounded-xl border border-white/10 bg-white/5 p-4 text-xs space-y-1.5 opacity-90">
            <p className="font-semibold text-primary flex items-center gap-1.5">
              <Building2 size={14} /> Regulated NBFC Partner
            </p>
            <p className="text-white font-medium">Aarsh Fincon Limited</p>
            <p className="opacity-75">RBI Registration No. B-10.00119</p>
          </div>
        </div>

        {/* Quick Links */}
        <div className="lg:col-span-2">
          <h4 className="font-bold text-sm tracking-wide text-white uppercase">Quick Links</h4>
          <ul className="mt-4 space-y-2.5 text-sm">
            <li><Link to="/" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">Home</Link></li>
            <li><Link to="/about" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">About Us</Link></li>
            <li><Link to="/faqs" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">FAQs</Link></li>
            <li><Link to="/contact" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">Contact Us</Link></li>
            <li><Link to="/repayment" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">Repay Loan</Link></li>
          </ul>
        </div>

        {/* Legal Policies */}
        <div className="lg:col-span-3">
          <h4 className="font-bold text-sm tracking-wide text-white uppercase">Legal</h4>
          <ul className="mt-4 space-y-2.5 text-xs">
            <li><Link to="/privacy-policy" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">Privacy Policy</Link></li>
            <li><Link to="/terms-and-conditions" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">Terms & Conditions</Link></li>
            <li><Link to="/refund-policy" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">Refund Policy</Link></li>
            <li><Link to="/interest-rate-policy" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">Interest Rate Policy</Link></li>
            <li><Link to="/fair-practices-code" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">Fair Practices Code</Link></li>
            <li><Link to="/corporate-governance-policy" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">Corporate Governance</Link></li>
            <li><Link to="/kyc-aml-policy" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">KYC & AML Policy</Link></li>
            <li><Link to="/risk-management-policy" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">Risk Management</Link></li>
            <li><Link to="/disclaimer" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">Disclaimer</Link></li>
            <li><Link to="/grievance-redressal" className="opacity-80 hover:opacity-100 hover:text-primary transition-colors">Grievance Policy</Link></li>
          </ul>
        </div>

        {/* Contact Us */}
        <div className="lg:col-span-3">
          <h4 className="font-bold text-sm tracking-wide text-white uppercase">Contact Us</h4>
          <div className="mt-4 space-y-3 text-sm">
            <a href="tel:+917827486530" className="flex items-center gap-2.5 opacity-85 hover:opacity-100 hover:text-primary transition-colors">
              <Phone size={15} className="text-primary shrink-0" />
              <span>+91-7827486530</span>
            </a>
            <a href="https://wa.me/917827486530" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2.5 opacity-85 hover:opacity-100 hover:text-primary transition-colors">
              <MessageCircle size={15} className="text-green-500 shrink-0" />
              <span>Chat on WhatsApp</span>
            </a>
            <a href="mailto:support@instantrupiya.com" className="flex items-center gap-2.5 opacity-85 hover:opacity-100 hover:text-primary transition-colors break-all">
              <Mail size={15} className="text-primary shrink-0" />
              <span>support@instantrupiya.com</span>
            </a>
          </div>
          <div className="mt-6 border-t border-white/10 pt-4 text-xs opacity-75">
            <p>Official Policy Document • InstantRupiya (Aarsh Fincon Limited)</p>
            <p className="mt-1">Effective Date: September 2024</p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-white/10 py-6 text-center text-xs opacity-65">
        <p>© 2026 InstantRupiya. All rights reserved.</p>
        <p className="mt-1">
          Regulated Entity: Aarsh Fincon Limited (RBI Registered NBFC Registration No. B-10.00119) • Digital Brand: InstantRupiya
        </p>
      </div>
    </footer>
  </div>;
}
