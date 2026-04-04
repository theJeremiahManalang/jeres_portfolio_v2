"use client";
import { profile } from "@/data/portfolio";

export default function AboutSection() {
  return (
    <section>
      <div className="mb-8">
        <p
          className="text-[11px] font-bold tracking-[0.2em] uppercase mb-4 opacity-80"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--accent)" }}
        >
          Full-Stack Developer · Computer Engineer · System Developer
        </p>
        <h1
          className="font-bold tracking-tight leading-[1.1] mb-5"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(26px, 4vw, 42px)",
            color: "var(--ink)",
          }}
        >
          The Only Engineer{" "}
          <em className="not-italic" style={{ color: "var(--accent)" }}>
            You&rsquo;ll Need
          </em>{" "}
          to Develop.
        </h1>
        <p className="text-[15px] leading-relaxed max-w-[600px]" style={{ color: "var(--ink-2)" }}>
          I&apos;m not just a Developer. I&apos;m a Computer Engineer
          who builds the System behind the Code.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-3 gap-4 mb-8">
        {profile.stats.map((s) => (
          <div
            key={s.label}
            className="p-4 rounded-xl flex flex-col gap-0.5 transition-all duration-200"
            style={{
              border: "1px solid var(--border)",
              background: "var(--surface)"
            }}
            onMouseEnter={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = "var(--accent-mid)";
              el.style.background = "var(--accent-light)";
              el.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              const el = e.currentTarget as HTMLDivElement;
              el.style.borderColor = "var(--border)";
              el.style.background = "var(--surface)";
              el.style.transform = "translateY(0)";
            }}
          >
            <span
              className="font-extrabold leading-none transition-colors duration-200"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "30px", color: "var(--accent)" }}
            >
              {s.value}
            </span>
            <span className="text-[13px] font-bold mt-1" style={{ color: "var(--ink)" }}>{s.label}</span>
            <span className="text-[12px] leading-snug" style={{ color: "var(--ink-3)" }}>{s.sub}</span>
          </div>
        ))}
      </div>

      {/* About card */}
      <div className="rounded-2xl relative overflow-hidden" style={{ border: "1px solid var(--border)", background: "var(--surface)" }}>
        <div className="px-6 py-4" style={{ borderBottom: "1px solid var(--border)" }}>
          <h2
            className="font-semibold tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif", fontSize: "15px", color: "var(--ink)" }}
          >
            About Me
          </h2>
        </div>
        <div className="p-7 flex flex-col gap-5">
          <p className="text-[14px] leading-loose" style={{ color: "var(--ink-2)" }}>
            <strong style={{ color: "var(--accent)", fontWeight: 700 }}>
              Computer Engineer and Software Developer
            </strong>{" "}
            with{" "}
            <strong style={{ color: "var(--accent)", fontWeight: 700 }}>
              3+ years
            </strong>{" "}
            of hands-on experience building scalable web systems, applications, and
            system-driven solutions across academic, organizational, and enterprise
            environments.
          </p>

          <p className="text-[14px] leading-loose" style={{ color: "var(--accent-2)" }}>
            Currently working as a{" "}
            <strong style={{ color: "var(--accent)", fontWeight: 700 }}>
              Junior Systems Developer
            </strong>{" "}
            at{" "}
            <strong style={{ color: "var(--accent)", fontWeight: 700 }}>
              Wilcon Depot, Inc.
            </strong>
            , designing and developing business-critical system solutions focused on
            process automation, operational efficiency, data accuracy, and seamless
            integration with existing enterprise workflows.
          </p>

          <p className="text-[14px] leading-loose" style={{ color: "var(--accent-2)" }}>
            Passionate about continuous growth across the software spectrum, with strong
            interest in expanding into{" "}
            <strong style={{ color: "var(--accent)", fontWeight: 700 }}>
              embedded systems
            </strong>
            ,{" "}
            <strong style={{ color: "var(--accent)", fontWeight: 700 }}>
              automations
            </strong>
            , and{" "}
            <strong style={{ color: "var(--accent)", fontWeight: 700 }}>
              Internet of Things (IoT)
            </strong>{" "}
            solutions that bridge software with real-world hardware applications.
          </p>
        </div>
      </div>
    </section>
  );
}
