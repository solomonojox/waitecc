import React, { useState, useEffect } from 'react';
import { Bot, Mail, Workflow, ShoppingCart, Target, ArrowRight, Zap, Clock, TrendingUp, Users, DollarSign, Shield } from 'lucide-react';
import Navbar from '../Components/Navbar';

const AIAutomationServicesPage = () => {
  const [activeService, setActiveService] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    interest: ''
  });

  useEffect(() => {
    setIsVisible(true);
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % 5);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const services = [
    {
      icon: Bot,
      title: "Automated Customer Support",
      description: "Deploy intelligent AI agents that respond to FAQs, manage inquiries, process orders, and provide support 24/7",
      benefit: "Reduce response time by 90%"
    },
    {
      icon: Mail,
      title: "Email & Lead Nurturing Automation",
      description: "Build email flows that follow up, re-engage, and convert leads using AI-powered personalization",
      benefit: "Increase conversion rates by 40%"
    },
    {
      icon: Workflow,
      title: "Workflow & Task Automation",
      description: "Connect platforms and automate repetitive admin tasks, data syncing, reporting, and alerts",
      benefit: "Save 20+ hours per week"
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Automation",
      description: "From abandoned cart recovery to AI product recommendations and personalized customer journeys",
      benefit: "Boost sales by 35%"
    },
    {
      icon: Target,
      title: "CRM & Sales Automation",
      description: "Track prospects, auto-update pipelines, send reminders, and qualify leads in real time",
      benefit: "Close 50% more deals"
    }
  ];

  const benefits = [
    { icon: Clock, text: "Save hundreds of hours in repetitive tasks", stat: "300+ hrs/month" },
    { icon: TrendingUp, text: "Increase productivity across departments", stat: "65% boost" },
    { icon: DollarSign, text: "Close more sales without scaling your team", stat: "2x revenue" },
    { icon: Users, text: "Improve customer retention and satisfaction", stat: "85% retention" },
    { icon: Shield, text: "Reduce errors and human overhead", stat: "99.9% accuracy" }
  ];

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (!formData.name || !formData.email) {
      alert('Please fill in your name and email address.');
      return;
    }
    alert('Thank you! We\'ll create your custom automation blueprint and contact you within 24 hours.');
    setFormData({ name: '', email: '', company: '', interest: '' });
  };

  return (
    <div>
      <div className="sticky top-0 z-50">
        <Navbar />
      </div>

      <div className="min-h-screen">
        {/* Hero Section */}
        <div className="relative overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-50/40 to-purple-50/40"></div>
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-32">
            <div className={`text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="inline-flex items-center px-4 py-2 bg-blue-50 rounded-full border border-blue-200 mb-8">
                <Zap className="w-4 h-4 text-blue-600 mr-2" />
                <span className="text-blue-700 text-sm font-medium">AI-Powered Business Transformation</span>
              </div>

              <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
                Unlock Growth &
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"> Efficiency</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
                Eliminate time-consuming manual processes and scale your business with intelligent automation solutions built to optimize performance, reduce overhead, and drive revenue.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <button
                  onClick={() => document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' })}
                  className="group px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Get Your Free Automation Blueprint
                  <ArrowRight className="inline-block ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 hover:border-gray-400 transition-all duration-300">
                  View Case Studies
                </button>
              </div>
            </div>
          </div>

          {/* Floating Elements */}
          <div className="absolute top-5 md:top-20 left-10 animate-bounce opacity-50 lg:opacity-100">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center shadow-lg">
              <Bot className="w-8 h-8 text-blue-600" />
            </div>
          </div>
          <div className="absolute top-40 right-20 animate-pulse opacity-50 lg:opacity-100">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center shadow-lg">
              <Workflow className="w-6 h-6 text-purple-600" />
            </div>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-gradient-to-b from-gray-50/50 to-slate-50/30 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
                Our AI Automation Capabilities
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                From customer engagement to internal operations, we build custom automation workflows that do the heavy lifting for your business.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Interactive Service Display */}
              <div className="relative">
                <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-xl">
                  {services.map((service, index) => {
                    const Icon = service.icon;
                    return (
                      <div
                        key={index}
                        className={`transition-all duration-700 ${activeService === index
                          ? 'opacity-100 transform translate-x-0'
                          : 'opacity-0 absolute transform translate-x-4'
                          }`}
                      >
                        <div className="flex items-center mb-6">
                          <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mr-4 shadow-lg">
                            <Icon className="w-8 h-8 text-white" />
                          </div>
                          <div>
                            <h3 className="text-2xl font-bold text-gray-900">{service.title}</h3>
                            <div className="text-green-600 font-semibold">{service.benefit}</div>
                          </div>
                        </div>
                        <p className="text-gray-600 text-lg leading-relaxed">{service.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Service Navigation */}
              <div className="space-y-4">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <div
                      key={index}
                      onClick={() => setActiveService(index)}
                      className={`p-4 rounded-xl cursor-pointer transition-all duration-300 border ${activeService === index
                        ? 'bg-gradient-to-r from-blue-50 to-purple-50 border-blue-300 shadow-md'
                        : 'bg-white/70 backdrop-blur-sm border-gray-200 hover:border-blue-300 hover:shadow-md'
                        }`}
                    >
                      <div className="flex items-center">
                        <Icon className={`w-6 h-6 mr-3 ${activeService === index ? 'text-blue-600' : 'text-gray-500'}`} />
                        <span className={`font-semibold ${activeService === index ? 'text-gray-900' : 'text-gray-700'}`}>
                          {service.title}
                        </span>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        {/* Benefits Section */}
        <div className="bg-gradient-to-br from-indigo-50/40 via-purple-50/30 to-pink-50/20 py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 text-center mb-16">
              Transform Your Business Results
            </h2>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:transform hover:scale-105"
                  >
                    <div className="flex items-center mb-4">
                      <Icon className="w-8 h-8 text-blue-600 mr-3" />
                      <span className="text-2xl font-bold text-purple-600">{benefit.stat}</span>
                    </div>
                    <p className="text-gray-600 group-hover:text-gray-900 transition-colors">{benefit.text}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div id="contact-form" className="bg-gradient-to-b from-slate-50/40 to-gray-50/60 py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-8 border border-gray-200 shadow-xl">
              <div className="text-center mb-8">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Ready to Save Time & Scale Smart?</h2>
                <p className="text-xl text-gray-600">
                  Fill out the form below, and we'll create a custom automation blueprint just for your business.
                  <span className="text-blue-600 font-semibold"> Your future self will thank you.</span>
                </p>
              </div>

              <div className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Full Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Email Address</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Company Name</label>
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                      placeholder="Enter your company name"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-700 font-semibold mb-2">Primary Interest</label>
                    <select
                      name="interest"
                      value={formData.interest}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/80 backdrop-blur-sm border border-gray-300 rounded-lg text-gray-900 focus:outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-colors"
                    >
                      <option value="">Select your main interest</option>
                      <option value="customer-support">Customer Support Automation</option>
                      <option value="email-marketing">Email & Lead Nurturing</option>
                      <option value="workflow">Workflow Automation</option>
                      <option value="ecommerce">E-commerce Automation</option>
                      <option value="crm">CRM & Sales Automation</option>
                    </select>
                  </div>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
                >
                  Get My Free AI Automation Blueprint
                  <ArrowRight className="inline-block ml-2 w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Footer CTA */}
        <div className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 py-16">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Don't Let Manual Processes Hold You Back
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Join 500+ businesses already saving time and scaling with AI automation
            </p>
            <div className="flex flex-wrap justify-center gap-8 text-white">
              <div className="text-center">
                <div className="text-3xl font-bold">500+</div>
                <div className="text-blue-200">Businesses Automated</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">10,000+</div>
                <div className="text-blue-200">Hours Saved Monthly</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">300%</div>
                <div className="text-blue-200">Average ROI Increase</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAutomationServicesPage;