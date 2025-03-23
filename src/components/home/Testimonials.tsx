
import React, { useState } from 'react';
import { cn } from '@/lib/utils';
import ScrollReveal from '../ui/ScrollReveal';

const testimonials = [
  {
    id: 1,
    content: "Scale with AI has transformed our marketing strategy completely. The predictive analytics helped us identify trends we would have missed, and the automation tools saved our team countless hours of manual work.",
    author: "Sarah Thompson",
    role: "Marketing Director, TechVision",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100&h=100",
  },
  {
    id: 2,
    content: "The ROI we've seen since implementing this platform has been phenomenal. Our customer engagement is up 45% and our team is now able to focus on strategic initiatives rather than repetitive tasks.",
    author: "Michael Rodriguez",
    role: "CEO, GrowthForge",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100&h=100",
  },
  {
    id: 3,
    content: "What impressed me most was how quickly we were able to integrate the platform with our existing systems. The team provided exceptional support and the results were immediate and measurable.",
    author: "Emily Chen",
    role: "CTO, InnovateCorp",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=100&h=100",
  },
  {
    id: 4,
    content: "The personalization engine has completely changed how we interact with customers. We're seeing higher conversion rates and improved customer satisfaction scores across all segments.",
    author: "David Wilson",
    role: "Customer Success Manager, RetailPlus",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=100&h=100",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section className="py-20 md:py-32 bg-gray-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-white to-transparent"></div>
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-white to-transparent"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <ScrollReveal animation="fade-in-up">
            <span className="inline-block px-3 py-1 rounded-full bg-black/5 text-sm font-medium mb-6">
              Customer Stories
            </span>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in-up" delay={100}>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6">
              What Our <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Clients Say</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in-up" delay={200}>
            <p className="text-xl text-gray-600">
              Discover how businesses like yours have achieved remarkable growth 
              and transformation with our AI-powered platform.
            </p>
          </ScrollReveal>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-12">
            {/* Quote icon */}
            <div className="absolute -top-6 left-10 w-12 h-12 flex items-center justify-center rounded-full bg-blue-50">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 11L8 17H3L6 11H3V6H10V11ZM21 11L19 17H14L17 11H14V6H21V11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>

            {testimonials.map((testimonial, idx) => (
              <div 
                key={testimonial.id}
                className={cn(
                  "transition-opacity duration-500 absolute inset-0 flex flex-col justify-between p-8 md:p-12",
                  idx === activeIndex ? "opacity-100 z-10" : "opacity-0 -z-10"
                )}
              >
                <p className="text-xl md:text-2xl font-medium text-gray-800 mb-8 leading-relaxed">
                  "{testimonial.content}"
                </p>
                <div className="flex items-center">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.author}</h4>
                    <p className="text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            ))}

            {/* Active testimonial content */}
            <div className="transition-opacity duration-500 flex flex-col justify-between">
              <p className="text-xl md:text-2xl font-medium text-gray-800 mb-8 leading-relaxed">
                "{testimonials[activeIndex].content}"
              </p>
              <div className="flex items-center">
                <img 
                  src={testimonials[activeIndex].avatar} 
                  alt={testimonials[activeIndex].author}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h4 className="font-semibold">{testimonials[activeIndex].author}</h4>
                  <p className="text-gray-600">{testimonials[activeIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center space-x-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                className={cn(
                  "w-3 h-3 rounded-full transition-all duration-300",
                  idx === activeIndex ? "bg-blue-600 scale-125" : "bg-gray-300 hover:bg-gray-400"
                )}
                onClick={() => setActiveIndex(idx)}
                aria-label={`View testimonial ${idx + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
