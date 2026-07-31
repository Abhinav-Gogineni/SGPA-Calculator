import { createFileRoute } from "@tanstack/react-router";
import { Calculator, Moon, Sparkles } from "lucide-react";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { SemesterCard } from "@/components/SemesterCard";
import { semesters } from "@/data";

const TITLE = "SGPA Calculator — JNTUK R23 CSE (AI & ML)";
const DESCRIPTION =
  "Instantly estimate your SGPA for JNTUK R23 Regulation, CSE (AI & ML). Pick your semester, choose grades, and get live SGPA, credits and credit points.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen">
      <Header />

      <section className="hero-glow relative overflow-hidden px-4 pb-14 pt-16 sm:px-6 sm:pt-24">
        <div className="mx-auto max-w-3xl text-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-secondary/60 px-4 py-1.5 text-xs font-medium text-muted-foreground">
            <Sparkles className="size-3.5 text-primary" />
            JNTUK R23 Regulation
          </span>
          <h1 className="mt-6 font-display text-4xl font-semibold leading-tight tracking-tight text-foreground sm:text-6xl">
            SGPA Calculator for <span className="text-gradient">JNTUK R23</span> Regulation
          </h1>
          <p className="mx-auto mt-4 max-w-xl text-base text-muted-foreground sm:text-lg">
            Computer Science &amp; Engineering (Artificial Intelligence &amp; Machine Learning)
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-6xl px-4 pb-8 sm:px-6">
        <h2 className="font-display text-xl font-semibold tracking-tight text-foreground">
          Choose your semester
        </h2>
        <div className="mt-5 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {semesters.map((semester) => (
            <SemesterCard key={semester.id} semester={semester} />
          ))}
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-3">
          <Feature
            icon={<Calculator className="size-4" />}
            title="Live calculation"
            body="SGPA, credits and credit points update the moment you pick a grade."
          />
          <Feature
            icon={<Sparkles className="size-4" />}
            title="Saved automatically"
            body="Your selected grades stay in this browser, even after you close the tab."
          />
          <Feature
            icon={<Moon className="size-4" />}
            title="Dark mode"
            body="A calm academic theme that works late at night and on any screen size."
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

function Feature({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode;
  title: string;
  body: string;
}) {
  return (
    <div className="glass-panel rounded-2xl p-5">
      <span className="grid size-9 place-items-center rounded-xl bg-accent text-accent-foreground">
        {icon}
      </span>
      <h3 className="mt-3 font-display text-sm font-semibold text-foreground">{title}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{body}</p>
    </div>
  );
}
