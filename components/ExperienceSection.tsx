"use client";
import { useState } from "react";
import { experience } from "@/data/portfolio";

const ChevronDown = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default function ExperienceSection() {
  const [openId, setOpenId] = useState<string>("mims");

  return (
    <section>
      <div className="rounded-2xl" style={{ border: "1px solid var(--border)", background: "var(--surface)" }}>
        <div className="px-6 py-4" style={{ borderBottom: "1px solid var(--border)" }}>
          <h2
            className="font-semibold tracking-tight mb-0"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", color: "var(--ink)" }}
          >
            Experience
          </h2>
        </div>
        <div className="p-6 flex flex-col gap-2">
        {experience.map((exp) => {
          const isOpen = openId === exp.id;
          return (
            <div
              key={exp.id}
              className="rounded-xl overflow-hidden transition-all duration-200"
              style={{
                border: `1px solid ${isOpen ? "var(--accent-mid)" : "var(--border)"}`,
                background: isOpen ? "var(--accent-light)" : "var(--surface-2)",
              }}
            >
              {/* Header */}
              <button
                onClick={() => setOpenId(isOpen ? "" : exp.id)}
                className="w-full text-left p-4 flex items-start gap-4 bg-transparent border-none cursor-pointer"
              >
                {/* Timeline indicator */}
                <div
                  className="flex-shrink-0 text-right"
                  style={{
                    width: "64px",
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "9.5px",
                    color: isOpen ? "var(--accent)" : "var(--ink-3)",
                    lineHeight: "1.5",
                    paddingTop: "2px",
                  }}
                >
                  {exp.period.split(" – ").map((p, i) => (
                    <div key={i}>{p}</div>
                  ))}
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <p
                    className="text-[13px] font-semibold tracking-tight leading-snug mb-1"
                    style={{ color: "var(--ink)" }}
                  >
                    {exp.role}
                  </p>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                    <span
                      className="text-[11.5px] font-medium"
                      style={{ color: isOpen ? "var(--accent)" : "var(--ink-2)" }}
                    >
                      {exp.company}
                    </span>
                    <span
                      className="text-[10.5px]"
                      style={{ color: "var(--ink-3)", fontFamily: "'JetBrains Mono', monospace" }}
                    >
                      {exp.type}
                    </span>
                  </div>
                </div>

                <span
                  className="flex-shrink-0 transition-transform duration-200 mt-0.5"
                  style={{
                    color: "var(--ink-3)",
                    transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                  }}
                >
                  <ChevronDown />
                </span>
              </button>

              {/* Expandable details */}
              {isOpen && (
                <div
                  className="px-4 pb-4"
                  style={{ borderTop: "1px solid var(--accent-mid)" }}
                >
                  <div className="pt-3 pl-[80px]">
                    <ul className="flex flex-col gap-2 mb-4">
                      {exp.bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2.5 text-[12.5px] leading-relaxed" style={{ color: "var(--ink-2)" }}>
                          <span
                            className="flex-shrink-0 mt-[7px] rounded-full"
                            style={{ width: "4px", height: "4px", background: "var(--accent)", display: "block" }}
                          />
                          {b}
                        </li>
                      ))}
                    </ul>
                    <div
                      className="flex flex-wrap gap-1.5 pt-3"
                      style={{ borderTop: "1px solid var(--accent-mid)" }}
                    >
                      {exp.stack.map((s) => (
                        <span key={s} className="tag">{s}</span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
}
