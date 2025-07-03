import React from 'react';
import { Zap, Mail, Phone, MapPin, Github, Linkedin, Youtube } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();

  return (
    <footer className={`border-t ${
      isDark 
        ? 'bg-slate-900 border-slate-800' 
        : 'bg-white border-gray-200'
    }`}>
      <div className="container mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <div className={`p-2 rounded-lg ${
                isDark 
                  ? 'bg-gradient-to-r from-blue-600 to-cyan-500' 
                  : 'bg-gradient-to-r from-blue-500 to-blue-600'
              }`}>
                <Zap className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className={`text-xl font-bold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>ElevatorTech</h3>
                <p className={`text-sm ${
                  isDark ? 'text-slate-400' : 'text-gray-600'
                }`}>Advanced Control System</p>
              </div>
            </div>
            <p className={`leading-relaxed mb-6 max-w-md ${
              isDark ? 'text-slate-300' : 'text-gray-600'
            }`}>
              Graduation project showcasing cutting-edge elevator control technology with 
              intelligent power management, touchless interfaces, and advanced monitoring capabilities.
            </p>
            <div className="flex space-x-4">
              <a href="#" className={`p-2 rounded-lg transition-colors duration-300 ${
                isDark 
                  ? 'bg-slate-800 hover:bg-slate-700' 
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}>
                <Github className={`w-5 h-5 ${
                  isDark 
                    ? 'text-slate-400 hover:text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`} />
              </a>
              <a href="#" className={`p-2 rounded-lg transition-colors duration-300 ${
                isDark 
                  ? 'bg-slate-800 hover:bg-slate-700' 
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}>
                <Linkedin className={`w-5 h-5 ${
                  isDark 
                    ? 'text-slate-400 hover:text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`} />
              </a>
              <a href="#" className={`p-2 rounded-lg transition-colors duration-300 ${
                isDark 
                  ? 'bg-slate-800 hover:bg-slate-700' 
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}>
                <Youtube className={`w-5 h-5 ${
                  isDark 
                    ? 'text-slate-400 hover:text-white' 
                    : 'text-gray-600 hover:text-gray-900'
                }`} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className={`text-lg font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Quick Links</h4>
            <ul className="space-y-3">
              {[
                { label: 'Project Overview', href: '#overview' },
                { label: 'System Components', href: '#components' },
                { label: 'Technical Specs', href: '#specs' },
                { label: 'Future Roadmap', href: '#future' },
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href={link.href} 
                    className={`transition-colors duration-300 ${
                      isDark 
                        ? 'text-slate-400 hover:text-cyan-400' 
                        : 'text-gray-600 hover:text-blue-600'
                    }`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className={`text-lg font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Contact Information</h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Mail className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                  isDark ? 'text-cyan-400' : 'text-blue-500'
                }`} />
                <div>
                  <p className={`font-medium ${
                    isDark ? 'text-slate-300' : 'text-gray-700'
                  }`}>Email</p>
                  <p className={`text-sm ${
                    isDark ? 'text-slate-400' : 'text-gray-600'
                  }`}>elevatortech@university.edu</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Phone className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                  isDark ? 'text-cyan-400' : 'text-blue-500'
                }`} />
                <div>
                  <p className={`font-medium ${
                    isDark ? 'text-slate-300' : 'text-gray-700'
                  }`}>Phone</p>
                  <p className={`text-sm ${
                    isDark ? 'text-slate-400' : 'text-gray-600'
                  }`}>+1 (555) 123-4567</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <MapPin className={`w-5 h-5 mt-0.5 flex-shrink-0 ${
                  isDark ? 'text-cyan-400' : 'text-blue-500'
                }`} />
                <div>
                  <p className={`font-medium ${
                    isDark ? 'text-slate-300' : 'text-gray-700'
                  }`}>Location</p>
                  <p className={`text-sm ${
                    isDark ? 'text-slate-400' : 'text-gray-600'
                  }`}>Engineering Department<br />University Campus</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Project Details */}
        <div className={`mt-12 pt-8 border-t ${
          isDark ? 'border-slate-800' : 'border-gray-200'
        }`}>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h5 className={`text-lg font-bold mb-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Project Team</h5>
              <p className={`text-sm ${
                isDark ? 'text-slate-400' : 'text-gray-600'
              }`}>Electrical Engineering Students<br />Final Year Project</p>
            </div>
            <div className="text-center">
              <h5 className={`text-lg font-bold mb-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Academic Year</h5>
              <p className={`text-sm ${
                isDark ? 'text-slate-400' : 'text-gray-600'
              }`}>2024-2025<br />Graduation Project</p>
            </div>
            <div className="text-center">
              <h5 className={`text-lg font-bold mb-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Supervisor</h5>
              <p className={`text-sm ${
                isDark ? 'text-slate-400' : 'text-gray-600'
              }`}>Dr. Engineering Professor<br />Electrical Engineering Dept.</p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={`mt-12 pt-8 border-t text-center ${
          isDark ? 'border-slate-800' : 'border-gray-200'
        }`}>
          <p className={`text-sm ${
            isDark ? 'text-slate-400' : 'text-gray-600'
          }`}>
            © 2025 ElevatorTech Graduation Project. All rights reserved. 
            This project is submitted as part of the requirements for the Bachelor of Engineering degree.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;