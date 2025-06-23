
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Tv, ArrowLeft, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Series = () => {
  const series = [
    {
      id: 1,
      title: "Black Mirror",
      year: "2011-2019",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Antologia que explora o lado sombrio da tecnologia moderna.",
      rating: 5,
      category: "Ficção Científica"
    },
    {
      id: 2,
      title: "Halt and Catch Fire",
      year: "2014-2017",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. A revolução da computação pessoal nos anos 80 e 90.",
      rating: 5,
      category: "Drama"
    },
    {
      id: 3,
      title: "Silicon Valley",
      year: "2014-2019",
      description: "Ut enim ad minim veniam, quis nostrud exercitation. Comédia sobre startups de tecnologia no Vale do Silício.",
      rating: 4,
      category: "Comédia"
    },
    {
      id: 4,
      title: "The Playlist",
      year: "2022",
      description: "Duis aute irure dolor in reprehenderit in voluptate. A história da criação do Spotify e a revolução do streaming de música.",
      rating: 4,
      category: "Drama"
    },
    {
      id: 5,
      title: "Billions",
      year: "2016-2023",
      description: "Excepteur sint occaecat cupidatat non proident. Drama sobre poder, política e finanças em Wall Street.",
      rating: 4,
      category: "Drama"
    },
    {
      id: 6,
      title: "The Good Place",
      year: "2016-2020",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Comédia filosófica sobre ética e moralidade.",
      rating: 5,
      category: "Comédia"
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
                <Tv className="w-8 h-8 text-dark-green" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-dark-green">
                Indicações de Séries
              </h1>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl">
              Séries que abordam temas como tecnologia, empreendedorismo, criatividade e os desafios do mundo moderno.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {series.map((show, index) => (
              <div
                key={show.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-500 p-6 border border-dark-green/10 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-dark-green/10 text-dark-green text-xs font-medium rounded-full border border-dark-green/20">
                    {show.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-dark-green mb-2 group-hover:text-warm-yellow transition-colors">
                  {show.title}
                </h3>
                
                <p className="text-gray-500 font-medium mb-3">
                  {show.year}
                </p>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < show.rating
                          ? 'text-warm-yellow fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {show.description}
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

export default Series;
