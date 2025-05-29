

import React, { useState, useEffect, createContext, useContext } from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import AgeVerificationModal from './components/AgeVerificationModal';
import HomePage from './pages/HomePage';
import AdegaEclatPage from './pages/AdegaEclatPage';
import WineDetailPage from './pages/WineDetailPage';
import MembershipPlansPage from './pages/MembershipPlansPage';
import GastronomicDestinationsPage from './pages/GastronomicDestinationsPage';
import RestaurantDetailPage from './pages/RestaurantDetailPage'; 
import JournalPage from './pages/JournalPage';
import ArticleDetailPage from './pages/ArticleDetailPage';
import FaqPage from './pages/FaqPage';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import MembersAreaPage from './pages/MembersAreaPage';
import ContactPage from './pages/ContactPage';
import TermsPage from './pages/TermsPage';
import PrivacyPolicyPage from './pages/PrivacyPolicyPage';
import { RoutePath, SubscriptionTier, User } from './types';
import { MOCK_USERS, MOCK_SUBSCRIPTION_TIERS, APP_NAME } from './constants';

interface AuthContextType {
  isLoggedIn: boolean;
  currentUser: User | null;
  currentTier: SubscriptionTier | null;
  login: (email: string, pass: string) => boolean;
  logout: () => void;
  signup: (name:string, email: string, pass: string) => boolean;
}

export const AuthContext = createContext<AuthContextType | null>(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
        window.scrollTo(0, 0);
    }, 50);
    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  const [isAgeVerified, setIsAgeVerified] = useState<boolean>(() => {
    const storedVerification = sessionStorage.getItem(`isAgeVerified_${APP_NAME.replace(/\s/g, '_')}`);
    return storedVerification === 'true';
  });

  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [currentTier, setCurrentTier] = useState<SubscriptionTier | null>(null);
  
  const [isTransitioning, setIsTransitioning] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsTransitioning(true);
    const timer = setTimeout(() => setIsTransitioning(false), 250); 
    return () => clearTimeout(timer);
  }, [location.pathname]);

  const handleAgeVerification = () => {
    setIsAgeVerified(true);
  };

  const login = (email: string, pass: string): boolean => {
    const user = MOCK_USERS.find(u => u.email.toLowerCase() === email.toLowerCase() && u.password === pass);
    if (user) {
      setIsLoggedIn(true);
      setCurrentUser(user);
      const tier = MOCK_SUBSCRIPTION_TIERS.find(t => t.id === user.tierId);
      setCurrentTier(tier || null);
      localStorage.setItem(`isLoggedIn_${APP_NAME.replace(/\s/g, '_')}`, 'true'); 
      localStorage.setItem(`currentUser_${APP_NAME.replace(/\s/g, '_')}`, JSON.stringify(user));
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsLoggedIn(false);
    setCurrentUser(null);
    setCurrentTier(null);
    localStorage.removeItem(`isLoggedIn_${APP_NAME.replace(/\s/g, '_')}`);
    localStorage.removeItem(`currentUser_${APP_NAME.replace(/\s/g, '_')}`);
  };
  
  const signup = (name: string, email: string, pass: string): boolean => {
    const existingUser = MOCK_USERS.find(u => u.email.toLowerCase() === email.toLowerCase());
    if (existingUser) return false; 

    const newUser: User = { 
      id: `user${MOCK_USERS.length + 1}`, 
      name, 
      email, 
      password: pass, 
      tierId: 'tier1', 
      address: 'Rua Fictícia Exemplo, 123, Cidade Exemplo, Estado Exemplo',
      paymentMethod: `**** **** **** ${Math.floor(1000 + Math.random() * 9000)}`
    };
    
    MOCK_USERS.push(newUser);
    
    setIsLoggedIn(true);
    setCurrentUser(newUser);
    const tier = MOCK_SUBSCRIPTION_TIERS.find(t => t.id === newUser.tierId);
    setCurrentTier(tier || null);
    localStorage.setItem(`isLoggedIn_${APP_NAME.replace(/\s/g, '_')}`, 'true');
    localStorage.setItem(`currentUser_${APP_NAME.replace(/\s/g, '_')}`, JSON.stringify(newUser));
    return true;
  };


  useEffect(() => {
    const storedLoginStatus = localStorage.getItem(`isLoggedIn_${APP_NAME.replace(/\s/g, '_')}`);
    const storedUser = localStorage.getItem(`currentUser_${APP_NAME.replace(/\s/g, '_')}`);
    if (storedLoginStatus === 'true' && storedUser) {
      try {
        const user: User = JSON.parse(storedUser);
        const validUser = MOCK_USERS.find(u => u.id === user.id && u.email === user.email);
        if (validUser) {
            setIsLoggedIn(true);
            setCurrentUser(validUser);
            const tier = MOCK_SUBSCRIPTION_TIERS.find(t => t.id === validUser.tierId);
            setCurrentTier(tier || null);
        } else {
            logout();
        }
      } catch (error) {
        console.error("Error parsing stored user data:", error);
        logout(); 
      }
    }
  }, []);


  if (!isAgeVerified) {
    return <AgeVerificationModal isOpen={!isAgeVerified} onVerify={handleAgeVerification} />;
  }

  return (
    <AuthContext.Provider value={{ isLoggedIn, currentUser, currentTier, login, logout, signup }}>
      <div className="flex flex-col min-h-screen bg-ice-white text-charcoal-gray font-sans">
        <Header />
        <ScrollToTop />
        <main className={`flex-grow transition-opacity duration-300 ease-in-out ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <Routes>
            <Route path={RoutePath.Home} element={<HomePage />} />
            <Route path={RoutePath.CollezioneFrescobaldi} element={<AdegaEclatPage />} />
            <Route path={RoutePath.WineDetail} element={<WineDetailPage />} />
            <Route path={RoutePath.MembershipPlans} element={<MembershipPlansPage />} />
            <Route path={RoutePath.TavoleDelGusto} element={<GastronomicDestinationsPage />} />
            <Route path={RoutePath.RestaurantDetail} element={<RestaurantDetailPage />} /> 
            <Route path={RoutePath.DiarioDelSommelier} element={<JournalPage />} />
            <Route path={RoutePath.ArticleDetail} element={<ArticleDetailPage />} />
            <Route path={RoutePath.FAQ} element={<FaqPage />} />
            <Route path={RoutePath.Login} element={isLoggedIn ? <Navigate to={RoutePath.MembersArea} replace /> : <LoginPage />} />
            <Route path={RoutePath.SignUp} element={isLoggedIn ? <Navigate to={RoutePath.MembersArea} replace /> : <SignUpPage />} />
            <Route path={RoutePath.MembersArea} element={isLoggedIn ? <MembersAreaPage /> : <Navigate to={RoutePath.Login} replace />} />
            <Route path={RoutePath.Contact} element={<ContactPage />} />
            <Route path={RoutePath.TermsAndConditions} element={<TermsPage />} />
            <Route path={RoutePath.PrivacyPolicy} element={<PrivacyPolicyPage />} />
            <Route path={RoutePath.AboutUs} element={<FaqPage />} /> 
            <Route path="*" element={<Navigate to={RoutePath.Home} replace />} /> 
          </Routes>
        </main>
        <Footer />
      </div>
    </AuthContext.Provider>
  );
};

export default App;
