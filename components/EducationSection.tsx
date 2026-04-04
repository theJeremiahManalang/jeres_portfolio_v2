"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { education } from "@/data/portfolio";
import { ChevronDown } from "lucide-react";

export default function EducationSection() {
  const [openId, setOpenId] = useState<string>("");

  return (
    <section>
      <div className="rounded-2xl" style={{ border: "1px solid var(--border)", background: "var(--surface)" }}>
        <div className="px-6 py-5" style={{ borderBottom: "1px solid var(--border)" }}>
          <h2
            className="font-bold tracking-tight mb-0"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", color: "var(--ink)" }}
          >
            Education
          </h2>
        </div>
        <div className="p-6 flex flex-col gap-3">
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
                <div className="p-4 grid gap-4" style={{ gridTemplateColumns: "64px 1fr" }}>
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
                      <motion.span
                        className="flex-shrink-0 mt-1"
                        style={{ color: "var(--ink-3)" }}
                        animate={{ rotate: isOpen ? 180 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <ChevronDown size={18} />
                      </motion.span>
                    </div>

                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
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
                        </motion.div>
                      )}
                    </AnimatePresence>
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
