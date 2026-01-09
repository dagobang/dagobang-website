'use client';

import { motion } from 'framer-motion';
import { Fuel, GripHorizontal, Pencil, RefreshCw, Sliders, X, Zap } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useTranslations, useLocale } from 'next-intl';

import { BNBCoinIcon } from '../Coins';

export function HeroSection() {
  const t = useTranslations('Hero');
  const locale = useLocale();
  const isZh = locale === 'zh';

  return (
    <section
      id="product"
      className="w-full relative overflow-hidden border-b border-slate-200 dark:border-zinc-800"
    >
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-zinc-950 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-emerald-500 opacity-20 blur-[100px]"></div>
      </div>

      <div className="section-container px-4 grid gap-12 py-16 md:grid-cols-2 md:items-center md:py-24 md:pb-12">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-50 dark:bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-700 dark:text-emerald-300">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400 shadow-[0_0_8px_rgba(16,185,129,0.5)]" />
            <span>{t('badge')}</span>
          </div>

          <h1 className="text-balance text-4xl font-bold tracking-tight text-slate-900 dark:text-zinc-50 sm:text-5xl lg:text-6xl">
            {t('title')}
          </h1>

          <div className="space-y-2 text-base leading-relaxed text-slate-600 dark:text-zinc-400 sm:text-lg">
            <p>{t('subtitleLine1')}</p>
            <p>{t('subtitleLine2')}</p>
            {t('subtitleLine3') && <p>{t('subtitleLine3')}</p>}
          </div>

          <div className="flex flex-col gap-3 pt-4 sm:flex-row sm:items-center">
            <Link
              href="#install"
              className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-8 py-3 text-sm font-semibold text-white dark:text-black shadow-lg shadow-emerald-500/20 transition hover:bg-emerald-600 hover:scale-105 hover:shadow-emerald-500/30 dark:hover:bg-emerald-400"
            >
              {t('primaryCta')}
            </Link>
            <Link
              href="#install"
              className="inline-flex items-center justify-center rounded-full border border-slate-300 dark:border-zinc-700 px-8 py-3 text-sm font-medium text-slate-700 dark:text-zinc-100 transition hover:border-emerald-500 hover:text-emerald-600 dark:hover:border-emerald-400 dark:hover:text-emerald-300"
            >
              {t('secondaryCta')}
            </Link>
          </div>
          <p className="text-xs text-slate-500 dark:text-zinc-500">{t('primaryCtaNote')}</p>

          <div className="mt-6 rounded-xl border border-yellow-500/40 bg-yellow-50 dark:bg-yellow-500/5 p-4 text-xs text-yellow-800 dark:text-yellow-100">
            <div className="flex items-start gap-2">
              <span className="text-lg">⚠️</span>
              <div>
                <p className="font-medium text-yellow-900 dark:text-yellow-300">{t('alertTitle')}</p>
                <p className="mt-1 text-[11px] leading-relaxed text-yellow-800/80 dark:text-yellow-200/80">
                  {t('alertBody')}
                </p>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Demo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex items-center justify-center"
        >
          <motion.div
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="relative w-full max-w-md"
          >
            <div className="absolute -inset-1 rounded-3xl bg-gradient-to-r from-emerald-500 to-teal-500 opacity-30 blur-2xl dark:opacity-20" />

            <div className="relative rounded-3xl border border-slate-200 dark:border-zinc-800 bg-gradient-to-br from-slate-50 via-white to-slate-100 dark:from-zinc-900 dark:via-black dark:to-zinc-950 p-5 shadow-2xl">
              <div className="mb-3 flex items-center justify-between text-xs text-slate-500 dark:text-zinc-400">
                <div className="flex items-center gap-2">
                  <Image src="/logo.svg" alt="Dagobang Logo" width={24} height={24} />
                  <span className="font-medium text-slate-900 dark:text-zinc-200">Dagobang</span>
                </div>
                <span className="rounded-full border border-slate-200 dark:border-zinc-700 bg-white dark:bg-zinc-900 px-2 py-0.5 text-[10px] text-slate-500 dark:text-zinc-400">
                  {t('screenshotBadge')}
                </span>
              </div>

              <div className="rounded-2xl border border-zinc-800 bg-[#050608] text-[11px] text-zinc-200 shadow-sm overflow-hidden">
                <div className="flex items-center justify-between px-3 py-2 border-b border-zinc-800 bg-[#050608]">
                  <div className="flex items-center gap-2">
                    <Image src="/logo.svg" alt="Dagobang Logo" width={16} height={16} />
                    <Pencil size={14} className="text-zinc-400" />
                  </div>
                  <div className="flex items-center justify-center">
                    <GripHorizontal size={14} className="text-zinc-500" />
                  </div>
                  <button className="flex items-center justify-center text-zinc-400 hover:text-zinc-200 transition-colors">
                    <X size={14} />
                  </button>
                </div>

                <div className="px-4 pt-4 pb-3 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <div className="text-[13px] font-semibold text-zinc-50">
                      {isZh ? '买入' : 'Buy'}
                    </div>
                    <div className="flex items-center gap-1 text-[11px]">
                      <BNBCoinIcon size={{ width: "14", height: "14" }} className="inline-block" />
                      <span className="text-amber-300 text-[12px]">0.1140</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    {[0.01, 0.1, 0.5, 1.0].map((value) => (
                      <button
                        key={value}
                        className="h-9 rounded-xl border border-emerald-500/60 bg-emerald-500/10 text-center text-[12px] font-semibold text-emerald-300 hover:bg-emerald-500/20 hover:border-emerald-400 transition-colors"
                      >
                        {value.toFixed(2).replace(/0+$/, '').replace(/\.$/, '')}
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-zinc-500">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Zap size={11} className="text-zinc-400" />
                        <span>{isZh ? '极速' : 'Turbo'}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Fuel size={11} className="text-zinc-400" />
                        <span>{isZh ? '标准' : 'Standard'}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Sliders size={11} className="text-zinc-400" />
                      <span>{isZh ? '默认40%' : 'Default40%'}</span>
                    </div>
                  </div>
                </div>

                <div className="h-px bg-zinc-800 mx-3" />

                <div className="px-4 pt-4 pb-4 space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <div className="text-[13px] font-semibold text-zinc-50">
                      {isZh ? '卖出' : 'Sell'}
                    </div>
                    <div className="flex items-center gap-1 text-[11px]">
                      <span className="text-zinc-400">0</span>
                      <span className="text-amber-400">币安人生</span>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-2">
                    {[10, 25, 50, 100].map((value) => (
                      <button
                        key={value}
                        className="h-9 rounded-xl border border-rose-500/60 bg-rose-500/10 text-center text-[12px] font-semibold text-rose-300 hover:bg-rose-500/20 hover:border-rose-400 transition-colors"
                      >
                        {value}%
                      </button>
                    ))}
                  </div>

                  <div className="flex items-center justify-between text-[10px] text-zinc-500">
                    <div className="flex items-center gap-3">
                      <div className="flex items-center gap-1">
                        <Zap size={11} className="text-zinc-400" />
                        <span>{isZh ? '极速' : 'Turbo'}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Fuel size={11} className="text-zinc-400" />
                        <span>{isZh ? '标准' : 'Standard'}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <RefreshCw size={11} className="text-zinc-400" />
                        <span>{isZh ? '授权' : 'Approve'}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-1">
                      <Sliders size={11} className="text-zinc-400" />
                      <span>{isZh ? '默认40%' : 'Default40%'}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
