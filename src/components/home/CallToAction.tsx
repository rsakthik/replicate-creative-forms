
import React from 'react';
import { cn } from '@/lib/utils';
import AnimatedButton from '../ui/AnimatedButton';
import ScrollReveal from '../ui/ScrollReveal';

const CallToAction = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white -z-10"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-70 -z-10"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-100 rounded-full blur-3xl opacity-70 -z-10"></div>
      
      <div className="container max-w-5xl mx-auto px-4 sm:px-6">
        <ScrollReveal animation="fade-in-up">
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 backdrop-blur-sm relative overflow-hidden">
            {/* Background graphic */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 rounded-full bg-blue-50 opacity-70 -z-10"></div>
            
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-display font-bold tracking-tight mb-4">
                  Ready to Transform Your Business?
                </h2>
                <p className="text-lg text-gray-600 mb-6">
                  Join thousands of companies using our AI platform to accelerate growth, 
                  streamline operations, and deliver exceptional customer experiences.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <AnimatedButton variant="default" size="lg">
                    Get started for free
                  </AnimatedButton>
                  <AnimatedButton variant="outline" size="lg">
                    Schedule a demo
                  </AnimatedButton>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-blue-50 rounded-full opacity-70 -z-10"></div>
                <div className="relative bg-white border border-gray-100 shadow-lg rounded-xl p-6">
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-4">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">14-day free trial</h3>
                      <p className="text-sm text-gray-600">No credit card required</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center mb-6">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-4">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">Easy setup</h3>
                      <p className="text-sm text-gray-600">Get started in minutes</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center text-white font-bold mr-4">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 13L9 17L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold">24/7 support</h3>
                      <p className="text-sm text-gray-600">We're here to help</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
};

export default CallToAction;
