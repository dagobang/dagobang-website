import { createNavigation } from "next-intl/navigation";

import { DEFAULT_LOCALE, LOCALE_PREFIX, SUPPORTED_LOCALES } from "@/constants/locale";

export const { Link, redirect, usePathname, useRouter } = createNavigation({
  locales: SUPPORTED_LOCALES,
  localePrefix: LOCALE_PREFIX,
  defaultLocale: DEFAULT_LOCALE,
});
