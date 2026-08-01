import { n as semesters } from "./data-tidsXgvO.mjs";
import { n as require_jsx_runtime } from "../_libs/react+tanstack__react-query.mjs";
import { h as Link } from "../_libs/@tanstack/react-router+[...].mjs";
import { g as ArrowRight, m as BookOpen, o as Moon, p as Calculator, r as Sparkles } from "../_libs/lucide-react.mjs";
import { n as Header, t as Footer } from "./Header-mGJi2lGb.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-BLQ-o5E3.js
var import_jsx_runtime = require_jsx_runtime();
function SemesterCard({ semester }) {
	const graded = semester.subjects.filter((s) => s.countInSGPA).length;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Link, {
		to: "/semester/$semesterId",
		params: { semesterId: semester.id },
		className: "glass-panel group relative overflow-hidden rounded-3xl p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[var(--shadow-glow)]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "pointer-events-none absolute -right-12 -top-12 size-32 rounded-full bg-[image:var(--gradient-brand)] opacity-15 blur-2xl transition-opacity duration-300 group-hover:opacity-35" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/60 px-3 py-1 text-[11px] font-medium uppercase tracking-widest text-muted-foreground",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-3" }), " Semester"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-4 font-display text-3xl font-semibold tracking-tight text-gradient",
				children: semester.semester
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-muted-foreground",
				children: [
					graded,
					" graded subjects · ",
					semester.totalCredits,
					" credits"
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary",
				children: ["Calculate SGPA", /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowRight, { className: "size-4 transition-transform duration-300 group-hover:translate-x-1" })]
			})
		]
	});
}
function Index() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-screen",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Header, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
				className: "hero-glow relative overflow-hidden px-4 pb-14 pt-16 sm:px-6 sm:pt-24",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto max-w-3xl text-center",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/60 px-4 py-1.5 text-xs font-medium text-muted-foreground",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-3.5 text-primary" }), "JNTUK R23 Regulation"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
							className: "mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-6xl",
							children: [
								"SGPA Calculator for ",
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-gradient",
									children: "JNTUK R23"
								}),
								" Regulation"
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg",
							children: "Computer Science & Engineering (Artificial Intelligence & Machine Learning)"
						})
					]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "mx-auto max-w-6xl px-4 pb-8 sm:px-6",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
						className: "font-display text-xl font-semibold tracking-tight text-foreground",
						children: "Choose your semester"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3",
						children: semesters.map((semester) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SemesterCard, { semester }, semester.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-12 grid gap-5 sm:grid-cols-3",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Calculator, { className: "size-4" }),
								title: "Live calculation",
								body: "SGPA, credits and credit points update the moment you pick a grade."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" }),
								title: "Saved automatically",
								body: "Your selected grades stay in this browser, even after you close the tab."
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Feature, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-4" }),
								title: "Dark mode",
								body: "A calm academic theme that works late at night and on any screen size."
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Footer, {})
		]
	});
}
function Feature({ icon, title, body }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "glass-panel rounded-2xl p-5",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "grid size-9 place-items-center rounded-xl bg-accent text-accent-foreground",
				children: icon
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
				className: "mt-3 font-display text-sm font-semibold text-foreground",
				children: title
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-muted-foreground",
				children: body
			})
		]
	});
}
//#endregion
export { Index as component };
