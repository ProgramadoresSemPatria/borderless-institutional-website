
'use client'

import { Testimonials } from "@/app/components/sections/homepage/Testimonials";
import { CalendarDays, Clock, Video, Copy, ExternalLink, ShieldCheck, CheckCircle2, ThumbsUp } from "lucide-react";
import { useMemo } from "react";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";


export default function Page() {
  const search = useSearchParams();

  const name = search.get("name") ?? "";
  const email = search.get("email") ?? "";
  const phone = search.get("phone") ?? "";
  const dateISO = search.get("date");
  const tz = search.get("tz") ?? Intl.DateTimeFormat().resolvedOptions().timeZone;
  const joinUrl = search.get("joinUrl") ?? "#";
  const rescheduleUrl = search.get("rescheduleUrl") ?? "#";
  const whatsappUrl = search.get("whatsappUrl") ?? "#";
  const calendarUrl = search.get("calendarUrl");

  const when = useMemo(() => {
    if (!dateISO) return null;
    try {
      const d = new Date(dateISO);
      const fmt = new Intl.DateTimeFormat("pt-BR", {
        timeZone: tz,
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
      });
      return fmt.format(d);
    } catch (e) {
      return null;
    }
  }, [dateISO, tz]);

  const copy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      alert("Link copiado");
    } catch (_) {}
  };

  return (
    <Suspense fallback={<div className="px-4 py-8"> Carregando… </div>}>
    <div className="min-h-screen bg-gradient-to-b from-black to-zinc-950 text-zinc-100">
      <header className="max-w-xl mx-auto px-4 pt-10 pb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-9 w-9 rounded-2xl bg-white flex items-center justify-center text-black font-bold">BC</div>
            <span className="text-lg font-semibold tracking-tight">Borderless Coding</span>
          </div>
          <a href="https://www.borderlesscoding.com" target="_blank" className="text-sm opacity-70 hover:opacity-100 flex items-center gap-1">Site oficial <ExternalLink className="h-4 w-4"/></a>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 pb-24">
        <section className="rounded-3xl bg-zinc-900/40 border border-zinc-800 p-8 md:p-12 shadow-xl">
          <h1>
            {name ? `Obrigado, ${name}!` : "Obrigado!"} Sua call foi confirmada ✅
          </h1>
          <p className="mt-3 text-zinc-300 max-w-3xl">Organizamos abaixo os próximos passos, expectativas e alguns conteúdos para você chegar preparado e tirar o máximo proveito da conversa.</p>

          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="rounded-2xl border border-zinc-800 p-6 bg-zinc-950/40">
              <div className="flex items-center gap-3">
                <CalendarDays className="h-5 w-5"/>
                <h3 className="font-medium">Quando</h3>
              </div>
              <p className="mt-2 text-zinc-300">{when ? when : "Data/horário serão enviados por e-mail."} {tz ? <span className="block text-xs opacity-70">Fuso: {tz}</span> : null}</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 p-6 bg-zinc-950/40">
              <div className="flex items-center gap-3">
                <Video className="h-5 w-5"/>
                <h3 className="font-medium">Acesso à sala</h3>
              </div>
              <div className="mt-2 flex flex-wrap items-center gap-2">
                <a href={joinUrl} target="_blank" className={`inline-flex items-center gap-2 rounded-xl px-3 py-2 text-sm font-medium ${joinUrl === "#" ? 'bg-zinc-800 text-zinc-400 cursor-not-allowed' : 'bg-white text-black hover:opacity-90'}`}>Entrar na sala <ExternalLink className="h-4 w-4"/></a>
                <button onClick={() => copy(joinUrl)} className="inline-flex items-center gap-2 rounded-xl border border-zinc-700 px-3 py-2 text-sm hover:bg-zinc-800"><Copy className="h-4 w-4"/>Copiar link</button>
              </div>
              <p className="text-xs text-zinc-400 mt-2">O link também é enviado por e-mail após a confirmação.</p>
            </div>
            <div className="rounded-2xl border border-zinc-800 p-6 bg-zinc-950/40">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5"/>
                <h3 className="font-medium">Precisa remarcar?</h3>
              </div>
              <a href={rescheduleUrl} target="_blank" className={`mt-2 inline-block text-sm underline underline-offset-4 ${rescheduleUrl==="#"? 'pointer-events-none text-zinc-500' : 'text-white/90 hover:text-white'}`}>Clique aqui para remarcar</a>
              <a href={whatsappUrl} target="_blank" className={`mt-2 block text-sm underline underline-offset-4 ${whatsappUrl==="#"? 'pointer-events-none text-zinc-500' : 'text-white/90 hover:text-white'}`}>Confirmar pelo WhatsApp</a>
            </div>
          </div>
        </section>

        <section className="mt-12 grid md:grid-cols-2 gap-8">
          <div className="rounded-3xl bg-zinc-900/40 border border-zinc-800 p-8">
            <h2 className="text-xl font-semibold">Alinhando expectativas</h2>
            <ul className="mt-4 space-y-3 text-zinc-300">
              <li className="flex gap-3"><ShieldCheck className="h-5 w-5 mt-0.5"/> Conversa de diagnóstico para entender seu momento e travas rumo ao mercado internacional.</li>
              <li className="flex gap-3"><ShieldCheck className="h-5 w-5 mt-0.5"/> Recomendação prática baseada no método <span className="font-semibold">GO GLOBAL</span>.</li>
              <li className="flex gap-3"><ShieldCheck className="h-5 w-5 mt-0.5"/> Sem promessas irreais; se houver fit, mostramos os caminhos (BASE e PSP).</li>
            </ul>
          </div>
          <div className="rounded-3xl bg-zinc-900/40 border border-zinc-800 p-8">
            <h2 className="text-xl font-semibold">Checklist (5 min)</h2>
            <ul className="mt-4 space-y-3 text-zinc-300">
              <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 mt-0.5"/> Ambiente silencioso + fones.</li>
              <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 mt-0.5"/> Tenha LinkedIn, GitHub e CV abertos.</li>
              <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 mt-0.5"/> Pense em 1–2 metas para 90 dias.</li>
              <li className="flex gap-3"><CheckCircle2 className="h-5 w-5 mt-0.5"/> Teste câmera/áudio 2 min antes.</li>
            </ul>
          </div>
        </section>

        <section className="mt-14">
          <h2 className="text-xl font-semibold">Resultados que falam por si</h2>
          <p className="text-zinc-300 mt-2">Confira alguns depoimentos de quem já passou pela Borderless Coding.</p>
        </section>
        <Testimonials />

    
        <section className="mt-16 grid md:grid-cols-2 gap-8 items-stretch">
          <div className="rounded-3xl overflow-hidden border border-zinc-800 bg-zinc-950">
            <div className="aspect-video">
              <iframe className="w-full h-full" src="https://www.youtube.com/embed/L30q6sUlWpk" title="Borderless Coding - Conteúdo recomendado" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
            </div>
          </div>
          <div className="rounded-3xl bg-zinc-900/40 border border-zinc-800 p-8 flex flex-col justify-center">
            <h3 className="text-xl font-semibold">Antes da call, assista a este conteúdo</h3>
            <p className="mt-2 text-zinc-300">Vai te dar contexto do nosso processo e desbloquear ações práticas. Assim, usamos a call para decisões estratégicas.</p>
            <a href="https://www.youtube.com/@Yuri-Pereira-Tech" target="_blank" className="mt-4 inline-flex items-center gap-2 rounded-xl bg-white text-black px-4 py-2 font-medium hover:opacity-90"><ThumbsUp className="h-4 w-4"/> Ir para o canal</a>
          </div>
        </section>
      </main>
    </div>
    </Suspense>
  );
}