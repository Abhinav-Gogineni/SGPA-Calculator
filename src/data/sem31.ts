import type { SemesterData } from "./types";

export const semester: SemesterData = {
  semester: "III-I",
  totalCredits: 23,
  subjects: [
    { name: "Information Retrieval Systems", credits: 3, countInSGPA: true },
    { name: "Computer Networks", credits: 3, countInSGPA: true },
    { name: "Operating Systems", credits: 3, countInSGPA: true },
    { name: "Automata Theory and Compiler Design", credits: 3, countInSGPA: true },
    { name: "Entrepreneurship Development and Venture Creation", credits: 3, countInSGPA: true },
    { name: "Information Retrieval Lab", credits: 1.5, countInSGPA: true },
    { name: "Computer Networks Lab", credits: 1.5, countInSGPA: true },
    { name: "Full Stack Development – II", credits: 2, countInSGPA: true },
    { name: "Tinkering Lab (User Interface Design using Flutter)", credits: 1, countInSGPA: true },
    { name: "Evaluation of Community Service Internship", credits: 2, countInSGPA: true },
    { name: "Life Skills – V", credits: 0, countInSGPA: false },
  ],
};