import * as React from "react";
import NextLink from "next/link";
import { cx } from "@/lib/utils";
import { Check } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { brand, siteConfig, footerCols, socials, resourceCats, resources, cta } from "@/content/site";

/* Internal links use the Next.js router. External links open in a new tab. */
export function Link({ href = "/", children, ...rest }) {
  if (/^(https?:|mailto:|tel:)/.test(href)) return <a href={href} target="_blank" rel="noopener noreferrer" {...rest}>{children}</a>;
  return <NextLink href={href} {...rest}>{children}</NextLink>;
}

export function Button({ href, variant = "primary", className, children, ...rest }) {
  const cls = cx("btn", "btn-" + variant, className);
  return href ? <Link href={href} className={cls} {...rest}>{children}</Link> : <button className={cls} {...rest}>{children}</button>;
}

export const Badge = ({ variant, children }) => <span className={cx("badge", variant && "badge-" + variant)}>{children}</span>;

export function SectionHeading({ title, lead, kicker }) {
  return (
    <Reveal className="sec-head">
      {kicker && <p className="kicker">{kicker}</p>}
      <h2 className="h2">{title}</h2>
      {lead && <p className="lead sec-lead">{lead}</p>}
    </Reveal>
  );
}

/* MWEGA wordmark. The mark is an M whose centre point is a connection node. It works on dark and light backgrounds because it follows currentColor. */
export function LogoMark({ size = 30 }) {
  return (
    <svg className="logo-mark" width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" focusable="false">
      <path d="M5 25V8l11 11L27 8v17" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="16" cy="19" r="2.6" fill="var(--signal)" />
    </svg>
  );
}
export function Logo({ variant = "full", size = 30 }) {
  return (
    <span className={cx("logo", variant === "mark" && "logo-only")}>
      <LogoMark size={size} />
      {variant !== "mark" && <span className="logo-word">MWEGA</span>}
    </span>
  );
}

export function LegacyLogo({ height = 40 }) {
  const legacy = brand.legacy;
  return (
    <span className="legacy">
      {legacy ? <img className="legacy-img" src={legacy} alt="Comrades Market" style={{ height }} /> : <span className="legacy-word">COMRADES MARKET</span>}
    </span>
  );
}

export function EmptyState({ title, text, action }) {
  return (
    <div className="empty">
      <h3 className="h3">{title}</h3>
      {text && <p className="body measure">{text}</p>}
      {action && <Button href={action[1]} variant="ghost">{action[0]}</Button>}
    </div>
  );
}

export function Footer() {
  return (
    <footer id="mw-footer" className="footer tone-dark">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <Link href="/" aria-label="Mwega, home"><Logo /></Link>
            <p className="footer-tag">{siteConfig.tagline}</p>
            <p className="small measure">{siteConfig.description}</p>
            <p className="small footer-loc">{siteConfig.location}</p>
          </div>
          <div className="footer-cols">
            {footerCols.map(([title, links]) => (
              <nav key={title} aria-label={title}>
                <h2 className="footer-h">{title}</h2>
                <ul>{links.map(([label, href]) => <li key={label}><Link href={href} className="footer-link">{label}</Link></li>)}</ul>
              </nav>
            ))}
            <div>
              <h2 className="footer-h">Connect</h2>
              <ul>
                <li><a className="footer-link" href={"mailto:" + siteConfig.email}>{siteConfig.email}</a></li>
                {socials.map(([label, key]) => siteConfig[key] ? <li key={key}><Link href={siteConfig[key]} className="footer-link">{label}</Link></li> : null)}
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 Mwega, formerly {siteConfig.formerly}. All rights reserved.</p>
          <ul><li><Link href="/privacy">Privacy Policy</Link></li><li><Link href="/terms">Terms of Service</Link></li></ul>
        </div>
      </div>
    </footer>
  );
}

/* Hero visual: operations, information, people and technology connected through one system.
   Pure SVG, so it is fast and works without JavaScript. Motion is CSS only and stops under reduced motion. */

export function CaseStudyCard({ study: c, onLight }) {
  return (
    <article className={cx("cs", onLight && "on-light")}>
      <div className="cs-top"><Badge variant="accent">{c.area}</Badge><span className="small muted">{c.kind}</span></div>
      <h3 className="cs-title">{c.title}</h3>
      <p className="cs-client">{[c.client, c.period].filter(Boolean).join(", ")}. Delivered as {c.deliveredAs}.</p>
      <dl className="cs-facts"><div><dt>Challenge</dt><dd>{c.challenge}</dd></div><div><dt>Result</dt><dd>{c.result}</dd></div></dl>
      <Link href={"/case-studies/" + c.slug} className="tlink stretch">Read the case study</Link>
    </article>
  );
}

export function ToolkitFeature() {
  const r = resources[0];
  return (
    <article id="toolkit" className="toolkit tone-dark anchor">
      <div className="badges"><Badge variant="accent">Premium toolkit</Badge><Badge variant="paid">Paid</Badge></div>
      <h3 className="h2 toolkit-title">{r.title}</h3>
      <p className="body">{r.description}</p>
      <ul className="ticks">{r.points.map((x) => <li key={x}><Check size={18} aria-hidden="true" />{x}</li>)}</ul>
      <div className="toolkit-foot"><p className="toolkit-price">{r.price}</p><Button href={r.cta[1]}>{r.cta[0]}</Button></div>
      <p className="small muted">{r.note}</p>
    </article>
  );
}

export function ResourceCard({ resource: r }) {
  const cat = resourceCats.find(([id]) => id === r.category);
  return (
    <article className={cx("rcard", r.placeholder && "is-placeholder")}>
      <div className="rcard-top">
        <span className="small muted">{cat ? cat[1] : ""}</span>
        <span className="badges">{r.placeholder && <Badge variant="dashed">Coming soon</Badge>}<Badge variant={r.access}>{r.access === "paid" ? "Paid" : "Free"}</Badge></span>
      </div>
      <h3 className="card-title">{r.title}</h3>
      <p className="body">{r.description}</p>
      {r.price && <p className="strong">{r.price}</p>}
      {r.cta ? <Link href={r.cta[1]} className="tlink">{r.cta[0]}</Link> : <span className="small muted">Not yet available</span>}
      {r.note && <p className="small muted">{r.note}</p>}
    </article>
  );
}

export function CTASection({ title = "Build a business that works beyond you.", text = "Let's identify what is holding your business back and design the systems that will support its next stage of growth.", primary = cta.consult, secondary = cta.approach }) {
  return (
    <section className="cta tone-dark">
      <div className="wrap">
        <Reveal>
          <h2 className="h1">{title}</h2>
          <p className="lead">{text}</p>
          <div className="btn-row"><Button href={primary[1]}>{primary[0]}</Button>{secondary && <Button href={secondary[1]} variant="ghost">{secondary[0]}</Button>}</div>
        </Reveal>
      </div>
    </section>
  );
}

export function PageHero({ title, lead, kicker, children }) {
  return (
    <section className="phero tone-dark">
      <div className="wrap">
        {kicker && <p className="kicker rise">{kicker}</p>}
        <h1 className="h1 rise" style={{ "--d": "60ms" }}>{title}</h1>
        {lead && <p className="lead phero-lead rise" style={{ "--d": "160ms" }}>{lead}</p>}
        {children && <div className="rise" style={{ "--d": "260ms" }}>{children}</div>}
      </div>
    </section>
  );
}

export function Rows({ items }) {
  return <dl className="rows">{items.map(([name, text]) => <div key={name}><dt>{name}</dt><dd className="body">{text}</dd></div>)}</dl>;
}
