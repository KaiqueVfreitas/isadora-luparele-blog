import React, { useEffect, useState } from 'react';
import { Menu, X, Pencil } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

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
  const [isAdmin, setIsAdmin] = useState(false);
  const location = useLocation();

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const editarCampo = async (campo: keyof NavbarData) => {
    const novoValor = prompt(`Digite o novo valor para "${campo}"`);
    if (!novoValor) return;

    const confirma = confirm("Ao alterar esta informação, não será possível voltar para o original. Estas informações não ficam guardadas em nenhum lugar. Deseja continuar?");
    if (!confirma) return;

    const res = await fetch(`${import.meta.env.VITE_API_URL}?rota=navbar-atualizar&id_navbar=1`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ [campo]: novoValor }),
    });

    const data = await res.json();
    if (data.status === "ok") window.location.reload();
    else alert("Erro ao salvar.");
  };

  useEffect(() => {
    if (location.pathname === "/rotide-eleparul-nimda") {
      const email = prompt("Digite o usuário:");
      const senha = prompt("Digite a senha:");

      if (email && senha) {
        fetch(`${import.meta.env.VITE_API_URL}?rota=login`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, senha }),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.autenticado) {
              sessionStorage.setItem("auth", "true");
              setIsAdmin(true);
              alert("Login realizado com sucesso.");
            } else {
              sessionStorage.setItem("auth", "false");
              alert("Usuário ou senha incorretos.");
            }
          });
      }
    } else {
      const auth = sessionStorage.getItem("auth") === "true";
      setIsAdmin(auth);
    }
  }, [location.pathname]);

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}?rota=navbar-visualizar&id_navbar=1`)
      .then((res) => res.json())
      .then((data) => setNavbar(data));
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
            {isAdmin && (
              <div className="flex items-center ml-2 space-x-2">
                <button title="Editar logo" onClick={() => editarCampo("img_logo")}><Pencil size={16} /></button>
                <button title="Editar TEXTO ao lado da logo" onClick={() => editarCampo("txt_log")}><Pencil size={16} /></button>
              </div>
            )}
          </div>

          <nav className="hidden md:flex items-center space-x-8">
            <div className="flex items-center space-x-1">
              <a href="#inicio" className="text-gray-200 hover:text-warm-yellow transition-colors">{navbar.item01}</a>
              {isAdmin && <button title="Editar texto 1" onClick={() => editarCampo("item01")}><Pencil size={16} /></button>}
            </div>
            <div className="flex items-center space-x-1">
              <a href="#produtos" className="text-gray-200 hover:text-warm-yellow transition-colors">{navbar.item02}</a>
              {isAdmin && <button title="Editar texto 2" onClick={() => editarCampo("item02")}><Pencil size={16} /></button>}
            </div>
            <div className="flex items-center space-x-1">
              <a href="#blog" className="text-gray-200 hover:text-warm-yellow transition-colors">{navbar.item03}</a>
              {isAdmin && <button title="Editar texto 3" onClick={() => editarCampo("item03")}><Pencil size={16} /></button>}
            </div>
            <div className="flex items-center space-x-1">
              <a href="#comece-aqui" className="text-gray-200 hover:text-warm-yellow transition-colors">{navbar.item04}</a>
              {isAdmin && <button title="Editar texto 4" onClick={() => editarCampo("item04")}><Pencil size={16} /></button>}
            </div>
            <div className="flex items-center space-x-1">
              <a href="#contato" className="text-gray-200 hover:text-warm-yellow transition-colors">{navbar.item05}</a>
              {isAdmin && <button title="Editar texto 5" onClick={() => editarCampo("item05")}><Pencil size={16} /></button>}
            </div>
          </nav>

          <button className="md:hidden p-2 text-gray-200 hover:text-warm-yellow transition-colors" onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-dark-green/30">
            <nav className="py-4 space-y-2">
              {["item01", "item02", "item03", "item04", "item05"].map((item) => (
                <div key={item} className="flex items-center justify-between px-4">
                  <a href={`#${item}`} className="text-gray-200 hover:text-warm-yellow hover:bg-dark-green/50 transition-colors">{navbar[item as keyof NavbarData]}</a>
                  {isAdmin && <button title="Editor" onClick={() => editarCampo(item as keyof NavbarData)}><Pencil size={16} /></button>}
                </div>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
