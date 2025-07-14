import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

type HeaderProps = {
  activeSection: string;
};

const Header = ({ activeSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

 const navItems = [
  { label: 'Home', href: '#home', id: 'home' },            // ✅ Added
  { label: 'Overview', href: '#overview', id: 'overview' },
  { label: 'Components', href: '#components', id: 'components' },
  { label: 'Specifications', href: '#specs', id: 'specs' },
  { label: 'Future Work', href: '#future', id: 'future' },
];


  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? isDark
          ? 'bg-slate-900/95 backdrop-blur-lg shadow-glow border-b border-custom-cyan/30'
          : 'bg-white/95 backdrop-blur-lg shadow-lg border-b border-gray-200'
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          {/* Logo and Branding */}
          <div className="flex items-center space-x-3 group">
            <div className={`p-3 rounded-xl shadow-glow transition-transform duration-300 group-hover:scale-110 ${
              isDark 
                ? 'bg-gradient-to-r from-custom-cyan to-blue-500 animate-pulse3d' 
                : 'bg-gradient-to-r from-blue-500 to-cyan-500'
            }`}>
              <Zap className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className={`text-2xl font-bold transition-colors ${
                isDark ? 'text-white animate-textGlow' : 'text-gray-900'
              }`}>
                ElevatorTech
              </h1>
              <p className={`text-xs font-medium ${
                isDark ? 'text-custom-cyan' : 'text-blue-600'
              }`}>
                Advanced Control System
              </p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className={`relative font-medium text-lg group transition-colors duration-300 ${
                  activeSection === item.id
                    ? isDark 
                      ? 'text-custom-cyan' 
                      : 'text-blue-600'
                    : isDark 
                      ? 'text-slate-300 hover:text-custom-cyan' 
                      : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                {item.label}
                <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                  activeSection === item.id ? 'w-full' : 'w-0 group-hover:w-full'
                } ${
                  isDark 
                    ? 'bg-gradient-to-r from-custom-cyan to-blue-500' 
                    : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                }`}></span>
              </a>
            ))}
            <ThemeToggle />
          </nav>

          {/* Mobile Menu Button and Theme Toggle */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-3 transition-all duration-300 rounded-lg border ${
                isDark
                  ? 'text-slate-300 hover:text-custom-cyan hover:bg-custom-cyan/10 border-transparent hover:border-custom-cyan/30'
                  : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 border-transparent hover:border-blue-200'
              }`}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className={`md:hidden mt-6 pb-6 border-t rounded-b-xl backdrop-blur-lg ${
            isDark
              ? 'border-custom-cyan/30 bg-slate-900/95'
              : 'border-gray-200 bg-white/95'
          }`}>
            <div className="flex flex-col space-y-4 pt-6">
              {navItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={`font-medium text-lg p-3 rounded-lg transition-all duration-300 border group ${
                    activeSection === item.id
                      ? isDark
                        ? 'text-custom-cyan bg-custom-cyan/10 border-custom-cyan/30'
                        : 'text-blue-600 bg-blue-50 border-blue-200'
                      : isDark
                        ? 'text-slate-300 hover:text-custom-cyan hover:bg-custom-cyan/10 border-transparent hover:border-custom-cyan/30'
                        : 'text-gray-700 hover:text-blue-600 hover:bg-blue-50 border-transparent hover:border-blue-200'
                  } animate-slideIn3d`}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  {item.label}
                  <span className={`block w-0 h-0.5 transition-all duration-300 group-hover:w-full mt-1 ${
                    isDark 
                      ? 'bg-gradient-to-r from-custom-cyan to-blue-500' 
                      : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                  }`}></span>
                </a>
              ))}
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Header;
