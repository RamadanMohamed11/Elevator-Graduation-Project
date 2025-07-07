import React from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Battery, 
  Zap, 
  Smartphone, 
  CheckCircle 
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const FutureUpgrades = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { isDark } = useTheme();

  const currentFeatures = [
    'Advanced Power Supply System',
    'Microcontroller-Based Control',
    '2-Wire Bus Communication',
    'Touchless Interface Technology',
    '3-Phase Power Detection',
    'Diagnostic Bus Sniffer',
    'Mechanical Model Demonstration',
    'Real-time Monitoring'
  ];

  const futureUpgrades = [
    {
      icon: <Battery className="w-8 h-8" />,
      title: 'Uninterruptible Power Supply (UPS)',
      description: 'Battery backup system ensuring continuous operation during power outages with intelligent power management.',
      features: [
        'Seamless power transition',
        'Extended backup duration',
        'Battery health monitoring',
        'Automatic testing cycles'
      ],
      status: 'planned'
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Intelligent Inverter System',
      description: 'Advanced variable frequency drive for smooth motor control, energy optimization, and regenerative braking.',
      features: [
        'Variable speed control',
        'Energy regeneration',
        'Smooth acceleration/deceleration',
        'Motor protection algorithms'
      ],
      status: 'planned'
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: 'Mobile Integration Suite',
      description: 'Comprehensive mobile application for elevator control, monitoring, and maintenance management.',
      features: [
        'Remote elevator control',
        'Maintenance scheduling',
        'Performance dashboards',
        'User preference settings'
      ],
      status: 'concept'
    }
  ];

  const getStatusColor = (status: string) => {
    if (isDark) {
      switch (status) {
        case 'planned': return 'text-green-400 bg-green-400/20';
        case 'development': return 'text-yellow-400 bg-yellow-400/20';
        case 'research': return 'text-blue-400 bg-blue-400/20';
        case 'concept': return 'text-purple-400 bg-purple-400/20';
        default: return 'text-slate-400 bg-slate-400/20';
      }
    } else {
      switch (status) {
        case 'planned': return 'text-green-600 bg-green-100';
        case 'development': return 'text-yellow-600 bg-yellow-100';
        case 'research': return 'text-blue-600 bg-blue-100';
        case 'concept': return 'text-purple-600 bg-purple-100';
        default: return 'text-gray-600 bg-gray-100';
      }
    }
  };

  return (
    <section id="future" className={`py-20 ${
      isDark ? 'bg-slate-900' : 'bg-white'
    }`}>
      <div className="container mx-auto px-6">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent ${
              isDark 
                ? 'bg-gradient-to-r from-white to-cyan-200' 
                : 'bg-gradient-to-r from-gray-900 to-blue-600'
            }`}>
              Future Roadmap
            </h2>
            <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-gray-600'
            }`}>
              Our vision extends beyond the current implementation with planned upgrades and enhancements 
              that will transform this system into a next-generation elevator control platform.
            </p>
          </div>

          {/* Current Implementation */}
          <div className="mb-16">
            <div className={`border rounded-2xl p-8 ${
              isDark 
                ? 'bg-gradient-to-r from-green-900/30 to-emerald-900/30 border-green-500/30' 
                : 'bg-gradient-to-r from-green-50 to-emerald-50 border-green-200'
            }`}>
              <div className="flex items-center mb-6">
                <CheckCircle className={`w-8 h-8 mr-4 ${
                  isDark ? 'text-green-400' : 'text-green-600'
                }`} />
                <h3 className={`text-2xl font-bold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Current Implementation</h3>
              </div>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                {currentFeatures.map((feature, index) => (
                  <div key={index} className={`flex items-center space-x-3 p-3 rounded-lg ${
                    isDark ? 'bg-slate-800/50' : 'bg-white/70'
                  }`}>
                    <CheckCircle className={`w-5 h-5 flex-shrink-0 ${
                      isDark ? 'text-green-400' : 'text-green-600'
                    }`} />
                    <span className={`font-medium ${
                      isDark ? 'text-slate-200' : 'text-gray-800'
                    }`}>{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Future Upgrades */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {futureUpgrades.map((upgrade, index) => (
              <div
                key={index}
                className={`group border rounded-xl p-8 transition-all duration-500 hover:transform hover:scale-105 ${
                  isDark 
                    ? 'bg-slate-800/50 border-slate-700 hover:border-cyan-500/50' 
                    : 'bg-white border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-xl'
                } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 150}ms` }}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`p-3 rounded-lg text-white transition-all duration-300 ${
                      isDark 
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-500 group-hover:shadow-lg group-hover:shadow-cyan-500/25' 
                        : 'bg-gradient-to-r from-blue-500 to-blue-600 group-hover:shadow-lg group-hover:shadow-blue-500/25'
                    }`}>
                      {upgrade.icon}
                    </div>
                    <div>
                      <h3 className={`text-xl font-bold transition-colors ${
                        isDark 
                          ? 'text-white group-hover:text-cyan-200' 
                          : 'text-gray-900 group-hover:text-blue-700'
                      }`}>
                        {upgrade.title}
                      </h3>
                      <div className={`inline-block px-3 py-1 rounded-full text-xs font-medium mt-2 ${getStatusColor(upgrade.status)}`}>
                        {upgrade.status.charAt(0).toUpperCase() + upgrade.status.slice(1)}
                      </div>
                    </div>
                  </div>
                </div>

                <p className={`leading-relaxed mb-6 transition-colors ${
                  isDark 
                    ? 'text-slate-300 group-hover:text-slate-200' 
                    : 'text-gray-600 group-hover:text-gray-700'
                }`}>
                  {upgrade.description}
                </p>

                <div className="mb-6">
                  <ul className="space-y-2">
                    {upgrade.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start space-x-3">
                        <div className={`w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0 ${
                          isDark ? 'bg-cyan-400' : 'bg-blue-500'
                        }`}></div>
                        <span className={`text-sm ${
                          isDark ? 'text-slate-300' : 'text-gray-600'
                        }`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FutureUpgrades;