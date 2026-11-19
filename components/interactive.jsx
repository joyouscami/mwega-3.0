"use client";

import * as React from "react";
import { Suspense, useEffect, useRef, useState } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import { cx } from "@/lib/utils";
import { Check, Menu, X } from "@/components/icons";
import { Link, Button, Badge, Logo, EmptyState, CaseStudyCard, ToolkitFeature, ResourceCard, CTASection, PageHero } from "@/components/ui";
import { siteConfig, cta, navLinks, caseStudies, resourceCats, resources, articleCats, articles, aiTasks, nextSteps, businessStages, challengeOptions, consultMethods } from "@/content/site";

/* Reads one ?name=value from the address bar, inside its own Suspense boundary so pages stay static. */
function QueryReader({ name, onValue }) {
  const value = useSearchParams().get(name);
  useEffect(() => { onValue(value); }, [value]);
  return null;
}
export function QueryParam(props) {
  return <Suspense fallback={null}><QueryReader {...props} /></Suspense>;
}

export function FilterBar({ label, options, value, onChange }) {
  return (
    <div className="filters" role="group" aria-label={label}>
      {options.map(([id, text]) => <button key={id} type="button" className="filter" aria-pressed={value === id} onClick={() => onChange(id)}>{text}</button>)}
    </div>
  );
}

export function Navbar() {
  const path = usePathname();
  const [solid, setSolid] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [ddOpen, setDdOpen] = useState(false);
  const menuRef = useRef(null);
  const isActive = (href) => (href === "/" ? path === "/" : path === href || path.indexOf(href + "/") === 0);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 10);
    const onResize = () => { if (window.innerWidth >= 1240) setMenuOpen(false); };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => { window.removeEventListener("scroll", onScroll); window.removeEventListener("resize", onResize); };
  }, []);
  useEffect(() => { setMenuOpen(false); setDdOpen(false); }, [path]);
  useEffect(() => {
    ["mw-main", "mw-footer"].forEach((id) => { const el = document.getElementById(id); if (el) el.toggleAttribute("inert", menuOpen); });
    if (!menuOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const onKey = (e) => { if (e.key === "Escape") setMenuOpen(false); };
    window.addEventListener("keydown", onKey);
    if (menuRef.current) menuRef.current.focus();
    return () => { document.body.style.overflow = prev; window.removeEventListener("keydown", onKey); };
  }, [menuOpen]);

  return (
    <>
      <header className={cx("nav tone-dark", (solid || menuOpen) && "is-solid")}>
        <nav className="wrap nav-inner" aria-label="Primary">
          <Link href="/" aria-label="MwegaTech, home"><Logo /></Link>
          <ul className="nav-links">
            {navLinks.filter(([, href]) => href !== "/").map(([label, href, kids]) => kids ? (
              <li key={label} className={cx("nav-dd", ddOpen && "is-open")} onMouseEnter={() => setDdOpen(true)} onMouseLeave={() => setDdOpen(false)} onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget)) setDdOpen(false); }}>
                <button type="button" className="nav-link nav-dd-btn" aria-expanded={ddOpen} aria-haspopup="true" aria-current={kids.some(([, h]) => isActive(h.split("#")[0])) ? "page" : undefined} onClick={() => setDdOpen((o) => !o)} onKeyDown={(e) => { if (e.key === "Escape") setDdOpen(false); }}>
                  {label}<span className="nav-caret" aria-hidden="true" />
                </button>
                <ul className="nav-dd-menu">
                  {kids.map(([kl, kh]) => <li key={kl}><Link href={kh} className="nav-dd-link" onClick={() => setDdOpen(false)}>{kl}</Link></li>)}
                </ul>
              </li>
            ) : (
              <li key={label}><Link href={href} className="nav-link" aria-current={isActive(href) ? "page" : undefined}>{label}</Link></li>
            ))}
          </ul>
          <div className="nav-right">
            <Button href={cta.consult[1]} className="btn-sm nav-cta">Book a Consultation</Button>
            <button type="button" className="nav-burger" aria-label={menuOpen ? "Close menu" : "Open menu"} aria-expanded={menuOpen} onClick={() => setMenuOpen((o) => !o)}>
              {menuOpen ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </header>
      {menuOpen && (
        <div ref={menuRef} tabIndex={-1} className="mmenu tone-dark" role="dialog" aria-modal="true" aria-label="Menu">
          <ul>
            {navLinks.map(([label, href, kids]) => kids ? (
              <li key={label} className="mmenu-group">
                <p className="mmenu-link mmenu-parent">{label}</p>
                <ul>{kids.map(([kl, kh]) => <li key={kl}><Link href={kh} className="mmenu-sub" onClick={closeMenu}>{kl}</Link></li>)}</ul>
              </li>
            ) : (
              <li key={label}><Link href={href} className="mmenu-link" onClick={closeMenu} aria-current={isActive(href) ? "page" : undefined}>{label}</Link></li>
            ))}
          </ul>
          <Button href={cta.consult[1]} className="btn-block mt" onClick={closeMenu}>{cta.consult[0]}</Button>
          <p className="mmenu-tag">{siteConfig.tagline}</p>
        </div>
      )}
    </>
  );
}

