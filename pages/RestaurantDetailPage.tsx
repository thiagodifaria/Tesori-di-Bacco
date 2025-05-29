

import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_RESTAURANTS, MOCK_WINES, APP_NAME, PRIMARY_COLOR_TEXT, GOLD_ACCENT_TEXT } from '../constants';
import { Restaurant, Wine, RoutePath } from '../types';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import MapPinIcon from '../components/icons/MapPinIcon';
import StarIcon from '../components/icons/StarIcon';
import WineCard from '../components/WineCard';
import WineGlassIcon from '../components/icons/WineGlassIcon';
import BookOpenIcon from '../components/icons/BookOpenIcon';
import BuildingLibraryIcon from '../components/icons/BuildingLibraryIcon'; 
import SparklesIcon from '../components/icons/SparklesIcon'; 
import UserGroupIcon from '../components/icons/UserGroupIcon'; 

const InfoItemRestaurant: React.FC<{ label: string; value?: string | number | React.ReactNode; className?: string }> = ({ label, value, className = '' }) => (
  <div className={`mb-3 ${className}`}>
    <span className="font-semibold text-xs text-gray-500 uppercase tracking-wider block mb-0.5 font-sans">{label}</span>
    {typeof value === 'string' || typeof value === 'number' ? (
      <p className="text-base md:text-lg text-charcoal-gray font-sans leading-relaxed">{value || 'N/A'}</p>
    ) : (
      <div className="text-base md:text-lg text-charcoal-gray font-sans leading-relaxed">{value || 'N/A'}</div>
    )}
  </div>
);

