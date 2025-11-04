import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Brain, Users, Globe, Lightbulb } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

const LeadershipCounseling = () => {
  const areas = [
    {
      icon: Brain,
      title: 'Strategic Leadership',
      description: 'Navigate complex business challenges with informed decision-making and strategic thinking',
    },
    {
      icon: Users,
      title: 'Team Development',
      description: 'Build high-performing teams through effective leadership and organizational development',
    },
    {
      icon: Globe,
      title: 'Cross-Cultural Management',
      description: 'Leverage global experience to manage diverse teams across multiple continents',
    },
    {
      icon: Lightbulb,
      title: 'Change Management',
      description: 'Guide organizational transformation with proven change management methodologies',
    },
  ];

  const benefits = [
    'Decades of scientific and business expertise',
    'Real-world pharmaceutical industry experience',
    'Cross-cultural leadership insights',
    'Tailored guidance for biotech ventures',
    'Strategic perspective on complex challenges',
    'Confidential, trusted advisor relationship',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight leading-tight">
                Leadership
                <span className="block text-teal-600 font-normal">Counseling</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Navigate leadership challenges with guidance from decades of combined scientific, technical, and business expertise. We provide strategic counseling to help pharmaceutical leaders drive their organizations forward.
              </p>
              <Link to="/contact">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                  Schedule a Session
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1707944746058-4da338d0f827?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHwzfHxsYWJvcmF0b3J5JTIwcmVzZWFyY2h8ZW58MHx8fHwxNzYyMjQzMjQ4fDA&ixlib=rb-4.1.0&q=85"
                alt="Leadership Counseling"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-teal-600 rounded-2xl -z-10 opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Focus <span className="text-teal-600 font-normal">Areas</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive leadership support for pharmaceutical executives
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {areas.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gray-50"
                >
                  <CardContent className="p-8">
                    <div className="mb-6 inline-block p-4 bg-teal-50 rounded-lg group-hover:bg-teal-100 transition-colors duration-300">
                      <Icon className="h-8 w-8 text-teal-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{area.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{area.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Experience That <span className="text-teal-600 font-normal">Matters</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our leadership counseling draws from extensive real-world experience across pharmaceutical research, development, and business environments. We understand the unique challenges facing biotech leaders and provide practical, actionable guidance.
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
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/6285383/pexels-photo-6285383.jpeg"
                alt="Leadership"
                className="rounded-2xl shadow-2xl"
              />
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
              Confidential, personalized leadership guidance
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Listen & Understand',
                description:
                  'Deep listening to understand your unique challenges, organizational context, and leadership goals',
              },
              {
                title: 'Analyze & Advise',
                description:
                  'Drawing from extensive experience to provide strategic insights and actionable recommendations',
              },
              {
                title: 'Support & Guide',
                description:
                  'Ongoing partnership to support implementation and navigate evolving challenges',
              },
            ].map((item, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gray-50"
              >
                <CardContent className="p-8">
                  <div className="text-6xl font-light text-teal-600 mb-4 opacity-30">
                    {String(index + 1).padStart(2, '0')}
                  </div>
                  <h3 className="text-2xl font-semibold text-gray-900 mb-4">{item.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{item.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Who Benefits */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Who <span className="text-teal-600 font-normal">Benefits</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              'Biotech CEOs & Founders',
              'VP & Director Level Executives',
              'Scientific Leaders',
              'Cross-Functional Teams',
            ].map((role, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md text-center">
                <p className="text-gray-800 font-medium">{role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-teal-600 to-teal-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Elevate Your Leadership Impact
          </h2>
          <p className="text-xl text-teal-100 mb-10 max-w-3xl mx-auto">
            Connect with us to discuss how our counseling can support your leadership journey
          </p>
          <Link to="/contact">
            <Button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-6 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Connect with Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default LeadershipCounseling;
