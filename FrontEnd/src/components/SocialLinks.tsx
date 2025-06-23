
import React from 'react';
import { Instagram, Youtube } from 'lucide-react';

const SocialLinks = () => {
  const socialLinks = [
    {
      name: 'Instagram',
      icon: Instagram,
      url: '#',
      color: 'hover:text-pink-600'
    },
    {
      name: 'YouTube',
      icon: Youtube,
      url: '#',
      color: 'hover:text-red-600'
    },
    {
      name: 'TikTok',
      icon: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
        </svg>
      ),
      url: '#',
      color: 'hover:text-black'
    },
    {
      name: 'Substack',
      icon: () => (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
          <path d="M22.539 8.242H1.46V5.406h21.08v2.836zM1.46 10.812V24L12 18.11 22.54 24V10.812H1.46zM22.54 0H1.46v2.836h21.08V0z"/>
        </svg>
      ),
      url: '#',
      color: 'hover:text-orange-600'
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold text-dark-green mb-4">
            Me acompanhe nas redes
          </h2>
          <p className="text-gray-600">
            Conecte-se comigo para conteúdo exclusivo e atualizações diárias
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6">
          {socialLinks.map((social) => {
            const IconComponent = social.icon;
            return (
              <a
                key={social.name}
                href={social.url}
                className={`flex items-center gap-3 px-6 py-3 bg-soft-bg rounded-lg shadow-sm hover:shadow-md transition-all duration-300 text-gray-700 ${social.color} group border border-dark-green/10`}
              >
                <IconComponent />
                <span className="font-medium">{social.name}</span>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SocialLinks;
