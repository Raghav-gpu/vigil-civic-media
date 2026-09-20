import { createFileRoute } from "@tanstack/react-router";
import {
  ArrowRight,
  BadgeCheck,
  BookOpen,
  Bot,
  BriefcaseBusiness,
  Check,
  ChevronRight,
  CircleDot,
  Download,
  Eye,
  Fingerprint,
  Globe2,
  Landmark,
  LockKeyhole,
  Menu,
  Newspaper,
  Play,
  Radio,
  SearchCheck,
  ShieldCheck,
  Sparkles,
  Users,
  Video,
  WalletCards,
  X,
  Zap,
} from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "AP Media — Verified News Platform" },
      {
        name: "description",
        content:
          "InViGiL combines verified journalism, citizen reporting, professional investigations and AI-powered media tools.",
      },
      { property: "og:title", content: "AP Media — Verified News Platform" },
      {
        property: "og:description",
        content: "Verified news. Real investigations. AI-powered media — all in one trusted platform.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const pillars = [
  {
    icon: Newspaper,
    number: "01",
    title: "Verified journalism",
    body: "Editorially reviewed reporting, breaking coverage and transparent credibility scores.",
    detail: "Reporter → Editor → Published",
  },
  {
    icon: Fingerprint,
    number: "02",
    title: "INVIGIL investigations",
    body: "Fund and follow real investigations with vetted teams, secure evidence and clear accountability.",
    detail: "Escrow protected",
  },
  {
    icon: Bot,
    number: "03",
    title: "ViERA intelligence",
    body: "Create, translate and verify media with an AI newsroom built for the information age.",
    detail: "Chat · Verify · Translate",
  },
  {
    icon: BookOpen,
    number: "04",
    title: "Digital publishing",
    body: "News, social, live TV, e-papers, magazines and short video in one connected ecosystem.",
    detail: "Read · Watch · Publish",
  },
];

const audiences = {
  Citizens: {
    icon: Users,
    title: "One place to know what’s real.",
    body: "Follow verified news, watch live channels, join civic conversations and submit stories that matter to your community.",
    points: ["Personalized news and social feed", "Citizen stories and eyewitness reports", "Teasers, live TV and digital newsstand"],
  },
  Reporters: {
    icon: Newspaper,
    title: "Report with reach and credibility.",
    body: "Submit field reports and breaking stories through a clear editorial workflow designed to protect trust.",
    points: ["Structured editorial review", "Breaking-news priority", "Credibility tiers and verification badges"],
  },
  Publishers: {
    icon: BookOpen,
    title: "Your complete digital newsstand.",
    body: "Publish e-papers, magazines and documentaries while managing your catalogue and reader access.",
    points: ["Organization publishing profile", "Edition and catalogue management", "Purchases, subscriptions and library access"],
  },
  Professionals: {
    icon: BriefcaseBusiness,
    title: "Turn expertise into civic impact.",
    body: "Join verified investigation teams as an officer, field agent or specialist and work through secure case spaces.",
    points: ["Professional verification", "Assigned tasks and evidence", "Secure communication and expenses"],
  },
  Advertisers: {
    icon: Landmark,
    title: "Reach engaged, verified audiences.",
    body: "Plan campaigns, release orders and sponsorships across a diverse media network.",
    points: ["Campaign and ads management", "Release order booking", "Story and creator sponsorships"],
  },
};

const steps = [
  { icon: CircleDot, label: "Create", text: "Client opens a verified case" },
  { icon: WalletCards, label: "Fund", text: "Secure the case through escrow" },
  { icon: ShieldCheck, label: "Assign", text: "Admin appoints a qualified IO" },
  { icon: Users, label: "Deploy", text: "The IO coordinates field agents" },
  { icon: BadgeCheck, label: "Resolve", text: "Evidence and outcomes delivered" },
];

function BrandMark({ compact = false }: { compact?: boolean }) {
  return (
    <div className="flex items-center gap-3" aria-label="InViGiL by AP Media">
      <div className="brand-glyph" aria-hidden="true">
        <span />
        <span />
        <span />
      </div>
      <div>
        <div className={compact ? "wordmark text-xl" : "wordmark text-2xl"}>InViGiL</div>
        <div className="text-[9px] font-semibold uppercase tracking-[0.28em] text-muted-foreground">by AP Media</div>
      </div>
    </div>
  );
}

