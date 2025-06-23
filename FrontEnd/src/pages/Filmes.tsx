
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Film, ArrowLeft, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Filmes = () => {
  const movies = [
    {
      id: 1,
      title: "The Social Dilemma",
      year: "2020",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Documentário que explora o impacto das redes sociais na sociedade.",
      rating: 5,
      category: "Documentário"
    },
    {
      id: 2,
      title: "Fyre: The Greatest Party That Never Happened",
      year: "2019",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A história do festival Fyre e suas consequências.",
      rating: 4,
      category: "Documentário"
    },
    {
      id: 3,
      title: "The Great Hack",
      year: "2019",
      description: "Ut enim ad minim veniam, quis nostrud exercitation. Como os dados pessoais se tornaram a commodity mais valiosa do mundo.",
      rating: 4,
      category: "Documentário"
    },
    {
      id: 4,
      title: "Steve Jobs",
      year: "2015",
      description: "Duis aute irure dolor in reprehenderit in voluptate. A biografia cinematográfica do fundador da Apple.",
      rating: 4,
      category: "Biografia"
    },
    {
      id: 5,
      title: "The Founder",
      year: "2016",
      description: "Excepteur sint occaecat cupidatat non proident. A história de Ray Kroc e a criação do império McDonald's.",
      rating: 5,
      category: "Biografia"
    },
    {
      id: 6,
      title: "Terms and Conditions May Apply",
      year: "2013",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Documentário sobre privacidade na era digital.",
      rating: 4,
      category: "Documentário"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-dark-green hover:text-warm-yellow transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao início
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-dark-green/10 rounded-lg border border-dark-green/20">
                <Film className="w-8 h-8 text-dark-green" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-dark-green">
                Indicações de Filmes
              </h1>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl">
              Filmes e documentários que oferecem insights valiosos sobre tecnologia, empreendedorismo e o mundo digital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {movies.map((movie, index) => (
              <div
                key={movie.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-500 p-6 border border-dark-green/10 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-dark-green/10 text-dark-green text-xs font-medium rounded-full border border-dark-green/20">
                    {movie.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-dark-green mb-2 group-hover:text-warm-yellow transition-colors">
                  {movie.title}
                </h3>
                
                <p className="text-gray-500 font-medium mb-3">
                  {movie.year}
                </p>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < movie.rating
                          ? 'text-warm-yellow fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {movie.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Filmes;
