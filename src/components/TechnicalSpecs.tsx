import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Gauge, Zap, Thermometer, Clock, Shield, Cpu, Computer } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const TechnicalSpecs = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { isDark } = useTheme();

  const specifications = [
    {
      category: 'Power System',
      icon: <Zap className="w-6 h-6" />,
      specs: [
        { label: 'Input Voltage', value: '220 AC' },
        { label: 'Output Power', value: '180W' },
        { label: 'Efficiency', value: '92%' },
        { label: 'Power Factor', value: '>0.95' },
      ]
    },
    {
      category: 'Control System',
      icon: <Cpu className="w-6 h-6" />,
      specs: [
        { label: 'Processor', value: 'PIC Microcontrollers' },
        { label: 'Clock Speed', value: '4~20 MHz' },
        // { label: 'Memory', value: '1MB Flash' },
        // { label: 'I/O Ports', value: '64 Digital' },
      ]
    },
    {
      category: 'Communication',
      icon: <Gauge className="w-6 h-6" />,
      specs: [
        { label: 'Frequency', value: '10 KHz' },
        { label: 'Max Distance', value: '1000m' },
        // { label: 'Protocol', value: 'RS-485' },
        // { label: 'Error Rate', value: '<0.01%' },
      ]
    },
    {
      category: 'Desktop Simulator',
      icon: <Computer className="w-6 h-6" />,
      specs: [
        { label: 'Platform', value: 'Windows' },
        { label: 'Framework', value: 'Windows API (C++)' },
        { label: 'Communication', value: 'Serial/USB' },
      ]
    }
  ];

  return (
    <section id="specs" className={`py-20 ${
      isDark ? 'bg-slate-800/30' : 'bg-white'
    }`}>
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent ${
              isDark 
                ? 'bg-gradient-to-r from-white to-cyan-200' 
                : 'bg-gradient-to-r from-gray-900 to-blue-600'
            }`}>
              Technical Specifications
            </h2>
            <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-gray-600'
            }`}>
              Detailed technical specifications and performance metrics of our elevator control system components, 
              including the advanced desktop simulator application.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specifications.map((category, index) => (
              <div
                key={index}
                className={`border rounded-xl p-6 transition-all duration-500 ${
                  isDark 
                    ? 'bg-slate-900/50 border-slate-700 hover:border-cyan-500/50' 
                    : 'bg-white border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-xl'
                } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center space-x-3 mb-6">
                  <div className={`p-3 rounded-lg text-white ${
                    isDark 
                      ? 'bg-gradient-to-r from-blue-600 to-cyan-500' 
                      : 'bg-gradient-to-r from-blue-500 to-blue-600'
                  }`}>
                    {category.icon}
                  </div>
                  <h3 className={`text-xl font-bold ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{category.category}</h3>
                </div>

                <div className="space-y-4">
                  {category.specs.map((spec, specIndex) => (
                    <div key={specIndex} className={`flex justify-between items-center py-2 border-b last:border-b-0 ${
                      isDark ? 'border-slate-700' : 'border-gray-200'
                    }`}>
                      <span className={`font-medium ${
                        isDark ? 'text-slate-400' : 'text-gray-600'
                      }`}>{spec.label}</span>
                      <span className={`font-semibold ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>{spec.value}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Simulator Integration Details */}
          <div className={`mt-12 border rounded-2xl p-8 ${
            isDark 
              ? 'bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border-cyan-500/30' 
              : 'bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200'
          }`}>
            <div className="flex items-center mb-6">
              <Computer className={`w-8 h-8 mr-4 ${
                isDark ? 'text-cyan-400' : 'text-blue-600'
              }`} />
              <h3 className={`text-2xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Simulator Integration Features</h3>
            </div>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className={`text-lg font-bold mb-4 ${
                  isDark ? 'text-cyan-300' : 'text-blue-700'
                }`}>Real-Time Synchronization</h4>
                <ul className={`space-y-2 ${
                  isDark ? 'text-slate-300' : 'text-gray-700'
                }`}>
                  <li>• Bidirectional control communication</li>
                  <li>• Live position tracking and updates</li>
                  <li>• Synchronized button press responses</li>
                  <li>• Real-time status monitoring</li>
                </ul>
              </div>
              <div>
                <h4 className={`text-lg font-bold mb-4 ${
                  isDark ? 'text-cyan-300' : 'text-blue-700'
                }`}>Simulation Capabilities</h4>
                <ul className={`space-y-2 ${
                  isDark ? 'text-slate-300' : 'text-gray-700'
                }`}>
                  <li>• 3D elevator visualization</li>
                  <li>• Virtual button interface</li>
                  <li>• System diagnostics display</li>
                  <li>• Performance analytics</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;