/* Kept from the previous site, now framed as an automation starting point. */
export function AIDiagnostic() {
  const [picked, setPicked] = useState([]);
  const toggle = (i) => setPicked((p) => (p.includes(i) ? p.filter((x) => x !== i) : [...p, i]));
  return (
    <div className="diag">
      <fieldset className="diag-opts">
        <legend className="sr-only">Work that takes up your team's time</legend>
        {aiTasks.map(([label], i) => (
          <label key={label} className={cx("diag-opt", picked.includes(i) && "is-on")}>
            <input type="checkbox" className="sr-only" checked={picked.includes(i)} onChange={() => toggle(i)} />
            <span className="diag-box" aria-hidden="true"><Check size={15} strokeWidth={3} /></span><span>{label}</span>
          </label>
        ))}
      </fieldset>
      <div className="diag-out" aria-live="polite">
        <h3 className="h3">Where we would look first</h3>
        {picked.length === 0 ? <p className="body" style={{ marginTop: 10 }}>Tick one or more on the left. Each one maps to a practical place to start.</p> : (
          <ul style={{ marginTop: 14 }}>{picked.map((i) => <li key={i}><b>{aiTasks[i][1]}</b>{aiTasks[i][2]}</li>)}</ul>
        )}
        <p className="small muted" style={{ margin: "16px 0 20px" }}>A starting point, not an assessment. A proper review looks at your processes, tools, data and team.</p>
        <Button href="/contact?challenge=Automation%20and%20AI">{cta.discuss[0]}</Button>
      </div>
    </div>
  );
}

export function CaseImage({ src, alt, caption }) {
  const [failed, setFailed] = useState(false);
  return (
    <figure className="shot">
      {failed ? <div className="shot-empty">Image unavailable</div> : <img className="shot-img" src={src} alt={alt} loading="lazy" onError={() => setFailed(true)} />}
      {caption && <figcaption className="small muted">{caption}</figcaption>}
    </figure>
  );
}

export function ArticleCard({ article: a, featured }) {
  const [failed, setFailed] = useState(false);
  const photo = a.image && !failed;
  return (
    <article className={cx("article", featured && "article-featured")}>
      <div className={cx("article-cover", photo && "has-img")}>
        {photo ? <img className="article-img" src={a.image} alt={a.alt} loading={featured ? "eager" : "lazy"} onError={() => setFailed(true)} /> : <LogoCover category={a.category} />}
      </div>
      <div className="article-body">
        <Badge>{a.category}</Badge>
        <h3 className="card-title">{a.title}</h3>
        <p className="body">{a.summary}</p>
        <Link href={"/insights/" + a.slug} className="tlink stretch">Read the article</Link>
      </div>
    </article>
  );
}
const LogoCover = ({ category }) => <span className="cover-label">{category}</span>;

export function InsightsPage() {
  const [cat, setCat] = useState("All");
  const list = cat === "All" ? articles : articles.filter((a) => a.category === cat);
  return (
    <>
      <PageHero kicker="Insights" title="Practical thinking on how growing businesses run." lead="Short, useful reads on business systems, operational efficiency, data and automation, written for the people who own and run the business." />
      <section className="sec bg-paper tone-light">
        <div className="wrap">
          <FilterBar label="Filter articles by topic" options={[["All", "All"], ...articleCats.map((c) => [c, c])]} value={cat} onChange={setCat} />
          {list.length === 0 ? <EmptyState title={"No " + cat + " articles yet"} text="New articles are on the way. Until then, the resource library has tools you can use today." action={["Explore Resources", "/resources"]} />
            : <div className="grid3">{list.map((a, i) => <ArticleCard key={a.slug} article={a} featured={i === 0 && cat === "All"} />)}</div>}
        </div>
      </section>
      <CTASection primary={cta.discuss} secondary={null} title="Seeing your own business in these articles?" text="Tell us where operations are holding the business back and we will suggest where to start." />
    </>
  );
}

