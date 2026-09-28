import type { CSSProperties } from "react";

type HeadingRevealProps = {
  text: string;
  className?: string;
};

/**
 * Shared page-title treatment. Splitting the title into clipped word wrappers
 * lets every top-level page heading use the same calm rise-in as the homepage.
 */
export default function HeadingReveal({ text, className = "" }: HeadingRevealProps) {
  const words = text.trim().split(/\s+/);

  return (
    <h1 className={className}>
      {words.map((word, index) => (
        <span key={`${word}-${index}`} className="word-rise">
          <span style={{ "--i": index } as CSSProperties}>{word}</span>
          {index < words.length - 1 ? " " : null}
        </span>
      ))}
    </h1>
  );
}
