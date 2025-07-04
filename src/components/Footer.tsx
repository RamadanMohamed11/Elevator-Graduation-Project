import React from 'react';
import { Zap, Mail, Phone, MapPin, Github, Linkedin, Youtube, User } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { isDark } = useTheme();

  const teamMembers = [
    {
      name: 'Ahmed Abd-Elbasit Ahmed',
    },
    {
      name: 'Amr Ans Mousa',
    },
    {
      name: 'Amr Mohamed Riad',
    },
    {
      name: 'Ebrahim Mohamed Riad',
    },
    {
      name: 'Hesham Ahmed Mahmoud',
       image: 'https://res.cloudinary.com/dhjyfpw6f/image/upload/v1751668774/WhatsApp_Image_2025-07-05_at_01.38.21_5f4a22bf_gkrtxx.jpg',
    },
    {
      name: 'Kareem Mostafa Abd-Elnaaem',
    },
    {
      name: 'Omar Mohamed Abd-Elkareem',
    },
    {
      name: 'Omar Mohamed Saad',
    },
    {
      name: 'Ramadan Mohamed Kamel',
      image: 'https://res.cloudinary.com/dhjyfpw6f/image/upload/v1751644713/IMG_20211227_100504_auto_x2_vhbc1g.jpg',
    },
    {
      name: 'Sohaila Ammary Mohamed',
    },
  ];

  return (
    <footer className={`border-t ${isDark ? 'bg-slate-900 border-slate-800' : 'bg-white border-gray-200'}`}>
      <div className="container mx-auto px-6 py-16">
        {/* Other sections here... */}

        {/* Project Team */}
        <div className={`mt-12 pt-8 border-t ${isDark ? 'border-slate-800' : 'border-gray-200'}`}>
          <div className="text-center mb-8">
            <h4 className={`text-2xl font-bold mb-4 ${isDark ? 'text-white' : 'text-gray-900'}`}>Project Team</h4>
            <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
              Electrical Engineering Students - Final Year Project 2025
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className={`flex flex-col items-center p-4 rounded-lg border transition-all duration-300 hover:scale-105 ${
                  isDark
                    ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-500/50'
                    : 'bg-gray-50 border-gray-200 hover:border-blue-300 shadow-sm hover:shadow-md'
                }`}
              >
                {member.image ? (
                  <img
                    src={member.image}
                    alt={member.name}
                    className="	w-28 h-28 rounded-full mb-3 object-cover"
                  />
                ) : (
                  <div className="w-24 h-24 rounded-full mb-3 flex items-center justify-center bg-gray-300 dark:bg-slate-700">
                    <User className="w-8 h-8 text-white" />
                  </div>
                )}
                <p className={`font-medium text-sm text-center ${isDark ? 'text-slate-300' : 'text-gray-700'}`}>
                  {member.name}
                </p>
              </div>
            ))}
          </div>

          {/* Supervisor Section */}
          <div className="text-center">
            <div
              className={`inline-block p-6 rounded-xl border ${
                isDark
                  ? 'bg-gradient-to-r from-slate-800 to-slate-900 border-slate-700'
                  : 'bg-gradient-to-r from-gray-50 to-white border-gray-200 shadow-lg'
              }`}
            >
              <h5 className={`text-lg font-bold mb-2 ${isDark ? 'text-white' : 'text-gray-900'}`}>Project Supervisor</h5>
              <p className={`text-xl font-bold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>Prof. Khaled Mamdouh Shabaan</p>
              <p className={`text-xl font-bold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>Prof. Samia Ahmed Abdel-fattah</p>
              <p className={`text-xl font-bold ${isDark ? 'text-cyan-400' : 'text-blue-600'}`}>Prof. Hesham Abdel-Ghafaar</p>
              <p className={`text-sm mt-1 ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
                Electrical Engineering Department
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className={`mt-12 pt-8 border-t text-center ${isDark ? 'border-slate-800' : 'border-gray-200'}`}>
          <p className={`text-sm ${isDark ? 'text-slate-400' : 'text-gray-600'}`}>
            © 2025 ElevatorTech Graduation Project. All rights reserved. This project is submitted as part of the requirements for the Bachelor of Engineering degree.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
