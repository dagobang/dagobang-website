'use client';

import { Percent, ShieldCheck, Zap, Network, Layers } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function FeaturesSection() {
  const t = useTranslations('Highlights');

  const items = [
    {
      key: "fees",
      icon: Percent,
      accent: "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/20",
    },
    {
      key: "nonCustodial",
      icon: ShieldCheck,
      accent: "bg-sky-50 dark:bg-sky-500/10 text-sky-700 dark:text-sky-300 border-sky-200 dark:border-sky-500/20",
    },
    // {
    //   key: "silentSign",
    //   icon: Zap,
    //   accent: "bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-500/20",
    // },
    {
      key: "rpc",
      icon: Network,
      accent: "bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300 border-amber-200 dark:border-amber-500/20",
    },
    {
      key: "overlay",
      icon: Layers,
      accent: "bg-rose-50 dark:bg-rose-500/10 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-500/20",
    },
  ];

  return (
    <section
      id="features"
      className="w-full py-10 bg-zinc-200 dark:bg-zinc-900/50"
    >
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-10 max-w-2xl">
          <p className="mb-4 text-sm font-bold uppercase tracking-widest text-emerald-600 dark:text-emerald-400">
            {t("eyebrow")}
          </p>
          <h2 className="mb-6 text-4xl font-bold tracking-tight text-zinc-900 dark:text-white sm:text-5xl">
            {t("title")}
          </h2>
          <p className="text-xl leading-relaxed text-zinc-600 dark:text-zinc-400">
            {t("description")}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 lg:grid-rows-2">
          {items.map((item, i) => {
            const Icon = item.icon;
            // Bento Grid Logic: First and Last items span 2 columns on desktop
            const isWide = i === 0 || i === 3;

            return (
              <div
                key={item.key}
                className={`group relative overflow-hidden rounded-[2rem] bg-zinc-300 p-6 transition-all hover:bg-zinc-400/50 dark:bg-zinc-800 dark:hover:bg-zinc-700/80 ${isWide ? 'md:col-span-2' : 'md:col-span-1'
                  }`}
              >
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="mb-8">
                    <div className="flex flex-row items-center justify-start gap-2 w-full">
                      <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl ${item.accent} bg-opacity-20`}>
                        <Icon size={28} className="text-current" />
                      </div>
                      <h3 className="text-2xl font-bold text-zinc-900 dark:text-white">
                        {t(`${item.key}.title` as any)}
                      </h3>
                    </div>
                    <p className="text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                      {(() => {
                        const raw = t(`${item.key}.body` as any);
                        if (item.key === 'fees') {
                          const parts = raw.split('0.1%');
                          return (
                            <>
                              {parts[0]}
                              <span className="font-bold text-lg text-emerald-700">0.1%</span>
                              {parts[1] ?? ''}
                            </>
                          );
                        }
                        return raw;
                      })()}
                    </p>
                  </div>

                  <div className="flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400">
                    <span className="h-1 w-1 rounded-full bg-emerald-500" />
                    {t(`${item.key}.note` as any)}
                  </div>
                </div>

                {/* Decorative Elements */}
                <div className="absolute -bottom-12 -right-12 h-64 w-64 rounded-full bg-gradient-to-br from-white/80 to-transparent blur-3xl dark:from-white/5 transition-transform group-hover:scale-110" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
