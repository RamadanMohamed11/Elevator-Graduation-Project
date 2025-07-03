import React from 'react';
import { Zap, Mail, Phone, MapPin, Github, Linkedin, Youtube } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();

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
    'Sohaila Ammary Mohamed'
  ];

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

        {/* Project Team */}
        <div className={`mt-12 pt-8 border-t ${
          isDark ? 'border-slate-800' : 'border-gray-200'
        }`}>
          <div className="text-center mb-8">
            <h4 className={`text-2xl font-bold mb-4 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Project Team</h4>
            <p className={`text-lg ${
              isDark ? 'text-slate-400' : 'text-gray-600'
            }`}>Electrical Engineering Students - Final Year Project 2025</p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
            {teamMembers.map((member, index) => (
              <div key={index} className={`text-center p-4 rounded-lg border transition-all duration-300 hover:scale-105 ${
                isDark 
                  ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-500/50' 
                  : 'bg-gray-50 border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md'
              }`}>
                <div className={`w-12 h-12 rounded-full mx-auto mb-3 flex items-center justify-center text-white font-bold ${
                  isDark 
                    ? 'bg-gradient-to-r from-blue-600 to-cyan-500' 
                    : 'bg-gradient-to-r from-blue-500 to-blue-600'
                }`}>
                  {member.split(' ').map(name => name[0]).join('').slice(0, 2)}
                </div>
                <p className={`font-medium text-sm ${
                  isDark ? 'text-slate-300' : 'text-gray-700'
                }`}>{member}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className={`inline-block p-6 rounded-xl border ${
              isDark 
                ? 'bg-gradient-to-r from-slate-800 to-slate-900 border-slate-700' 
                : 'bg-gradient-to-r from-gray-50 to-white border-gray-200 shadow-lg'
            }`}>
              <h5 className={`text-lg font-bold mb-2 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Project Supervisor</h5>
              <p className={`text-xl font-bold ${
                isDark ? 'text-cyan-400' : 'text-blue-600'
              }`}>Prof. Khaled Mamdouh Shabaan</p>
               <p className={`text-xl font-bold ${
                isDark ? 'text-cyan-400' : 'text-blue-600'
              }`}>Prof. Samia Ahmed Abdel-fattah</p>
              <p className={`text-xl font-bold ${
                isDark ? 'text-cyan-400' : 'text-blue-600'
              }`}>Prof. Hesham Abdel-Ghafaar</p>
              <p className={`text-sm mt-1 ${
                isDark ? 'text-slate-400' : 'text-gray-600'
              }`}>Electrical Engineering Department</p>
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