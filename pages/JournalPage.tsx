
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { MOCK_ARTICLES, PRIMARY_COLOR_TEXT, APP_NAME } from '../constants';
import { JournalArticle, RoutePath } from '../types';
import ChevronDownIcon from '../components/icons/ChevronDownIcon';
import BookOpenIcon from '../components/icons/BookOpenIcon';
import StarIcon from '../components/icons/StarIcon';
import Button from '../components/Button';
import Modal from '../components/Modal';

const JournalPage: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const categories = useMemo(() => Array.from(new Set(MOCK_ARTICLES.map(article => article.category))).sort(), []);

  const clearAllFilters = () => {
    setSelectedCategory('');
    setSearchTerm('');
  };
  
  const filteredArticles = useMemo(() => {
    return MOCK_ARTICLES.filter(article => {
      const matchesCategory = selectedCategory ? article.category === selectedCategory : true;
      const matchesSearchTerm = searchTerm 
        ? article.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
          article.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
          article.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
          (article.isPremium && "premium".includes(searchTerm.toLowerCase()))
        : true;
      return matchesCategory && matchesSearchTerm;
    }).sort((a,b) => new Date(b.publishDate).getTime() - new Date(a.publishDate).getTime()); 
  }, [selectedCategory, searchTerm]);

  const renderFilterControls = (isModal: boolean = false) => (
    <>
       <div>
          <label htmlFor={isModal ? "journal-search-modal" : "journal-search"} className="block text-xs font-medium text-gray-500 mb-1.5 font-sans">
            Buscar no Diario
          </label>
          <input
            type="text"
            id={isModal ? "journal-search-modal" : "journal-search"}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Ex: Harmonização, Toscana, Chef..."
            className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-gold-accent/50 focus:border-gold-accent transition-colors text-sm font-sans"
          />
        </div>
        <div>
          <label htmlFor={isModal ? "category-filter-modal" : "category-filter"} className="block text-xs font-medium text-gray-500 mb-1.5 font-sans">
            Filtrar por Categoria
          </label>
          <div className="relative">
            <select
              id={isModal ? "category-filter-modal" : "category-filter"}
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-gold-accent/50 focus:border-gold-accent appearance-none bg-ice-white pr-10 text-sm text-charcoal-gray font-sans"
            >
              <option value="">Todas as Categorias</option>
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>
            <ChevronDownIcon className="absolute right-3.5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"/>
          </div>
        </div>
    </>
  );


  return (
    <div className="bg-ice-white py-12 md:py-16 animate-fadeIn">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Il Diario del Sommelier" 
          subtitle={`Mergulhe em artigos, entrevistas e guias sobre o fascinante mundo do vinho. Conhecimento, inspiração e as últimas tendências da enogastronomia em cada leitura por Luigi Frescobaldi e colaboradores ${APP_NAME}.`}
        />

        <div className="lg:hidden mb-6 text-center">
          <Button 
            onClick={() => setIsMobileFilterOpen(true)} 
            variant="primary" 
            size="md"
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096V19.5a.75.75 0 01-.75.75h-15a.75.75 0 01-.75-.75V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3zM12 12.75c-2.67 0-5.183-.05-7.5-.15V18h15v-5.4c-2.317.1-4.83.15-7.5.15z" /></svg>}
          >
            Filtrar Artigos
          </Button>
        </div>

        <div className="mb-10 md:mb-12 p-6 bg-light-warm-grey rounded-lg shadow-lg hidden lg:block">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-x-6 gap-y-5 items-end">
            <div className="md:col-span-1">{renderFilterControls(false).props.children[0]}</div>
            <div className="md:col-span-1">{renderFilterControls(false).props.children[1]}</div>
             <button 
                onClick={clearAllFilters}
                className="md:col-span-1 p-3 border border-gray-300 rounded-md shadow-sm bg-ice-white text-sm text-charcoal-gray hover:bg-gray-50 transition-colors h-[50px] mt-auto"
            >
                Limpar Filtros
            </button>
          </div>
        </div>

        <Modal 
          isOpen={isMobileFilterOpen} 
          onClose={() => setIsMobileFilterOpen(false)} 
          title="Filtrar Artigos do Diário"
          size="md"
        >
          <div className="space-y-4 max-h-[70vh] overflow-y-auto p-1">
            {renderFilterControls(true)}
          </div>
          <div className="mt-6 pt-4 border-t border-gray-200 flex flex-col sm:flex-row sm:justify-end sm:space-x-3 space-y-3 sm:space-y-0">
            <Button onClick={clearAllFilters} variant="outline" size="md" className="w-full sm:w-auto">Limpar Filtros</Button>
            <Button onClick={() => setIsMobileFilterOpen(false)} variant="primary" size="md" className="w-full sm:w-auto">Aplicar Filtros</Button>
          </div>
        </Modal>
        
        {filteredArticles.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 md:gap-x-10 gap-y-10 md:gap-y-12">
            {filteredArticles.map((article: JournalArticle, index: number) => (
              <Link 
                key={article.id} 
                to={RoutePath.ArticleDetail.replace(':articleId', article.id)} 
                className="group block bg-light-warm-grey rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 ease-out overflow-hidden flex flex-col border border-transparent hover:border-gold-accent/40 animate-subtleFadeInUp"
                style={{ animationDelay: `${index * 0.05}s`}}
              >
                <div className="relative h-56 sm:h-64 md:h-72 overflow-hidden">
                  <img 
                      src={article.imageUrl} 
                      alt={article.title} 
                      className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className={`absolute top-3 left-3 bg-burgundy-accent text-ice-white text-xs font-semibold px-2.5 py-1 rounded-md shadow font-sans`}>
                      {article.category}
                  </div>
                  {article.isPremium && (
                    <div className={`absolute top-3 right-3 bg-gold-accent text-charcoal-gray text-xs font-semibold px-2.5 py-1 rounded-md shadow flex items-center font-sans`}>
                        <StarIcon className="w-3 h-3 mr-1" filled /> PREMIUM
                    </div>
                  )}
                </div>
                <div className="p-5 md:p-6 flex flex-col flex-grow">
                  <h3 className="text-xl lg:text-2xl font-serif font-semibold text-charcoal-gray mb-2 group-hover:text-burgundy-accent transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-500 mb-1.5 font-sans">
                    Por {article.author} - {new Date(article.publishDate).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
                  </p>
                  <p className="text-sm text-gray-700 leading-relaxed mb-4 flex-grow min-h-[4.5rem] overflow-hidden text-ellipsis font-sans">
                    {article.summary}
                  </p>
                  <div className="mt-auto pt-3 border-t border-gray-200">
                      <span className={`text-sm font-semibold ${PRIMARY_COLOR_TEXT} group-hover:underline font-sans`}>
                          Ler Artigo Completo &rarr;
                      </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-20">
            <BookOpenIcon className="w-24 h-24 mx-auto text-gray-300 mb-8" />
            <p className="text-2xl md:text-3xl font-serif text-charcoal-gray mb-4">Nenhum artigo encontrado</p>
            <p className="text-base text-gray-600 font-sans max-w-md mx-auto">
              Não encontramos artigos que correspondam aos seus critérios. Tente ajustar os filtros ou explore nosso Diário completo.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JournalPage;