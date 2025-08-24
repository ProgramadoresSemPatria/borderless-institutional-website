import type { Metadata } from "next";
import { NextIntlClientProvider } from "next-intl";
import { Montserrat } from "next/font/google";
import localFont from "next/font/local";
import { GSAPWrapper } from "./components/features/wrappers/GSAPWrapper";
import { Footer } from "./components/layout/Footer";
import { Header } from "./components/layout/Header";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

const ivyPresto = localFont({
  src: "../public/font/ivyPresto.ttf",
  variable: "--font-ivy",
});

export const metadata: Metadata = {
  title: "Borderless Coding",
  description: "Global tech starts here",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
