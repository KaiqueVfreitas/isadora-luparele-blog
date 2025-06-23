
import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const InfoProducts = () => {
  const products = [
    {
      id: 1,
      title: "Curso Completo de Influência Digital",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aprenda todas as estratégias para construir sua presença online de forma autêntica.",
      price: "R$ 297",
      rating: 4.9,
      students: "2.5k",
      category: "Curso Online",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=300&fit=crop",
      accent: "green"
    },
    {
      id: 2,
      title: "E-book: Estratégias de Conteúdo",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Um guia prático para criar conteúdo que engaja e converte.",
      price: "R$ 97",
      rating: 4.8,
      students: "5.2k",
      category: "E-book",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?w=400&h=300&fit=crop",
      accent: "yellow"
    },
    {
      id: 3,
      title: "Mentoria Individual 1:1",
      description: "Ut enim ad minim veniam, quis nostrud exercitation. Sessões personalizadas para acelerar seu crescimento nas redes sociais.",
      price: "R$ 897",
      rating: 5.0,
      students: "150",
      category: "Mentoria",
      image: "https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=300&fit=crop",
      accent: "green"
    }
  ];

  return (
    <section id="produtos" className="py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-3 py-1 text-sm font-medium text-warm-yellow bg-gradient-to-r from-warm-yellow/10 to-dark-green/5 rounded-full mb-4 border border-warm-yellow/30">
            Meus Infoprodutos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-6">
            Transforme seu conhecimento em resultados
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Descubra os produtos que já ajudaram milhares de pessoas a construir uma presença digital autêntica e lucrativa.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={product.id}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden group animate-fade-in border border-dark-green/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 bg-white/90 text-xs font-medium rounded-full border ${
                    product.accent === 'yellow' 
                      ? 'text-warm-yellow border-warm-yellow/30' 
                      : 'text-dark-green border-dark-green/30'
                  }`}>
                    {product.category}
                  </span>
                </div>
                <div className={`absolute top-0 right-0 w-0 h-0 border-l-[40px] border-b-[40px] ${
                  product.accent === 'yellow' 
                    ? 'border-l-transparent border-b-warm-yellow/20' 
                    : 'border-l-transparent border-b-dark-green/20'
                }`}></div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-warm-yellow text-warm-yellow" />
                    <span className="text-sm font-medium text-gray-700">{product.rating}</span>
                  </div>
                  <span className="text-sm text-gray-500">({product.students} alunos)</span>
                </div>
                
                <h3 className="text-xl font-bold text-dark-green mb-3 group-hover:text-warm-yellow transition-colors">
                  {product.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {product.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold text-dark-green">
                    {product.price}
                  </span>
                  <button className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 group border-2 ${
                    product.accent === 'yellow'
                      ? 'bg-warm-yellow text-dark-green border-warm-yellow hover:bg-dark-green hover:text-white hover:border-dark-green'
                      : 'bg-dark-green text-white border-dark-green hover:bg-warm-yellow hover:text-dark-green hover:border-warm-yellow'
                  }`}>
                    Saiba mais
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InfoProducts;
