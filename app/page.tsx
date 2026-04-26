"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import LeftSidebar from "@/components/LeftSidebar";
import RightSidebar from "@/components/RightSidebar";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import ProjectsSection from "@/components/ProjectsSection";
import EducationSection from "@/components/EducationSection";
import AwardsSection from "@/components/AwardsSection";
import MobileNav from "@/components/MobileNav";

export default function Home() {
  const [isNarrow, setIsNarrow] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setIsNarrow(window.innerWidth < 1600);
    setMounted(true);

    const handleResize = () => setIsNarrow(window.innerWidth < 1600);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  if (!mounted) return null;

  return (
    <div
      style={{
        background: "var(--bg)",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        position: "relative",
      }}
    >
      {/* Decorative Blobs */}
      <div className="fixed top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-blue-500/10 blur-[120px] animate-blob pointer-events-none z-0" />
      <div className="fixed bottom-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-purple-500/10 blur-[120px] animate-blob animate-delay-200 pointer-events-none z-0" />

      {/* ── Mobile Nav — slides down when narrow ── */}
      <div
        style={{
          display: "grid",
          gridTemplateRows: isNarrow ? "1fr" : "0fr",
          opacity: isNarrow ? 1 : 0,
          transition: "grid-template-rows 500ms cubic-bezier(0.4, 0, 0.2, 1), opacity 400ms ease",
        }}
      >
        <div style={{ overflow: "hidden" }}>
          <MobileNav />
        </div>
      </div>

      {/* ── Main content area ── */}
      <div
        className="relative z-10"
        style={{
          flex: 1,
          display: "flex",
          padding: isNarrow ? "0" : "2vw",
          transition: "padding 500ms cubic-bezier(0.4, 0, 0.2, 1)",
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            width: "100%",
            margin: "0 auto",
            display: "flex",
            borderRadius: isNarrow ? "0px" : "16px",
            overflow: "hidden",
            border: "1px solid var(--border)",
            boxShadow: isNarrow ? "none" : "0 2px 32px rgba(0,0,0,0.06)",
            background: "var(--surface)",
            height: isNarrow ? "auto" : "calc(100vh - 4vw)",
            minHeight: isNarrow ? "100vh" : "unset",
            transition: [
              "border-radius 500ms cubic-bezier(0.4, 0, 0.2, 1)",
              "box-shadow 500ms ease",
              "height 500ms cubic-bezier(0.4, 0, 0.2, 1)",
            ].join(", "),
          }}
        >
          {/* Left Sidebar */}
          <div
            style={{
              flexShrink: 0,
              overflowY: "auto",
              overflowX: "hidden",
              width: isNarrow ? "0%" : "20%",
              minWidth: isNarrow ? "0px" : "180px",
              maxWidth: "300px",
              borderRight: isNarrow ? "none" : "1px solid var(--border)",
              background: "var(--surface)",
              height: "100%",
              padding: isNarrow ? "0" : "clamp(16px, 2vw, 28px)",
              opacity: isNarrow ? 0 : 1,
              pointerEvents: isNarrow ? "none" : "auto",
              transition: [
                "width 500ms cubic-bezier(0.4, 0, 0.2, 1)",
                "min-width 500ms cubic-bezier(0.4, 0, 0.2, 1)",
                "padding 500ms cubic-bezier(0.4, 0, 0.2, 1)",
                "opacity 300ms ease",
                "border-right 500ms ease",
              ].join(", "),
            }}
          >
            <LeftSidebar />
          </div>

          {/* Center */}
          <main
            style={{
              flex: 1,
              minWidth: 0,
              overflowY: "auto",
              background: "#fff",
              height: "100%",
            }}
          >
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                paddingTop: "clamp(20px, 3vw, 40px)",
                paddingLeft: "clamp(20px, 3vw, 40px)",
                paddingRight: "clamp(20px, 3vw, 40px)",
                paddingBottom: "0px",
                gap: "clamp(24px, 3vw, 40px)",
              }}
            >
              <AboutSection />
              {/* <div style={{ borderTop: "1px solid var(--border)" }} /> */}
              <ExperienceSection />
              {/* <div style={{ borderTop: "1px solid var(--border)" }} /> */}
              <ProjectsSection />
              {/* <div style={{ borderTop: "1px solid var(--border)" }} /> */}
              <EducationSection />
              <AwardsSection />
              <div style={{ height: "40px" }} />
            </div>
          </main>

          {/* Right Sidebar */}
          <div
            style={{
              flexShrink: 0,
              overflowY: "auto",
              overflowX: "hidden",
              width: isNarrow ? "0%" : "20%",
              minWidth: isNarrow ? "0px" : "180px",
              maxWidth: "300px",
              borderLeft: isNarrow ? "none" : "1px solid var(--border)",
              background: "var(--surface)",
              height: "100%",
              padding: isNarrow ? "0" : "clamp(16px, 2vw, 24px)",
              opacity: isNarrow ? 0 : 1,
              pointerEvents: isNarrow ? "none" : "auto",
              transition: [
                "width 500ms cubic-bezier(0.4, 0, 0.2, 1)",
                "min-width 500ms cubic-bezier(0.4, 0, 0.2, 1)",
                "padding 500ms cubic-bezier(0.4, 0, 0.2, 1)",
                "opacity 300ms ease",
                "border-left 500ms ease",
              ].join(", "),
            }}
          >
            <RightSidebar />
          </div>
        </motion.div>
      </div>
    </div>
  );
}