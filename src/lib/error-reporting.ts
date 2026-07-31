/**
 * Lightweight error reporting utility.
 * Forwards boundary-caught errors so they surface in the console
 * and any attached error monitoring tools.
 */
export function reportAppError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;

  const message =
    error instanceof Error
      ? error.message
      : typeof error === "string"
        ? error
        : String(error);
  const stack = error instanceof Error ? error.stack : undefined;

  console.error("[Error]", message, { context, ...(stack ? { stack } : {}) });
}
