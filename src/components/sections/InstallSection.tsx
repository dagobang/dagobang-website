'use client';

import { Download, Settings, Play, CheckCircle, ArrowRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function InstallSection() {
  const t = useTranslations('Install');

  const steps = [
    { icon: Download, key: 'step1' },
    { icon: Settings, key: 'step2' },
    { icon: Play, key: 'step3' },
    { icon: CheckCircle, key: 'step4' }
  ];

  return (
    <section id="install" className="w-full py-10 bg-zinc-200 dark:bg-zinc-900/50">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 dark:text-white mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400">
            {t('subtitle')}
          </p>
        </div>

        <div className="rounded-[2rem] bg-white dark:bg-black border border-zinc-200 dark:border-zinc-800 shadow-2xl overflow-hidden">
          <div className="grid md:grid-cols-2">

            {/* Steps List */}
            <div className="p-6 md:p-10 space-y-6">
              {steps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <div key={step.key} className="flex gap-4 group">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400 flex items-center justify-center font-bold text-base group-hover:scale-110 transition-transform">
                        {index + 1}
                      </div>
                      {index !== steps.length - 1 && <div className="w-0.5 flex-1 bg-zinc-100 dark:bg-zinc-800 my-2" />}
                    </div>
                    <div className="pb-6">
                      <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-1 flex items-center gap-2">
                        {t(`${step.key}.title` as any)}
                        <Icon size={16} className="text-zinc-400" />
                      </h3>
                      <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                        {t(`${step.key}.body` as any)}
                      </p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Action Panel */}
            <div className="bg-zinc-900 dark:bg-zinc-900/50 p-8 md:p-10 flex flex-col justify-center items-center text-center relative overflow-hidden">
              {/* Background Glow */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/20 rounded-full blur-3xl" />

              <div className="relative z-10 max-w-sm">
                <div className="mb-6 inline-flex p-3 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
                  <Download className="w-10 h-10 text-white" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">
                  {t('ctaPanel.title' as any)}
                </h3>
                <p className="text-zinc-400 mb-6 text-sm">
                  {t('ctaPanel.body' as any)}
                </p>
                <button className="w-full py-3 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-white font-bold text-base transition-all shadow-lg shadow-emerald-500/25 active:scale-95">
                  {t('step1.title' as any)}
                </button>
                <p className="mt-4 text-xs text-zinc-500">
                  {t('ctaPanel.support' as any)}
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
