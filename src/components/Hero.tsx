import React, { useEffect, useState, useMemo } from 'react';
import { ChevronDown, Play, Zap } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Hero = () => {
  const [currentFloor, setCurrentFloor] = useState(1);
  const [isMoving, setIsMoving] = useState(false);
  const { isDark } = useTheme();

  // Memoize particles to prevent recreation on every render
  const particles = useMemo(() => 
    Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      delay: Math.random() * 15,
    })), []
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setIsMoving(true);
      setTimeout(() => {
        setCurrentFloor(prev => prev === 5 ? 1 : prev + 1);
        setIsMoving(false);
      }, 1000);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={`relative min-h-screen flex items-center justify-center overflow-hidden ${
      isDark 
        ? 'bg-custom-gradient' 
        : 'bg-gradient-to-br from-blue-50 via-white to-cyan-50'
    }`}>
      {/* Optimized Background Particles */}
      {isDark && (
        <div className="absolute inset-0 opacity-30">
          {particles.map((particle) => (
            <div
              key={particle.id}
              className="particle animate-particleFloat"
              style={{
                left: `${particle.x}%`,
                top: `${particle.y}%`,
                animationDelay: `${particle.delay}s`,
              }}
            />
          ))}
        </div>
      )}

      {/* Simplified 3D Background Elements */}
      <div className="absolute inset-0 perspective-2000">
        <div className={`absolute top-20 left-20 w-32 h-32 rounded-full animate-float3d ${
          isDark 
            ? 'bg-gradient-to-r from-custom-cyan-light to-transparent opacity-20' 
            : 'bg-gradient-to-r from-blue-200 to-transparent opacity-30'
        }`}></div>
        <div className={`absolute bottom-40 right-32 w-24 h-24 rounded-full animate-pulse3d ${
          isDark 
            ? 'bg-gradient-to-l from-custom-cyan-light to-transparent opacity-30' 
            : 'bg-gradient-to-l from-cyan-200 to-transparent opacity-40'
        }`}></div>
      </div>

      <div className="container mx-auto px-6 pt-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left">
            <div className={`inline-block px-6 py-3 border rounded-full mb-8 transition-all duration-300 ${
              isDark
                ? 'bg-gradient-to-r from-custom-cyan-light to-transparent border-custom-cyan neon-border animate-glowPulse'
                : 'bg-gradient-to-r from-blue-100 to-cyan-100 border-blue-300'
            }`}>
              <span className={`font-bold text-lg ${
                isDark ? 'text-custom-cyan animate-textGlow' : 'text-blue-700'
              }`}>
                Graduation Project 2025
              </span>
            </div>
            
            <h1 className="text-6xl lg:text-7xl font-black mb-8 leading-tight animate-slideIn3d">
              <span className={`bg-clip-text text-transparent ${
                isDark 
                  ? 'bg-gradient-to-r from-white via-custom-cyan to-blue-300 animate-textGlow' 
                  : 'bg-gradient-to-r from-gray-900 via-blue-600 to-cyan-600'
              }`}>
                Advanced Elevator
              </span>
              <br />
              <span className={`bg-clip-text text-transparent ${
                isDark 
                  ? 'bg-gradient-to-r from-custom-cyan via-white to-custom-cyan' 
                  : 'bg-gradient-to-r from-blue-600 via-gray-900 to-blue-600'
              }`}>
                Control System
              </span>
            </h1>
            
            <p className={`text-xl mb-10 leading-relaxed max-w-2xl animate-slideIn3d ${
              isDark ? 'text-slate-300' : 'text-gray-700'
            }`} style={{animationDelay: '0.2s'}}>
              A revolutionary elevator control solution featuring intelligent power management, 
              touchless interfaces, advanced bus communication, and real-time monitoring capabilities.
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start mb-12 animate-slideIn3d" style={{animationDelay: '0.4s'}}>
              <button className={`group px-10 py-5 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center space-x-3 ${
                isDark
                  ? 'bg-gradient-to-r from-custom-cyan to-blue-500 hover:from-custom-cyan-dark hover:to-blue-600 animate-pulse3d shadow-glow-lg'
                  : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl'
              }`}>
                <Play className="w-6 h-6 group-hover:scale-110 transition-transform" />
                <span>Watch Demo</span>
              </button>
              <button className={`px-10 py-5 border-2 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                isDark
                  ? 'border-custom-cyan hover:bg-custom-cyan-light neon-border'
                  : 'border-blue-500 text-blue-600 hover:bg-blue-50 hover:border-blue-600'
              }`}>
                Explore Components
              </button>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 text-center animate-slideIn3d" style={{animationDelay: '0.6s'}}>
              {[
                { number: '10+', label: 'Components', icon: '⚡' },
                { number: '2-Wire', label: 'Bus System', icon: '🔌' },
                { number: '100%', label: 'Touchless', icon: '👋' },
                { number: '24/7', label: 'Monitoring', icon: '📊' },
              ].map((stat, index) => (
                <div key={index} className={`group p-6 rounded-xl transition-all duration-500 transform hover:scale-110 border ${
                  isDark
                    ? 'bg-custom-card border-slate-700 hover:border-custom-cyan animate-cardHover3d neon-border'
                    : 'bg-white border-gray-200 hover:border-blue-300 shadow-md hover:shadow-lg'
                }`}>
                  <div className="text-4xl mb-2 animate-float3d" style={{animationDelay: `${index * 0.2}s`}}>{stat.icon}</div>
                  <div className={`text-3xl font-bold mb-2 ${
                    isDark ? 'text-custom-cyan animate-textGlow' : 'text-blue-600'
                  }`}>{stat.number}</div>
                  <div className={`text-sm transition-colors ${
                    isDark ? 'text-slate-400 group-hover:text-white' : 'text-gray-600 group-hover:text-gray-800'
                  }`}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Enhanced 3D Elevator Visualization */}
          <div className="flex justify-center perspective-2000">
            <div className="relative transform-3d">
              {/* Ground Base */}
              <div className={`absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-96 h-8 rounded-full transition-all duration-300 ${
                isDark 
                  ? 'bg-gradient-to-r from-transparent via-custom-cyan-light to-transparent opacity-50 animate-pulse' 
                  : 'bg-white shadow-2xl border border-gray-200'
              }`}></div>
              
              {/* Elevator Shaft - Much Larger and Better Proportioned */}
              <div className={`w-80 h-[750px] border-4 rounded-3xl relative overflow-hidden transition-all duration-300 ${
                isDark
                  ? 'bg-gradient-to-b from-slate-800 via-slate-700 to-slate-800 border-custom-cyan shadow-glow-xl animate-glowPulse'
                  : 'bg-gradient-to-b from-white via-gray-50 to-white border-blue-400 shadow-2xl'
              }`}>
                
                {/* Interior Pattern */}
                <div className={`absolute inset-6 rounded-2xl ${
                  isDark 
                    ? 'holographic opacity-20' 
                    : 'bg-gradient-to-b from-blue-50 to-cyan-50 opacity-30'
                }`}></div>
                
                {/* Floor Indicators - Better Positioned and Larger */}
                {[5, 4, 3, 2, 1].map((floor) => (
                  <div
                    key={floor}
                    className={`absolute right-10 w-16 h-16 rounded-full border-3 flex items-center justify-center text-xl font-bold transition-all duration-500 transform ${
                      currentFloor === floor
                        ? isDark
                          ? 'bg-custom-cyan border-custom-cyan text-slate-900 scale-125 animate-pulse3d shadow-glow'
                          : 'bg-blue-500 border-blue-500 text-white scale-125 shadow-xl'
                        : isDark
                          ? 'bg-slate-700 border-slate-500 text-slate-400 hover:scale-110'
                          : 'bg-white border-gray-300 text-gray-600 hover:scale-110 shadow-md'
                    }`}
                    style={{ top: `${(6 - floor) * 135 + 50}px` }}
                  >
                    {floor}
                  </div>
                ))}

                {/* Enhanced Elevator Car - Properly Sized and Positioned */}
                <div
                  className={`absolute left-10 w-48 h-32 border-3 rounded-xl transition-all duration-1000 ease-in-out transform-3d ${
                    isDark
                      ? 'bg-gradient-to-b from-custom-cyan via-blue-500 to-custom-cyan-dark border-custom-cyan'
                      : 'bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 border-blue-500'
                  } ${isMoving ? 'shadow-glow-xl scale-105' : 'shadow-glow'}`}
                  style={{
                    top: `${(6 - currentFloor) * 135 + 60}px`,
                    transform: isMoving ? 'rotateX(2deg) rotateY(1deg) scale(1.02)' : 'rotateX(0deg) rotateY(0deg) scale(1)',
                  }}
                >
                  {/* Car Interior Details */}
                  <div className={`w-full h-full rounded-xl flex items-center justify-center relative ${
                    isDark 
                      ? 'bg-gradient-to-b from-white/20 to-transparent' 
                      : 'bg-gradient-to-b from-white/40 to-white/20'
                  }`}>
                    {/* Central Light */}
                    <div className="w-10 h-10 bg-white rounded-full animate-pulse shadow-glow"></div>
                    
                    {/* Car Details */}
                    <div className={`absolute top-3 left-4 right-4 h-1.5 rounded-full ${
                      isDark 
                        ? 'bg-gradient-to-r from-transparent via-white to-transparent opacity-60' 
                        : 'bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-80'
                    }`}></div>
                    <div className={`absolute bottom-3 left-4 right-4 h-1.5 rounded-full ${
                      isDark 
                        ? 'bg-gradient-to-r from-transparent via-custom-cyan-dark to-transparent' 
                        : 'bg-gradient-to-r from-transparent via-blue-400 to-transparent'
                    }`}></div>
                    
                    {/* Side panels */}
                    <div className={`absolute left-3 top-4 bottom-4 w-1.5 rounded-full ${
                      isDark 
                        ? 'bg-gradient-to-b from-custom-cyan-light to-transparent opacity-40' 
                        : 'bg-gradient-to-b from-blue-300 to-transparent opacity-60'
                    }`}></div>
                    <div className={`absolute right-3 top-4 bottom-4 w-1.5 rounded-full ${
                      isDark 
                        ? 'bg-gradient-to-b from-custom-cyan-light to-transparent opacity-40' 
                        : 'bg-gradient-to-b from-blue-300 to-transparent opacity-60'
                    }`}></div>
                  </div>
                </div>

                {/* Shaft Rails - Better Positioned */}
                <div className={`absolute left-6 top-0 bottom-0 w-1.5 rounded-full ${
                  isDark 
                    ? 'bg-gradient-to-b from-custom-cyan-light via-transparent to-custom-cyan-light opacity-50' 
                    : 'bg-gradient-to-b from-blue-300 via-transparent to-blue-300 opacity-60'
                }`}></div>
                <div className={`absolute right-6 top-0 bottom-0 w-1.5 rounded-full ${
                  isDark 
                    ? 'bg-gradient-to-b from-custom-cyan-light via-transparent to-custom-cyan-light opacity-50' 
                    : 'bg-gradient-to-b from-blue-300 via-transparent to-blue-300 opacity-60'
                }`}></div>
                
                {/* Moving Light Effect */}
                <div 
                  className={`absolute left-0 right-0 h-6 rounded-full opacity-60 transition-all duration-1000 ${
                    isDark 
                      ? 'bg-gradient-to-r from-transparent via-custom-cyan to-transparent' 
                      : 'bg-gradient-to-r from-transparent via-blue-400 to-transparent'
                  }`}
                  style={{ top: `${(6 - currentFloor) * 135 + 70}px` }}
                ></div>
              </div>

              {/* Enhanced Control Panel - Larger and Better Positioned */}
              <div className={`absolute -right-44 top-1/2 transform -translate-y-1/2 w-36 h-72 border-3 rounded-xl p-6 animate-float3d ${
                isDark
                  ? 'bg-gradient-to-b from-slate-800 to-slate-900 border-custom-cyan shadow-glow'
                  : 'bg-gradient-to-b from-white to-gray-50 border-blue-400 shadow-xl'
              }`}>
                <div className={`text-sm mb-6 text-center font-bold ${
                  isDark ? 'text-custom-cyan animate-textGlow' : 'text-blue-600'
                }`}>CONTROL PANEL</div>
                {[5, 4, 3, 2, 1].map((floor) => (
                  <div
                    key={floor}
                    className={`w-20 h-10 mb-5 rounded-lg border-2 flex items-center justify-center text-lg font-bold transition-all duration-300 cursor-pointer transform hover:scale-110 ${
                      currentFloor === floor
                        ? isDark
                          ? 'bg-custom-cyan border-custom-cyan text-slate-900 animate-pulse3d shadow-glow'
                          : 'bg-blue-500 border-blue-500 text-white shadow-lg'
                        : isDark
                          ? 'bg-slate-700 border-slate-500 text-slate-400 hover:bg-slate-600 hover:border-custom-cyan-light'
                          : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-blue-400 shadow-sm'
                    }`}
                  >
                    {floor}
                  </div>
                ))}
              </div>

              {/* Enhanced Status Display - Larger and Better Positioned */}
              <div className={`absolute -left-48 top-32 rounded-xl p-8 animate-float3d border-2 ${
                isDark
                  ? 'bg-custom-card border-custom-cyan shadow-glow neon-border'
                  : 'bg-white border-blue-300 shadow-xl'
              }`}>
                <div className={`font-bold text-xl mb-4 ${
                  isDark ? 'text-custom-cyan' : 'text-blue-600'
                }`}>SYSTEM STATUS</div>
                <div className={`text-lg mb-3 ${isDark ? 'text-white' : 'text-gray-800'}`}>Current Floor: <span className="font-bold">{currentFloor}</span></div>
                <div className={`text-lg mb-5 ${isDark ? 'text-white' : 'text-gray-800'}`}>Mode: <span className="font-bold">{isMoving ? 'Moving' : 'Idle'}</span></div>
                <div className="flex items-center">
                  <div className={`w-4 h-4 rounded-full mr-4 ${isMoving ? 'bg-yellow-400 animate-pulse' : 'bg-green-400'}`}></div>
                  <div className={`text-lg font-medium ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>{isMoving ? 'In Transit' : 'Ready'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="flex flex-col items-center">
          <ChevronDown className={`w-8 h-8 animate-pulse mb-2 ${
            isDark ? 'text-custom-cyan' : 'text-blue-600'
          }`} />
          <div className={`text-sm font-medium ${
            isDark ? 'text-custom-cyan animate-textGlow' : 'text-blue-600'
          }`}>Explore System</div>
        </div>
      </div>
    </section>
  );
};

export default Hero;