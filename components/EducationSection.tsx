"use client";
import { useState } from "react";
import { education } from "@/data/portfolio";

const ChevronDown = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

export default function EducationSection() {
  const [openId, setOpenId] = useState<string>("");

  return (
    <section>
      <div className="rounded-2xl" style={{ border: "1px solid var(--border)", background: "var(--surface)" }}>
        <div className="px-6 py-4" style={{ borderBottom: "1px solid var(--border)" }}>
          <h2
            className="font-semibold tracking-tight mb-0"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", color: "var(--ink)" }}
          >
            Education
          </h2>
        </div>
        <div className="p-6 flex flex-col gap-2">
        {education.map((edu) => {
          const isOpen = openId === edu.id;
          return (
            <div
              key={edu.id}
              className="rounded-xl overflow-hidden transition-all duration-200 cursor-pointer"
              style={{
                border: `1px solid ${isOpen ? "var(--border-2)" : "var(--border)"}`,
                background: "var(--surface-2)",
              }}
              onClick={() => setOpenId(isOpen ? "" : edu.id)}
            >
              <div className="p-4 grid gap-3" style={{ gridTemplateColumns: "64px 1fr" }}>
                {/* Period */}
                <div
                  style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: "10px",
                    color: "var(--ink-3)",
                    textAlign: "right",
                    paddingTop: "2px",
                    lineHeight: "1.6",
                  }}
                >
                  {edu.period.split(" – ").map((p, i) => (
                    <div key={i}>{p}</div>
                  ))}
                </div>

                {/* Info */}
                <div>
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex-1">
                      <p className="text-[13px] font-semibold tracking-tight leading-snug mb-1" style={{ color: "var(--ink)" }}>
                        {edu.degree}
                      </p>
                      <span
                        className="inline-block px-2 py-0.5 rounded-md text-[10px] font-medium mb-1.5"
                        style={{
                          fontFamily: "'JetBrains Mono', monospace",
                          background: "var(--gold-light)",
                          border: "1px solid #e6d48a",
                          color: "var(--gold)",
                        }}
                      >
                        {edu.honor}
                      </span>
                      <p className="text-[11px]" style={{ color: "var(--ink-3)" }}>
                        {edu.school} · {edu.location}
                      </p>
                    </div>
                    <span
                      className="flex-shrink-0 mt-0.5 transition-transform duration-200"
                      style={{
                        color: "var(--ink-3)",
                        transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                      }}
                    >
                      <ChevronDown />
                    </span>
                  </div>

                  {isOpen && (
                    <div className="mt-3 pt-3" style={{ borderTop: "1px solid var(--border)" }}>
                      <ul className="flex flex-col gap-1.5">
                        {edu.bullets.map((b, i) => (
                          <li key={i} className="flex items-start gap-2 text-[12.5px] leading-relaxed" style={{ color: "var(--ink-2)" }}>
                            <span
                              className="flex-shrink-0 mt-[7px] rounded-full"
                              style={{ width: "4px", height: "4px", background: "var(--ink-3)", display: "block" }}
                            />
                            {b}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </div>
          );
        })}
        </div>
      </div>
    </section>
  );
}
