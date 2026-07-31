import type { SgpaResult } from "@/lib/sgpa";

export function CalculationBreakdown({ result }: { result: SgpaResult }) {
  // Only show breakdown once all credit-bearing subjects have a grade
  if (!result.complete || result.ungradedCount > 0) {
    return null;
  }

  const rows = result.rows.filter((row) => row.countInSGPA && row.grade);

  return (
    <div className="glass-panel rounded-3xl p-6">
      <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
        Calculation Breakdown
      </h3>
      {rows.length === 0 ? (
        <p className="mt-3 text-sm text-muted-foreground">
          Select grades above to see how the SGPA is built up.
        </p>
      ) : (
        <>
          <ul className="mt-4 space-y-2">
            {rows.map((row) => (
              <li
                key={row.index}
                className="flex items-center justify-between gap-4 rounded-xl border border-border/50 bg-secondary/40 px-3 py-2 text-sm"
              >
                <span className="truncate text-foreground">{row.name}</span>
                <span className="shrink-0 tabular-nums text-muted-foreground">
                  {row.credits} × {row.gradePoint} ={" "}
                  <strong className="text-foreground">{row.creditPoints}</strong>
                </span>
              </li>
            ))}
          </ul>
          <p className="mt-4 rounded-xl bg-secondary/60 px-3 py-3 text-center text-sm tabular-nums text-muted-foreground">
            SGPA = {result.totalCreditPoints} ÷ {result.totalCredits} ={" "}
            <strong className="text-foreground">{result.sgpa.toFixed(2)}</strong>
          </p>
        </>
      )}
    </div>
  );
}
