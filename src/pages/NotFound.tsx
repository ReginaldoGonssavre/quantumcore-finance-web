
import React from 'react';
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home } from 'lucide-react';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="text-center max-w-md mx-auto">
        <div className="mb-8">
          <div className="text-8xl font-quantum font-bold text-gradient-quantum mb-4">
            404
          </div>
          <h1 className="text-2xl font-quantum font-bold text-foreground mb-4">
            Página Não Encontrada
          </h1>
          <p className="text-muted-foreground mb-8">
            A página que você está procurando não existe ou foi movida para outro local.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => window.history.back()}
            className="glass-phosphor text-foreground px-6 py-3 rounded-full font-medium hover:quantum-glow transition-all duration-300 flex items-center justify-center gap-2"
          >
            <ArrowLeft size={18} />
            Voltar
          </button>
          <a
            href="/"
            className="bg-gradient-to-r from-primary to-secondary text-primary-foreground px-6 py-3 rounded-full font-medium hover:quantum-glow hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
          >
            <Home size={18} />
            Início
          </a>
        </div>

        <div className="mt-12 opacity-50">
          <svg width="200" height="100" className="mx-auto">
            <defs>
              <linearGradient id="quantumGradient404" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(120, 100%, 50%)" />
                <stop offset="100%" stopColor="hsl(180, 100%, 60%)" />
              </linearGradient>
            </defs>
            <line x1="20" y1="50" x2="180" y2="50" stroke="url(#quantumGradient404)" strokeWidth="2" className="pulse-quantum" />
            <circle cx="50" cy="50" r="8" fill="none" stroke="url(#quantumGradient404)" strokeWidth="2" />
            <circle cx="100" cy="50" r="8" fill="none" stroke="url(#quantumGradient404)" strokeWidth="2" />
            <circle cx="150" cy="50" r="8" fill="none" stroke="url(#quantumGradient404)" strokeWidth="2" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
