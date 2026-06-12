"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import RequestDemoModal from "@/components/RequestDemoModal";

type DemoModalContextType = {
  isOpen: boolean;
  openModal: () => void;
  closeModal: () => void;
};

const DemoModalContext = createContext<DemoModalContextType | undefined>(
  undefined
);

export function DemoModalProvider({ children }: { children: ReactNode }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DemoModalContext.Provider
      value={{
        isOpen,
        openModal: () => setIsOpen(true),
        closeModal: () => setIsOpen(false),
      }}
    >
      {children}
      <RequestDemoModal isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </DemoModalContext.Provider>
  );
}

export function useDemoModal() {
  const context = useContext(DemoModalContext);
  if (!context) {
    throw new Error("useDemoModal must be used within a DemoModalProvider");
  }
  return context;
}
