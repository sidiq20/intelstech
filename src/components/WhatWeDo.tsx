import React from 'react';
import { Shield, Zap, Settings, Eye } from 'lucide-react';

const WhatWeDo = () => {
  const features = [
    {
      icon: <Shield className="h-8 w-8 text-blue-900" />,
      title: 'Security Infrastructure',
      description: 'Comprehensive security system design and implementation',
    },
    {
      icon: <Eye className="h-8 w-8 text-blue-900" />,
      title: 'Surveillance Systems',
      description: 'Advanced monitoring and surveillance technology',
    },
    {
      icon: <Zap className="h-8 w-8 text-blue-900" />,
      title: 'Smart Integration',
      description: 'Seamless integration with existing frameworks',
    },
    {
      icon: <Settings className="h-8 w-8 text-blue-900" />,
      title: 'Maintenance & Support',
      description: 'Ongoing system maintenance and technical support',
    },
  ];

  return (
    <section id="what-we-do" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              src="https://images.pexels.com/photos/442150/pexels-photo-442150.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Security technician at work"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-blue-900/10 rounded-lg"></div>
          </div>
          <div className="space-y-6 order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              What We Do
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                At Intels Technology and Device, we engineer and deploy
                state-of-the-art security infrastructure to protect properties
                and streamline operations. Our core focus is on designing,
                installing, and maintaining robust surveillance and access
                control systems that integrate seamlessly with existing
                frameworks.
              </p>
              <p>
                Leveraging industry-leading technologies, we provide end-to-end
                solutions that enhance situational awareness, deter unauthorized
                access, and optimize facility management.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className="flex items-start space-x-3 p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                >
                  <div className="flex-shrink-0">{feature.icon}</div>
                  <div>
                    <h3 className="font-semibold text-blue-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;