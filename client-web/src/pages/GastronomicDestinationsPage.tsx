
import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import SectionTitle from '../components/SectionTitle';
import { MOCK_RESTAURANTS, MOCK_WINES, APP_NAME } from '../constants';
import { Restaurant, RoutePath } from '../types';
import Button from '../components/Button';
import StarIcon from '../components/icons/StarIcon';
import MapPinIcon from '../components/icons/MapPinIcon';
import ChevronDownIcon from '../components/icons/ChevronDownIcon';
import Modal from '../components/Modal';

const GastronomicDestinationsPage: React.FC = () => {
  const [selectedCity, setSelectedCity] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedMichelin, setSelectedMichelin] = useState('');
  const [hasMemberBenefit, setHasMemberBenefit] = useState(false);
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);

  const cities = useMemo(() => Array.from(new Set(MOCK_RESTAURANTS.map(r => r.city))).sort(), []);
  const countries = useMemo(() => Array.from(new Set(MOCK_RESTAURANTS.map(r => r.country))).sort(), []);
  const michelinOptions = ['1', '2', '3'];

  const clearAllFilters = () => {
    setSelectedCity('');
    setSelectedCountry('');
    setSelectedMichelin('');
    setHasMemberBenefit(false);
  };

  const filteredRestaurants = useMemo(() => {
    return MOCK_RESTAURANTS.filter(restaurant => {
      const matchesCity = selectedCity ? restaurant.city === selectedCity : true;
      const matchesCountry = selectedCountry ? restaurant.country === selectedCountry : true;
      const matchesMichelin = selectedMichelin ? restaurant.michelinStars === parseInt(selectedMichelin) : true;
      const matchesBenefit = hasMemberBenefit ? !!restaurant.memberBenefit : true;
      return matchesCity && matchesCountry && matchesMichelin && matchesBenefit;
    }).sort((a,b) => a.name.localeCompare(b.name));
  }, [selectedCity, selectedCountry, selectedMichelin, hasMemberBenefit]);
  
  const FilterSelect: React.FC<{id: string; label: string; value: string; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; options: {value: string; label: string}[]; defaultOptionLabel: string; className?: string}> = 
  ({id, label, value, onChange, options, defaultOptionLabel, className = ""}) => (
    <div className={className}>
      <label htmlFor={id} className="block text-xs font-medium text-gray-500 mb-1.5 font-sans">
        {label}
      </label>
      <div className="relative">
        <select
          id={id}
          value={value}
          onChange={onChange}
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-gold-accent/50 focus:border-gold-accent appearance-none bg-ice-white pr-10 text-sm text-charcoal-gray font-sans"
        >
          <option value="">{defaultOptionLabel}</option>
          {options.map(opt => <option key={opt.value} value={opt.value}>{opt.label}</option>)}
        </select>
        <ChevronDownIcon className="absolute right-3.5 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none"/>
      </div>
    </div>
  );

  const renderFilterControls = (isModal: boolean = false) => (
    <>
      <FilterSelect id={isModal ? "city-modal" : "city"} label="Cidade" value={selectedCity} onChange={e => setSelectedCity(e.target.value)} options={cities.map(c => ({value: c, label: c}))} defaultOptionLabel="Todas as Cidades" />
      <FilterSelect id={isModal ? "country-modal" : "country"} label="País" value={selectedCountry} onChange={e => setSelectedCountry(e.target.value)} options={countries.map(c => ({value: c, label: c}))} defaultOptionLabel="Todos os Países" />
      <FilterSelect id={isModal ? "michelin-modal" : "michelin"} label="Estrelas Michelin" value={selectedMichelin} onChange={e => setSelectedMichelin(e.target.value)} options={michelinOptions.map(m => ({value: m, label: `${m} Estrela(s)`}))} defaultOptionLabel="Todas as Estrelas" />
      <div className={isModal ? "" : "lg:col-span-1"}>
          <label className="block text-xs font-medium text-gray-500 mb-1.5 font-sans">Benefícios</label>
          <label htmlFor={isModal ? "memberBenefit-modal" : "memberBenefit"} className="flex items-center space-x-2 cursor-pointer p-3 border border-gray-300 rounded-md shadow-sm bg-ice-white h-[50px] hover:border-gold-accent/50">
              <input type="checkbox" id={isModal ? "memberBenefit-modal" : "memberBenefit"} checked={hasMemberBenefit} onChange={e => setHasMemberBenefit(e.target.checked)} className="h-4 w-4 text-burgundy-accent border-gray-300 rounded focus:ring-gold-accent"/>
              <span className="text-sm text-charcoal-gray font-sans">Apenas com Benefícios {APP_NAME}</span>
          </label>
      </div>
    </>
  );


  return (
    <div className="bg-ice-white py-12 md:py-16 animate-fadeIn">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Tavole del Gusto" 
          subtitle={`Celebre a união sublime entre vinhos excepcionais ${APP_NAME} e a alta gastronomia. Explore nossos restaurantes parceiros, onde a arte de harmonizar alcança novos patamares de sofisticação.`}
        />

        <div className="lg:hidden mb-6 text-center">
          <Button 
            onClick={() => setIsMobileFilterOpen(true)} 
            variant="primary" 
            size="md"
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096V19.5a.75.75 0 01-.75.75h-15a.75.75 0 01-.75-.75V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3zM12 12.75c-2.67 0-5.183-.05-7.5-.15V18h15v-5.4c-2.317.1-4.83.15-7.5.15z" /></svg>}
          >
            Filtrar Destinos
          </Button>
        </div>

        <div className="mb-10 md:mb-12 p-6 bg-light-warm-grey rounded-lg shadow-lg hidden lg:block">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-6 gap-y-5 items-end">
                {renderFilterControls(false)}
                 <button 
                    onClick={clearAllFilters}
                    className="col-span-1 p-3 border border-gray-300 rounded-md shadow-sm bg-ice-white text-sm text-charcoal-gray hover:bg-gray-50 transition-colors h-[50px] mt-auto"
                >
                    Limpar Filtros
                </button>
            </div>
        </div>

        <Modal 
          isOpen={isMobileFilterOpen} 
          onClose={() => setIsMobileFilterOpen(false)} 
          title="Filtrar Destinos Gastronômicos"
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

        {filteredRestaurants.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
            {filteredRestaurants.map((restaurant: Restaurant, index: number) => (
              <div key={restaurant.id} id={restaurant.id} className="bg-light-warm-grey rounded-xl shadow-xl overflow-hidden flex flex-col group transition-all duration-300 hover:shadow-2xl border border-transparent hover:border-gold-accent/40 animate-subtleFadeInUp" style={{ animationDelay: `${index * 0.05}s`}}>
                <Link to={RoutePath.RestaurantDetail.replace(':restaurantId', restaurant.id)} className="block relative h-60 md:h-72 overflow-hidden">
                    <img 
                        src={restaurant.imageUrl} 
                        alt={restaurant.name} 
                        className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    {restaurant.michelinStars && (
                        <div className="absolute top-3 right-3 bg-ice-white/80 backdrop-blur-sm px-3 py-1.5 rounded-full flex items-center shadow-md">
                            {[...Array(restaurant.michelinStars)].map((_, i) => (
                                <StarIcon key={i} className="w-4 h-4 text-gold-accent" />
                            ))}
                            <span className="ml-1.5 text-xs font-semibold text-charcoal-gray font-sans">{restaurant.michelinStars} Michelin</span>
                        </div>
                    )}
                </Link>
                
                <div className="p-6 flex flex-col flex-grow">
                  <Link to={RoutePath.RestaurantDetail.replace(':restaurantId', restaurant.id)} className="block">
                    <h3 className="text-2xl lg:text-3xl font-serif font-semibold text-charcoal-gray mb-1.5 group-hover:text-burgundy-accent transition-colors tracking-tight">{restaurant.name}</h3>
                  </Link>
                  <p className="text-sm text-gray-500 mb-1.5 flex items-center font-sans">
                    <MapPinIcon className="w-4 h-4 mr-1.5 text-gray-400"/> {restaurant.city}, {restaurant.country}
                  </p>
                  {restaurant.chef && <p className="text-sm text-gray-600 mb-3 font-sans">Chef: <span className="font-medium">{restaurant.chef}</span></p>}
                  
                  <p className="text-sm text-gray-700 leading-relaxed mb-4 flex-grow min-h-[4.5rem] overflow-hidden text-ellipsis font-sans">{restaurant.philosophy}</p>
                  
                  {restaurant.memberBenefit && (
                    <p className="text-sm font-semibold text-forest-green-accent mb-3 bg-gold-accent/10 p-2.5 rounded-md inline-flex items-center font-sans shadow-sm">
                        <StarIcon className="w-4 h-4 inline mr-1.5 text-forest-green-accent flex-shrink-0"/> 
                        {restaurant.memberBenefit}
                    </p>
                  )}

                  {restaurant.eclatWinesServed && restaurant.eclatWinesServed.length > 0 && (
                    <div className="mb-4">
                      <h4 className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-1.5 font-sans">Vinhos {APP_NAME} na Carta:</h4>
                      <div className="flex flex-wrap gap-1.5">
                        {restaurant.eclatWinesServed.slice(0,2).map(wine => { 
                            const fullWine = MOCK_WINES.find(w => w.id === wine.id);
                            return (
                                <Link 
                                    key={wine.id} 
                                    to={`${RoutePath.CollezioneFrescobaldi}${RoutePath.WineDetail.replace(':wineId', wine.id).substring(1)}`}
                                    className="text-xs bg-ice-white border border-gray-300 text-charcoal-gray px-2.5 py-1 rounded-full hover:bg-burgundy-accent hover:text-ice-white hover:border-burgundy-accent transition-colors font-sans"
                                    title={fullWine?.name || wine.name}
                                >
                                    {fullWine?.name.substring(0,20) + (fullWine?.name.length ?? 0 > 20 ? '...' : '') || wine.name}
                                </Link>
                            );
                        })}
                         {restaurant.eclatWinesServed.length > 2 && <span className="text-xs text-gray-400 p-1 font-sans">e mais...</span>}
                      </div>
                    </div>
                  )}

                  {restaurant.interviewLink && restaurant.interviewLink !== "#" && !restaurant.interviewLink.includes(':articleId') && (
                     <Link to={restaurant.interviewLink} className="text-xs text-burgundy-accent hover:underline mb-3 block font-sans">Ler entrevista com o Chef &rarr;</Link>
                  )}

                  <div className="mt-auto pt-4 border-t border-gray-200">
                        <Button to={RoutePath.RestaurantDetail.replace(':restaurantId', restaurant.id)} variant="primary" size="sm" fullWidth className="shadow hover:shadow-md">
                            Ver Detalhes da Casa
                        </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
            <div className="text-center py-20">
              <MapPinIcon className="w-24 h-24 mx-auto text-gray-300 mb-8" />
              <p className="text-2xl md:text-3xl font-serif text-charcoal-gray mb-4">Nenhum destino encontrado</p>
              <p className="text-base text-gray-600 font-sans max-w-md mx-auto">
                Não encontramos restaurantes que correspondam aos seus critérios. Tente ajustar os filtros ou explore todos os nossos parceiros gastronômicos.
              </p>
            </div>
        )}


        <div className="mt-16 text-center p-8 md:p-12 bg-light-warm-grey rounded-lg shadow-xl border border-gray-200">
            <h3 className="text-2xl md:text-3xl font-serif text-charcoal-gray mb-4">Parcerias Exclusivas e Benefícios para Membros</h3>
            <p className="text-gray-700 mb-8 max-w-xl mx-auto leading-relaxed font-sans">
              Membros {APP_NAME} desfrutam de vantagens especiais em restaurantes selecionados, desde cortesias do chef a prioridade em reservas. Explore os detalhes em cada perfil e em nossas comunicações exclusivas para membros.
            </p>
            <Button to={RoutePath.MembershipPlans} variant="secondary" size="lg" className="shadow hover:shadow-md">Torne-se Membro {APP_NAME}</Button>
        </div>
      </div>
    </div>
  );
};

export default GastronomicDestinationsPage;