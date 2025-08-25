import { routing } from "@/i18n/routing";
import type { Metadata } from "next";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { GSAPWrapper } from "../components/features/wrappers/GSAPWrapper";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import "../globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const ivyPresto = localFont({
  src: "../../public/font/ivyPresto.ttf",
  variable: "--font-ivy",
});

export const metadata: Metadata = {
  title: "Borderless Coding",
  description: "Global tech starts here",
  icons: {
    icon: "/borderless-logo.svg",
  },
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: { locale: string };
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang="en">
      <body
        className={`${montserrat.className} ${ivyPresto.variable} antialiased`}
      >
        <NextIntlClientProvider>
          <GSAPWrapper>
            <Header />
            {children}
            <Footer />
          </GSAPWrapper>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
