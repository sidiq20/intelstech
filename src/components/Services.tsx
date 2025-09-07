import React from 'react';
import { Camera, Monitor, Radio, Zap, Bell, MessageSquare, Home, Volume2, Send as Sensor, Fingerprint, DoorOpen, Video, Mic, Shield, Power, Blinds } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Camera className="h-12 w-12 text-blue-900" />,
      title: 'IP Surveillance Systems',
      description:
        'High-definition IP cameras with remote monitoring capabilities for comprehensive security coverage.',
      features: ['HD/4K Resolution', 'Remote Access', 'Cloud Storage', 'Night Vision'],
    },
    {
      icon: <Monitor className="h-12 w-12 text-blue-900" />,
      title: 'CCTV Solutions',
      description:
        'Reliable closed-circuit television systems for continuous monitoring and recording.',
      features: ['24/7 Recording', 'Motion Detection', 'Multi-Camera Setup', 'Playback System'],
    },
    {
      icon: <Radio className="h-12 w-12 text-blue-900" />,
      title: 'Intercom Systems',
      description:
        'Secure communication and access control systems for enhanced property management.',
      features: ['Two-Way Audio', 'Video Integration', 'Remote Unlock', 'Visitor Management'],
    },
    {
      icon: <Zap className="h-12 w-12 text-blue-900" />,
      title: 'Electric Fence Systems',
      description:
        'Electrified perimeter security solutions to deter unauthorized access.',
      features: ['High Voltage', 'Weather Resistant', 'Alarm Integration', 'Zone Monitoring'],
    },
    {
      icon: <Bell className="h-12 w-12 text-blue-900" />,
      title: 'Burglary Alarm Systems',
      description:
        'Advanced motion sensors and instant alert systems for immediate threat detection.',
      features: ['Motion Sensors', 'Door/Window Sensors', 'Mobile Alerts', 'Central Monitoring'],
    },
    {
      icon: <Home className="h-12 w-12 text-blue-900" />,
      title: 'Smart Home Automation',
      description:
        'Complete smart home integration with centralized control and automation.',
      features: ['Voice Control', 'Mobile App', 'Scene Programming', 'Energy Management'],
    },
    {
      icon: <Volume2 className="h-12 w-12 text-blue-900" />,
      title: 'Multi-Audio Systems',
      description:
        'Whole-house audio distribution with zone control and streaming capabilities.',
      features: ['Multi-Zone Audio', 'Wireless Streaming', 'Voice Integration', 'High-Fi Sound'],
    },
    {
      icon: <Sensor className="h-12 w-12 text-blue-900" />,
      title: 'PIR Motion Sensors',
      description:
        'Passive infrared sensors for accurate motion detection and automated responses.',
      features: ['Pet-Immune Detection', 'Wireless Connectivity', 'Battery Backup', 'Smart Alerts'],
    },
    {
      icon: <Fingerprint className="h-12 w-12 text-blue-900" />,
      title: 'Biometric Access Control',
      description:
        'Advanced biometric systems including fingerprint, facial recognition, and iris scanning.',
      features: ['Fingerprint Scanner', 'Facial Recognition', 'Multi-Factor Auth', 'Access Logs'],
    },
    {
      icon: <DoorOpen className="h-12 w-12 text-blue-900" />,
      title: 'Smart Door Sensors',
      description:
        'Intelligent door and window sensors with real-time monitoring and alerts.',
      features: ['Open/Close Detection', 'Tamper Alerts', 'Battery Monitor', 'Wireless Range'],
    },
    {
      icon: <Video className="h-12 w-12 text-blue-900" />,
      title: 'Video Door Bell',
      description:
        'Smart video doorbells with two-way communication and mobile notifications.',
      features: ['HD Video', 'Two-Way Audio', 'Motion Alerts', 'Cloud Recording'],
    },
    {
      icon: <Mic className="h-12 w-12 text-blue-900" />,
      title: 'Advanced Intercoms',
      description:
        'Modern intercom systems with video calling and mobile integration.',
      features: ['Video Calling', 'Mobile App', 'Multi-Unit Support', 'Remote Access'],
    },
    {
      icon: <Shield className="h-12 w-12 text-blue-900" />,
      title: 'Control Room & CCTV',
      description:
        'Professional control room setup with multi-monitor CCTV management systems.',
      features: ['Multi-Monitor Setup', 'Video Wall', 'Central Management', '24/7 Monitoring'],
    },
    {
      icon: <Power className="h-12 w-12 text-blue-900" />,
      title: 'Electric Door Systems',
      description:
        'Automated electric door systems with access control and safety features.',
      features: ['Remote Control', 'Safety Sensors', 'Emergency Override', 'Access Integration'],
    },
    {
      icon: <Blinds className="h-12 w-12 text-blue-900" />,
      title: 'Automated Blinds',
      description:
        'Smart motorized blinds with scheduling, light sensors, and remote control.',
      features: ['Schedule Control', 'Light Sensors', 'Voice Commands', 'Energy Saving'],
    },
    {
      icon: <MessageSquare className="h-12 w-12 text-blue-900" />,
      title: 'General Consulting',
      description:
        'Professional security audits and system upgrade consultations.',
      features: ['Security Audits', 'System Design', 'Upgrade Planning', 'Training Services'],
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Services We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive security and smart home solutions tailored to meet your unique needs
            and requirements. From basic security to full home automation.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
            >
              <div className="mb-6 group-hover:scale-110 transition-transform duration-300">
                {service.icon}
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                {service.description}
              </p>
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-sm text-gray-700">
                    <div className="w-2 h-2 bg-blue-900 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Service Categories */}
        <div className="mt-16 bg-blue-900 rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">Service Categories</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Shield className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h4 className="text-xl font-semibold mb-2">Security Systems</h4>
              <p className="text-blue-200">CCTV, Alarms, Access Control, Perimeter Security</p>
            </div>
            <div className="text-center">
              <Home className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h4 className="text-xl font-semibold mb-2">Smart Home</h4>
              <p className="text-blue-200">Automation, Audio, Lighting, Climate Control</p>
            </div>
            <div className="text-center">
              <Monitor className="h-12 w-12 mx-auto mb-4 text-blue-200" />
              <h4 className="text-xl font-semibold mb-2">Professional</h4>
              <p className="text-blue-200">Control Rooms, Enterprise Solutions, Consulting</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;