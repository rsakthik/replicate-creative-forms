
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';
import AnimatedButton from '../ui/AnimatedButton';

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300 py-4 px-6",
        scrolled ? "bg-white/90 backdrop-blur-md shadow-sm py-3" : "bg-transparent"
      )}
    >
      <div className="container max-w-7xl mx-auto">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="font-display text-xl font-semibold tracking-tight">
              Scale with AI
            </span>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/" className="font-medium text-sm text-gray-800 hover:text-black transition-colors">
              Home
            </Link>
            <Link to="/about" className="font-medium text-sm text-gray-800 hover:text-black transition-colors">
              About
            </Link>
            <Link to="/features" className="font-medium text-sm text-gray-800 hover:text-black transition-colors">
              Features
            </Link>
            <Link to="/pricing" className="font-medium text-sm text-gray-800 hover:text-black transition-colors">
              Pricing
            </Link>
            <Link to="/blog" className="font-medium text-sm text-gray-800 hover:text-black transition-colors">
              Blog
            </Link>
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            <AnimatedButton 
              variant="outline" 
              size="sm"
              className="whitespace-nowrap" 
            >
              Sign in
            </AnimatedButton>
            <AnimatedButton 
              variant="default" 
              size="sm"
              className="whitespace-nowrap"
            >
              Get started
            </AnimatedButton>
          </div>

          <button 
            className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className={cn(
              "block w-5 h-0.5 bg-black transition-all duration-300 ease-out",
              mobileMenuOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"
            )}></span>
            <span className={cn(
              "block w-5 h-0.5 bg-black transition-all duration-300 ease-out",
              mobileMenuOpen ? "opacity-0" : "opacity-100"
            )}></span>
            <span className={cn(
              "block w-5 h-0.5 bg-black transition-all duration-300 ease-out",
              mobileMenuOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
            )}></span>
          </button>
        </div>
      </div>

      <div className={cn(
        "md:hidden fixed inset-0 bg-white z-40 pt-20 px-6 transition-transform duration-300 ease-in-out transform",
        mobileMenuOpen ? "translate-x-0" : "translate-x-full"
      )}>
        <nav className="flex flex-col space-y-6 py-8">
          <Link 
            to="/" 
            className="font-medium text-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            className="font-medium text-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            About
          </Link>
          <Link 
            to="/features" 
            className="font-medium text-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            Features
          </Link>
          <Link 
            to="/pricing" 
            className="font-medium text-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            Pricing
          </Link>
          <Link 
            to="/blog" 
            className="font-medium text-lg"
            onClick={() => setMobileMenuOpen(false)}
          >
            Blog
          </Link>
        </nav>
        <div className="fixed bottom-0 left-0 w-full p-6 bg-white border-t">
          <div className="flex flex-col gap-3">
            <AnimatedButton 
              variant="outline" 
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Sign in
            </AnimatedButton>
            <AnimatedButton 
              variant="default" 
              className="w-full"
              onClick={() => setMobileMenuOpen(false)}
            >
              Get started
            </AnimatedButton>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
