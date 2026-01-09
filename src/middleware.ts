import createMiddleware from "next-intl/middleware";

import { DEFAULT_LOCALE, LOCALE_PREFIX, SUPPORTED_LOCALES } from "@/constants/locale";

export default createMiddleware({
  locales: SUPPORTED_LOCALES,
  localePrefix: LOCALE_PREFIX,
  defaultLocale: DEFAULT_LOCALE,
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
