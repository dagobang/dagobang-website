import { useLocale } from "next-intl";
import { useTransition } from "react";

import { usePathname, useRouter } from "@/libs/i18nNavigation";

export function LanguageSwitcher() {
  const locale = useLocale();
  const otherLocale = locale === "zh" ? "en" : "zh";
  const router = useRouter();
  const pathname = usePathname();
  const [, startTransition] = useTransition();

  function onSelectChange(key: string) {
    const nextLocale = key;

    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
      router.refresh();
    });
  }

  return (
    <div className="flex items-center rounded-full border border-zinc-700 bg-zinc-900 text-xs">
      <button
        onClick={() => onSelectChange('zh')}
        className={`px-2 py-1 ${locale === "zh"
          ? "bg-zinc-100 text-black"
          : "text-zinc-300 hover:text-emerald-400"
          } rounded-full`}
      >
        中文
      </button>
      <button
        onClick={() => onSelectChange('en')}
        className={`px-2 py-1 ${locale === "en"
          ? "bg-zinc-100 text-black"
          : "text-zinc-300 hover:text-emerald-400"
          } rounded-full`}
      >
        EN
      </button>
      <span className="sr-only">Switch language from {locale} to {otherLocale}</span>
    </div>
  );
}
