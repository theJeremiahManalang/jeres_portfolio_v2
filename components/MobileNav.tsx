"use client";
import { useState } from "react";
import { profile } from "@/data/portfolio";
import LeftSidebar from "./LeftSidebar";
import RightSidebar from "./RightSidebar";

type Panel = "profile" | "stack" | null;

const MenuIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="3" y1="6" x2="21" y2="6" />
    <line x1="3" y1="12" x2="21" y2="12" />
    <line x1="3" y1="18" x2="21" y2="18" />
  </svg>
);

const CloseIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

export default function MobileNav() {
  const [open, setOpen] = useState<Panel>(null);

  return (
    <>
      {/* Top bar */}
      <div
        className="min-[1600px]:hidden flex items-center justify-between px-4 py-3 flex-shrink-0"
        style={{
          background: "var(--surface)",
          borderBottom: "1px solid var(--border)",
        }}
      >
        <button
          onClick={() => setOpen(open === "profile" ? null : "profile")}
          style={{ color: "var(--ink-2)", background: "transparent", border: "none", cursor: "pointer", padding: "6px" }}
          aria-label="Profile"
        >
          <MenuIcon />
        </button>

        <div className="flex items-center gap-2">
          <div
            className="w-6 h-6 rounded-lg flex items-center justify-center flex-shrink-0"
            style={{ background: "var(--accent)" }}
          >
            <span
              style={{ color: "white", fontWeight: 700, fontSize: "9px", fontFamily: "'JetBrains Mono', monospace" }}
            >
              RD
            </span>
          </div>
          <p
            className="font-bold text-[15px] tracking-tight"
            style={{ fontFamily: "'Playfair Display', serif", color: "var(--ink)" }}
          >
            {profile.name}
          </p>
        </div>

        <button
          onClick={() => setOpen(open === "stack" ? null : "stack")}
          className="text-[10px] font-semibold px-2.5 py-1.5 rounded-lg"
          style={{
            fontFamily: "'JetBrains Mono', monospace",
            color: "var(--accent)",
            background: "var(--accent-light)",
            border: "1px solid var(--accent-mid)",
            cursor: "pointer",
          }}
        >
          Stack
        </button>
      </div>

      {/* Profile slide-down */}
      {open === "profile" && (
        <div
          className="min-[1600px]:hidden flex flex-col relative overflow-y-auto"
          style={{
            background: "var(--surface)",
            borderBottom: "1px solid var(--border)",
            maxHeight: "75vh",
            padding: "32px 20px 20px 20px",
          }}
        >
          <button
            onClick={() => setOpen(null)}
            className="absolute top-4 right-4 z-10"
            style={{ background: "transparent", border: "none", cursor: "pointer", color: "var(--ink-3)" }}
          >
            <CloseIcon />
          </button>
          <LeftSidebar />
        </div>
      )}

      {/* Stack slide-down */}
      {open === "stack" && (
        <div
          className="min-[1600px]:hidden flex flex-col relative overflow-y-auto"
          style={{
            background: "var(--surface)",
            borderBottom: "1px solid var(--border)",
            maxHeight: "75vh",
            padding: "32px 20px 20px 20px",
          }}
        >
          <button
            onClick={() => setOpen(null)}
            className="absolute top-4 right-4 z-10"
            style={{ background: "transparent", border: "none", cursor: "pointer", color: "var(--ink-3)" }}
          >
            <CloseIcon />
          </button>
          <RightSidebar />
        </div>
      )}
    </>
  );
}
