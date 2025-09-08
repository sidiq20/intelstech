import React from 'react';
import { Shield, Facebook, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-blue-200" />
              <div>
                <h3 className="text-xl font-bold">Intels Technology & Device</h3>
                <p className="text-sm text-blue-200">Securing Your Tomorrow</p>
              </div>
            </div>
            <p className="text-blue-100 leading-relaxed">
              Premier provider of cutting-edge security and surveillance
              solutions, protecting what matters most with advanced technology
              and trusted expertise.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <nav className="space-y-2">
              <button
                onClick={() => scrollToSection('about')}
                className="block text-blue-200 hover:text-white transition-colors duration-200"
              >
                About Us
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block text-blue-200 hover:text-white transition-colors duration-200"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block text-blue-200 hover:text-white transition-colors duration-200"
              >
                Contact
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Contact Information</h3>
            <div className="space-y-2 text-blue-200">
              <p>Plot 19, Mufutau Shobola Off Haruna Road</p>
              <p>Ifako-Ijaye, Ogba Lagos, Nigeria</p>
              <p>Admin@intelstech.com</p>
              <p>+2347069196866</p>
              <p>+2348060447373</p>
            </div>
          </div>
        </div>

        {/* Social Media & Copyright */}
        <div className="border-t border-blue-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="flex space-x-4 mb-4 md:mb-0">
            <a
              href="#"
              className="p-2 bg-blue-800 rounded-full hover:bg-blue-700 transition-colors duration-200"
            >
              <Facebook className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="p-2 bg-blue-800 rounded-full hover:bg-blue-700 transition-colors duration-200"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a
              href="#"
              className="p-2 bg-blue-800 rounded-full hover:bg-blue-700 transition-colors duration-200"
            >
              <Instagram className="h-5 w-5" />
            </a>
          </div>
          <p className="text-blue-200 text-sm">
            © 2025 Intels Technology and Device. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;