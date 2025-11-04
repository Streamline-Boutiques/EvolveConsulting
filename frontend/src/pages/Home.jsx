import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Target, Microscope, TrendingUp, Brain } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const services = [
    {
      icon: Microscope,
      title: 'Technical Advisory',
      description:
        'Science-based decision-making with deep expertise in drug delivery and bioavailability enhancement. Independent expert assessment to select the best strategies for your drug programs.',
      link: '/technical-advisory',
    },
    {
      icon: TrendingUp,
      title: 'Business Development',
      description:
        'Transform your business development approach beyond transactional sales. We help identify best partners, formulate compelling value propositions, and manage vendor relationships.',
      link: '/business-development',
    },
    {
      icon: Brain,
      title: 'Leadership Counseling',
      description:
        'Navigate leadership challenges with decades of combined scientific, technical, and business expertise. Cross-cultural team management experience across continents.',
      link: '/leadership-counseling',
    },
  ];

  const stats = [
    { value: '20+', label: 'Years Experience' },
    { value: '100+', label: 'Projects Delivered' },
    { value: '50+', label: 'Satisfied Clients' },
    { value: '15+', label: 'Countries Served' },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-teal-50 to-transparent rounded-full blur-3xl opacity-30 animate-pulse"></div>
          <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-gray-100 to-transparent rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-32 text-center z-10">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light text-gray-900 mb-6 tracking-tight leading-tight">
              Creating Value Through
              <span className="block mt-2 text-teal-600 font-normal">Partnership</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
              Technical and Business Consulting for the Pharmaceutical Industry
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/services">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-6 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                  Explore Services
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button
                  variant="outline"
                  className="border-2 border-gray-300 hover:border-teal-600 text-gray-700 hover:text-teal-600 px-8 py-6 rounded-lg text-lg transition-all duration-300"
                >
                  Get in Touch
                </Button>
              </Link>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-gray-300 rounded-full flex items-start justify-center p-2">
              <div className="w-1 h-3 bg-teal-600 rounded-full animate-pulse"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="text-center p-6 rounded-lg hover:bg-gray-50 transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-5xl font-light text-teal-600 mb-2">{stat.value}</div>
                <div className="text-gray-600 text-sm uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Our <span className="text-teal-600 font-normal">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive consulting solutions tailored for pharmaceutical innovation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white"
                >
                  <CardContent className="p-8">
                    <div className="mb-6 inline-block p-4 bg-teal-50 rounded-lg group-hover:bg-teal-100 transition-colors duration-300">
                      <Icon className="h-8 w-8 text-teal-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4 group-hover:text-teal-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">{service.description}</p>
                    <Link
                      to={service.link}
                      className="inline-flex items-center text-teal-600 hover:text-teal-700 font-medium transition-colors duration-200"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-200" />
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Why Choose <span className="text-teal-600 font-normal">Evolve</span>?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We are specialized consultants with deep expertise in drug delivery and pharmaceutical development. Our approach combines scientific rigor with business acumen to deliver tangible value.
              </p>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Award className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Deep Expertise</h3>
                    <p className="text-gray-600">
                      Over 20 years of combined experience in drug delivery and pharmaceutical development
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Users className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Partnership Approach</h3>
                    <p className="text-gray-600">
                      We work as an extension of your team, delivering solutions tailored to your needs
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                    <Target className="h-6 w-6 text-teal-600" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">Results-Driven</h3>
                    <p className="text-gray-600">
                      Focused on delivering measurable outcomes and supporting your success
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1707944745860-4615eb585a41?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwcmVzZWFyY2h8ZW58MHx8fHwxNzYyMjQzMjQ4fDA&ixlib=rb-4.1.0&q=85"
                alt="Laboratory Research"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-teal-600 rounded-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-teal-600 to-teal-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Ready to Transform Your Pharmaceutical Strategy?
          </h2>
          <p className="text-xl text-teal-100 mb-10 max-w-3xl mx-auto">
            Let's discuss how we can create value through partnership
          </p>
          <Link to="/contact">
            <Button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-6 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Schedule a Consultation
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;
