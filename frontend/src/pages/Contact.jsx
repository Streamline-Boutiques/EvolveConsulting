import React, { useState } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Label } from '../components/ui/label';
import { useToast } from '../hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: 'Message Sent!',
        description: 'Thank you for contacting us. We will get back to you soon.',
      });
      setFormData({
        name: '',
        email: '',
        company: '',
        phone: '',
        message: '',
      });
      setIsSubmitting(false);
    }, 1000);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: 'Email',
      content: 'info@evolveconsulting.es',
      link: 'mailto:info@evolveconsulting.es',
    },
    {
      icon: MapPin,
      title: 'Location',
      content: 'Spain',
      link: null,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 bg-gradient-to-br from-gray-50 via-white to-gray-100">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h1 className="text-5xl md:text-6xl font-light text-gray-900 mb-6 tracking-tight">
            Get in <span className="text-teal-600 font-normal">Touch</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Let's discuss how we can support your pharmaceutical development goals
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <h2 className="text-4xl font-light text-gray-900 mb-6">
                Contact <span className="text-teal-600 font-normal">Information</span>
              </h2>
              <p className="text-lg text-gray-600 mb-12 leading-relaxed">
                We're here to answer your questions and discuss how Evolve Consulting can support your pharmaceutical development needs. Reach out to us using the information below or send us a message.
              </p>

              <div className="space-y-8">
                {contactInfo.map((info, index) => {
                  const Icon = info.icon;
                  return (
                    <Card key={index} className="border-0 bg-gray-50 hover:shadow-lg transition-shadow duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-start space-x-4">
                          <div className="flex-shrink-0 w-12 h-12 bg-teal-100 rounded-lg flex items-center justify-center">
                            <Icon className="h-6 w-6 text-teal-600" />
                          </div>
                          <div>
                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                            {info.link ? (
                              <a
                                href={info.link}
                                className="text-gray-600 hover:text-teal-600 transition-colors duration-200"
                              >
                                {info.content}
                              </a>
                            ) : (
                              <p className="text-gray-600">{info.content}</p>
                            )}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>

              {/* Image */}
              <div className="mt-12 relative">
                <img
                  src="/images/ed jule.jpg"
                  alt="Contact Us"
                  className="rounded-2xl shadow-xl w-full h-64 object-cover"
                />
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <Card className="border-0 bg-gray-50 shadow-xl">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-light text-gray-900 mb-6">
                    Send us a <span className="text-teal-600 font-normal">Message</span>
                  </h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="name" className="text-gray-700 mb-2">
                          Name *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          type="text"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          className="mt-2 bg-white"
                          placeholder="Your name"
                        />
                      </div>
                      <div>
                        <Label htmlFor="email" className="text-gray-700 mb-2">
                          Email *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          className="mt-2 bg-white"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <Label htmlFor="company" className="text-gray-700 mb-2">
                          Company
                        </Label>
                        <Input
                          id="company"
                          name="company"
                          type="text"
                          value={formData.company}
                          onChange={handleChange}
                          className="mt-2 bg-white"
                          placeholder="Your company"
                        />
                      </div>
                      <div>
                        <Label htmlFor="phone" className="text-gray-700 mb-2">
                          Phone
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleChange}
                          className="mt-2 bg-white"
                          placeholder="+1 (555) 000-0000"
                        />
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="message" className="text-gray-700 mb-2">
                        Message *
                      </Label>
                      <Textarea
                        id="message"
                        name="message"
                        required
                        value={formData.message}
                        onChange={handleChange}
                        rows={6}
                        className="mt-2 bg-white resize-none"
                        placeholder="Tell us about your project or inquiry..."
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-teal-600 hover:bg-teal-700 text-white py-6 rounded-lg text-lg transition-all duration-300 shadow-md hover:shadow-lg"
                    >
                      {isSubmitting ? 'Sending...' : 'Send Message'}
                      <Send className="ml-2 h-5 w-5" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map/Additional Info Section */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-light text-gray-900 mb-6">
            Ready to <span className="text-teal-600 font-normal">Collaborate</span>?
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Whether you're looking for technical advisory, business development support, or leadership counseling, we're here to help. Our team is committed to creating value through partnership and delivering results that matter.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Contact;
