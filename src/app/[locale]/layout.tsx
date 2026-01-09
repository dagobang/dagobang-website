import { Metadata } from "next";
import { notFound } from "next/navigation";
import { NextIntlClientProvider, useMessages } from "next-intl";

import { ThemeProvider } from '@/components/ThemeProvider';
import { SUPPORTED_LOCALES } from "@/constants/locale";

import "@/styles/globals.css";

export async function generateMetadata(
  { params }: { params: { locale: string } }
): Promise<Metadata> {
  const banner =
    params.locale === "zh"
      ? "/images/dgb-banner-zh.png"
      : "/images/dgb-banner-en.png";

  return {
    title: {
      template: "%s",
      default: "Dagobang 打狗棒",
    },
    applicationName: "Dagobang 打狗棒",
    description: "0.1% Fee Meme Trading Tool",
    authors: {
      name: "Dagobang",
      url: "https://github.com/dagobang/dagobang-website",
    },
    icons: "/favicon.ico",
    openGraph: {
      type: "website",
      url: "https://dagobang.vercel.app",
      title: "Dagobang 打狗棒",
      description: "0.1% Fee Meme Trading Tool",
      siteName: "Dagobang 打狗棒",
      images: [
        {
          url: banner,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      site: "https://dagobang.vercel.app",
      creator: "@SeasonsRichs",
      title: {
        template: "%s",
        default: "Dagobang 打狗棒",
      },
      images: banner,
    },
  };
}


export default function LocaleLayout({
  children,
  params: { locale }
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {

  // Validate that the incoming `locale` parameter is valid
  if (!SUPPORTED_LOCALES.includes(locale)) notFound();

  // Using internationalization in Client Components
  const messages = useMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className="bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white">
        <NextIntlClientProvider
          locale={locale}
          messages={messages}>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
          </ThemeProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
