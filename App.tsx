import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Problem from './components/Problem';
import Solution from './components/Solution';
import Testimonials from './components/Testimonials';
import Trust from './components/Trust';
import UseCases from './components/UseCases';
import About from './components/About';
import Assurance from './components/Assurance';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-slate-50 text-slate-800 antialiased">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solution />
        <Testimonials />
        <Trust />
        <UseCases />
        <About />
        <Assurance />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;