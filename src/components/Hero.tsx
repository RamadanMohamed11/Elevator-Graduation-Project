import React, { useEffect, useState, useMemo } from 'react';
import { ChevronDown, Play, Zap, FileText, ArrowRight } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

interface HeroProps {
  onShowTechnicalDetails?: () => void;
}

const Hero: React.FC<HeroProps> = ({ onShowTechnicalDetails }) => {
  const [currentFloor, setCurrentFloor] = useState(1);
  const [isMoving, setIsMoving] = useState(false);
  const [targetFloor, setTargetFloor] = useState(1);
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

  // Handle floor button clicks
  const handleFloorClick = (floor: number) => {
    if (floor !== currentFloor && !isMoving) {
      setTargetFloor(floor);
      setIsMoving(true);
      
      // Simulate elevator movement time based on distance
      const distance = Math.abs(floor - currentFloor);
      const moveTime = 1000 + (distance * 500); // Base time + time per floor
      
      setTimeout(() => {
        setCurrentFloor(floor);
        setIsMoving(false);
      }, moveTime);
    }
  };

  // Calculate elevator position - properly centered within each floor section
  const getElevatorPosition = (floor: number) => {
    const floorHeight = 130; // Height allocated for each floor
    const shaftPadding = 50; // Top padding in the shaft
    const elevatorHeight = 32; // Height of elevator car (h-32 = 128px)
    const totalFloors = 5;

    // Calculate the center position for the given floor
    // Floor 5 is at the top, floor 1 is at the bottom
    const floorIndex = totalFloors - floor; // Convert floor number to index (0-4)
    const floorCenterY = shaftPadding + (floorIndex * floorHeight) + (floorHeight / 2);
    
    // Position elevator so its center aligns with floor center
    return floorCenterY - (elevatorHeight * 4) / 2; // Convert h-32 to pixels and center
  };

  // Calculate floor indicator positions to match elevator positioning
  const getFloorIndicatorPosition = (floor: number) => {
    const floorHeight = 130;
    const shaftPadding = 50;
    const totalFloors = 5;
    const indicatorHeight = 16; // h-16 = 64px
    
    const floorIndex = totalFloors - floor;
    const floorCenterY = shaftPadding + (floorIndex * floorHeight) + (floorHeight / 2);
    
    return floorCenterY - (indicatorHeight * 4) / 2; // Center the indicator
  };

  return (
    <section id="home" className="...">
    <section className={`relative min-h-[130vh] flex items-center justify-center overflow-hidden ${
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

            {/* Technical Documentation Section */}
            <div className={`mb-10 p-6 border rounded-2xl animate-slideIn3d ${
              isDark 
                ? 'bg-gradient-to-r from-slate-900/80 to-slate-800/80 border-slate-700 backdrop-blur-sm' 
                : 'bg-gradient-to-r from-white/90 to-gray-50/90 border-gray-200 backdrop-blur-sm shadow-lg'
            }`} style={{animationDelay: '0.3s'}}>
              <div className={`flex items-center space-x-3 mb-4 ${
                isDark ? 'text-cyan-400' : 'text-blue-600'
              }`}>
                <FileText className="w-6 h-6" />
                <h3 className={`text-xl font-bold ${
                  isDark ? 'text-white' : 'text-gray-900'
                }`}>Detailed Technical Documentation</h3>
              </div>
              <p className={`text-lg mb-6 ${
                isDark ? 'text-slate-300' : 'text-gray-600'
              }`}>
                Explore comprehensive technical specifications, system architecture details, and implementation 
                methodologies behind our innovative bus-based elevator control system.
              </p>
              
              {onShowTechnicalDetails && (
                <button
                  onClick={onShowTechnicalDetails}
                  className={`group inline-flex items-center space-x-3 px-6 py-3 rounded-xl font-bold text-lg transition-all duration-300 transform hover:scale-105 ${
                    isDark
                      ? 'bg-gradient-to-r from-custom-cyan to-blue-500 hover:from-custom-cyan-dark hover:to-blue-600 text-white shadow-glow'
                      : 'bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white shadow-lg hover:shadow-xl'
                  }`}
                >
                  <FileText className="w-5 h-5 group-hover:scale-110 transition-transform" />
                  <span>Read Technical Documentation</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
              )}
            </div>

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
              
              {/* Elevator Shaft - Properly sized for 5 floors */}
              <div className={`w-80 h-[700px] border-4 rounded-3xl relative overflow-hidden transition-all duration-300 ${
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
                
                {/* Floor Indicators - Properly aligned */}
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
                    style={{ top: `${getFloorIndicatorPosition(floor)}px` }}
                  >
                    {floor}
                  </div>
                ))}

                {/* Enhanced Elevator Car - Properly centered */}
                <div
                  className={`absolute left-10 w-48 h-32 border-3 rounded-xl transition-all duration-1000 ease-in-out transform-3d ${
                    isDark
                      ? 'bg-gradient-to-b from-custom-cyan via-blue-500 to-custom-cyan-dark border-custom-cyan'
                      : 'bg-gradient-to-b from-blue-400 via-blue-500 to-blue-600 border-blue-500'
                  } ${isMoving ? 'shadow-glow-xl scale-105' : 'shadow-glow'}`}
                  style={{
                    top: `${getElevatorPosition(currentFloor)}px`,
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

                {/* Shaft Rails - Better positioned */}
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
                
                {/* Moving Light Effect - Centered with elevator */}
                <div 
                  className={`absolute left-0 right-0 h-6 rounded-full opacity-60 transition-all duration-1000 ${
                    isDark 
                      ? 'bg-gradient-to-r from-transparent via-custom-cyan to-transparent' 
                      : 'bg-gradient-to-r from-transparent via-blue-400 to-transparent'
                  }`}
                  style={{ top: `${getElevatorPosition(currentFloor) + 50}px` }}
                ></div>
              </div>

              {/* Enhanced Control Panel - Interactive buttons */}
              <div className={`absolute -right-44 top-1/2 transform -translate-y-1/2 w-36 h-100 border-3 rounded-xl p-6 animate-float3d ${
                isDark
                  ? 'bg-gradient-to-b from-slate-800 to-slate-900 border-custom-cyan shadow-glow'
                  : 'bg-gradient-to-b from-white to-gray-50 border-blue-400 shadow-xl'
              }`}>
                <div className={`text-sm mb-6 text-center font-bold ${
                  isDark ? 'text-custom-cyan animate-textGlow' : 'text-blue-600'
                }`}>CONTROL PANEL</div>
                
                <div className="space-y-4">
                  {[5, 4, 3, 2, 1].map((floor) => (
                    <button
                      key={floor}
                      onClick={() => handleFloorClick(floor)}
                      disabled={isMoving}
                      className={`w-20 h-12 rounded-lg border-2 flex items-center justify-center text-lg font-bold transition-all duration-300 transform hover:scale-110 disabled:cursor-not-allowed ${
                        currentFloor === floor
                          ? isDark
                            ? 'bg-custom-cyan border-custom-cyan text-slate-900 animate-pulse3d shadow-glow'
                            : 'bg-blue-500 border-blue-500 text-white shadow-lg'
                          : targetFloor === floor && isMoving
                            ? isDark
                              ? 'bg-yellow-500 border-yellow-500 text-slate-900 animate-pulse'
                              : 'bg-yellow-400 border-yellow-400 text-white animate-pulse'
                            : isDark
                              ? 'bg-slate-700 border-slate-500 text-slate-400 hover:bg-slate-600 hover:border-custom-cyan-light disabled:opacity-50'
                              : 'bg-white border-gray-300 text-gray-600 hover:bg-gray-50 hover:border-blue-400 shadow-sm disabled:opacity-50'
                      }`}
                    >
                      {floor}
                    </button>
                  ))}
                </div>
              </div>

              {/* Enhanced Status Display - Shows target floor when moving */}
              <div className={`absolute -left-48 top-32 rounded-xl p-8 animate-float3d border-2 ${
                isDark
                  ? 'bg-custom-card border-custom-cyan shadow-glow neon-border'
                  : 'bg-white border-blue-300 shadow-xl'
              }`}>
                <div className={`font-bold text-xl mb-4 ${
                  isDark ? 'text-custom-cyan' : 'text-blue-600'
                }`}>SYSTEM STATUS</div>
                <div className={`text-lg mb-3 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                  Current Floor: <span className="font-bold">{currentFloor}</span>
                </div>
                {isMoving && (
                  <div className={`text-lg mb-3 ${isDark ? 'text-yellow-400' : 'text-yellow-600'}`}>
                    Target Floor: <span className="font-bold">{targetFloor}</span>
                  </div>
                )}
                <div className={`text-lg mb-5 ${isDark ? 'text-white' : 'text-gray-800'}`}>
                  Mode: <span className="font-bold">{isMoving ? 'Moving' : 'Idle'}</span>
                </div>
                <div className="flex items-center">
                  <div className={`w-4 h-4 rounded-full mr-4 ${isMoving ? 'bg-yellow-400 animate-pulse' : 'bg-green-400'}`}></div>
                  <div className={`text-lg font-medium ${isDark ? 'text-slate-300' : 'text-gray-600'}`}>
                    {isMoving ? `Moving to Floor ${targetFloor}` : 'Ready'}
                  </div>
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
    </section>
  );
};

export default Hero;