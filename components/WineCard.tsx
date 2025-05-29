
import React from 'react';
import { Link } from 'react-router-dom';
import { Wine } from '../types';
import Button from './Button';
import { RoutePath } from '../types';

interface WineCardProps {
  wine: Pick<Wine, 'id' | 'name' | 'producer' | 'imageUrl' | 'grapeVarieties' | 'regionOfOrigin' | 'vintage' | 'wineStyle'>;
}

const WineCard: React.FC<WineCardProps> = ({ wine }) => {
  return (
    <div className="bg-ice-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl group flex flex-col h-full border border-gray-200 hover:border-gold-accent/40">
      <Link to={RoutePath.WineDetail.replace(':wineId', wine.id)} className="block">
        <div className="relative h-72 sm:h-80 md:h-96 w-full overflow-hidden bg-white">
          <img 
            src={wine.imageUrl} 
            alt={wine.name} 
            className="w-full h-full object-contain transform transition-transform duration-500 group-hover:scale-105"
          />
           <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
           {wine.wineStyle && (
            <span className="absolute top-3 right-3 bg-burgundy-accent/90 text-ice-white text-xs font-medium px-3 py-1.5 rounded-full backdrop-blur-sm shadow-sm">
              {wine.wineStyle}
            </span>
           )}
        </div>
      </Link>
      <div className="p-5 flex flex-col flex-grow">
        <Link to={RoutePath.WineDetail.replace(':wineId', wine.id)} className="block">
          <h3 className="text-xl font-serif font-semibold text-charcoal-gray mb-1 group-hover:text-burgundy-accent transition-colors duration-300 truncate" title={wine.name}>
            {wine.name}
          </h3>
        </Link>
        <p className="text-sm text-gray-500 mb-1 truncate font-sans" title={wine.producer.name}>{wine.producer.name}</p>
        <p className="text-xs text-gray-500 mb-3 font-sans">
          {wine.grapeVarieties.map(g => g.name).join(' / ')} &bull; {wine.regionOfOrigin.region}, {wine.vintage > 0 ? wine.vintage : 'N.V.'}
        </p>
        
        <div className="mt-auto pt-4">
          <Button to={RoutePath.WineDetail.replace(':wineId', wine.id)} variant="outline" size="sm" fullWidth>
            Explorar Detalhes
          </Button>
        </div>
      </div>
    </div>
  );
};

export default WineCard;