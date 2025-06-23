
import React from 'react';
import { BookOpen, Film, Music, Tv } from 'lucide-react';
import { Link } from 'react-router-dom';

const StartHereSection = () => {
  const recommendations = [
    {
      category: 'Livros',
      icon: BookOpen,
      items: [
        'Atomic Habits - James Clear',
        'The Psychology of Money - Morgan Housel',
        'Digital Minimalism - Cal Newport'
      ],
      color: 'text-dark-green',
      link: '/livros',
      accent: 'green'
    },
    {
      category: 'Filmes',
      icon: Film,
      items: [
        'The Social Dilemma',
        'Fyre: The Greatest Party That Never Happened',
        'The Great Hack'
      ],
      color: 'text-dark-green',
      link: '/filmes',
      accent: 'yellow'
    },
    {
      category: 'Séries',
      icon: Tv,
      items: [
        'Black Mirror',
        'The Social Network',
        'Halt and Catch Fire'
      ],
      color: 'text-dark-green',
      link: '/series',
      accent: 'green'
    },
    {
      category: 'Podcasts',
      icon: Music,
      items: [
        'The Tim Ferriss Show',
        'How I Built This',
        'Marketing School'
      ],
      color: 'text-dark-green',
      link: '/podcasts',
      accent: 'yellow'
    }
  ];

  return (
    <section id="comece-aqui" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 text-sm font-medium text-dark-green bg-gradient-to-r from-dark-green/10 to-warm-yellow/10 rounded-full mb-4 border border-dark-green/20">
            Recomendações
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-6">
            Comece por aqui
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Uma curadoria especial de conteúdos que me inspiraram e que podem acelerar sua jornada de crescimento pessoal e profissional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recommendations.map((category, index) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.category}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-500 p-6 group animate-fade-in border border-dark-green/10 relative overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className={`absolute top-0 right-0 w-0 h-0 border-l-[30px] border-b-[30px] ${
                  category.accent === 'yellow' 
                    ? 'border-l-transparent border-b-warm-yellow/10' 
                    : 'border-l-transparent border-b-dark-green/10'
                }`}></div>
                
                <div className="flex items-center gap-3 mb-6">
                  <div className={`p-3 rounded-lg transition-all duration-300 border ${
                    category.accent === 'yellow' 
                      ? 'bg-warm-yellow/10 group-hover:bg-warm-yellow/20 border-warm-yellow/20 text-warm-yellow' 
                      : 'bg-dark-green/10 group-hover:bg-dark-green/20 border-dark-green/20 text-dark-green'
                  }`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-dark-green">
                    {category.category}
                  </h3>
                </div>
                
                <ul className="space-y-3">
                  {category.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className={`text-gray-600 hover:text-dark-green transition-colors cursor-pointer relative pl-4 before:content-[''] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-2 before:h-2 before:rounded-full before:opacity-60 ${
                        category.accent === 'yellow' 
                          ? 'before:bg-warm-yellow' 
                          : 'before:bg-dark-green'
                      }`}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
                
                <Link
                  to={category.link}
                  className={`inline-block mt-6 text-sm font-medium transition-colors ${
                    category.accent === 'yellow' 
                      ? 'text-warm-yellow hover:text-dark-green' 
                      : 'text-dark-green hover:text-warm-yellow'
                  }`}
                >
                  Ver mais →
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default StartHereSection;
