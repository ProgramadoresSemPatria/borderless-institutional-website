import { ReactNode } from "react";

export interface Testimonial {
  img: string;
  name: string;
  role: string;
  testimony?: ReactNode;
  iframeSrc?: string;
  description?: string;
}

export const testimonials: Testimonial[] = [
  {
    img: "/testimonials/arthur.png",
    name: "Arthur Duarte",
    role: "Mentorado da Base",
    testimony: (
      <div>
        Forget the stock market - invest your money in access to people and
        knowledge instead.
        <br />
        <br />
        Last year I paid to join a coding community with fellow brazilian
        developers, and it completely changed my life.
        <br />
        <br />
        Being around different people who all had the same goals and were
        looking for the same things made me realize how freaking important
        community and the right guidance really are.
        <br />
        <br />
        I genuinely feel like paying for access to people is the best investment
        you can make. There&apos;s nothing better to do with your money,
        especially when you&apos;re just starting out.
        <br />
        <br />
        Put your money towards knowledge and access to people and places. Not
        the stock market, not bitcoin, not whatever else people tell you to
        invest in.
        <br />
        <br />
        So many good things have come out of this mentorship - and I wish to
        build something similar some day.
        <br />
        <br />
        Community and guidance are everything.
      </div>
    ),
  },
  {
    img: "/testimonials/thiago.png",
    name: "Thiago Valverde",
    role: "Mentorado da PSP",
    testimony: (
      <div>
        Nome: Thiago Valverde de Souza <br />
        Vaga anterior: Backend Developer <br />
        Quanto ganhava antes da mentoria: USD 13k <br />
        Vaga Atual: Web3 Developer / Backend Developer <br />
        Salário atual: $ 22K <br />
        Experiência: 24 anos <br />
        Tempo de mentoria: 1 mes <br />
        <br />
        Estratégias: Vaga através de aplicações. Criei alguns repos mas não
        compartilhei no code up ainda.
        <br />
        <br />4 horas por dia de aplicação com curriculo e cover letter
        personalizados.
        <br />
        <br /> Estudo de Web3, Alinhamento do discurso para conseguir uma vaga
        fora do meu dominio - Self learner falando sobre os outros career
        shifts, passos e etc.
        <br /> <br />
        Em 1 mês foram 19 processos onde passei do initial screening, 3 offers
        recusadas pois não eram do rate desejado ou eram web2
      </div>
    ),
  },
  {
    img: "/testimonials/arthur.png",
    name: "Caíque",
    role: "Mentorado da PSP",
    iframeSrc: "https://player.vimeo.com/video/1108946498?h=3f9f4bb648&api=1",
    description:
      "Saiu de 8k BRL do Brasil para mais de 60k BRL (11k usd/month) em 6 meses.",
  },
  {
    img: "/testimonials/arthur.png",
    name: "Lucas",
    role: "Mentorado da PSP",
    iframeSrc: "https://player.vimeo.com/video/1108946473?h=669d1e58ee&api=1",
    description:
      "Saiu de 3k BRL do Brasil para mais de 25k BRL (5k usd/month + equity em uma startup no AZ, USA).",
  },
];
