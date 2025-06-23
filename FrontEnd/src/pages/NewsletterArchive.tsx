
import React, { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Calendar, Search, Filter, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const NewsletterArchive = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedPeriod, setSelectedPeriod] = useState('all');

  const allPosts = [
    {
      id: 1,
      title: "Como construir autoridade online em 2024",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nesta newsletter, compartilho estratégias práticas para construir uma presença digital sólida e autêntica que realmente conecta com sua audiência...",
      date: "28 de Janeiro, 2024",
      category: "Autoridade Digital",
      readTime: "8 min"
    },
    {
      id: 2,
      title: "5 tendências de marketing que não podem ser ignoradas",
      excerpt: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Descubra as principais tendências que estão moldando o marketing digital em 2024 e como você pode aproveitá-las...",
      date: "21 de Janeiro, 2024",
      category: "Tendências",
      readTime: "6 min"
    },
    {
      id: 3,
      title: "O poder do storytelling para influenciadores",
      excerpt: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris. Aprenda como contar histórias que conectam e engajam sua audiência de forma autêntica e impactante...",
      date: "14 de Janeiro, 2024",
      category: "Storytelling",
      readTime: "7 min"
    },
    {
      id: 4,
      title: "Monetização de conteúdo: estratégias que funcionam",
      excerpt: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore. Descubra diferentes formas de monetizar seu conteúdo sem perder a autenticidade...",
      date: "7 de Janeiro, 2024",
      category: "Monetização",
      readTime: "9 min"
    },
    {
      id: 5,
      title: "Como criar conteúdo viral de forma consistente",
      excerpt: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia. Estratégias comprovadas para criar conteúdo que engaja e gera compartilhamentos...",
      date: "31 de Dezembro, 2023",
      category: "Criação de Conteúdo",
      readTime: "5 min"
    },
    {
      id: 6,
      title: "Construindo uma comunidade engajada",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Dicas práticas para criar e manter uma comunidade ativa ao redor da sua marca pessoal...",
      date: "24 de Dezembro, 2023",
      category: "Comunidade",
      readTime: "6 min"
    },
    {
      id: 7,
      title: "A psicologia por trás do engajamento online",
      excerpt: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem. Entenda os gatilhos psicológicos que fazem as pessoas se engajarem com seu conteúdo...",
      date: "17 de Dezembro, 2023",
      category: "Psicologia",
      readTime: "8 min"
    },
    {
      id: 8,
      title: "Personal branding: erros comuns e como evitá-los",
      excerpt: "At vero eos et accusamus et iusto odio dignissimos ducimus. Aprenda a construir uma marca pessoal forte evitando os erros mais comuns...",
      date: "10 de Dezembro, 2023",
      category: "Marca Pessoal",
      readTime: "7 min"
    }
  ];

  const categories = [
    { value: 'all', label: 'Todas as categorias' },
    { value: 'Autoridade Digital', label: 'Autoridade Digital' },
    { value: 'Tendências', label: 'Tendências' },
    { value: 'Storytelling', label: 'Storytelling' },
    { value: 'Monetização', label: 'Monetização' },
    { value: 'Criação de Conteúdo', label: 'Criação de Conteúdo' },
    { value: 'Comunidade', label: 'Comunidade' },
    { value: 'Psicologia', label: 'Psicologia' },
    { value: 'Marca Pessoal', label: 'Marca Pessoal' }
  ];

  const periods = [
    { value: 'all', label: 'Todos os períodos' },
    { value: '2024', label: '2024' },
    { value: '2023', label: '2023' },
    { value: 'last-month', label: 'Último mês' },
    { value: 'last-3-months', label: 'Últimos 3 meses' }
  ];

  const filteredPosts = allPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || post.category === selectedCategory;
    const matchesPeriod = selectedPeriod === 'all' || 
                         (selectedPeriod === '2024' && post.date.includes('2024')) ||
                         (selectedPeriod === '2023' && post.date.includes('2023'));
    
    return matchesSearch && matchesCategory && matchesPeriod;
  });

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-dark-green hover:text-warm-yellow transition-colors mb-6"
            >
              <ArrowLeft className="w-4 h-4" />
              Voltar ao início
            </Link>
            <h1 className="text-3xl md:text-4xl font-bold text-dark-green mb-4">
              Arquivo de Newsletters
            </h1>
            <p className="text-lg text-gray-600">
              Explore todo o arquivo das minhas newsletters e posts com filtros por categoria, período e busca por título.
            </p>
          </div>

          {/* Filtros */}
          <div className="bg-white rounded-xl shadow-sm border border-dark-green/10 p-6 mb-8">
            <div className="flex items-center gap-2 mb-4">
              <Filter className="w-5 h-5 text-dark-green" />
              <h3 className="text-lg font-semibold text-dark-green">Filtros</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Buscar por título
                </label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input
                    type="text"
                    placeholder="Digite o título..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="pl-10 border-dark-green/20 focus:ring-dark-green focus:border-dark-green"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Categoria
                </label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="border-dark-green/20 focus:ring-dark-green">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {categories.map((category) => (
                      <SelectItem key={category.value} value={category.value}>
                        {category.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Período
                </label>
                <Select value={selectedPeriod} onValueChange={setSelectedPeriod}>
                  <SelectTrigger className="border-dark-green/20 focus:ring-dark-green">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {periods.map((period) => (
                      <SelectItem key={period.value} value={period.value}>
                        {period.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
            </div>
            
            <div className="mt-4 flex justify-end">
              <Button
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('all');
                  setSelectedPeriod('all');
                }}
                variant="outline"
                className="border-dark-green text-dark-green hover:bg-dark-green hover:text-white"
              >
                Limpar filtros
              </Button>
            </div>
          </div>

          {/* Resultados */}
          <div className="mb-6">
            <p className="text-gray-600">
              {filteredPosts.length} {filteredPosts.length === 1 ? 'resultado encontrado' : 'resultados encontrados'}
            </p>
          </div>

          {/* Lista de Posts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPosts.map((post, index) => (
              <article
                key={post.id}
                className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-500 p-6 border border-dark-green/10 group animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-dark-green/10 text-dark-green text-xs font-medium rounded-full border border-dark-green/20">
                    {post.category}
                  </span>
                  <span className="text-xs text-gray-500">{post.readTime} de leitura</span>
                </div>
                
                <h2 className="text-xl font-bold text-dark-green mb-3 group-hover:text-warm-yellow transition-colors">
                  {post.title}
                </h2>
                
                <p className="text-gray-600 mb-4 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4 text-dark-green" />
                    <span>{post.date}</span>
                  </div>
                  <Link
                    to="/newsletter-post"
                    className="text-dark-green font-medium hover:text-warm-yellow transition-colors"
                  >
                    Ler mais →
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                Nenhum resultado encontrado com os filtros aplicados.
              </p>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NewsletterArchive;
