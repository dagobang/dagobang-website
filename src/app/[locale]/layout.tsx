import { notFound } from "next/navigation";
import { NextIntlClientProvider, useMessages } from "next-intl";

import { ThemeProvider } from '@/components/ThemeProvider';
import { SUPPORTED_LOCALES } from "@/constants/locale";

import "@/styles/globals.css";


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