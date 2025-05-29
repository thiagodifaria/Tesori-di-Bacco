import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { MOCK_SUBSCRIPTION_TIERS, PRIMARY_COLOR_TEXT, GOLD_ACCENT_TEXT, APP_NAME } from '../constants';
import { SubscriptionTier, Wine, RoutePath } from '../types';
import { Link } from 'react-router-dom';
import WineGlassIcon from '../components/icons/WineGlassIcon';
import StarIcon from '../components/icons/StarIcon'; 

const MembershipPlansPage: React.FC = () => {
  const publicTiers = MOCK_SUBSCRIPTION_TIERS.filter(tier => !tier.isInviteOnly);

  return (
    <div className="bg-ice-white py-12 md:py-16 animate-fadeIn">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title={`Nossos Planos de Assinatura ${APP_NAME}`}
          subtitle={`Escolha a experiência ${APP_NAME} que mais ressoa com sua paixão pelo vinho. Cada plano é uma porta de entrada para um mundo de descobertas sensoriais e conhecimento aprofundado, curado por especialistas.`}
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">
          {publicTiers.map((tier: SubscriptionTier, index: number) => (
            <div 
              key={tier.id} 
              id={tier.id}
              className={`bg-light-warm-grey p-6 sm:p-8 rounded-xl shadow-2xl flex flex-col transform hover:scale-[1.02] transition-transform duration-300 ease-out relative border-2
                          ${tier.isPopular ? 'border-gold-accent ring-2 ring-gold-accent/30' : 'border-transparent hover:border-gold-accent/30'}
                         `}
            >
              {tier.isPopular && (
                  <div className={`absolute -top-3.5 left-1/2 transform -translate-x-1/2 bg-gold-accent text-ice-white text-xs font-semibold px-4 py-1.5 rounded-full shadow-lg z-10 font-sans`}>
                      MAIS POPULAR
                  </div>
              )}
              <div className="text-center mb-6">
                { tier.id === 'tier5' ? <StarIcon className={`w-14 h-14 mx-auto mb-3 ${GOLD_ACCENT_TEXT}`} filled={true}/> : <WineGlassIcon className={`w-14 h-14 mx-auto mb-3 ${index === 1 && tier.isPopular ? GOLD_ACCENT_TEXT : PRIMARY_COLOR_TEXT}`} />}
                <h3 className={`font-serif text-3xl sm:text-4xl ${PRIMARY_COLOR_TEXT} mb-2 tracking-tight`}>{tier.name}</h3>
                <p className="text-gray-600 text-sm mb-3 h-10 font-sans">{tier.tagline}</p>
              </div>
              
              <div className="text-center mb-6">
                  <p className="text-4xl sm:text-5xl font-bold text-charcoal-gray mb-1 font-sans">R$ {tier.pricePerMonth}<span className="text-lg font-normal text-gray-500">/mês</span></p>
                  <p className="text-sm text-gray-600 font-sans">{tier.bottleCountDescription}</p>
                  {tier.wineValueRange && <p className="text-xs text-gray-500 mt-1 font-sans">({tier.wineValueRange})</p>}
              </div>

              <p className="text-charcoal-gray text-sm mb-6 text-center min-h-[8rem] sm:min-h-[9rem] leading-relaxed font-sans">{tier.curationConcept}</p>
              
              <div className="mb-8 flex-grow">
                <h4 className="font-semibold text-charcoal-gray mb-3 text-sm uppercase tracking-wider font-sans">Benefícios Incluídos:</h4>
                <ul className="space-y-2.5 text-sm text-gray-700 font-sans">
                  {tier.benefits.general.map((benefit, idx) => (
                    <li key={`gen-${tier.id}-${idx}`} className="flex items-start">
                      <svg className={`w-5 h-5 mr-2.5 mt-0.5 flex-shrink-0 ${GOLD_ACCENT_TEXT}`} fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                      </svg>
                      {benefit}
                    </li>
                  ))}
                   <li className="flex items-start">
                        <svg className={`w-5 h-5 mr-2.5 mt-0.5 flex-shrink-0 ${GOLD_ACCENT_TEXT}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        {tier.benefits.cellarAccess}
                    </li>
                    <li className="flex items-start">
                        <svg className={`w-5 h-5 mr-2.5 mt-0.5 flex-shrink-0 ${GOLD_ACCENT_TEXT}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>
                        {tier.benefits.journalAccess}
                    </li>
                     {tier.benefits.gastronomyPerks && <li className="flex items-start"><svg className={`w-5 h-5 mr-2.5 mt-0.5 flex-shrink-0 ${GOLD_ACCENT_TEXT}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>{tier.benefits.gastronomyPerks}</li>}
                     {tier.benefits.exclusiveEvents && <li className="flex items-start"><svg className={`w-5 h-5 mr-2.5 mt-0.5 flex-shrink-0 ${GOLD_ACCENT_TEXT}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>{tier.benefits.exclusiveEvents}</li>}
                     {tier.benefits.personalization && <li className="flex items-start"><svg className={`w-5 h-5 mr-2.5 mt-0.5 flex-shrink-0 ${GOLD_ACCENT_TEXT}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>{tier.benefits.personalization}</li>}
                     {tier.benefits.conciergeServices && <li className="flex items-start"><svg className={`w-5 h-5 mr-2.5 mt-0.5 flex-shrink-0 ${GOLD_ACCENT_TEXT}`} fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path></svg>{tier.benefits.conciergeServices}</li>}
                </ul>
              </div>

              {tier.representativeWines && tier.representativeWines.length > 0 && (
                <div className="mb-8 mt-auto">
                  <p className="text-xs text-center text-gray-500 mb-3 font-sans">Vinhos representativos deste plano:</p>
                  <div className="flex space-x-3 justify-center items-center">
                    {tier.representativeWines.map((wine: Pick<Wine, 'id' | 'name' | 'imageUrl'>) => (
                      <Link key={wine.id} to={RoutePath.WineDetail.replace(':wineId', wine.id)} title={wine.name} className="block hover:opacity-80 transition-opacity">
                        <img src={wine.imageUrl} alt={wine.name} className="w-12 h-16 sm:w-14 sm:h-20 object-contain rounded border border-gray-300 shadow-sm"/>
                      </Link>
                    ))}
                  </div>
                   <p className="text-xs text-center text-gray-400 mt-2.5 font-sans">Clique para explorar os detalhes</p>
                </div>
              )}
              
              <Button variant={tier.isPopular ? 'primary' : 'outline'} size="lg" fullWidth className="mt-auto shadow-md hover:shadow-lg">
                Assinar {tier.name}
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center p-8 md:p-12 bg-light-warm-grey rounded-lg shadow-xl border border-gray-200">
          <h3 className="text-2xl md:text-3xl font-serif text-charcoal-gray mb-4">Ainda em dúvida sobre o plano ideal?</h3>
          <p className="text-gray-700 mb-8 max-w-xl mx-auto leading-relaxed font-sans">
            Nossa equipe de especialistas está pronta para ajudar você a encontrar o plano perfeito. Entre em contato conosco para uma consultoria personalizada e descubra qual jornada {APP_NAME} é ideal para você.
          </p>
          <Button to={RoutePath.Contact} variant="secondary" size="lg" className="shadow hover:shadow-md">Fale Conosco</Button>
        </div>
      </div>
    </div>
  );
};

export default MembershipPlansPage;