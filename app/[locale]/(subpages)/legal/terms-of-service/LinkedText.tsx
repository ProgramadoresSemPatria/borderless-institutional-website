"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

interface LinkedTextProps {
  translationKey: string;
  className?: string;
}

export function LinkedText({ translationKey, className }: LinkedTextProps) {
  const t = useTranslations("Legal.TermsOfService");

  const beforeLink = t(`${translationKey}.beforeLink`);
  const linkText = t(`${translationKey}.linkText`);
  const linkHref = t(`${translationKey}.linkHref`);
  const afterLink = t(`${translationKey}.afterLink`, { defaultValue: "" });

  return (
    <p className={className}>
      {beforeLink}{" "}
      <Link href={linkHref} className="underline">
        {linkText}
      </Link>
      {afterLink && ` ${afterLink}`}
    </p>
  );
}

interface MultiLinkedTextProps {
  translationKey: string;
  className?: string;
}

export function MultiLinkedText({
  translationKey,
  className,
}: MultiLinkedTextProps) {
  const t = useTranslations("Legal.TermsOfService");

  const parts = t.raw(`${translationKey}.parts`) as string[];
  const links = t.raw(`${translationKey}.links`) as Array<{
    text: string;
    href: string;
  }>;

  const result: (string | JSX.Element)[] = [];
  
  parts.forEach((part, idx) => {
    result.push(part);
    if (links[idx]) {
      result.push(
        <Link key={`link-${idx}`} href={links[idx].href} className="underline">
          {links[idx].text}
        </Link>
      );
    }
  });

  return <p className={className}>{result}</p>;
}
