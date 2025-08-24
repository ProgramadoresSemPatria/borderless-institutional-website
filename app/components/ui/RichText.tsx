import { ReactNode } from "react";

type Tag = "colorful" | "italic";

type Props = {
  children(tags: Record<Tag, (chunks: ReactNode) => ReactNode>): ReactNode;
};

export default function RichText({ children }: Props) {
  return (
    <div className="prose">
      {children({
        colorful: (chunks: ReactNode) => (
          <span className="font-ivy text-secondary">{chunks}</span>
        ),
        italic: (chunks: ReactNode) => (
          <span className="font-ivy">{chunks}</span>
        ),
      })}
    </div>
  );
}
