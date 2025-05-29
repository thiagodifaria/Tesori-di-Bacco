import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../App';
import { APP_NAME } from '../constants';
import { RoutePath } from '../types';
import Button from '../components/Button';
import WineGlassIcon from '../components/icons/WineGlassIcon';

const LoginPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (auth?.login(email, password)) {
      navigate(RoutePath.MembersArea, { replace: true });
    } else {
      setError('E-mail ou senha inválidos. Por favor, tente novamente.');
    }
  };

  return (
    <div className="min-h-[calc(100vh-16rem)] flex flex-col items-center justify-center bg-ice-white py-12 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <div className="max-w-md w-full space-y-8 bg-light-warm-grey p-8 sm:p-10 rounded-xl shadow-2xl border border-gray-200">
        <div className="text-center">
            <WineGlassIcon className="mx-auto h-12 w-auto text-burgundy-accent mb-4" />
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-charcoal-gray tracking-tight">
                Acessar sua Conta {APP_NAME}
            </h2>
            <p className="mt-3 text-sm text-gray-600 font-sans">
            Ou <Link to={RoutePath.SignUp} className="font-medium text-burgundy-accent hover:text-[#5a001d] hover:underline">crie sua conta gratuitamente</Link>
            </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                E-mail
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-charcoal-gray rounded-t-md focus:outline-none focus:ring-gold-accent focus:border-gold-accent sm:text-sm"
                placeholder="Seu e-mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Senha
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-charcoal-gray rounded-b-md focus:outline-none focus:ring-gold-accent focus:border-gold-accent sm:text-sm"
                placeholder="Sua senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && (
            <p className="text-sm text-red-600 text-center bg-red-100 p-2.5 rounded-md border border-red-300">{error}</p>
          )}

          <div className="flex items-center justify-between">
            <div className="flex items-center">
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-burgundy-accent hover:text-[#5a001d] hover:underline">
                Esqueceu sua senha?
              </a>
            </div>
          </div>

          <div>
            <Button type="submit" fullWidth variant="primary" size="lg" className="shadow-md hover:shadow-lg">
              Entrar
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;