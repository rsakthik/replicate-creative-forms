import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import AnimatedButton from '../ui/AnimatedButton';
import ScrollReveal from '../ui/ScrollReveal';
import { Switch } from "@/components/ui/switch";

const features = [
  "AI-powered analytics",
  "Automated reporting",
  "Custom integrations", 
  "Priority support",
  "Advanced personalization",
  "Team collaboration tools"
];

const Pricing = () => {
  const [isAnnual, setIsAnnual] = useState(true);

  return (
    <section id="pricing" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-40 right-0 w-72 h-72 bg-blue-50 rounded-full opacity-70 blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-full h-1/3 bg-gradient-to-t from-gray-50 to-transparent -z-10"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <ScrollReveal animation="fade-in-up">
            <span className="inline-block px-3 py-1 rounded-full bg-black/5 text-sm font-medium mb-6">
              Flexible Pricing
            </span>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in-up" delay={100}>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6">
              Choose the Perfect <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Plan for Your Business</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in-up" delay={200}>
            <p className="text-xl text-gray-600 mb-8">
              Simple, transparent pricing designed to scale with your business needs.
              No hidden fees or surprises.
            </p>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in-up" delay={300}>
            <div className="flex items-center justify-center mb-12">
              <span className={cn("mr-3", !isAnnual ? "text-gray-900" : "text-gray-500")}>Monthly</span>
              <Switch
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
                className="mx-3"
              />
              <span className={cn("ml-3 flex items-center", isAnnual ? "text-gray-900" : "text-gray-500")}>
                Annually
                <span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">Save 20%</span>
              </span>
            </div>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Starter Plan */}
          <ScrollReveal animation="fade-in-up" delay={400} className="opacity-0">
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8 transition-all duration-300 hover:shadow-md hover:border-gray-200 flex flex-col h-full">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Starter</h3>
                <p className="text-gray-600 mb-4">Perfect for small businesses just getting started with AI.</p>
                <div className="flex items-end mb-6">
                  <span className="text-4xl font-bold">${isAnnual ? '39' : '49'}</span>
                  <span className="text-gray-600 ml-2 mb-1">/ month</span>
                </div>
                {isAnnual && (
                  <p className="text-sm text-green-600 mb-4">Billed annually (${39 * 12} total)</p>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {features.slice(0, 3).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
                {features.slice(3).map((feature, index) => (
                  <li key={index + 3} className="flex items-start text-gray-400">
                    <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <AnimatedButton variant="outline" className="w-full">
                Get started
              </AnimatedButton>
            </div>
          </ScrollReveal>

          {/* Professional Plan */}
          <ScrollReveal animation="fade-in-up" delay={500} className="opacity-0">
            <div className="bg-white border-2 border-blue-500 rounded-2xl shadow-md p-8 transition-all duration-300 hover:shadow-lg relative flex flex-col h-full">
              <div className="absolute top-0 right-8 transform -translate-y-1/2 bg-blue-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                Most Popular
              </div>
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Professional</h3>
                <p className="text-gray-600 mb-4">Ideal for growing companies looking to scale with AI.</p>
                <div className="flex items-end mb-6">
                  <span className="text-4xl font-bold">${isAnnual ? '99' : '119'}</span>
                  <span className="text-gray-600 ml-2 mb-1">/ month</span>
                </div>
                {isAnnual && (
                  <p className="text-sm text-green-600 mb-4">Billed annually (${99 * 12} total)</p>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {features.slice(0, 5).map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
                {features.slice(5).map((feature, index) => (
                  <li key={index + 5} className="flex items-start text-gray-400">
                    <svg className="w-5 h-5 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <AnimatedButton variant="default" className="w-full">
                Get started
              </AnimatedButton>
            </div>
          </ScrollReveal>

          {/* Enterprise Plan */}
          <ScrollReveal animation="fade-in-up" delay={600} className="opacity-0">
            <div className="bg-white border border-gray-100 rounded-2xl shadow-sm p-8 transition-all duration-300 hover:shadow-md hover:border-gray-200 flex flex-col h-full">
              <div className="mb-6">
                <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
                <p className="text-gray-600 mb-4">Custom solutions for large organizations with advanced needs.</p>
                <div className="flex items-end mb-6">
                  <span className="text-4xl font-bold">${isAnnual ? '299' : '349'}</span>
                  <span className="text-gray-600 ml-2 mb-1">/ month</span>
                </div>
                {isAnnual && (
                  <p className="text-sm text-green-600 mb-4">Billed annually (${299 * 12} total)</p>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                    <span>{feature}</span>
                  </li>
                ))}
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Custom AI model training</span>
                </li>
                <li className="flex items-start">
                  <svg className="w-5 h-5 text-green-500 mr-2 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  <span>Dedicated account manager</span>
                </li>
              </ul>

              <AnimatedButton variant="outline" className="w-full">
                Contact sales
              </AnimatedButton>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
