import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle, Beaker, FileText, Users, Target } from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';
import { Button } from '../components/ui/button';

const TechnicalAdvisory = () => {
  const capabilities = [
    {
      icon: Beaker,
      title: 'Drug Delivery Expertise',
      description: 'Deep knowledge in advanced drug delivery systems and formulation strategies',
    },
    {
      icon: Target,
      title: 'Bioavailability Enhancement',
      description: 'Proven strategies to improve drug bioavailability and therapeutic efficacy',
    },
    {
      icon: FileText,
      title: 'Due Diligence',
      description: 'Comprehensive data-driven assessments for informed decision-making',
    },
    {
      icon: Users,
      title: 'Partner Selection',
      description: 'Independent expert guidance to identify optimal technology and service partners',
    },
  ];

  const benefits = [
    'Access to 20+ years of drug delivery experience',
    'Science-based decision support',
    'Independent, unbiased expert assessment',
    'Risk mitigation through thorough evaluation',
    'Accelerated program development',
    'Cost-effective solution selection',
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight leading-tight">
                Technical
                <span className="block text-teal-600 font-normal">Advisory</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Expert guidance on pharmaceutical development with specialized expertise in drug delivery and bioavailability enhancement. We provide science-based decision-making support to accelerate your drug programs.
              </p>
              <Link to="/contact">
                <Button className="bg-teal-600 hover:bg-teal-700 text-white px-8 py-4 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl">
                  Schedule Consultation
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
            <div className="relative">
              <img
                src="/images/japan university ed.jpg"
                alt="Technical Advisory"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-full h-full bg-teal-600 rounded-2xl -z-10 opacity-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Capabilities */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Core <span className="text-teal-600 font-normal">Capabilities</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive technical expertise to support your pharmaceutical development
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {capabilities.map((capability, index) => {
              const Icon = capability.icon;
              return (
                <Card
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 bg-gray-50"
                >
                  <CardContent className="p-8">
                    <div className="mb-6 inline-block p-4 bg-teal-50 rounded-lg group-hover:bg-teal-100 transition-colors duration-300">
                      <Icon className="h-8 w-8 text-teal-600" />
                    </div>
                    <h3 className="text-2xl font-semibold text-gray-900 mb-4">{capability.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{capability.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                What We <span className="text-teal-600 font-normal">Offer</span>
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                Our technical advisory services are designed to provide independent, expert assessment to support your drug development programs. We help you make informed decisions that accelerate development while mitigating risks.
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
                src="https://images.pexels.com/photos/3992943/pexels-photo-3992943.jpeg"
                alt="Laboratory Research"
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Our <span className="text-teal-600 font-normal">Process</span>
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A structured approach to delivering actionable insights
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Assessment',
                description: 'Comprehensive analysis of your program requirements and challenges',
              },
              {
                step: '02',
                title: 'Research',
                description: 'Deep dive into relevant technologies, partners, and scientific literature',
              },
              {
                step: '03',
                title: 'Evaluation',
                description: 'Independent expert assessment of options and strategic recommendations',
              },
              {
                step: '04',
                title: 'Support',
                description: 'Ongoing guidance throughout implementation and decision-making',
              },
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl font-light text-teal-600 mb-4 opacity-40">{item.step}</div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-br from-teal-600 to-teal-700">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-light text-white mb-6">
            Ready to Accelerate Your Drug Development?
          </h2>
          <p className="text-xl text-teal-100 mb-10 max-w-3xl mx-auto">
            Let's discuss how our technical expertise can support your programs
          </p>
          <Link to="/contact">
            <Button className="bg-white text-teal-600 hover:bg-gray-100 px-8 py-6 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Contact Us Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
};

export default TechnicalAdvisory;
