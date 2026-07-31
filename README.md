# JNTUK SGPA Companion

Build a modern, responsive web application called SGPA Calculator for JNTUK R23 Regulation (CSE - AI & ML).

The application should be scalable so that future semesters can be added easily without modifying the calculator logic.

Tech Stack

React

TypeScript

Tailwind CSS

Vite

Responsive Design

Dark/Light Mode

Local Storage

No backend

Landing Page

Create a clean, modern homepage with:

Title:
SGPA Calculator for JNTUK R23 Regulation

Subtitle:
Computer Science & Engineering (Artificial Intelligence & Machine Learning)

Beautiful gradient hero section

Semester selection cards

Mobile-friendly layout

Available Semesters

Initially include only:

II-I Semester

II-II Semester

III-I Semester

Display these as clickable cards.

The application architecture must allow me to easily add:

III-II Semester

IV-I Semester

IV-II Semester

later by simply creating new semester data files.

Do not include I-I or I-II semesters.

Architecture

Do not hardcode semester logic.

Create a folder:

src/data/


Each semester should have its own data file.

Example:

sem21.ts
sem22.ts
sem31.ts


Each file should export data like:

export const semester = {
  semester: "III-I",
  totalCredits: 23,
  subjects: [
    {
      name: "Information Retrieval Systems",
      credits: 3,
      countInSGPA: true
    }
  ]
};


The calculator page should automatically generate the subject table from this data.

When I later create:

sem32.ts

sem41.ts

sem42.ts

the website should automatically recognize and display them without changing calculator logic.

Subject Table

Each semester page should contain only:

SubjectCreditsGrade

Do not display subject codes.

Credits should already be filled.

Grades should be selected from a dropdown.

Grade System

Use the following grading system:

GradeGrade PointS10A9B8C7D6E5F0AB0

Dropdown values:

S

A

B

C

D

E

F

AB

SGPA Formula

Use:

SGPA = Σ(Credit × Grade Point) / Σ(Credits)

Round the result to 2 decimal places.

Live Calculation

Do not use a "Calculate" button.

Whenever the user changes a grade, automatically update:

SGPA

Total Credits

Total Credit Points

Pass/Fail Status

Result Card

Display:

SGPA

Pass / Fail

Total Credits

Total Credit Points

If any subject has grade:

F

AB

show:

Status: FAIL

but still calculate the SGPA.




Features

Include:

Reset Grades

Copy Result

Print Result

Download PDF

Dark Mode

Responsive Design

Smooth Animations

Local Storage (save selected grades)

Semester Disclaimer

Every semester page must contain a disclaimer card.

Example:

Disclaimer

This SGPA calculator is provided only for estimation purposes based on the JNTUK R23 grading system for the CSE (AI & ML) branch. The calculated SGPA is unofficial and may differ from the final SGPA published by the university. Always refer to your official results for academic records.

UI Design

Use a modern academic theme with:

Glassmorphism cards

Blue/Purple gradient accents

Rounded components

Lucide React icons

Professional typography

Attractive grade dropdowns

Smooth hover animations

Code Quality

Create reusable components such as:

components/

Header.tsx
Footer.tsx
SemesterCard.tsx
SubjectTable.tsx
GradeDropdown.tsx
ResultCard.tsx
CalculationBreakdown.tsx
DisclaimerCard.tsx
ThemeToggle.tsx


Avoid duplicate code.

Future Scalability

The website should be fully data-driven.

Adding a new semester should only require:

Creating a new data file (e.g., sem32.ts)

Adding it to the semester list

No calculator logic should need to be modified.

Generate clean, well-structured, production-ready code following React and TypeScript best practices.  II-I Semester (2-1)



Subject

Credits

Probability and Statistics

3

UNIVERSAL HUMAN VALUES - UNDERSTANDING HARMONY AND ETHICAL HUMAN CONDUCT

3

Artificial Intelligence

3

Advanced Data Structures and Algorithm Analysis

3

Object Oriented Programming through Java

3

Advanced Data Structures and Algorithm Analysis  Lab

1.5

Object Oriented Programming through Java Lab

1.5

Python Programming

2

Life Skills – III

-

Total Credits: 20

Not included in SGPA: Life Skills – III ask CP or NCP and calculate total sgpa and Result (Pass/ Fail) accordingly

II-II Semester (2-2)

Subject

Credits

Optimization Techniques

2

Discrete Mathematics and Graph Theory

3

Machine Learning

3

Database Management Systems

3

Digital Logic and Computer Organization

3

Design Thinking and Innovation

2

Machine Learning Lab

1.5

Database Management Systems Lab

1.5

Full Stack Development – I

2

Environmental Science

-

Life Skills – IV

-

Total Credits: 21

Not included in SGPA: Environmental Science, Life Skills – IV ask CP or NCP and calculate total sgpa and Result(Pass/Fail)  accordingly

III-I Semester (3-1)

Subject

Credits

Information Retrieval Systems

3

Computer Networks

3

Operating Systems

3

Automata Theory and Compiler Design

3

Entrepreneurship Development and Venture Creation

3

Information Retrieval Lab

1.5

Computer Networks Lab

1.5

Full Stack Development – II

2

Tinkering Lab (User Interface Design using Flutter)

1

Evaluation of Community Service Internship

2

Life Skills – V

-

Total Credits: 23

Not included in SGPA: Life Skills – V ask CP or NCP and calculate total sgpa and Result (Pass/Fail)accordingly

 

Grade Mapping (JNTUK R23)

Grade

Grade Point

S

10

A

9

B

8

C

7

D

6

E

5

F

0

AB (Absent)

0

These subject lists and credit values are ready to be used directly in your semester data files (e.g., sem21.ts, sem22.ts, and sem31.ts).

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
