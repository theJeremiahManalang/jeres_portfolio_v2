"use client";
import { useState } from "react";
import { projects } from "@/data/portfolio";

const LockIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
    <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
  </svg>
);

const LinkIcon = () => (
  <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/>
    <polyline points="15 3 21 3 21 9"/>
    <line x1="10" y1="14" x2="21" y2="3"/>
  </svg>
);

export default function ProjectsSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  
  const visibleProjects = isExpanded ? projects : projects.slice(0, 2);

  const handleProjectClick = (p: typeof projects[0]) => {
    if (p.isPrivate) {
      alert("This project is confidential and locked.");
    } else if (p.link) {
      window.open(p.link, "_blank");
    }
  };

  return (
    <section>
      <div className="rounded-2xl" style={{ border: "1px solid var(--border)", background: "var(--surface)" }}>
        <div className="px-6 py-4 flex items-center justify-between" style={{ borderBottom: "1px solid var(--border)" }}>
          <h2
            className="font-semibold tracking-tight mb-0"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", color: "var(--ink)" }}
          >
            Recent Projects
          </h2>
        </div>
        <div className="p-6 flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {visibleProjects.map((p) => (
              <div
                key={p.id}
                onClick={() => handleProjectClick(p)}
                className="p-4 rounded-xl transition-all duration-150 cursor-pointer flex flex-col"
                style={{
                  border: "1px solid var(--border)",
                  background: "var(--surface-2)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "var(--accent-mid)";
                  el.style.background = "var(--accent-light)";
                  el.style.transform = "translateY(-1px)";
                  el.style.boxShadow = "0 6px 20px rgba(28,58,94,0.08)";
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget as HTMLDivElement;
                  el.style.borderColor = "var(--border)";
                  el.style.background = "var(--surface-2)";
                  el.style.transform = "translateY(0)";
                  el.style.boxShadow = "none";
                }}
              >
                {/* Title row */}
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h3 className="text-[13px] font-semibold tracking-tight leading-snug" style={{ color: "var(--ink)" }}>
                    {p.title}
                  </h3>
                  {p.isPrivate ? (
                    <span className="flex-shrink-0 mt-0.5" style={{ color: "var(--ink-3)", opacity: 0.5 }}>
                      <LockIcon />
                    </span>
                  ) : (
                    <span className="flex-shrink-0 mt-0.5" style={{ color: "var(--accent)" }}>
                      <LinkIcon />
                    </span>
                  )}
                </div>

                {/* Company & period */}
                <p
                  className="text-[10.5px] mb-2 font-medium"
                  style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--accent)" }}
                >
                  {p.company} · {p.period}
                </p>

                {/* Description */}
                <p className="text-[12px] leading-snug mb-3 flex-1" style={{ color: "var(--ink-3)" }}>
                  {p.description}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-1.5 mt-auto">
                  {p.stack.map((s) => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {projects.length > 2 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 w-full py-2.5 rounded-xl text-[12px] font-medium transition-colors cursor-pointer"
              style={{
                background: "var(--surface-2)",
                border: "1px solid var(--border)",
                color: "var(--ink)",
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.borderColor = "var(--accent-mid)";
                el.style.background = "var(--accent-light)";
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget as HTMLButtonElement;
                el.style.borderColor = "var(--border)";
                el.style.background = "var(--surface-2)";
              }}
            >
              {isExpanded ? "Show Less" : "View more"}
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
