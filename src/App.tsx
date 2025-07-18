import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
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
  const [activeSection, setActiveSection] = useState('overview');

  const sections = [
    {id: 'home'},
    { id: 'overview' },
    { id: 'components' },
    { id: 'specs' },
    { id: 'future' },
  ];

  const sectionRefs = sections.map(({ id }) => {
    const [ref, inView] = useInView({ threshold: 0.3 });
    useEffect(() => {
      if (inView) setActiveSection(id);
    }, [inView]);
    return { id, ref };
  });

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
            <Header activeSection={activeSection} />
            <Hero onShowTechnicalDetails={showTechnicalDetails} />
            <div id="overview" ref={sectionRefs[0].ref}>
              <ProjectOverview onShowTechnicalDetails={showTechnicalDetails} />
            </div>
            <div id="components" ref={sectionRefs[1].ref}>
              <ComponentShowcase />
            </div>
            <div id="specs" ref={sectionRefs[2].ref}>
              <TechnicalSpecs />
            </div>
            <div id="future" ref={sectionRefs[3].ref}>
              <FutureUpgrades />
            </div>
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
