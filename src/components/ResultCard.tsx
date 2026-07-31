import { Award, CheckCircle2, ClipboardList, Layers, XCircle } from "lucide-react";
import type { SgpaResult } from "@/lib/sgpa";

export function ResultCard({ result }: { result: SgpaResult }) {
  if (!result.complete || result.ungradedCount > 0) {
    return (
      <div className="glass-panel relative overflow-hidden rounded-3xl p-6 sm:p-8">
        <span className="pointer-events-none absolute -left-16 -top-16 size-48 rounded-full bg-[image:var(--gradient-brand)] opacity-10 blur-3xl" />
        <div className="relative flex flex-col items-center gap-4 py-2 text-center">
          <span className="flex size-12 items-center justify-center rounded-full border border-border/60 bg-secondary/60">
            <ClipboardList className="size-6 text-muted-foreground" />
          </span>
          <div>
            <p className="font-display text-base font-semibold text-foreground">
              Please select grades for all subjects to calculate SGPA.
            </p>
            {result.ungradedCount > 0 && (
              <p className="mt-1.5 text-sm text-muted-foreground">
                Remaining subjects to grade:{" "}
                <span className="font-semibold text-foreground">{result.ungradedCount}</span>
              </p>
            )}
          </div>
        </div>
      </div>
    );
  }

  const Icon = result.passed ? CheckCircle2 : XCircle;

  return (
    <div className="glass-panel relative overflow-hidden rounded-3xl p-6 sm:p-8">
      <span className="pointer-events-none absolute -left-16 -top-16 size-48 rounded-full bg-[image:var(--gradient-brand)] opacity-20 blur-3xl" />
      <div className="relative flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="text-[11px] uppercase tracking-widest text-muted-foreground">Your SGPA</p>
          <p className="font-display text-6xl font-semibold tracking-tight text-gradient tabular-nums">
            {result.sgpa.toFixed(2)}
          </p>
        </div>
        <span
          className={`inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${
            result.passed
              ? "bg-success/15 text-success"
              : "bg-destructive/15 text-destructive"
          }`}
        >
          <Icon className="size-4" />
          {result.passed ? "PASS" : "FAIL"}
        </span>
      </div>

      <div className="relative mt-6 grid grid-cols-2 gap-3">
        <Stat icon={<Layers className="size-4" />} label="Total Credits" value={result.totalCredits} />
        <Stat
          icon={<Award className="size-4" />}
          label="Secured Credits"
          value={result.securedCredits}
        />
      </div>
    </div>
  );
}

function Stat({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode;
  label: string;
  value: number;
}) {
  return (
    <div className="rounded-2xl border border-border/60 bg-secondary/50 px-4 py-3">
      <p className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-muted-foreground">
        {icon}
        {label}
      </p>
      <p className="mt-1 font-display text-2xl font-semibold tabular-nums text-foreground">
        {value}
      </p>
    </div>
  );
}
