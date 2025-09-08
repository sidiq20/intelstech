import React, { useState, useEffect } from 'react';
import { Menu, X, Shield } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-lg' : 'bg-white/95 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
        <div className="flex items-center space-x-3">
          <img
            src="/logo.jpg" // if your file is logo.png
            alt="Intels Technology & Device"
            className="h-10 w-auto"
          />
        </div>


          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('hero')}
              className="text-gray-700 hover:text-blue-900 transition-colors duration-200"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-blue-900 transition-colors duration-200"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-700 hover:text-blue-900 transition-colors duration-200"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="bg-blue-900 text-white px-4 py-2 rounded-md hover:bg-blue-800 transition-colors duration-200"
            >
              Contact
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6 text-blue-900" />
            ) : (
              <Menu className="h-6 w-6 text-blue-900" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="py-4 space-y-4">
              <button
                onClick={() => scrollToSection('hero')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-900"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection('about')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-900"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="block w-full text-left px-4 py-2 text-gray-700 hover:text-blue-900"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block w-full text-left px-4 py-2 bg-blue-900 text-white rounded-md mx-4"
              >
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;