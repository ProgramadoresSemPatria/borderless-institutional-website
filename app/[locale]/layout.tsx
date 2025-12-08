import { routing } from "@/i18n/routing";
import { GoogleTagManager } from "@next/third-parties/google";
import type { Metadata } from "next";
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
  metadataBase: new URL("https://www.borderlesscoding.net"),
  openGraph: {
    images: [
      {
        url: "/thumbnail.png",
        alt: "Borderless Coding Thumbnail",
        width: 579,
        height: 385,
      },
    ],
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
