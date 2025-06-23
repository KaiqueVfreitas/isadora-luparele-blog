
import React from 'react';

const HeroSection = () => {
  return (
    <section id="inicio" className="py-16 md:py-24 lg:py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
          <div className="flex-1 lg:order-2">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-dark-green to-warm-yellow rounded-lg opacity-20"></div>
              <div className="absolute -inset-2 bg-warm-yellow rounded-lg opacity-10"></div>
              <img
                src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=500&h=600&fit=crop&crop=faces"
                alt="Isadora Luparele"
                className="relative w-full max-w-md mx-auto rounded-lg shadow-xl object-cover aspect-[4/5] border-2 border-dark-green/20"
              />
            </div>
          </div>
          
          <div className="flex-1 lg:order-1 text-center lg:text-left">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 text-sm font-medium text-dark-green bg-gradient-to-r from-dark-green/10 to-warm-yellow/10 rounded-full mb-4 border border-warm-yellow/30">
                Influenciadora & Criadora de Conteúdo
              </span>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-dark-green mb-6 leading-tight">
                Olá, eu sou a
                <span className="text-warm-yellow block relative">
                  Isadora
                  <span className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-warm-yellow to-dark-green opacity-30 rounded-full"></span>
                </span>
              </h1>
            </div>
            
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
            </p>
            
            <p className="text-base text-gray-500 mb-8">
              Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button className="px-8 py-3 bg-dark-green text-white rounded-lg hover:bg-warm-yellow hover:text-dark-green transition-all duration-300 font-medium border-2 border-dark-green transform hover:scale-105">
                Conheça meus produtos
              </button>
              <button className="px-8 py-3 border-2 border-warm-yellow text-warm-yellow rounded-lg hover:bg-warm-yellow hover:text-dark-green transition-all duration-300 font-medium transform hover:scale-105">
                Assinar newsletter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
