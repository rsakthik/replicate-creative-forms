
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import AnimatedButton from '../../ui/AnimatedButton';

interface MobileMenuProps {
  isOpen: boolean;
}

const MobileMenu = ({ isOpen }: MobileMenuProps) => {
  const location = useLocation();
  
  return (
    <div className={cn(
      "md:hidden fixed inset-0 bg-white z-40 pt-20 px-6 transition-transform duration-300 ease-in-out transform",
      isOpen ? "translate-x-0" : "translate-x-full"
    )}>
      <nav className="flex flex-col space-y-6 py-8">
        <Link 
          to="/" 
          className={cn(
            "font-medium text-lg",
            location.pathname === "/" ? "text-brand-purple" : ""
          )}
        >
          Home
        </Link>
        <Link 
          to="/about" 
          className={cn(
            "font-medium text-lg",
            location.pathname === "/about" ? "text-brand-purple" : ""
          )}
        >
          About
        </Link>
        <Link 
          to="/features" 
          className={cn(
            "font-medium text-lg",
            location.pathname === "/features" ? "text-brand-purple" : ""
          )}
        >
          Features
        </Link>
        <Link 
          to="/pricing" 
          className={cn(
            "font-medium text-lg",
            location.pathname === "/pricing" ? "text-brand-purple" : ""
          )}
        >
          Pricing
        </Link>
        <Link 
          to="/contact" 
          className={cn(
            "font-medium text-lg",
            location.pathname === "/contact" ? "text-brand-purple" : ""
          )}
        >
          Contact
        </Link>
      </nav>
      <div className="fixed bottom-0 left-0 w-full p-6 bg-white border-t">
        <div className="flex flex-col gap-3">
          <AnimatedButton 
            variant="outline" 
            className="w-full"
          >
            Sign in
          </AnimatedButton>
          <AnimatedButton 
            variant="default" 
            className="w-full bg-gradient-to-r from-brand-purple to-brand-blue"
          >
            Get started
          </AnimatedButton>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
