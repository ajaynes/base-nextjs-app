"use client";

import React from "react";

import { STATE_PROVIDER } from "@/lib/config/state";

type Props = { children: React.ReactNode };

// Keep Redux code isolated so Zustand-only apps don’t have to touch it.
function ReduxProviders({ children }: Props) {
  // Lazy require avoids importing redux setup when not used
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const { ReduxProvider } = require("@/store/redux/ReduxProvider");
  return <ReduxProvider>{children}</ReduxProvider>;
}

export function AppProviders({ children }: Props) {
  if (STATE_PROVIDER === "redux")
    return <ReduxProviders>{children}</ReduxProviders>;

  // Zustand doesn’t require a provider by default.
  // If you later add persist/devtools, you still typically don't need one.
  return <>{children}</>;
}
