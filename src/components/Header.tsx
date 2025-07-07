import React, { useState, useEffect } from 'react';
import { Menu, X, Zap, Users, ChevronDown } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';
import ThemeToggle from './ThemeToggle';

type HeaderProps = {
  activeSection: string;
};

const Header = ({ activeSection }: HeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTeamDropdownOpen, setIsTeamDropdownOpen] = useState(false);
  const { isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home', id: 'home' },
    { label: 'Overview', href: '#overview', id: 'overview' },
    { label: 'Components', href: '#components', id: 'components' },
    { label: 'Specifications', href: '#specs', id: 'specs' },
    { label: 'Future Work', href: '#future', id: 'future' },
  ];

  const teamMembers = [
    'Ahmed Abd-Elbasit Ahmed',
    'Amr Ans Mousa',
    'Amr Mohamed Riad',
    'Ebrahim Mohamed Riad',
    'Hesham Ahmed Mahmoud',
    'Kareem Mostafa Abd-Elnaaem',
    'Omar Mohamed Abd-Elkareem',
    'Omar Mohamed Saad',
    'Ramadan Mohamed Kamel',
    'Sohaila Ammary Mohamed',
  ];

  const supervisors = [
    'Prof. Khaled Mamdouh Shabaan',
    'Prof. Samia Ahmed Abdel-fattah',
    'Prof. Hesham Abdel-Ghafaar'
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

            {/* Team Dropdown - No Navigation */}
            <div className="relative">
              <button
                onClick={() => setIsTeamDropdownOpen(!isTeamDropdownOpen)}
                className={`flex items-center space-x-2 font-medium text-lg group transition-colors duration-300 relative ${
                  activeSection === 'team'
                    ? isDark 
                      ? 'text-custom-cyan' 
                      : 'text-blue-600'
                    : isDark 
                      ? 'text-slate-300 hover:text-custom-cyan' 
                      : 'text-gray-700 hover:text-blue-600'
                }`}
              >
                <Users className="w-5 h-5" />
                <span>Team</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${
                  isTeamDropdownOpen ? 'rotate-180' : ''
                }`} />
                <span className={`absolute -bottom-1 left-0 h-0.5 transition-all duration-300 ${
                  activeSection === 'team' ? 'w-full' : 'w-0 group-hover:w-full'
                } ${
                  isDark 
                    ? 'bg-gradient-to-r from-custom-cyan to-blue-500' 
                    : 'bg-gradient-to-r from-blue-500 to-cyan-500'
                }`}></span>
              </button>

              {/* Dropdown Menu */}
              {isTeamDropdownOpen && (
                <div className={`absolute top-full right-0 mt-2 w-80 border rounded-xl shadow-2xl backdrop-blur-lg z-50 ${
                  isDark
                    ? 'bg-slate-900/95 border-slate-700'
                    : 'bg-white/95 border-gray-200'
                }`}>
                  <div className="p-6">
                    {/* Team Members */}
                    <div className="mb-6">
                      <h3 className={`text-lg font-bold mb-4 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>Team Members</h3>
                      <div className="grid grid-cols-1 gap-2 max-h-48 overflow-y-auto">
                        {teamMembers.map((member, index) => (
                          <div
                            key={index}
                            className={`p-2 rounded-lg transition-colors ${
                              isDark
                                ? 'hover:bg-slate-800 text-slate-300'
                                : 'hover:bg-gray-50 text-gray-700'
                            }`}
                          >
                            <span className="text-sm font-medium">{member}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Supervisors */}
                    <div className={`pt-4 border-t ${
                      isDark ? 'border-slate-700' : 'border-gray-200'
                    }`}>
                      <h3 className={`text-lg font-bold mb-3 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>Supervisors</h3>
                      <div className="space-y-2">
                        {supervisors.map((supervisor, index) => (
                          <div
                            key={index}
                            className={`p-2 rounded-lg ${
                              isDark ? 'text-custom-cyan' : 'text-blue-600'
                            }`}
                          >
                            <span className="text-sm font-semibold">{supervisor}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className={`mt-4 pt-4 border-t text-center ${
                      isDark ? 'border-slate-700' : 'border-gray-200'
                    }`}>
                      <p className={`text-xs ${
                        isDark ? 'text-slate-400' : 'text-gray-600'
                      }`}>
                        Electrical Engineering Department<br />
                        Graduation Project 2025
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

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

              {/* Mobile Team Section - No Navigation */}
              <div
                className={`p-3 rounded-lg border transition-all duration-300 ${
                  activeSection === 'team'
                    ? isDark
                      ? 'text-custom-cyan bg-custom-cyan/10 border-custom-cyan/30'
                      : 'text-blue-600 bg-blue-50 border-blue-200'
                    : isDark
                      ? 'text-slate-300 border-transparent'
                      : 'text-gray-700 border-transparent'
                }`}
              >
                <div className="flex items-center space-x-2 mb-3">
                  <Users className="w-5 h-5" />
                  <span className="font-bold">Project Team</span>
                </div>
                <p className={`text-sm ${
                  isDark ? 'text-slate-400' : 'text-gray-600'
                }`}>
                  10 Team Members • 3 Supervisors<br />
                  Electrical Engineering Department
                </p>
              </div>
            </div>
          </nav>
        )}
      </div>

      {/* Click outside to close dropdown */}
      {isTeamDropdownOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsTeamDropdownOpen(false)}
        />
      )}
    </header>
  );
};

export default Header;