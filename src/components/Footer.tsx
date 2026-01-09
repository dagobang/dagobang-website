'use client';
import { useTranslations } from 'next-intl';

import { Link, usePathname } from '@/libs/i18nNavigation';

export default function Footer() {
  const t = useTranslations('Footer');
  const pathname = usePathname();

  return (
    <footer className="py-8 w-full border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black text-center text-zinc-500 text-sm">
      <div className="container mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-3">
        <p>{t('rights')}</p>
        <div className="flex items-center gap-4">
          <Link
            href={pathname.replace(/\/(en|zh)(\/|$)/, '/$1/').replace(/\/$/, '') + '/privacy'}
            className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors"
          >
            {t('privacy')}
          </Link>
        </div>
      </div>
    </footer>
  );
}
