
import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { APP_NAME, NAVIGATION_LINKS } from '../constants';
import { RoutePath } from '../types'; 
import WineGlassIcon from './icons/WineGlassIcon';
import { useAuth } from '../App'; 
import Button from './Button';

const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const auth = useAuth();
  const location = useLocation();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  return (
    <header className="bg-ice-white shadow-md sticky top-0 z-40 font-sans">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 md:h-24">
          <Link to="/" className="flex items-center text-charcoal-gray hover:text-burgundy-accent transition-colors duration-300">
            <WineGlassIcon className="h-8 w-8 md:h-9 md:w-9 mr-2.5 text-burgundy-accent" />
            <span className="font-serif text-2xl md:text-3xl font-semibold tracking-tight">{APP_NAME}</span>
          </Link>

          <nav className="hidden lg:flex items-center space-x-7">
            {NAVIGATION_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                className={({ isActive }) =>
                  `text-sm font-medium text-charcoal-gray hover:text-burgundy-accent transition-colors pb-1.5
                   ${isActive ? 'border-b-2 border-gold-accent text-burgundy-accent font-semibold' : 'border-b-2 border-transparent'}`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden lg:flex items-center space-x-3">
            {auth?.isLoggedIn ? (
              <>
                <Button to={RoutePath.MembersArea} variant="outline" size="sm">Minha Conta</Button>
                <Button onClick={auth.logout} variant="text" size="sm" className="!text-charcoal-gray hover:!text-burgundy-accent">Logout</Button>
              </>
            ) : (
              <>
                <div className="p-px bg-light-warm-grey hover:bg-gray-300 rounded-md">
                  <Button to={RoutePath.Login} variant="primary" size="sm">
                    Login
                  </Button>
                </div>
                <Button to={RoutePath.SignUp} variant="outline" size="sm">Inscrever-se</Button>
              </>
            )}
          </div>

          <div className="lg:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-charcoal-gray hover:text-burgundy-accent focus:outline-none p-2 -mr-2"
              aria-label={isMobileMenuOpen ? "Fechar menu" : "Abrir menu"}
              aria-expanded={isMobileMenuOpen}
            >
              <svg className="h-7 w-7" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                {isMobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-ice-white shadow-xl pb-4 z-30 border-t border-light-warm-grey">
          <nav className="flex flex-col space-y-1 px-4 pt-3">
            {NAVIGATION_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  `block px-3 py-2.5 rounded-md text-base font-medium text-charcoal-gray hover:bg-light-warm-grey hover:text-burgundy-accent
                   ${isActive ? 'bg-light-warm-grey text-burgundy-accent font-semibold' : ''}`
                }
              >
                {link.name}
              </NavLink>
            ))}
            <div className="border-t border-gray-200 mt-4 pt-4 space-y-2">
              {auth?.isLoggedIn ? (
                <>
                  <NavLink
                    to={RoutePath.MembersArea}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-2.5 rounded-md text-base font-medium text-charcoal-gray hover:bg-light-warm-grey hover:text-burgundy-accent
                       ${isActive ? 'bg-light-warm-grey text-burgundy-accent font-semibold' : ''}`
                    }
                  >
                    Minha Conta
                  </NavLink>
                  <button
                    onClick={() => { auth.logout(); setIsMobileMenuOpen(false); }}
                    className="w-full text-left block px-3 py-2.5 rounded-md text-base font-medium text-charcoal-gray hover:bg-light-warm-grey hover:text-burgundy-accent"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <NavLink
                    to={RoutePath.Login}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-2.5 rounded-md text-base font-medium text-charcoal-gray hover:bg-light-warm-grey hover:text-burgundy-accent
                       ${isActive ? 'bg-light-warm-grey text-burgundy-accent font-semibold' : ''}`
                    }
                  >
                    Login
                  </NavLink>
                  <NavLink
                    to={RoutePath.SignUp}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={({ isActive }) =>
                      `block px-3 py-2.5 rounded-md text-base font-medium text-charcoal-gray hover:bg-light-warm-grey hover:text-burgundy-accent
                       ${isActive ? 'bg-light-warm-grey text-burgundy-accent font-semibold' : ''}`
                    }
                  >
                    Inscrever-se
                  </NavLink>
                </>
              )}
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
