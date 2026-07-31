import type { SemesterData } from "./types";

/**
 * Auto-discovered semester registry.
 *
 * Adding a new semester = drop a `semXY.ts` file in this folder that exports
 * `semester: SemesterData`. Nothing else in the app needs to change.
 */
const modules = import.meta.glob<{ semester: SemesterData }>("./sem*.ts", {
  eager: true,
});

export type SemesterEntry = SemesterData & {
  /** URL slug derived from the file name, e.g. "sem31". */
  id: string;
};

export const semesters: SemesterEntry[] = Object.entries(modules)
  .map(([path, mod]) => ({
    id: path.replace("./", "").replace(/\.ts$/, ""),
    ...mod.semester,
  }))
  .sort((a, b) => a.id.localeCompare(b.id));

export const getSemester = (id: string): SemesterEntry | undefined =>
  semesters.find((s) => s.id === id);