function ProductVisual() {
  return (
    <div className="relative mx-auto w-full max-w-[600px] lg:mx-0" aria-label="InViGiL mobile product preview">
      <div className="signal-orbit signal-orbit-one" />
      <div className="signal-orbit signal-orbit-two" />
      <div className="phone-shell">
        <div className="phone-screen">
          <div className="flex items-center justify-between border-b border-border px-4 py-3">
            <BrandMark compact />
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-secondary">
              <Fingerprint className="h-4 w-4 text-secondary-foreground" />
            </div>
          </div>
          <div className="px-4 pb-4 pt-3">
            <div className="mb-3 flex items-center justify-between">
              <span className="eyebrow text-breaking"><span className="status-dot bg-breaking" /> Breaking</span>
              <span className="font-mono text-[9px] uppercase text-muted-foreground">Live · 12:04</span>
            </div>
            <div className="news-visual">
              <div className="city-grid" />
              <div className="absolute inset-x-3 bottom-3">
                <span className="rounded-sm bg-breaking px-2 py-1 font-mono text-[8px] font-semibold uppercase text-breaking-foreground">Verified report</span>
                <p className="mt-2 max-w-[240px] font-display text-lg font-semibold leading-tight text-foreground">Civic action begins with information you can trust.</p>
              </div>
            </div>
            <div className="mt-3 grid grid-cols-2 gap-3">
              <div className="mini-panel">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-[9px] uppercase text-muted-foreground">Trust score</span>
                  <BadgeCheck className="h-4 w-4 text-cyan" />
                </div>
                <div className="mt-2 flex items-end gap-2">
                  <strong className="font-display text-3xl text-foreground">92</strong>
                  <span className="mb-1 text-xs font-semibold text-cyan">A+</span>
                </div>
                <div className="mt-2 h-1 overflow-hidden rounded-full bg-border"><div className="h-full w-[92%] bg-brand-gradient" /></div>
              </div>
              <div className="mini-panel">
                <span className="font-mono text-[9px] uppercase text-muted-foreground">ViERA check</span>
                <div className="mt-3 flex items-center gap-2">
                  <SearchCheck className="h-6 w-6 text-primary" />
                  <div><strong className="block text-xs text-foreground">Authentic</strong><span className="text-[9px] text-muted-foreground">Media verified</span></div>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-auto grid grid-cols-5 border-t border-border px-2 py-3 text-muted-foreground">
            {[Newspaper, Fingerprint, Sparkles, Video, Users].map((Icon, i) => (
              <div key={i} className="flex justify-center"><Icon className={i === 0 ? "h-4 w-4 text-cyan" : "h-4 w-4"} /></div>
            ))}
          </div>
        </div>
      </div>
      <div className="floating-proof floating-proof-left">
        <LockKeyhole className="h-5 w-5 text-cyan" />
        <div><span>Evidence</span><strong>Encrypted</strong></div>
      </div>
      <div className="floating-proof floating-proof-right">
        <Zap className="h-5 w-5 text-primary" />
        <div><span>Powered by</span><strong>ViERA AI</strong></div>
      </div>
    </div>
  );
}

