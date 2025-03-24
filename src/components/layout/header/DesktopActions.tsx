
import React from 'react';
import AnimatedButton from '../../ui/AnimatedButton';

const DesktopActions = () => {
  return (
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
        className="whitespace-nowrap bg-gradient-to-r from-brand-purple to-brand-blue hover:from-brand-purple/90 hover:to-brand-blue/90"
      >
        Get started
      </AnimatedButton>
    </div>
  );
};

export default DesktopActions;
