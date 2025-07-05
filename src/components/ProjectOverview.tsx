import React from 'react';
import { useInView } from 'react-intersection-observer';
import { Cpu, Zap, Radio, Shield, Wrench, TrendingUp, Computer, MonitorSpeaker, FileText, ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface ProjectOverviewProps {
  onShowTechnicalDetails: () => void;
}

const ProjectOverview: React.FC<ProjectOverviewProps> = ({ onShowTechnicalDetails }) => {
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
      icon: <Computer className="w-8 h-8" />,
      title: 'Desktop Simulator',
      description: 'Real-time elevator simulation with bidirectional control between physical and virtual interfaces.',
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Touchless Interface',
      description: 'Contactless button system providing hygienic and responsive user interaction.',
    },
    {
      icon: <MonitorSpeaker className="w-8 h-8" />,
      title: 'Monitoring & Maintenance',
      description: 'Built-in diagnostic tools and bus sniffer for system health monitoring.',
    },
  ];

  return (
    <section id="overview" className={`mt-32 pt-20 pb-20 ${isDark ? 'bg-slate-800/50' : 'bg-white'}`}>

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
              cutting-edge technology with practical engineering solutions, featuring both physical hardware 
              and advanced simulation software for complete system control and monitoring.
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

          {/* Enhanced Statistics with Simulator */}
          <div className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { number: '12', label: 'Months Development', suffix: '+' },
              { number: '9', label: 'System Components', suffix: '' },
              { number: '99.9', label: 'Reliability Rate', suffix: '%' },
              { number: '2-Way', label: 'Control Interface', suffix: '' },
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

          {/* Technical Documentation Call-to-Action */}
          <div className={`mt-16 border rounded-2xl p-8 ${
            isDark 
              ? 'bg-gradient-to-r from-slate-900 to-slate-800 border-slate-700' 
              : 'bg-gradient-to-r from-gray-50 to-white border-gray-200 shadow-lg'
          }`}>
            <div className="text-center mb-8">
              <div className={`inline-flex items-center space-x-3 mb-4 ${
                isDark ? 'text-cyan-400' : 'text-blue-600'
              }`}>
                <FileText className="w-8 h-8" />
                <h3 className={`text-2xl font-bold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Detailed Technical Documentation</h3>
              </div>
              <p className={`text-lg max-w-3xl mx-auto mb-8 ${
                isDark ? 'text-slate-300' : 'text-gray-600'
              }`}>
                Explore comprehensive technical specifications, system architecture details, and implementation 
                methodologies behind our innovative bus-based elevator control system.
              </p>
              
              <button
                onClick={onShowTechnicalDetails}
                className={`group inline-flex items-center space-x-3 px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                  isDark
                    ? 'bg-gradient-to-r from-custom-cyan to-blue-500 hover:from-custom-cyan-dark hover:to-blue-600 text-white shadow-glow'
                    : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl'
                }`}
              >
                <FileText className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>Read Technical Documentation</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </div>

          {/* Simulator Integration Highlight */}
          <div className={`mt-12 border rounded-2xl p-8 ${
            isDark 
              ? 'bg-gradient-to-r from-blue-900/20 to-cyan-900/20 border-cyan-500/30' 
              : 'bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200'
          }`}>
            <div className="text-center mb-8">
              <div className={`inline-flex items-center space-x-3 mb-4 ${
                isDark ? 'text-cyan-400' : 'text-blue-600'
              }`}>
                <Computer className="w-8 h-8" />
                <h3 className={`text-2xl font-bold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Dual Control System</h3>
              </div>
              <p className={`text-lg max-w-3xl mx-auto ${
                isDark ? 'text-slate-300' : 'text-gray-600'
              }`}>
                Our innovative system features bidirectional control between the physical elevator and desktop simulator. 
                Users can operate the elevator using either the physical buttons or the simulator interface, 
                with real-time synchronization ensuring both systems reflect the current elevator position and status.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className={`text-center p-6 rounded-lg ${
                isDark ? 'bg-slate-800/50' : 'bg-white/70'
              }`}>
                <div className={`text-3xl font-bold mb-2 ${
                  isDark ? 'text-cyan-400' : 'text-blue-600'
                }`}>Physical Control</div>
                <div className={`text-sm ${
                  isDark ? 'text-slate-400' : 'text-gray-600'
                }`}>Real elevator buttons and touchless interface</div>
              </div>
              <div className={`text-center p-6 rounded-lg ${
                isDark ? 'bg-slate-800/50' : 'bg-white/70'
              }`}>
                <div className={`text-3xl font-bold mb-2 ${
                  isDark ? 'text-cyan-400' : 'text-blue-600'
                }`}>Virtual Control</div>
                <div className={`text-sm ${
                  isDark ? 'text-slate-400' : 'text-gray-600'
                }`}>Desktop simulator with 3D visualization</div>
              </div>
              <div className={`text-center p-6 rounded-lg ${
                isDark ? 'bg-slate-800/50' : 'bg-white/70'
              }`}>
                <div className={`text-3xl font-bold mb-2 ${
                  isDark ? 'text-cyan-400' : 'text-blue-600'
                }`}>Real-Time Sync</div>
                <div className={`text-sm ${
                  isDark ? 'text-slate-400' : 'text-gray-600'
                }`}>Synchronized position and status updates</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;