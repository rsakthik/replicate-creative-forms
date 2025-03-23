
import React, { useState } from 'react';
import { cn } from '@/lib/utils';

interface AnimatedButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
  className?: string;
}

const AnimatedButton = ({
  variant = 'default',
  size = 'md',
  children,
  className,
  ...props
}: AnimatedButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const baseStyles = "relative inline-flex items-center justify-center rounded-full font-medium transition-all duration-300 ease-out focus:outline-none focus:ring-2 focus:ring-offset-2 active:scale-[0.98]";
  
  const variantStyles = {
    default: "bg-black text-white hover:shadow-md",
    outline: "border border-black bg-transparent text-black hover:bg-black/5",
    ghost: "bg-transparent text-black hover:bg-black/5",
    link: "bg-transparent text-black hover:underline p-0"
  };
  
  const sizeStyles = {
    sm: "text-sm h-9 px-3",
    md: "text-base h-11 px-5",
    lg: "text-lg h-14 px-7"
  };
  
  return (
    <button
      className={cn(
        baseStyles,
        variantStyles[variant],
        sizeStyles[size],
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      {...props}
    >
      <span className={cn(
        "transition-all duration-300 ease-out flex items-center gap-2",
        isHovered ? "transform -translate-x-2" : ""
      )}>
        {children}
      </span>
      
      {variant !== 'link' && (
        <span className={cn(
          "absolute right-4 transition-all duration-300 ease-out opacity-0 transform translate-x-2",
          isHovered ? "opacity-100 translate-x-0" : ""
        )}>
          →
        </span>
      )}
    </button>
  );
};

export default AnimatedButton;
