"use client";
import { useState } from "react";
import { techStack, interests, profile } from "@/data/portfolio";

// Enhanced component with better UI/UX
interface TechStackCategoryProps {
  category: string;
  items: string[];
  isExpanded: boolean;
  onToggle: () => void;
  initialCount?: number;
}

const TechStackCategory: React.FC<TechStackCategoryProps> = ({
  category,
  items,
  isExpanded,
  onToggle,
  initialCount = 5
}) => {
  const hasMore = items.length > initialCount;
  const displayedItems = isExpanded ? items : items.slice(0, initialCount);
  const hiddenCount = items.length - initialCount;

  return (
    <div className="group">
      <div className="flex items-center justify-between mb-2">
        <p
          className="text-[9.5px] font-bold tracking-widest uppercase"
          style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--ink-3)", opacity: 0.7 }}
        >
          {category}
        </p>
        {hasMore && (
          <button
            onClick={onToggle}
            className="text-[9px] font-semibold tracking-wider uppercase px-2 py-0.5 rounded transition-all"
            style={{
              fontFamily: "'JetBrains Mono', monospace",
              opacity: 0.5,
              background: isExpanded ? 'var(--ink-3)' : 'transparent',
              color: isExpanded ? 'var(--bg)' : 'var(--ink-3)',
            }}
            aria-expanded={isExpanded}
            aria-label={`${isExpanded ? 'Collapse' : 'Expand'} ${category}`}
          >
            {isExpanded ? 'Show Less' : `+${hiddenCount}`}
          </button>
        )}
      </div>
      <div
        className="flex flex-wrap gap-1.5 transition-all duration-300 ease-in-out overflow-hidden"
        style={{
          maxHeight: isExpanded ? '1000px' : '200px',
        }}
      >
        {displayedItems.map((item, index) => (
          <span
            key={item}
            className="tag transition-all duration-200"
            style={{
              animation: isExpanded ? `fadeIn 0.2s ease-in ${index * 0.03}s both` : 'none'
            }}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default function RightSidebar() {
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);

  const handleCategoryToggle = (category: string) => {
    setExpandedCategory(expandedCategory === category ? null : category);
  };

  return (
    <>
      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(-4px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>

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
              <TechStackCategory
                key={category}
                category={category}
                items={items}
                isExpanded={expandedCategory === category}
                onToggle={() => handleCategoryToggle(category)}
              />
            ))}
          </div>
        </div>

        <div style={{ borderTop: "1px solid var(--border)", marginBottom: "20px" }} />

        {/* Beyond Dev */}
        {/* <div className="mb-6">
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
        </div> */}

        {/* <div style={{ borderTop: "1px solid var(--border)", marginBottom: "20px" }} /> */}

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
          {/* <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-1 text-[11px] font-semibold mt-2 no-underline"
            style={{ color: "var(--accent)" }}
          >
            Contact us thru Linkd Solutions →
          </a> */}
        </div>

        {/* Footer */}
        <div className="mt-auto pt-4">
          <p
            className="text-[10px] text-center"
            style={{ fontFamily: "'JetBrains Mono', monospace", color: "var(--border-2)" }}
          >
            © 2026 Jeremiah Manalang
          </p>
        </div>
      </aside >
    </>
  );
}