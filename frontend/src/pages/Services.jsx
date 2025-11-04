import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Microscope, TrendingUp, Brain, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

const Services = () => {
  const services = [
    {
      icon: Microscope,
      title: 'Technical Advisory',
      description:
        'Expert guidance on pharmaceutical development with deep expertise in drug delivery and bioavailability enhancement.',
      features: [
        'Science-based decision-making',
        'Drug delivery expertise',
        'Bioavailability enhancement',
        'Independent expert assessment',
        'Strategic partner selection',
      ],
      link: '/technical-advisory',
      image: '/images/barcelona.jpg',
    },
    {
      icon: TrendingUp,
      title: 'Business Development',
      description:
        'Transform your business development approach with strategic partner identification and value proposition formulation.',
      features: [
        'Partner identification',
        'Value proposition development',
        'Vendor relationship management',
        'CRO/CDMO selection',
        'Strategic planning',
      ],
      link: '/business-development',
      image: "/images/barcelona.jpg"
    },
    {
      icon: Brain,
      title: 'Leadership Counseling',
      description:
        'Navigate leadership challenges with decades of scientific, technical, and business expertise across global markets.',
      features: [
        'Leadership development',
        'Cross-cultural management',
        'Team building',
        'Strategic counseling',
        'Change management',
      ],
      link: '/leadership-counseling',
      image: "/images/barcelona.jpg",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            Our <span className="text-teal-600 font-normal">Services</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Comprehensive consulting solutions designed to drive innovation and success in pharmaceutical development
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="space-y-24">
            {services.map((service, index) => {
              const Icon = service.icon;
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                    isEven ? '' : 'lg:grid-flow-dense'
                  }`}
                >
                  <div className={isEven ? '' : 'lg:col-start-2'}>
                    <div className="mb-6 inline-block p-4 bg-teal-50 rounded-lg">
                      <Icon className="h-10 w-10 text-teal-600" />
                    </div>
                    <h2 className="text-4xl font-light text-gray-900 mb-4">{service.title}</h2>
                    <p className="text-lg text-gray-600 mb-8 leading-relaxed">{service.description}</p>
                    <ul className="space-y-3 mb-8">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <CheckCircle className="h-5 w-5 text-teal-600 flex-shrink-0" />
                          <span className="text-gray-700">{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to={service.link}>
                      <Button className="bg-teal-600 hover:bg-teal-700 text-white px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </Link>
                  </div>
                  <div className={isEven ? '' : 'lg:col-start-1 lg:row-start-1'}>
                    <div className="relative">
                      <img
                        src={service.image}
                        alt={service.title}
                        className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
                      />
                      <div className="absolute -bottom-6 -right-6 w-full h-full bg-teal-600 rounded-2xl -z-10 opacity-10"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Approach Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Our <span className="text-teal-600 font-normal">Approach</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine scientific rigor with business acumen to deliver results
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: '01',
                title: 'Understand',
                description:
                  'Deep dive into your challenges, goals, and market position to develop tailored solutions',
              },
              {
                number: '02',
                title: 'Strategize',
                description:
                  'Leverage our expertise to create data-driven strategies aligned with your objectives',
              },
              {
                number: '03',
                title: 'Execute',
                description:
                  'Partner with you throughout implementation to ensure successful outcomes',
              },
            ].map((step, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white"
              >
                <CardContent className="p-8">
                  <div className="text-6xl font-light text-teal-600 mb-4 opacity-30">{step.number}</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{step.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-teal-600 to-teal-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Let's Discuss Your Project
          </h2>
          <p className="text-xl text-teal-100 mb-10 max-w-3xl mx-auto">
            Contact us to learn how our services can support your pharmaceutical development goals
          </p>
          <Link to="/contact">
            <Button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-6 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Get in Touch
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Services;
