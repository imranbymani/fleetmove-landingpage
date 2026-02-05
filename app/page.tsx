
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowItWorks from '@/components/HowItWorks';
import Services from '@/components/Services';
import DownloadApp from '@/components/DownloadApp';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="relative overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <HowItWorks />
        <Services />
        <DownloadApp />
      </main>
      <Footer />
    </div>
  );
}
