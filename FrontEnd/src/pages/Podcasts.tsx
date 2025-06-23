
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Music, ArrowLeft, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Podcasts = () => {
  const podcasts = [
    {
      id: 1,
      title: "The Tim Ferriss Show",
      host: "Tim Ferriss",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Entrevistas com atletas de alto desempenho, investidores e empreendedores.",
      rating: 5,
      category: "Empreendedorismo"
    },
    {
      id: 2,
      title: "How I Built This",
      host: "Guy Raz",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Histórias de empreendedores e suas jornadas para construir empresas icônicas.",
      rating: 5,
      category: "Negócios"
    },
    {
      id: 3,
      title: "Marketing School",
      host: "Neil Patel & Eric Siu",
      description: "Ut enim ad minim veniam, quis nostrud exercitation. Dicas diárias de marketing digital em episódios curtos e práticos.",
      rating: 4,
      category: "Marketing"
    },
    {
      id: 4,
      title: "The GaryVee Audio Experience",
      host: "Gary Vaynerchuk",
      description: "Duis aute irure dolor in reprehenderit in voluptate. Conselhos sobre empreendedorismo, marketing e liderança.",
      rating: 4,
      category: "Empreendedorismo"
    },
    {
      id: 5,
      title: "Masters of Scale",
      host: "Reid Hoffman",
      description: "Excepteur sint occaecat cupidatat non proident. Como as empresas crescem de zero para bilhões de usuários.",
      rating: 5,
      category: "Negócios"
    },
    {
      id: 6,
      title: "The Social Media Marketing Podcast",
      host: "Michael Stelzner",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Estratégias e tendências em marketing de mídias sociais.",
      rating: 4,
      category: "Marketing Digital"
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
                <Music className="w-8 h-8 text-dark-green" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-dark-green">
                Indicações de Podcasts
              </h1>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl">
              Podcasts essenciais para quem busca crescimento profissional, insights de marketing e inspiração empreendedora.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {podcasts.map((podcast, index) => (
              <div
                key={podcast.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-500 p-6 border border-dark-green/10 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-dark-green/10 text-dark-green text-xs font-medium rounded-full border border-dark-green/20">
                    {podcast.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-dark-green mb-2 group-hover:text-warm-yellow transition-colors">
                  {podcast.title}
                </h3>
                
                <p className="text-gray-500 font-medium mb-3">
                  por {podcast.host}
                </p>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < podcast.rating
                          ? 'text-warm-yellow fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {podcast.description}
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

export default Podcasts;
