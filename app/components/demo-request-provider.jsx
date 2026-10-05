"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { usePathname } from "next/navigation";
import DemoRequestModal, { DEMO_REQUESTED_KEY } from "./demo-request-modal";

const DemoRequestContext = createContext(null);

const AUTO_OPEN_DELAY_MS = 3500;
const AUTO_OPEN_SHOWN_KEY = "tc-demo-popup-shown";
const AUTO_OPEN_EXCLUDED_PATHS = ["/contact"];

function readStorage(storage, key) {
  try {
    return window[storage].getItem(key);
  } catch {
    return null;
  }
}

function markAutoOpenShown() {
  try {
    window.sessionStorage.setItem(AUTO_OPEN_SHOWN_KEY, "1");
  } catch {}
}

export function DemoRequestProvider({ children }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [auto, setAuto] = useState(false);

  const openDemo = useCallback(() => {
    markAutoOpenShown();
    setAuto(false);
    setOpen(true);
  }, []);
  const closeDemo = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (open || AUTO_OPEN_EXCLUDED_PATHS.includes(pathname)) return undefined;
    if (readStorage("sessionStorage", AUTO_OPEN_SHOWN_KEY)) return undefined;
    if (readStorage("localStorage", DEMO_REQUESTED_KEY)) return undefined;

    const timer = window.setTimeout(() => {
      markAutoOpenShown();
      setAuto(true);
      setOpen(true);
    }, AUTO_OPEN_DELAY_MS);

    return () => window.clearTimeout(timer);
  }, [pathname, open]);

  const value = useMemo(
    () => ({ open, openDemo, closeDemo }),
    [open, openDemo, closeDemo],
  );

  return (
    <DemoRequestContext.Provider value={value}>
      {children}
      <DemoRequestModal open={open} auto={auto} onClose={closeDemo} />
    </DemoRequestContext.Provider>
  );
}

export function useDemoRequest() {
  const context = useContext(DemoRequestContext);
  if (!context) {
    throw new Error("useDemoRequest must be used within DemoRequestProvider");
  }
  return context;
}

/** Shared Book a Demo trigger — opens the global demo popup. */
export function BookDemoButton({
  className,
  children = "Book a Demo",
  onClick,
  ...props
}) {
  const { openDemo } = useDemoRequest();

  return (
    <button
      type="button"
      className={className}
      onClick={(event) => {
        onClick?.(event);
        if (!event.defaultPrevented) openDemo();
      }}
      {...props}
    >
      {children}
    </button>
  );
}
