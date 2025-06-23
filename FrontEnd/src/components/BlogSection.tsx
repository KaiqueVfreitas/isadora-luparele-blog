
import React, { useState } from 'react';
import { Calendar, ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const BlogSection = () => {
  const [email, setEmail] = useState('');

  const blogPosts = [
    {
      id: 1,
      title: "Como construir uma marca pessoal autêntica",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Descubra as estratégias que uso para manter a autenticidade...",
      date: "15 de Janeiro, 2024",
      readTime: "5 min de leitura",
      category: "Marca Pessoal"
    },
    {
      id: 2,
      title: "5 erros que você deve evitar nas redes sociais",
      excerpt: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Evite esses erros comuns que podem prejudicar...",
      date: "10 de Janeiro, 2024",
      readTime: "7 min de leitura",
      category: "Dicas"
    },
    {
      id: 3,
      title: "A importância do storytelling no marketing digital",
      excerpt: "Ut enim ad minim veniam, quis nostrud exercitation. Aprenda como contar histórias que conectam e convertem...",
      date: "5 de Janeiro, 2024",
      readTime: "6 min de leitura",
      category: "Storytelling"
    }
  ];

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Newsletter subscription:', email);
    setEmail('');
  };

  return (
    <section id="blog" className="py-16 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 text-sm font-medium text-dark-green bg-dark-green/10 rounded-full mb-4 border border-dark-green/20">
            Blog & Newsletter
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-dark-green mb-6">
            Conteúdo que inspira e transforma
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Acompanhe minhas reflexões, dicas práticas e insights sobre marketing digital e influência online.
          </p>
        </div>

        {/* Blog Posts */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {blogPosts.map((post, index) => (
            <article
              key={post.id}
              className="bg-soft-bg rounded-xl shadow-sm hover:shadow-lg transition-all duration-500 overflow-hidden group animate-fade-in border border-dark-green/10"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                <div className="flex items-center gap-2 mb-4">
                  <span className="px-3 py-1 bg-dark-green/10 text-dark-green text-xs font-medium rounded-full border border-dark-green/20">
                    {post.category}
                  </span>
                </div>
                
                <h3 className="text-xl font-bold text-dark-green mb-3 group-hover:text-warm-yellow transition-colors line-clamp-2">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-dark-green" />
                    <span>{post.date}</span>
                  </div>
                  <span>{post.readTime}</span>
                </div>
                
                <Link
                  to="/newsletter-post"
                  className="flex items-center gap-2 text-dark-green font-medium hover:text-warm-yellow transition-colors group"
                >
                  Ler mais
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </article>
          ))}
        </div>

        {/* Newsletter Subscription */}
        <div className="bg-soft-bg rounded-2xl shadow-lg p-8 md:p-12 text-center border border-dark-green/10">
          <div className="max-w-2xl mx-auto">
            <div className="mb-6">
              <Mail className="w-12 h-12 text-dark-green mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold text-dark-green mb-4">
                Assine minha newsletter
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Receba conteúdo exclusivo, dicas práticas e novidades diretamente no seu e-mail. 
                Sem spam, apenas valor real para o seu crescimento.
              </p>
            </div>
            
            <form onSubmit={handleNewsletterSubmit} className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-6">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Seu melhor e-mail"
                className="flex-1 px-4 py-3 border-2 border-dark-green/20 rounded-lg focus:ring-2 focus:ring-dark-green focus:border-dark-green outline-none bg-white"
                required
              />
              <button
                type="submit"
                className="px-8 py-3 bg-dark-green text-white rounded-lg hover:bg-warm-yellow hover:text-dark-green transition-colors font-medium whitespace-nowrap border-2 border-dark-green"
              >
                Assinar grátis
              </button>
            </form>

            <div className="flex items-center justify-center">
              <Link
                to="/newsletter-archive"
                className="inline-flex items-center gap-2 text-dark-green font-medium hover:text-warm-yellow transition-colors"
              >
                Todos os textos
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            
            <p className="text-xs text-gray-500 mt-4">
              Mais de 10.000 pessoas já se inscreveram. Cancele quando quiser.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
