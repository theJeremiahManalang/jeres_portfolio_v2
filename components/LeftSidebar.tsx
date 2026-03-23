"use client";
import { profile } from "@/data/portfolio";

const IconPhone = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.4 2 2 0 0 1 3.6 1.22h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.79a16 16 0 0 0 6.29 6.29l.96-.96a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);
const IconMail = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const IconBriefcase = () => (
  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
  </svg>
);
const IconDownload = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);
const IconCalendar = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const IconPin = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const IconLinkedIn = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const IconGitHub = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
  </svg>
);
const IconInstagram = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

export default function LeftSidebar() {
  return (
    <aside
      className="w-full flex-shrink-0 flex flex-col gap-0 overflow-y-auto"
      style={{ height: "100%", paddingBottom: "24px" }}
    >
      {/* Avatar */}
      <div className="relative mb-5">
        <div
          className="w-full aspect-square rounded-2xl overflow-hidden"
          style={{
            border: "2px solid var(--border)",
            outline: "4px solid var(--surface-2)",
            outlineOffset: "-4px",
          }}
        >
          <div
            className="w-full h-full flex items-center justify-center"
            style={{ background: "linear-gradient(135deg, var(--accent-light), var(--surface-2))" }}
          >
            {/* Avatar placeholder — replace with <img src="/renzi.png" ... /> */}
            <span
              style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "64px",
                fontWeight: 600,
                color: "var(--accent)",
                opacity: 0.4,
              }}
            >
              JM
            </span>
          </div>
        </div>
        {/* Status badge */}
        <div
          className="absolute bottom-3 left-3 right-3 flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl text-[10px]"
          style={{
            background: "var(--surface)",
            border: "1px solid var(--border)",
            fontFamily: "'JetBrains Mono', monospace",
            color: "var(--ink-3)",
          }}
        >
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 flex-shrink-0 animate-pulse" />
          Available
        </div>
      </div>

      {/* Name & title */}
      <h1
        className="font-bold tracking-tight leading-tight mb-0.5"
        style={{ fontFamily: "'Playfair Display', serif", fontSize: "20px", color: "var(--ink)" }}
      >
        {profile.name}
      </h1>
      <p className="text-[12px] font-medium mb-1" style={{ color: "var(--accent)" }}>
        {profile.title}
      </p>
      <div className="flex items-center gap-1 text-[11px] mb-5" style={{ color: "var(--ink-3)" }}>
        <IconPin />
        {profile.location}
      </div>

      {/* CTA buttons */}
      <div className="flex flex-col gap-2 mb-5">
        <a href={`mailto:${profile.email}`} className="btn-primary">
          <IconMail />
          Get in Touch
        </a>
        <a href={profile.calendly} target="_blank" rel="noreferrer" className="btn-secondary">
          <IconCalendar />
          Schedule a Meeting
        </a>
        <a href={profile.resumeUrl} target="_blank" rel="noreferrer" className="btn-secondary">
          <IconDownload />
          Download Résumé
        </a>
      </div>

      <div className="divider" />

      {/* Contact details */}
      <div className="flex flex-col gap-2.5 mb-5">
        <p className="section-label">Contact</p>
        <a href={`tel:${profile.phone}`} className="group flex items-center gap-2 text-[12px] no-underline transition-colors" style={{ color: "var(--ink-2)" }}>
          <span style={{ color: "var(--ink-3)" }}><IconPhone /></span>
          <span className="group-hover:underline">{profile.phone}</span>
        </a>
        <a href={`mailto:${profile.email}`} className="group flex items-center gap-2 text-[12px] no-underline transition-colors" style={{ color: "var(--ink-2)" }}>
          <span style={{ color: "var(--ink-3)" }}><IconMail /></span>
          <span className="group-hover:underline truncate">{profile.email}</span>
        </a>
        <div className="flex items-center gap-2 text-[12px]" style={{ color: "var(--ink-2)" }}>
          <span style={{ color: "var(--ink-3)" }}><IconBriefcase /></span>
          <span>{profile.company}</span>
        </div>
      </div>

      <div className="divider" />

      {/* Social links */}
      <div className="mt-auto">
        <p className="section-label">Connect</p>
        <div className="flex gap-2">
          {[
            { href: profile.linkedin, icon: <IconLinkedIn />, label: "LinkedIn" },
            { href: profile.github, icon: <IconGitHub />, label: "GitHub" },
            { href: profile.instagram, icon: <IconInstagram />, label: "Instagram" },
          ].map(({ href, icon, label }) => (
            <a
              key={label}
              href={href}
              title={label}
              target="_blank"
              rel="noreferrer"
              className="w-9 h-9 rounded-xl flex items-center justify-center no-underline transition-all duration-150"
              style={{
                border: "1px solid var(--border)",
                background: "var(--surface-2)",
                color: "var(--ink-3)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "var(--accent-mid)";
                el.style.color = "var(--accent)";
                el.style.background = "var(--accent-light)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget;
                el.style.borderColor = "var(--border)";
                el.style.color = "var(--ink-3)";
                el.style.background = "var(--surface-2)";
              }}
            >
              {icon}
            </a>
          ))}
        </div>
      </div>
    </aside>
  );
}
