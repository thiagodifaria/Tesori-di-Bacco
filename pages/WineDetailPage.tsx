import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MOCK_WINES, MOCK_RESTAURANTS, APP_NAME } from '../constants';
import { Wine, HarmonizationSuggestion, Restaurant, RoutePath } from '../types'; 
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import MapPinIcon from '../components/icons/MapPinIcon';
import StarIcon from '../components/icons/StarIcon';
import WineGlassIcon from '../components/icons/WineGlassIcon';

const InfoItem: React.FC<{ label: string; value?: string | number | React.ReactNode; className?: string }> = ({ label, value, className = '' }) => (
  <div className={`mb-4 ${className}`}>
    <span className="font-semibold text-xs text-gray-500 uppercase tracking-wider block mb-1 font-sans">{label}</span>
    {typeof value === 'string' || typeof value === 'number' ? (
      <p className="text-base md:text-lg text-charcoal-gray font-sans leading-relaxed">{value || 'N/A'}</p>
    ) : (
      <div className="text-base md:text-lg text-charcoal-gray font-sans leading-relaxed">{value || 'N/A'}</div>
    )}
  </div>
);

const WineDetailPage: React.FC = () => {
  const { wineId } = useParams<{ wineId: string }>();
  const wine = MOCK_WINES.find(w => w.id === wineId);

  useEffect(() => {
  }, [wineId]);

  if (!wine) {
    return (
      <div className="container mx-auto px-4 py-16 text-center animate-fadeIn bg-ice-white min-h-screen flex flex-col justify-center items-center">
        <WineGlassIcon className="w-24 h-24 mx-auto text-gray-300 mb-6" />
        <h1 className="text-3xl font-serif text-charcoal-gray mb-4">Vinho não encontrado</h1>
        <p className="text-gray-600 mb-8 font-sans">
          Desculpe, não conseguimos encontrar o vinho que você está procurando em nossa Collezione.
        </p>
        <Button to={RoutePath.CollezioneFrescobaldi} variant="primary" size="lg">Voltar para La Collezione Frescobaldi</Button>
      </div>
    );
  }

  const partnerRestaurants = MOCK_RESTAURANTS.filter(r => 
    r.eclatWinesServed?.some(ew => ew.id === wine.id) || 
    wine.restaurantPartnerships?.some(wp => wp.restaurantName === r.name)
  );


  return (
    <div className="bg-ice-white animate-fadeIn">
      <div className="relative pt-16 pb-10 md:pt-24 md:pb-16 bg-light-warm-grey border-b border-gray-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="md:flex md:items-center md:gap-10 lg:gap-16">
                <div className="md:w-2/5 lg:w-1/3 mb-8 md:mb-0 text-center flex justify-center">
                    <img 
                        src={wine.imageUrl} 
                        alt={wine.name} 
                        className="rounded-lg shadow-2xl mx-auto max-h-[400px] sm:max-h-[500px] md:max-h-[550px] object-contain transition-transform duration-300 hover:scale-105"
                    />
                </div>
                <div className="md:w-3/5 lg:w-2/3 text-center md:text-left">
                    <h1 className="text-4xl lg:text-5xl xl:text-6xl font-serif font-semibold text-charcoal-gray mb-3 tracking-tight">{wine.name}</h1>
                    <p className="text-lg md:text-xl text-gray-700 mb-1 font-sans">
                      Por <Link to={`${RoutePath.CollezioneFrescobaldi}#producer-${wine.producer.id}`} className="font-semibold text-burgundy-accent hover:underline transition-colors">{wine.producer.name}</Link>
                    </p>
                    <p className="text-sm md:text-base text-gray-500 mb-4 font-sans">{wine.regionOfOrigin.region}, {wine.regionOfOrigin.country} - Safra {wine.vintage > 0 ? wine.vintage : 'N.V.'}</p>
                    <div className="flex justify-center md:justify-start space-x-2 mb-5">
                        {wine.wineStyle && <span className="bg-burgundy-accent text-ice-white px-3 py-1 rounded-full text-xs font-medium font-sans shadow-sm">{wine.wineStyle}</span>}
                        {wine.grapeVarieties.slice(0,3).map(g => (
                            <span key={g.name} className="bg-gold-accent text-white px-3 py-1 rounded-full text-xs font-medium font-sans shadow-sm">{g.name} {g.percentage ? `(${g.percentage}%)` : ''}</span>
                        ))}
                    </div>
                    {wine.priceIndicator && <p className="text-xl md:text-2xl font-semibold text-burgundy-accent mb-6 font-sans">Faixa de Preço: {wine.priceIndicator}</p>}
                     <Button to={RoutePath.MembershipPlans} variant="primary" size="lg" icon={<WineGlassIcon className="w-5 h-5 mr-2"/>} className="shadow-lg hover:shadow-xl">
                        Descubra nos Planos
                    </Button>
                </div>
            </div>
        </div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
          <div className="lg:col-span-2 space-y-10">
            {wine.story && (
              <section className="p-6 bg-light-warm-grey rounded-lg shadow-md">
                <h2 className="text-2xl md:text-3xl font-serif text-charcoal-gray mb-4">A História Deste Vinho</h2>
                <p className="text-gray-700 leading-relaxed whitespace-pre-line text-base md:text-lg font-sans">{wine.story}</p>
              </section>
            )}

            <section>
              <h2 className="text-2xl md:text-3xl font-serif text-charcoal-gray mb-5">Notas de Degustação por Luigi Frescobaldi</h2>
              <div className="p-6 bg-light-warm-grey rounded-lg shadow-md space-y-5">
                <InfoItem label="Perfil Aromático" value={wine.tastingNotes.aromaticProfile.join(' • ')} />
                <InfoItem label="Paladar" value={wine.tastingNotes.palate} />
                <InfoItem label="Potencial de Guarda" value={wine.tastingNotes.guardPotential} />
                <div className="mt-4 pt-4 border-t border-gray-300/70">
                  <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3 font-sans">Intensidade de Aromas (Exemplo Visual):</h4>
                  <div className="space-y-2.5">
                    {wine.tastingNotes.aromaticProfile.slice(0,4).map(aroma => (
                       <div key={aroma} className="flex items-center">
                         <span className="w-32 text-sm text-gray-600 shrink-0 font-sans">{aroma}:</span>
                         <div className="w-full bg-gray-200 rounded-full h-3.5 ml-2 shadow-inner">
                           <div className="bg-burgundy-accent h-3.5 rounded-full" style={{ width: `${Math.random()*50 + 50}%` }}></div>
                         </div>
                       </div>
                    ))}
                  </div>
                   <p className="text-xs text-gray-400 mt-3 text-center font-sans">Gráfico ilustrativo da predominância de aromas.</p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl md:text-3xl font-serif text-charcoal-gray mb-5">Harmonização Detalhada</h2>
              <div className="space-y-6">
                {wine.harmonization.map((item: HarmonizationSuggestion, index: number) => (
                  <div key={index} className="p-6 bg-light-warm-grey rounded-lg shadow-md">
                    <h3 className="text-xl md:text-2xl font-semibold font-serif text-charcoal-gray mb-2">{item.dish}</h3>
                    <p className="text-gray-700 mb-3 text-base font-sans"><span className="font-medium text-charcoal-gray">Por que harmoniza:</span> {item.reasoning}</p>
                    {item.recipeLink && item.recipeLink !== "#" && !item.recipeLink.includes(':articleId') && ( 
                      <Button to={item.recipeLink} variant="text" size="sm" className="!px-0">
                        Ver receita em Il Diario del Sommelier &rarr;
                      </Button>
                    )}
                  </div>
                ))}
              </div>
            </section>

            {partnerRestaurants.length > 0 && (
              <section>
                <h2 className="text-2xl md:text-3xl font-serif text-charcoal-gray mb-5">Onde Apreciar Este Vinho</h2>
                <div className="space-y-6">
                  {partnerRestaurants.map((partner: Restaurant) => ( 
                    <div key={partner.id} className="p-6 bg-light-warm-grey rounded-lg shadow-md flex flex-col sm:flex-row gap-5 items-start">
                       <img src={partner.imageUrl || 'https://picsum.photos/seed/restaurant_placeholder/150/150'} alt={partner.name} className="w-full sm:w-36 h-36 object-cover rounded-md shadow-sm"/>
                       <div className="flex-1">
                          <h3 className="text-xl md:text-2xl font-semibold font-serif text-charcoal-gray mb-1">{partner.name}</h3>
                          {partner.chef && <p className="text-sm text-gray-600 mb-1 font-sans">Chef: {partner.chef}</p>}
                          {partner.michelinStars && (
                            <div className="flex items-center mb-2">
                                {[...Array(partner.michelinStars)].map((_, i) => <StarIcon key={i} className="w-4 h-4 text-gold-accent"/>)}
                                <span className="ml-1.5 text-xs text-gray-500 font-sans">({partner.michelinStars} Estrela{partner.michelinStars > 1 ? 's' : ''} Michelin)</span>
                            </div>
                          )}
                          <p className="text-sm text-gray-700 mb-3 leading-relaxed font-sans">{partner.philosophy.substring(0,120)}...</p>
                          {wine.restaurantPartnerships?.find(rp => rp.restaurantName === partner.name)?.memberBenefit && (
                            <p className="text-sm font-medium text-forest-green-accent mb-3 bg-gold-accent/10 p-2 rounded-md inline-flex items-center font-sans">
                                <StarIcon className="w-4 h-4 inline mr-1.5 text-forest-green-accent"/> 
                                {wine.restaurantPartnerships.find(rp => rp.restaurantName === partner.name)?.memberBenefit}
                            </p>
                          )}
                          <div className="flex space-x-3 mt-2">
                            {partner.websiteUrl && partner.websiteUrl !== "#" && <Button href={partner.websiteUrl} target="_blank" rel="noopener noreferrer" variant="outline" size="sm" className="!px-3 !py-1.5">Visitar Site</Button>}
                            <Button to={`${RoutePath.TavoleDelGusto}${RoutePath.RestaurantDetail.replace(':restaurantId', partner.id).substring(1)}`} variant="text" size="sm" className="!px-3 !py-1.5">Ver Perfil {APP_NAME}</Button>
                          </div>
                       </div>
                    </div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="lg:col-span-1 space-y-8 sticky top-28 self-start">
            <div className="p-6 bg-light-warm-grey rounded-lg shadow-lg">
              <h3 className="text-xl font-serif text-charcoal-gray border-b border-gray-300/70 pb-3 mb-5">Detalhes do Vinho</h3>
              <InfoItem label="Produtor" value={<Link to={`${RoutePath.CollezioneFrescobaldi}#producer-${wine.producer.id}`} className="text-burgundy-accent hover:underline transition-colors">{wine.producer.name}</Link>} />
              <InfoItem label="Safra" value={wine.vintage > 0 ? wine.vintage : 'Não Safrado (N.V.)'} />
              <InfoItem label="Uva(s)" value={wine.grapeVarieties.map(g => `${g.name}${g.percentage ? ` (${g.percentage}%)` : ''}`).join(' • ')} />
              <InfoItem label="Região de Origem" value={`${wine.regionOfOrigin.subRegion ? `${wine.regionOfOrigin.subRegion}, ` : ''}${wine.regionOfOrigin.region}, ${wine.regionOfOrigin.country}`} />
              {wine.regionOfOrigin.terroirDetails && <InfoItem label="Terroir" value={wine.regionOfOrigin.terroirDetails} />}
            </div>
            
            <div className="p-6 bg-light-warm-grey rounded-lg shadow-lg">
                <h3 className="text-xl font-serif text-charcoal-gray border-b border-gray-300/70 pb-3 mb-5">Vinificação e Maturação</h3>
                <InfoItem label="Processo de Vinificação" value={wine.vinificationProcess} />
                <InfoItem label="Maturação / Envelhecimento" value={wine.maturation} />
            </div>

            {wine.regionOfOrigin.mapImageUrl && (
                 <div className="p-6 bg-light-warm-grey rounded-lg shadow-lg">
                    <h3 className="text-xl font-serif text-charcoal-gray border-b border-gray-300/70 pb-3 mb-5">Mapa da Região</h3>
                    <img src={wine.regionOfOrigin.mapImageUrl} alt={`Mapa da região de ${wine.regionOfOrigin.region}`} className="rounded-md shadow-sm w-full object-cover aspect-[4/3]"/>
                    <p className="text-xs text-gray-500 mt-2 text-center font-sans">Representação ilustrativa da região vinícola.</p>
                 </div>
            )}

            {wine.perceivedQuality && (
              <div className="p-6 bg-light-warm-grey rounded-lg shadow-lg">
                <h3 className="text-xl font-serif text-charcoal-gray border-b border-gray-300/70 pb-3 mb-5">Qualidade Percebida</h3>
                {wine.perceivedQuality.score && <InfoItem label="Pontuação" value={wine.perceivedQuality.score} />}
                {wine.perceivedQuality.awards && wine.perceivedQuality.awards.length > 0 && (
                  <InfoItem label="Prêmios" value={wine.perceivedQuality.awards.join(' • ')} />
                )}
              </div>
            )}
          </aside>
        </div>
      </div>
    </div>
  );
};

export default WineDetailPage;