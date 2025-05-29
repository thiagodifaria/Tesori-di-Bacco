import React from 'react';
import { Link } from 'react-router-dom';
import { APP_NAME, APP_MOTTO, DRINK_RESPONSIBLY_MSG, SOCIAL_LINKS, NAVIGATION_LINKS, FOOTER_NAVIGATION_LINKS_SUPPORT, FOOTER_HQ_ADDRESS, APP_FULL_NAME } from '../constants';
import { RoutePath } from '../types';
import WineGlassIcon from './icons/WineGlassIcon';
import { useAuth } from '../App';

const Footer: React.FC = () => {
  const auth = useAuth();

  return (
    <footer className="bg-light-warm-grey text-charcoal-gray pt-16 pb-8 font-sans border-t border-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div className="md:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center mb-4 text-charcoal-gray hover:text-burgundy-accent transition-colors duration-300">
              <WineGlassIcon className="h-7 w-7 mr-2.5 text-burgundy-accent" />
              <span className="font-serif text-2xl font-semibold tracking-tight">{APP_NAME}</span>
            </Link>
            <p className="text-sm italic mb-3 text-gray-700">"{APP_MOTTO}"</p>
            <p className="text-xs text-gray-600">CNPJ: 00.000.000/0000-00</p>
            <p className="text-xs text-gray-600">{FOOTER_HQ_ADDRESS}</p>
          </div>

          <div>
            <h5 className="font-serif text-lg font-semibold text-charcoal-gray mb-4">Navegue</h5>
            <ul className="space-y-2.5">
              {NAVIGATION_LINKS.map((link) => ( 
                <li key={`footer-nav-${link.name}`}>
                  <Link to={link.path} className="text-sm text-gray-700 hover:text-burgundy-accent hover:underline transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h5 className="font-serif text-lg font-semibold text-charcoal-gray mb-4">Conta & Suporte</h5>
            <ul className="space-y-2.5">
              {auth?.isLoggedIn ? (
                <li><Link to={RoutePath.MembersArea} className="text-sm text-gray-700 hover:text-burgundy-accent hover:underline transition-colors">Minha Conta</Link></li>
              ) : (
                <>
                  <li><Link to={RoutePath.Login} className="text-sm text-gray-700 hover:text-burgundy-accent hover:underline transition-colors">Login</Link></li>
                  <li><Link to={RoutePath.SignUp} className="text-sm text-gray-700 hover:text-burgundy-accent hover:underline transition-colors">Inscrever-se</Link></li>
                </>
              )}
              {FOOTER_NAVIGATION_LINKS_SUPPORT.map(link => (
                 <li key={`footer-support-${link.name}`}>
                    <Link to={link.path} className="text-sm text-gray-700 hover:text-burgundy-accent hover:underline transition-colors">
                        {link.name}
                    </Link>
                 </li>
              ))}
            </ul>
          </div>
          
          <div className="lg:col-start-4">
            <h5 className="font-serif text-lg font-semibold text-charcoal-gray mb-4">Siga-nos</h5>
            <div className="flex space-x-4">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.name}
                  className="text-charcoal-gray hover:text-burgundy-accent transition-colors p-1"
                >
                  <span className="sr-only">{social.name}</span>
                   {social.name === 'Instagram' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4s1.791-4 4-4 4 1.79 4 4-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                   )}
                   {social.name === 'Facebook' && (
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                   )}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-gold-accent border-opacity-40 pt-8 mt-12 text-center">
          <p className="text-xs text-gray-700 mb-2">
            {DRINK_RESPONSIBLY_MSG}
          </p>
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} {APP_NAME}. Todos os direitos reservados. {APP_FULL_NAME} Comércio de Vinhos Ltda.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;