import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import Process from './components/Process';
import WhyUs from './components/WhyUs';
import ContactForm from './components/ContactForm';
import Reviews from './components/Reviews';
import FAQ from './components/FAQ';
import CTAFinal from './components/CTAFinal';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Hero />
      <main>
        <TrustBar />
        <Services />
        <Process />
        <WhyUs />
        <ContactForm />
        <Reviews />
        <FAQ />
        <CTAFinal />
      </main>
      <Footer />
    </div>
  );
}

export default App;
