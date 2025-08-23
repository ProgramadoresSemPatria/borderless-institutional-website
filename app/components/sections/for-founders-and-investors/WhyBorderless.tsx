import { Award, DollarSign, MapPin, Users2 } from "lucide-react";
import { FeatureCard } from "../../ui/FeatureCard";
import { SectionHeader } from "../../ui/SectionHeader";

const results = [
  {
    title: "Proven Success",
    description:
      "Proven track record: 95+ professionals internationalized through our mentorship",
    icon: Award,
  },
  {
    title: "Revenue Growth",
    description:
      "Revenue-backed ecosystem: $1.7M in the last 12 months from education products fueling incubation",
    icon: DollarSign,
  },
  {
    title: "Validated Talent",
    description:
      "Community-first dealflow: startups grow from a base of already-validated tech talent",
    icon: Users2,
  },
  {
    title: "Global Reach",
    description:
      "International presence: operations and partnerships across Brazil, Europe, and the US",
    icon: MapPin,
  },
];

export function WhyBorderless() {
  return (
    <section className="py-[10svh] space-y-6">
      <SectionHeader
        preTitle="Why Borderless?"
        title={
          <>
            Our track record speaks for itself -{" "}
            <span className="font-ivy">we deliver results</span> for founders
            and investors
          </>
        }
      />

      <div className="grid lg:grid-cols-2 2xl:grid-cols-4 gap-2">
        {results.map((result) => (
          <FeatureCard
            key={result.title}
            title={result.title}
            description={result.description}
            icon={result.icon}
          />
        ))}
      </div>
    </section>
  );
}