export function ResourcesPage() {
  const [query, setQuery] = useState({});
  const [cat, setCat] = useState("all");
  useEffect(() => { if (resourceCats.some(([id]) => id === query.category)) setCat(query.category); }, [query.category]);
  const list = (cat === "all" ? resources : resources.filter((r) => r.category === cat)).filter((r) => r.id !== "toolkit" || cat !== "all");
  const label = (resourceCats.find(([id]) => id === cat) || ["", "resources"])[1].toLowerCase();
  return (
    <>
      <PageHero kicker="Resources" title="Tools and learning to help your business run better." lead="Guides, templates and toolkits you can put to work this week, plus the practical training behind our consulting." />
      <section className="sec bg-paper tone-light">
        <div className="wrap">
          <FilterBar label="Filter resources by category" options={[["all", "All"], ...resourceCats]} value={cat} onChange={setCat} />
          {cat === "all" && <div style={{ marginBottom: 20 }}><ToolkitFeature /></div>}
          {list.length === 0 ? <EmptyState title={"No " + label + " yet"} text="Tell us what would be useful and we will let you know when it is ready." action={["Contact MwegaTech", "/contact"]} />
            : <div className="grid3">{list.map((r) => <ResourceCard key={r.id} resource={r} />)}</div>}
        </div>
      </section>
      <QueryParam name="category" onValue={(category) => setQuery({ category })} />
    </>
  );
}

export function CaseStudiesPage() {
  const live = caseStudies.filter((c) => c.status === "published");
  const areas = [...new Set(live.map((c) => c.area))];
  const [area, setArea] = useState("all");
  const list = area === "all" ? live : live.filter((c) => c.area === area);
  return (
    <>
      <PageHero kicker="Case studies" title="Real problems. Practical solutions." lead="How the work gets done, told the same way each time: the challenge, our approach, what we built and what changed." />
      <section className="sec bg-paper tone-light">
        <div className="wrap">
          {areas.length > 1 && <FilterBar label="Filter case studies by area" options={[["all", "All"], ...areas.map((a) => [a, a])]} value={area} onChange={setArea} />}
          <div className="cs-grid">{list.map((c) => <CaseStudyCard key={c.slug} study={c} onLight />)}</div>
        </div>
      </section>
      <CTASection primary={cta.discuss} secondary={null} title="Have a challenge like these?" text="Tell us what is slowing the business down. We will tell you honestly whether and how we can help." />
    </>
  );
}

export function StickyCta() {
  const path = usePathname();
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 560);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  if (path === "/contact") return null;
  return <div className={cx("sticky-cta tone-dark", show && "is-on")}><Button href={cta.consult[1]} className="btn-block" tabIndex={show ? 0 : -1}>{cta.consult[0]}</Button></div>;
}

const LEGACY_TOPIC = { "Business Intelligence": "Reporting and business intelligence", "Digital Transformation": "Software and system integration", AI: "Automation and AI" };
const EMAIL = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* Sends through Web3Forms when NEXT_PUBLIC_WEB3FORMS_KEY is set (the existing setup).
   Otherwise it posts to app/api/contact/route.js, which validates every field and emails through Resend. */
