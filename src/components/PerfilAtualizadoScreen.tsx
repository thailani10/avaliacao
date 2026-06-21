import React from 'react';
import { useApp } from '../AppContext';
import BottomNavBar from './BottomNavBar';

export const PerfilAtualizadoScreen: React.FC = () => {
  const { navigate, user, updateUser } = useApp();

  const handleEditProfile = () => {
    const newName = prompt('Digite seu novo nome de usuário:', user.username);
    const newBio = prompt('Digite sua nova descrição:', user.bio);
    if (newName && newName.trim()) {
      updateUser(newName, newBio || '');
    }
  };

  return (
    <div className="min-h-screen bg-background pb-32 relative selection:bg-primary-container">
      {/* Background decorations */}
      <div className="fixed top-0 left-0 -z-10 w-96 h-96 bg-primary-container/10 blur-[100px] rounded-full pointer-events-none"></div>

      {/* TopAppBar */}
      <header className="w-full top-0 sticky z-40 bg-surface-bright/95 backdrop-blur-md flex justify-between items-center h-16 px-6 md:px-12 border-b border-outline-variant/30">
        <div className="flex items-center gap-2">
          <img
            alt="VitalTask Logo"
            className="w-8 h-8 object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2YBLzjN0Qn18nDyMIk1fVmR1bbfJ3k8stG0e3QYUT7Bt-t02IZOY8-p8JMdtnAFUUUPmntoxsG6b5lxGXiQeumcfOGnL1KXYA1Y5JtuWnRthID89jFFizzA2JVf2coKtOKwMjlWthQ1dZVEdGXmj_G4Bezxsd3AbnQmmUmDfF5ZiQfm_PQw0kyBo7hZU8_tKETSwNFqTl9_cIk_3o05Txt5eS_Ko0tDrOaXU5cLPmSmfNQUZjbJOUXCzcwKxYpFWw686lvMB7a0se"
          />
          <h1 className="font-bold text-lg text-primary tracking-tight">VitalTask</h1>
        </div>
        <div className="flex items-center">
          <button
            onClick={() => {
              if (confirm('Deseja realmente sair?')) {
                navigate('Login', 'push_back');
              }
            }}
            className="text-xs font-semibold text-outline hover:text-primary transition-colors flex items-center gap-1 cursor-pointer"
          >
            <span className="material-symbols-outlined text-sm leading-0">logout</span>
            Sair
          </button>
        </div>
      </header>

      {/* Profile Details Container */}
      <main className="w-full max-w-xl px-6 py-6 mx-auto flex flex-col gap-6">

        {/* Profile Card Info */}
        <section className="flex flex-col items-center text-center mt-2 bg-surface-container-lowest p-6 rounded-2xl border border-outline-variant/30 shadow-[0_4px_20px_rgba(62,92,82,0.02)]">
          <div className="relative group">
            <div className="w-28 h-28 md:w-32 md:h-32 rounded-full border-4 border-surface-container shadow-sm overflow-hidden mb-3 group-hover:scale-[1.02] transition-transform">
              <img
                alt="User profile"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuArM1_7ZXyl-Gwxdm4_JT90ZSoLi47UPWqVaN4kK5b0qNKE-q_cZaptpV5l1M920AM6tIeVTBD0GIsP8MrDWAOHxjxdPQc1mIgBlyKd-1VPcsWm4fGgMpOtvrAU8XzWCDgPoY7Wy_aLE6DDTlvv4mHEWetGZ7-QFUclo5I7bQP0ddItrEXmD9rH7tdJq6yrXJOafIAJZ7Yn0Rjwc1ymTGFKzMH6RopPoSbVFbStFi-QKVSFpBkron7AaDkjcjPm__tvdH5q0PeMS9p2"
              />
            </div>
            
            {/* Edit Profile photo pen indicator */}
            <button
              onClick={handleEditProfile}
              className="absolute bottom-3 right-1 bg-primary text-on-primary p-2 rounded-full shadow-md hover:scale-105 active:scale-90 transition-transform cursor-pointer flex items-center"
              title="Editar Perfil"
            >
              <span className="material-symbols-outlined text-[16px] leading-[0]">edit</span>
            </button>
          </div>

          <h2 className="text-xl font-bold text-primary font-sans mt-2">{user.username}</h2>
          
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              handleEditProfile();
            }}
            className="text-xs font-semibold text-error hover:underline mt-1 decoration-error block pl-1 tracking-wider uppercase"
          >
            Preencher Informações Pessoais
          </a>

          {/* Welcome Bio Card */}
          <div className="mt-4 bg-surface-container-low/60 rounded-xl p-4 border border-outline-variant/20 max-w-sm">
            <p className="text-xs leading-relaxed text-on-surface-variant italic font-medium font-sans">
              "{user.bio}"
            </p>
          </div>
        </section>

        {/* Action Tips Navigation row */}
        <section className="flex flex-col gap-4">
          <div className="flex items-center gap-2 pl-1 mb-1">
            <span className="material-symbols-outlined text-primary text-xl">self_improvement</span>
            <h3 className="text-base font-bold text-on-surface">Dicas para Melhorar o seu Dia</h3>
          </div>

          <div className="flex flex-col gap-3 font-sans">
            {/* Exercícios Button */}
            <button
              onClick={() => navigate('Dicas de Exercícios Expandida', 'push')}
              className="flex items-center justify-between p-5 bg-surface-container-lowest border border-outline-variant/40 rounded-xl hover:bg-surface-container-low transition-all group active:scale-[0.99] text-left cursor-pointer shadow-sm hover:border-primary/20"
            >
              <span className="font-semibold text-sm text-primary">Exercícios</span>
              <span className="material-symbols-outlined text-outline/50 group-hover:translate-x-1.5 transition-transform text-lg">
                chevron_right
              </span>
            </button>

            {/* Meditação Button */}
            <button
              onClick={() => navigate('Dicas de Meditação', 'push')}
              className="flex items-center justify-between p-5 bg-surface-container-lowest border border-outline-variant/40 rounded-xl hover:bg-surface-container-low transition-all group active:scale-[0.99] text-left cursor-pointer shadow-sm hover:border-primary/20"
            >
              <span className="font-semibold text-sm text-primary">Meditação</span>
              <span className="material-symbols-outlined text-outline/50 group-hover:translate-x-1.5 transition-transform text-lg">
                chevron_right
              </span>
            </button>

            {/* Estudo Button */}
            <button
              onClick={() => navigate('Dicas de Estudo', 'push')}
              className="flex items-center justify-between p-5 bg-surface-container-lowest border border-outline-variant/40 rounded-xl hover:bg-surface-container-low transition-all group active:scale-[0.99] text-left cursor-pointer shadow-sm hover:border-primary/20"
            >
              <span className="font-semibold text-sm text-primary">Estudo</span>
              <span className="material-symbols-outlined text-outline/50 group-hover:translate-x-1.5 transition-transform text-lg">
                chevron_right
              </span>
            </button>
            
            {/* Optional secret link / safety backup trigger for standard (non-expanded) tips screen */}
            <button
              onClick={() => navigate('Dicas de Exercícios', 'push')}
              className="text-[10px] text-outline hover:text-primary transition-all text-center uppercase tracking-widest pt-2 cursor-pointer font-bold hover:underline"
            >
              Visualizar Dicas de Exercícios (Básico)
            </button>
          </div>
        </section>

        {/* Aesthetic decoration image block */}
        <div className="relative h-44 rounded-2xl overflow-hidden shadow-sm border border-outline-variant/30 mt-2">
          <img
            alt="Relaxed lifestyle layout"
            className="w-full h-full object-cover brightness-[0.9] grayscale-[15%] transition-transform duration-500 hover:scale-[1.02]"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuD7l6VJgW0V0OhmIBAoMqXw-r7QmopgOKzNgNGmeEdJDJ3_O_N2J4-JPpLJqa1wDp8kPIon9kZDAbMwoUVWPU2VvcoUwsy2C3jbvERzH8dK1TQGomRYleKsO0iDe2t3xnzHRsbbuGEoEpBWkRbUzDxbLQhdoVFSzYatoBD-z-4JO6Cbyqw9ajs2ryWYNg_j1qrfVR8yHGMa2BuS222ANjrflfkgZJZ3mj2YEbTM3Um_mpLSOPMV_l8Vsi9iYI7Crf4a8Cw0CK8h0qTU"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent flex items-end p-5">
            <p className="text-white text-xs font-semibold tracking-wide">
              Seu refúgio de produtividade e bem-estar saudável.
            </p>
          </div>
        </div>

      </main>

      {/* Shared bottom navigation with profile tab active */}
      <BottomNavBar activeTab="profile" />
    </div>
  );
};
export default PerfilAtualizadoScreen;
