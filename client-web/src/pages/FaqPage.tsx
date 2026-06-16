import React, { useState } from 'react';
import SectionTitle from '../components/SectionTitle';
import { MOCK_FAQS, PRIMARY_COLOR_TEXT, APP_NAME } from '../constants';
import { FAQItem } from '../types';
import ChevronDownIcon from '../components/icons/ChevronDownIcon';
import Button from '../components/Button';
import { RoutePath } from '../types';


const FaqItemComponent: React.FC<{ item: FAQItem; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-300/70 last:border-b-0">
      <button
        onClick={onClick}
        className="w-full flex justify-between items-center py-5 sm:py-6 px-1 text-left hover:bg-light-warm-grey/60 transition-colors duration-200 focus:outline-none focus:bg-light-warm-grey/60 rounded-t-md"
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
      >
        <h3 className="text-lg md:text-xl font-serif font-medium text-charcoal-gray tracking-tight">{item.question}</h3>
        <ChevronDownIcon 
            className={`w-6 h-6 text-burgundy-accent transform transition-transform duration-300 ${isOpen ? 'rotate-180' : ''} flex-shrink-0 ml-4`} 
        />
      </button>
      {isOpen && (
        <div 
            id={`faq-answer-${item.id}`} 
            className="px-1 pb-6 pt-2 text-gray-700 leading-relaxed animate-fadeIn text-base font-sans prose prose-p:my-2 prose-ul:my-2 prose-li:mb-1 prose-a:text-burgundy-accent hover:prose-a:underline"
            dangerouslySetInnerHTML={{ __html: item.answer }}
        >
        </div>
      )}
    </div>
  );
};

const FaqPage: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(MOCK_FAQS.length > 0 ? MOCK_FAQS[0].id : null);

  const handleToggle = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <div className="bg-ice-white py-12 md:py-16 animate-fadeIn">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title="Perguntas Frequentes" 
          subtitle={`Encontre respostas para as dúvidas mais comuns sobre o ${APP_NAME}, nossas assinaturas, serviços e a experiência exclusiva que oferecemos.`}
        />

        <div className="max-w-3xl mx-auto bg-ice-white p-6 sm:p-8 rounded-lg shadow-xl border border-gray-200">
          {MOCK_FAQS.map((faqItem: FAQItem) => (
            <FaqItemComponent 
                key={faqItem.id} 
                item={faqItem} 
                isOpen={openFaqId === faqItem.id}
                onClick={() => handleToggle(faqItem.id)}
            />
          ))}
        </div>

        <div className="mt-16 text-center p-8 md:p-12 bg-light-warm-grey rounded-lg shadow-xl border border-gray-200">
          <h3 className="text-2xl md:text-3xl font-serif text-charcoal-gray mb-4">Não encontrou sua resposta?</h3>
          <p className="text-gray-700 mb-8 max-w-xl mx-auto leading-relaxed font-sans">
            Nossa equipe de especialistas em vinhos e atendimento ao cliente está à disposição para ajudar com qualquer dúvida ou necessidade. Entre em contato conosco.
          </p>
          <Button to={RoutePath.Contact} variant="primary" size="lg" className="shadow hover:shadow-md">
            Fale Conosco
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FaqPage;
