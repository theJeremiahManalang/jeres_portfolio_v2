"use client";
import { techStack, interests, profile } from "@/data/portfolio";

export default function RightSidebar() {
  return (
    <aside
      className="w-full flex-shrink-0 flex flex-col overflow-y-auto"
      style={{ height: "100%", paddingBottom: "24px" }}
    >
      {/* Tech Stack */}
      <div className="mb-6">
        <p
          className="text-[11px] font-semibold tracking-widest uppercase mb-4"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--ink-3)" }}
        >
          Tech Stack
        </p>
        <div className="flex flex-col gap-4">
          {Object.entries(techStack).map(([category, items]) => (
            <div key={category}>
              <p
                className="text-[9.5px] font-bold tracking-widest uppercase mb-2"
                style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--ink-3)", opacity: 0.7 }}
              >
                {category}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {items.map((item) => (
                  <span key={item} className="tag">{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderTop: "1px solid var(--border)", marginBottom: "20px" }} />

      {/* Beyond Dev */}
      <div className="mb-6">
        <p
          className="text-[11px] font-semibold tracking-widest uppercase mb-3"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--ink-3)" }}
        >
          Beyond Dev
        </p>
        <div className="flex flex-col gap-2.5">
          {interests.map(({ icon, text }) => (
            <div key={text} className="flex gap-2 items-start text-[12px] leading-relaxed" style={{ color: "var(--ink-2)" }}>
              <span className="flex-shrink-0 mt-0.5">{icon}</span>
              <span>{text}</span>
            </div>
          ))}
        </div>
      </div>

      <div style={{ borderTop: "1px solid var(--border)", marginBottom: "20px" }} />

      {/* Open to collab */}
      <div
        className="p-4 rounded-xl"
        style={{ background: "var(--accent-light)", border: "1px solid var(--accent-mid)" }}
      >
        <p className="text-[11px] font-semibold mb-1" style={{ color: "var(--accent)" }}>
          Open to Collaborations
        </p>
        <p className="text-[11px] leading-relaxed" style={{ color: "var(--ink-2)" }}>
          Impactful projects &amp; freelance work — let&rsquo;s build something together.
        </p>
        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-1 text-[11px] font-semibold mt-2 no-underline"
          style={{ color: "var(--accent)" }}
        >
          Contact me →
        </a>
      </div>

      {/* Footer */}
      <div className="mt-auto pt-4">
        <p
          className="text-[10px] text-center"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--border-2)" }}
        >
          © 2026 Renzi Delposo
        </p>
      </div>
    </aside>
  );
}
