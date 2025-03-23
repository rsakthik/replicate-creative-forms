
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { CheckCircle } from 'lucide-react';

const Features = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <section className="py-20 md:py-32 relative overflow-hidden">
          {/* Background gradient elements */}
          <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-blue-50 to-transparent opacity-70 -z-10"></div>
          <div className="absolute top-40 left-1/4 w-72 h-72 bg-purple-200 rounded-full blur-3xl opacity-20 animate-float animation-delay-1000 -z-10"></div>
          
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollReveal animation="fade-in-up">
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-center">
                Powerful AI <span className="gradient-text">Features</span>
              </h1>
              <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
                Our comprehensive suite of AI tools is designed to transform every aspect of your business operations, 
                from customer engagement to workflow automation.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={100}>
              <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
                <div>
                  <h2 className="text-3xl font-display font-semibold mb-6">AI-Powered Analytics</h2>
                  <p className="text-gray-700 mb-6">
                    Transform raw data into actionable insights with our advanced analytics platform. 
                    Our AI algorithms identify patterns and trends that would be impossible to detect manually, 
                    giving you a competitive edge in your market.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-brand-purple mr-2 flex-shrink-0" />
                      <span>Predictive analytics that forecast future trends based on historical data</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-brand-purple mr-2 flex-shrink-0" />
                      <span>Real-time dashboards that update as new data comes in</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-brand-purple mr-2 flex-shrink-0" />
                      <span>Customizable reports tailored to your specific business needs</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-brand-purple mr-2 flex-shrink-0" />
                      <span>Anomaly detection to identify unusual patterns requiring attention</span>
                    </li>
                  </ul>
                  <AnimatedButton variant="default">
                    Learn more about Analytics
                  </AnimatedButton>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/20 to-brand-blue/20 rounded-xl blur-xl -z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80" 
                    alt="Analytics Dashboard" 
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={200}>
              <div className="grid md:grid-cols-2 gap-16 items-center mb-32">
                <div className="order-2 md:order-1 relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-blue/20 to-brand-teal/20 rounded-xl blur-xl -z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80" 
                    alt="Customer Engagement" 
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
                <div className="order-1 md:order-2">
                  <h2 className="text-3xl font-display font-semibold mb-6">Intelligent Customer Engagement</h2>
                  <p className="text-gray-700 mb-6">
                    Create personalized customer experiences at scale with our AI-driven engagement tools. 
                    From chatbots to email personalization, we help you connect with customers in meaningful ways 
                    that drive loyalty and conversion.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-brand-blue mr-2 flex-shrink-0" />
                      <span>24/7 AI chatbots trained on your specific products and services</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-brand-blue mr-2 flex-shrink-0" />
                      <span>Dynamic content personalization based on user behavior</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-brand-blue mr-2 flex-shrink-0" />
                      <span>Sentiment analysis to gauge customer satisfaction in real-time</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-brand-blue mr-2 flex-shrink-0" />
                      <span>Automated follow-ups that trigger at the optimal moment</span>
                    </li>
                  </ul>
                  <AnimatedButton variant="default">
                    Explore Customer Solutions
                  </AnimatedButton>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={300}>
              <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
                <div>
                  <h2 className="text-3xl font-display font-semibold mb-6">Workflow Automation</h2>
                  <p className="text-gray-700 mb-6">
                    Eliminate repetitive tasks and streamline operations with our intelligent automation platform. 
                    Our AI learns your processes and optimizes them, freeing your team to focus on high-value activities 
                    that drive growth.
                  </p>
                  <ul className="space-y-4 mb-8">
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" />
                      <span>No-code automation builder for quick implementation</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" />
                      <span>Intelligent document processing that extracts and categorizes information</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" />
                      <span>Process optimization recommendations based on AI analysis</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle className="h-6 w-6 text-brand-teal mr-2 flex-shrink-0" />
                      <span>Seamless integration with your existing software ecosystem</span>
                    </li>
                  </ul>
                  <AnimatedButton variant="default">
                    Discover Automation Tools
                  </AnimatedButton>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-teal/20 to-brand-orange/20 rounded-xl blur-xl -z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80" 
                    alt="Workflow Automation" 
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={400}>
              <div className="bg-gradient-to-r from-brand-purple/10 to-brand-blue/10 rounded-2xl p-10 text-center">
                <h2 className="text-3xl font-display font-semibold mb-6">Ready to Experience the Full Power?</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                  Book a personalized demo to see how our AI platform can address your specific business challenges.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                  <AnimatedButton variant="default" size="lg">
                    Schedule a Demo
                  </AnimatedButton>
                  <AnimatedButton variant="outline" size="lg">
                    View Documentation
                  </AnimatedButton>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Features;
