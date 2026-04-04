"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/portfolio";
import { Lock, ExternalLink, X } from "lucide-react";

export default function ProjectsSection() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const visibleProjects = isExpanded ? projects : projects.slice(0, 2);
  const selectedProject = projects.find(p => p.id === selectedId);

  return (
    <section>
      <div className="rounded-2xl relative" style={{ border: "1px solid var(--border)", background: "var(--surface)" }}>
        <div className="px-6 py-5 flex items-center justify-between" style={{ borderBottom: "1px solid var(--border)" }}>
          <h2
            className="font-bold tracking-tight mb-0"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", color: "var(--ink)" }}
          >
            Recent Projects
          </h2>
        </div>
        <div className="p-6 flex flex-col gap-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
            {visibleProjects.map((p) => (
              <motion.div
                layoutId={`project-${p.id}`}
                key={p.id}
                onClick={() => setSelectedId(p.id)}
                className="p-5 rounded-xl transition-all duration-200 cursor-pointer flex flex-col group"
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
                <div className="flex items-start justify-between gap-2 mb-1.5">
                  <h3 className="text-[14px] font-bold tracking-tight leading-snug" style={{ color: "var(--ink)" }}>
                    {p.title}
                  </h3>
                  {p.isPrivate ? (
                    <span className="flex-shrink-0 mt-0.5 opacity-50" style={{ color: "var(--ink-3)" }}>
                      <Lock size={15} />
                    </span>
                  ) : (
                    <span className="flex-shrink-0 mt-0.5" style={{ color: "var(--accent)" }}>
                      <ExternalLink size={15} />
                    </span>
                  )}
                </div>

                {/* Company & period */}
                <p
                  className="text-[11px] mb-3 font-semibold"
                  style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--accent)" }}
                >
                  {p.company} · {p.period}
                </p>

                {/* Description */}
                <p className="text-[13px] leading-relaxed mb-4 flex-1 line-clamp-2" style={{ color: "var(--ink-2)" }}>
                  {p.description}
                </p>

                {/* Stack */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {p.stack.slice(0, 3).map((s) => (
                    <span key={s} className="tag">{s}</span>
                  ))}
                  {p.stack.length > 3 && (
                    <span className="tag opacity-70">+{p.stack.length - 3}</span>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {projects.length > 2 && (
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="mt-2 w-full py-3 rounded-xl text-[13px] font-semibold transition-all cursor-pointer"
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
              {isExpanded ? "Show Less" : "View All Projects"}
            </button>
          )}
        </div>
      </div>

      <AnimatePresence>
        {selectedId && selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            style={{ background: "rgba(255, 255, 255, 0.6)", backdropFilter: "blur(8px)", WebkitBackdropFilter: "blur(8px)" }}
            onClick={() => setSelectedId(null)}
          >
            <motion.div
              layoutId={`project-${selectedId}`}
              className="w-full max-w-2xl rounded-2xl flex flex-col border p-6 sm:p-8 relative overflow-y-auto max-h-[90vh]"
              style={{
                background: "var(--surface)",
                borderColor: "var(--border)",
                boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.2)"
              }}
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedId(null)}
                className="absolute top-5 right-5 p-2 rounded-full hover:bg-white/10 transition-colors z-10"
                style={{ color: "var(--ink-2)" }}
              >
                <X size={20} />
              </button>

              <div className="flex flex-col gap-1.5 mb-6 pr-8">
                <div className="flex items-center gap-3">
                  <h3 className="text-2xl font-bold tracking-tight" style={{ color: "var(--ink)" }}>
                    {selectedProject.title}
                  </h3>
                  {selectedProject.isPrivate ?
                    <Lock size={18} className="opacity-50" style={{ color: "var(--ink-3)" }} /> :
                    <ExternalLink size={18} style={{ color: "var(--accent)" }} />
                  }
                </div>
                <p className="text-[13px] font-mono font-medium" style={{ color: "var(--accent)" }}>
                  {selectedProject.company} · {selectedProject.period}
                </p>
              </div>

              <div className="flex-1">
                <h4 className="text-sm font-semibold mb-2 uppercase tracking-wider" style={{ color: "var(--ink-3)" }}>Overview</h4>
                <p className="text-[15px] leading-relaxed mb-8" style={{ color: "var(--ink-2)" }}>
                  {selectedProject.description}
                </p>

                <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider" style={{ color: "var(--ink-3)" }}>Technologies Used</h4>
                <div className="flex flex-wrap gap-2.5 mb-8">
                  {selectedProject.stack.map((s) => (
                    <span key={s} className="tag text-[12px] px-3 py-1.5">{s}</span>
                  ))}
                </div>
              </div>

              <div className="mt-auto pt-4 border-t flex items-center justify-between" style={{ borderColor: "var(--border)" }}>
                {selectedProject.isPrivate ? (
                  <p className="text-sm italic" style={{ color: "var(--ink-3)" }}>
                    * This project is confidential and source code is locked.
                  </p>
                ) : selectedProject.link ? (
                  <a
                    href={selectedProject.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary"
                  >
                    View Live Project <ExternalLink size={16} />
                  </a>
                ) : null}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
