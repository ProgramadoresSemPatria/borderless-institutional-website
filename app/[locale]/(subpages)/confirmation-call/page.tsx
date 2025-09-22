// app/[locale]/confirmation-call/page.tsx
import ConfirmationClient from "@/app/components/sections/confirmation-call/ConfirmationClient";
import { Testimonials } from "@/app/components/sections/homepage/Testimonials";
import { ExternalLink } from "@/app/components/ui/ExternalLink";
import { RequirementsCard } from "@/app/components/ui/RequirementsCard";

export const revalidate = 0;

const val = (q: Record<string, string | string[] | undefined>, k: string) =>
  Array.isArray(q[k]) ? (q[k] as string[])[0] : (q[k] as string | undefined);

function normalizeWaFromPhone(raw?: string) {
  if (!raw) return undefined;
  const digits = raw.replace(/\D/g, "");
  const withCountry = digits.startsWith("55") ? digits : `55${digits}`;
  return `https://wa.me/${withCountry}`;
}

function parseDateSafe(s?: string, timezone?: string) {
  if (!s) return undefined;
  
  // API sends startTime in BRT (GMT-3) by default
  // We need to parse it considering the user's timezone from query params
  let d = new Date(s);
  
  // If the date string doesn't have timezone info, assume it's in BRT
  if (!/[zZ]|[+-]\d{2}:?\d{2}$/.test(s)) {
    // Add BRT timezone offset to the date string
    d = new Date(s + '-03:00'); // BRT is GMT-3
  }
  
  return !Number.isNaN(d.getTime()) ? d : undefined;
}

function formatWhen(dateISO?: string, timezone?: string) {
  const d = parseDateSafe(dateISO, timezone);
  if (!d) return null;
  try {
    return new Intl.DateTimeFormat("pt-BR", {
      timeZone: timezone || "America/Sao_Paulo",
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "2-digit",
      hour: "2-digit",
      minute: "2-digit",
    }).format(d);
  } catch {
    return null;
  }
}

export default async function Page(props: {
  searchParams: Promise<Record<string, string | string[] | undefined>>;
}) {
  const searchParams: Record<string, string | string[] | undefined> =
    (await props.searchParams) ?? {};

  const contactId = val(searchParams, "contact_id");
  const name = val(searchParams, "name") ?? "";
  const tzRaw = val(searchParams, "tz");
  const email = val(searchParams, "email") ?? "";
  const phone = val(searchParams, "phone") ?? "";

  // Timezone is mandatory for proper calculations
  // Default to America/Sao_Paulo if not provided in query params
  const tz = tzRaw || "America/Sao_Paulo";

  // These values now come exclusively from the GHL API response
  let joinUrl: string = "#";
  let rescheduleUrl: string = "#";
  const calendarUrl: string | undefined = undefined;
  let dateISO: string | undefined = undefined;

  // Fetch appointment data from GoHighLevel using contact_id
  if (contactId && process.env.GHL_API_KEY) {
    try {
      const resp = await fetch(
        `https://services.leadconnectorhq.com/contacts/${encodeURIComponent(
          contactId
        )}/appointments`,
        {
          headers: {
            Accept: "application/json",
            Version: "2021-07-28",
            Authorization: `Bearer ${process.env.GHL_API_KEY}`,
          },
          cache: "no-store",
        }
      );
      if (resp.ok) {
        const data: {
          events?: Array<{
            id: string;
            calendarId: string;
            startTime: string;
            endTime?: string;
            address?: string;
          }>;
        } = await resp.json();
        const events = Array.isArray(data.events) ? data.events : [];
        if (events.length > 0) {
          const latest = events
            .slice()
            .sort((a, b) => {
              const ad = parseDateSafe(a.startTime, tz)?.getTime() ?? 0;
              const bd = parseDateSafe(b.startTime, tz)?.getTime() ?? 0;
              return bd - ad;
            })[0];
          if (latest) {
            joinUrl = latest.address || joinUrl;
            dateISO = latest.startTime;

            // Build reschedule and cancel URLs per instructions
            rescheduleUrl = `https://go.borderlesscoding.com/widget/booking/${latest.calendarId}?event_id=${latest.id}`;
            // If you want to expose cancel, repurpose calendarUrl or add UI later
            // const cancelUrl = `/widget/cancel-booking?event_id=${latest.id}`;
          }
        }
      }
    } catch {}
  }

  let whatsappUrl = val(searchParams, "whatsappUrl") ?? "#";
  if (!whatsappUrl || whatsappUrl === "#") {
    whatsappUrl = normalizeWaFromPhone(phone) ?? "#";
  }
  const when = formatWhen(dateISO, tz);
  return (
    <div className="pt-36">
      {/* The interactive hero is a Client Component */}
      <ConfirmationClient
        name={name}
        email={email}
        phone={phone}
        dateISO={dateISO}
        tz={tz}
        joinUrl={joinUrl}
        rescheduleUrl={rescheduleUrl}
        whatsappUrl={whatsappUrl}
        calendarUrl={calendarUrl}
        when={when}
      />

      {/* Expectations + checklist (pure server markup) */}
      <section className="grid md:grid-cols-2 gap-2 bg-tertiary p-2 pt-0">
        <RequirementsCard
          className="opacity-100 bg-background"
          title="Alinhando expectativas"
          items={[
            "Conversa de diagnóstico para entender seu momento e travas rumo ao mercado internacional",
            "Recomendação prática baseada no método GO GLOBAL",
            "Sem promessas irreais; Se houver fit, mostramos os caminhos (BASE e PSP)",
          ]}
        />

        <RequirementsCard
          className="opacity-100 bg-background"
          title="Checklist (5 min)"
          items={[
            "Ambiente silencioso + fones",
            "Tenha LinkedIn, GitHub e CV abertos",
            "Pense em 1–2 metas para 90 dias",
            "Teste câmera/áudio 2 min antes",
          ]}
        />
      </section>

      {/* Testimonials stays server-side */}
      <Testimonials
        title={
          <>
            <span className="font-ivy">Resultados</span> que falam por si
          </>
        }
        preTitle="Confira alguns depoimentos de quem já passou pela Borderless Coding"
      />

      {/* Video block (server-safe) */}
      <section className="mt-16 grid md:grid-cols-2 gap-2 items-stretch pb-24">
        <div className="rounded-md overflow-hidden border border-zinc-800 bg-zinc-950">
          <div className="aspect-video">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/L30q6sUlWpk"
              title="Borderless Coding - Conteúdo recomendado"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        </div>

        <div className="rounded-md bg-dback p-6 flex flex-col justify-center bg-tertiary">
          <h3 className="text-xl font-semibold">
            Antes da call, assista a este conteúdo
          </h3>
          <p className="mt-2 text-zinc-300">
            Vai te dar contexto do nosso processo e desbloquear ações práticas.
            Assim, usamos a call para decisões estratégicas.
          </p>
          <ExternalLink
            target="_blank"
            href={"https://www.youtube.com/@Yuri-Pereira-Tech"}
            className="mt-4"
          >
            Ir para o canal
          </ExternalLink>
        </div>
      </section>
    </div>
  );
}
