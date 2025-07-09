
import React from 'react';
import { Globe, User, Bell, Settings } from 'lucide-react';

const TopNavbar = () => {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 h-12 navbar-phosphor border-b border-primary/20">
      <div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
        {/* Left Section - Language & Region */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2 text-sm text-primary/80 hover:text-primary transition-colors cursor-pointer">
            <Globe size={16} />
            <span>PT-BR</span>
          </div>
          <div className="text-xs text-muted-foreground">
            São Paulo, Brasil
          </div>
        </div>

        {/* Center Section - Status */}
        <div className="text-xs text-primary/60 font-quantum">
          SISTEMA QUÂNTICO ATIVO
        </div>

        {/* Right Section - User Actions */}
        <div className="flex items-center space-x-3">
          <button className="p-2 text-primary/60 hover:text-primary transition-colors">
            <Bell size={16} />
          </button>
          <button className="p-2 text-primary/60 hover:text-primary transition-colors">
            <Settings size={16} />
          </button>
          <button className="flex items-center space-x-2 text-sm text-primary/80 hover:text-primary transition-colors">
            <User size={16} />
            <span>Entrar</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopNavbar;
