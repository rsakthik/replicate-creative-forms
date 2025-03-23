
import React from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import ScrollReveal from '@/components/ui/ScrollReveal';
import AnimatedButton from '@/components/ui/AnimatedButton';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-24">
        <section className="py-20 md:py-32 relative overflow-hidden">
          {/* Background gradient elements */}
          <div className="absolute top-0 left-0 right-0 h-[400px] bg-gradient-to-b from-blue-50 to-transparent opacity-70 -z-10"></div>
          
          <div className="container max-w-6xl mx-auto px-4 sm:px-6">
            <ScrollReveal animation="fade-in-up">
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6 text-center">
                Get in <span className="gradient-text">Touch</span>
              </h1>
              <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto mb-16">
                Have questions or ready to explore how our AI solutions can transform your business? 
                Our team is here to help you every step of the way.
              </p>
            </ScrollReveal>

            <div className="grid lg:grid-cols-5 gap-12 mb-20">
              <ScrollReveal animation="fade-in-up" delay={100} className="lg:col-span-2">
                <div className="bg-white rounded-2xl shadow-xl p-8 h-full">
                  <h2 className="text-2xl font-display font-semibold mb-6">Contact Information</h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-brand-purple/10 flex items-center justify-center text-brand-purple mr-4 flex-shrink-0">
                        <MapPin size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-1">Our Office</h3>
                        <address className="not-italic text-gray-600">
                          123 Innovation Drive<br />
                          Suite 400<br />
                          San Francisco, CA 94107
                        </address>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue mr-4 flex-shrink-0">
                        <Phone size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-1">Phone</h3>
                        <p className="text-gray-600">
                          <a href="tel:+14155550123" className="hover:text-brand-blue transition-colors">+1 (415) 555-0123</a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal mr-4 flex-shrink-0">
                        <Mail size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-1">Email</h3>
                        <p className="text-gray-600">
                          <a href="mailto:info@scalewithai.com" className="hover:text-brand-teal transition-colors">info@scalewithai.com</a>
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start">
                      <div className="w-10 h-10 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange mr-4 flex-shrink-0">
                        <Clock size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium text-lg mb-1">Office Hours</h3>
                        <p className="text-gray-600">
                          Monday - Friday: 9:00 AM - 6:00 PM<br />
                          Saturday - Sunday: Closed
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-10">
                    <h3 className="font-medium text-lg mb-4">Connect With Us</h3>
                    <div className="flex space-x-4">
                      <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brand-purple hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brand-blue hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                      </a>
                      <a href="#" className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-brand-teal hover:text-white transition-colors">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                      </a>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
              
              <ScrollReveal animation="fade-in-up" delay={200} className="lg:col-span-3">
                <div className="bg-white rounded-2xl shadow-xl p-8">
                  <h2 className="text-2xl font-display font-semibold mb-6">Send Us a Message</h2>
                  
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium">Full Name</label>
                        <Input id="name" placeholder="Your name" />
                      </div>
                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium">Email Address</label>
                        <Input id="email" type="email" placeholder="Your email" />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="company" className="text-sm font-medium">Company</label>
                      <Input id="company" placeholder="Your company" />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="subject" className="text-sm font-medium">Subject</label>
                      <Input id="subject" placeholder="How can we help you?" />
                    </div>
                    
                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">Message</label>
                      <Textarea id="message" placeholder="Your message" rows={5} />
                    </div>
                    
                    <div className="flex items-center">
                      <input type="checkbox" id="privacy" className="mr-2" />
                      <label htmlFor="privacy" className="text-sm text-gray-600">
                        I agree to the <a href="#" className="text-brand-purple hover:underline">Privacy Policy</a>
                      </label>
                    </div>
                    
                    <AnimatedButton variant="default" size="lg" className="w-full sm:w-auto">
                      Send Message
                    </AnimatedButton>
                  </form>
                </div>
              </ScrollReveal>
            </div>
            
            <ScrollReveal animation="fade-in-up" delay={300}>
              <div className="rounded-2xl overflow-hidden h-96 shadow-xl">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0957132492946!2d-122.39997768467678!3d37.78744977965633!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085807ded297e89%3A0x9cdf88a0652a0bf1!2sSan%20Francisco%2C%20CA%2094107!5e0!3m2!1sen!2sus!4v1653374574809!5m2!1sen!2sus" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
            </ScrollReveal>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
