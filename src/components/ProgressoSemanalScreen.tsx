import React from 'react';
import { useApp } from '../AppContext';
import BottomNavBar from './BottomNavBar';

export const ProgressoSemanalScreen: React.FC = () => {
  const { navigate, tasks, toggleTask } = useApp();

  // Dynamically calculate completeness
  const completedCount = tasks.filter((t) => t.completed).length;
  const totalCount = tasks.length;

  return (
    <div className="min-h-screen bg-background pb-32 relative selection:bg-primary-container">
      {/* Background soft design elements */}
      <div className="fixed top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -z-10 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px] -z-10 translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

      {/* TopAppBar */}
      <header className="w-full top-0 sticky z-40 bg-surface-bright/95 backdrop-blur-md flex justify-between items-center h-16 px-6 md:px-12 border-b border-outline-variant/30">
        <div className="flex items-center gap-3">
          <img
            alt="VitalTask Logo"
            className="w-8 h-8 object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgpriaqigN8DDQN4g64Ip44Shge2txL2Z4v64OHIyZ6qXiavInK1EztsePLqi3rVQ0Pq12wSi_u5xttdZpGy7pJPUu7OCs-EqEDJhiwUreFnw9h6zfY3K8hj4TqyVlEU6r-ciYsOgQJBe1xF4G-W5rAkFJhW3KrxIUo3ungnzRjQ2sSYddnRmyqUnPoRtxO0NGJeYah7LabSs2iqXpiaO3im2IrqE6VsfF4ZNEKpn9fihSSNHNlxt8w48LOplqFh8DByB4JI9qPttu"
          />
          <h1 className="font-bold text-lg text-primary tracking-tight">VitalTask</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <button
            onClick={() => alert('Nenhuma notificação recente.')}
            className="material-symbols-outlined text-primary p-2 rounded-full hover:bg-surface-container transition-colors cursor-pointer"
          >
            notifications
          </button>
          
          <div
            onClick={() => navigate('Perfil Atualizado', 'none')}
            className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center overflow-hidden border-2 border-primary-fixed cursor-pointer transition-transform hover:scale-105 active:scale-95"
          >
            <img
              alt="User profile"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuArM1_7ZXyl-Gwxdm4_JT90ZSoLi47UPWqVaN4kK5b0qNKE-q_cZaptpV5l1M920AM6tIeVTBD0GIsP8MrDWAOHxjxdPQc1mIgBlyKd-1VPcsWm4fGgMpOtvrAU8XzWCDgPoY7Wy_aLE6DDTlvv4mHEWetGZ7-QFUclo5I7bQP0ddItrEXmD9rH7tdJq6yrXJOafIAJZ7Yn0Rjwc1ymTGFKzMH6RopPoSbVFbStFi-QKVSFpBkron7AaDkjcjPm__tvdH5q0PeMS9p2"
            />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-6 flex flex-col gap-6">
        
        {/* Screen Title Block */}
        <section className="mt-2">
          <h2 className="text-2xl font-bold text-primary mb-1">Progresso Semanal</h2>
          <p className="text-sm text-on-surface-variant font-sans">
            Sua jornada rumo ao foco máximo, dia após dia.
          </p>
        </section>

        {/* Calendar / Horizontal ribbon */}
        <section className="bg-surface-container-lowest rounded-xl p-5 border border-outline-variant/40 shadow-[0_2px_12px_rgba(0,0,0,0.02)]">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-semibold uppercase tracking-widest text-primary font-mono pl-1">
              Abril 2026
            </span>
            <div className="flex gap-2">
              <button className="material-symbols-outlined text-outline p-1 rounded-full hover:bg-surface-container transition-colors cursor-pointer select-none">
                chevron_left
              </button>
              <button className="material-symbols-outlined text-outline p-1 rounded-full hover:bg-surface-container transition-colors cursor-pointer select-none">
                chevron_right
              </button>
            </div>
          </div>
          
          <div className="flex justify-between items-center gap-2 py-1">
            {/* Ribbon calendar dates. Terça 21 is highlighted as active per mockup */}
            <div className="flex flex-col items-center min-w-[42px] p-2 rounded-lg text-on-surface-variant">
              <span className="text-[10px] font-bold">D</span>
              <span className="text-xs font-bold font-mono">19</span>
            </div>
            <div className="flex flex-col items-center min-w-[42px] p-2 rounded-lg text-on-surface-variant">
              <span className="text-[10px] font-bold">S</span>
              <span className="text-xs font-bold font-mono">20</span>
            </div>
            <div className="flex flex-col items-center min-w-[42px] p-2.5 rounded-xl bg-primary text-on-primary shadow-sm">
              <span className="text-[10px] font-bold">T</span>
              <span className="text-sm font-bold font-mono">21</span>
            </div>
            <div className="flex flex-col items-center min-w-[42px] p-2 rounded-lg text-on-surface-variant">
              <span className="text-[10px] font-bold">Q</span>
              <span className="text-xs font-bold font-mono">22</span>
            </div>
            <div className="flex flex-col items-center min-w-[42px] p-2 rounded-lg text-on-surface-variant">
              <span className="text-[10px] font-bold">Q</span>
              <span className="text-xs font-bold font-mono">23</span>
            </div>
            <div className="flex flex-col items-center min-w-[42px] p-2 rounded-lg text-on-surface-variant">
              <span className="text-[10px] font-bold">S</span>
              <span className="text-xs font-bold font-mono">24</span>
            </div>
            <div className="flex flex-col items-center min-w-[42px] p-2 rounded-lg text-on-surface-variant">
              <span className="text-[10px] font-bold">S</span>
              <span className="text-xs font-bold font-mono">25</span>
            </div>
          </div>
        </section>

        {/* Two-Column Bento Layout on Desktop, stack on Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Daily Checklist Tasks Block */}
          <section className="md:col-span-7 bg-surface-container-lowest rounded-xl p-5 border border-outline-variant/40 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-lg font-bold text-primary font-sans">Tarefas Diárias</h3>
              <span className="text-xs font-semibold text-on-primary-container px-3 py-1 bg-primary-container rounded-full shadow-sm font-mono">
                {completedCount}/{totalCount} Completed
              </span>
            </div>
            
            <div className="space-y-2">
              {tasks.length === 0 ? (
                <div className="text-center py-6 text-on-surface-variant/60 font-sans text-xs">
                  Sem afazeres cadastrados para hoje.
                </div>
              ) : (
                tasks.map((task) => (
                  <label
                    key={task.id}
                    className="flex items-center p-3 rounded-xl hover:bg-surface-container-low transition-all cursor-pointer group border border-transparent hover:border-outline-variant/20"
                  >
                    <input
                      type="checkbox"
                      checked={task.completed}
                      onChange={() => toggleTask(task.id)}
                      className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary transition-all cursor-pointer"
                    />
                    <span
                      className={`ml-4 text-sm font-medium transition-all ${
                        task.completed
                          ? 'text-on-surface-variant/60 line-through decoration-primary/40'
                          : 'text-on-surface'
                      }`}
                    >
                      {task.name}
                    </span>
                  </label>
                ))
              )}
            </div>
          </section>

          {/* Productivity Stats Chart Block */}
          <section className="md:col-span-5 bg-surface-container-lowest rounded-xl p-5 border border-outline-variant/40 shadow-[0_2px_12px_rgba(0,0,0,0.02)] flex flex-col justify-between">
            <h3 class="text-xs text-on-surface-variant/80 uppercase font-bold tracking-wider mb-2">Média Progresso Semanal</h3>
            
            {/* Real aesthetic bar chart mockup */}
            <div className="flex items-end justify-between gap-1.5 h-36 my-2 px-1">
              <div className="flex flex-col items-center flex-1">
                <div className="w-full bg-surface-container-high rounded-t-sm transition-all duration-300" style={{ height: '40%' }}></div>
                <span className="text-[10px] mt-1.5 font-bold text-outline">D</span>
              </div>
              <div className="flex flex-col items-center flex-1">
                <div className="w-full bg-surface-container-high rounded-t-sm transition-all duration-300" style={{ height: '65%' }}></div>
                <span className="text-[10px] mt-1.5 font-bold text-outline">S</span>
              </div>
              <div className="flex flex-col items-center flex-1">
                <div className="w-full bg-primary rounded-t-sm shadow-sm transition-all duration-300" style={{ height: '85%' }}></div>
                <span className="text-[10px] mt-1.5 font-bold text-primary font-mono">T</span>
              </div>
              <div className="flex flex-col items-center flex-1">
                <div className="w-full bg-surface-container-high rounded-t-sm transition-all duration-300" style={{ height: '30%' }}></div>
                <span className="text-[10px] mt-1.5 font-bold text-outline">Q</span>
              </div>
              <div className="flex flex-col items-center flex-1">
                <div className="w-full bg-surface-container-high rounded-t-sm transition-all duration-300" style={{ height: '70%' }}></div>
                <span className="text-[10px] mt-1.5 font-bold text-outline">Q</span>
              </div>
              <div className="flex flex-col items-center flex-1">
                <div className="w-full bg-surface-container-high rounded-t-sm transition-all duration-300" style={{ height: '90%' }}></div>
                <span className="text-[10px] mt-1.5 font-bold text-outline">S</span>
              </div>
              <div className="flex flex-col items-center flex-1">
                <div className="w-full bg-surface-container-high rounded-t-sm transition-all duration-300" style={{ height: '25%' }}></div>
                <span className="text-[10px] mt-1.5 font-bold text-outline">S</span>
              </div>
            </div>

            {/* Invariants / Status bar */}
            <div className="border-t border-outline-variant/30 pt-3 flex justify-between items-center text-xs">
              <div>
                <span className="text-on-surface-variant">Status:</span>{' '}
                <span className="font-bold text-primary">Acima da Média</span>
              </div>
              <div>
                <span className="text-on-surface-variant">Global:</span>{' '}
                <span className="font-sans font-bold text-primary">78%</span>
              </div>
            </div>
          </section>

        </div>

        {/* Centralised CTA "Criar Afazeres" button to navigation */}
        <div className="flex justify-center mt-4">
          <button
            onClick={() => navigate('Criar Afazer', 'slide_up')}
            className="px-8 py-3.5 bg-primary text-on-primary rounded-full shadow-md font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:scale-[1.03] active:scale-95 transition-all cursor-pointer group"
          >
            <span className="material-symbols-outlined text-[16px] leading-[0] font-bold">add_circle</span>
            Criar Afazeres
          </button>
        </div>

      </main>

      {/* Bottom NaBar - Active Tab is 'home' */}
      <BottomNavBar activeTab="home" />
    </div>
  );
};
export default ProgressoSemanalScreen;
