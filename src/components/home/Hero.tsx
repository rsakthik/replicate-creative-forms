
import React, { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import AnimatedButton from '../ui/AnimatedButton';
import ScrollReveal from '../ui/ScrollReveal';

const Hero = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-32 overflow-hidden">
      {/* Background gradient elements */}
      <div className="absolute top-0 left-0 right-0 h-[500px] bg-gradient-to-b from-blue-50 to-transparent opacity-60 -z-10"></div>
      <div className="absolute top-24 right-1/4 w-72 h-72 bg-pink-200 rounded-full blur-3xl opacity-20 animate-float -z-10"></div>
      <div className="absolute top-32 left-1/4 w-64 h-64 bg-blue-200 rounded-full blur-3xl opacity-20 animate-float animation-delay-1000 -z-10"></div>

      <div className="container max-w-7xl mx-auto px-4 sm:px-6 relative">
        <div className="text-center max-w-4xl mx-auto">
          <ScrollReveal 
            animation="fade-in-up" 
            className="opacity-0"
            duration={800}
          >
            <span className="inline-block px-3 py-1 rounded-full bg-black/5 text-sm font-medium mb-6">
              Scale your business with AI
            </span>
          </ScrollReveal>

          <ScrollReveal 
            animation="fade-in-up" 
            className="opacity-0"
            duration={800}
            delay={100}
          >
            <h1 className="text-4xl md:text-6xl font-display font-bold tracking-tight mb-6">
              Revolutionize Your Growth <br className="hidden md:block" />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">With AI Technology</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal 
            animation="fade-in-up" 
            className="opacity-0"
            duration={800}
            delay={200}
          >
            <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
              Harness the power of artificial intelligence to transform your business operations, 
              enhance customer experiences, and drive sustainable growth.
            </p>
          </ScrollReveal>

          <ScrollReveal 
            animation="fade-in-up" 
            className="opacity-0"
            duration={800}
            delay={300}
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <AnimatedButton 
                variant="default" 
                size="lg"
                className="w-full sm:w-auto"
              >
                Get started for free
              </AnimatedButton>
              <AnimatedButton 
                variant="outline" 
                size="lg"
                className="w-full sm:w-auto"
              >
                Book a demo
              </AnimatedButton>
            </div>
          </ScrollReveal>

          <ScrollReveal 
            animation="fade-in-up" 
            className="opacity-0"
            duration={800}
            delay={400}
          >
            <div className="relative bg-white border border-gray-100 shadow-xl rounded-2xl p-1 max-w-5xl mx-auto transform transition-all duration-500 hover:shadow-2xl">
              <div className={cn(
                "rounded-xl overflow-hidden transition-all duration-700 transform",
                mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
              )}>
                <img 
                  src="https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&fit=crop&q=80" 
                  alt="AI Dashboard" 
                  className="w-full h-auto object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 transition-opacity duration-300 hover:opacity-100"></div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center animate-bounce">
        <span className="text-sm text-gray-500 mb-2">Scroll to explore</span>
        <svg width="20" height="10" viewBox="0 0 20 10" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M1 1L10 9L19 1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
