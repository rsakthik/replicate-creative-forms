
import React from 'react';
import { cn } from '@/lib/utils';
import ScrollReveal from '../ui/ScrollReveal';

const features = [
  {
    id: 1,
    title: 'Data-Driven Insights',
    description: 'Leverage advanced analytics to extract actionable insights from your data, enabling informed decision-making and strategic planning.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M21 21H4.6C4.03995 21 3.75992 21 3.54601 20.891C3.35785 20.7951 3.20487 20.6422 3.10899 20.454C3 20.2401 3 19.9601 3 19.4V3M7 15L11 10L15 13L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 2,
    title: 'Automated Workflows',
    description: 'Streamline operations with intelligent automation that handles routine tasks, reduces errors, and frees your team to focus on high-value activities.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 3,
    title: 'Predictive Analytics',
    description: 'Anticipate market trends and customer behaviors with AI-powered predictive models that help you stay ahead of the competition.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2 12H5.66667M18.3333 12H22M17 4L14 7M7 7L10 4M12 2V5.66667M12 18.3333V22M14 17L17 20M10 20L7 17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 4,
    title: 'Personalized Recommendations',
    description: 'Deliver tailored product recommendations and content experiences that resonate with individual customers and drive engagement.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M3 16V8C3 5.23858 5.23858 3 8 3H16C18.7614 3 21 5.23858 21 8V16C21 18.7614 18.7614 21 16 21H8C5.23858 21 3 18.7614 3 16Z" stroke="currentColor" strokeWidth="2"/>
        <path d="M17.5 6.51L17.51 6.49889" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 5,
    title: 'Natural Language Processing',
    description: 'Understand and engage with customers through advanced NLP capabilities that power chatbots, sentiment analysis, and content generation.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 10H16M8 14H13M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 13.8214 2.48697 15.5291 3.33782 17L2.5 21.5L7 20.6622C8.47087 21.513 10.1786 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    id: 6,
    title: 'Seamless Integration',
    description: 'Connect with your existing tools and platforms through robust APIs, ensuring a unified ecosystem that maximizes efficiency and data flow.',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.2 14.7764C7.10995 15.8641 5.72091 16.4079 4.9447 16.097C3.66412 15.5819 3.42387 12.7551 5.09333 9.2923C6.76279 5.82955 9.34261 3.72507 10.6232 4.24026C11.3994 4.55100 11.9337 5.94832 12 8.04338" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M14.8 9.2236C16.8901 8.13593 18.2791 7.59208 19.0553 7.90295C20.3359 8.41814 20.5761 11.2449 18.9067 14.7077C17.2372 18.1705 14.6574 20.2749 13.3768 19.7597C12.6006 19.449 12.0663 18.0517 12 15.9566" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M7 13L17 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <path d="M7 13L17 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
];

const Features = () => {
  return (
    <section id="features" className="py-20 md:py-32 bg-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-50 rounded-full opacity-70 -z-10"></div>
      <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-50 rounded-full opacity-70 -z-10"></div>
      
      <div className="container max-w-7xl mx-auto px-4 sm:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
          <ScrollReveal animation="fade-in-up">
            <span className="inline-block px-3 py-1 rounded-full bg-black/5 text-sm font-medium mb-6">
              Powerful Features
            </span>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in-up" delay={100}>
            <h2 className="text-3xl md:text-5xl font-display font-bold tracking-tight mb-6">
              Transform Your Business With <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600">Intelligent Tools</span>
            </h2>
          </ScrollReveal>
          
          <ScrollReveal animation="fade-in-up" delay={200}>
            <p className="text-xl text-gray-600">
              Our comprehensive suite of AI-powered features helps you automate processes, 
              gain valuable insights, and deliver exceptional experiences.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <ScrollReveal 
              key={feature.id}
              animation="fade-in-up"
              delay={200 + (index * 100)}
              className="opacity-0"
            >
              <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm transition-all duration-300 hover:shadow-md hover:border-gray-200 h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-black/5 mb-6">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
