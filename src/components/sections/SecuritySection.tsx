'use client';
import { Shield, ServerOff, EyeOff, Zap, AlertTriangle, CheckCircle2 } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function SecuritySection() {
  const t = useTranslations('Security');

  const items = [
    {
      key: 'nonCustodial',
      icon: Shield,
      color: 'text-emerald-600 dark:text-emerald-400',
      bg: 'bg-emerald-50 dark:bg-emerald-500/10',
      border: 'border-emerald-100 dark:border-emerald-500/20'
    },
    {
      key: 'noServer',
      icon: ServerOff,
      color: 'text-blue-600 dark:text-blue-400',
      bg: 'bg-blue-50 dark:bg-blue-500/10',
      border: 'border-blue-100 dark:border-blue-500/20'
    },
    {
      key: 'leastPrivilege',
      icon: EyeOff,
      color: 'text-purple-600 dark:text-purple-400',
      bg: 'bg-purple-50 dark:bg-purple-500/10',
      border: 'border-purple-100 dark:border-purple-500/20'
    },
    {
      key: 'silentSign',
      icon: Zap,
      color: 'text-amber-600 dark:text-amber-400',
      bg: 'bg-amber-50 dark:bg-amber-500/10',
      border: 'border-amber-100 dark:border-amber-500/20'
    },
  ];

  return (
    <section id="security" className="w-full py-10 bg-white dark:bg-black overflow-hidden">
      <div className="container mx-auto max-w-5xl px-4">

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
            <Shield className="w-3 h-3" />
            {t('eyebrow')}
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white leading-tight mb-4">
            {t('title')}
          </h2>
          <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
            {t('intro')}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-4 mb-12">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.key} className="p-6 md:p-8 rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 hover:border-emerald-500/30 transition-all group">
                <div className="flex items-start gap-4">
                  <div className={`shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${item.bg} ${item.color}`}>
                    <Icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2 text-zinc-900 dark:text-white">
                      {t(`${item.key}.title` as any)}
                    </h3>
                    <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {t(`${item.key}.body` as any)}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="rounded-2xl bg-zinc-50 dark:bg-zinc-900 border border-zinc-100 dark:border-zinc-800 p-6 md:p-8 mb-10">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="shrink-0 md:w-56">
              <h3 className="text-lg font-bold text-zinc-900 dark:text-white mb-2">
                {t('metamaskCompare.title' as any)}
              </h3>
              <p className="text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {t('metamaskCompare.intro' as any)}
              </p>
            </div>
            <div className="flex-1 space-y-3">
              {[0, 1, 2].map((i) => (
                <div key={i} className="flex gap-3 text-sm text-zinc-700 dark:text-zinc-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                  <span>{t(`metamaskCompare.items.${i}` as any)}</span>
                </div>
              ))}
              <p className="pt-1 text-sm text-zinc-500 dark:text-zinc-400">
                {t('metamaskCompare.summary' as any)}
              </p>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-red-200 dark:bg-red-900/10 border border-red-100 dark:border-red-900/20 p-6 md:p-8">
          <div className="flex flex-col md:flex-row gap-6 md:gap-10">
            <div className="shrink-0 md:w-50">
              <div className="flex items-center gap-3 mb-2 text-red-600 dark:text-red-400">
                <AlertTriangle size={24} />
                <h3 className="text-lg font-bold">
                  {t('riskWarning.title' as any)}
                </h3>
              </div>
              <div className="w-12 h-1 bg-red-200 dark:bg-red-900/40 rounded-full" />
            </div>

            <div className="flex-1">
              <ul className="grid sm:grid-cols-1 gap-3">
                {[0, 1, 2, 3, 4, 5].map((i) => (
                  <li key={i} className="flex gap-3 text-sm text-red-800 dark:text-red-300">
                    <span className="text-red-400 shrink-0 mt-1">•</span>
                    <span>{t(`riskWarning.items.${i}` as any)}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
