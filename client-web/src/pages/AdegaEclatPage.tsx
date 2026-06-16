
import React, { useState, useMemo } from 'react';
import SectionTitle from '../components/SectionTitle';
import WineCard from '../components/WineCard';
import { MOCK_WINES, MOCK_PRODUCERS, APP_NAME } from '../constants';
import { Wine, WineProducer } from '../types';
import ChevronDownIcon from '../components/icons/ChevronDownIcon';
import WineGlassIcon from '../components/icons/WineGlassIcon';
import Button from '../components/Button';
import Modal from '../components/Modal';

const AdegaEclatPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedRegion, setSelectedRegion] = useState('');
  const [selectedGrape, setSelectedGrape] = useState('');
  const [selectedProducer, setSelectedProducer] = useState('');
  const [selectedVintage, setSelectedVintage] = useState('');
  const [selectedPriceRange, setSelectedPriceRange] = useState('');
  const [selectedWineStyle, setSelectedWineStyle] = useState('');
  const [isMobileFilterOpen, setIsMobileFilterOpen] = useState(false);


  const regions = useMemo(() => Array.from(new Set(MOCK_WINES.map(wine => wine.regionOfOrigin.region))).sort(), []);
  const grapes = useMemo(() => Array.from(new Set(MOCK_WINES.flatMap(wine => wine.grapeVarieties.map(g => g.name)))).sort(), []);
  const producers = useMemo(() => MOCK_PRODUCERS.sort((a,b) => a.name.localeCompare(b.name)), []);
  const vintages = useMemo(() => Array.from(new Set(MOCK_WINES.filter(w => w.vintage > 0).map(wine => wine.vintage.toString()))).sort((a,b) => parseInt(b) - parseInt(a)), []);
  const priceRanges = useMemo(() => Array.from(new Set(MOCK_WINES.map(wine => wine.priceIndicator))).sort((a,b) => {
      const extractMinValue = (priceStr: string) => {
        const match = priceStr.match(/R\$(\d+)/);
        return match ? parseInt(match[1]) : Infinity;
      }
      const aMin = extractMinValue(a);
      const bMin = extractMinValue(b);
      return aMin - bMin;
  }), []);
  const wineStyles = useMemo(() => Array.from(new Set(MOCK_WINES.map(wine => wine.wineStyle).filter(Boolean) as string[])).sort(), []);


  const filteredWines = useMemo(() => {
    return MOCK_WINES.filter(wine => {
      const matchesSearchTerm = searchTerm ? (wine.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                                wine.producer.name.toLowerCase().includes(searchTerm.toLowerCase())) : true;
      const matchesRegion = selectedRegion ? wine.regionOfOrigin.region === selectedRegion : true;
      const matchesGrape = selectedGrape ? wine.grapeVarieties.some(g => g.name === selectedGrape) : true;
      const matchesProducer = selectedProducer ? wine.producer.id === selectedProducer : true;
      const matchesVintage = selectedVintage ? wine.vintage.toString() === selectedVintage : true;
      const matchesPriceRange = selectedPriceRange ? wine.priceIndicator === selectedPriceRange : true;
      const matchesWineStyle = selectedWineStyle ? wine.wineStyle === selectedWineStyle : true;
      return matchesSearchTerm && matchesRegion && matchesGrape && matchesProducer && matchesVintage && matchesPriceRange && matchesWineStyle;
    }).sort((a,b) => a.name.localeCompare(b.name)); 
  }, [searchTerm, selectedRegion, selectedGrape, selectedProducer, selectedVintage, selectedPriceRange, selectedWineStyle]);

  const clearAllFilters = () => {
    setSearchTerm(''); 
    setSelectedRegion(''); 
    setSelectedGrape(''); 
    setSelectedProducer(''); 
    setSelectedVintage(''); 
    setSelectedPriceRange(''); 
    setSelectedWineStyle('');
  };

  const FilterSelect: React.FC<{id: string; label: string; value: string; onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void; options: {value: string; label: string}[]; defaultOptionLabel: string; className?: string}> = 
  ({id, label, value, onChange, options, defaultOptionLabel, className=""}) => (
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

  const commonFilterControls = (isModal: boolean = false) => (
    <>
      <div>
        <label htmlFor={isModal ? "search-modal" : "search"} className="block text-xs font-medium text-gray-500 mb-1.5 font-sans">
          Buscar por nome ou produtor
        </label>
        <input
          type="text"
          id={isModal ? "search-modal" : "search"}
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Ex: Cabernet, Margaux..."
          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-gold-accent/50 focus:border-gold-accent transition-colors text-sm font-sans"
        />
      </div>
      <FilterSelect id={isModal ? "style-modal" : "style"} label="Estilo de Vinho" value={selectedWineStyle} onChange={(e) => setSelectedWineStyle(e.target.value)} options={wineStyles.map(s => ({value: s, label:s}))} defaultOptionLabel="Todos os Estilos" />
      <FilterSelect id={isModal ? "grape-modal" : "grape"} label="Tipo de Uva" value={selectedGrape} onChange={(e) => setSelectedGrape(e.target.value)} options={grapes.map(g => ({value: g, label:g}))} defaultOptionLabel="Todas as Uvas" />
      <FilterSelect id={isModal ? "region-modal" : "region"} label="Região" value={selectedRegion} onChange={(e) => setSelectedRegion(e.target.value)} options={regions.map(r => ({value: r, label:r}))} defaultOptionLabel="Todas as Regiões" />
      <FilterSelect id={isModal ? "producer-modal" : "producer"} label="Produtor" value={selectedProducer} onChange={(e) => setSelectedProducer(e.target.value)} options={producers.map(p => ({value: p.id, label:p.name}))} defaultOptionLabel="Todos os Produtores" />
      <FilterSelect id={isModal ? "vintage-modal" : "vintage"} label="Safra" value={selectedVintage} onChange={(e) => setSelectedVintage(e.target.value)} options={vintages.map(v => ({value: v, label:v}))} defaultOptionLabel="Todas as Safras" />
      <FilterSelect id={isModal ? "price-modal" : "price"} label="Faixa de Preço" value={selectedPriceRange} onChange={(e) => setSelectedPriceRange(e.target.value)} options={priceRanges.map(p => ({value: p, label:p}))} defaultOptionLabel="Todas as Faixas" />
    </>
  );


  return (
    <div className="bg-ice-white py-12 md:py-16 animate-fadeIn">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="La Collezione Frescobaldi" 
          subtitle={`Explore nossa curadoria de vinhos para ${APP_NAME}. Cada garrafa é uma descoberta, repleta de história, terroir e sabor. Utilize os filtros para refinar sua busca.`} 
        />

        <div className="lg:hidden mb-6 text-center">
          <Button 
            onClick={() => setIsMobileFilterOpen(true)} 
            variant="primary" 
            size="md"
            icon={<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5"><path strokeLinecap="round" strokeLinejoin="round" d="M12 3c2.755 0 5.455.232 8.083.678.533.09.917.556.917 1.096V19.5a.75.75 0 01-.75.75h-15a.75.75 0 01-.75-.75V4.774c0-.54.384-1.006.917-1.096A48.32 48.32 0 0112 3zM12 12.75c-2.67 0-5.183-.05-7.5-.15V18h15v-5.4c-2.317.1-4.83.15-7.5.15z" /></svg>}
          >
            Filtrar Vinhos
          </Button>
        </div>
        
        <div className="mb-10 md:mb-12 p-6 bg-light-warm-grey rounded-lg shadow-lg hidden lg:block">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-5 items-end">
            {commonFilterControls(false)}
             <button 
                onClick={clearAllFilters}
                className="col-span-1 sm:col-span-2 md:col-span-1 p-3 border border-gray-300 rounded-md shadow-sm bg-ice-white text-sm text-charcoal-gray hover:bg-gray-50 transition-colors h-[50px] mt-auto"
             >
                Limpar Filtros
             </button>
          </div>
        </div>

        <Modal 
          isOpen={isMobileFilterOpen} 
          onClose={() => setIsMobileFilterOpen(false)} 
          title="Filtrar Vinhos"
          size="md"
        >
          <div className="space-y-4 max-h-[70vh] overflow-y-auto p-1">
            {commonFilterControls(true)}
          </div>
          <div className="mt-6 pt-4 border-t border-gray-200 flex flex-col sm:flex-row sm:justify-end sm:space-x-3 space-y-3 sm:space-y-0">
            <Button onClick={clearAllFilters} variant="outline" size="md" className="w-full sm:w-auto">Limpar Filtros</Button>
            <Button onClick={() => setIsMobileFilterOpen(false)} variant="primary" size="md" className="w-full sm:w-auto">Aplicar Filtros</Button>
          </div>
        </Modal>


        {filteredWines.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
            {filteredWines.map((wine: Wine, index: number) => (
              <div className="animate-subtleFadeInUp" style={{ animationDelay: `${index * 0.05}s`}} key={wine.id}>
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
        ) : (
          <div className="text-center py-20">
            <WineGlassIcon className="w-24 h-24 mx-auto text-gray-300 mb-8" />
            <p className="text-2xl md:text-3xl font-serif text-charcoal-gray mb-4">Nenhum vinho encontrado</p>
            <p className="text-base text-gray-600 font-sans max-w-md mx-auto">
              Não encontramos vinhos que correspondam aos seus critérios de busca. Tente ajustar os filtros ou explore nossa coleção completa sem filtros.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdegaEclatPage;
