import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <Link to="/" className="inline-block mb-6">
              <span className="text-3xl font-light tracking-wider text-white">
                evol<span className="text-teal-500">v</span>e
              </span>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed">
              Technical and Business Consulting for the Pharmaceutical Industry
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Services</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/technical-advisory"
                  className="text-sm text-gray-400 hover:text-teal-500 transition-colors duration-200"
                >
                  Technical Advisory
                </Link>
              </li>
              <li>
                <Link
                  to="/business-development"
                  className="text-sm text-gray-400 hover:text-teal-500 transition-colors duration-200"
                >
                  Business Development
                </Link>
              </li>
              <li>
                <Link
                  to="/leadership-counseling"
                  className="text-sm text-gray-400 hover:text-teal-500 transition-colors duration-200"
                >
                  Leadership Counseling
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Company</h3>
            <ul className="space-y-3">
              <li>
                <Link
                  to="/about-us"
                  className="text-sm text-gray-400 hover:text-teal-500 transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-sm text-gray-400 hover:text-teal-500 transition-colors duration-200"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-6 text-lg">Contact</h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <Mail className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                <a
                  href="mailto:info@evolveconsulting.es"
                  className="text-sm text-gray-400 hover:text-teal-500 transition-colors duration-200"
                >
                  info@evolveconsulting.es
                </a>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-teal-500 mt-0.5 flex-shrink-0" />
                <span className="text-sm text-gray-400">Spain</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
          <p className="text-sm text-gray-500">
            © {new Date().getFullYear()} Evolve Consulting. All rights reserved.
          </p>
          <div className="flex items-center space-x-6 mt-4 md:mt-0">
            <a
              href="#"
              className="text-gray-400 hover:text-teal-500 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
