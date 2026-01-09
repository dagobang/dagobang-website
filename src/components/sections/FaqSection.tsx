'use client';

import { Plus, Minus, HelpCircle, ArrowDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export function FaqSection() {
  const t = useTranslations('FAQ');
  const items = [1, 2, 3, 4, 5, 6, 7, 8];
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="w-full py-10 bg-zinc-200 dark:bg-zinc-900/50">
      <div className="container mx-auto max-w-5xl px-4">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16">

          {/* Left Side: Sticky Header */}
          <div className="lg:col-span-4 lg:sticky lg:top-32 self-start">
            <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-emerald-50 dark:bg-emerald-900/20 px-3 py-1 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
              <HelpCircle className="h-3 w-3" />
              {t("eyebrow")}
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-zinc-900 dark:text-white mb-4">
              {t("title")}
            </h2>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6 leading-relaxed text-sm md:text-base">
              {t("intro")}
            </p>
            <a href="#contact" className="inline-flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold hover:underline text-sm">
              Contact Support <ArrowDown size={14} />
            </a>
          </div>

          {/* Right Side: Accordion */}
          <div className="lg:col-span-8 space-y-3">
            {items.map((index) => {
              const isOpen = openIndex === index;
              return (
                <div
                  key={index}
                  className={`group rounded-xl border transition-all duration-300 ${isOpen
                      ? 'border-emerald-500/30 bg-emerald-50/30 dark:border-emerald-500/20 dark:bg-emerald-900/10'
                      : 'border-zinc-100 bg-white hover:border-zinc-300 dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-zinc-700'
                    }`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : index)}
                    className="flex w-full items-start justify-between gap-4 p-5 text-left"
                  >
                    <span className={`text-base md:text-lg font-bold transition-colors ${isOpen ? 'text-emerald-900 dark:text-emerald-100' : 'text-zinc-900 dark:text-white'
                      }`}>
                      {t(`q${index}.question` as any)}
                    </span>
                    <span className={`shrink-0 flex h-7 w-7 items-center justify-center rounded-full transition-colors ${isOpen ? 'bg-emerald-200/50 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-300' : 'bg-zinc-100 text-zinc-400 dark:bg-zinc-800'
                      }`}>
                      {isOpen ? <Minus size={14} /> : <Plus size={14} />}
                    </span>
                  </button>

                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
                      }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-5 pb-5 pt-0">
                        <p className="text-sm md:text-base leading-relaxed text-zinc-600 dark:text-zinc-400">
                          {t(`q${index}.answer` as any)}
                        </p>
                      </div>
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
