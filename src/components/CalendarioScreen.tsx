import React from 'react';
import { useApp } from '../AppContext';
import BottomNavBar from './BottomNavBar';

export const CalendarioScreen: React.FC = () => {
  const { navigate, events } = useApp();

  return (
    <div className="min-h-screen bg-background pb-32 relative selection:bg-primary-container">
      {/* Background decorations */}
      <div className="fixed top-0 right-0 -z-10 w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-secondary-container/10 blur-[100px] rounded-full pointer-events-none"></div>

      {/* TopAppBar */}
      <header className="w-full top-0 sticky z-40 bg-surface-bright/95 backdrop-blur-md flex justify-between items-center h-16 p-6 border-b border-outline-variant/30">
        <div className="flex items-center gap-2">
          <img
            alt="VitalTask Logo"
            className="w-8 h-8 object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgpriaqigN8DDQN4g64Ip44Shge2txL2Z4v64OHIyZ6qXiavInK1EztsePLqi3rVQ0Pq12wSi_u5xttdZpGy7pJPUu7OCs-EqEDJhiwUreFnw9h6zfY3K8hj4TqyVlEU6r-ciYsOgQJBe1xF4G-W5rAkFJhW3KrxIUo3ungnzRjQ2sSYddnRmyqUnPoRtxO0NGJeYah7LabSs2iqXpiaO3im2IrqE6VsfF4ZNEKpn9fihSSNHNlxt8w48LOplqFh8DByB4JI9qPttu"
          />
          <h1 className="font-bold text-lg text-primary tracking-tight">VitalTask</h1>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="material-symbols-outlined text-on-surface-variant hover:bg-surface-container transition-colors p-2 rounded-full cursor-pointer">
            search
          </button>
          <div
            onClick={() => navigate('Perfil Atualizado', 'none')}
            className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant/60 cursor-pointer"
          >
            <img
              alt="Profile"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuArM1_7ZXyl-Gwxdm4_JT90ZSoLi47UPWqVaN4kK5b0qNKE-q_cZaptpV5l1M920AM6tIeVTBD0GIsP8MrDWAOHxjxdPQc1mIgBlyKd-1VPcsWm4fGgMpOtvrAU8XzWCDgPoY7Wy_aLE6DDTlvv4mHEWetGZ7-QFUclo5I7bQP0ddItrEXmD9rH7tdJq6yrXJOafIAJZ7Yn0Rjwc1ymTGFKzMH6RopPoSbVFbStFi-QKVSFpBkron7AaDkjcjPm__tvdH5q0PeMS9p2"
            />
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="w-full max-w-4xl px-6 py-6 mx-auto flex flex-col gap-6">
        
        {/* Title */}
        <div className="text-center md:text-left mt-2">
          <h2 className="text-2xl font-bold text-primary mb-1">Calendário</h2>
          <p className="text-sm text-on-surface-variant">Gerencie seu tempo e eventos mensais.</p>
        </div>

        {/* Visual Calendar Card */}
        <section className="bg-surface-container-lowest rounded-2xl border border-outline-variant/40 overflow-hidden shadow-[0_4px_20px_rgba(62,92,82,0.03)]">
          <div className="bg-primary text-on-primary py-3 px-6 flex justify-between items-center">
            <h3 className="text-base font-bold uppercase tracking-widest font-mono">ABRIL</h3>
            <div className="flex gap-2">
              <button className="material-symbols-outlined p-1 rounded-full hover:bg-on-primary/10 transition-all select-none">
                chevron_left
              </button>
              <button className="material-symbols-outlined p-1 rounded-full hover:bg-on-primary/10 transition-all select-none">
                chevron_right
              </button>
            </div>
          </div>
          
          <div className="p-4">
            {/* Weekdays Row header */}
            <div className="grid grid-cols-7 gap-y-2 text-center text-xs font-bold text-on-surface-variant mb-3 font-sans opacity-80 pt-1">
              <div>D</div><div>S</div><div>T</div><div>Q</div><div>Q</div><div>S</div><div>S</div>
            </div>
            
            {/* 35 element grid for April 2026 */}
            <div className="grid grid-cols-7 gap-y-2.5 font-mono text-sm font-semibold">
              <div className="text-center py-2 text-outline/30">29</div>
              <div className="text-center py-2 text-outline/30">30</div>
              <div className="text-center py-2 text-outline/30">31</div>
              <div className="text-center py-2 hover:bg-surface-container-low transition-colors rounded-lg cursor-pointer">1</div>
              <div className="text-center py-2 hover:bg-surface-container-low transition-colors rounded-lg cursor-pointer">2</div>
              {/* Day 3 is Paixão de Cristo */}
              <div className="text-center py-2 bg-secondary-container text-on-secondary-container rounded-lg font-bold relative group select-none">
                3
                <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-on-secondary-container rounded-full"></span>
              </div>
              <div className="text-center py-2 hover:bg-surface-container-low transition-colors rounded-lg cursor-pointer">4</div>
              {/* Day 5 is Domingo de Páscoa */}
              <div className="text-center py-2 bg-secondary-container text-on-secondary-container rounded-lg font-bold relative group select-none">
                5
                <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-on-secondary-container rounded-full"></span>
              </div>
              <div className="text-center py-2 hover:bg-surface-container-low transition-colors rounded-lg cursor-pointer">6</div>
              <div className="text-center py-2 hover:bg-surface-container-low transition-colors rounded-lg cursor-pointer">7</div>
              <div className="text-center py-2 hover:bg-surface-container-low transition-colors rounded-lg cursor-pointer">8</div>
              <div className="text-center py-2 hover:bg-surface-container-low transition-colors rounded-lg cursor-pointer">9</div>
              <div className="text-center py-2 hover:bg-surface-container-low transition-colors rounded-lg cursor-pointer">10</div>
              <div className="text-center py-2 hover:bg-surface-container-low transition-colors rounded-lg cursor-pointer">11</div>
              <div className="text-center py-2 hover:bg-surface-container-low transition-colors rounded-lg cursor-pointer">12</div>
              <div className="text-center py-2 hover:bg-surface-container-low transition-colors rounded-lg cursor-pointer">13</div>
              <div className="text-center py-2 hover:bg-surface-container-low transition-colors rounded-lg cursor-pointer">14</div>
              <div className="text-center py-2 hover:bg-surface-container-low transition-colors rounded-lg cursor-pointer">15</div>
              <div className="text-center py-2 hover:bg-surface-container-low transition-colors rounded-lg cursor-pointer">16</div>
              <div className="text-center py-2 hover:bg-surface-container-low transition-colors rounded-lg cursor-pointer">17</div>
              <div className="text-center py-2 hover:bg-surface-container-low transition-colors rounded-lg cursor-pointer">18</div>
              <div className="text-center py-2 hover:bg-surface-container-low transition-colors rounded-lg cursor-pointer">19</div>
              <div className="text-center py-2 hover:bg-surface-container-low transition-colors rounded-lg cursor-pointer">20</div>
              {/* Day 21 is Tiradentes */}
              <div className="text-center py-2 bg-secondary-container text-on-secondary-container rounded-lg font-bold relative group select-none">
                21
                <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-on-secondary-container rounded-full"></span>
              </div>
              <div className="text-center py-2 hover:bg-surface-container-low transition-colors rounded-lg cursor-pointer">22</div>
              <div className="text-center py-2 hover:bg-surface-container-low transition-colors rounded-lg cursor-pointer">23</div>
              <div className="text-center py-2 hover:bg-surface-container-low transition-colors rounded-lg cursor-pointer">24</div>
              <div className="text-center py-2 hover:bg-surface-container-low transition-colors rounded-lg cursor-pointer">25</div>
              <div className="text-center py-2 hover:bg-surface-container-low transition-colors rounded-lg cursor-pointer">26</div>
              <div className="text-center py-2 hover:bg-surface-container-low transition-colors rounded-lg cursor-pointer">27</div>
              <div className="text-center py-2 hover:bg-surface-container-low transition-colors rounded-lg cursor-pointer">28</div>
              <div className="text-center py-2 hover:bg-surface-container-low transition-colors rounded-lg cursor-pointer">29</div>
              <div className="text-center py-2 hover:bg-surface-container-low transition-colors rounded-lg cursor-pointer">30</div>
              <div className="text-center py-2 text-outline/30">1</div>
              <div className="text-center py-2 text-outline/30">2</div>
            </div>
          </div>
        </section>

        {/* Events listing */}
        <section className="space-y-4">
          <div className="flex items-center justify-between pl-1">
            <h3 className="text-base font-bold text-primary">Eventos do Mês</h3>
            <span className="text-[10px] font-bold text-secondary bg-[#e2f7e1] px-3 py-1 rounded-full uppercase tracking-wider font-mono">
              Abril 2026
            </span>
          </div>
          
          <div className="grid gap-3">
            {events.map((ev) => {
              const isHighlight = [3, 5, 21].includes(ev.day);
              return (
                <div
                  key={ev.id}
                  onClick={() => alert(`Detalhes do Evento: ${ev.name}\nDia: ${ev.day}\nHorário: ${ev.time}\nCategoria: ${ev.locationOrCategory}`)}
                  className="bg-surface-container-lowest p-4 rounded-xl flex items-center gap-4 hover:bg-surface-container-low/75 border border-outline-variant/30 shadow-[0_2px_10px_rgba(0,0,0,0.01)] transition-all cursor-pointer group"
                >
                  <div className="text-center min-w-[42px] border-r border-outline-variant/40 pr-3 shrink-0">
                    <p className={`text-xl font-bold leading-none font-mono ${isHighlight ? 'text-error' : 'text-primary'}`}>
                      {ev.day}
                    </p>
                    <p className="text-[10px] text-on-surface-variant font-bold uppercase tracking-wider mt-1">
                      {ev.day === 3 ? 'Qua' : ev.day === 5 ? 'Sex' : ev.day === 21 ? 'Dom' : 'Ter'}
                    </p>
                  </div>
                  
                  <div className="flex-grow">
                    <h4 className="text-sm font-semibold text-on-surface group-hover:text-primary transition-colors">
                      {ev.name}
                    </h4>
                    <p className="text-xs text-on-surface-variant font-medium flex items-center gap-1 mt-0.5">
                      <span className="material-symbols-outlined text-sm leading-0 opacity-70">
                        {ev.day === 3 ? 'location_on' : ev.day === 5 ? 'schedule' : 'flag'}
                      </span>
                      {ev.locationOrCategory}
                    </p>
                  </div>
                  
                  <span className="material-symbols-outlined text-outline/50 group-hover:opacity-100 transition-opacity">
                    chevron_right
                  </span>
                </div>
              );
            })}
          </div>
        </section>

      </main>

      {/* Floating Action Button for Calendar checks */}
      <div className="fixed bottom-24 right-5 z-40">
        <button
          onClick={() => navigate('Criar Evento', 'slide_up')}
          className="bg-primary text-on-primary w-14 h-14 rounded-2xl shadow-xl flex items-center justify-center transition-all duration-150 cursor-pointer active:scale-95 group"
          title="Criar Evento"
        >
          <span className="material-symbols-outlined text-2xl font-bold transition-transform group-hover:scale-110">add</span>
        </button>
      </div>

      {/* Bottom navigation with calendar active */}
      <BottomNavBar activeTab="calendar" />
    </div>
  );
};
export default CalendarioScreen;
