"use client";

import { AnimatedText } from "@/app/components/ui/AnimatedText";
import { LinkWithUtmParams } from "@/app/components/ui/LinkWithUtmParams";
import { SectionHeader } from "@/app/components/ui/SectionHeader";
import { Link } from "@/i18n/navigation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ArrowUpRight, Star } from "lucide-react";
import Image from "next/image";
import { useMemo, useState, useEffect } from "react";

export default function BioPage() {
  useGSAP(() => {
    gsap.fromTo(
      ".yuri-card",
      { y: "20%", opacity: 0 },
      {
        y: 0,
        opacity: 1,
        ease: "back.inOut",
        duration: 0.8,
        stagger: 0.1,
      }
    );
  });

  // --- Simple A/B ordering (sticky per session) ---
  // We randomize which CTA card appears first (Quiz vs Avaliador)
  const [order, setOrder] = useState<"quiz-first" | "evaluator-first">(
    "quiz-first"
  );
  useEffect(() => {
    const key = "bio-cta-order";
    const saved =
      typeof window !== "undefined" ? window.sessionStorage.getItem(key) : null;
    if (saved === "quiz-first" || saved === "evaluator-first") {
      setOrder(saved);
      return;
    }
    const roll = Math.random() < 0.5 ? "quiz-first" : "evaluator-first";
    setOrder(roll);
    try {
      window.sessionStorage.setItem(key, roll);
    } catch (_) {}
  }, []);

  const ctas = useMemo(() => {
    const quiz = (
      <LinkWithUtmParams
        href="https://psp.borderlesscoding.com/quiz?utm_campaign=ig-bio"
        target="_blank"
        className="yuri-card"
      >
        <div className="bg-tertiary rounded-xl p-5 md:p-6 border border-white/5">
          <div className="flex items-center gap-2 text-xs font-semibold text-green-400">
            <span className="bg-green-500/15 text-green-300 px-2 py-1 rounded">
              QUIZ GRATUITO
            </span>
          </div>
          <h3 className="mt-4 text-lg md:text-xl font-semibold">
            Está pronto para vagas internacionais?
          </h3>
          <p className="mt-2 text-gray text-sm md:text-base leading-relaxed">
            Descubra em 90 segundos seu nível atual para oportunidades globais e
            receba um plano de próximos passos.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-gray">
            <span className="bg-[#212121] text-white/80 px-2.5 py-1 rounded">
              Sem cadastro
            </span>
            <span className="bg-[#212121] text-white/80 px-2.5 py-1 rounded">
              Resultado imediato
            </span>
          </div>
          <div className="flex-center rounded-md cursor-pointer bg-primary text-white w-fit p-1 pl-3 space-x-2 hover:bg-primary/90 transition-colors duration-150 mt-5">
            <p className="text-sm font-medium">Fazer o Quiz</p>
            <div className="bg-tertiary rounded-sm p-2.5">
              <ArrowUpRight className="size-3.5" />
            </div>
          </div>
        </div>
      </LinkWithUtmParams>
    );

    const evaluator = (
      <LinkWithUtmParams
        href="https://ac.borderlesscoding.com/s1/?utm_campaign=ig-bio"
        target="_blank"
        className="yuri-card"
      >
        <div className="bg-tertiary rounded-xl p-5 md:p-6 border border-white/5">
          <div className="flex items-center gap-2 text-xs font-semibold text-green-400">
            <span className="bg-green-500/15 text-green-300 px-2 py-1 rounded">
              ANÁLISE GRATUITA
            </span>
          </div>
          <h3 className="mt-4 text-lg md:text-xl font-semibold">
            Avaliador GitHub & LinkedIn
          </h3>
          <p className="mt-2 text-gray text-sm md:text-base leading-relaxed">
            Veja se seu perfil é competitivo no mercado internacional. Receba um
            raio-x com pontos fortes, gaps e ações práticas.
          </p>
          <div className="mt-4 flex flex-wrap items-center gap-3 text-xs text-gray">
            <span className="bg-[#212121] text-white/80 px-2.5 py-1 rounded">
              5 minutos
            </span>
            <span className="bg-[#212121] text-white/80 px-2.5 py-1 rounded">
              Checklist objetivo
            </span>
          </div>
          <div className="flex-center rounded-md cursor-pointer bg-primary text-white w-fit p-1 pl-3 space-x-2 hover:bg-primary/90 transition-colors duration-150 mt-5">
            <p className="text-sm font-medium">Avaliar meu perfil</p>
            <div className="bg-tertiary rounded-sm p-2.5">
              <ArrowUpRight className="size-3.5" />
            </div>
          </div>
        </div>
      </LinkWithUtmParams>
    );

    return order === "quiz-first" ? [quiz, evaluator] : [evaluator, quiz];
  }, [order]);

  return (
    <section className="pt-36 pb-[10svh] flex flex-col gap-12">
      {/* Header */}
      <header className="flex flex-col items-center text-center gap-4">
        <Image
          src="/yuri-profile.png"
          alt="Foto de perfil de Yuri Pereira"
          width={128}
          height={128}
          className="size-24 rounded-full object-cover"
          priority
        />
        <AnimatedText as="h1" className="text-2xl md:text-3xl font-semibold">
          Yuri Pereira
        </AnimatedText>
        <div className="text-gray text-base max-w-3xl text-pretty space-y-4">
          <AnimatedText>
            Ex-Software Engineer no Vale do Silício e Founder da Borderless
            Coding, sou poliglota (a caminho da sexta língua), escritor e mentor
            dedicado a abrir caminhos globais para profissionais de tecnologia.
          </AnimatedText>

          <AnimatedText>
            Tendo vivido em 14 países, aprendi que a verdadeira liberdade nasce
            da combinação entre conhecimento técnico, visão estratégica e a
            capacidade real de escolher onde viver.
            <span className="text-white font-medium">
              &nbsp; Opcionalidade não é privilégio, é construção.
            </span>
          </AnimatedText>

          <AnimatedText>
            Hoje ajudo devs e tech professionals a romper barreiras, conquistar
            ofertas internacionais e multiplicar seu valor no mercado. Mais do
            que salários em moedas fortes (R$30k a R$60k por mês), minha missão
            é formar uma nova geração de profissionais globais: independentes,
            reconhecidos e livres para viver sem fronteiras.
          </AnimatedText>
        </div>
      </header>

      {/* CTA Cards */}
      <div className="flex flex-col gap-4">
        {ctas.map((cta, index) => (
          <div key={index}>{cta}</div>
        ))}
      </div>

      {/* Livros */}
      <div className="space-y-8">
        <SectionHeader
          preTitle="Meus livros"
          title={
            <>
              Conheça <span className="font-ivy">minhas publicações</span>
            </>
          }
        />

        <LinkWithUtmParams
          href="https://link.borderlesscoding.com/guia-auto-didata-998112"
          target="_blank"
        >
          <div className="bg-tertiary rounded-md p-2 flex gap-8 border border-white/5 flex-col max-w-[15rem]">
            <Image
              src="/yuri-book.png"
              alt="Capa do livro O Guia Definitivo do Autodidata"
              width={500}
              height={704}
              className="w-full h-full rounded-md object-cover"
              priority
            />

            <div className="space-y-2 px-2 pb-2">
              <div className="flex gap-1 text-yellow-400">
                {new Array(5).fill(undefined).map((_, idx) => (
                  <Star className="fill-yellow-400 size-4" key={idx} />
                ))}
              </div>
              <div>
                <h4 className="font-semibold">O Guia Autodidata</h4>
                <p className="text-sm text-gray">Yuri Pereira</p>
              </div>
            </div>
          </div>
        </LinkWithUtmParams>
      </div>

      {/* Outros links */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Outros Links</h3>
        <LinkWithUtmParams
          href="/psp-mentorship"
          className="flex items-center justify-between w-full bg-tertiary rounded-xl border border-white/5 p-4 hover:opacity-80 transition-opacity"
        >
          <span>Mentoria PSP</span>
          <span className="text-white/60">
            <ArrowUpRight />
          </span>
        </LinkWithUtmParams>
        <LinkWithUtmParams
          href="/psp-mentorship"
          className="flex items-center justify-between w-full bg-tertiary rounded-xl border border-white/5 p-4 hover:opacity-80 transition-opacity"
        >
          <span>Mentoria Base</span>
          <span className="text-white/60">
            <ArrowUpRight />
          </span>
        </LinkWithUtmParams>
        <LinkWithUtmParams
          href="/for-founders-and-investors"
          className="flex items-center justify-between w-full bg-tertiary rounded-xl border border-white/5 p-4 hover:opacity-80 transition-opacity"
        >
          <span>Para founders e investidores</span>
          <span className="text-white/60">
            <ArrowUpRight />
          </span>
        </LinkWithUtmParams>
        <LinkWithUtmParams
          href="/contact"
          className="flex items-center justify-between w-full bg-tertiary rounded-xl border border-white/5 p-4 hover:opacity-80 transition-opacity"
        >
          <span>Contato</span>
          <span className="text-white/60">
            <ArrowUpRight />
          </span>
        </LinkWithUtmParams>
      </div>
    </section>
  );
}
