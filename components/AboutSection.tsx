"use client";
import { profile } from "@/data/portfolio";

export default function AboutSection() {
  return (
    <section>
      <div className="mb-5">
        <p
          className="text-[10.5px] font-semibold tracking-widest uppercase mb-2"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--accent)" }}
        >
          Full-Stack Developer · Web Design · Software Solutions
        </p>
        <h1
          className="font-bold tracking-tight leading-tight mb-3"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(22px, 3vw, 32px)",
            color: "var(--ink)",
          }}
        >
          The Only Developer{" "}
          <em className="not-italic" style={{ color: "var(--accent)" }}>
            You&rsquo;ll Need
          </em>{" "}
          to Hire.
        </h1>
        <p className="text-[13.5px] leading-relaxed max-w-[560px]" style={{ color: "var(--ink-2)" }}>
          Whether it&apos;s a business website, a complex web system, or a product from
          scratch — I build it clean, ship it fast, and make it last.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-3 mb-6">
        {profile.stats.map((s) => (
          <div
            key={s.label}
            className="p-4 rounded-xl flex flex-col gap-0.5 transition-all duration-200"
            style={{ border: "1px solid var(--border)", background: "var(--surface)" }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = "var(--accent-mid)";
              el.style.background = "var(--accent-light)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = "var(--border)";
              el.style.background = "var(--surface)";
            }}
          >
            <span
              className="font-extrabold leading-none"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "28px", color: "var(--accent)" }}
            >
              {s.value}
            </span>
            <span className="text-[12px] font-semibold" style={{ color: "var(--ink)" }}>{s.label}</span>
            <span className="text-[11px] leading-snug" style={{ color: "var(--ink-3)" }}>{s.sub}</span>
          </div>
        ))}
      </div>

      {/* About card */}
      <div className="rounded-2xl" style={{ border: "1px solid var(--border)", background: "var(--surface)" }}>
        <div className="px-6 py-4" style={{ borderBottom: "1px solid var(--border)" }}>
          <h2
            className="font-semibold tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", color: "var(--ink)" }}
          >
            About Me
          </h2>
        </div>
        <div className="p-6 flex flex-col gap-4">
          <p className="text-[13.5px] leading-[1.85]" style={{ color: "var(--ink-2)" }}>
            With 4+ years of full-stack experience, I&apos;ve built enterprise systems serving{" "}
            <strong style={{ color: "var(--ink)", fontWeight: 600 }}>1,000+ users</strong>, automated
            workflows across{" "}
            <strong style={{ color: "var(--ink)", fontWeight: 600 }}>113 branches</strong>, and
            delivered web products from design to deployment. Every project gets the same precision and care.
          </p>
          <p className="text-[13.5px] leading-[1.85]" style={{ color: "var(--ink-2)" }}>
            Currently at{" "}
            <strong style={{ color: "var(--accent)", fontWeight: 600 }}>MIMS Pte Ltd.</strong> as a Web
            Developer, contributing to regional digital delivery across{" "}
            <strong style={{ color: "var(--accent)", fontWeight: 600 }}>Southeast Asia</strong> — while
            actively exploring AI-driven workflows and expanding front-end skills.
          </p>
          <p className="text-[13.5px] leading-[1.85]" style={{ color: "var(--ink-2)" }}>
            Passionate about minimalism, growth, and building meaningful digital experiences at the
            intersection of design and engineering.
          </p>
        </div>
      </div>
    </section>
  );
}
