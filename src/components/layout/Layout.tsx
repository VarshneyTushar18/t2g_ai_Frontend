import type { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
  className?: string;
}

/**
 * Layout wrapper for pages that need consistent padding and max-width.
 * For full-width sections, use direct div elements instead.
 */
export default function Layout({ children, className = "" }: LayoutProps) {
  return (
    <div
      className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}
      style={{ background: "#ffffff" }}
    >
      {children}
    </div>
  );
}
