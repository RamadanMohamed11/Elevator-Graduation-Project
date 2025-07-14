import React from 'react';
import { PanelTop } from 'lucide-react';
import { PlugZap } from 'lucide-react';
import { TrendingUp } from 'lucide-react';
import { useInView } from 'react-intersection-observer';
import { 
  ArrowLeft, 
  Cpu, 
  Hand, 
  Zap, 
  Activity, 
  Search,
  Monitor,
  ChevronRight,
  CheckCircle,
  AlertTriangle,
  Info
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface TechnicalDetailsProps {
  onBack: () => void;
}

const TechnicalDetails: React.FC<TechnicalDetailsProps> = ({ onBack }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const { isDark } = useTheme();

  const sections = [
    {
      id: 'introduction',
      title: 'Project Introduction',
      icon: <Info className="w-6 h-6" />,
      content: `Elevators play a critical role in modern infrastructure, requiring seamless coordination between control panels, motors, sensors, and safety systems. However, most existing elevator systems rely on traditional point-to-point wiring and outdated communication methods, which result in complex installations, higher costs, and difficulties in maintenance or scaling.

This graduation project addresses those challenges by proposing a new, bus-based communication architecture for elevator systems. The core idea is to develop a centralized, efficient system capable of transmitting both data and power over a shared bus line, significantly simplifying wiring and enabling modular scalability.

To support this architecture, we designed a full system that includes hardware modules such as touchless button interfaces, I/O expanders, power converters, and diagnostic tools. Additionally, we developed a mechanical elevator model and a software protocol to validate system behavior in realistic scenarios.

The objective of this project is not only to demonstrate the technical feasibility of a smart bus-based elevator system, but also to offer a practical platform for development, testing, and maintenance in future elevator technologies.`
    },
     {
      id: 'power supply',
      title: 'Power Supply (220V AC to 12V or 70V DC)',
      icon: <PlugZap className="w-6 h-6" />,
      content: `The Power Supply unit is responsible for converting standard 220V AC mains power into a regulated 12V or 70V DC output . It serves as the core power source for all subsystems within the elevator platform, including controllers, I/O devices, and sensors. Designed with industrial reliability in mind, the supply is built using high-efficiency switching technology. This makes it well-suited for both centralized power delivery and distributed elevator system configurations.`
    },
    {
      id: 'simulator',
      title: 'Simulator Unit',
      icon: <Monitor className="w-6 h-6" />,
      content: `The simulator is a comprehensive testing platform designed by our team to emulate elevator system behavior in a controlled and safe environment. It is used to test all elevator control boards exclusively through our custom-developed I/O expander, which acts as the central interface between the simulator and the control boards.

The simulator generates and monitors signals that mimic real elevator conditions — including sensor feedback, motor control signals, button inputs, and safety triggers. This enables complete functional validation of any control board without the need for physical elevator components. It allows for rapid prototyping, debugging, and safe testing of both standard and our bus-based elevator control boards, ensuring reliability before actual deployment.

By combining hardware simulation with our expander-based interface, the simulator streamlines development, supports repeatable testing procedures, and reduces the risk of hardware damage during the early stages of design and validation.`
    },
    {
      id: 'touchless',
      title: 'Touch-less Button Interface',
      icon: <Hand className="w-6 h-6" />,
      content: `The touch-less button interface is designed to provide a hygienic, durable, and user-friendly alternative to traditional mechanical push buttons. Each button consists of a recessed opening that uses infrared sensors to detect when a user inserts their finger into the hole. The system relies on the interruption of an IR beam within the cavity to confirm a valid input.

This method ensures that button activation is deliberate and reduces the risk of false triggers caused by nearby motion or light. The use of a hole-guided detection system offers both physical targeting and protection from external environmental noise. Each button also includes LED feedback indicators, giving the user visual confirmation that their input has been successfully registered.

By eliminating mechanical parts, the touchless design improves durability and long-term reliability, making it well-suited for high-usage environments such as elevators. The clean, modern interface also aligns with increasing demands for hygienic public interaction systems.`
    },
    {
      id: 'phase-detection',
      title: 'Phase Detection and Correction Module',
      icon: <Activity className="w-6 h-6" />,
      content: `To ensure motor safety and reliable operation, we designed a phase detection circuit that continuously monitors the input AC line. This subsystem identifies phase mismatches or interruptions and corrects them, ensuring safe startup and motor synchronization. This is especially crucial in elevator systems where incorrect phase alignment can lead to mechanical damage or unsafe movement.`
    },
    {
      id: 'buck-converter',
      title: 'Buck Converter',
      icon: <Zap className="w-6 h-6" />,
      content: `In our system, when a 70V bus is used for long-range power distribution, a high-efficiency buck converter steps this voltage down to 12V at each node. This allows use of low-voltage logic, sensors, and displays while maintaining the advantages of high-voltage transmission. The buck converter was designed for stable output regulation under dynamic load conditions.`
    },
      {
      id: 'boost-converter',
      title: 'Boost Converter',
      icon: <TrendingUp className="w-6 h-6" />,
      content: `The Boost Converter is a high-efficiency DC-DC power module used to step up a 12V DC bus voltage to 70V, specifically to drive the retiring cam mechanism that locks or unlocks the elevator car at each floor. This design allows the elevator system to operate on a 12V bus that simultaneously delivers both power and data over just two wires, minimizing wiring complexity. The Boost Converter is placed locally near the cam actuator, providing the necessary high voltage only where needed, while maintaining system-wide simplicity and modularity. It represents one approach to powering high-voltage components from a low-voltage distributed bus.`
    },
        {
      id: 'Step-up Transformer',
      title: 'Step-up Transformer (12V Square Wave to 70V)',
      icon: <TrendingUp className="w-6 h-6" />,
      content: `The Step-up Transformer is used to power the retiring cam mechanism by converting a 12V square-wave signal (generated by high-frequency switching at around 50kHz) into a 70V output. Unlike traditional transformers that operate on sinusoidal AC, this module is driven by a pair of MOSFETs switching between 0V and 12V at high frequency. This square-wave signal mimics AC behavior and enables efficient electromagnetic induction within the transformer core.

This approach allows the system to maintain a low-voltage 12V DC bus while still generating the high voltage required by the cam — without the need for a full boost converter. It also provides basic galvanic isolation between the control circuitry and the actuator. This technique is especially effective in compact systems where simplicity, modularity, and electromagnetic compatibility are important.`
    },
    {
      id: 'sniffer',
      title: 'Sniffer System (PC-Based Debugging Tool)',
      icon: <Search className="w-6 h-6" />,
      content: `The Sniffer is an advanced diagnostic and debugging tool developed to interface the elevator system with a PC via USB or serial communication. Its primary function is to monitor, capture, and decode real-time data traffic across the communication bus, providing developers with deep visibility into system behavior.

Beyond passive monitoring, the Sniffer also provides active control capabilities, allowing users to simulate button presses, override module commands, and fully control the elevator system during testing. This makes it an essential tool for development environments, system validation, and protocol-level troubleshooting.`
    },
     {
      id: 'Maintainer',
      title: 'Maintainer Unit (LCD-Based Field Diagnostic Tool)',
      icon: <PanelTop className="w-6 h-6" />,
      content: `The Maintainer is a lightweight, field-deployable diagnostic tool developed to assist technicians during system maintenance. It connects directly to the communication bus and displays real-time signal states, module responses, and fault conditions on an LCD screen. With a user-friendly interface, technicians can quickly identify issues.`
    }
  ];

  const keyFeatures = [
    {
      title: 'Bus-Based Architecture',
      description: 'Centralized communication system reducing wiring complexity',
      icon: <Cpu className="w-5 h-5" />
    },
    {
      title: 'Power & Data Integration',
      description: 'Single bus line carries both power and communication signals',
      icon: <Zap className="w-5 h-5" />
    },
    {
      title: 'Modular Scalability',
      description: 'Easy expansion and modification of system components',
      icon: <CheckCircle className="w-5 h-5" />
    },
    {
      title: 'Advanced Diagnostics',
      description: 'Real-time monitoring and debugging capabilities',
      icon: <Search className="w-5 h-5" />
    }
  ];

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDark ? 'bg-slate-900 text-white' : 'bg-gray-50 text-gray-900'
    }`}>
      {/* Header */}
      <div className={`sticky top-0 z-40 border-b backdrop-blur-lg ${
        isDark 
          ? 'bg-slate-900/95 border-slate-700' 
          : 'bg-white/95 border-gray-200'
      }`}>
        <div className="container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className={`flex items-center space-x-3 px-4 py-2 rounded-lg transition-all duration-300 hover:scale-105 ${
                isDark
                  ? 'bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white border border-slate-600'
                  : 'bg-white hover:bg-gray-50 text-gray-600 hover:text-gray-800 border border-gray-200 shadow-sm'
              }`}
            >
              <ArrowLeft className="w-5 h-5" />
              <span className="font-medium">Back to Overview</span>
            </button>
            
            <div className="text-center">
              <h1 className={`text-2xl font-bold ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Technical Documentation</h1>
              <p className={`text-sm ${
                isDark ? 'text-custom-cyan' : 'text-blue-600'
              }`}>Advanced Elevator Control System</p>
            </div>
            
            <div className="w-32"></div> {/* Spacer for centering */}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-6 py-12">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h2 className={`text-4xl lg:text-5xl font-bold mb-6 bg-clip-text text-transparent ${
              isDark 
                ? 'bg-gradient-to-r from-white to-custom-cyan animate-textGlow' 
                : 'bg-gradient-to-r from-gray-900 to-blue-600'
            }`}>
              System Architecture & Implementation
            </h2>
            <p className={`text-xl max-w-4xl mx-auto leading-relaxed ${
              isDark ? 'text-slate-300' : 'text-gray-600'
            }`}>
              Comprehensive technical documentation detailing the innovative bus-based communication 
              architecture and advanced components of our elevator control system.
            </p>
          </div>

          {/* Key Features Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {keyFeatures.map((feature, index) => (
              <div
                key={index}
                className={`p-6 border rounded-xl transition-all duration-500 hover:scale-105 ${
                  isDark 
                    ? 'bg-slate-800/50 border-slate-700 hover:border-custom-cyan/50' 
                    : 'bg-white border-gray-200 hover:border-blue-300 shadow-lg hover:shadow-xl'
                } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <div className={`p-3 rounded-lg w-fit mb-4 ${
                  isDark 
                    ? 'bg-gradient-to-r from-custom-cyan to-blue-500 text-white' 
                    : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white'
                }`}>
                  {feature.icon}
                </div>
                <h3 className={`text-lg font-bold mb-2 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>{feature.title}</h3>
                <p className={`text-sm ${
                  isDark ? 'text-slate-400' : 'text-gray-600'
                }`}>{feature.description}</p>
              </div>
            ))}
          </div>

          {/* Technical Sections */}
          <div className="space-y-12">
            {sections.map((section, index) => (
              <div
                key={section.id}
                className={`border rounded-2xl overflow-hidden transition-all duration-500 ${
                  isDark 
                    ? 'bg-slate-800/30 border-slate-700' 
                    : 'bg-white border-gray-200 shadow-lg'
                } ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
                style={{ transitionDelay: `${(index + 4) * 150}ms` }}
              >
                {/* Section Header */}
                <div className={`p-8 border-b ${
                  isDark 
                    ? 'border-slate-700 bg-slate-900/50' 
                    : 'border-gray-200 bg-gray-50/50'
                }`}>
                  <div className="flex items-center space-x-4">
                    <div className={`p-4 rounded-xl text-white shadow-lg ${
                      isDark 
                        ? 'bg-gradient-to-r from-custom-cyan to-blue-500' 
                        : 'bg-gradient-to-r from-blue-500 to-blue-600'
                    }`}>
                      {section.icon}
                    </div>
                    <div>
                      <h3 className={`text-2xl font-bold ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>{section.title}</h3>
                      {section.id === 'introduction' && (
                        <p className={`text-lg font-medium mt-1 ${
                          isDark ? 'text-custom-cyan' : 'text-blue-600'
                        }`}>Project Overview & Objectives</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Section Content */}
                <div className="p-8">
                  <div className={`prose prose-lg max-w-none ${
                    isDark 
                      ? 'prose-invert prose-headings:text-white prose-p:text-slate-300 prose-strong:text-white' 
                      : 'prose-gray prose-headings:text-gray-900 prose-p:text-gray-700'
                  }`}>
                    {section.content.split('\n\n').map((paragraph, pIndex) => (
                      <p key={pIndex} className={`text-lg leading-relaxed mb-6 ${
                        isDark ? 'text-slate-300' : 'text-gray-700'
                      }`}>
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Technical Highlights */}
          <div className={`mt-16 border rounded-2xl p-8 ${
            isDark 
              ? 'bg-gradient-to-r from-slate-900 to-slate-800 border-slate-700' 
              : 'bg-gradient-to-r from-gray-50 to-white border-gray-200 shadow-lg'
          }`}>
            <h3 className={`text-2xl font-bold mb-8 text-center ${
              isDark ? 'text-white' : 'text-gray-900'
            }`}>System Innovation Highlights</h3>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className={`text-4xl font-bold mb-2 ${
                  isDark ? 'text-custom-cyan' : 'text-blue-600'
                }`}>Bus-Based</div>
                <div className={`text-lg font-semibold mb-1 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Architecture</div>
                <div className={`text-sm ${
                  isDark ? 'text-slate-400' : 'text-gray-600'
                }`}>Centralized communication reducing wiring complexity</div>
              </div>
              
              <div className="text-center">
                <div className={`text-4xl font-bold mb-2 ${
                  isDark ? 'text-custom-cyan' : 'text-blue-600'
                }`}>2-Wire</div>
                <div className={`text-lg font-semibold mb-1 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Power & Data</div>
                <div className={`text-sm ${
                  isDark ? 'text-slate-400' : 'text-gray-600'
                }`}>Simultaneous power and data transmission</div>
              </div>
              
              <div className="text-center">
                <div className={`text-4xl font-bold mb-2 ${
                  isDark ? 'text-custom-cyan' : 'text-blue-600'
                }`}>IR Touchless</div>
                <div className={`text-lg font-semibold mb-1 ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Interface</div>
                <div className={`text-sm ${
                  isDark ? 'text-slate-400' : 'text-gray-600'
                }`}>Hygienic infrared sensor button system</div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <div className={`inline-block p-8 border rounded-2xl ${
              isDark 
                ? 'bg-gradient-to-r from-custom-cyan/10 to-blue-500/10 border-custom-cyan/30' 
                : 'bg-gradient-to-r from-blue-50 to-cyan-50 border-blue-200'
            }`}>
              <h4 className={`text-2xl font-bold mb-4 ${
                isDark ? 'text-white' : 'text-gray-900'
              }`}>Ready to Explore the System?</h4>
              <p className={`text-lg mb-6 max-w-2xl mx-auto ${
                isDark ? 'text-slate-300' : 'text-gray-600'
              }`}>
                Discover how our innovative bus-based architecture revolutionizes elevator control systems 
                through practical implementation and advanced engineering solutions.
              </p>
              <button
                onClick={onBack}
                className={`px-8 py-4 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                  isDark
                    ? 'bg-gradient-to-r from-custom-cyan to-blue-500 hover:from-custom-cyan-dark hover:to-blue-600 text-white shadow-glow'
                    : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl'
                }`}
              >
                Return to System Overview
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnicalDetails;