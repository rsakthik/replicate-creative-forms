
import React from 'react';
import { cn } from '@/lib/utils';

interface MobileMenuButtonProps {
  isOpen: boolean;
  onClick: () => void;
}

const MobileMenuButton = ({ isOpen, onClick }: MobileMenuButtonProps) => {
  return (
    <button 
      className="md:hidden flex items-center justify-center w-10 h-10 rounded-full hover:bg-gray-100 transition-colors"
      onClick={onClick}
    >
      <span className={cn(
        "block w-5 h-0.5 bg-black transition-all duration-300 ease-out",
        isOpen ? "rotate-45 translate-y-0.5" : "-translate-y-1"
      )}></span>
      <span className={cn(
        "block w-5 h-0.5 bg-black transition-all duration-300 ease-out",
        isOpen ? "opacity-0" : "opacity-100"
      )}></span>
      <span className={cn(
        "block w-5 h-0.5 bg-black transition-all duration-300 ease-out",
        isOpen ? "-rotate-45 -translate-y-1" : "translate-y-1"
      )}></span>
    </button>
  );
};

export default MobileMenuButton;
