'use client';

import { FileText, LucideIcon, PenTool, Radio, Search, Server } from 'lucide-react';
import { useTranslations } from 'next-intl';

type Step = {
  icon: LucideIcon;
  key: string;
};

export function HowItWorksSection() {
  const t = useTranslations('HowItWorks');

  const steps: Step[] = [
    { icon: Search, key: 'step1' },
    { icon: Server, key: 'step2' },
    { icon: FileText, key: 'step3' },
    { icon: PenTool, key: 'step4' },
    { icon: Radio, key: 'step5' },
  ];

  return (
    <section id="how-it-works" className="py-14 w-full bg-zinc-50  dark:bg-black ">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="mb-24 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-zinc-900 dark:text-white tracking-tight">
            {t('title')}
          </h2>
          <div className="h-1 w-20 bg-emerald-500 mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px bg-zinc-200 dark:bg-zinc-900/50 hidden md:block" />

          <div className="space-y-8 md:space-y-16">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div key={step.key} className={`relative flex items-center md:justify-between flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                  
                  {/* Content Side */}
                  <div className={`w-full md:w-[45%] ${isEven ? 'md:text-right' : 'md:text-left'} text-center mb-8 md:mb-0`}>
                    <h3 className="text-2xl font-bold text-zinc-900 dark:text-white mb-3">
                      {t(`${step.key}.title` as any)}
                    </h3>
                    <p className="text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
                      {t(`${step.key}.body` as any)}
                    </p>
                  </div>

                  {/* Center Node */}
                  <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex h-12 w-12 items-center justify-center rounded-full bg-white dark:bg-zinc-900 border-4 border-zinc-50 dark:border-zinc-800 shadow-sm z-10">
                    <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{index + 1}</span>
                  </div>

                  {/* Icon Side */}
                  <div className={`w-full md:w-[45%] flex ${isEven ? 'justify-start' : 'justify-end'} justify-center`}>
                    <div className="h-32 w-32 rounded-[2rem] bg-white dark:bg-zinc-800 border border-zinc-100 dark:border-zinc-700 flex items-center justify-center shadow-lg hover:scale-105 transition-transform duration-300 group">
                      <Icon className="text-zinc-400 group-hover:text-emerald-500 transition-colors" size={48} strokeWidth={1.5} />
                    </div>
                  </div>
                  
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