const RestaurantDetailPage: React.FC = () => {
  const { restaurantId } = useParams<{ restaurantId: string }>();
  const restaurant = MOCK_RESTAURANTS.find(r => r.id === restaurantId);

  useEffect(() => {
  }, [restaurantId]);

  if (!restaurant) {
    return (
      <div className="container mx-auto px-4 py-16 text-center animate-fadeIn bg-ice-white min-h-screen flex flex-col justify-center items-center">
        <MapPinIcon className="w-24 h-24 mx-auto text-gray-300 mb-6" />
        <h1 className="text-3xl font-serif text-charcoal-gray mb-4">Restaurante não encontrado</h1>
        <p className="text-gray-600 mb-8 font-sans">
          Desculpe, não conseguimos encontrar os detalhes do restaurante que você está procurando em nossas Tavole del Gusto.
        </p>
        <Button to={RoutePath.TavoleDelGusto} variant="primary" size="lg">Voltar para Tavole del Gusto</Button>
      </div>
    );
  }

  const winesServedByRestaurant: Wine[] = restaurant.eclatWinesServed
    ? MOCK_WINES.filter(wine => restaurant.eclatWinesServed?.some(rw => rw.id === wine.id))
    : [];

  return (
    <div className="bg-ice-white animate-fadeIn">
      <div className="relative bg-light-warm-grey">
        <img 
            src={restaurant.imageUrl} 
            alt={`Fachada do restaurante ${restaurant.name}`} 
            className="w-full h-[50vh] md:h-[65vh] object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-10">
          <div className="container mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-bold text-ice-white mb-2 tracking-tight leading-tight shadow-text-md">
              {restaurant.name}
            </h1>
            <div className="flex items-center space-x-4 mb-3">
              {restaurant.michelinStars && (
                <div className="flex items-center bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-full text-ice-white shadow-md">
                  {[...Array(restaurant.michelinStars)].map((_, i) => (
                    <StarIcon key={i} className="w-5 h-5 text-gold-accent" />
                  ))}
                  <span className="ml-2 text-sm font-semibold font-sans">{restaurant.michelinStars} Michelin</span>
                </div>
              )}
              <p className="text-ice-white text-lg font-sans shadow-text-sm flex items-center">
                <MapPinIcon className="w-5 h-5 mr-1.5 flex-shrink-0" /> {restaurant.city}, {restaurant.country}
              </p>
            </div>
            {restaurant.chef && <p className="text-ice-white text-xl font-sans font-medium shadow-text-sm">Chef: {restaurant.chef}</p>}
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
          <div className="lg:col-span-2 space-y-10">
            <section className="p-6 bg-light-warm-grey rounded-lg shadow-md">
              <h2 className="text-2xl md:text-3xl font-serif text-charcoal-gray mb-4 flex items-center">
                <BookOpenIcon className={`w-7 h-7 mr-3 ${PRIMARY_COLOR_TEXT}`} /> Filosofia da Casa
              </h2>
              <p className="text-gray-700 leading-relaxed whitespace-pre-line text-base md:text-lg font-sans">{restaurant.philosophy}</p>
            </section>

            {restaurant.historyAndPrestige && (
              <section className="p-6 bg-light-warm-grey rounded-lg shadow-md">
                <h2 className="text-2xl md:text-3xl font-serif text-charcoal-gray mb-4 flex items-center">
                  <BuildingLibraryIcon className={`w-7 h-7 mr-3 ${PRIMARY_COLOR_TEXT}`} /> História e Prestígio
                </h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line text-base md:text-lg font-sans">{restaurant.historyAndPrestige}</p>
              </section>
            )}

            {restaurant.signatureDishes && restaurant.signatureDishes.length > 0 && (
              <section className="p-6 bg-light-warm-grey rounded-lg shadow-md">
                <h2 className="text-2xl md:text-3xl font-serif text-charcoal-gray mb-5 flex items-center">
                  <StarIcon className={`w-7 h-7 mr-3 ${GOLD_ACCENT_TEXT}`} /> Pratos Assinatura
                </h2>
                <div className="space-y-4">
                  {restaurant.signatureDishes.map((dish, index) => (
                    <div key={index}>
                      <h4 className="font-semibold text-lg text-burgundy-accent font-sans">{dish.name}</h4>
                      <p className="text-gray-600 text-sm font-sans">{dish.description}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {restaurant.culinaryHighlights && (
              <section className="p-6 bg-light-warm-grey rounded-lg shadow-md">
                <h2 className="text-2xl md:text-3xl font-serif text-charcoal-gray mb-4 flex items-center">
                  <SparklesIcon className={`w-7 h-7 mr-3 ${PRIMARY_COLOR_TEXT}`} /> Destaques Culinários
                </h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line text-base md:text-lg font-sans">{restaurant.culinaryHighlights}</p>
              </section>
            )}
            
            {restaurant.ambianceDescription && (
              <section className="p-6 bg-light-warm-grey rounded-lg shadow-md">
                <h2 className="text-2xl md:text-3xl font-serif text-charcoal-gray mb-4 flex items-center">
                  <UserGroupIcon className={`w-7 h-7 mr-3 ${PRIMARY_COLOR_TEXT}`} /> Ambiente e Experiência
                </h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line text-base md:text-lg font-sans">{restaurant.ambianceDescription}</p>
              </section>
            )}


            {restaurant.memberBenefit && (
                <section className="p-6 bg-gold-accent/10 border border-gold-accent rounded-lg shadow-md">
                    <h2 className="text-2xl md:text-3xl font-serif text-charcoal-gray mb-3 flex items-center">
                        <StarIcon className="w-7 h-7 mr-3 text-gold-accent" />
                        Benefício Exclusivo {APP_NAME}
                    </h2>
                    <p className="text-gray-700 text-base md:text-lg font-sans">{restaurant.memberBenefit}</p>
                </section>
            )}

            {winesServedByRestaurant.length > 0 && (
              <section>
                <h2 className="text-2xl md:text-3xl font-serif text-charcoal-gray mb-5">Vinhos da Nossa Collezione na Carta</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8">
                  {winesServedByRestaurant.map((wine, index) => (
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
              </section>
            )}
            
            {restaurant.interviewLink && restaurant.interviewLink !== "#" && !restaurant.interviewLink.includes(':articleId') && (
                 <section className="p-6 bg-light-warm-grey rounded-lg shadow-md text-center">
                    <BookOpenIcon className={`w-12 h-12 mx-auto mb-4 ${PRIMARY_COLOR_TEXT}`} />
                    <h2 className="text-2xl md:text-3xl font-serif text-charcoal-gray mb-3">Entrevista com o Chef/Sommelier</h2>
                    <p className="text-gray-700 mb-5 text-base font-sans">
                        Descubra mais sobre a visão e as inspirações por trás deste renomado estabelecimento em nosso Il Diario del Sommelier.
                    </p>
                    <Button to={restaurant.interviewLink} variant="primary" size="md" className="shadow hover:shadow-md">
                        Ler Entrevista
                    </Button>
                </section>
            )}
          </div>

          <aside className="lg:col-span-1 space-y-8 sticky top-28 self-start">
            <div className="p-6 bg-light-warm-grey rounded-lg shadow-lg">
              <h3 className="text-xl font-serif text-charcoal-gray border-b border-gray-300/70 pb-3 mb-5">Informações do Restaurante</h3>
              <InfoItemRestaurant label="Tipo de Cozinha" value={restaurant.cuisineType} />
              <InfoItemRestaurant label="Cidade" value={restaurant.city} />
              <InfoItemRestaurant label="País" value={restaurant.country} />
              {restaurant.chef && <InfoItemRestaurant label="Chef Principal" value={restaurant.chef} />}
              {restaurant.michelinStars && <InfoItemRestaurant label="Estrelas Michelin" value={`${restaurant.michelinStars} Estrela${restaurant.michelinStars > 1 ? 's' : ''}`} />}
              
              {restaurant.websiteUrl && restaurant.websiteUrl !== "#" && (
                <div className="mt-6">
                  <Button href={restaurant.websiteUrl} target="_blank" rel="noopener noreferrer" variant="secondary" fullWidth icon={
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 mr-2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.19 8.688a4.5 4.5 0 011.242 7.244l-4.5 4.5a4.5 4.5 0 01-6.364-6.364l1.757-1.757m13.35-.622l1.757-1.757a4.5 4.5 0 00-6.364-6.364l-4.5 4.5a4.5 4.5 0 001.242 7.244" />
                    </svg>
                  } className="shadow hover:shadow-md">
                    Visitar Website Oficial
                  </Button>
                </div>
              )}
            </div>
             <div className="p-6 bg-light-warm-grey rounded-lg shadow-lg text-center">
                <WineGlassIcon className={`w-10 h-10 mx-auto mb-3 ${PRIMARY_COLOR_TEXT}`} />
                <h3 className="text-lg font-serif text-charcoal-gray mb-2">Interessado em Parceria?</h3>
                <p className="text-sm text-gray-600 mb-4 font-sans">Se você representa um estabelecimento gastronômico de excelência, entre em contato para explorar oportunidades de parceria com {APP_NAME}.</p>
                <Button to={RoutePath.Contact} variant="outline" size="sm">Fale Conosco</Button>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default RestaurantDetailPage;
