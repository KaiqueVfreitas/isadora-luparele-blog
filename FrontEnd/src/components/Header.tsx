
import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import logo from '../assets/WhatsApp_Image_2025-06-06_at_08.41.50-removebg-preview.jpg';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-dark-green text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
         <div className="flex items-center">
  <Link to="/" className="flex items-center text-xl font-bold text-white hover:text-warm-yellow transition-colors">
    <img src={logo} alt="Logo" className='w-10 h-10 mr-3' /> 
    Isadora Luparele
  </Link>
</div>
          
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-200 hover:text-warm-yellow transition-colors">
              Início
            </a>
            <a href="#produtos" className="text-gray-200 hover:text-warm-yellow transition-colors">
              Infoprodutos
            </a>
            <a href="#blog" className="text-gray-200 hover:text-warm-yellow transition-colors">
              Blog
            </a>
            <a href="#comece-aqui" className="text-gray-200 hover:text-warm-yellow transition-colors">
              Comece por aqui
            </a>
            <a href="#contato" className="text-gray-200 hover:text-warm-yellow transition-colors">
              Contato
            </a>
          </nav>

          <button 
            className="md:hidden p-2 text-gray-200 hover:text-warm-yellow transition-colors"
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-dark-green/30">
            <nav className="py-4 space-y-2">
              <a 
                href="#inicio" 
                className="block px-4 py-2 text-gray-200 hover:text-warm-yellow hover:bg-dark-green/50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Início
              </a>
              <a 
                href="#produtos" 
                className="block px-4 py-2 text-gray-200 hover:text-warm-yellow hover:bg-dark-green/50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Infoprodutos
              </a>
              <a 
                href="#blog" 
                className="block px-4 py-2 text-gray-200 hover:text-warm-yellow hover:bg-dark-green/50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Blog
              </a>
              <a 
                href="#comece-aqui" 
                className="block px-4 py-2 text-gray-200 hover:text-warm-yellow hover:bg-dark-green/50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Comece por aqui
              </a>
              <a 
                href="#contato" 
                className="block px-4 py-2 text-gray-200 hover:text-warm-yellow hover:bg-dark-green/50 transition-colors"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                Contato
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