export function ContactForm() {
  const [v, setV] = useState({ name: "", organisation: "", email: "", phone: "", stage: "", challenge: "", message: "", method: "", website: "" });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");
  const summary = useRef(null);
  const set = (k) => (e) => { const val = e.target.value; setV((s) => ({ ...s, [k]: val })); };
  const preset = (p) => { if (!p) return; const c = challengeOptions.includes(p) ? p : LEGACY_TOPIC[p]; if (c) setV((s) => (s.challenge ? s : { ...s, challenge: c })); };
  const labels = { name: "Name", organisation: "Business name", email: "Email", challenge: "Primary operational challenge", message: "Description of the problem" };
  const onSubmit = async (e) => {
    e.preventDefault();
    const er = {};
    if (!v.name.trim()) er.name = "Enter your name.";
    if (!v.organisation.trim()) er.organisation = "Enter your business name.";
    if (!v.email.trim()) er.email = "Enter your email address.";
    else if (!EMAIL.test(v.email.trim())) er.email = "Enter an email address in the format name@example.com.";
    if (!v.challenge) er.challenge = "Choose the challenge closest to yours.";
    if (v.message.trim().length < 10) er.message = "Tell us a little more. A sentence or two is enough.";
    setErrors(er);
    if (Object.keys(er).length) { setTimeout(() => summary.current && summary.current.focus(), 0); return; }
    setStatus("sending");
    try {
      if (v.website) { setStatus("success"); return; }
      const key = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;
      let ok = false;
      if (key) {
        const res = await fetch("https://api.web3forms.com/submit", { method: "POST", headers: { "Content-Type": "application/json", Accept: "application/json" }, body: JSON.stringify({ access_key: key, subject: "Website enquiry: " + v.challenge + " (" + v.name + ", " + v.organisation + ")", from_name: "MwegaTech website", name: v.name, business_name: v.organisation, email: v.email, phone: v.phone, business_size_or_stage: v.stage, primary_challenge: v.challenge, preferred_consultation_method: v.method, message: v.message }) });
        const data = await res.json().catch(() => ({}));
        ok = res.ok && data.success;
      } else {
        const res = await fetch("/api/contact", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(v) });
        ok = res.ok;
      }
      setStatus(ok ? "success" : "error");
    } catch (err) { setStatus("error"); }
  };
  const field = (k, label, input, optional) => (
    <div className={cx(errors[k] && "has-error")}>
      <label htmlFor={"f-" + k} className="field-label">{label}{optional && <span> (optional)</span>}</label>
      {input}
      {errors[k] && <p className="field-error" id={"f-" + k + "-error"}>Error: {errors[k]}</p>}
    </div>
  );
  const props = (k) => ({ id: "f-" + k, name: k, className: "input", value: v[k], onChange: set(k), "aria-invalid": errors[k] ? true : undefined, "aria-describedby": errors[k] ? "f-" + k + "-error" : undefined });
  const select = (k, list, first) => <select {...props(k)}><option value="">{first}</option>{list.map((t) => <option key={t} value={t}>{t}</option>)}</select>;
  if (status === "success") {
    return (
      <div className="panel" role="status">
        <h2 className="h3">Thanks, {v.name.trim().split(" ")[0]}. We have your enquiry.</h2>
        <p className="body">{nextSteps[0]}</p>
        <Button type="button" variant="ghost" onClick={() => { setStatus("idle"); setV((s) => ({ ...s, message: "" })); }}>Send another enquiry</Button>
      </div>
    );
  }
  const errKeys = Object.keys(errors);
  return (
    <form className="form" onSubmit={onSubmit} noValidate aria-label="Consultation enquiry">
      <QueryParam name="challenge" onValue={preset} />
      <QueryParam name="topic" onValue={preset} />
      {errKeys.length > 0 && (
        <div className="form-summary" ref={summary} tabIndex={-1} role="alert">
          <p className="strong" style={{ color: "inherit" }}>Check {errKeys.length === 1 ? "this field" : "these " + errKeys.length + " fields"} and send again.</p>
          <ul>{errKeys.map((k) => <li key={k}><a href={"#f-" + k} onClick={(e) => { e.preventDefault(); const el = document.getElementById("f-" + k); if (el) el.focus(); }}>{labels[k]}</a></li>)}</ul>
        </div>
      )}
      {status === "error" && <div className="form-summary" role="alert">Your enquiry was not sent. Please try again in a moment, or email {siteConfig.email}.</div>}
      <div className="form-row">
        {field("name", "Name", <input type="text" autoComplete="name" {...props("name")} />)}
        {field("organisation", "Business name", <input type="text" autoComplete="organization" {...props("organisation")} />)}
      </div>
      <div className="form-row">
        {field("email", "Email", <input type="email" autoComplete="email" {...props("email")} />)}
        {field("phone", "Phone", <input type="tel" autoComplete="tel" {...props("phone")} />, true)}
      </div>
      <div className="form-row">
        {field("stage", "Business size or stage", select("stage", businessStages, "Choose one"), true)}
        {field("method", "Preferred consultation method", select("method", consultMethods, "Choose one"), true)}
      </div>
      {field("challenge", "Primary operational challenge", select("challenge", challengeOptions, "Choose the closest"))}
      {field("message", "Description of the problem", <textarea rows={6} {...props("message")} />)}
      <div className="sr-only" aria-hidden="true">
        <label htmlFor="f-website">Leave this field empty</label>
        <input type="text" id="f-website" name="website" tabIndex={-1} autoComplete="off" value={v.website} onChange={set("website")} />
      </div>
      <div><Button type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending enquiry" : "Send Enquiry"}</Button></div>
    </form>
  );
}
