import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface NavbarData {
  img_logo: string;
  txt_log: string;
  item01: string;
  item02: string;
  item03: string;
  item04: string;
  item05: string;
}

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [navbar, setNavbar] = useState<NavbarData | null>(null);

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}?rota=navbar-visualizar&id_navbar=1`)
      .then((res) => res.json())
      .then((data) => setNavbar(data))
      .catch((err) => console.error("Erro ao carregar navbar:", err));
  }, []);
  

  if (!navbar) return <header className="text-white">Carregando...</header>;

  return (
    <header className="sticky top-0 z-50 bg-dark-green text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center text-xl font-bold text-white hover:text-warm-yellow transition-colors">
              <img src={`/Projeto_Programacao/isadora-luparele-blog/Public/uploads/${navbar.img_logo}`} alt="Logo" className="w-10 h-10 mr-3" />
              {navbar.txt_log}
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <a href="#inicio" className="text-gray-200 hover:text-warm-yellow transition-colors">{navbar.item01}</a>
            <a href="#produtos" className="text-gray-200 hover:text-warm-yellow transition-colors">{navbar.item02}</a>
            <a href="#blog" className="text-gray-200 hover:text-warm-yellow transition-colors">{navbar.item03}</a>
            <a href="#comece-aqui" className="text-gray-200 hover:text-warm-yellow transition-colors">{navbar.item04}</a>
            <a href="#contato" className="text-gray-200 hover:text-warm-yellow transition-colors">{navbar.item05}</a>
          </nav>

          <button className="md:hidden p-2 text-gray-200 hover:text-warm-yellow transition-colors" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-dark-green/30">
            <nav className="py-4 space-y-2">
              <a href="#inicio" className="block px-4 py-2 text-gray-200 hover:text-warm-yellow hover:bg-dark-green/50 transition-colors">{navbar.item01}</a>
              <a href="#produtos" className="block px-4 py-2 text-gray-200 hover:text-warm-yellow hover:bg-dark-green/50 transition-colors">{navbar.item02}</a>
              <a href="#blog" className="block px-4 py-2 text-gray-200 hover:text-warm-yellow hover:bg-dark-green/50 transition-colors">{navbar.item03}</a>
              <a href="#comece-aqui" className="block px-4 py-2 text-gray-200 hover:text-warm-yellow hover:bg-dark-green/50 transition-colors">{navbar.item04}</a>
              <a href="#contato" className="block px-4 py-2 text-gray-200 hover:text-warm-yellow hover:bg-dark-green/50 transition-colors">{navbar.item05}</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
