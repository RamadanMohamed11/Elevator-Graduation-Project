import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Cpu, Zap, Radio, Shield, Wrench, TrendingUp } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ProjectOverview = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { isDark } = useTheme();

  const features = [
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Power Supply Management',
      description: 'Advanced power supply system with intelligent load balancing and backup capabilities.',
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Smart Controller',
      description: 'Microcontroller-based system handling all elevator operations with real-time processing.',
    },
    {
      icon: <Radio className="w-8 h-8" />,
      title: '2-Wire Bus Communication',
      description: 'Efficient data transmission using only two wires for both power and data signals.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Touchless Interface',
      description: 'Contactless button system providing hygienic and responsive user interaction.',
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: 'Monitoring & Maintenance',
      description: 'Built-in diagnostic tools and bus sniffer for system health monitoring.',
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: 'Future-Ready Design',
      description: 'Expandable architecture supporting UPS, inverter, and additional upgrades.',
    },
  ];

  return (
    <section id="overview" className={`py-20 ${
      isDark ? 'bg-slate-800/50' : 'bg-white'
    }`}>
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent ${
              isDark 
                ? 'bg-gradient-to-r from-white to-cyan-200' 
                : 'bg-gradient-to-r from-gray-900 to-blue-600'
            }`}>
              Project Overview
            </h2>
            <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-gray-600'
            }`}>
              Our graduation project presents a comprehensive elevator control system that integrates 
              cutting-edge technology with practical engineering solutions, designed for modern building infrastructure.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`group p-8 border rounded-xl transition-all duration-500 hover:transform hover:scale-105 ${
                  isDark 
                    ? 'bg-slate-900/50 border-slate-700 hover:border-cyan-500/50' 
                    : 'bg-white border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-xl'
                } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center mb-6">
                  <div className={`p-3 rounded-lg text-white transition-all duration-300 ${
                    isDark 
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:shadow-lg group-hover:shadow-cyan-500/25' 
                      : 'bg-gradient-to-r from-blue-500 to-blue-600 group-hover:shadow-lg group-hover:shadow-blue-500/25'
                  }`}>
                    {feature.icon}
                  </div>
                  <h3 className={`text-xl font-bold ml-4 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{feature.title}</h3>
                </div>
                <p className={`leading-relaxed transition-colors duration-300 ${
                  isDark 
                    ? 'text-slate-300 group-hover:text-slate-200' 
                    : 'text-gray-600 group-hover:text-gray-700'
                }`}>
                  {feature.description}
                </p>
              </div>
            ))}
          </div>

          {/* Statistics */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '12', label: 'Months Development', suffix: '+' },
              { number: '3', label: 'Phase Detection', suffix: '' },
              { number: '99.9', label: 'Reliability Rate', suffix: '%' },
              { number: '50', label: 'Cost Reduction', suffix: '%' },
            ].map((stat, index) => (
              <div
                key={index}
                className={`text-center p-6 border rounded-lg transition-all duration-500 ${
                  isDark 
                    ? 'bg-gradient-to-b from-slate-800 to-slate-900 border-slate-700' 
                    : 'bg-gradient-to-b from-gray-50 to-white border-gray-200 shadow-md hover:shadow-lg'
                } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${(index + 3) * 150}ms` }}
              >
                <div className={`text-4xl font-bold mb-2 ${
                  isDark ? 'text-cyan-400' : 'text-blue-600'
                }`}>
                  {stat.number}{stat.suffix}
                </div>
                <div className={`font-medium ${
                  isDark ? 'text-slate-400' : 'text-gray-600'
                }`}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;