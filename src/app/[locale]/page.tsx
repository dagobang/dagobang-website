import { useTranslations } from 'next-intl';
import { setRequestLocale } from 'next-intl/server';

import BackToTop from '@/components/BackToTop';
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { ContactSection } from '@/components/sections/ContactSection';
import { FaqSection } from '@/components/sections/FaqSection';
import { FeaturesSection } from '@/components/sections/FeaturesSection';
import { HeroSection } from '@/components/sections/HeroSection';
import { HowItWorksSection } from '@/components/sections/HowItWorksSection';
import { InstallSection } from '@/components/sections/InstallSection';
import { SecuritySection } from '@/components/sections/SecuritySection';


export default function Home({ params: { locale } }: { params: { locale: string } }) {
  setRequestLocale(locale);
  const t = useTranslations('Metadata');

  return (
    <main className="min-h-screen flex flex-col items-center justify-between">
      <Header />
      <HeroSection />
      <FeaturesSection />
      <HowItWorksSection />
      <InstallSection />
      <SecuritySection />
      <FaqSection />
      <ContactSection />
      <Footer />
      <BackToTop />
    </main>
  );
}
