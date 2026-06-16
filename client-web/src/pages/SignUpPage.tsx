import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../App';
import { APP_NAME } from '../constants';
import { RoutePath } from '../types';
import Button from '../components/Button';
import WineGlassIcon from '../components/icons/WineGlassIcon';

const SignUpPage: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const auth = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
      return;
    }
    if (password.length < 6) {
        setError('A senha deve ter pelo menos 6 caracteres.');
        return;
    }

    if (auth?.signup(name, email, password)) {
      navigate(RoutePath.MembersArea); 
    } else {
      setError('Não foi possível criar a conta. O e-mail já pode estar em uso ou ocorreu um erro.');
    }
  };

  return (
    <div className="min-h-[calc(100vh-10rem)] flex flex-col items-center justify-center bg-ice-white py-12 px-4 sm:px-6 lg:px-8 animate-fadeIn">
      <div className="max-w-md w-full space-y-8 bg-light-warm-grey p-8 sm:p-10 rounded-xl shadow-2xl">
        <div className="text-center">
            <WineGlassIcon className="mx-auto h-12 w-auto text-burgundy-accent mb-3" />
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-charcoal-gray">
                Crie sua Conta {APP_NAME}
            </h2>
            <p className="mt-2 text-sm text-gray-600">
            Já é membro? <Link to={RoutePath.Login} className="font-medium text-burgundy-accent hover:text-[#5a001d]">Faça login</Link>
            </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="sr-only">Nome Completo</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-charcoal-gray focus:outline-none focus:ring-gold-accent focus:border-gold-accent sm:text-sm"
              placeholder="Seu nome completo"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="email-address" className="sr-only">E-mail</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autoComplete="email"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-charcoal-gray focus:outline-none focus:ring-gold-accent focus:border-gold-accent sm:text-sm"
              placeholder="Seu melhor e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="password" className="sr-only">Senha</label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="new-password"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-charcoal-gray focus:outline-none focus:ring-gold-accent focus:border-gold-accent sm:text-sm"
              placeholder="Crie uma senha (mín. 6 caracteres)"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="confirm-password" className="sr-only">Confirmar Senha</label>
            <input
              id="confirm-password"
              name="confirm-password"
              type="password"
              autoComplete="new-password"
              required
              className="appearance-none rounded-md relative block w-full px-3 py-3 border border-gray-300 placeholder-gray-500 text-charcoal-gray focus:outline-none focus:ring-gold-accent focus:border-gold-accent sm:text-sm"
              placeholder="Confirme sua senha"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </div>

          {error && (
            <p className="text-sm text-red-600 text-center">{error}</p>
          )}

          <div>
            <Button type="submit" fullWidth variant="primary" size="lg">
              Criar Conta e Explorar
            </Button>
          </div>
           <p className="text-center text-xs text-gray-500">
            Ao criar sua conta, você concorda com nossos <Link to="/termos" className="underline hover:text-burgundy-accent">Termos de Uso</Link> e <Link to="/privacidade" className="underline hover:text-burgundy-accent">Política de Privacidade</Link>.
          </p>
        </form>
      </div>
    </div>
  );
};

export default SignUpPage;