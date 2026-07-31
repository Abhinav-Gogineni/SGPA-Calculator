import { AlertTriangle } from "lucide-react";

export function DisclaimerCard() {
  return (
    <div className="glass-panel rounded-3xl border-warning/40 p-6">
      <h3 className="flex items-center gap-2 font-display text-base font-semibold text-foreground">
        <AlertTriangle className="size-4 text-warning" />
        Disclaimer
      </h3>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        This SGPA calculator is provided only for estimation purposes based on the JNTUK R23 grading
        system for the CSE (AI &amp; ML) branch. The calculated SGPA is unofficial and may differ
        from the final SGPA published by the university. Always refer to your official results for
        academic records.
      </p>
    </div>
  );
}