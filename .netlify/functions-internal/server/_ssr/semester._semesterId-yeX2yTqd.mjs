import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as Route } from "./semester._semesterId-BGkMyEdV.mjs";
import { n as toast } from "../_libs/sonner.mjs";
import { _ as ArrowLeft, a as Printer, d as CircleX, f as CircleCheck, h as Award, i as RotateCcw, l as Download, s as Layers, t as TriangleAlert, u as ClipboardList } from "../_libs/lucide-react.mjs";
import { n as Header, t as Footer } from "./Header-mGJi2lGb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/semester._semesterId-yeX2yTqd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function CalculationBreakdown({ result }) {
	if (!result.complete || result.ungradedCount > 0) return null;
	const rows = result.rows.filter((row) => row.countInSGPA && row.grade);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass-panel rounded-3xl p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
			className: "font-display text-lg font-semibold tracking-tight text-foreground",
			children: "Calculation Breakdown"
		}), rows.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 text-sm text-muted-foreground",
			children: "Select grades above to see how the SGPA is built up."
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
			className: "mt-4 space-y-2",
			children: rows.map((row) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "flex items-center justify-between gap-4 rounded-xl border border-border/50 bg-secondary/40 px-3 py-2 text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "truncate text-foreground",
					children: row.name
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "shrink-0 tabular-nums text-muted-foreground",
					children: [
						row.credits,
						" × ",
						row.gradePoint,
						" =",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-foreground",
							children: row.creditPoints
						})
					]
				})]
			}, row.index))
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-4 rounded-xl bg-secondary/60 px-3 py-3 text-center text-sm tabular-nums text-muted-foreground",
			children: [
				"SGPA = ",
				result.totalCreditPoints,
				" ÷ ",
				result.totalCredits,
				" =",
				" ",
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
					className: "text-foreground",
					children: result.sgpa.toFixed(2)
				})
			]
		})] })]
	});
}
function DisclaimerCard() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass-panel rounded-3xl border-warning/40 p-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h3", {
			className: "flex items-center gap-2 font-display text-base font-semibold text-foreground",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TriangleAlert, { className: "size-4 text-warning" }), "Disclaimer"]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm leading-relaxed text-muted-foreground",
			children: "This SGPA calculator is provided only for estimation purposes based on the JNTUK R23 grading system for the CSE (AI & ML) branch. The calculated SGPA is unofficial and may differ from the final SGPA published by the university. Always refer to your official results for academic records."
		})]
	});
}
function ResultCard({ result }) {
	if (!result.complete || result.ungradedCount > 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass-panel relative overflow-hidden rounded-3xl p-6 sm:p-8",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute -left-16 -top-16 size-48 rounded-full bg-[image:var(--gradient-brand)] opacity-10 blur-3xl" }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "relative flex flex-col items-center gap-4 py-2 text-center",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "flex size-12 items-center justify-center rounded-full border border-border/60 bg-secondary/60",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ClipboardList, { className: "size-6 text-muted-foreground" })
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-base font-semibold text-foreground",
				children: "Please select grades for all subjects to calculate SGPA."
			}), result.ungradedCount > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-1.5 text-sm text-muted-foreground",
				children: [
					"Remaining subjects to grade:",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold text-foreground",
						children: result.ungradedCount
					})
				]
			})] })]
		})]
	});
	const Icon = result.passed ? CircleCheck : CircleX;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass-panel relative overflow-hidden rounded-3xl p-6 sm:p-8",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute -left-16 -top-16 size-48 rounded-full bg-[image:var(--gradient-brand)] opacity-20 blur-3xl" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex flex-wrap items-end justify-between gap-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "text-[11px] uppercase tracking-widest text-muted-foreground",
					children: "Your SGPA"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-6xl font-semibold tracking-tight text-gradient tabular-nums",
					children: result.sgpa.toFixed(2)
				})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: `inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold ${result.passed ? "bg-success/15 text-success" : "bg-destructive/15 text-destructive"}`,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Icon, { className: "size-4" }), result.passed ? "PASS" : "FAIL"]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative mt-6 grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Layers, { className: "size-4" }),
					label: "Total Credits",
					value: result.totalCredits
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Award, { className: "size-4" }),
					label: "Secured Credits",
					value: result.securedCredits
				})]
			})
		]
	});
}
function Stat({ icon, label, value }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-2xl border border-border/60 bg-secondary/50 px-4 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "flex items-center gap-2 text-[10px] uppercase tracking-wider text-muted-foreground",
			children: [icon, label]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-1 font-display text-2xl font-semibold tabular-nums text-foreground",
			children: value
		})]
	});
}
var GRADES = [
	"S",
	"A",
	"B",
	"C",
	"D",
	"E",
	"F",
	"AB"
];
var GRADE_POINTS = {
	S: 10,
	A: 9,
	B: 8,
	C: 7,
	D: 6,
	E: 5,
	F: 0,
	AB: 0
};
/** Non-credit courses are graded Completed / Not Completed. */
var NON_CREDIT_OPTIONS = ["CP", "NCP"];
function calculateSgpa(data, selection) {
	let totalCredits = 0;
	let totalCreditPoints = 0;
	let securedCredits = 0;
	let passed = true;
	let complete = true;
	let ungradedCount = 0;
	const rows = data.subjects.map((subject, index) => {
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
				countInSGPA: false
			};
		}
		const grade = value;
		if (!(grade in GRADE_POINTS)) {
			complete = false;
			ungradedCount += 1;
			return {
				index,
				name: subject.name,
				credits: subject.credits,
				grade: "",
				gradePoint: null,
				creditPoints: null,
				countInSGPA: true
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
			countInSGPA: true
		};
	});
	return {
		sgpa: totalCredits > 0 ? Math.round(totalCreditPoints / totalCredits * 100) / 100 : 0,
		totalCredits,
		totalCreditPoints,
		securedCredits,
		passed,
		complete,
		ungradedCount,
		rows
	};
}
function GradeDropdown({ value, onChange, nonCredit = false, label }) {
	const options = nonCredit ? NON_CREDIT_OPTIONS : GRADES;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("select", {
		"aria-label": `Grade for ${label}`,
		value,
		onChange: (e) => onChange(e.target.value),
		className: "w-full min-w-[110px] cursor-pointer appearance-none rounded-xl border border-border/70 bg-secondary/70 px-3 py-2 text-center text-sm font-semibold text-foreground shadow-sm outline-none transition-all duration-200 hover:border-primary/60 hover:bg-secondary focus:border-primary focus:ring-2 focus:ring-ring/40",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: "",
			children: "—"
		}), options.map((option) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("option", {
			value: option,
			children: option
		}, option))]
	});
}
function SubjectTable({ data, selection, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "glass-panel overflow-hidden rounded-3xl",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
			className: "w-full border-collapse text-left",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: "border-b border-border/60 bg-secondary/50 text-[11px] uppercase tracking-widest text-muted-foreground",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "px-4 py-3 font-medium sm:px-6",
						children: "Subject"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "w-20 px-2 py-3 text-center font-medium",
						children: "Credits"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
						className: "w-32 px-4 py-3 text-center font-medium sm:px-6",
						children: "Grade"
					})
				]
			}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: data.subjects.map((subject, index) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
				className: "border-b border-border/40 transition-colors duration-200 last:border-0 hover:bg-secondary/40",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
						className: "px-4 py-3 text-sm text-foreground sm:px-6",
						children: [subject.name, !subject.countInSGPA && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "ml-2 rounded-full border border-border/60 px-2 py-0.5 text-[10px] uppercase tracking-wider text-muted-foreground",
							children: "Non-credit"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-2 py-3 text-center text-sm tabular-nums text-muted-foreground",
						children: subject.countInSGPA ? subject.credits : "—"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
						className: "px-4 py-3 sm:px-6",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GradeDropdown, {
							label: subject.name,
							value: selection[index] ?? "",
							nonCredit: !subject.countInSGPA,
							onChange: (value) => onChange(index, value)
						})
					})
				]
			}, subject.name)) })]
		})
	});
}
function SemesterPage() {
	const { semester } = Route.useLoaderData();
	const storageKey = `sgpa-grades-${semester.id}`;
	const [selection, setSelection] = (0, import_react.useState)({});
	(0, import_react.useEffect)(() => {
		try {
			const raw = localStorage.getItem(storageKey);
			setSelection(raw ? JSON.parse(raw) : {});
		} catch {
			setSelection({});
		}
	}, [storageKey]);
	const handleChange = (0, import_react.useCallback)((index, value) => {
		setSelection((prev) => {
			const next = {
				...prev,
				[index]: value
			};
			try {
				localStorage.setItem(storageKey, JSON.stringify(next));
			} catch {}
			return next;
		});
	}, [storageKey]);
	const reset = () => {
		setSelection({});
		try {
			localStorage.removeItem(storageKey);
		} catch {}
		toast.success("Grades reset");
	};
	const result = (0, import_react.useMemo)(() => calculateSgpa(semester, selection), [semester, selection]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-4 pb-8 pt-8 sm:px-6 sm:pt-12",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
						to: "/",
						className: "inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary print:hidden",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowLeft, { className: "size-4" }), " All semesters"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-4 flex flex-wrap items-end justify-between gap-4",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "font-display text-3xl font-semibold tracking-tight text-foreground sm:text-4xl",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-gradient",
								children: semester.semester
							}), " Semester"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-muted-foreground",
							children: [
								"JNTUK R23 · CSE (AI & ML) · ",
								semester.totalCredits,
								" total credits"
							]
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex flex-wrap gap-2 print:hidden",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
									onClick: reset,
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RotateCcw, { className: "size-4" }),
									label: "Reset"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
									onClick: () => window.print(),
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "size-4" }),
									label: "Print"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Action, {
									onClick: () => window.print(),
									icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }),
									label: "Download PDF",
									primary: true
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-8 grid gap-6 lg:grid-cols-[minmax(0,1.6fr)_minmax(0,1fr)]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SubjectTable, {
								data: semester,
								selection,
								onChange: handleChange
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(DisclaimerCard, {})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "space-y-6 lg:sticky lg:top-24 lg:self-start",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ResultCard, { result }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CalculationBreakdown, { result })]
						})]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Action({ onClick, icon, label, primary = false }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		className: `inline-flex items-center gap-2 rounded-xl px-3.5 py-2 text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 ${primary ? "bg-[image:var(--gradient-brand)] text-primary-foreground shadow-[var(--shadow-glow)]" : "glass-panel text-foreground hover:text-primary"}`,
		children: [icon, label]
	});
}
//#endregion
export { SemesterPage as component };
