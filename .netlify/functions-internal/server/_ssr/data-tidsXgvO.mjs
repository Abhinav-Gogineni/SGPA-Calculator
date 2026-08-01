//#region node_modules/.nitro/vite/services/ssr/assets/data-tidsXgvO.js
var __defProp = Object.defineProperty;
var __exportAll = (all, no_symbols) => {
	let target = {};
	for (var name in all) __defProp(target, name, {
		get: all[name],
		enumerable: true
	});
	if (!no_symbols) __defProp(target, Symbol.toStringTag, { value: "Module" });
	return target;
};
var sem21_exports = /* @__PURE__ */ __exportAll({ semester: () => semester$2 });
var semester$2 = {
	semester: "II-I",
	totalCredits: 20,
	subjects: [
		{
			name: "Probability and Statistics",
			credits: 3,
			countInSGPA: true
		},
		{
			name: "Universal Human Values – Understanding Harmony and Ethical Human Conduct",
			credits: 3,
			countInSGPA: true
		},
		{
			name: "Artificial Intelligence",
			credits: 3,
			countInSGPA: true
		},
		{
			name: "Advanced Data Structures and Algorithm Analysis",
			credits: 3,
			countInSGPA: true
		},
		{
			name: "Object Oriented Programming through Java",
			credits: 3,
			countInSGPA: true
		},
		{
			name: "Advanced Data Structures and Algorithm Analysis Lab",
			credits: 1.5,
			countInSGPA: true
		},
		{
			name: "Object Oriented Programming through Java Lab",
			credits: 1.5,
			countInSGPA: true
		},
		{
			name: "Python Programming",
			credits: 2,
			countInSGPA: true
		},
		{
			name: "Life Skills – III",
			credits: 0,
			countInSGPA: false
		}
	]
};
var sem22_exports = /* @__PURE__ */ __exportAll({ semester: () => semester$1 });
var semester$1 = {
	semester: "II-II",
	totalCredits: 21,
	subjects: [
		{
			name: "Optimization Techniques",
			credits: 2,
			countInSGPA: true
		},
		{
			name: "Discrete Mathematics and Graph Theory",
			credits: 3,
			countInSGPA: true
		},
		{
			name: "Machine Learning",
			credits: 3,
			countInSGPA: true
		},
		{
			name: "Database Management Systems",
			credits: 3,
			countInSGPA: true
		},
		{
			name: "Digital Logic and Computer Organization",
			credits: 3,
			countInSGPA: true
		},
		{
			name: "Design Thinking and Innovation",
			credits: 2,
			countInSGPA: true
		},
		{
			name: "Machine Learning Lab",
			credits: 1.5,
			countInSGPA: true
		},
		{
			name: "Database Management Systems Lab",
			credits: 1.5,
			countInSGPA: true
		},
		{
			name: "Full Stack Development – I",
			credits: 2,
			countInSGPA: true
		},
		{
			name: "Environmental Science",
			credits: 0,
			countInSGPA: false
		},
		{
			name: "Life Skills – IV",
			credits: 0,
			countInSGPA: false
		}
	]
};
var sem31_exports = /* @__PURE__ */ __exportAll({ semester: () => semester });
var semester = {
	semester: "III-I",
	totalCredits: 23,
	subjects: [
		{
			name: "Information Retrieval Systems",
			credits: 3,
			countInSGPA: true
		},
		{
			name: "Computer Networks",
			credits: 3,
			countInSGPA: true
		},
		{
			name: "Operating Systems",
			credits: 3,
			countInSGPA: true
		},
		{
			name: "Automata Theory and Compiler Design",
			credits: 3,
			countInSGPA: true
		},
		{
			name: "Entrepreneurship Development and Venture Creation",
			credits: 3,
			countInSGPA: true
		},
		{
			name: "Information Retrieval Lab",
			credits: 1.5,
			countInSGPA: true
		},
		{
			name: "Computer Networks Lab",
			credits: 1.5,
			countInSGPA: true
		},
		{
			name: "Full Stack Development – II",
			credits: 2,
			countInSGPA: true
		},
		{
			name: "Tinkering Lab (User Interface Design using Flutter)",
			credits: 1,
			countInSGPA: true
		},
		{
			name: "Evaluation of Community Service Internship",
			credits: 2,
			countInSGPA: true
		},
		{
			name: "Life Skills – V",
			credits: 0,
			countInSGPA: false
		}
	]
};
var semesters = Object.entries(/* @__PURE__ */ Object.assign({
	"./sem21.ts": sem21_exports,
	"./sem22.ts": sem22_exports,
	"./sem31.ts": sem31_exports
})).map(([path, mod]) => ({
	id: path.replace("./", "").replace(/\.ts$/, ""),
	...mod.semester
})).sort((a, b) => a.id.localeCompare(b.id));
var getSemester = (id) => semesters.find((s) => s.id === id);
//#endregion
export { semesters as n, getSemester as t };
