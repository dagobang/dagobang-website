'use client';
import { useTranslations } from 'next-intl';

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="py-8 w-full border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-black text-center text-zinc-500 text-sm">
      <div className="container mx-auto px-4">
        <p>{t('rights')}</p>
      </div>
    </footer>
  );
}
