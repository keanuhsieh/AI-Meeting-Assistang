import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import OsmiContinuity from './components/OsmiContinuity';
import OsmiProcess from './components/OsmiProcess';
import Problem from './components/Problem';
import Solution from './components/Solution';
import UseCases from './components/UseCases';
import About from './components/About';
import Assurance from './components/Assurance';
import FAQ from './components/FAQ';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';
import { LightboxProvider } from './context/LightboxContext';

function App() {
  return (
    <LightboxProvider>
      <div className="bg-slate-50 text-slate-800 antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          <Hero />
          <OsmiContinuity />
          <OsmiProcess />
          <Problem />
          <Solution />
          <UseCases />
          <About />
          <Assurance />
          <FAQ />
          <FinalCTA />
        </main>
        <Footer />
      </div>
    </LightboxProvider>
  );
}

export default App;