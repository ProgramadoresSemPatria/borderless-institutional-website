import Link from "next/link";

type FooterSectionItem = {
  name: string;
  href: string;
};

export function FooterSection({
  title,
  items,
}: {
  title: string;
  items: FooterSectionItem[];
}) {
  return (
    <div className="space-y-4">
      <h3 className="text-black font-semibold md:text-lg">{title}</h3>
      <div className="font-semibold flex flex-col space-y-2 text-sm md:text-base">
        {items.map((item) => (
          <Link
            key={item.name}
            href={item.href}
            className="cursor-pointer hover:opacity-70 transition-opacity duration-150"
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
