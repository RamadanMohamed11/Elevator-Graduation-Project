import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Gauge, Zap, Thermometer, Clock, Shield, Cpu } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const TechnicalSpecs = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { isDark } = useTheme();

  const specifications = [
    {
      category: 'Power System',
      icon: <Zap className="w-6 h-6" />,
      specs: [
        { label: 'Input Voltage', value: '85-265V AC' },
        { label: 'Output Power', value: '500W' },
        { label: 'Efficiency', value: '92%' },
        { label: 'Power Factor', value: '>0.95' },
      ]
    },
    {
      category: 'Control System',
      icon: <Cpu className="w-6 h-6" />,
      specs: [
        { label: 'Processor', value: 'ARM Cortex-M4' },
        { label: 'Clock Speed', value: '168 MHz' },
        { label: 'Memory', value: '1MB Flash' },
        { label: 'I/O Ports', value: '64 Digital' },
      ]
    },
    {
      category: 'Communication',
      icon: <Gauge className="w-6 h-6" />,
      specs: [
        { label: 'Data Rate', value: '1 Mbps' },
        { label: 'Max Distance', value: '1000m' },
        { label: 'Protocol', value: 'RS-485' },
        { label: 'Error Rate', value: '<0.01%' },
      ]
    },
    {
      category: 'Environmental',
      icon: <Thermometer className="w-6 h-6" />,
      specs: [
        { label: 'Operating Temp', value: '-20°C to +70°C' },
        { label: 'Humidity', value: '5-95% RH' },
        { label: 'Vibration', value: '5-200 Hz' },
        { label: 'IP Rating', value: 'IP65' },
      ]
    },
    {
      category: 'Reliability',
      icon: <Shield className="w-6 h-6" />,
      specs: [
        { label: 'MTBF', value: '100,000 hrs' },
        { label: 'Availability', value: '99.9%' },
        { label: 'Safety Level', value: 'SIL 3' },
        { label: 'Warranty', value: '5 Years' },
      ]
    },
    {
      category: 'Performance',
      icon: <Clock className="w-6 h-6" />,
      specs: [
        { label: 'Response Time', value: '<100ms' },
        { label: 'Accuracy', value: '±0.1%' },
        { label: 'Throughput', value: '1000 req/s' },
        { label: 'Latency', value: '<10ms' },
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
              Detailed technical specifications and performance metrics of our elevator control system components.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

          {/* Performance Metrics */}
          <div className={`mt-16 border rounded-2xl p-8 ${
            isDark 
              ? 'bg-gradient-to-r from-slate-900 to-slate-800 border-slate-700' 
              : 'bg-gradient-to-r from-gray-50 to-white border-gray-200 shadow-lg'
          }`}>
            <h3 className={`text-2xl font-bold mb-8 text-center ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>System Performance Metrics</h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                { metric: 'System Uptime', value: '99.9%', description: 'Continuous operation reliability' },
                { metric: 'Response Time', value: '<100ms', description: 'Average system response' },
                { metric: 'Energy Efficiency', value: '92%', description: 'Power conversion efficiency' },
                { metric: 'Data Accuracy', value: '99.99%', description: 'Communication reliability' },
              ].map((metric, index) => (
                <div key={index} className="text-center">
                  <div className={`text-3xl font-bold mb-2 ${
                    isDark ? 'text-cyan-400' : 'text-blue-600'
                  }`}>{metric.value}</div>
                  <div className={`text-lg font-semibold mb-1 ${
                    isDark ? 'text-white' : 'text-gray-900'
                  }`}>{metric.metric}</div>
                  <div className={`text-sm ${
                    isDark ? 'text-slate-400' : 'text-gray-600'
                  }`}>{metric.description}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Compliance & Standards */}
          <div className="mt-12 text-center">
            <h4 className={`text-lg font-bold mb-6 ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>Compliance & Standards</h4>
            <div className="flex flex-wrap justify-center gap-4">
              {['ISO 9001', 'IEC 61508', 'EN 81-20', 'FCC Part 15', 'CE Marking', 'RoHS'].map((standard, index) => (
                <div key={index} className={`px-4 py-2 border rounded-lg font-medium ${
                  isDark 
                    ? 'bg-slate-800 border-slate-600 text-slate-300' 
                    : 'bg-gray-50 border-gray-300 text-gray-700'
                }`}>
                  {standard}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnicalSpecs;