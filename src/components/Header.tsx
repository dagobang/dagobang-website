'use client';

import { Menu, Moon, Sun, X } from 'lucide-react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

import { Link, usePathname } from '@/libs/i18nNavigation';

import { LanguageSwitcher } from './LanguageSwitcher';
export default function Header() {
  const t = useTranslations('Nav');
  const pathname = usePathname();
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navItems = [
    { key: 'features', href: '#features' },
    { key: 'howItWorks', href: '#how-it-works' },
    { key: 'install', href: '#install' },
    { key: 'security', href: '#security' },
    { key: 'faq', href: '#faq' },
    { key: 'contact', href: '#contact' },
  ];

  return (
    <header className="w-full fixed top-0 z-50 bg-white/80 dark:bg-black/80 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a className="flex items-center gap-2"
          key="home"
          href="/">
          <Image src="/logo.svg" alt="Dagobang Logo" width={32} height={32} />
          <span className="font-bold text-xl text-zinc-900 dark:text-white">Dagobang</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6 text-sm font-medium text-zinc-600 dark:text-zinc-300">
          {navItems.map((item) => (
            <a key={item.key} href={item.href} className="hover:text-emerald-500 dark:hover:text-emerald-400 transition-colors">
              {t(item.key as any)}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <LanguageSwitcher />

          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
            aria-label="Toggle Theme"
          >
            {mounted ? (
              theme === 'dark' ? (
                <Sun size={20} className="text-zinc-400 dark:text-zinc-300" />
              ) : (
                <Moon size={20} className="text-zinc-600 dark:text-zinc-400" />
              )
            ) : (
              <div className="w-5 h-5" />
            )}
          </button>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-full hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors text-zinc-900 dark:text-white"
            aria-label="Toggle Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 w-full bg-white dark:bg-black border-b border-zinc-200 dark:border-zinc-800 shadow-lg flex flex-col p-4 gap-4">
          {navItems.map((item) => (
            <a
              key={item.key}
              href={item.href}
              className="text-lg font-medium text-zinc-700 dark:text-zinc-200 py-2 border-b border-zinc-100 dark:border-zinc-800 last:border-0"
              onClick={closeMenu}
            >
              {t(item.key as any)}
            </a>
          ))}
          <div className="flex gap-4 pt-2 justify-center">
            <Link href={pathname} locale="en" className="text-lg font-medium px-4 py-2 bg-zinc-100 dark:bg-zinc-900 rounded-lg text-zinc-900 dark:text-white">EN</Link>
            <Link href={pathname} locale="zh" className="text-lg font-medium px-4 py-2 bg-zinc-100 dark:bg-zinc-900 rounded-lg text-zinc-900 dark:text-white">中文</Link>
          </div>
        </div>
      )}
    </header>
  );
}
