import type { SemesterData } from "@/data/types";

export const GRADES = ["S", "A", "B", "C", "D", "E", "F", "AB"] as const;
export type Grade = (typeof GRADES)[number];

export const GRADE_POINTS: Record<Grade, number> = {
  S: 10,
  A: 9,
  B: 8,
  C: 7,
  D: 6,
  E: 5,
  F: 0,
  AB: 0,
};

/** Non-credit courses are graded Completed / Not Completed. */
export const NON_CREDIT_OPTIONS = ["CP", "NCP"] as const;
export type NonCreditStatus = (typeof NON_CREDIT_OPTIONS)[number];

export type Selection = Record<number, string>;

export type BreakdownRow = {
  index: number;
  name: string;
  credits: number;
  grade: string;
  gradePoint: number | null;
  creditPoints: number | null;
  countInSGPA: boolean;
};

export type SgpaResult = {
  sgpa: number;
  totalCredits: number;
  totalCreditPoints: number;
  /** Credits from subjects with passing grades (not F or AB). */
  securedCredits: number;
  passed: boolean;
  complete: boolean;
  /** Number of credit-bearing subjects that have not yet been assigned a grade. */
  ungradedCount: number;
  rows: BreakdownRow[];
};

export function calculateSgpa(data: SemesterData, selection: Selection): SgpaResult {
  let totalCredits = 0;
  let totalCreditPoints = 0;
  let securedCredits = 0;
  let passed = true;
  let complete = true;
  let ungradedCount = 0;

  const rows: BreakdownRow[] = data.subjects.map((subject, index) => {
    const value = selection[index] ?? "";

    if (!subject.countInSGPA) {
      if (!value) complete = false;
      if (value === "NCP") passed = false;
      return {
        index,
        name: subject.name,
        credits: subject.credits,
        grade: value,
        gradePoint: null,
        creditPoints: null,
        countInSGPA: false,
      };
    }

    const grade = value as Grade;
    const known = grade in GRADE_POINTS;
    if (!known) {
      complete = false;
      ungradedCount += 1;
      return {
        index,
        name: subject.name,
        credits: subject.credits,
        grade: "",
        gradePoint: null,
        creditPoints: null,
        countInSGPA: true,
      };
    }

    const gradePoint = GRADE_POINTS[grade];
    const creditPoints = subject.credits * gradePoint;
    totalCredits += subject.credits;
    totalCreditPoints += creditPoints;
    if (grade === "F" || grade === "AB") passed = false;
    else securedCredits += subject.credits;

    return {
      index,
      name: subject.name,
      credits: subject.credits,
      grade,
      gradePoint,
      creditPoints,
      countInSGPA: true,
    };
  });

  const sgpa = totalCredits > 0 ? Math.round((totalCreditPoints / totalCredits) * 100) / 100 : 0;

  return { sgpa, totalCredits, totalCreditPoints, securedCredits, passed, complete, ungradedCount, rows };
}