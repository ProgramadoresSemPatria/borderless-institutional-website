import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy – Borderless Coding",
};

export default function PrivacyPolicyPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto space-y-10">
        <header className="space-y-4">
          <h1 className="text-3xl md:text-5xl font-semibold">Privacy Policy</h1>
          <p className="text-gray/90">Last updated: 08/13/2025</p>
        </header>

        <div className="space-y-8 leading-relaxed">
          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">1. Introduction</h3>
            <p>
              We are <strong>Borderless Coding</strong>. This Privacy
              Policy explains how we collect, use, share, and protect your
              information when you use our websites, programs, mentorships, and
              platform (collectively, the <strong>Services</strong>).
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">2. Data we collect</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Account & Contact:</strong> name, email, password hash, phone
                (optional), location (city/country).
              </li>
              <li>
                <strong>Billing:</strong> payer name, address, tax IDs (if provided),
                partial payment details handled by processors (Stripe/Appmax)—we do
                not store full card numbers.
              </li>
              <li>
                <strong>Usage & Device:</strong> pages viewed, clicks, IP, approximate
                location, device, browser—via cookies or similar tech.
              </li>
              <li>
                <strong>Content & Submissions:</strong> messages sent via forms, forum
                posts, assignments, uploaded files.
              </li>
              <li>
                <strong>Mentorship/Programs:</strong> scheduling info, progress,
                feedback, recordings/notes (if consented).
              </li>
              <li>
                <strong>Marketing preferences:</strong> email opt-ins, attribution
                (UTM), referrals.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">
              3. How we use data (purposes & legal bases)
            </h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Provide the Services (contract)</strong> – account creation,
                authentication, course/mentorship access, payments, receipts.
              </li>
              <li>
                <strong>Operate & Improve (legitimate interests)</strong> – analytics,
                debugging, preventing abuse, training quality.
              </li>
              <li>
                <strong>Communications (consent/legitimate interests)</strong> –
                onboarding emails, product updates; marketing emails only with opt‑in
                and easy opt‑out.
              </li>
              <li>
                <strong>Compliance (legal obligation)</strong> – tax/audit records,
                fraud prevention, court orders.
              </li>
              <li>
                <strong>Personalization (consent/legitimate interests)</strong> –
                recommended content, reminders.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">4. Sharing</h3>
            <p>
              We share data with service providers/processors strictly to run the
              Services: Stripe, Appmax, Resend (email), Vimeo (video), Notion
              (internal docs), Analytics/Ads (Google/Meta), and other vetted vendors
              listed here: <a className="text-secondary underline" href="/legal/vendors">/legal/vendors</a>.
              We may share as required by law, during a merger/acquisition, or to
              prevent fraud/abuse.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">5. Cookies & tracking</h3>
            <p>
              We use essential cookies (login, session) and optional analytics/ads
              cookies. You can manage preferences via our cookie banner (Granular:
              Essential / Analytics / Marketing). See
              <a className="text-secondary underline" href="/legal/cookies"> /legal/cookies</a> for details.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">6. International transfers</h3>
            <p>
              We operate internationally. Where laws (e.g., GDPR/LGPD) require, we use
              approved safeguards (e.g., SCCs, contractual clauses) for cross‑border
              transfers.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">7. Data retention</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Account data:</strong> for the life of the account + up to 7
                years for finance/audit.
              </li>
              <li>
                <strong>Program records:</strong> 24 months after completion unless you
                request deletion earlier (subject to legal obligations).
              </li>
              <li>
                <strong>Marketing data:</strong> until you withdraw consent.
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">8. Your rights</h3>
            <p>
              Depending on where you live (e.g., EEA/UK – GDPR, Brazil – LGPD,
              California – CPRA), you may have rights to access, correct, delete,
              port data, object/restrict processing, and withdraw consent.
            </p>
            <p>
              To exercise rights: email <a className="text-secondary underline" href="mailto:contato@borderlesscoding.com">contato@borderlesscoding.com</a>.
              We will verify your identity and respond within the legally required
              time.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">9. Children</h3>
            <p>
              Our Services are for individuals 16+ (or local age of digital consent).
              We don’t knowingly collect data from children.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">10. Security</h3>
            <p>
              We use industry standard controls: encryption in transit, access
              controls, least‑privilege, audit logs, vendor reviews, and regular
              backups. No method is 100% secure.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">11. Changes to this policy</h3>
            <p>
              We may update this policy from time to time. Material changes will be
              announced via email or in‑app notice. Effective date: 08/13/2025
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-semibold">12. Contact</h3>
            <p>
              Email: <a className="text-secondary underline" href="mailto:contato@borderlesscoding.com">contato@borderlesscoding.com</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
