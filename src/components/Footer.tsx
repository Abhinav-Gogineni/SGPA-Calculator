export function Footer() {
  return (
    <footer className="mt-16 border-t border-border/50 py-8 print:hidden">
      <div className="mx-auto max-w-6xl px-4 text-center text-xs text-muted-foreground sm:px-6">
        <p>
          Unofficial SGPA estimator for JNTUK R23 · CSE (Artificial Intelligence &amp; Machine
          Learning).
        </p>
        <p className="mt-1">Always verify with your official university results.</p>
        <p className="mt-3">
          Developed by{" "}
          <span
            style={{
              backgroundImage: "linear-gradient(135deg, #7c3aed, #a855f7, #c084fc)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              fontWeight: 600,
            }}
          >
            Abhinav
          </span>
        </p>
        <p className="mt-1">© 2026 Abhinav. All rights reserved.</p>
      </div>
    </footer>
  );
}