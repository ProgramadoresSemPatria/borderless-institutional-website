// app/[locale]/confirmation-call/page.tsx
import { ExternalLink, ShieldCheck, CheckCircle2, ThumbsUp } from "lucide-react";
import { Testimonials } from "@/app/components/sections/homepage/Testimonials";
import ConfirmationClient from "@/app/components/sections/confirmation-call/ConfirmationClient";

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
  const searchParams: Record<string, string | string[] | undefined> = (await props.searchParams) ?? {};

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
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-950 text-zinc-100">
      {/* Header (server-safe) */}
      <header className="max-w-xl mx-auto px-4 pt-10 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-white flex items-center justify-center text-black font-bold">BC</div>
            <span className="text-lg font-semibold tracking-tight">Borderless Coding</span>
          </div>
          <a
            href="https://www.borderlesscoding.com"
            target="_blank"
            className="text-sm opacity-70 hover:opacity-100 flex items-center gap-1"
          >
            Site oficial <ExternalLink className="h-4 w-4" />
          </a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 pb-24">
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
        <section className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl bg-zinc-900/40 border border-zinc-800 p-8">
            <h2 className="text-xl font-semibold">Alinhando expectativas</h2>
            <ul className="mt-4 space-y-3 text-zinc-300">
              <li className="flex gap-3"><ShieldCheck className="h-5 w-5 mt-0.5" /> Conversa de diagnóstico para entender seu momento e travas rumo ao mercado internacional.</li>
              <li className="flex gap-3"><ShieldCheck className="h-5 w-5 mt-0.5" /> Recomendação prática baseada no método <span className="font-semibold">GO GLOBAL</span>.</li>
              <li className="flex gap-3"><ShieldCheck className="h-5 w-5 mt-0.5" /> Sem promessas irreais; se houver fit, mostramos os caminhos (BASE e PSP).</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-zinc-900/40 border border-zinc-800 p-8">
            <h2 className="text-xl font-semibold">Checklist (5 min)</h2>
            <ul className="mt-4 space-y-3 text-zinc-300">
              <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 mt-0.5" /> Ambiente silencioso + fones.</li>
              <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 mt-0.5" /> Tenha LinkedIn, GitHub e CV abertos.</li>
              <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 mt-0.5" /> Pense em 1–2 metas para 90 dias.</li>
              <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 mt-0.5" /> Teste câmera/áudio 2 min antes.</li>
            </ul>
          </div>
        </section>

        {/* Testimonials stays server-side */}
        <section className="mt-14">
          <h2 className="text-xl font-semibold">Resultados que falam por si</h2>
          <p className="text-zinc-300 mt-2">Confira alguns depoimentos de quem já passou pela Borderless Coding.</p>
        </section>
        <Testimonials />

        {/* Video block (server-safe) */}
        <section className="mt-16 grid md:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950">
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
          <div className="rounded-3xl bg-zinc-900/40 border border-zinc-800 p-8 flex flex-col justify-center">
            <h3 className="text-xl font-semibold">Antes da call, assista a este conteúdo</h3>
            <p className="mt-2 text-zinc-300">
              Vai te dar contexto do nosso processo e desbloquear ações práticas. Assim, usamos a call para decisões estratégicas.
            </p>
            <a
              href="https://www.youtube.com/@Yuri-Pereira-Tech"
              target="_blank"
              className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white text-black px-4 py-2 font-medium hover:opacity-90"
            >
              <ThumbsUp className="h-4 w-4" /> Ir para o canal
            </a>
          </div>
        </section>
      </main>
    </div>
  );
}
