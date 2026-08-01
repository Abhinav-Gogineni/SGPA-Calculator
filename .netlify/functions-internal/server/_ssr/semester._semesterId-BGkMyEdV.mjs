import { t as getSemester } from "./data-tidsXgvO.mjs";
import { f as lazyRouteComponent, j as notFound, p as createFileRoute } from "../_libs/@tanstack/react-router+[...].mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/semester._semesterId-BGkMyEdV.js
var $$splitComponentImporter = () => import("./semester._semesterId-yeX2yTqd.mjs");
var Route = createFileRoute("/semester/$semesterId")({
	loader: ({ params }) => {
		const semester = getSemester(params.semesterId);
		if (!semester) throw notFound();
		return { semester };
	},
	head: ({ loaderData }) => {
		if (!loaderData) return { meta: [{ title: "Semester not found" }, {
			name: "robots",
			content: "noindex"
		}] };
		const title = `${loaderData.semester.semester} SGPA Calculator — JNTUK R23 CSE (AI & ML)`;
		const description = `Calculate your ${loaderData.semester.semester} semester SGPA for JNTUK R23 CSE (AI & ML) with live credits and credit points.`;
		return { meta: [
			{ title },
			{
				name: "description",
				content: description
			},
			{
				property: "og:title",
				content: title
			},
			{
				property: "og:description",
				content: description
			}
		] };
	},
	component: lazyRouteComponent($$splitComponentImporter, "component")
});
//#endregion
export { Route as t };
