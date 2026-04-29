import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import ContactForm from './components/ContactForm';
import CTAFinal from './components/CTAFinal';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Hero />
      <main>
        <TrustBar />
        <Services />
        <Process />
        <WhyUs />
        <Reviews />
        <FAQ />
        <CTAFinal />
        <ContactForm />
      </main>
      <Footer />
    </>
  );
}
