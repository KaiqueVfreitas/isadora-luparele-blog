
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Mail, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Newsletters = () => {
  const newsletters = [
    {
      id: 1,
      title: "Como construir autoridade online em 2024",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nesta newsletter, compartilho estratégias práticas para construir uma presença digital sólida...",
      date: "28 de Janeiro, 2024",
      category: "Autoridade Digital"
    },
    {
      id: 2,
      title: "5 tendências de marketing que não podem ser ignoradas",
      excerpt: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Descubra as principais tendências que estão moldando o marketing digital...",
      date: "21 de Janeiro, 2024",
      category: "Tendências"
    },
    {
      id: 3,
      title: "O poder do storytelling para influenciadores",
      excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Aprenda como contar histórias que conectam e engajam sua audiência...",
      date: "14 de Janeiro, 2024",
      category: "Storytelling"
    },
    {
      id: 4,
      title: "Monetização de conteúdo: estratégias que funcionam",
      excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Descubra diferentes formas de monetizar seu conteúdo...",
      date: "7 de Janeiro, 2024",
      category: "Monetização"
    },
    {
      id: 5,
      title: "Como criar conteúdo viral de forma consistente",
      excerpt: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Estratégias comprovadas para criar conteúdo que engaja...",
      date: "31 de Dezembro, 2023",
      category: "Criação de Conteúdo"
    },
    {
      id: 6,
      title: "Construindo uma comunidade engajada",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dicas práticas para criar e manter uma comunidade ativa ao redor da sua marca...",
      date: "24 de Dezembro, 2023",
      category: "Comunidade"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-dark-green hover:text-warm-yellow transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao início
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-dark-green mb-4">
              Todas as Newsletters
            </h1>
            <p className="text-lg text-gray-600">
              Explore todo o arquivo das minhas newsletters com conteúdo exclusivo sobre marketing digital, influência online e crescimento pessoal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {newsletters.map((newsletter, index) => (
              <article
                key={newsletter.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-500 p-6 border border-dark-green/10 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-dark-green/10 text-dark-green text-xs font-medium rounded-full border border-dark-green/20">
                    {newsletter.category}
                  </span>
                </div>
                
                <h2 className="text-xl font-bold text-dark-green mb-3 group-hover:text-warm-yellow transition-colors">
                  {newsletter.title}
                </h2>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {newsletter.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4 text-dark-green" />
                    <span>{newsletter.date}</span>
                  </div>
                  <button className="text-dark-green font-medium hover:text-warm-yellow transition-colors">
                    Ler →
                  </button>
                </div>
              </article>
            ))}
          </div>

          {/* Newsletter Subscription */}
          <div className="mt-16 bg-dark-green rounded-2xl p-8 md:p-12 text-center text-white">
            <Mail className="w-12 h-12 text-warm-yellow mx-auto mb-4" />
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Não perca nenhuma newsletter
            </h3>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Assine agora e receba todo o conteúdo exclusivo diretamente no seu e-mail.
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 rounded-lg text-dark-green outline-none"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-warm-yellow text-dark-green rounded-lg hover:bg-warm-yellow/90 transition-colors font-medium whitespace-nowrap"
              >
                Assinar
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Newsletters;
