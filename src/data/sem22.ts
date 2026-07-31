import type { SemesterData } from "./types";

export const semester: SemesterData = {
  semester: "II-II",
  totalCredits: 21,
  subjects: [
    { name: "Optimization Techniques", credits: 2, countInSGPA: true },
    { name: "Discrete Mathematics and Graph Theory", credits: 3, countInSGPA: true },
    { name: "Machine Learning", credits: 3, countInSGPA: true },
    { name: "Database Management Systems", credits: 3, countInSGPA: true },
    { name: "Digital Logic and Computer Organization", credits: 3, countInSGPA: true },
    { name: "Design Thinking and Innovation", credits: 2, countInSGPA: true },
    { name: "Machine Learning Lab", credits: 1.5, countInSGPA: true },
    { name: "Database Management Systems Lab", credits: 1.5, countInSGPA: true },
    { name: "Full Stack Development – I", credits: 2, countInSGPA: true },
    { name: "Environmental Science", credits: 0, countInSGPA: false },
    { name: "Life Skills – IV", credits: 0, countInSGPA: false },
  ],
};