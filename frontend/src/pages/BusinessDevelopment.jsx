import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, TrendingUp, Handshake, Search, Target } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

const BusinessDevelopment = () => {
  const services = [
    {
      icon: Search,
      title: 'Partner Identification',
      description: 'Strategic identification of best-fit partners for your pharmaceutical programs and business goals',
    },
    {
      icon: Target,
      title: 'Value Proposition Development',
      description: 'Crafting compelling value propositions that resonate with partners and stakeholders',
    },
    {
      icon: Handshake,
      title: 'Vendor Management',
      description: 'Expert management of CRO and CDMO relationships to optimize outcomes and efficiency',
    },
    {
      icon: TrendingUp,
      title: 'Strategic Planning',
      description: 'Comprehensive business development strategies aligned with your commercial objectives',
    },
  ];

  const benefits = [
    'Transform beyond transactional approaches',
    'Access to extensive vendor network',
    'Optimized partner selection process',
    'Enhanced negotiation outcomes',
    'Streamlined vendor relationships',
    'Strategic market positioning',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight leading-tight">
                Business
                <span className="block text-teal-600 font-normal">Development</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Transform your business development approach beyond transactional sales. We help identify the best partners, formulate compelling value propositions, and manage vendor relationships to drive success.
              </p>
              <Link to="/contact">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                  Start the Conversation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/8657373/pexels-photo-8657373.jpeg"
                alt="Business Development"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-teal-600 rounded-2xl -z-10 opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Our <span className="text-teal-600 font-normal">Services</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Strategic business development solutions tailored to pharmaceutical ventures
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gray-50"
                >
                  <CardContent className="p-8">
                    <div className="mb-6 inline-block p-4 bg-teal-50 rounded-lg group-hover:bg-teal-100 transition-colors duration-300">
                      <Icon className="h-8 w-8 text-teal-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{service.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{service.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Value Proposition */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1707944746058-4da338d0f827?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHxsYWJvcmF0b3J5JTIwcmVzZWFyY2h8ZW58MHx8fHwxNzYyMjQzMjQ4fDA&ixlib=rb-4.1.0&q=85"
                alt="Partnership"
                className="rounded-2xl shadow-2xl"
              />
            </div>
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Why Choose <span className="text-teal-600 font-normal">Us</span>?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                We act as an extension of your team, bringing deep industry knowledge and extensive networks to navigate the complex pharmaceutical vendor landscape. Our approach ensures you secure the best fit for each program.
              </p>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-teal-600 flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700 text-lg">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Approach */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Our <span className="text-teal-600 font-normal">Approach</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic methodology for business development success
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                step: '01',
                title: 'Discovery',
                description:
                  'Deep understanding of your business objectives, target markets, and partnership requirements',
              },
              {
                step: '02',
                title: 'Strategy',
                description:
                  'Development of customized business development strategies and partner identification criteria',
              },
              {
                step: '03',
                title: 'Execution',
                description:
                  'Active support in partner engagement, relationship management, and ongoing optimization',
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gray-50"
              >
                <CardContent className="p-8 text-center">
                  <div className="text-6xl font-light text-teal-600 mb-4 opacity-30">{item.step}</div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
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
            Transform Your Business Development Strategy
          </h2>
          <p className="text-xl text-teal-100 mb-10 max-w-3xl mx-auto">
            Let's explore how we can help you build successful partnerships
          </p>
          <Link to="/contact">
            <Button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-6 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Get Started
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default BusinessDevelopment;
