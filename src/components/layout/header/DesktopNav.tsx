
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';

const DesktopNav = () => {
  const location = useLocation();
  
  return (
    <nav className="hidden md:flex items-center space-x-8">
      <Link 
        to="/" 
        className={cn(
          "font-medium text-sm transition-colors",
          location.pathname === "/" 
            ? "text-brand-purple" 
            : "text-gray-800 hover:text-brand-purple"
        )}
      >
        Home
      </Link>
      <Link 
        to="/about" 
        className={cn(
          "font-medium text-sm transition-colors",
          location.pathname === "/about" 
            ? "text-brand-purple" 
            : "text-gray-800 hover:text-brand-purple"
        )}
      >
        About
      </Link>
      <Link 
        to="/features" 
        className={cn(
          "font-medium text-sm transition-colors",
          location.pathname === "/features" 
            ? "text-brand-purple" 
            : "text-gray-800 hover:text-brand-purple"
        )}
      >
        Features
      </Link>
      <Link 
        to="/pricing" 
        className={cn(
          "font-medium text-sm transition-colors",
          location.pathname === "/pricing" 
            ? "text-brand-purple" 
            : "text-gray-800 hover:text-brand-purple"
        )}
      >
        Pricing
      </Link>
      <Link 
        to="/contact" 
        className={cn(
          "font-medium text-sm transition-colors",
          location.pathname === "/contact" 
            ? "text-brand-purple" 
            : "text-gray-800 hover:text-brand-purple"
        )}
      >
        Contact
      </Link>
    </nav>
  );
};

export default DesktopNav;
