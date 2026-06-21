import React, { useState } from 'react';
import { useApp } from '../AppContext';
import BottomNavBar from './BottomNavBar';

export const CriarEventoScreen: React.FC = () => {
  const { navigate, events, addEvent } = useApp();
  const [eventName, setEventName] = useState('');
  const [eventDay, setEventDay] = useState(21);
  const [eventTime, setEventTime] = useState('08:00');
  const [alarm, setAlarm] = useState(true);
  const [category, setCategory] = useState('');

  const handleCreateEvent = (e: React.FormEvent) => {
    e.preventDefault();
    if (!eventName.trim()) {
      alert('Por favor, informe o nome do evento.');
      return;
    }
    if (eventDay < 1 || eventDay > 31) {
      alert('Por favor, informe um dia válido de 1 a 31.');
      return;
    }
    addEvent(eventName, eventDay, eventTime, alarm, category || 'Geral');
    alert('Evento criado com sucesso!');
    setEventName('');
    setEventDay(21);
    setEventTime('08:00');
    setAlarm(true);
    setCategory('');
  };

  return (
    <div className="min-h-screen bg-background pb-32 relative selection:bg-primary-container">
      {/* Background visual graphics */}
      <div className="fixed top-0 right-0 -z-10 w-[500px] h-[500px] bg-primary/10 blur-[100px] rounded-full pointer-events-none"></div>
      <div className="fixed bottom-0 left-0 -z-10 w-[400px] h-[400px] bg-secondary-container/10 blur-[100px] rounded-full pointer-events-none"></div>

      {/* TopAppBar */}
      <header className="w-full top-0 sticky z-40 bg-surface-bright/90 backdrop-blur-md flex justify-between items-center h-16 px-6 md:px-12 border-b border-outline-variant/30">
        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('Calendário', 'push_back')}
            className="p-2 rounded-full hover:bg-surface-container transition-colors active:scale-95 cursor-pointer flex items-center"
          >
            <span className="material-symbols-outlined text-primary">arrow_back</span>
          </button>
          <span className="font-semibold text-lg text-primary tracking-tight">Criar Evento</span>
        </div>

        <div className="flex items-center gap-2">
          <img
            alt="VitalTask Logo"
            className="h-8 w-auto object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgpriaqigN8DDQN4g64Ip44Shge2txL2Z4v64OHIyZ6qXiavInK1EztsePLqi3rVQ0Pq12wSi_u5xttdZpGy7pJPUu7OCs-EqEDJhiwUreFnw9h6zfY3K8hj4TqyVlEU6r-ciYsOgQJBe1xF4G-W5rAkFJhW3KrxIUo3ungnzRjQ2sSYddnRmyqUnPoRtxO0NGJeYah7LabSs2iqXpiaO3im2IrqE6VsfF4ZNEKpn9fihSSNHNlxt8w48LOplqFh8DByB4JI9qPttu"
          />
          <div
            onClick={() => navigate('Perfil Atualizado', 'none')}
            className="w-10 h-10 rounded-full overflow-hidden border-2 border-outline-variant/60 cursor-pointer"
          >
            <img
              alt="User"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuArM1_7ZXyl-Gwxdm4_JT90ZSoLi47UPWqVaN4kK5b0qNKE-q_cZaptpV5l1M920AM6tIeVTBD0GIsP8MrDWAOHxjxdPQc1mIgBlyKd-1VPcsWm4fGgMpOtvrAU8XzWCDgPoY7Wy_aLE6DDTlvv4mHEWetGZ7-QFUclo5I7bQP0ddItrEXmD9rH7tdJq6yrXJOafIAJZ7Yn0Rjwc1ymTGFKzMH6RopPoSbVFbStFi-QKVSFpBkron7AaDkjcjPm__tvdH5q0PeMS9p2"
            />
          </div>
        </div>
      </header>

      {/* Main content */}
      <main className="w-full max-w-2xl px-6 py-6 mx-auto flex flex-col gap-8">
        
        {/* Event creation form */}
        <form onSubmit={handleCreateEvent} className="grid grid-cols-1 md:grid-cols-2 gap-4">
          
          <div className="md:col-span-2 bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/40 shadow-sm flex flex-col gap-2">
            <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider pl-1">
              Nome do novo Evento
            </label>
            <input
              type="text"
              placeholder="Ex: Consulta Médica"
              className="w-full bg-surface-container-low border border-outline-variant rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
              value={eventName}
              onChange={(e) => setEventName(e.target.value)}
            />
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/40 shadow-sm flex flex-col gap-2">
            <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider pl-1">
              Dia do mês
            </label>
            <div className="relative">
              <input
                type="number"
                min="1"
                max="31"
                placeholder="21"
                className="w-full bg-surface-container-low border border-outline-variant rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all font-mono"
                value={eventDay}
                onChange={(e) => setEventDay(parseInt(e.target.value) || 1)}
              />
              <span className="absolute right-3 top-3.5 material-symbols-outlined text-outline select-none text-xl">
                calendar_month
              </span>
            </div>
          </div>

          <div className="bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/40 shadow-sm flex flex-col gap-2">
            <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider pl-1">
              Horário
            </label>
            <input
              type="time"
              className="w-full bg-surface-container-low border border-outline-variant rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
              value={eventTime}
              onChange={(e) => setEventTime(e.target.value)}
            />
          </div>

          <div className="md:col-span-2 bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/40 shadow-sm flex flex-col gap-2">
            <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider pl-1">
              Categoria / Detalhes
            </label>
            <input
              type="text"
              placeholder="Ex: Feriado Nacional, Clínica Geral"
              className="w-full bg-surface-container-low border border-outline-variant rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 transition-all"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </div>

          {/* Alarm Switch inside secondary tone wrapper to match mockup */}
          <div className="md:col-span-2 bg-[#e2f7e1] p-6 rounded-xl border border-outline-variant/20 shadow-sm flex items-center justify-between">
            <div>
              <h3 className="text-sm font-bold text-on-secondary-container">Colocar Alarme</h3>
              <p className="text-xs text-on-secondary-container/85 leading-relaxed mt-0.5">
                Receba uma notificação antes do evento
              </p>
            </div>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="alarm"
                  checked={alarm === true}
                  onChange={() => setAlarm(true)}
                  className="w-4 h-4 text-primary border-outline focus:ring-primary"
                />
                <span className="text-xs font-bold text-on-secondary-container">Sim</span>
              </label>
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="radio"
                  name="alarm"
                  checked={alarm === false}
                  onChange={() => setAlarm(false)}
                  className="w-4 h-4 text-primary border-outline focus:ring-primary"
                />
                <span className="text-xs font-bold text-on-secondary-container">Não</span>
              </label>
            </div>
          </div>

          {/* Hidden submit trigger to catch enter key */}
          <input type="submit" className="hidden" />
        </form>

        {/* Existing Events List Section */}
        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-bold text-primary flex items-center gap-2 pl-1">
            <span className="material-symbols-outlined text-xl">event_note</span>
            Todos os Eventos
          </h2>
          
          <div className="bg-surface-container-lowest rounded-xl border border-outline-variant/40 overflow-hidden shadow-[0_2px_12px_rgba(0,0,0,0.01)]">
            <div className="grid grid-cols-[60px_1fr] bg-surface-container text-on-surface-variant font-bold text-xs p-4 uppercase tracking-wider border-b border-outline-variant/30">
              <span>Dia</span>
              <span>Evento</span>
            </div>
            
            <div className="divide-y divide-outline-variant/40">
              {events.map((ev) => (
                <div
                  key={ev.id}
                  className="grid grid-cols-[60px_1fr] p-4 items-center hover:bg-surface-container-low/75 transition-colors"
                >
                  <span className="font-bold text-error font-mono text-base">{ev.day}</span>
                  <div className="flex flex-col">
                    <span className="font-semibold text-sm text-on-surface">{ev.name}</span>
                    <span className="text-[10px] text-on-surface-variant/80 uppercase font-mono mt-0.5 tracking-wider">
                      {ev.locationOrCategory} {ev.time !== '00:00' ? `• ${ev.time}` : ''}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAB creator equivalent layout button */}
        <div className="flex flex-col items-center gap-2 py-4">
          <button
            onClick={handleCreateEvent}
            className="group flex flex-col items-center gap-1.5 transition-transform active:scale-95 duration-150 cursor-pointer"
          >
            <div className="w-14 h-14 bg-primary text-on-primary rounded-full flex items-center justify-center shadow-md hover:bg-primary/95 transition-all">
              <span className="material-symbols-outlined text-2xl font-bold">add</span>
            </div>
            <span className="text-xs font-bold text-primary uppercase tracking-wider mt-1">Criar Outro Evento</span>
          </button>
        </div>

      </main>

      {/* Shared bottom navigation with 'home_health' present inside a tags */}
      <BottomNavBar activeTab="calendar" />
    </div>
  );
};
export default CriarEventoScreen;
