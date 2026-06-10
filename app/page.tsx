import { About } from '@/components/about';
import { Audiences } from '@/components/audiences';
import { Comparison } from '@/components/comparison';
import { Coverage } from '@/components/coverage';
import { Faq } from '@/components/faq';
import { FinalCta } from '@/components/final-cta';
import { Footer } from '@/components/footer';
import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import { HowItWorks } from '@/components/how-it-works';
import { PartnerClinics } from '@/components/partner-clinics';
import { Partnership } from '@/components/partnership';
import { Services } from '@/components/services';
import { Stats } from '@/components/stats';
import { Team } from '@/components/team';
import { Testimonials } from '@/components/testimonials';
import { WhatsappFloat } from '@/components/whatsapp-float';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Comparison />
        <About />
        <Stats />
        <Services />
        <HowItWorks />
        <Audiences />
        <Partnership />
        <PartnerClinics />
        <Team />
        <Testimonials />
        <Coverage />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsappFloat />
    </>
  );
}
