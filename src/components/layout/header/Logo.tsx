
import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
  return (
    <Link to="/" className="flex items-center">
      <img 
        src="/lovable-uploads/a8bd15b9-3371-4a7b-984d-63d04e2aaa01.png" 
        alt="Scale with AI" 
        className="h-10 md:h-12" 
      />
    </Link>
  );
};

export default Logo;
