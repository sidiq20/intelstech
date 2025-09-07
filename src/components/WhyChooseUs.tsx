import React from 'react';
import { Award, Users, Wrench, Cpu } from 'lucide-react';

const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Award className="h-12 w-12 text-blue-900" />,
      title: 'Industry Certifications & Compliance',
      description:
        'Fully certified and compliant with industry standards and regulations.',
    },
    {
      icon: <Users className="h-12 w-12 text-blue-900" />,
      title: 'Ongoing Client Support & Training',
      description:
        'Comprehensive support and training programs to ensure optimal system performance.',
    },
    {
      icon: <Cpu className="h-12 w-12 text-blue-900" />,
      title: 'AI-Driven Analytics',
      description:
        'Advanced AI analytics for intelligent threat detection and response.',
    },
    {
      icon: <Wrench className="h-12 w-12 text-blue-900" />,
      title: 'IoT-Enabled Devices',
      description:
        'Future-proof solutions with IoT integration for smart security management.',
    },
  ];

  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Why Choose Us
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We combine expertise, innovation, and reliability to deliver
            exceptional security solutions that exceed expectations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map((reason, index) => (
            <div
              key={index}
              className="text-center p-6 bg-gray-50 rounded-lg hover:bg-white hover:shadow-lg transition-all duration-300 group"
            >
              <div className="mb-6 flex justify-center group-hover:scale-110 transition-transform duration-300">
                {reason.icon}
              </div>
              <h3 className="text-lg font-semibold text-blue-900 mb-4">
                {reason.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {reason.description}
              </p>
            </div>
          ))}
        </div>

        {/* Timeline/Milestones */}
        <div className="mt-16 bg-blue-900 rounded-lg p-8 text-white">
          <h3 className="text-2xl font-bold text-center mb-8">Our Journey</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">2008</div>
              <p className="text-blue-200">Company Founded</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">2015</div>
              <p className="text-blue-200">ISO Certification Achieved</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">2025</div>
              <p className="text-blue-200">AI Integration Launch</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;