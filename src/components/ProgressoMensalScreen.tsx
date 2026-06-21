import React from 'react';
import { useApp } from '../AppContext';
import BottomNavBar from './BottomNavBar';

export const ProgressoMensalScreen: React.FC = () => {
  const { navigate } = useApp();

  return (
    <div className="min-h-screen bg-background pb-32 relative selection:bg-primary-container">
      {/* Decorative atmospherics */}
      <div className="fixed top-0 right-0 w-[450px] h-[450px] bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

      {/* TopAppBar */}
      <header className="w-full top-0 sticky z-40 bg-surface-bright/95 backdrop-blur-md flex justify-between items-center h-16 px-6 md:px-12 border-b border-outline-variant/30">
        <div className="flex items-center gap-2">
          <img
            alt="VitalTask Logo"
            className="w-8 h-8 object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgpriaqigN8DDQN4g64Ip44Shge2txL2Z4v64OHIyZ6qXiavInK1EztsePLqi3rVQ0Pq12wSi_u5xttdZpGy7pJPUu7OCs-EqEDJhiwUreFnw9h6zfY3K8hj4TqyVlEU6r-ciYsOgQJBe1xF4G-W5rAkFJhW3KrxIUo3ungnzRjQ2sSYddnRmyqUnPoRtxO0NGJeYah7LabSs2iqXpiaO3im2IrqE6VsfF4ZNEKpn9fihSSNHNlxt8w48LOplqFh8DByB4JI9qPttu"
          />
          <h1 className="font-bold text-lg text-primary tracking-tight">VitalTask</h1>
        </div>
        <div className="flex items-center">
          <div
            onClick={() => navigate('Perfil Atualizado', 'none')}
            className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center overflow-hidden border border-outline-variant/60 cursor-pointer"
          >
            <img
              alt="User"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuArM1_7ZXyl-Gwxdm4_JT90ZSoLi47UPWqVaN4kK5b0qNKE-q_cZaptpV5l1M920AM6tIeVTBD0GIsP8MrDWAOHxjxdPQc1mIgBlyKd-1VPcsWm4fGgMpOtvrAU8XzWCDgPoY7Wy_aLE6DDTlvv4mHEWetGZ7-QFUclo5I7bQP0ddItrEXmD9rH7tdJq6yrXJOafIAJZ7Yn0Rjwc1ymTGFKzMH6RopPoSbVFbStFi-QKVSFpBkron7AaDkjcjPm__tvdH5q0PeMS9p2"
            />
          </div>
        </div>
      </header>

      {/* Main content grid */}
      <main className="w-full max-w-4xl px-6 py-6 mx-auto flex flex-col gap-6">
        
        {/* Title */}
        <section className="mt-2">
          <h2 className="text-2xl font-bold text-primary mb-1">Progresso Mensal</h2>
          <p className="text-sm text-on-surface-variant font-sans">
            Visualize o desempenho dos seus hábitos para o mês de Abril.
          </p>
        </section>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Pie Chart Card Column */}
          <div className="md:col-span-7 bg-surface-container-lowest rounded-2xl p-8 border border-outline-variant/40 shadow-[0_4px_20px_rgba(62,92,82,0.03)] flex flex-col items-center justify-center relative overflow-hidden">
            <div className="absolute -top-12 -right-12 w-32 h-32 bg-primary-container/10 rounded-full opacity-40 blur-2xl"></div>
            
            {/* Beautiful css conic pie chart as shown in preview CSS */}
            <div className="w-48 h-48 md:w-56 md:h-56 shadow-md border-4 border-surface-container-lowest rounded-full transition-transform hover:scale-105 duration-300 hover:rotate-2 cursor-pointer bg-[conic-gradient(#326a34_0%_45%,#46645a_45%_70%,#48654b_70%_85%,#a8e6a3_85%_100%)]"></div>

            {/* Labels description list */}
            <div className="grid grid-cols-2 gap-4 w-full mt-8 font-sans px-1">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#326a34] shrink-0"></span>
                <span className="text-xs font-semibold text-on-surface-variant">Arrumar a cama</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#46645a] shrink-0"></span>
                <span className="text-xs font-semibold text-on-surface-variant">Fazer exercício</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#48654b] shrink-0"></span>
                <span className="text-xs font-semibold text-on-surface-variant">Lavar a louça</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-[#a8e6a3] shrink-0"></span>
                <span className="text-xs font-semibold text-on-surface-variant">Estudar</span>
              </div>
            </div>
          </div>

          {/* Sidebar block column */}
          <div className="md:col-span-5 flex flex-col gap-6">
            
            {/* Top Habit Card */}
            <div className="bg-surface-container-lowest border border-outline-variant/40 rounded-xl p-5 shadow-sm flex items-start gap-4 hover:shadow-md transition-shadow">
              <div className="bg-secondary-container/30 p-2.5 rounded-lg text-secondary flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-lg leading-0">auto_awesome</span>
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-primary">Top Habit</h3>
                <p className="text-sm font-semibold text-on-surface mt-1 leading-snug">
                  Você completou 'Arrumar a cama' 28 vezes este mês!
                </p>
              </div>
            </div>

            {/* Legend card */}
            <div className="bg-surface-container/60 rounded-xl p-5 border border-outline-variant/20 flex flex-col gap-3">
              <h3 className="text-xs font-bold text-primary uppercase tracking-wider pl-0.5">Categorias Ativas</h3>
              <div className="flex flex-wrap gap-2 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-secondary-container text-on-secondary-container font-mono text-[10px] font-bold shadow-sm">
                  <span className="material-symbols-outlined text-xs leading-[0]">check_circle</span>
                  Arrumar a cama
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-mono text-[10px] font-bold">
                  <span className="material-symbols-outlined text-xs leading-[0]">check_circle</span>
                  Fazer exercício
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-mono text-[10px] font-bold">
                  <span className="material-symbols-outlined text-xs leading-[0]">check_circle</span>
                  Lavar a louça
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-mono text-[10px] font-bold">
                  <span className="material-symbols-outlined text-xs leading-[0]">check_circle</span>
                  Jogar Vôlei
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-high text-on-surface-variant font-mono text-[10px] font-bold">
                  <span className="material-symbols-outlined text-xs leading-[0]">check_circle</span>
                  Estudar
                </span>
              </div>
            </div>

            {/* Monthly Goal Card */}
            <div className="bg-primary text-on-primary rounded-xl p-5 shadow-sm relative overflow-hidden group">
              <div className="absolute right-0 bottom-0 opacity-10 transform translate-x-3 translate-y-3 group-hover:scale-105 transition-transform duration-300 pointer-events-none">
                <span className="material-symbols-outlined text-9xl">trending_up</span>
              </div>
              <h3 className="text-lg font-bold">Meta Alcançada</h3>
              <p className="text-primary-container text-xs mt-1 leading-relaxed">
                Você está em <span className="font-bold underline decoration-wavy">84%</span> da sua meta de produtividade mensal.
              </p>
              
              <div className="w-full bg-on-primary/20 h-2 rounded-full overflow-hidden mt-4">
                <div className="bg-primary-container h-full w-[84%] rounded-full shadow-inner"></div>
              </div>
            </div>

          </div>

        </div>

      </main>

      {/* FAB (lower right overlay) for Creating Task */}
      <div className="fixed bottom-24 right-5 z-40">
        <button
          onClick={() => navigate('Criar Afazer', 'slide_up')}
          className="bg-primary hover:bg-primary/95 text-on-primary w-14 h-14 rounded-2xl shadow-xl flex items-center justify-center transition-all duration-150 cursor-pointer active:scale-95 group"
          title="Criar Afazer"
        >
          <span className="material-symbols-outlined font-bold text-2xl group-hover:rotate-90 transition-transform">add</span>
        </button>
      </div>

      {/* Navigation bottom bar with Progress active */}
      <BottomNavBar activeTab="progress" />
    </div>
  );
};
export default ProgressoMensalScreen;
