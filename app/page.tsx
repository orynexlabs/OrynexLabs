import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Project from './components/Project';
import Technology from './components/Technology';
import Team from './components/Team';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FAQSection from './components/Faq';


export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Project />
      <Technology />
      <Team />
      <FAQSection/>
      <Contact />
      <Footer />
    </div>
  );
}
