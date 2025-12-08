"use client";

import { Link } from "@/i18n/navigation";
import { useSearchParams } from "next/navigation";
import { ComponentProps } from "react";

interface Props extends ComponentProps<typeof Link> {
  byPassUtmParams?: boolean;
}

export const LinkWithUtmParams = (props: Props) => {
  const { href, byPassUtmParams = false, ...rest } = props;

  const searchParams = Object.fromEntries(useSearchParams().entries());
  const utmParams = Object.entries(searchParams).filter(([key]) =>
    key.startsWith("utm_")
  );

  const getHrefWithUtmParams = () => {
    const hrefString = href as string;

    const [pathname, existingQuery = ""] = hrefString.split("?");
    const queryParams = new URLSearchParams(existingQuery);

    utmParams.forEach(([key, value]) => {
      queryParams.set(key, value);
    });

    const queryString = queryParams.toString();
    return queryString ? `${pathname}?${queryString}` : pathname;
  };

  return (
    <Link href={byPassUtmParams ? href : getHrefWithUtmParams()} {...rest} />
  );
};
