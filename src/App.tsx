import React from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectOverview from './components/ProjectOverview';
import ComponentShowcase from './components/ComponentShowcase';
import TechnicalSpecs from './components/TechnicalSpecs';
import FutureUpgrades from './components/FutureUpgrades';
import Footer from './components/Footer';

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 dark:bg-slate-900 dark:text-white bg-gray-50 text-gray-900 overflow-x-hidden">
        <Header />
        <Hero />
        <ProjectOverview />
        <ComponentShowcase />
        <TechnicalSpecs />
        <FutureUpgrades />
        <Footer />
      </div>
    </ThemeProvider>
  );
}

export default App;