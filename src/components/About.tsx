import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900">
              About Us
            </h2>
            <div className="space-y-4 text-gray-700 leading-relaxed">
              <p>
                <strong>Intels Technology and Device</strong> is a premier
                provider of cutting-edge security and surveillance solutions,
                headquartered at Plot 19, Mufutau Shobola Off Haruna Road,
                Ifako-Ijaye, Ogba Lagos, Nigeria.
              </p>
              <p>
                Established with a commitment to safeguarding assets and
                enhancing operational efficiency, we specialize in delivering
                innovative technologies tailored to the unique needs of
                residential, commercial, and industrial clients.
              </p>
              <p>
                Our team comprises seasoned professionals with extensive
                expertise in security systems integration, driven by a mission
                to provide reliable, scalable, and future-proof solutions.
              </p>
            </div>
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="bg-blue-900 text-white px-4 py-2 rounded-md">
                <span className="text-2xl font-bold">15+</span>
                <p className="text-sm">Years Experience</p>
              </div>
              <div className="bg-blue-900 text-white px-4 py-2 rounded-md">
                <span className="text-2xl font-bold">500+</span>
                <p className="text-sm">Projects Completed</p>
              </div>
              <div className="bg-blue-900 text-white px-4 py-2 rounded-md">
                <span className="text-2xl font-bold">24/7</span>
                <p className="text-sm">Support</p>
              </div>
            </div>
          </div>
          <div className="relative">
            <img
              src="https://images.pexels.com/photos/159306/construction-site-build-construction-work-159306.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
              alt="Professional security team"
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