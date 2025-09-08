import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              About Us
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p className="text-lg font-semibold text-blue-900">
                Intels Technology and Device: Pioneering Security and Surveillance Solutions Amid Nigeria’s Evolving Security Landscape
              </p>
              <p>
                <strong>Intels Technology and Device</strong> is a leading provider of cutting-edge security and surveillance solutions. 
                Established with a commitment to safeguarding assets and enhancing operational efficiency, we deliver innovative, tailored 
                technologies to meet the diverse needs of residential, commercial, and industrial clients.
              </p>
              <p>
                Over the past decade, Nigeria has faced complex and multifaceted security challenges. 
                In this dynamic and challenging environment, Intels Technology and Device stands out by offering scalable, reliable, 
                and future-proof security solutions.
              </p>
              <p>
                Our team of seasoned professionals, with extensive expertise in systems integration, designs and implements advanced 
                surveillance systems, access control, and threat detection technologies to address Nigeria’s evolving security needs. 
                By leveraging state-of-the-art tools and a client-centric approach, we empower our clients to protect their assets and 
                enhance operational resilience in an increasingly complex threat landscape.
              </p>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-blue-900 text-white px-4 py-2 rounded-md text-center">
                <span className="text-2xl font-bold">15+</span>
                <p className="text-sm">Years Experience</p>
              </div>
              <div className="bg-blue-900 text-white px-4 py-2 rounded-md text-center">
                <span className="text-2xl font-bold">500+</span>
                <p className="text-sm">Projects Completed</p>
              </div>
              <div className="bg-blue-900 text-white px-4 py-2 rounded-md text-center">
                <span className="text-2xl font-bold">24/7</span>
                <p className="text-sm">Support</p>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <img
              src="logo.jpg"
              alt="Professional security team at work"
              className="rounded-lg shadow-xl"
            />
            <div className="absolute inset-0 bg-blue-900/20 rounded-lg"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
