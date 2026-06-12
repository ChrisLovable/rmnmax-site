"use client";

import { useDemoModal } from "@/components/DemoModalProvider";

type RequestDemoButtonProps = {
  className?: string;
  children?: React.ReactNode;
};

export default function RequestDemoButton({
  className,
  children = "Request Demo",
}: RequestDemoButtonProps) {
  const { openModal } = useDemoModal();

  return (
    <button type="button" onClick={openModal} className={className}>
      {children}
    </button>
  );
}
