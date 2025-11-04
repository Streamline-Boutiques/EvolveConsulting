import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from './ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 group">
            <span className="text-3xl font-light tracking-wider text-gray-800 group-hover:text-teal-600 transition-colors duration-300">
              evol<span className="text-teal-600">v</span>e
            </span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                isActive('/') ? 'text-teal-600' : 'text-gray-700 hover:text-teal-600'
              }`}
            >
              Home
            </Link>

            {/* Services Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button
                className={`text-sm font-medium tracking-wide transition-colors duration-300 flex items-center ${
                  isActive('/services') ||
                  isActive('/technical-advisory') ||
                  isActive('/business-development') ||
                  isActive('/leadership-counseling')
                    ? 'text-teal-600'
                    : 'text-gray-700 hover:text-teal-600'
                }`}
              >
                Services
                <ChevronDown className="ml-1 h-4 w-4" />
              </button>
              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-64 bg-white rounded-lg shadow-xl py-2 border border-gray-100">
                  <Link
                    to="/services"
                    className="block px-6 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-200"
                  >
                    All Services
                  </Link>
                  <Link
                    to="/technical-advisory"
                    className="block px-6 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-200"
                  >
                    Technical Advisory
                  </Link>
                  <Link
                    to="/business-development"
                    className="block px-6 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-200"
                  >
                    Business Development
                  </Link>
                  <Link
                    to="/leadership-counseling"
                    className="block px-6 py-3 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-200"
                  >
                    Leadership Counseling
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/about-us"
              className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                isActive('/about-us') ? 'text-teal-600' : 'text-gray-700 hover:text-teal-600'
              }`}
            >
              About Us
            </Link>

            {/* NEW: Testimonials link */}
            <Link
              to="/testimonials"
              className={`text-sm font-medium tracking-wide transition-colors duration-300 ${
                isActive('/testimonials') ? 'text-teal-600' : 'text-gray-700 hover:text-teal-600'
              }`}
            >
              Testimonials
            </Link>

            <Link to="/contact">
              <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-2 rounded-md transition-all duration-300 shadow-md hover:shadow-lg">
                Contact
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden text-gray-700 hover:text-teal-600 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden py-4 bg-white border-t border-gray-100">
            <div className="flex flex-col space-y-4">
              <Link
                to="/"
                className="text-gray-700 hover:text-teal-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                to="/services"
                className="text-gray-700 hover:text-teal-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Services
              </Link>
              <Link
                to="/technical-advisory"
                className="text-gray-700 hover:text-teal-600 transition-colors pl-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Technical Advisory
              </Link>
              <Link
                to="/business-development"
                className="text-gray-700 hover:text-teal-600 transition-colors pl-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Business Development
              </Link>
              <Link
                to="/leadership-counseling"
                className="text-gray-700 hover:text-teal-600 transition-colors pl-4"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Leadership Counseling
              </Link>
              <Link
                to="/about-us"
                className="text-gray-700 hover:text-teal-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                About Us
              </Link>

              {/* NEW: Testimonials link for mobile */}
              <Link
                to="/testimonials"
                className="text-gray-700 hover:text-teal-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Testimonials
              </Link>

              <Link
                to="/contact"
                className="text-gray-700 hover:text-teal-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
