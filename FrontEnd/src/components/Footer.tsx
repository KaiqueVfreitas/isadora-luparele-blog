
import React from 'react';
import { Instagram, Youtube, Mail, Heart } from 'lucide-react';

const Footer = () => {
  const navigationLinks = [
    { name: 'Início', href: '#inicio' },
    { name: 'Infoprodutos', href: '#produtos' },
    { name: 'Blog', href: '#blog' },
    { name: 'Comece por aqui', href: '#comece-aqui' },
  ];

  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      href: '#',
      color: 'hover:text-pink-600'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      href: '#',
      color: 'hover:text-red-600'
    },
    {
      name: 'Substack',
      icon: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
        </svg>
      ),
      href: '#',
      color: 'hover:text-orange-600'
    },
    {
      name: 'TikTok',
      icon: () => (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      ),
      href: '#',
      color: 'hover:text-black'
    }
  ];

  const contactInfo = [
    { label: 'Email', value: 'contato@isadoraluparele.com', href: 'mailto:contato@isadoraluparele.com' },
    { label: 'Parcerias', value: 'parcerias@isadoraluparele.com', href: 'mailto:parcerias@isadoraluparele.com' },
  ];

  return (
    <footer id="contato" className="bg-dark-green text-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold mb-4">Isadora Luparele</h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Ajudando pessoas a construírem uma presença digital autêntica e lucrativa através de conteúdo de valor.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    className={`p-2 bg-white/10 rounded-lg hover:bg-white/20 transition-colors ${social.color}`}
                    aria-label={social.name}
                  >
                    <IconComponent />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Navegação</h4>
            <ul className="space-y-3">
              {navigationLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-warm-yellow transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Contato</h4>
            <ul className="space-y-3">
              {contactInfo.map((contact) => (
                <li key={contact.label}>
                  <p className="text-sm text-gray-400 mb-1">{contact.label}</p>
                  <a
                    href={contact.href}
                    className="text-gray-300 hover:text-warm-yellow transition-colors"
                  >
                    {contact.value}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Newsletter</h4>
            <p className="text-gray-300 mb-4 text-sm">
              Receba conteúdo exclusivo diretamente no seu e-mail.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-warm-yellow"
              />
              <button className="px-4 py-2 bg-warm-yellow text-dark-green rounded-lg hover:bg-warm-yellow/90 transition-colors">
                <Mail className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-gray-400 text-sm">
              © 2024 Isadora Luparele. Todos os direitos reservados.
            </p>
            <div className="flex items-center gap-6 text-sm">
              <a href="#" className="text-gray-400 hover:text-warm-yellow transition-colors">
                Política de Privacidade
              </a>
              <a href="#" className="text-gray-400 hover:text-warm-yellow transition-colors">
                Termos de Uso
              </a>
            </div>
          </div>
          <div className="mt-4 text-center">
            <p className="text-gray-400 text-sm flex items-center justify-center gap-1">
              Feito com <Heart className="w-4 h-4 text-red-500" /> por Isadora Luparele
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
