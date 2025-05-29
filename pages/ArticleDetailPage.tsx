import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_ARTICLES, MOCK_WINES, PRIMARY_COLOR_TEXT, APP_NAME } from '../constants';
import { RoutePath, JournalArticle, Wine } from '../types';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import WineCard from '../components/WineCard';
import BookOpenIcon from '../components/icons/BookOpenIcon';
import StarIcon from '../components/icons/StarIcon';

const ArticleDetailPage: React.FC = () => {
  const { articleId } = useParams<{ articleId: string }>();
  const article = MOCK_ARTICLES.find(a => a.id === articleId);

  useEffect(() => {
  }, [articleId]);

  if (!article) {
    return (
      <div className="container mx-auto px-4 py-16 text-center animate-fadeIn bg-ice-white min-h-screen flex flex-col justify-center items-center">
        <BookOpenIcon className="w-24 h-24 mx-auto text-gray-300 mb-6" />
        <h1 className="text-3xl font-serif text-charcoal-gray mb-4">Artigo não encontrado</h1>
        <p className="text-gray-600 mb-8 font-sans">
          Desculpe, o artigo que você procura não foi encontrado em nosso Diário {APP_NAME}.
        </p>
        <Button to={RoutePath.DiarioDelSommelier} variant="primary" size="lg">Voltar para O Diário Éclat</Button>
      </div>
    );
  }

  const featuredWines: Wine[] = article.featuredWineIds
    ? MOCK_WINES.filter(wine => article.featuredWineIds?.includes(wine.id))
    : [];

  return (
    <div className="bg-ice-white animate-fadeIn">
        <div className="relative py-16 md:py-24 bg-light-warm-grey border-b border-gray-200">
            <img 
                src={article.imageUrl} 
                alt=""
                aria-hidden="true"
                className="absolute inset-0 w-full h-full object-cover opacity-10" 
            />
            <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 text-center z-10">
                <span className={`inline-block bg-burgundy-accent text-ice-white text-xs font-semibold px-3.5 py-1.5 rounded-md mb-4 uppercase tracking-wider shadow-sm font-sans`}>
                    {article.category}
                </span>
                {article.isPremium && (
                     <span className={`inline-block bg-gold-accent text-charcoal-gray text-xs font-semibold px-3.5 py-1.5 rounded-md mb-4 uppercase tracking-wider shadow-sm ml-2 font-sans`}>
                        <StarIcon className="w-3 h-3 inline -mt-0.5 mr-1" filled/>Premium
                    </span>
                )}
                <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-serif font-semibold text-charcoal-gray mb-4 max-w-4xl mx-auto leading-tight tracking-tight">{article.title}</h1>
                <p className="text-base md:text-lg text-gray-700 font-sans">
                    Por <span className="font-semibold text-charcoal-gray">{article.author}</span> &bull; Publicado em {new Date(article.publishDate).toLocaleDateString('pt-BR', { year: 'numeric', month: 'long', day: 'numeric' })}
                </p>
            </div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
            <div className="max-w-3xl mx-auto">
                <article 
                    className="prose lg:prose-xl prose-headings:font-serif prose-headings:font-semibold prose-headings:text-charcoal-gray prose-headings:tracking-tight prose-p:font-sans prose-p:text-gray-700 prose-p:leading-relaxed prose-a:text-burgundy-accent hover:prose-a:underline prose-strong:text-charcoal-gray prose-strong:font-semibold prose-ul:font-sans prose-li:font-sans prose-img:rounded-lg prose-img:shadow-md"
                    dangerouslySetInnerHTML={{ __html: article.content }} 
                />

                <div className="mt-12 pt-8 border-t border-gray-300/70">
                    <h3 className="text-xl md:text-2xl font-serif text-charcoal-gray mb-4">Sobre o Autor</h3>
                    <div className="flex items-start sm:items-center p-4 sm:p-6 bg-light-warm-grey rounded-lg shadow-sm">
                        <img src={`https://picsum.photos/seed/${article.author.split(' ').join('')}/100/100`} alt={article.author} className="w-16 h-16 sm:w-20 sm:h-20 rounded-full mr-4 sm:mr-6 shadow-sm flex-shrink-0"/>
                        <div>
                            <p className="font-semibold font-serif text-xl text-charcoal-gray">{article.author}</p>
                            <p className="text-sm text-gray-600 font-sans leading-snug">
                                {article.author === 'Isabella Rossi' ? `Sommelier Internacional e Co-fundadora da ${APP_NAME}. Apaixonada por descobrir e compartilhar as histórias por trás de cada taça.` : 
                                 article.author === 'Gabriel Vianna' ? `Estrategista de Luxo e Co-fundador da ${APP_NAME}. Focado em criar experiências memoráveis e autênticas no universo do vinho.` : 
                                `Colaborador especialista da ${APP_NAME}, com profundo conhecimento em área de especialidade.`}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        {featuredWines.length > 0 && (
            <section className="py-12 md:py-16 bg-light-warm-grey border-t border-gray-200">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                    <SectionTitle title="Vinhos Mencionados Neste Artigo" subtitle="Explore os rótulos que inspiraram ou complementam esta leitura, disponíveis em nossa Adega." />
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
                        {featuredWines.map((wine, index) => (
                            <div className="animate-subtleFadeInUp" style={{ animationDelay: `${index * 0.1}s`}} key={wine.id}>
                                <WineCard 
                                    wine={{
                                        id: wine.id,
                                        name: wine.name,
                                        producer: wine.producer,
                                        imageUrl: wine.imageUrl,
                                        grapeVarieties: wine.grapeVarieties,
                                        regionOfOrigin: wine.regionOfOrigin,
                                        vintage: wine.vintage,
                                        wineStyle: wine.wineStyle
                                    }} 
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        )}

        <div className="py-12 md:py-16 text-center bg-ice-white">
            <Button to={RoutePath.DiarioDelSommelier} variant="secondary" size="lg" icon={<BookOpenIcon className="w-5 h-5 mr-2"/>} className="shadow hover:shadow-md">
                Voltar para O Diário Éclat
            </Button>
        </div>
    </div>
  );
};

export default ArticleDetailPage;