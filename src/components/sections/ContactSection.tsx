'use client';
import { Mail, Send, Twitter, CheckCircle2, Clock, ArrowRight, MapPin, Flag } from 'lucide-react';
import { useTranslations } from 'next-intl';

export function ContactSection() {
   const t = useTranslations('Contact');

   return (
      <section id="contact" className="w-full py-10 bg-zinc-900 dark:bg-black text-white relative overflow-hidden">
         {/* Background Gradients */}
         <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] bg-emerald-500/10 blur-[120px] rounded-full" />
            <div className="absolute bottom-[0%] left-[0%] w-[40%] h-[40%] bg-blue-500/10 blur-[100px] rounded-full" />
         </div>

         <div className="container mx-auto max-w-5xl px-4">
            <div className="grid lg:grid-cols-2 gap-12 mb-4">

               {/* Left: Contact Info */}
               <div>
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-bold uppercase tracking-wider mb-6">
                     <Mail size={12} />
                     Get in Touch
                  </div>
                  <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
                     {t('title')}
                  </h2>
                  <p className="text-lg text-zinc-400 mb-8 leading-relaxed max-w-md">
                     {t('intro')}
                  </p>

                  <div className="flex flex-col gap-4">

                     <a href={t('telegramValue')} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                        <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:bg-[#229ED9] group-hover:text-white group-hover:border-[#229ED9] transition-all duration-300">
                           <Send size={20} strokeWidth={1.5} className="-ml-0.5 mt-0.5" />
                        </div>
                        <div>
                           <h3 className="text-base font-bold mb-1">{t('telegramLabel')}</h3>
                           <p className="text-zinc-400 font-mono text-sm">{t('telegramValue')}</p>
                        </div>
                     </a>

                     <a href={`https://twitter.com/${t('twitterValue').replace('@', '')}`} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
                        <div className="w-12 h-12 rounded-xl bg-zinc-800 border border-zinc-700 flex items-center justify-center group-hover:bg-black group-hover:text-white group-hover:border-zinc-600 transition-all duration-300">
                           <Twitter size={20} strokeWidth={1.5} />
                        </div>
                        <div>
                           <h3 className="text-base font-bold mb-1">{t('twitterLabel')}</h3>
                           <p className="text-zinc-400 font-mono text-sm">{t('twitterValue')}</p>
                        </div>
                     </a>
                  </div>
               </div>

               {/* Right: Roadmap (Glassmorphism) */}
               <div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-[2rem] p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-6">
                     <div className="p-2 rounded-lg bg-emerald-500/20 text-emerald-400">
                        <Flag size={20} />
                     </div>
                     <h3 className="text-xl font-bold">{t('roadmapTitle')}</h3>
                  </div>

                  <div className="space-y-6">
                     {/* Timeline Items */}
                     <div className="relative pl-6 border-l border-white/10 space-y-8">

                        {/* Short Term */}
                        <div className="relative">
                           <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-emerald-500 ring-4 ring-zinc-900" />
                           <h4 className="text-base font-bold mb-2 text-white flex items-center gap-2">
                              {t('shortTermTitle')}
                              <span className="px-1.5 py-0.5 rounded text-[10px] bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 uppercase tracking-wider">Current</span>
                           </h4>
                           <ul className="space-y-1.5">
                              {[1, 2, 3].map((i) => (
                                 <li key={i} className="flex gap-2 text-zinc-400 text-xs md:text-sm">
                                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                                    <span>{t(`shortTerm${i}` as any)}</span>
                                 </li>
                              ))}
                           </ul>
                        </div>

                        {/* Mid Term */}
                        <div className="relative">
                           <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-blue-500 ring-4 ring-zinc-900" />
                           <h4 className="text-base font-bold mb-2 text-white">{t('midTermTitle')}</h4>
                           <ul className="space-y-1.5">
                              {[1, 2].map((i) => (
                                 <li key={i} className="flex gap-2 text-zinc-400 text-xs md:text-sm">
                                    <Clock size={14} className="text-blue-500 shrink-0 mt-0.5" />
                                    <span>{t(`midTerm${i}` as any)}</span>
                                 </li>
                              ))}
                           </ul>
                        </div>

                        {/* Long Term */}
                        <div className="relative">
                           <span className="absolute -left-[29px] top-1 h-3 w-3 rounded-full bg-purple-500 ring-4 ring-zinc-900" />
                           <h4 className="text-base font-bold mb-2 text-white">{t('longTermTitle')}</h4>
                           <ul className="space-y-1.5">
                              {[1, 2].map((i) => (
                                 <li key={i} className="flex gap-2 text-zinc-400 text-xs md:text-sm">
                                    <ArrowRight size={14} className="text-purple-500 shrink-0 mt-0.5" />
                                    <span>{t(`longTerm${i}` as any)}</span>
                                 </li>
                              ))}
                           </ul>
                        </div>

                     </div>
                  </div>
               </div>

            </div>
         </div>
      </section>
   );
}
