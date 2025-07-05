import React, { useState } from 'react';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import ProjectOverview from './components/ProjectOverview';
import ComponentShowcase from './components/ComponentShowcase';
import TechnicalSpecs from './components/TechnicalSpecs';
import FutureUpgrades from './components/FutureUpgrades';
import Footer from './components/Footer';
import TechnicalDetails from './components/TechnicalDetails';

function App() {
  const [currentView, setCurrentView] = useState<'main' | 'technical'>('main');

  const showTechnicalDetails = () => {
    setCurrentView('technical');
    window.scrollTo(0, 0);
  };

  const showMainView = () => {
    setCurrentView('main');
    window.scrollTo(0, 0);
  };

  return (
    <ThemeProvider>
      <div className="min-h-screen transition-colors duration-300 dark:bg-slate-900 dark:text-white bg-gray-50 text-gray-900 overflow-x-hidden">
        {currentView === 'main' ? (
          <>
            <Header />
            <Hero />
            <ProjectOverview onShowTechnicalDetails={showTechnicalDetails} />
            <ComponentShowcase />
            <TechnicalSpecs />
            <FutureUpgrades />
            <Footer />
          </>
        ) : (
          <TechnicalDetails onBack={showMainView} />
        )}
      </div>
    </ThemeProvider>
  );
}

export default App;