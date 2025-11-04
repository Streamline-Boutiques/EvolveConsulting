import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Award, Users, Target, Globe, BookOpen, Microscope } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

const AboutUs = () => {
  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'Committed to the highest standards of scientific and professional excellence',
    },
    {
      icon: Users,
      title: 'Partnership',
      description: 'Building lasting relationships based on trust, collaboration, and mutual success',
    },
    {
      icon: Target,
      title: 'Impact',
      description: 'Focused on delivering tangible results that accelerate pharmaceutical innovation',
    },
    {
      icon: Globe,
      title: 'Global Perspective',
      description: 'Bringing international experience and cross-cultural insights to every engagement',
    },
  ];

  const expertise = [
    {
      icon: Microscope,
      title: 'Drug Delivery',
      areas: ['Oral delivery systems', 'Bioavailability enhancement', 'Novel formulation strategies', 'Technology assessment'],
    },
    {
      icon: BookOpen,
      title: 'Pharmaceutical Development',
      areas: ['Program strategy', 'CMC development', 'Regulatory pathway planning', 'Risk assessment'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            About <span className="text-teal-600 font-normal">Evolve Consulting</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Creating value through partnership in the pharmaceutical industry
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Our <span className="text-teal-600 font-normal">Story</span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Evolve Consulting was founded in 2022 by Dr. Eduardo Jule, bringing together over 20 years of experience in drug delivery, pharmaceutical research, and industry leadership.
                </p>
                <p>
                  We are specialized consultants with deep expertise in drug delivery and pharmaceutical development. Our approach combines rigorous scientific knowledge with practical business acumen to help biotech ventures navigate the complex landscape of pharmaceutical development.
                </p>
                <p>
                  We work as strategic partners to our clients, providing independent expert guidance that accelerates innovation and supports commercial success. Our global perspective, informed by experience across multiple continents, enables us to deliver value in diverse market environments.
                </p>
              </div>
            </div>
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1707944745853-b86631676829?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2NzV8MHwxfHNlYXJjaHw0fHxsYWJvcmF0b3J5JTIwcmVzZWFyY2h8ZW58MHx8fHwxNzYyMjQzMjQ4fDA&ixlib=rb-4.1.0&q=85"
                alt="Our Story"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-teal-600 rounded-2xl -z-10 opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Our <span className="text-teal-600 font-normal">Values</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Guiding principles that define how we work and serve our clients
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-white"
                >
                  <CardContent className="p-8 text-center">
                    <div className="mb-6 inline-block p-4 bg-teal-50 rounded-lg group-hover:bg-teal-100 transition-colors duration-300">
                      <Icon className="h-8 w-8 text-teal-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Expertise */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Core <span className="text-teal-600 font-normal">Expertise</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Deep technical knowledge across critical pharmaceutical domains
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {expertise.map((area, index) => {
              const Icon = area.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gray-50"
                >
                  <CardContent className="p-8">
                    <div className="mb-6 inline-block p-4 bg-teal-50 rounded-lg group-hover:bg-teal-100 transition-colors duration-300">
                      <Icon className="h-10 w-10 text-teal-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-6">{area.title}</h3>
                    <ul className="space-y-3">
                      {area.areas.map((item, idx) => (
                        <li key={idx} className="flex items-center space-x-3">
                          <div className="w-2 h-2 bg-teal-600 rounded-full"></div>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Leadership Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Leadership <span className="text-teal-600 font-normal">Team</span>
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <Card className="border-0 bg-white shadow-xl">
              <CardContent className="p-12">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                  <div className="md:col-span-1">
                    <div className="w-48 h-48 mx-auto bg-gradient-to-br from-teal-100 to-teal-50 rounded-full flex items-center justify-center">
                      <div className="text-6xl font-light text-teal-600">EJ</div>
                    </div>
                  </div>
                  <div className="md:col-span-2">
                    <h3 className="text-3xl font-semibold text-gray-900 mb-2">Dr. Eduardo Jule</h3>
                    <p className="text-lg text-teal-600 mb-6">Founder & Principal Consultant</p>
                    <div className="space-y-4 text-gray-600 leading-relaxed">
                      <p>
                        Dr. Jule brings over 20 years of experience in drug delivery, spanning both research and industry roles. His expertise encompasses advanced drug delivery systems, bioavailability enhancement, and pharmaceutical development strategy.
                      </p>
                      <p>
                        With extensive cross-cultural management experience across multiple continents, Dr. Jule provides unique insights into global pharmaceutical markets and operations.
                      </p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-teal-600 to-teal-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Let's Create Value Together
          </h2>
          <p className="text-xl text-teal-100 mb-10 max-w-3xl mx-auto">
            Ready to partner with experienced pharmaceutical consultants?
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

export default AboutUs;
