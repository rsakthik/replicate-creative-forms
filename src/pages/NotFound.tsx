
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import AnimatedButton from '@/components/ui/AnimatedButton';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center py-24 px-4">
        <div className="max-w-md w-full text-center">
          <h1 className="text-9xl font-display font-bold mb-6">404</h1>
          <h2 className="text-2xl font-semibold mb-4">Page not found</h2>
          <p className="text-gray-600 mb-8">
            The page you are looking for doesn't exist or has been moved.
          </p>
          <Link to="/">
            <AnimatedButton variant="default" size="lg">
              Back to home
            </AnimatedButton>
          </Link>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
