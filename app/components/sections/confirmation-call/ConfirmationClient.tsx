// app/[locale]/confirmation-call/ConfirmationClient.tsx
"use client";

import { CalendarDays, Clock, Copy, ExternalLink, Video } from "lucide-react";
import { toast } from "sonner";
import { AnimatedText } from "../../ui/AnimatedText";

type Props = {
  name: string;
  email: string;
  phone: string;
  dateISO?: string;
  tz: string;
  joinUrl: string;
  rescheduleUrl: string;
  whatsappUrl: string;
  calendarUrl?: string;
  when: string | null;
};

export default function ConfirmationClient({
  name,
  tz,
  joinUrl,
  rescheduleUrl,
  whatsappUrl,
  calendarUrl,
  when,
}: Props) {
  const copy = async (text: string) => {
    try {
      if (typeof navigator !== "undefined" && navigator.clipboard?.writeText) {
        await navigator.clipboard.writeText(text);
      } else if (typeof document !== "undefined") {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.setAttribute("readonly", "");
        ta.style.position = "absolute";
        ta.style.left = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        document.execCommand("copy");
        document.body.removeChild(ta);
      }

      toast.success("Link copiado");
    } catch {}
  };

  return (
    <section>
      <header>
        <AnimatedText
          as="h1"
          className="text-2xl md:text-3xl 2xl:text-5xl font-semibold leading-tight"
        >
          {name ? `Obrigado, ${name}!` : "Obrigado!"} Sua call foi{" "}
          <span className="font-ivy">confirmada</span> ✅
        </AnimatedText>
        <AnimatedText className="mt-3 text-zinc-300 max-w-3xl">
          Organizamos abaixo os próximos passos, expectativas e alguns conteúdos
          para você chegar preparado e tirar o máximo proveito da conversa.
        </AnimatedText>
      </header>

      <div className="rounded-md bg-tertiary p-2 mt-8 grid md:grid-cols-3 gap-2">
        <div className="rounded-md bg-background p-5">
          <div className="flex items-center gap-3">
            <CalendarDays className="h-5 w-5" />
            <h3 className="font-medium">Quando</h3>
          </div>
          <p className="mt-2 text-zinc-300">
            {when ? when : "Data/horário serão enviados por e-mail."}{" "}
            {tz ? (
              <span className="block text-xs opacity-70">Fuso: {tz}</span>
            ) : null}
          </p>
        </div>

        <div className="rounded-md bg-background p-5">
          <div className="flex items-center gap-3">
            <Video className="h-5 w-5" />
            <h3 className="font-medium">Acesso à sala</h3>
          </div>
          <div className="mt-2 flex flex-wrap items-center gap-2">
            <a
              href={joinUrl}
              target="_blank"
              className={`inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium ${
                joinUrl === "#"
                  ? "bg-zinc-800 text-zinc-400 cursor-not-allowed"
                  : "bg-white text-black hover:opacity-90"
              }`}
            >
              Entrar na sala <ExternalLink className="h-4 w-4" />
            </a>
            <button
              onClick={() => copy(joinUrl)}
              className="inline-flex items-center gap-2 rounded-md border border-zinc-700 px-3 py-2 text-sm hover:bg-zinc-800"
            >
              <Copy className="h-4 w-4" />
              Copiar link
            </button>
          </div>
          <p className="text-xs text-zinc-400 mt-2">
            O link também é enviado por e-mail após a confirmação.
          </p>
        </div>

        <div className="rounded-md bg-background p-5">
          <div className="flex items-center gap-3">
            <Clock className="h-5 w-5" />
            <h3 className="font-medium">Precisa remarcar?</h3>
          </div>
          <a
            href={rescheduleUrl}
            target="_blank"
            className={`mt-2 inline-block text-sm underline underline-offset-4 ${
              rescheduleUrl === "#"
                ? "pointer-events-none text-zinc-500"
                : "text-white/90 hover:text-white"
            }`}
          >
            Clique aqui para remarcar
          </a>
          <a
            href={whatsappUrl}
            target="_blank"
            className={`mt-2 block text-sm underline underline-offset-4 ${
              whatsappUrl === "#"
                ? "pointer-events-none text-zinc-500"
                : "text-white/90 hover:text-white"
            }`}
          >
            Confirmar pelo WhatsApp
          </a>
          {/*
            Render the "Adicionar ao calendário" link only when a valid
            calendarUrl is provided. This keeps the UI clean if no calendar
            entry is available.

               {calendarUrl && (
            <a
              href={calendarUrl}
              target="_blank"
              className="mt-2 block text-sm underline underline-offset-4 text-white/90 hover:text-white"
            >
              Adicionar ao calendário
            </a>
          )}
          */}
        </div>
      </div>
    </section>
  );
}
