
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { BookOpen, ArrowLeft, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

const Livros = () => {
  const books = [
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Um guia prático para formar bons hábitos e quebrar os ruins.",
      rating: 5,
      category: "Produtividade"
    },
    {
      id: 2,
      title: "The Psychology of Money",
      author: "Morgan Housel",
      description: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Lições atemporais sobre riqueza, ganância e felicidade.",
      rating: 5,
      category: "Finanças"
    },
    {
      id: 3,
      title: "Digital Minimalism",
      author: "Cal Newport",
      description: "Ut enim ad minim veniam, quis nostrud exercitation. Uma filosofia de uso de tecnologia para uma vida focada.",
      rating: 4,
      category: "Tecnologia"
    },
    {
      id: 4,
      title: "Building a StoryBrand",
      author: "Donald Miller",
      description: "Duis aute irure dolor in reprehenderit in voluptate. Clarify your message so customers will listen.",
      rating: 5,
      category: "Marketing"
    },
    {
      id: 5,
      title: "The Content Code",
      author: "Mark Schaefer",
      description: "Excepteur sint occaecat cupidatat non proident. Six essential strategies to ignite your content.",
      rating: 4,
      category: "Marketing Digital"
    },
    {
      id: 6,
      title: "Deep Work",
      author: "Cal Newport",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Rules for focused success in a distracted world.",
      rating: 5,
      category: "Produtividade"
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
                <BookOpen className="w-8 h-8 text-dark-green" />
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-dark-green">
                Indicações de Livros
              </h1>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl">
              Uma curadoria especial dos livros que transformaram minha visão sobre negócios, marketing digital e crescimento pessoal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book, index) => (
              <div
                key={book.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-500 p-6 border border-dark-green/10 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-dark-green/10 text-dark-green text-xs font-medium rounded-full border border-dark-green/20">
                    {book.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-dark-green mb-2 group-hover:text-warm-yellow transition-colors">
                  {book.title}
                </h3>
                
                <p className="text-gray-500 font-medium mb-3">
                  por {book.author}
                </p>
                
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-4 h-4 ${
                        i < book.rating
                          ? 'text-warm-yellow fill-current'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                </div>
                
                <p className="text-gray-600 leading-relaxed">
                  {book.description}
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

export default Livros;
