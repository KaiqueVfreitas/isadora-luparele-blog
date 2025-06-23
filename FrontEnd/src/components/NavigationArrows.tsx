
import React, { useState, useEffect } from 'react';
import { ArrowUp, ArrowDown } from 'lucide-react';

const NavigationArrows = () => {
  const [currentSection, setCurrentSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'social', 'contato'];
      const scrollPosition = window.scrollY + window.innerHeight / 2;

      // Get section elements
      const heroSection = document.getElementById('inicio') as HTMLElement;
      const socialSection = document.querySelector('[data-section="social"]') as HTMLElement;
      const contactSection = document.getElementById('contato') as HTMLElement;

      if (heroSection && socialSection && contactSection) {
        const heroTop = heroSection.offsetTop;
        const socialTop = socialSection.offsetTop;
        const contactTop = contactSection.offsetTop;

        if (scrollPosition < socialTop) {
          setCurrentSection('inicio');
        } else if (scrollPosition < contactTop) {
          setCurrentSection('social');
        } else {
          setCurrentSection('contato');
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Check initial position

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
  };

  const showUpArrow = currentSection === 'contato' || currentSection === 'social';
  const showDownArrow = currentSection === 'inicio' || currentSection === 'social';

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2">
      {showUpArrow && (
        <button
          onClick={scrollToTop}
          className="p-3 bg-dark-green text-white rounded-full shadow-lg hover:bg-warm-yellow hover:text-dark-green transition-all duration-300 transform hover:scale-110 border-2 border-dark-green/20"
          aria-label="Ir para o topo"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
      
      {showDownArrow && (
        <button
          onClick={scrollToBottom}
          className="p-3 bg-warm-yellow text-dark-green rounded-full shadow-lg hover:bg-dark-green hover:text-white transition-all duration-300 transform hover:scale-110 border-2 border-warm-yellow/20"
          aria-label="Ir para o final"
        >
          <ArrowDown className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default NavigationArrows;
