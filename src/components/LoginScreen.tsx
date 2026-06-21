import React, { useState } from 'react';
import { useApp } from '../AppContext';

export const LoginScreen: React.FC = () => {
  const { navigate } = useApp();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Navigate with push transition
    navigate('Progresso Semanal', 'push');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between relative bg-background overflow-hidden selection:bg-primary-container">
      {/* Decorative Blur Background circles */}
      <div className="absolute top-[10%] left-[5%] w-64 h-64 bg-tertiary-container/30 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-[20%] right-[5%] w-96 h-96 bg-primary-container/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>

      {/* Top Header Logo */}
      <header className="w-full flex justify-between items-center h-16 px-6 md:px-12 bg-surface-container-lowest/80 backdrop-blur-md z-10 border-b border-outline-variant/30">
        <div className="flex items-center gap-2">
          <img
            alt="VitalTask Logo"
            className="h-8 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2YBLzjN0Qn18nDyMIk1fVmR1bbfJ3k8stG0e3QYUT7Bt-t02IZOY8-p8JMdtnAFUUUPmntoxsG6b5lxGXiQeumcfOGnL1KXYA1Y5JtuWnRthID89jFFizzA2JVf2coKtOKwMjlWthQ1dZVEdGXmj_G4Bezxsd3AbnQmmUmDfF5ZiQfm_PQw0kyBo7hZU8_tKETSwNFqTl9_cIk_3o05Txt5eS_Ko0tDrOaXU5cLPmSmfNQUZjbJOUXCzcwKxYpFWw686lvMB7a0se"
          />
          <h1 className="font-semibold text-xl text-primary font-sans tracking-tight">VitalTask</h1>
        </div>
      </header>

      {/* Main Form Center */}
      <main className="flex-grow flex items-center justify-center p-6 z-10">
        <div className="w-full max-w-md bg-surface-container-lowest border border-outline-variant/30 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-2xl overflow-hidden p-8 border-l-4 border-primary">
          
          {/* Brand/Welcome Icon */}
          <div className="flex flex-col items-center mb-8">
            <div className="w-20 h-20 mb-3 animate-float">
              <img
                alt="VitalTask Avocado"
                className="w-full h-full object-contain"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2YBLzjN0Qn18nDyMIk1fVmR1bbfJ3k8stG0e3QYUT7Bt-t02IZOY8-p8JMdtnAFUUUPmntoxsG6b5lxGXiQeumcfOGnL1KXYA1Y5JtuWnRthID89jFFizzA2JVf2coKtOKwMjlWthQ1dZVEdGXmj_G4Bezxsd3AbnQmmUmDfF5ZiQfm_PQw0kyBo7hZU8_tKETSwNFqTl9_cIk_3o05Txt5eS_Ko0tDrOaXU5cLPmSmfNQUZjbJOUXCzcwKxYpFWw686lvMB7a0se"
              />
            </div>
            <h2 className="text-2xl font-bold text-primary">Login</h2>
            <p className="text-on-surface-variant text-sm mt-1 text-center leading-relaxed">
              Faça o seu login para iniciar sua<br />organização diária
            </p>
          </div>

          <form onSubmit={handleLoginSubmit} className="space-y-5">
            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider pl-1" htmlFor="username">
                Usuário
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-xl">
                  person
                </span>
                <input
                  id="username"
                  type="text"
                  required
                  placeholder="Seu nome de usuário"
                  className="w-full pl-11 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all text-sm text-on-surface placeholder:text-outline/40"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="block text-xs font-semibold text-on-surface-variant uppercase tracking-wider pl-1" htmlFor="password">
                Senha
              </label>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-xl">
                  lock
                </span>
                <input
                  id="password"
                  type="password"
                  required
                  placeholder="Sua senha secreta"
                  className="w-full pl-11 pr-4 py-3 bg-surface-container-low border border-outline-variant rounded-xl focus:ring-2 focus:ring-primary focus:border-primary focus:outline-none transition-all text-sm text-on-surface placeholder:text-outline/40"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>

            <div className="flex justify-end pr-1 text-xs text-secondary hover:text-primary transition-all duration-150">
              <a href="#" onClick={(e) => e.preventDefault()} className="hover:underline">Esqueci a Senha</a>
            </div>

            <div className="pt-2 space-y-4">
              <button
                type="submit"
                className="w-full py-3.5 bg-primary text-on-primary font-semibold text-sm rounded-xl shadow-md active:scale-[0.98] transition-all hover:bg-primary/95 cursor-pointer text-center"
              >
                Logar
              </button>

              <div className="flex items-center gap-4 py-1">
                <div className="h-[1px] flex-1 bg-outline-variant/40"></div>
                <span className="text-[10px] text-outline font-bold uppercase tracking-widest">ou</span>
                <div className="h-[1px] flex-1 bg-outline-variant/40"></div>
              </div>

              <button
                type="button"
                onClick={() => navigate('Progresso Semanal', 'push')}
                className="w-full py-3 bg-surface-container-lowest border border-outline-variant/60 flex items-center justify-center gap-3 text-sm text-on-surface-variant rounded-xl hover:bg-surface-containertransition-all cursor-pointer hover:bg-surface-container-low/40 active:scale-[0.98]"
              >
                <svg className="w-5 h-5 shrink-0" viewBox="0 0 24 24">
                  <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                  <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                  <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05"></path>
                  <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"></path>
                </svg>
                Entrar pelo Google
              </button>
            </div>

            <div className="text-center pt-3">
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('Cadastrar', 'push');
                }}
                className="text-xs font-semibold text-secondary hover:text-primary transition-colors underline decoration-secondary hover:decoration-primary underline-offset-4"
              >
                Cadastrar
              </a>
            </div>
          </form>

        </div>
      </main>

      {/* Footer copyright */}
      <footer className="py-4 text-center text-[10px] text-outline tracking-wider uppercase">
        VitalTask © 2026 - Conexão e Organização Dinâmica
      </footer>
    </div>
  );
};
export default LoginScreen;
