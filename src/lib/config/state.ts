export type StateProviderMode = "redux" | "zustand" | "none";

/**
 * Choose state layer at runtime (build-time via env is even better, but runtime is simplest).
 * Set NEXT_PUBLIC_STATE_PROVIDER=redux|zustand|none
 */
export const STATE_PROVIDER = (process.env.NEXT_PUBLIC_STATE_PROVIDER ??
  "zustand") as StateProviderMode;

export function assertValidStateProvider(
  value: string,
): asserts value is StateProviderMode {
  if (value !== "redux" && value !== "zustand" && value !== "none") {
    throw new Error(
      `Invalid NEXT_PUBLIC_STATE_PROVIDER="${value}". Use redux | zustand | none.`,
    );
  }
}
