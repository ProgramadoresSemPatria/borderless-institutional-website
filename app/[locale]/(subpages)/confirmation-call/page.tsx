// app/[locale]/confirmation-call/page.tsx
import ConfirmationClient from "@/app/components/sections/confirmation-call/ConfirmationClient";
import { Testimonials } from "@/app/components/sections/homepage/Testimonials";
import { ExternalLink } from "@/app/components/ui/ExternalLink";
import { RequirementsCard } from "@/app/components/ui/RequirementsCard";

const val = (q: Record<string, string | string[] | undefined>, k: string) =>
  Array.isArray(q[k]) ? (q[k] as string[])[0] : (q[k] as string | undefined);

function normalizeWaFromPhone(raw?: string) {
  if (!raw) return undefined;
  const digits = raw.replace(/\D/g, "");
  const withCountry = digits.startsWith("55") ? digits : `55${digits}`;
  return `https://wa.me/${withCountry}`;
}

function parseDateSafe(s?: string) {
  if (!s) return undefined;
  let d = new Date(s);
  if (!Number.isNaN(d.getTime())) return d;
  d = new Date(s.replace(" ", "T"));
  if (!Number.isNaN(d.getTime())) return d;
  if (!/[zZ]|[+-]\d{2}:?\d{2}$/.test(s)) {
    d = new Date(s.replace(" ", "T") + "Z");
    if (!Number.isNaN(d.getTime())) return d;
  }
  return undefined;
}

function formatWhen(dateISO?: string, tz?: string) {
  const d = parseDateSafe(dateISO);
  const timeZone = tz || "UTC";
  if (!d) return null;
  try {
    return new Intl.DateTimeFormat("pt-BR", {
      timeZone,
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
  searchParams?: Promise<Record<string, string | string[] | undefined>>;
}) {
  const searchParams: Record<string, string | string[] | undefined> =
    (await props.searchParams) ?? {};

  const name = val(searchParams, "name") ?? "";
  const email = val(searchParams, "email") ?? "";
  const phone = val(searchParams, "phone") ?? "";
  const dateISO = val(searchParams, "date");
  const tz = val(searchParams, "tz") ?? "UTC";
  const joinUrl = val(searchParams, "joinUrl") ?? "#";
  const rescheduleUrl = val(searchParams, "rescheduleUrl") ?? "#";
  const calendarUrl = val(searchParams, "calendarUrl");
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
