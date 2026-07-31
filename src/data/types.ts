export type Subject = {
  /** Display name of the subject. */
  name: string;
  /** Credits assigned. Use 0 for non-credit (CP/NCP) courses. */
  credits: number;
  /** Whether the subject participates in the SGPA computation. */
  countInSGPA: boolean;
};

export type SemesterData = {
  /** Human readable semester label, e.g. "III-I". */
  semester: string;
  /** Total credits as published by the university. */
  totalCredits: number;
  subjects: Subject[];
};