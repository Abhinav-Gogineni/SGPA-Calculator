import { GRADES, NON_CREDIT_OPTIONS } from "@/lib/sgpa";

type Props = {
  value: string;
  onChange: (value: string) => void;
  nonCredit?: boolean;
  label: string;
};

export function GradeDropdown({ value, onChange, nonCredit = false, label }: Props) {
  const options = nonCredit ? NON_CREDIT_OPTIONS : GRADES;

  return (
    <select
      aria-label={`Grade for ${label}`}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full min-w-[110px] cursor-pointer appearance-none rounded-xl border border-border/70 bg-secondary/70 px-3 py-2 text-center text-sm font-semibold text-foreground shadow-sm outline-none transition-all duration-200 hover:border-primary/60 hover:bg-secondary focus:border-primary focus:ring-2 focus:ring-ring/40"
    >
      <option value="">—</option>
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  );
}