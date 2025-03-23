
import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-in' | 'fade-in-up' | 'fade-in-down' | 'fade-in-left' | 'fade-in-right' | 'scale-in';
  threshold?: number;
  delay?: number;
  duration?: number;
  tag?: keyof JSX.IntrinsicElements;
  once?: boolean;
}

const ScrollReveal: React.FC<ScrollRevealProps> = ({
  children,
  className,
  animation = 'fade-in-up',
  threshold = 0.1,
  delay = 0,
  duration = 700,
  tag: Tag = 'div',
  once = true,
  ...props
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const current = ref.current;
    if (!current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && (!once || !hasAnimated)) {
          setIsVisible(true);
          if (once) setHasAnimated(true);
        } else if (!once) {
          setIsVisible(false);
        }
      },
      { threshold }
    );

    observer.observe(current);
    return () => {
      if (current) observer.unobserve(current);
    };
  }, [threshold, once, hasAnimated]);

  const inlineStyle = {
    opacity: 0,
    animationDelay: `${delay}ms`,
    animationDuration: `${duration}ms`,
    animationFillMode: 'forwards' as const,
  };

  const animationClass = isVisible ? `animate-${animation}` : '';

  // @ts-ignore
  return (
    <Tag
      ref={ref}
      className={cn(className, animationClass)}
      style={isVisible ? inlineStyle : { opacity: 0 }}
      {...props}
    >
      {children}
    </Tag>
  );
};

export default ScrollReveal;
