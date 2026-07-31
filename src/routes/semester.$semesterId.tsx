import { createFileRoute, notFound, Link } from "@tanstack/react-router";
import { ArrowLeft, Download, Printer, RotateCcw } from "lucide-react";
import { useCallback, useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { CalculationBreakdown } from "@/components/CalculationBreakdown";
import { DisclaimerCard } from "@/components/DisclaimerCard";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { ResultCard } from "@/components/ResultCard";
import { SubjectTable } from "@/components/SubjectTable";
import { getSemester } from "@/data";
import { calculateSgpa, type Selection } from "@/lib/sgpa";

export const Route = createFileRoute("/semester/$semesterId")({
  loader: ({ params }) => {
    const semester = getSemester(params.semesterId);
    if (!semester) throw notFound();
    return { semester };
  },
  head: ({ loaderData }) => {
    if (!loaderData) {
      return {
        meta: [{ title: "Semester not found" }, { name: "robots", content: "noindex" }],
      };
    }
    const title = `${loaderData.semester.semester} SGPA Calculator — JNTUK R23 CSE (AI & ML)`;
    const description = `Calculate your ${loaderData.semester.semester} semester SGPA for JNTUK R23 CSE (AI & ML) with live credits and credit points.`;
    return {
      meta: [
        { title },
        { name: "description", content: description },
        { property: "og:title", content: title },
        { property: "og:description", content: description },
      ],
    };
  },
  component: SemesterPage,
});

function SemesterPage() {
  const { semester } = Route.useLoaderData();
  const storageKey = `sgpa-grades-${semester.id}`;
  const [selection, setSelection] = useState<Selection>({});

  useEffect(() => {
    try {
      const raw = localStorage.getItem(storageKey);
      setSelection(raw ? (JSON.parse(raw) as Selection) : {});
    } catch {
      setSelection({});
    }
  }, [storageKey]);

  const handleChange = useCallback(
    (index: number, value: string) => {
      setSelection((prev) => {
        const next = { ...prev, [index]: value };
        try {
          localStorage.setItem(storageKey, JSON.stringify(next));
        } catch {
          /* storage unavailable */
        }
        return next;
      });
    },
    [storageKey],
  );

  const reset = () => {
    setSelection({});
    try {
      localStorage.removeItem(storageKey);
    } catch {
      /* storage unavailable */
    }
    toast.success("Grades reset");
  };

  const result = useMemo(() => calculateSgpa(semester, selection), [semester, selection]);

  return (
    <div className="min-h-screen">
      <Header />

      <main className="mx-auto max-w-6xl px-4 pb-8 pt-8 sm:px-6 sm:pt-12">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary print:hidden"
        >
          <ArrowLeft className="size-4" /> All semesters
        </Link>

        <div className="mt-4 flex flex-wrap items-end justify-between gap-4">
          <div>
            <h1 className="font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl">
              <span className="text-gradient">{semester.semester}</span> Semester
            </h1>
            <p className="mt-1 text-sm text-muted-foreground">
              JNTUK R23 · CSE (AI &amp; ML) · {semester.totalCredits} total credits
            </p>
          </div>

          <div className="flex flex-wrap gap-2 print:hidden">
            <Action onClick={reset} icon={<RotateCcw className="size-4" />} label="Reset" />
            <Action
              onClick={() => window.print()}
              icon={<Printer className="size-4" />}
              label="Print"
            />
            <Action
              onClick={() => window.print()}
              icon={<Download className="size-4" />}
              label="Download PDF"
              primary
            />
          </div>
        </div>

        <div className="mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]">
          <div className="space-y-6">
            <SubjectTable data={semester} selection={selection} onChange={handleChange} />
            <DisclaimerCard />
          </div>
          <div className="space-y-6 lg:sticky lg:top-24 lg:self-start">
            <ResultCard result={result} />
            <CalculationBreakdown result={result} />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Action({
  onClick,
  icon,
  label,
  primary = false,
}: {
  onClick: () => void;
  icon: React.ReactNode;
  label: string;
  primary?: boolean;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 ${
        primary
          ? "bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)]"
          : "glass-panel text-foreground hover:text-primary"
      }`}
    >
      {icon}
      {label}
    </button>
  );
}