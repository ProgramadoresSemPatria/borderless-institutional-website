import { ExternalLink } from "../../ui/ExternalLink";
import { FullWidthCard } from "../../ui/FullWidthCard";
import { SectionHeader } from "../../ui/SectionHeader";

export function ReadyToGoGlobal() {
  return (
    <section className="py-[10svh] space-y-8">
      <SectionHeader
        preTitle="Ready to go global ?"
        title={
          <>
            You’ve seen how it works. You’ve seen{" "}
            <span className="font-ivy">the results</span>. The only question is:
          </>
        }
      />

      <FullWidthCard
        title="Will you be next?"
        description="Schedule your free strategy call now — talk directly to our team, get your career diagnosis, and see if you’re ready for PSP or BASE"
      >
        <ExternalLink>Schedule Your Free Strategy Call</ExternalLink>
      </FullWidthCard>
    </section>
  );
}
