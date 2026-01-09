import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

import Footer from '@/components/Footer';
import Header from '@/components/Header';

export default function PrivacyPage({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations('Privacy');

  return (
    <main className="min-h-screen flex flex-col items-center justify-between bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-white">
      <Header />
      <div className="w-full max-w-3xl px-4 sm:px-6 lg:px-8 ">

        <section className="mt-20 mb-16">
          <h1 className="text-2xl sm:text-3xl font-semibold mb-4">
            {t('title')}
          </h1>
          <p className="text-sm text-slate-500 mb-8">
            {t('updatedAt')}
          </p>
          <p className="text-base text-slate-700 dark:text-slate-200 mb-6">
            {t('intro')}
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">
            {t('section1.title')}
          </h2>
          <p className="text-base text-slate-700 dark:text-slate-200 mb-4">
            {t('section1.body')}
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">
            {t('section2.title')}
          </h2>
          <p className="text-base text-slate-700 dark:text-slate-200 mb-4">
            {t('section2.body')}
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">
            {t('section3.title')}
          </h2>
          <p className="text-base text-slate-700 dark:text-slate-200 mb-4">
            {t('section3.body')}
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">
            {t('section4.title')}
          </h2>
          <p className="text-base text-slate-700 dark:text-slate-200 mb-4">
            {t('section4.body')}
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">
            {t('section5.title')}
          </h2>
          <p className="text-base text-slate-700 dark:text-slate-200 mb-4">
            {t('section5.body')}
          </p>

          <h2 className="text-xl font-semibold mt-8 mb-3">
            {t('section6.title')}
          </h2>
          <p className="text-base text-slate-700 dark:text-slate-200 mb-4">
            {t('section6.body')}
          </p>
        </section>
      </div>
      <Footer />
    </main>
  );
}
