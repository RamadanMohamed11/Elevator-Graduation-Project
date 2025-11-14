# Elevator Control System - Graduation Project

🏗️ An advanced elevator control and monitoring system with a modern web-based interface.

## 📋 Project Overview

This graduation project implements a complete elevator control system featuring real-time monitoring, smart scheduling algorithms, and an intuitive web dashboard. The system demonstrates the integration of embedded systems with modern web technologies.

## ✨ Key Features

### Control System
- ⬆️ **Multi-Floor Management**: Support for multiple floors and elevators
- 🧐 **Smart Scheduling**: Optimized elevator dispatching algorithm
- 🔴 **Emergency Handling**: Safety protocols and emergency stop functionality
- ⚡ **Real-time Operation**: Instant response to floor calls
- 🔊 **Audio-Visual Feedback**: Floor indicators and voice announcements

### Web Dashboard
- 📊 **Live Monitoring**: Real-time elevator status visualization
- 📈 **Analytics**: Usage statistics and performance metrics
- 🎮 **Control Panel**: Remote elevator management
- 📡 **WebSocket Communication**: Live data updates
- 🎨 **Modern UI**: Responsive and user-friendly interface

### Safety Features
- 🛑 **Overload Protection**: Weight sensor integration
- 🚪 **Door Safety**: Obstruction detection
- ⏱️ **Timeout Management**: Automatic door closing
- 🔔 **Alert System**: Notifications for system events

## 🛠️ Tech Stack

### Frontend (Web Dashboard)
- **React** with **TypeScript** - Type-safe component development
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first styling framework
- **WebSocket Client** - Real-time communication

### Backend/Control System
- **Embedded System**: Microcontroller-based elevator control
- **Communication Protocol**: Serial/UART or Ethernet
- **Sensors**: Floor sensors, weight sensors, door sensors
- **Actuators**: Motors, door mechanisms, indicators

## 🏛️ System Architecture

```
┌──────────────────────┌───────────────────────
│  Web Dashboard (React)  │  Control System      │
│  - Monitoring          │  - Microcontroller   │
│  - Control Interface   │  - Motor Control     │
│  - Analytics           │  - Sensor Reading    │
└──────────┬───────────└──────────┬───────────
           │                           │
           │   WebSocket/Serial       │
           │   Communication          │
           └──────────┬───────────┘
                      │
              ┌───────┼───────┐
              │  Backend  │
              │  Server   │
              └──────────────┘
```

## 📁 Project Structure

```
Elevator-Graduation-Project/
├── src/
│   ├── components/        # React components
│   │   ├── Dashboard/     # Main dashboard
│   │   ├── ElevatorView/  # Elevator visualization
│   │   ├── Controls/      # Control panel
│   │   └── Analytics/     # Statistics and charts
│   ├── services/          # API and WebSocket services
│   ├── utils/             # Helper functions
│   ├── types/             # TypeScript type definitions
│   └── App.tsx            # Main application
├── public/                # Static assets
├── index.html             # HTML entry point
├── package.json           # Dependencies
├── vite.config.ts         # Vite configuration
├── tailwind.config.js     # Tailwind config
└── tsconfig.json          # TypeScript config
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Hardware**: Elevator control board (for full system)
- **Optional**: Arduino/STM32 for hardware testing

### Installation

1. **Clone the repository**:
```bash
git clone https://github.com/RamadanMohamed11/Elevator-Graduation-Project.git
cd Elevator-Graduation-Project
```

2. **Install dependencies**:
```bash
npm install
# or
yarn install
```

3. **Configure backend connection**:

Edit `src/config/connection.ts`:
```typescript
export const config = {
  websocketUrl: 'ws://localhost:8080',
  serialPort: '/dev/ttyUSB0', // Or COM port on Windows
  baudRate: 9600
};
```

4. **Start development server**:
```bash
npm run dev
# or
yarn dev
```

5. **Open in browser**:
```
http://localhost:5173
```

### Building for Production

```bash
npm run build
# or
yarn build
```

Optimized files will be in `dist/` directory.

## ⚙️ Configuration

### System Parameters

Edit configuration in `src/config/elevator.ts`:

```typescript
export const elevatorConfig = {
  numberOfFloors: 10,
  numberOfElevators: 2,
  maxWeight: 1000, // kg
  doorOpenTime: 5, // seconds
  floorHeight: 3,  // meters
  speed: 2         // m/s
};
```

### Scheduling Algorithm

The system uses SCAN (Elevator Algorithm) by default. Modify in:
`src/services/scheduler.ts`

## 📡 Communication Protocol

### Message Format (JSON)

**From Control System to Dashboard:**
```json
{
  "type": "status",
  "elevator_id": 1,
  "current_floor": 5,
  "direction": "up",
  "door_state": "closed",
  "weight": 650
}
```

**From Dashboard to Control System:**
```json
{
  "type": "command",
  "elevator_id": 1,
  "action": "call",
  "floor": 8
}
```

## 📦 Features in Detail

### 1. Floor Call System
- Up/Down buttons on each floor
- Elevator assignment based on direction and distance
- Queue management for multiple requests

### 2. Car Control
- Internal floor selection buttons
- Emergency stop button
- Door open/close buttons
- Alarm system

### 3. Safety Systems
- Overload detection with visual/audio warning
- Door obstruction sensors
- Emergency communication system
- Battery backup for emergency descent

### 4. Monitoring Dashboard
- Real-time elevator positions
- Active requests visualization
- System health indicators
- Historical data and analytics

## 🔧 Troubleshooting

**Dashboard not connecting:**
- Verify WebSocket server is running
- Check firewall settings
- Confirm port configuration

**Build errors:**
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

**Hardware communication issues:**
- Check serial port permissions (Linux/Mac)
- Verify baud rate settings
- Test with serial monitor first

## 📊 Testing

### Unit Tests
```bash
npm run test
```

### Integration Tests
```bash
npm run test:integration
```

### Hardware Testing
1. Use simulation mode first
2. Test individual components
3. Integrate step by step
4. Full system testing

## 📝 Project Report

This graduation project demonstrates:
- **Embedded Systems**: Microcontroller programming and hardware integration
- **Web Development**: Modern frontend technologies
- **Real-time Systems**: WebSocket communication and live updates
- **Algorithm Design**: Elevator scheduling optimization
- **Safety Engineering**: Fail-safe mechanisms and redundancy

## 🎯 Future Enhancements

- [ ] Machine learning for predictive scheduling
- [ ] Mobile app for building management
- [ ] IoT integration for preventive maintenance
- [ ] Energy consumption optimization
- [ ] Multi-building management
- [ ] Voice control integration

## 🤝 Contributors

**Graduation Project Team:**
- **Ramadan Mohamed** - Lead Developer & Embedded Systems
- GitHub: [@RamadanMohamed11](https://github.com/RamadanMohamed11)

## 📝 License

This is an academic graduation project. For educational purposes.

## 🙏 Acknowledgments

- University faculty and advisors
- Industry mentors and consultants
- Open-source community
- Testing and validation team

## 📞 Contact

For questions about this project:
- **GitHub Issues**: Open an issue for technical questions
- **Email**: [Contact through GitHub profile]

---

**Project Status**: Graduation Project (2025) ✅  
**Academic Institution**: [Your University Name]  
**Department**: Engineering - Embedded Systems

Built with ❤️ using React, TypeScript, and Embedded Systems