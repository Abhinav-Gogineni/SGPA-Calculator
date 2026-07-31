import type { SemesterData } from "@/data/types";
import type { Selection } from "@/lib/sgpa";
import { GradeDropdown } from "./GradeDropdown";

type Props = {
  data: SemesterData;
  selection: Selection;
  onChange: (index: number, value: string) => void;
};

export function SubjectTable({ data, selection, onChange }: Props) {
  return (
    <div className="glass-panel overflow-hidden rounded-3xl">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr className="border-b border-border/60 bg-secondary/50 text-[11px] uppercase tracking-widest text-muted-foreground">
            <th className="px-4 py-3 font-medium sm:px-6">Subject</th>
            <th className="w-20 px-2 py-3 text-center font-medium">Credits</th>
            <th className="w-32 px-4 py-3 text-center font-medium sm:px-6">Grade</th>
          </tr>
        </thead>
        <tbody>
          {data.subjects.map((subject, index) => (
            <tr
              key={subject.name}
              className="border-b border-border/40 transition-colors duration-200 last:border-0 hover:bg-secondary/40"
            >
              <td className="px-4 py-3 text-sm text-foreground sm:px-6">
                {subject.name}
                {!subject.countInSGPA && (
                  <span className="ml-2 rounded-full border border-border/60 px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground">
                    Non-credit
                  </span>
                )}
              </td>
              <td className="px-2 py-3 text-center text-sm tabular-nums text-muted-foreground">
                {subject.countInSGPA ? subject.credits : "—"}
              </td>
              <td className="px-4 py-3 sm:px-6">
                <GradeDropdown
                  label={subject.name}
                  value={selection[index] ?? ""}
                  nonCredit={!subject.countInSGPA}
                  onChange={(value) => onChange(index, value)}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}