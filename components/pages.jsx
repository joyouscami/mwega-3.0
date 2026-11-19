import { HeroArt } from "@/components/hero-art";
import * as React from "react";
import { cx } from "@/lib/utils";
import { Check } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { Link, Button, Badge, SectionHeading, LegacyLogo, EmptyState, CTASection, PageHero, Rows } from "@/components/ui";
import { AIDiagnostic, CaseImage, ContactForm, ArticleCard, ResourcesPage } from "@/components/interactive";
import { siteConfig, cta, hero, problem, solutionIntro, solutions, clientProfile, stages, methodNote, diagnostic, offers, finalCta, philosophy, founder, statements, timeline, values, articles, caseStudies, nextSteps, legalPages } from "@/content/site";

export function BrochureSection() {
  if (!siteConfig.brochure) return null;
  return (
    <section className="sec bg-paper tone-light">
      <div className="wrap">
        <Reveal className="brochure">
          <div>
            <h2 className="h2">Take the full training programme with you.</h2>
            <p className="body" style={{ marginTop: 12 }}>The Business Clinic week by week, seats and pricing, the SME Data & AI Toolkit and the questions founders ask first, in one PDF.</p>
          </div>
          <div className="brochure-actions">
            <a className="btn btn-primary" href={siteConfig.brochure} download>Download the brochure (PDF)</a>
            <p className="small muted">Published under the Comrades Market name.</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function TrainingVideo() {
  const url = siteConfig.trainingVideo;
  if (!url) return null;
  const yt = /(?:youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/.exec(url);
  const vm = /vimeo\.com\/(?:video\/)?(\d+)/.exec(url);
  const embed = yt ? "https://www.youtube-nocookie.com/embed/" + yt[1] : vm ? "https://player.vimeo.com/video/" + vm[1] : null;
  const title = siteConfig.trainingVideoTitle || "Digital marketing and online business training";
  return (
    <section className="sec bg-white tone-light">
      <div className="wrap video-grid">
        <Reveal className="stack">
          <h2 className="h2">Digital marketing and online business, taught live.</h2>
          <p className="body measure">A full recording of a training session on digital marketing and online business, delivered at a local church. Watch how we teach.</p>
          <div className="btn-row"><Button href="/contact">{cta.discuss[0]}</Button></div>
        </Reveal>
        <Reveal delay={120}>
          <div className="video-frame">
            {embed
              ? <iframe src={embed} title={title} loading="lazy" allow="accelerometer; encrypted-media; picture-in-picture; fullscreen" allowFullScreen referrerPolicy="strict-origin-when-cross-origin" />
              : <video controls preload="metadata" playsInline aria-label={title}><source src={url} />Your browser cannot play this video.</video>}
          </div>
          <p className="small muted video-cap">Recorded at a local church. Topic: digital marketing and online business.</p>
        </Reveal>
      </div>
    </section>
  );
}

/* Training is kept as supporting material, so teams can use the systems we build. */
export function ResourcesRoute() {
  return (
    <>
      <ResourcesPage />
      <section id="training" className="sec bg-navy tone-dark anchor">
        <div className="wrap split">
          <Reveal><h2 className="h2">Training and workshops</h2></Reveal>
          <Reveal delay={100} className="stack">
            <p className="lead">New systems only work when people use them. Alongside consulting, we run practical training that helps teams get the most from their data, tools and processes.</p>
            <p className="body">The Business Clinic is a six-week programme for founders already running a business. You can read how the first edition went in the case study.</p>
            <div className="btn-row"><Button href="/case-studies/business-clinic-first-edition" variant="ghost">Read the Business Clinic case study</Button><Button href="/contact">{cta.discuss[0]}</Button></div>
          </Reveal>
        </div>
      </section>
      <TrainingVideo />
      <BrochureSection />
      <CTASection primary={cta.discuss} secondary={null} />
    </>
  );
}

export function CaseExtras({ study: c }) {
  const shots = (c.images || []).filter(([src]) => src);
  return (
    <>
      {c.details && <div className="case-block"><h2 className="h3">In more detail</h2><Rows items={c.details} /></div>}
      {shots.length > 0 && <div className="case-block"><h2 className="h3">From the work</h2><div className="shots">{shots.map(([src, alt, caption]) => <CaseImage key={src} src={src} alt={alt} caption={caption} />)}</div></div>}
      {c.schedule && (
        <div className="case-block">
          <h2 className="h3">The 1st Edition, week by week</h2>
          <ol className="sched">{c.schedule.map(([date, topic, guest]) => <li key={date}><span className="small muted">{date}</span><b>{topic}</b>{guest && <Badge variant="dashed">Guest trainer</Badge>}</li>)}</ol>
        </div>
      )}
      {c.room && <div className="case-block"><h2 className="h3">Who was in the room</h2><div className="pill-row">{c.room.map((t) => <span key={t} className="badge">{t}</span>)}</div></div>}
      {c.testimonials && (
        <div className="case-block">
          <h2 className="h3">In their words</h2>
          <div className="quotes">{c.testimonials.map(([quote, name, role]) => <blockquote key={name} className="quote"><p>{"\u201C" + quote + "\u201D"}</p><footer><b>{name}</b><span>{role}</span></footer></blockquote>)}</div>
        </div>
      )}
      {c.cta && <div className="case-block"><Button href={c.cta[1]}>{c.cta[0]}</Button></div>}
    </>
  );
}

export function StageList({ detailed }) {
  return (
    <ol className={cx("stages", detailed && "stages-detailed")}>
      {stages.map((s, i) => (
        <li key={s.name} className="stage">
          <Reveal delay={i * 90}>
            <p className="stage-n">{s.n}</p>
            <h3 className="stage-name">{s.name}</h3>
            <p className="stage-line">{s.line}</p>
            {detailed && (
              <>
                <h4 className="stage-h">What to expect</h4>
                <ul className="bullets">{s.expect.map((x) => <li key={x}>{x}</li>)}</ul>
                <h4 className="stage-h">What you have at the end</h4>
                <p className="body">{s.result}</p>
              </>
            )}
          </Reveal>
        </li>
      ))}
    </ol>
  );
}

const SOL_IMG = { "business-systems": "bsys", "business-intelligence": "bi", "digital-systems": "dsys", "ai-automation": "ai" };

export function HomePage() {
  const latest = articles.slice(0, 3);
  return (
    <div className="home">
      <section className="hero tone-dark">
        <HeroArt />
        <div className="wrap hero-grid">
          <div className="hero-text">
            <p className="eyebrow rise">{hero.eyebrow}</p>
            <h1 className="h-display rise" style={{ "--d": "80ms" }}>Your <em>business</em> has grown.<br />Have your <em className="t">systems?</em></h1>
            <div className="hero-copy rise" style={{ "--d": "200ms" }}><p>{hero.lead}</p></div>
            <div className="btn-row rise" style={{ "--d": "320ms" }}><Button href={cta.consult[1]}>{cta.consult[0]}</Button><Button href={cta.approach[1]} variant="ghost">{cta.approach[0]}</Button></div>
          </div>
        </div>
      </section>

      <section className="sec bg-paper tone-light" id="the-problem">
        <div className="wrap">
          <div className="pos-grid">
            <Reveal><h2 className="h2">{problem.title}</h2></Reveal>
            <Reveal delay={100} className="stack">{problem.lead.map((p, i) => <p key={p} className={i === 0 ? "lead strong" : "body"}>{p}</p>)}</Reveal>
          </div>
          <Reveal className="founder-photo"><img src="/brand/founder.webp" alt="A founder pausing at her desk, thinking through the next stage of the business" width="1600" height="900" loading="lazy" decoding="async" /></Reveal>
          <ul className="issues">
            {problem.items.map(([t, s], i) => (
              <li key={t}><Reveal delay={i * 70}><h3 className="issue-name">{t}</h3><p className="small">{s}</p></Reveal></li>
            ))}
          </ul>
          <Reveal><p className="conclude">{problem.conclusion}</p></Reveal>
        </div>
      </section>

      <section className="sec bg-teal tone-teal" id="solution">
        <div className="wrap">
          <SectionHeading title={solutionIntro.title} lead={solutionIntro.lead} />
          <ul className="caps">
            {solutions.map((s, i) => (
              <li key={s.slug}><Reveal delay={i * 80} className={cx("cap", `cap-${s.slug}`)}>
                <h3 className="cap-name">{s.homeName}</h3>
                <p className="body">{s.homeText}</p>
                <Link href={"/what-we-solve#" + s.slug} className="tlink stretch">How this works</Link>
              </Reveal></li>
            ))}
          </ul>
          <p className="cap-note">{solutionIntro.note}</p>
        </div>
      </section>

      <section className="sec bg-navy tone-dark beyond">
        <div className="wrap beyond-grid">
          <Reveal className="beyond-photo"><img src="/brand/operations.webp" alt="A founder talking a team through how the work flows, with a laptop and printed reports on the table" width="1600" height="900" loading="lazy" decoding="async" /></Reveal>
          <Reveal delay={100} className="stack">
            <p className="eyebrow">THE MWEGA DIFFERENCE</p>
            <h2 className="h2">We look beyond the tools.</h2>
            <p className="lead">We study how your business actually operates before we recommend any technology.</p>
            <ul className="beyond-list">{philosophy.map(([t, d]) => <li key={t}><b>{t}</b><span>{d}</span></li>)}</ul>
          </Reveal>
        </div>
      </section>

      <section className="sec bg-navy2 tone-dark anchor" id="who-we-work-with">
        <div className="wrap split">
          <Reveal className="stack">
            <h2 className="h2">{clientProfile.title}</h2>
            <p className="lead">{clientProfile.lead}</p>
            <ul className="ticks">{clientProfile.traits.map((t) => <li key={t}><Check size={18} aria-hidden="true" />{t}</li>)}</ul>
          </Reveal>
          <Reveal delay={100}>
            <div className="panel-dark">
              <h3 className="h3">{clientProfile.situationsTitle}</h3>
              <ul className="situations">{clientProfile.situations.map((t) => <li key={t}>{t}</li>)}</ul>
              <p className="small muted">{clientProfile.notFor}</p>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="sec bg-paper tone-light" id="how-we-work">
        <div className="wrap">
          <SectionHeading title="Understand the problem. Build the right system. Improve continuously." lead={methodNote} />
          <Reveal className="method-band"><img src="/brand/method.webp" alt="" width="1800" height="591" loading="lazy" decoding="async" /></Reveal>
          <StageList />
          <div className="sec-foot"><Button href={cta.approach[1]}>{cta.approach[0]}</Button></div>
        </div>
      </section>

      <section className="sec bg-orange tone-orange" id="engagement">
        <div className="wrap split">
          <Reveal className="stack">
            <h2 className="h2">Before you buy another tool, understand what your business needs.</h2>
            <p className="lead">{diagnostic.lead}</p>
            <h3 className="h3">What we assess</h3>
            <ul className="ticks">{diagnostic.areas.map((a) => <li key={a}><Check size={18} aria-hidden="true" />{a}</li>)}</ul>
          </Reveal>
          <Reveal delay={100} className="stack">
            <img className="diag-photo" src="/brand/diagnostic.webp" alt="A founder reviewing a printed report beside her laptop" width="1200" height="675" loading="lazy" decoding="async" />
            <div className="deliverable">
              <p className="small muted">What you receive</p>
              <p className="deliverable-text">{diagnostic.deliverable}</p>
            </div>
            <div className="btn-row"><Button href={cta.diagnostic[1]}>{cta.diagnostic[0]}</Button></div>
            <p className="small muted">{diagnostic.terms}</p>
          </Reveal>
        </div>
      </section>

      <section className="sec bg-paper tone-light">
        <div className="wrap">
          <div className="ins-head">
            <div className="stack">
              <p className="eyebrow">INSIGHTS</p>
              <h2 className="h2">Practical thinking for growing businesses.</h2>
              <p className="lead">Articles on business systems, operational efficiency, data and automation.</p>
              <div className="btn-row"><Button href="/insights" variant="ghost">All insights</Button></div>
            </div>
            <Reveal className="ins-photo"><img src="/brand/insights.webp" alt="A founder studying a report at her desk" width="1400" height="788" loading="lazy" decoding="async" /></Reveal>
          </div>
          <div className="grid3">{latest.map((a) => <ArticleCard key={a.slug} article={a} />)}</div>
        </div>
      </section>

      <CTASection title={finalCta.title} text={finalCta.text} primary={["Book a Consultation", "/contact"]} secondary={cta.diagnostic} />
    </div>
  );
}

export function WhatWeSolvePage() {
  return (
    <>
      <PageHero kicker="What we solve" title="Four connected ways to make your business work better." lead="We organise our work around the problems founders actually face. Each capability can stand alone, but they are designed to work together as one engagement." />
      <section className="sec bg-paper tone-light">
        <div className="wrap">
          <nav className="map" aria-label="Jump to a capability">
            {solutions.map((s, i) => <Link key={s.slug} href={"/what-we-solve#" + s.slug}><span>{"0" + (i + 1)}</span><b>{s.short}</b></Link>)}
          </nav>
          {solutions.map((s) => (
            <article key={s.slug} id={s.slug} className="sol">
              <h2 className="h2">{s.name}</h2>
              {SOL_IMG[s.slug] && <img className="sol-img" src={`/brand/${SOL_IMG[s.slug]}.webp`} alt="" width="1400" height="788" loading="lazy" decoding="async" />}
              <div className="sol-grid">
                <Rows items={[["The business problem", s.problem], ["What Mwega does", s.does], ["How the engagement works", s.how]]} />
                <aside className="sol-side">
                  <h3 className="row-name">Expected business outcome</h3>
                  <p className="body">{s.outcome}</p>
                  <Button href={"/contact?challenge=" + encodeURIComponent(s.topic)} className="btn-block">{cta.discuss[0]}</Button>
                </aside>
              </div>
            </article>
          ))}
        </div>
      </section>
      <section className="sec sec-open bg-navy tone-dark">
        <div className="wrap">
          <SectionHeading title="Where could automation help your business?" lead="Tick the work that takes up your team's time. We will show you where we would look first." />
          <AIDiagnostic />
        </div>
      </section>
      <CTASection title="Not sure which capability you need?" text="Most founders do not know where to start, and they do not need to. A Business Systems Diagnostic finds the answer first." primary={cta.diagnostic} secondary={cta.consult} />
    </>
  );
}

export function ApproachPage() {
  return (
    <>
      <PageHero kicker="Our approach" title="A repeatable method for building systems that last." lead={methodNote} />
      <section className="sec bg-paper tone-light"><div className="wrap"><StageList detailed /></div></section>
      <section className="sec bg-navy tone-dark">
        <div className="wrap">
          <SectionHeading title="How we think about business systems." />
          <Reveal className="trio">{philosophy.map(([n, t]) => <div key={n}><h3 className="h3">{n}</h3><p className="body">{t}</p></div>)}</Reveal>
        </div>
      </section>
      <section className="sec bg-paper tone-light">
        <div className="wrap">
          <SectionHeading title="A natural client journey." lead="Most engagements begin with the diagnostic. After that you choose how far to go with us. Nothing is bundled, and you can take the roadmap and run with it yourself." />
          <ol className="journey">
            {offers.map((o) => (
              <li key={o.name} className="offer"><Reveal>
                <p className="offer-tag">{o.tag}</p>
                <h3 className="offer-name">{o.name}</h3>
                <p className="body">{o.text}</p>
                {o.href && <Link href={o.href} className="tlink">About the diagnostic</Link>}
              </Reveal></li>
            ))}
          </ol>
        </div>
      </section>
      <CTASection title="See how it would work for your business." primary={cta.diagnostic} secondary={cta.consult} />
    </>
  );
}

export function DiagnosticPage() {
  return (
    <>
      <PageHero kicker="The first step" title={diagnostic.name} lead={diagnostic.lead}>
        <div className="btn-row"><Button href="/contact?challenge=Not%20sure%20yet">{cta.consult[0]}</Button></div>
      </PageHero>
      <section className="sec bg-paper tone-light">
        <div className="wrap split">
          <Reveal className="stack">
            <h2 className="h2">What we assess</h2>
            <ul className="ticks">{diagnostic.areas.map((a) => <li key={a}><Check size={18} aria-hidden="true" />{a}</li>)}</ul>
          </Reveal>
          <Reveal delay={100} className="deliverable deliverable-light">
            <p className="small muted">What you receive</p>
            <h3 className="h3">Business Systems Improvement Roadmap</h3>
            <p className="body" style={{ marginTop: 10 }}>{diagnostic.deliverable}</p>
          </Reveal>
        </div>
      </section>
      <section className="sec bg-navy tone-dark">
        <div className="wrap">
          <SectionHeading title="How it works." />
          <ol className="dsteps">{diagnostic.steps.map(([n, t], i) => <li key={n}><Reveal delay={i * 80}><p className="stage-n">{"0" + (i + 1)}</p><h3 className="stage-name">{n}</h3><p className="body">{t}</p></Reveal></li>)}</ol>
        </div>
      </section>
      <section className="sec bg-paper tone-light">
        <div className="wrap split">
          <Reveal><h2 className="h2">What we ask of you.</h2></Reveal>
          <Reveal delay={100} className="stack">
            <ul className="bullets">{diagnostic.need.map((t) => <li key={t}>{t}</li>)}</ul>
            <p className="body strong">{diagnostic.terms}</p>
          </Reveal>
        </div>
      </section>
      <CTASection title="Start with a clear picture of how your business runs." primary={cta.consult} secondary={null} />
    </>
  );
}

export function AboutPage() {
  return (
    <>
      <PageHero kicker="About Mwega" title="A business systems consultancy for founders who have outgrown informal ways of running the business." />
      <section id="story" className="sec bg-paper tone-light anchor">
        <div className="wrap split">
          <Reveal className="stack"><h2 className="h2">Why Mwega exists</h2></Reveal>
          <Reveal delay={100} className="stack">
            {/* Draft story: confirm wording with the Mwega team. */}
            <p className="lead strong">Businesses grow faster than the systems that support them.</p>
            <p className="body">A business that started with a founder, a phone and a spreadsheet can reach a point where more customers, more transactions and more people create more friction instead of more output. Information is scattered, processes depend on individuals and too many decisions wait for the founder.</p>
            <p className="body">Mwega exists to fix that underlying structure. We look at how the business operates, find what is holding it back and build the processes, information flows and technology that let it run better, make better decisions and grow with confidence.</p>
          </Reveal>
        </div>
      </section>
      <section className="sec bg-white tone-light">
        <div className="wrap split">
          <Reveal className="stack"><h2 className="h2">Where we come from</h2><LegacyLogo height={44} /></Reveal>
          <Reveal delay={100} className="stack">
            <p className="body">Mwega is the evolution of Comrades Market, which helped businesses with digital marketing, research and business support. Our earlier work, from campaigns to reconciliation and reporting, kept pointing to the same gap between how a business operates and the systems behind it.</p>
            <p className="body strong">The name changed because the focus did.</p>
          </Reveal>
          <ol className="split-wide">
            {timeline.map(([title, text, years]) => (
              <li key={title} className={cx("tl-item", title === "Mwega" && "is-key")}>
                <span className="tl-node" aria-hidden="true" /><p className="small muted">{years}</p><h3 className="tl-title">{title}</h3><p className="body">{text}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <section className="sec bg-navy tone-dark">
        <div className="wrap">
          <SectionHeading title="Our philosophy on business systems, data and technology." />
          <Reveal className="trio">{philosophy.map(([n, t]) => <div key={n}><h3 className="h3">{n}</h3><p className="body">{t}</p></div>)}</Reveal>
          <Reveal><dl className="big-rows">{statements.map(([n, t]) => <div key={n}><dt>{n}</dt><dd>{t}</dd></div>)}</dl></Reveal>
        </div>
      </section>
      {founder.name && (
        <section className="sec bg-paper tone-light">
          <div className="wrap split">
            <Reveal><h2 className="h2">Leadership</h2></Reveal>
            <Reveal delay={100} className="stack"><h3 className="h3">{founder.name}</h3>{founder.role && <p className="small muted">{founder.role}</p>}<p className="body">{founder.bio}</p></Reveal>
          </div>
        </section>
      )}
      <section className="sec bg-paper tone-light">
        <div className="wrap">
          <SectionHeading title="Our values" />
          <ul className="cells cells-3">{values.map(([n, t]) => <li key={n}><div className="cell"><h3 className="cell-name">{n}</h3><p>{t}</p></div></li>)}</ul>
        </div>
      </section>
      <CTASection primary={cta.consult} secondary={cta.approach} />
    </>
  );
}

export function CaseStudyPage({ study: c }) {
  const live = c.status === "published";
  return (
    <>
      <PageHero kicker={live ? [c.kind, c.period].filter(Boolean).join(", ") : "Case study"} title={live ? c.title : "Case study coming soon"} lead={live ? c.client + ". Delivered as " + c.deliveredAs + "." : "This case study is not published yet."} />
      <section className="sec bg-paper tone-light">
        <div className="wrap">
          {live && <dl className="metrics">{c.metrics.map(([value, label]) => <div key={label}><dt>{label}</dt><dd>{value}</dd></div>)}</dl>}
          {live && <Rows items={["challenge", "approach", "solution", "result"].map((k) => [k[0].toUpperCase() + k.slice(1), c[k]])} />}
          {live && <CaseExtras study={c} />}
          <p className="sec-foot"><Link className="tlink" href="/case-studies">All case studies</Link></p>
        </div>
      </section>
      <CTASection primary={cta.discuss} secondary={null} title="Have a challenge like this one?" text="Tell us what is slowing the business down. We will tell you honestly whether and how we can help." />
    </>
  );
}

export function Rich({ text }) {
  return text.split(/(\*\*[^*]+\*\*|\[[^\]]+\]\([^)]+\))/).map((part, i) => {
    if (part.startsWith("**")) return <strong key={i}>{part.slice(2, -2)}</strong>;
    const m = /^\[([^\]]+)\]\(([^)]+)\)$/.exec(part);
    return m ? <Link key={i} className="tlink" href={m[2]}>{m[1]}</Link> : part;
  });
}

export function ArticleBody({ blocks }) {
  return (
    <div className="prose">
      {blocks.map(([kind, a, b], i) => {
        if (kind === "h") return <h2 key={i} className="h3">{a}</h2>;
        if (kind === "sh") return <p key={i} className="body strong" style={{ marginBottom: -8 }}>{a}</p>;
        if (kind === "ul") return <ul key={i} className="prose-list">{a.map((t) => <li key={t}><Rich text={t} /></li>)}</ul>;
        if (kind === "table") return (
          <div key={i} className="prose-table"><table><thead><tr>{a.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>
            <tbody>{b.map((row) => <tr key={row[0]}>{row.map((cell, j) => (j === 0 ? <th key={j} scope="row">{cell}</th> : <td key={j}>{cell}</td>))}</tr>)}</tbody></table></div>
        );
        return <p key={i} className="body"><Rich text={a} /></p>;
      })}
    </div>
  );
}

export function ArticlePage({ article: a }) {
  return (
    <>
      <PageHero kicker={a.category} title={a.title} lead={a.summary} />
      <section className="sec bg-paper tone-light">
        <div className="wrap article-wrap">
          {a.image && <CaseImage src={a.image} alt={a.alt} />}
          <ArticleBody blocks={a.body} />
          <p className="sec-foot"><Link className="tlink" href="/insights">All insights</Link></p>
        </div>
      </section>
      <CTASection primary={cta.discuss} secondary={cta.diagnostic} title="Recognise your business in this?" text="Tell us what is holding operations back and we will suggest where to start." />
    </>
  );
}

export function ContactPage() {
  return (
    <>
      <PageHero kicker="Contact" title="Discuss a business systems challenge." lead="Tell us about your business and where operations are holding it back. We will tell you honestly whether and how we can help." />
      <section className="sec bg-paper tone-light">
        <div className="wrap contact-grid">
          <ContactForm />
          <aside className="panel">
            <h2 className="h3">What happens next</h2>
            <ol className="numbered">{nextSteps.map((t) => <li key={t}>{t}</li>)}</ol>
            <h2 className="h3" style={{ marginTop: 26 }}>Other ways to reach us</h2>
            <div className="detail"><b>Email</b><a className="tlink" href={"mailto:" + siteConfig.email}>{siteConfig.email}</a></div>
            <div className="detail"><b>Phone</b><a className="tlink" href={siteConfig.phoneHref}>{siteConfig.phone}</a></div>
            <div className="detail"><b>WhatsApp</b><Link className="tlink" href={siteConfig.whatsapp}>Message us on WhatsApp</Link></div>
            <div className="detail"><b>Based in</b>{siteConfig.location}</div>
          </aside>
        </div>
      </section>
    </>
  );
}

export function LegalPage({ title }) {
  const page = legalPages[title];
  if (!page) return (
    <>
      <PageHero title={title} lead="The final text will be added before launch." />
      <section className="sec bg-paper tone-light"><div className="wrap"><EmptyState title={title + " to be added"} text="Have a question in the meantime? Send us a note." action={["Contact Mwega", "/contact"]} /></div></section>
    </>
  );
  return (
    <>
      <PageHero title={title} lead={(page.effective ? "Effective " + page.effective + ". " : "") + "Last updated " + page.updated + "."} />
      <section className="sec bg-paper tone-light">
        <div className="wrap article-wrap">
          <ArticleBody blocks={page.body} />
          <p className="sec-foot"><Link className="tlink" href="/contact">Questions? Contact us</Link></p>
        </div>
      </section>
    </>
  );
}

export function NotFoundPage() {
  return (
    <section className="nf tone-dark">
      <div className="wrap">
        <p className="nf-code" aria-hidden="true">404</p>
        <h1 className="h1">This page has moved or does not exist.</h1>
        <p className="lead" style={{ margin: "18px 0 30px" }}>Try the main sections, or tell us what you were looking for.</p>
        <div className="btn-row"><Button href="/">Back to Mwega</Button><Button href="/contact" variant="ghost">{cta.discuss[0]}</Button></div>
      </div>
    </section>
  );
}
