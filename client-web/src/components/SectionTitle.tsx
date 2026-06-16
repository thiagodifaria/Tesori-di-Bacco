import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
  titleClassName?: string;
  subtitleClassName?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ 
  title, 
  subtitle, 
  alignment = 'center', 
  className = '',
  titleClassName = '',
  subtitleClassName = ''
}) => {
  const textAlignClass = `text-${alignment}`;

  return (
    <div className={`mb-10 md:mb-16 ${textAlignClass} ${className}`}>
      <h2 className={`text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-charcoal-gray mb-3 md:mb-4 tracking-tight ${titleClassName}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`text-base md:text-lg text-gray-600 max-w-3xl ${alignment === 'center' ? 'mx-auto' : ''} px-2 leading-relaxed font-sans ${subtitleClassName}`}>
          {subtitle}
        </p>
      )}
      {alignment === 'center' && (
         <div className="flex justify-center mt-5 md:mt-6">
            <span className="inline-block w-20 md:w-24 h-[1.5px] bg-gold-accent rounded"></span>
        </div>
      )}
    </div>
  );
};

export default SectionTitle;
