import React from 'react';

const TopNavbar = () => {
  return (
    <div className="bg-gray-900 text-gray-300 text-xs py-2 px-4 sm:px-6 lg:px-8 flex justify-between items-center fixed top-0 left-0 right-0 z-50">
      <div className="flex items-center space-x-4">
        <span>Email: contato@suaempresa.com</span>
        <span>Telefone: (XX) XXXX-XXXX</span>
      </div>
      <div className="flex items-center space-x-4">
        <span>Siga-nos:</span>
        {/* Ícones de redes sociais podem ser adicionados aqui */}
        <span>FB</span>
        <span>IG</span>
        <span>LN</span>
      </div>
    </div>
  );
};

export default TopNavbar;
