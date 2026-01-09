import Link from "next/link";
import { useLocale } from "next-intl";

export function LanguageSwitcher() {
  const locale = useLocale();
  const otherLocale = locale === "zh" ? "en" : "zh";

  return (
    <div className="flex items-center rounded-full border border-zinc-700 bg-zinc-900 text-xs">
      <Link
        href={`/zh`}
        className={`px-2 py-1 ${locale === "zh"
          ? "bg-zinc-100 text-black"
          : "text-zinc-300 hover:text-emerald-400"
          } rounded-full`}
      >
        中文
      </Link>
      <Link
        href={`/en`}
        className={`px-2 py-1 ${locale === "en"
          ? "bg-zinc-100 text-black"
          : "text-zinc-300 hover:text-emerald-400"
          } rounded-full`}
      >
        EN
      </Link>
      <span className="sr-only">Switch language from {locale} to {otherLocale}</span>
    </div>
  );
}
