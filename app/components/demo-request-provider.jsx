"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from "react";
import DemoRequestModal from "./demo-request-modal";

const DemoRequestContext = createContext(null);

export function DemoRequestProvider({ children }) {
  const [open, setOpen] = useState(false);

  const openDemo = useCallback(() => setOpen(true), []);
  const closeDemo = useCallback(() => setOpen(false), []);

  const value = useMemo(
    () => ({ open, openDemo, closeDemo }),
    [open, openDemo, closeDemo],
  );

  return (
    <DemoRequestContext.Provider value={value}>
      {children}
      <DemoRequestModal open={open} onClose={closeDemo} />
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