function Index() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <main className="min-h-screen overflow-hidden bg-background text-foreground">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-border/70 bg-background/80 backdrop-blur-xl">
        <div className="page-container flex h-20 items-center justify-between">
          <a href="#top" aria-label="InViGiL home"><BrandMark /></a>
          <div className="hidden items-center gap-8 lg:flex">
            {[
              ["Platform", "#platform"],
              ["INVIGIL", "#investigations"],
              ["ViERA", "#viera"],
              ["For you", "#audiences"],
              ["Plans", "#plans"],
            ].map(([label, href]) => <a key={label} href={href} className="nav-link">{label}</a>)}
          </div>
          <div className="hidden items-center gap-3 lg:flex">
            <Button variant="ghost" size="sm">Login</Button>
            <Button variant="hero" size="sm">Register <ArrowRight /></Button>
          </div>
          <Button variant="ghost" size="icon" className="lg:hidden" aria-label={menuOpen ? "Close menu" : "Open menu"} onClick={() => setMenuOpen((value) => !value)}>
            {menuOpen ? <X /> : <Menu />}
          </Button>
        </div>
        {menuOpen && (
          <div className="border-t border-border bg-background px-5 py-5 lg:hidden">
            <div className="flex flex-col gap-1">
              {["Platform", "Investigations", "ViERA", "Audiences", "Plans"].map((label) => (
                <a key={label} href={`#${label === "Investigations" ? "investigations" : label.toLowerCase()}`} onClick={() => setMenuOpen(false)} className="nav-link py-3">{label}</a>
              ))}
              <Button variant="hero" className="mt-3">Register <ArrowRight /></Button>
            </div>
          </div>
        )}
      </nav>

      <section id="top" className="hero-grid relative min-h-[760px] pt-32 lg:min-h-[900px] lg:pt-40">
        <div className="hero-lines" aria-hidden="true" />
        <div className="page-container relative grid items-center gap-16 pb-28 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10">
          <div className="relative z-10 max-w-3xl">
            <div className="mb-7 flex flex-wrap items-center gap-3">
              <span className="eyebrow"><span className="status-dot bg-cyan" /> A new standard for civic media</span>
              <span className="viera-badge"><Sparkles className="h-3.5 w-3.5" /> Powered by ViERA</span>
            </div>
            <h1 className="max-w-[760px] font-display text-5xl font-semibold leading-[0.98] sm:text-6xl lg:text-8xl">
              Intelligence <span className="gradient-text">beyond vision.</span>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-muted-foreground sm:text-xl">
              Verified news, real investigations and AI-powered media—built into one trusted civic platform.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button variant="hero" size="lg"><Download /> Download app</Button>
              <Button variant="heroOutline" size="lg"><Play /> Try web</Button>
              <Button variant="ghost" size="lg">Explore platform <ArrowRight /></Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 border-t border-border/70 pt-6">
              {["Editorially verified", "Secure investigations", "AI assisted"].map((item) => (
                <span key={item} className="flex items-center gap-2 text-sm text-muted-foreground"><Check className="h-4 w-4 text-cyan" />{item}</span>
              ))}
            </div>
          </div>
          <ProductVisual />
        </div>
        <div className="absolute inset-x-0 bottom-0 border-y border-border/70 bg-surface-glass backdrop-blur-md">
          <div className="page-container flex min-h-16 items-center gap-8 overflow-hidden">
            <span className="shrink-0 font-mono text-[10px] font-semibold uppercase tracking-[0.2em] text-muted-foreground">One ecosystem</span>
            <div className="flex min-w-max flex-1 items-center justify-around gap-8">
              {["Verified News", "INVIGIL", "ViERA AI", "Teasers", "Live TV", "Newsstand"].map((item) => <span key={item} className="text-sm font-semibold text-foreground/75">{item}</span>)}
            </div>
          </div>
        </div>
      </section>

      <section id="platform" className="section-shell">
        <div className="page-container">
          <div className="section-heading">
            <div><p className="eyebrow text-cyan">The platform</p><h2>Truth, action and intelligence.<br />Connected.</h2></div>
            <p>InViGiL brings the entire information lifecycle together—from a citizen’s first report to verified publication and accountable action.</p>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-xl border border-border bg-border md:grid-cols-2 xl:grid-cols-4">
            {pillars.map(({ icon: Icon, number, title, body, detail }) => (
              <article key={title} className="pillar-card group">
                <div className="flex items-start justify-between"><div className="icon-box"><Icon /></div><span className="font-mono text-xs text-muted-foreground">{number}</span></div>
                <h3>{title}</h3><p>{body}</p>
                <div className="mt-auto flex items-center justify-between border-t border-border pt-5 font-mono text-[10px] uppercase tracking-wider text-muted-foreground"><span>{detail}</span><ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" /></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="investigations" className="section-shell border-y border-border bg-card/30">
        <div className="page-container">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
            <div>
              <p className="eyebrow text-primary">INVIGIL investigations</p>
              <h2 className="mt-5 font-display text-4xl font-semibold sm:text-5xl">A clear path from concern to evidence.</h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">Access vetted professionals, protected case funding and an auditable workspace where every task and expense is accounted for.</p>
              <div className="mt-8 grid grid-cols-2 gap-3">
                {["Vetted professionals", "Escrow funding", "Secure MUChat", "Encrypted evidence"].map((item) => <div key={item} className="feature-chip"><Check />{item}</div>)}
              </div>
              <Button variant="heroOutline" size="lg" className="mt-8">Start an investigation <ArrowRight /></Button>
            </div>
            <div className="workflow-panel">
              <div className="mb-7 flex items-center justify-between border-b border-border pb-5"><span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Case workflow</span><span className="live-label"><span className="status-dot bg-cyan" /> Protected</span></div>
              <div className="relative space-y-1">
                <div className="workflow-line" />
                {steps.map(({ icon: Icon, label, text }, i) => (
                  <div key={label} className="workflow-step">
                    <div className="workflow-icon"><Icon /></div>
                    <div className="min-w-0 flex-1"><span>{label}</span><p>{text}</p></div>
                    <span className="font-mono text-[10px] text-muted-foreground">0{i + 1}</span>
                  </div>
                ))}
              </div>
              <div className="mt-6 grid grid-cols-3 gap-px overflow-hidden rounded-lg border border-border bg-border text-center">
                {[['₹1,500+', 'Case funding'], ['4 roles', 'Secure workspace'], ['100%', 'Ledger tracked']].map(([value, label]) => <div key={label} className="bg-card px-3 py-4"><strong className="font-display text-lg text-foreground">{value}</strong><span className="mt-1 block text-[10px] text-muted-foreground">{label}</span></div>)}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="viera" className="section-shell relative">
        <div className="viera-beam" />
        <div className="page-container relative">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mx-auto mb-6 flex h-14 w-14 items-center justify-center rounded-xl border border-brand-stroke bg-surface-glass shadow-brand"><Sparkles className="h-6 w-6 text-cyan" /></div>
            <p className="eyebrow justify-center text-cyan">Powered by ViERA</p>
            <h2 className="mt-5 font-display text-4xl font-semibold sm:text-6xl">An AI newsroom that<br /><span className="gradient-text">strengthens human judgment.</span></h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">Move from raw information to responsible media faster—with intelligence designed for creators, citizens and newsrooms.</p>
          </div>
          <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              [Bot, "ViERA Chat", "Ask, research and create with a media-aware assistant.", "Live"],
              [Radio, "AI Newsroom", "Turn verified stories into ready-to-air broadcasts.", "Live"],
              [SearchCheck, "Verification", "Assess media authenticity and detect manipulation.", "Live"],
              [Globe2, "Translation", "Take trusted reporting across language boundaries.", "Live"],
            ].map(([Icon, title, body, status]) => {
              const ItemIcon = Icon as typeof Bot;
              return <article key={title as string} className="ai-card"><ItemIcon /><span className="live-label">{status as string}</span><h3>{title as string}</h3><p>{body as string}</p></article>;
            })}
          </div>
          <div className="mt-4 flex items-center justify-center gap-3 border border-dashed border-border p-4 text-sm text-muted-foreground"><Eye className="h-4 w-4 text-primary" /><span><strong className="text-foreground">Anchor Studio</strong> and Spatial AR are in development.</span></div>
        </div>
      </section>

      <section id="audiences" className="section-shell border-y border-border bg-card/30">
        <div className="page-container">
          <div className="section-heading"><div><p className="eyebrow text-cyan">Built for participation</p><h2>One platform.<br />Many ways to contribute.</h2></div><p>Whether you read, report, publish, investigate or sponsor—InViGiL gives your role the tools it deserves.</p></div>
          <Tabs defaultValue="Citizens" className="mt-12">
            <TabsList className="audience-tabs">
              {Object.keys(audiences).map((name) => <TabsTrigger key={name} value={name}>{name}</TabsTrigger>)}
            </TabsList>
            {Object.entries(audiences).map(([name, item]) => {
              const Icon = item.icon;
              return (
                <TabsContent key={name} value={name} className="audience-panel">
                  <div className="audience-icon"><Icon /></div>
                  <div><span className="font-mono text-xs uppercase tracking-widest text-cyan">For {name}</span><h3>{item.title}</h3><p>{item.body}</p></div>
                  <div className="space-y-4">{item.points.map((point) => <div key={point} className="flex items-start gap-3 text-sm text-foreground/80"><Check className="mt-0.5 h-4 w-4 shrink-0 text-cyan" />{point}</div>)}</div>
                </TabsContent>
              );
            })}
          </Tabs>
        </div>
      </section>

      <section className="section-shell">
        <div className="page-container">
          <div className="grid items-center gap-14 lg:grid-cols-2">
            <div className="trust-radar">
              <div className="radar-ring radar-one" /><div className="radar-ring radar-two" /><div className="radar-ring radar-three" />
              <div className="radar-core"><ShieldCheck /><strong>92</strong><span>TRUST SCORE</span></div>
              {["Source", "Evidence", "History", "Review"].map((item, i) => <span key={item} className={`radar-label radar-label-${i + 1}`}>{item}</span>)}
            </div>
            <div>
              <p className="eyebrow text-cyan">Trust and safety</p><h2 className="mt-5 font-display text-4xl font-semibold sm:text-5xl">Trust should be visible—not assumed.</h2>
              <p className="mt-6 text-lg leading-8 text-muted-foreground">Every signal is designed to help you understand who published something, how it was reviewed and why it deserves your attention.</p>
              <div className="mt-8 divide-y divide-border border-y border-border">
                {[[BadgeCheck, "Verification badges", "Know who has completed identity and role checks."], [SearchCheck, "Fact and trust scores", "See clear credibility signals from A+ through F."], [LockKeyhole, "Protected evidence", "Sensitive investigation files remain encrypted and controlled."]].map(([Icon, title, body]) => { const ItemIcon = Icon as typeof BadgeCheck; return <div key={title as string} className="flex gap-4 py-5"><ItemIcon className="mt-1 h-5 w-5 shrink-0 text-primary"/><div><strong className="text-foreground">{title as string}</strong><p className="mt-1 text-sm text-muted-foreground">{body as string}</p></div></div> })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="plans" className="section-shell border-y border-border bg-card/30">
        <div className="page-container">
          <div className="mx-auto max-w-2xl text-center"><p className="eyebrow justify-center text-cyan">Membership</p><h2 className="mt-5 font-display text-4xl font-semibold sm:text-5xl">Start free. Unlock more when you need it.</h2><p className="mt-5 text-muted-foreground">Membership unlocks tools and content. Your verified platform role remains separate.</p></div>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            {[
              { name: "Free", price: "₹0", note: "Always free", features: ["News and social feed", "Citizen reporting", "Live TV access"] },
              { name: "Basic+", price: "₹199", note: "per month", features: ["Ad-light feed", "Save vault", "Expanded library"] },
              { name: "Premium", price: "₹499", note: "per month · soon", featured: true, features: ["AI View", "Priority investigations", "Exclusive content"] },
              { name: "Enterprise", price: "₹2,999", note: "per month", features: ["Team seats", "Ads panel", "Organization tools"] },
            ].map((plan) => <article key={plan.name} className={`price-card ${plan.featured ? "price-featured" : ""}`}>{plan.featured && <span className="price-badge">Coming soon</span>}<h3>{plan.name}</h3><div className="mt-5"><strong>{plan.price}</strong><span>{plan.note}</span></div><ul>{plan.features.map((feature) => <li key={feature}><Check />{feature}</li>)}</ul><Button variant={plan.featured ? "hero" : "heroOutline"} className="mt-auto w-full">{plan.name === "Free" ? "Create account" : "View plan"}</Button></article>)}
          </div>
          <div className="mt-5 flex flex-col items-start justify-between gap-5 border border-border bg-card p-6 md:flex-row md:items-center"><div><span className="font-display text-lg font-semibold">Professional registration</span><p className="mt-1 text-sm text-muted-foreground">Verified investigators and security professionals · Inaugural ₹2,000/year</p></div><Button variant="heroOutline">Apply as a professional <ArrowRight /></Button></div>
        </div>
      </section>

      <section className="section-shell pb-0">
        <div className="page-container">
          <div className="cta-band">
            <div><p className="eyebrow text-cyan">InViGiL by AP Media</p><h2>See beyond the noise.</h2><p>Join a media platform built for truth, participation and accountable action.</p></div>
            <div className="flex flex-col gap-3 sm:flex-row"><Button variant="hero" size="lg"><Download /> Download app</Button><Button variant="heroOutline" size="lg">Register now <ArrowRight /></Button></div>
          </div>
        </div>
      </section>

      <footer className="mt-24 border-t border-border bg-card/40">
        <div className="page-container grid gap-12 py-14 md:grid-cols-[1.4fr_1fr_1fr]">
          <div><BrandMark /><p className="mt-5 max-w-sm text-sm leading-6 text-muted-foreground">Verified journalism, citizen-powered investigations and intelligent media in one trusted ecosystem.</p><p className="mt-5 font-mono text-xs text-cyan">invigilapp.com</p></div>
          <div><h3 className="footer-title">Platform</h3><div className="footer-links"><a href="#platform">Features</a><a href="#investigations">INVIGIL</a><a href="#viera">ViERA AI</a><a href="#plans">Membership</a></div></div>
          <div><h3 className="footer-title">Company</h3><div className="footer-links"><a href="#top">About AP Media</a><a href="#top">Privacy</a><a href="#top">Terms</a><a href="mailto:hello@invigilapp.com">Contact</a></div></div>
        </div>
        <div className="page-container flex flex-col justify-between gap-3 border-t border-border py-5 text-xs text-muted-foreground sm:flex-row"><span>© 2026 AP Media. All rights reserved.</span><span>Intelligence Beyond Vision.</span></div>
      </footer>
    </main>
  );
}