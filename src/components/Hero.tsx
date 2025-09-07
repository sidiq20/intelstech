import React from 'react';
import { ArrowRight } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-900/90 to-blue-800/90"
    >
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            'url(https://images.pexels.com/photos/97533/pexels-photo-97533.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1280&fit=crop)',
        }}
      ></div>
      <div className="absolute inset-0 bg-blue-900/80"></div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 animate-fade-in">
          Cutting-Edge Security &{' '}
          <span className="text-blue-200">Surveillance Solutions</span>
        </h1>
        <p className="text-xl md:text-2xl text-blue-100 mb-8 animate-fade-in-delay">
          Protecting What Matters Most with Advanced Technology and Trusted
          Expertise.
        </p>
        <button
          onClick={scrollToContact}
          className="inline-flex items-center px-8 py-4 bg-white text-blue-900 font-semibold rounded-md hover:bg-blue-50 transition-all duration-300 transform hover:scale-105 animate-fade-in-delay-2"
        >
          Get a Consultation
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;