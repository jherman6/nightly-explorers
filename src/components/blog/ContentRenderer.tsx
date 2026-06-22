import Link from "next/link";
import type { ReactNode } from "react";
import type { ContentBlock } from "@/lib/blog/types";

function renderInline(text: string, keyPrefix: string): ReactNode[] {
  const tokens = text.split(/(\*\*[^*]+\*\*|\*[^*]+\*|\[[^\]]+\]\([^)]+\))/g);

  return tokens.filter(Boolean).map((token, i) => {
    const key = `${keyPrefix}-${i}`;

    if (token.startsWith("**") && token.endsWith("**")) {
      return <strong key={key}>{token.slice(2, -2)}</strong>;
    }

    const linkMatch = token.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
    if (linkMatch) {
      return (
        <Link key={key} href={linkMatch[2]}>
          {linkMatch[1]}
        </Link>
      );
    }

    if (token.startsWith("*") && token.endsWith("*")) {
      return <em key={key}>{token.slice(1, -1)}</em>;
    }

    return token;
  });
}

export function ContentRenderer({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <div className="prose-blog">
      {blocks.map((block, i) => {
        const key = `block-${i}`;

        switch (block.type) {
          case "h2":
            return (
              <h2 key={key} id={block.id}>
                {renderInline(block.text, key)}
              </h2>
            );
          case "h3":
            return (
              <h3 key={key} id={block.id}>
                {renderInline(block.text, key)}
              </h3>
            );
          case "p":
            return <p key={key}>{renderInline(block.text, key)}</p>;
          case "ul":
            return (
              <ul key={key}>
                {block.items.map((item, j) => (
                  <li key={`${key}-${j}`}>{renderInline(item, `${key}-${j}`)}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={key}>
                {block.items.map((item, j) => (
                  <li key={`${key}-${j}`}>{renderInline(item, `${key}-${j}`)}</li>
                ))}
              </ol>
            );
          case "quote":
            return (
              <blockquote key={key}>
                {renderInline(block.text, key)}
                {block.cite ? <footer className="mt-1 text-sm not-italic text-[#445848]">— {block.cite}</footer> : null}
              </blockquote>
            );
          case "callout":
            return (
              <div key={key} className="callout">
                {renderInline(block.text, key)}
              </div>
            );
          default:
            return null;
        }
      })}
    </div>
  );
}
