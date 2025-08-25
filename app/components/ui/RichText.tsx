import { ReactNode } from "react";

type Tag = "colorful" | "italic" | 'highlight' | 'strong';

type Props = {
  children(tags: Record<Tag, (chunks: ReactNode) => ReactNode>): ReactNode;
};

export default function RichText({ children }: Props) {
  return (
    <>
      {children({
        colorful: (chunks: ReactNode) => (
          <span className="font-ivy text-secondary">{chunks}</span>
        ),
        italic: (chunks: ReactNode) => (
          <span className="font-ivy">{chunks}</span>
        ),
        highlight: (chunks: ReactNode) => (
          <span className="text-secondary">{chunks}</span>
        ),
        strong: (chunks: ReactNode) => (
          <strong>{chunks}</strong>
        ),
      })}
    </>
  );
}
