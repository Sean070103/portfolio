"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type IntroContextValue = {
  /** True once intro finished or skipped (or reduced-motion / session) */
  introComplete: boolean;
  /** True after client session check — avoids SSR mismatch */
  hydrated: boolean;
  skipIntro: () => void;
  markComplete: () => void;
};

const IntroContext = createContext<IntroContextValue | null>(null);
const STORAGE_KEY = "seandev-intro-v9";

export function IntroProvider({ children }: { children: React.ReactNode }) {
  const reduced = useReducedMotion();
  const [introComplete, setIntroComplete] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    let done = false;
    if (reduced) done = true;
    else {
      try {
        done = sessionStorage.getItem(STORAGE_KEY) === "1";
      } catch {
        done = false;
      }
    }
    setIntroComplete(done);
    setHydrated(true);
  }, [reduced]);

  const finish = useCallback(() => {
    setIntroComplete(true);
    try {
      sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      /* ignore */
    }
  }, []);

  const value = useMemo(
    () => ({
      introComplete,
      hydrated,
      skipIntro: finish,
      markComplete: finish,
    }),
    [introComplete, hydrated, finish]
  );

  return (
    <IntroContext.Provider value={value}>{children}</IntroContext.Provider>
  );
}

export function useIntro() {
  const ctx = useContext(IntroContext);
  if (!ctx) {
    return {
      introComplete: true,
      hydrated: true,
      skipIntro: () => undefined,
      markComplete: () => undefined,
    };
  }
  return ctx;
}
