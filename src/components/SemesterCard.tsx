import { Link } from "@tanstack/react-router";
import { ArrowRight, BookOpen } from "lucide-react";
import type { SemesterEntry } from "@/data";

export function SemesterCard({ semester }: { semester: SemesterEntry }) {
  const graded = semester.subjects.filter((s) => s.countInSGPA).length;

  return (
    <Link
      to="/semester/$semesterId"
      params={{ semesterId: semester.id }}
      className="glass-panel group relative overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]"
    >
      <span className="pointer-events-none absolute -right-12 -top-12 size-32 rounded-full bg-[image:var(--gradient-brand)] opacity-15 blur-2xl transition-opacity duration-300 group-hover:opacity-35" />
      <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/60 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-muted-foreground">
        <BookOpen className="size-3" /> Semester
      </span>
      <h3 className="mt-4 font-display text-3xl font-semibold tracking-tight text-gradient">
        {semester.semester}
      </h3>
      <p className="mt-2 text-sm text-muted-foreground">
        {graded} graded subjects · {semester.totalCredits} credits
      </p>
      <span className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary">
        Calculate SGPA
        <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
      </span>
    </Link>
  );
}