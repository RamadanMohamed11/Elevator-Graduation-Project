import React, { useState } from 'react';
import { useInView } from 'react-intersection-observer';
import { 
  Zap, 
  Cpu, 
  Radio, 
  Hand, 
  Activity, 
  Settings, 
  Search, 
  Monitor,
  Play,
  ChevronRight,
  Computer,
  X
} from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const ComponentShowcase = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const [activeComponent, setActiveComponent] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);
  const { isDark } = useTheme();

  const components = [
    {
      id: 0,
      icon: <Zap className="w-6 h-6" />,
      title: 'Power Supply System',
      subtitle: 'Intelligent Power Management',
      description: 'Advanced switching power supply with multiple output rails, overvoltage protection, and intelligent load balancing. Features automatic power factor correction and energy-efficient design with 3D monitoring capabilities.',
      features: [
        'output 12V',
        'Overvoltage & overcurrent protection',
        'Power factor correction',
        'Energy efficiency > 90%',
        'Hot-swappable backup system',
        '3D power visualization'
      ],
      videoPlaceholder: 'Power Supply 3D Demo Video',
      backgroundImage: 'https://www.audiophonics.fr/23099-thickbox_default/audiophonics-lpsu25-linear-regulated-power-supply-emi-rfi-filter-220v-to-12v-125a-25va.jpg',
      videoUrl: 'https://res.cloudinary.com/dhjyfpw6f/video/upload/v1751644713/v1_ybz8ra.mp4',
      technicalSpecs: {
        'Input Voltage': '220V AC',
        'Output Power': '180W',
        'Efficiency': '92%',
      }
    },
    {
      id: 1,
      icon: <Cpu className="w-6 h-6" />,
      title: 'Elevator Controller',
      subtitle: 'Microcontroller-Based Control',
      description: 'High-performance microcontroller system managing all elevator operations including floor selection, door control, safety systems, and communication protocols with advanced 3D interface.',
      features: [
        'Real-time floor positioning',
        'Safety system integration',
        'Emergency stop protocols',
        'Predictive maintenance alerts',
        'Remote monitoring capabilities',
        '3D system visualization'
      ],
      videoPlaceholder: 'Controller 3D Operation Demo',
      backgroundImage: 'https://meiusa.com/wp-content/uploads/2024/01/Hydraulic-Controller-400-600x600-1.jpg',
      videoUrl: 'https://res.cloudinary.com/dhjyfpw6f/video/upload/v1751644713/v1_ybz8ra.mp4',
      technicalSpecs: {
        'Processor': 'PIC Microcontrollers',
        'Memory': '1MB Flash, 192KB RAM',
        'I/O Ports': '64 Digital, 16 Analog',
        'Communication': 'CAN, UART, SPI, I2C'
      }
    },
    {
      id: 2,
      icon: <Radio className="w-6 h-6" />,
      title: 'Bus Communication',
      subtitle: '2-Wire Data & Power System',
      description: 'Revolutionary communication system that transmits both data and power over just two wires, reducing installation complexity and improving reliability with real-time 3D signal visualization.',
      features: [
        'Simultaneous data & power transmission',
        'Error detection & correction',
        'Auto-addressing capability',
        'Noise immunity design',
        'Scalable network topology',
        '3D signal flow visualization'
      ],
      videoPlaceholder: 'Bus Communication 3D Protocol Demo',
      backgroundImage: 'https://blog.intellimeter.com/hs-fs/hubfs/images/blogs/2021/what%20is%20mbus%202/Picture1.png?width=468&name=Picture1.png',
      videoUrl: 'https://res.cloudinary.com/dhjyfpw6f/video/upload/v1751644713/v1_ybz8ra.mp4',
      technicalSpecs: {
        'Data Rate': '10 Kbps',
        'Max Distance': '1000m',
        'Power Delivery': '12V, 15A',
        'Protocol': 'Custom RS-485 based'
      }
    },
    {
      id: 3,
      icon: <Computer className="w-6 h-6" />,
      title: 'Desktop Simulator',
      subtitle: 'Real-Time Elevator Simulation',
      description: 'Advanced desktop application that provides real-time simulation of the elevator system. Features bidirectional control allowing operation from both physical buttons and simulator interface with synchronized movement and position tracking.',
      features: [
        'Real-time elevator simulation',
        'Bidirectional control system',
        'Synchronized position tracking',
        'Virtual button interface',
        'Live system monitoring',
        '3D visualization engine'
      ],
      videoPlaceholder: 'Desktop Simulator 3D Interface Demo',
      backgroundImage: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
      videoUrl: 'https://res.cloudinary.com/dhjyfpw6f/video/upload/v1751644713/v1_ybz8ra.mp4',
      technicalSpecs: {
        'Platform': 'Windows',
        'Framework': 'Windows API (C++)',
        'Update Rate': '50 Hz',
        'Communication': 'Serial/USB'
      }
    },
    {
      id: 4,
      icon: <Monitor className="w-6 h-6" />,
      title: 'Floor Display System',
      subtitle: 'Sliding Number Display',
      description: 'Dynamic floor display system with smooth sliding animations and high-visibility LED segments. Features customizable display patterns, multiple viewing modes, and stunning 3D effects.',
      features: [
        'Smooth sliding number transitions',
        'High-brightness LED segments',
        'Multiple display modes',
        'Customizable 3D animations',
        'Auto-brightness adjustment',
        'Holographic display effects'
      ],
      videoPlaceholder: 'Floor Display 3D Animation Demo',
      backgroundImage: 'https://media.istockphoto.com/id/873546554/photo/elevator-screen-show-floor-number.jpg?s=612x612&w=0&k=20&c=CJjYmYhIlAcZl4iJ66VMIZR7RfVQt4EJ1PEzZrM2sgU=',
      videoUrl: 'https://res.cloudinary.com/dhjyfpw6f/video/upload/v1751644713/v1_ybz8ra.mp4',
      technicalSpecs: {
        'Display Type': '7-Segment LED and Arrow Segment',
        // 'Brightness': '1000 nits',
        // 'Viewing Angle': '160°',
        // 'Refresh Rate': '60 Hz'
      }
    },
    {
      id: 5,
      icon: <Hand className="w-6 h-6" />,
      title: 'Touchless Buttons',
      subtitle: 'Contactless Interface',
      description: 'Advanced capacitive and infrared sensor system providing completely touchless button operation with haptic feedback, visual confirmation, and immersive 3D interaction effects.',
      features: [
        'Infrared proximity detection',
        'Capacitive touch sensing',
        'Visual & haptic feedback',
        'Anti-false trigger algorithms',
        'Hygienic operation',
        '3D gesture recognition'
      ],
      videoPlaceholder: 'Touchless Interface 3D Demo',
      backgroundImage: 'https://www.corplock.com.au/cdn/shop/products/NT70Features-Corplock_1bebc67b-cabf-4edc-8a5d-93dd9f345051_1200x1200.jpg?v=1613363431',
      videoUrl: 'https://res.cloudinary.com/dhjyfpw6f/video/upload/v1751644713/v1_ybz8ra.mp4',
      technicalSpecs: {
        'Detection Range': '2-10cm',
        'Response Time': '<100ms',
        'Accuracy': '99.8%',
        'Operating Temp': '-20°C to +70°C'
      }
    },
    {
      id: 6,
      icon: <Activity className="w-6 h-6" />,
      title: '3-Phase Detection',
      subtitle: 'Power Quality Monitoring',
      description: 'Comprehensive three-phase power monitoring system detecting phase sequence, voltage imbalance, and power quality issues in real-time with advanced 3D waveform visualization.',
      features: [
        'Phase sequence detection',
        'Voltage & current monitoring',
        'Power quality analysis',
        'Harmonic distortion measurement',
        'Fault prediction algorithms',
        '3D waveform visualization'
      ],
      videoPlaceholder: '3-Phase Monitoring 3D Demo',
      backgroundImage: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQy3cDY0I-kIJWg6cbTsY4E5-x0lnSh-26aeQ&s',
      videoUrl: 'https://res.cloudinary.com/dhjyfpw6f/video/upload/v1751644713/v1_ybz8ra.mp4',
      technicalSpecs: {
        'Voltage Range': '100-500V',
        'Frequency': '45-65 Hz',
        'Accuracy': '±0.1%',
        'Sampling Rate': '10 kHz'
      }
    },
    {
      id: 7,
      icon: <Search className="w-6 h-6" />,
      title: 'Bus Sniffer',
      subtitle: 'Diagnostic & Maintenance Tool',
      description: 'Professional diagnostic tool for monitoring, analyzing, and troubleshooting the bus communication system with real-time data capture, analysis, and immersive 3D network visualization.',
      features: [
        'Real-time bus monitoring',
        'Protocol analysis',
        'Error detection & logging',
        'Performance metrics',
        'Maintenance scheduling',
        '3D network topology view'
      ],
      videoPlaceholder: 'Bus Sniffer 3D Interface Demo',
      backgroundImage: 'https://res.cloudinary.com/dhjyfpw6f/image/upload/v1751668688/ChatGPT_Image_Jul_5_2025_01_37_34_AM_bnyk7i.png',
      videoUrl: 'https://res.cloudinary.com/dhjyfpw6f/video/upload/v1751644713/v1_ybz8ra.mp4',
      technicalSpecs: {
        'Capture Rate': '10 Mbps',
        'Memory': '2GB logging capacity',
        'Analysis': 'Real-time & offline',
        'Interface': 'USB 3.0, Ethernet'
      }
    },
    {
      id: 8,
      icon: <Settings className="w-6 h-6" />,
      title: 'Mechanical Model',
      subtitle: 'Physical Demonstration Platform',
      description: 'Scale mechanical model demonstrating the complete elevator system with working components, safety features, realistic operation dynamics, and integrated 3D monitoring display.',
      features: [
        'Scale mechanical operation',
        'Safety system demonstration',
        'Load testing capability',
        'Educational interface',
        'Remote control operation',
        '3D real-time monitoring'
      ],
      videoPlaceholder: 'Mechanical Model 3D Operation',
      backgroundImage: 'https://mir-s3-cdn-cf.behance.net/project_modules/1400/d54f1956490261.59b09005aed88.png',
      videoUrl: 'https://res.cloudinary.com/dhjyfpw6f/video/upload/v1751644713/v1_ybz8ra.mp4',
      technicalSpecs: {
        'Scale': '1:10',
        'Load Capacity': '5kg',
        'Travel Speed': '0.1 m/s',
        'Floors': '5 levels'
      }
    }
  ];

  const openVideoModal = () => {
    setIsVideoModalOpen(true);
    // Prevent body scroll when modal is open
    document.body.style.overflow = 'hidden';
  };

  const closeVideoModal = () => {
    setIsVideoModalOpen(false);
    // Restore body scroll
    document.body.style.overflow = 'unset';
  };

  // Close modal on escape key
  React.useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        closeVideoModal();
      }
    };

    if (isVideoModalOpen) {
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isVideoModalOpen]);

  return (
    <section id="components" className={`py-20 relative overflow-hidden border-y ${
      isDark 
        ? 'bg-slate-950 border-slate-800' 
        : 'bg-white border-gray-200'
    }`}>
      {/* Background Elements */}
      <div className="absolute inset-0 perspective-2000">
        <div className={`absolute top-20 right-20 w-40 h-40 rounded-full animate-float3d ${
          isDark 
            ? 'bg-gradient-to-r from-custom-cyan-light to-transparent opacity-5' 
            : 'bg-gradient-to-r from-blue-200 to-transparent opacity-20'
        }`}></div>
        <div className={`absolute bottom-40 left-32 w-32 h-32 border rounded-lg animate-rotate3d ${
          isDark 
            ? 'border-custom-cyan-light opacity-10' 
            : 'border-blue-300 opacity-20'
        }`}></div>
        <div className={`absolute top-1/2 left-10 w-24 h-24 rounded-full animate-morphing ${
          isDark 
            ? 'bg-custom-cyan-light opacity-5' 
            : 'bg-blue-200 opacity-15'
        }`}></div>
      </div>

      {/* Grid Pattern */}
      <div className={`absolute inset-0 ${isDark ? 'opacity-5' : 'opacity-10'}`}>
        <div className="w-full h-full" style={{
          backgroundImage: `
            linear-gradient(${isDark ? 'rgba(124, 232, 255, 0.05)' : 'rgba(59, 130, 246, 0.1)'} 1px, transparent 1px),
            linear-gradient(90deg, ${isDark ? 'rgba(124, 232, 255, 0.05)' : 'rgba(59, 130, 246, 0.1)'} 1px, transparent 1px)
          `,
          backgroundSize: '60px 60px',
        }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div ref={ref} className={`transition-all duration-1000 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="text-center mb-16">
            <h2 className={`text-5xl lg:text-6xl font-bold mb-8 bg-clip-text text-transparent ${
              isDark 
                ? 'bg-gradient-to-r from-white to-custom-cyan animate-textGlow' 
                : 'bg-gradient-to-r from-gray-900 to-blue-600'
            }`}>
              System Components
            </h2>
            <p className={`text-xl max-w-3xl mx-auto leading-relaxed ${
              isDark ? 'text-slate-400' : 'text-gray-600'
            }`}>
              Explore each component of our comprehensive elevator control system with detailed specifications, 
              3D visualizations, and interactive demonstration videos.
            </p>
          </div>

          <div className="grid lg:grid-cols-4 gap-8">
            {/* Component Navigation */}
            <div className="lg:col-span-1">
              <div className={`border rounded-2xl p-6 shadow-2xl backdrop-blur-sm ${
                isDark 
                  ? 'bg-slate-900/80 border-slate-700' 
                  : 'bg-white/90 border-gray-200 shadow-xl'
              }`}>
                <h3 className={`text-xl font-bold mb-6 ${
                  isDark 
                    ? 'text-white animate-textGlow' 
                    : 'text-gray-900'
                }`}>Components</h3>
                <div className="space-y-3">
                  {components.map((component, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveComponent(index)}
                      className={`w-full flex items-center space-x-3 p-4 rounded-xl transition-all duration-500 text-left transform hover:scale-105 border ${
                        activeComponent === index
                          ? isDark
                            ? 'bg-gradient-to-r from-custom-cyan to-blue-500 text-white shadow-glow animate-pulse3d'
                            : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white shadow-lg'
                          : isDark
                            ? 'hover:bg-slate-800 text-slate-400 hover:text-slate-200 hover:border-custom-cyan-light border-slate-700'
                            : 'hover:bg-gray-50 text-gray-600 hover:text-gray-800 hover:border-blue-300 border-gray-200'
                      }`}
                    >
                      <div className={`p-2 rounded-lg ${
                        activeComponent === index 
                          ? 'text-white bg-white/20' 
                          : isDark
                            ? 'text-custom-cyan bg-slate-800'
                            : 'text-blue-600 bg-blue-50'
                      }`}>
                        {component.icon}
                      </div>
                      <span className="font-medium text-sm">{component.title}</span>
                      <ChevronRight className={`w-4 h-4 ml-auto transition-transform duration-300 ${
                        activeComponent === index ? 'rotate-90' : ''
                      }`} />
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Component Details */}
            <div className="lg:col-span-3">
              <div className={`border rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm ${
                isDark 
                  ? 'bg-slate-900/90 border-slate-700' 
                  : 'bg-white/95 border-gray-200 shadow-xl'
              }`}>
                {/* Header */}
                <div className={`p-8 border-b ${
                  isDark 
                    ? 'border-slate-700 bg-slate-900/95' 
                    : 'border-gray-200 bg-gray-50/50'
                }`}>
                  <div className="flex items-center space-x-4 mb-6">
                    <div className={`p-4 rounded-xl text-white shadow-glow ${
                      isDark 
                        ? 'bg-gradient-to-r from-custom-cyan to-blue-500 animate-pulse3d' 
                        : 'bg-gradient-to-r from-blue-500 to-blue-600 shadow-lg'
                    }`}>
                      {components[activeComponent].icon}
                    </div>
                    <div>
                      <h3 className={`text-3xl font-bold ${
                        isDark 
                          ? 'text-white animate-textGlow' 
                          : 'text-gray-900'
                      }`}>{components[activeComponent].title}</h3>
                      <p className={`font-semibold text-lg ${
                        isDark ? 'text-custom-cyan' : 'text-blue-600'
                      }`}>{components[activeComponent].subtitle}</p>
                    </div>
                  </div>
                  <p className={`leading-relaxed text-lg ${
                    isDark ? 'text-slate-400' : 'text-gray-600'
                  }`}>{components[activeComponent].description}</p>
                </div>

                {/* Content */}
                <div className={`grid md:grid-cols-2 gap-8 p-8 ${
                  isDark ? 'bg-slate-950/50' : 'bg-white'
                }`}>
                  {/* Video Placeholder with Background Image */}
                  <div 
                    onClick={openVideoModal}
                    className={`relative border-2 rounded-xl aspect-video flex items-center justify-center group cursor-pointer transform hover:scale-105 animate-cardHover3d shadow-xl transition-all duration-500 overflow-hidden ${
                      isDark 
                        ? 'border-slate-700 hover:border-custom-cyan' 
                        : 'border-gray-300 hover:border-blue-400'
                    }`}
                  >
                    {/* Background Image */}
                    <div 
                      className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                      style={{
                        backgroundImage: `url(${components[activeComponent].backgroundImage})`,
                      }}
                    >
                      {/* Overlay */}
                      <div className={`absolute inset-0 ${
                        isDark 
                          ? 'bg-slate-900/70 group-hover:bg-slate-900/60' 
                          : 'bg-white/70 group-hover:bg-white/60'
                      } transition-all duration-300`}></div>
                    </div>
                    
                    {/* Content */}
                    <div className="relative z-10 text-center">
                      <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-125 transition-transform duration-500 shadow-glow-lg ${
                        isDark 
                          ? 'bg-gradient-to-r from-custom-cyan to-blue-500 animate-pulse3d' 
                          : 'bg-gradient-to-r from-blue-500 to-blue-600'
                      }`}>
                        <Play className="w-10 h-10 text-white ml-1" />
                      </div>
                      <p className={`font-bold text-lg mb-2 ${
                        isDark ? 'text-white' : 'text-gray-900'
                      }`}>{components[activeComponent].videoPlaceholder}</p>
                      <p className={`text-sm font-medium ${
                        isDark 
                          ? 'text-custom-cyan animate-textGlow' 
                          : 'text-blue-600'
                      }`}>Click to play 3D demonstration</p>
                    </div>
                  </div>

                  {/* Features & Specs */}
                  <div className="space-y-8">
                    {/* Key Features */}
                    <div>
                      <h4 className={`text-xl font-bold mb-6 ${
                        isDark 
                          ? 'text-white animate-textGlow' 
                          : 'text-gray-900'
                      }`}>Key Features</h4>
                      <ul className="space-y-3">
                        {components[activeComponent].features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-3 group">
                            <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 animate-pulse group-hover:scale-150 transition-transform ${
                              isDark ? 'bg-custom-cyan' : 'bg-blue-500'
                            }`}></div>
                            <span className={`group-hover:transition-colors ${
                              isDark 
                                ? 'text-slate-400 group-hover:text-slate-200' 
                                : 'text-gray-600 group-hover:text-gray-800'
                            }`}>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technical Specs */}
                    <div>
                      <h4 className={`text-xl font-bold mb-6 ${
                        isDark 
                          ? 'text-white animate-textGlow' 
                          : 'text-gray-900'
                      }`}>Technical Specifications</h4>
                      <div className="space-y-4">
                        {Object.entries(components[activeComponent].technicalSpecs).map(([key, value], index) => (
                          <div key={index} className={`flex justify-between items-center py-3 border-b transition-colors group ${
                            isDark 
                              ? 'border-slate-800 hover:border-custom-cyan-light' 
                              : 'border-gray-200 hover:border-blue-300'
                          }`}>
                            <span className={`font-medium transition-colors ${
                              isDark 
                                ? 'text-slate-500 group-hover:text-custom-cyan' 
                                : 'text-gray-500 group-hover:text-blue-600'
                            }`}>{key}</span>
                            <span className={`font-bold text-lg transition-colors ${
                              isDark 
                                ? 'text-slate-200 group-hover:text-custom-cyan' 
                                : 'text-gray-800 group-hover:text-blue-600'
                            }`}>{value}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Video Modal */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
            onClick={closeVideoModal}
          ></div>
          
          {/* Modal Content */}
          <div className={`relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl ${
            isDark ? 'bg-slate-900' : 'bg-white'
          }`}>
            {/* Modal Header */}
            <div className={`flex items-center justify-between p-6 border-b ${
              isDark ? 'border-slate-700' : 'border-gray-200'
            }`}>
              <div>
                <h3 className={`text-2xl font-bold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>System Demonstration</h3>
                <p className={`text-lg ${
                  isDark ? 'text-custom-cyan' : 'text-blue-600'
                }`}>{components[activeComponent].title}</p>
              </div>
              <button
                onClick={closeVideoModal}
                className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 ${
                  isDark 
                    ? 'bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white' 
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-600 hover:text-gray-800'
                }`}
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            
            {/* Video Container */}
            <div className="p-6">
              <div className="relative w-full rounded-lg overflow-hidden" style={{ aspectRatio: '16/9' }}>
                <video
                  className="w-full h-full object-cover"
                  controls
                  autoPlay
                  preload="metadata"
                  style={{ aspectRatio: '16/9' }}
                >
                  <source src={components[activeComponent].videoUrl} type="video/mp4" />
                  <p className={`text-center p-8 ${
                    isDark ? 'text-slate-400' : 'text-gray-600'
                  }`}>
                    Your browser does not support the video tag. 
                    <a 
                      href={components[activeComponent].videoUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className={`ml-2 underline ${
                        isDark ? 'text-custom-cyan hover:text-custom-cyan-dark' : 'text-blue-600 hover:text-blue-800'
                      }`}
                    >
                      Download the video instead
                    </a>
                  </p>
                </video>
              </div>
              
              {/* Video Description */}
              <div className="mt-6">
                <p className={`text-lg leading-relaxed ${
                  isDark ? 'text-slate-300' : 'text-gray-600'
                }`}>
                  Watch our comprehensive demonstration of the {components[activeComponent].title.toLowerCase()} 
                  showcasing real-time operation, advanced features, and system integration capabilities.
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default ComponentShowcase;