import React, { useState } from 'react';
import { useApp } from '../AppContext';
import BottomNavBar from './BottomNavBar';

interface Exercise {
  name: string;
  desc: string;
  icon: string;
  color: string;
  checked: boolean;
}

export const DicasExerciciosScreen: React.FC = () => {
  const { navigate } = useApp();
  const [searchTerm, setSearchTerm] = useState('');
  const [exercises, setExercises] = useState<Exercise[]>([
    { name: "Agachamento", desc: "Mantenha a coluna reta e os calcanhares no chão.", icon: "fitness_center", color: "bg-primary-container text-on-primary-container", checked: true },
    { name: "Flexão de braço", desc: "Apoie bem as mãos e mantenha o core ativado.", icon: "exercise", color: "bg-secondary-container text-on-secondary-container", checked: true },
    { name: "Prancha abdominal", desc: "Mantenha o corpo alinhado por pelo menos 30 segundos.", icon: "timer", color: "bg-tertiary-container text-on-tertiary-container", checked: true },
    { name: "Polichinelo", desc: "Coordene braços e pernas em ritmo constante.", icon: "settings_accessibility", color: "bg-surface-container-highest text-primary", checked: false },
    { name: "Burpee", desc: "Movimento explosivo completo para queima calórica.", icon: "bolt", color: "bg-primary text-on-primary", checked: false },
    { name: "Ponte pélvica", desc: "Ótimo para glúteos e estabilização lombar.", icon: "accessibility_new", color: "bg-secondary text-on-secondary", checked: false },
    { name: "Abdominal grupado", desc: "Trabalhe a musculatura central com controle.", icon: "sports_gymnastics", color: "bg-tertiary text-on-tertiary", checked: false },
    { name: "Caminhada e Corrida", desc: "Mantenha um ritmo que eleve sua frequência cardíaca.", icon: "directions_run", color: "bg-surface-variant text-on-surface-variant", checked: false }
  ]);

  const handleToggleCheck = (index: number) => {
    setExercises((prev) =>
      prev.map((ex, idx) => (idx === index ? { ...ex, checked: !ex.checked } : ex))
    );
  };

  const filteredExercises = exercises.filter((ex) =>
    ex.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    ex.desc.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-background pb-32 relative selection:bg-primary-container">
      
      {/* TopAppBar */}
      <header className="w-full top-0 sticky z-50 bg-surface-bright/95 backdrop-blur-md flex justify-between items-center h-16 px-6 md:px-12 border-b border-outline-variant/30">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('Perfil Atualizado', 'push_back')}
            className="p-2 rounded-full hover:bg-surface-container transition-all active:scale-95 cursor-pointer flex items-center"
          >
            <span className="material-symbols-outlined text-primary">arrow_back</span>
          </button>
          
          <div className="flex items-center gap-2">
            <img
              alt="VitalTask Logo"
              className="w-7 h-7 object-contain"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD2YBLzjN0Qn18nDyMIk1fVmR1bbfJ3k8stG0e3QYUT7Bt-t02IZOY8-p8JMdtnAFUUUPmntoxsG6b5lxGXiQeumcfOGnL1KXYA1Y5JtuWnRthID89jFFizzA2JVf2coKtOKwMjlWthQ1dZVEdGXmj_G4Bezxsd3AbnQmmUmDfF5ZiQfm_PQw0kyBo7hZU8_tKETSwNFqTl9_cIk_3o05Txt5eS_Ko0tDrOaXU5cLPmSmfNQUZjbJOUXCzcwKxYpFWw686lvMB7a0se"
            />
            <span className="font-bold text-lg text-primary">VitalTask</span>
          </div>
        </div>

        <div className="hidden md:flex flex-grow max-w-sm mx-6">
          <div className="relative w-full">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-lg select-none">
              search
            </span>
            <input
              type="text"
              placeholder="Pesquisar exercícios..."
              className="w-full bg-surface-container-low border border-outline-variant/50 rounded-full py-1.5 pl-10 pr-4 text-xs focus:ring-1 focus:ring-primary focus:outline-none"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="w-10 h-10 rounded-full overflow-hidden border border-outline-variant">
          <img
            alt="User avatar"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuArM1_7ZXyl-Gwxdm4_JT90ZSoLi47UPWqVaN4kK5b0qNKE-q_cZaptpV5l1M920AM6tIeVTBD0GIsP8MrDWAOHxjxdPQc1mIgBlyKd-1VPcsWm4fGgMpOtvrAU8XzWCDgPoY7Wy_aLE6DDTlvv4mHEWetGZ7-QFUclo5I7bQP0ddItrEXmD9rH7tdJq6yrXJOafIAJZ7Yn0Rjwc1ymTGFKzMH6RopPoSbVFbStFi-QKVSFpBkron7AaDkjcjPm__tvdH5q0PeMS9p2"
          />
        </div>
      </header>

      {/* Main layout container */}
      <main className="w-full max-w-2xl px-6 py-6 mx-auto flex flex-col gap-6">

        {/* Mobile Search Input */}
        <div className="md:hidden">
          <div className="relative w-full">
            <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-outline text-lg select-none">
              search
            </span>
            <input
              type="text"
              placeholder="Pesquisar exercícios..."
              className="w-full bg-surface-container-lowest border border-outline-variant rounded-xl py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary focus:outline-none shadow-sm"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        {/* Header content description */}
        <section className="mb-2">
          <h2 className="text-2xl font-bold text-primary mb-1">Dicas de Exercício Físicos</h2>
          <p className="text-sm text-on-surface-variant leading-relaxed">
            Mantenha a consistência com estas orientações fundamentais para o seu bem-estar diário.
          </p>
        </section>

        {/* Exercises grid */}
        <section className="space-y-4">
          <div className="grid grid-cols-1 gap-3">
            {filteredExercises.length === 0 ? (
              <div className="text-center py-6 text-on-surface-variant/60 font-sans text-xs">
                Nenhum exercício encontrado para sua busca.
              </div>
            ) : (
              filteredExercises.map((ex, idx) => (
                <div
                  key={idx}
                  onClick={() => handleToggleCheck(idx)}
                  className="group flex items-center gap-4 p-4 bg-surface-container-lowest border border-outline-variant/35 rounded-2xl hover:shadow-[0_4px_16px_rgba(50,106,52,0.03)] hover:border-primary/20 transition-all cursor-pointer"
                >
                  <div className={`w-12 h-12 flex items-center justify-center rounded-xl shrink-0 ${ex.color}`}>
                    <span className="material-symbols-outlined text-xl">{ex.icon}</span>
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-semibold text-sm text-primary tracking-tight">{ex.name}</h3>
                    <p className="text-xs text-on-surface-variant mt-0.5 line-clamp-1 leading-relaxed pr-2">
                      {ex.desc}
                    </p>
                  </div>
                  <div className="flex items-center shrink-0">
                    <input
                      type="checkbox"
                      checked={ex.checked}
                      onChange={() => handleToggleCheck(idx)}
                      className="w-5 h-5 text-primary border-outline-variant rounded focus:ring-primary transition-colors cursor-pointer"
                    />
                  </div>
                </div>
              ))
            )}
          </div>
        </section>

        {/* Wellness illustration image rows per mockup */}
        <section className="flex flex-col gap-4 pt-4">
          <div className="relative h-44 rounded-2xl overflow-hidden shadow-sm border border-outline-variant/10 group">
            <img
              alt="Mantenha o foco"
              className="absolute inset-0 w-full h-full object-cover transition-all group-hover:scale-[1.02] duration-500 brightness-95"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuB1Jqh-bK4IRUJ7SKQzZBaEg-2pvlDfQ1Naw3dJJVr6296_AGPa0ysYy350PyMoc9FT3IShgBsI5k6D3EfR7vqXzmV2ZCnrgAewDMdMW-3ImzD4t-2BLg3x3ZfXNwNspk73EvFrBpGWC7uc4aLBMlvyNUhToQ3tbjWIi2e_nfV16TmxlUN851EYhnB0dXLoLO4l8OeUQmpDtZjaiO1qSBz8N9YBvo6lATqld5uqPn25eez879ZFs1InD9QFrR_VublSPu_EsdfGxqZP"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 to-transparent flex flex-col justify-end p-5">
              <span className="text-[10px] text-primary-container font-extrabold uppercase tracking-widest pl-0.5">Mantém o Foco</span>
              <h4 className="text-base font-bold text-on-primary">Saúde é uma jornada diária.</h4>
            </div>
          </div>
        </section>

      </main>

      {/* Shared bottom navigation menu - Home active */}
      <BottomNavBar activeTab="home" />
    </div>
  );
};
export default DicasExerciciosScreen;
