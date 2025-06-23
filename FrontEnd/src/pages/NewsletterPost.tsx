
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { ArrowLeft, Calendar, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';

const NewsletterPost = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              to="/newsletters"
              className="inline-flex items-center gap-2 text-dark-green hover:text-warm-yellow transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar às newsletters
            </Link>
            
            <div className="mb-6">
              <span className="px-3 py-1 bg-dark-green/10 text-dark-green text-sm font-medium rounded-full border border-dark-green/20">
                Autoridade Digital
              </span>
            </div>
            
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-dark-green mb-6 leading-tight">
              Como construir autoridade online em 2024
            </h1>
            
            <div className="flex items-center gap-6 text-gray-600 mb-8">
              <div className="flex items-center gap-2">
                <Calendar className="w-4 h-4 text-dark-green" />
                <span>28 de Janeiro, 2024</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-dark-green" />
                <span>8 min de leitura</span>
              </div>
            </div>
          </div>

          <article className="prose prose-lg max-w-none">
            <div className="text-lg text-gray-700 leading-relaxed space-y-6">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              
              <h2 className="text-2xl font-bold text-dark-green mt-8 mb-4">
                O que é autoridade digital?
              </h2>
              
              <p>
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
              </p>
              
              <blockquote className="border-l-4 border-dark-green bg-gray-50 p-6 my-8 italic text-gray-700">
                "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt."
              </blockquote>
              
              <h2 className="text-2xl font-bold text-dark-green mt-8 mb-4">
                Estratégias práticas para 2024
              </h2>
              
              <p>
                Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
              </p>
              
              <ul className="list-disc pl-6 space-y-2 my-6">
                <li>Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis</li>
                <li>Suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur</li>
                <li>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse</li>
                <li>Quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat</li>
              </ul>
              
              <p>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident.
              </p>
              
              <h2 className="text-2xl font-bold text-dark-green mt-8 mb-4">
                Conclusão
              </h2>
              
              <p>
                Similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus.
              </p>
            </div>
          </article>

          {/* Newsletter CTA */}
          <div className="mt-16 bg-dark-green rounded-2xl p-8 md:p-12 text-center text-white">
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Gostou do conteúdo?
            </h3>
            <p className="text-gray-200 mb-6 leading-relaxed">
              Assine minha newsletter e receba mais conteúdos como este diretamente no seu e-mail.
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

export default NewsletterPost;
