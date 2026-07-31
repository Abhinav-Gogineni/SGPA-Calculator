import type { SemesterData } from "./types";

export const semester: SemesterData = {
  semester: "II-I",
  totalCredits: 20,
  subjects: [
    { name: "Probability and Statistics", credits: 3, countInSGPA: true },
    {
      name: "Universal Human Values – Understanding Harmony and Ethical Human Conduct",
      credits: 3,
      countInSGPA: true,
    },
    { name: "Artificial Intelligence", credits: 3, countInSGPA: true },
    { name: "Advanced Data Structures and Algorithm Analysis", credits: 3, countInSGPA: true },
    { name: "Object Oriented Programming through Java", credits: 3, countInSGPA: true },
    { name: "Advanced Data Structures and Algorithm Analysis Lab", credits: 1.5, countInSGPA: true },
    { name: "Object Oriented Programming through Java Lab", credits: 1.5, countInSGPA: true },
    { name: "Python Programming", credits: 2, countInSGPA: true },
    { name: "Life Skills – III", credits: 0, countInSGPA: false },
  ],
};