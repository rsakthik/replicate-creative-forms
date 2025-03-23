
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedButton from '@/components/ui/AnimatedButton';

const About = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <section className="py-20 md:py-32 relative overflow-hidden">
          {/* Background gradient elements */}
          <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-purple-50 to-transparent opacity-70 -z-10"></div>
          <div className="absolute top-24 right-1/4 w-72 h-72 bg-blue-200 rounded-full blur-3xl opacity-20 animate-float -z-10"></div>
          
          <div className="container max-w-7xl mx-auto px-4 sm:px-6">
            <ScrollReveal animation="fade-in-up">
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-center">
                About <span className="gradient-text">Scale with AI</span>
              </h1>
              <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-12">
                We're on a mission to transform businesses through the power of AI, 
                making advanced technologies accessible and practical for companies of all sizes.
              </p>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={100}>
              <div className="grid md:grid-cols-2 gap-16 items-center mb-20">
                <div>
                  <h2 className="text-3xl font-display font-semibold mb-6">Our Story</h2>
                  <p className="text-gray-700 mb-4">
                    Founded in 2022, Scale with AI emerged from a simple observation: while AI was revolutionizing the technology landscape, 
                    most businesses lacked the expertise and resources to leverage these powerful tools effectively.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Our founding team, with backgrounds spanning AI research, enterprise software, and business consulting, 
                    came together with a shared vision: to bridge this gap and democratize access to transformative AI capabilities.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Since then, we've grown into a team of over 50 AI specialists, engineers, and business strategists, 
                    united by our commitment to delivering practical AI solutions that drive measurable business outcomes.
                  </p>
                </div>
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-brand-purple/20 to-brand-blue/20 rounded-xl blur-xl -z-10"></div>
                  <img 
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&q=80" 
                    alt="Our team" 
                    className="w-full h-auto rounded-xl shadow-lg"
                  />
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={200}>
              <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-100 mb-20">
                <h2 className="text-3xl font-display font-semibold mb-8 text-center">Our Values</h2>
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="p-6 border border-gray-100 rounded-xl bg-gray-50">
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-purple to-brand-blue rounded-lg flex items-center justify-center text-white mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Excellence</h3>
                    <p className="text-gray-600">We're committed to delivering AI solutions of the highest quality, continuously pushing the boundaries of what's possible.</p>
                  </div>
                  
                  <div className="p-6 border border-gray-100 rounded-xl bg-gray-50">
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-purple to-brand-blue rounded-lg flex items-center justify-center text-white mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Transparency</h3>
                    <p className="text-gray-600">We believe in clear communication and ethical AI practices, ensuring our clients fully understand and trust our solutions.</p>
                  </div>
                  
                  <div className="p-6 border border-gray-100 rounded-xl bg-gray-50">
                    <div className="w-12 h-12 bg-gradient-to-r from-brand-purple to-brand-blue rounded-lg flex items-center justify-center text-white mb-4">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"></path></svg>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Innovation</h3>
                    <p className="text-gray-600">We constantly experiment and evolve, staying at the forefront of AI advancements to bring cutting-edge solutions to our clients.</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal animation="fade-in-up" delay={300}>
              <div className="text-center">
                <h2 className="text-3xl font-display font-semibold mb-6">Join Our Journey</h2>
                <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
                  We're always looking for passionate individuals who share our vision of making AI accessible and impactful.
                </p>
                <AnimatedButton variant="default" size="lg">
                  View Career Opportunities
                </AnimatedButton>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default About;
