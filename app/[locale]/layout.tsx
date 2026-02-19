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
import Script from "next/script";

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
        <Script id="add_utm" strategy="lazyOnload">
          {`(function () {
            let parametros = ["utm_source"];
            const url = new URL(window.location.href);
            const params = new URLSearchParams(url.search);

            for (const [key] of params) {
                if (!parametros.includes(key)) {
                    parametros.push(key);
                }
            }

            const urlParamsCapt = new URLSearchParams(window.location.search);
            const urlParamsCaptReferrer = new URLSearchParams(document.referrer.split('?')[1] || '');
            let utms = {};

            parametros.forEach(el => {
                if (el === "utm_source") {
                    utms[el] = urlParamsCapt.get(el) ?? (document.referrer ? (urlParamsCaptReferrer.get(el) ?? new URL(document.referrer).hostname) : "direto");
                } else {
                    utms[el] = urlParamsCapt.get(el) ?? (urlParamsCaptReferrer.get(el) ?? "");
                }
            });

            let scks = Object.values(utms).filter(value => value !== "");

            let currentSckValues = [];
            if (urlParamsCapt.get('sck')) {
                currentSckValues = urlParamsCapt.get('sck').split('|');
            }
            scks = scks.filter(value => !currentSckValues.includes(value));

            const updateLinks = (el, elURL) => {
                const elSearchParams = new URLSearchParams(elURL.search);
                let modified = false;
                for (let key in utms) {
                    if (!elSearchParams.has(key)) {
                        elSearchParams.append(key, utms[key]);
                        modified = true;
                    }
                }
                if (!elSearchParams.has('sck') && scks.length > 0) {
                    elSearchParams.append('sck', scks.join('|'));
                    modified = true;
                }
                if (modified) {
                    return elURL.origin + elURL.pathname + "?" + elSearchParams.toString();
                }
                return el.href;
            };

            document.querySelectorAll('a').forEach(el => {
                if (el.protocol !== 'http:' && el.protocol !== 'https:') return;
                const elURL = new URL(el.href);
                if (!elURL.hash) {
                    el.href = updateLinks(el, elURL);
                }
            });

            document.querySelectorAll('iframe').forEach(iframe => {
                let actualSrc = iframe.hasAttribute('data-src') ? iframe.getAttribute('data-src') : iframe.src;
                if (actualSrc) {
                    const iframeURL = new URL(actualSrc);
                    if (iframe.hasAttribute('data-src')) {
                        iframe.setAttribute('data-src', updateLinks(iframe, iframeURL));
                    } else {
                        iframe.src = updateLinks(iframe, iframeURL);
                    }
                }
            });

            })();`}
        </Script>

        <Script id="clarity_script" strategy="beforeInteractive">
          {`(function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
          })(window, document, "clarity", "script", "uxzd86pivh");`}
        </Script>
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
