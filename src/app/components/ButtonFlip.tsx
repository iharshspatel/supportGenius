import type { ReactNode } from "react";

type ButtonFlipProps = {
  children: ReactNode;
};

/** Keeps all call-to-action labels on the same text-flip interaction. */
export default function ButtonFlip({ children }: ButtonFlipProps) {
  return (
    <span className="btn-flip">
      <span className="btn-flip-track">
        <span className="btn-flip-primary">{children}</span>
        <span className="btn-flip-secondary" aria-hidden="true">{children}</span>
      </span>
    </span>
  );
}
