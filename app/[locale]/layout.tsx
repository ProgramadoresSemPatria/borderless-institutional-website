import { routing } from "@/i18n/routing";
import { GoogleTagManager } from "@next/third-parties/google";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { setRequestLocale } from "next-intl/server";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { Toaster } from "sonner";
import { Footer } from "../components/layout/Footer";
import { Header } from "../components/layout/Header";
import { GSAPWrapper } from "../components/misc/GSAPWrapper";
import "../globals.css";
import { Suspense } from "react";
import { createMetadata } from "../lib/seo";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const ivyPresto = localFont({
  src: "../../public/font/ivyPresto.ttf",
  variable: "--font-ivy",
});

export async function generateMetadata(props: {
  params: Promise<{ locale: string }>;
}) {
  const params = await props.params;
  return createMetadata({ locale: params.locale });
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <body
        className={`${montserrat.className} ${ivyPresto.variable} antialiased`}
      >
        <Suspense>
          <NextIntlClientProvider>
            <GSAPWrapper>
              <Header />
              {children}
              <Footer />
            </GSAPWrapper>
            <Toaster richColors className="select-none" closeButton />
          </NextIntlClientProvider>
        </Suspense>
      </body>
      <GoogleTagManager gtmId="GTM-TZWWWMPW" />
    </html>
  );
}
