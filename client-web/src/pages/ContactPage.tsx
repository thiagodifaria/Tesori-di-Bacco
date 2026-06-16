import React from 'react';
import SectionTitle from '../components/SectionTitle';
import Button from '../components/Button';
import { APP_NAME, GOLD_ACCENT_TEXT, PRIMARY_COLOR_TEXT, CONTACT_HQ_ADDRESS_LINE1, CONTACT_HQ_ADDRESS_LINE2, CONTACT_HQ_ADDRESS_ZIP, CONTACT_OFFICE_ADDRESS_LINE1, CONTACT_OFFICE_ADDRESS_LINE2, CONTACT_OFFICE_ADDRESS_ZIP } from '../constants';
import MapPinIcon from '../components/icons/MapPinIcon';
import WineGlassIcon from '../components/icons/WineGlassIcon'; 

const ContactPage: React.FC = () => {
  return (
    <div className="bg-ice-white py-12 md:py-16 animate-fadeIn">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <SectionTitle 
          title={`Entre em Contato com ${APP_NAME}`}
          subtitle={`Adoraríamos ouvir de você! Seja para dúvidas sobre nossos planos, sugestões, parcerias ou apenas para compartilhar sua paixão pelo vinho.`}
        />

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 bg-light-warm-grey p-8 sm:p-10 rounded-xl shadow-2xl">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-serif text-charcoal-gray mb-3 flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-7 h-7 mr-3 ${PRIMARY_COLOR_TEXT}`}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                E-mail
              </h3>
              <p className="text-gray-700">Para dúvidas gerais e suporte ao cliente:</p>
              <a href="mailto:contato@eclatvins.com.br" className={`text-lg ${PRIMARY_COLOR_TEXT} hover:underline`}>contato@eclatvins.com.br</a>
              <p className="text-gray-700 mt-2">Para parcerias e imprensa:</p>
              <a href="mailto:parcerias@eclatvins.com.br" className={`text-lg ${PRIMARY_COLOR_TEXT} hover:underline`}>parcerias@eclatvins.com.br</a>
            </div>
            
            <div>
              <h3 className="text-2xl font-serif text-charcoal-gray mb-3 flex items-center">
                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className={`w-7 h-7 mr-3 ${PRIMARY_COLOR_TEXT}`}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                Telefone
              </h3>
              <p className="text-gray-700">Atendimento de Segunda a Sexta, das 9h às 18h:</p>
              <p className={`text-lg ${PRIMARY_COLOR_TEXT}`}>+55 (31) XXXX-XXXX</p>
            </div>

            <div>
              <h3 className="text-2xl font-serif text-charcoal-gray mb-3 flex items-center">
                <MapPinIcon className={`w-7 h-7 mr-3 ${PRIMARY_COLOR_TEXT}`} />
                Nossa Sede
              </h3>
              <p className="text-gray-700">{CONTACT_HQ_ADDRESS_LINE1}</p>
              <p className="text-gray-700">{CONTACT_HQ_ADDRESS_LINE2}</p>
              <p className="text-gray-700">{CONTACT_HQ_ADDRESS_ZIP}</p>
            </div>
             <div>
              <h3 className="text-2xl font-serif text-charcoal-gray mb-3 flex items-center">
                <MapPinIcon className={`w-7 h-7 mr-3 ${PRIMARY_COLOR_TEXT}`} />
                Escritório Belo Horizonte
              </h3>
              <p className="text-gray-700">{CONTACT_OFFICE_ADDRESS_LINE1}</p>
              <p className="text-gray-700">{CONTACT_OFFICE_ADDRESS_LINE2}</p>
              <p className="text-gray-700">{CONTACT_OFFICE_ADDRESS_ZIP}</p>
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-serif text-charcoal-gray mb-6">Envie-nos uma Mensagem</h3>
            <form action="#" method="POST" className="space-y-6">
              <div>
                <label htmlFor="full-name" className="block text-sm font-medium text-gray-700">Nome Completo</label>
                <input type="text" name="full-name" id="full-name" autoComplete="name" required 
                       className="mt-1 block w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-gold-accent focus:border-gold-accent sm:text-sm" />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">E-mail</label>
                <input type="email" name="email" id="email" autoComplete="email" required
                       className="mt-1 block w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-gold-accent focus:border-gold-accent sm:text-sm" />
              </div>
              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Assunto</label>
                <input type="text" name="subject" id="subject" required
                       className="mt-1 block w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-gold-accent focus:border-gold-accent sm:text-sm" />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700">Sua Mensagem</label>
                <textarea name="message" id="message" rows={5} required
                          className="mt-1 block w-full px-3 py-2.5 border border-gray-300 rounded-md shadow-sm focus:ring-gold-accent focus:border-gold-accent sm:text-sm"></textarea>
              </div>
              <div>
                <Button type="submit" variant="primary" size="lg" fullWidth className="shadow hover:shadow-md">
                  Enviar Mensagem
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;