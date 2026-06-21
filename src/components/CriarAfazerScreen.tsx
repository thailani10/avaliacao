import React, { useState } from 'react';
import { useApp } from '../AppContext';
import BottomNavBar from './BottomNavBar';

export const CriarAfazerScreen: React.FC = () => {
  const { navigate, goBack, tasks, addTask, toggleTask } = useApp();
  const [taskName, setTaskName] = useState('');
  const [selectedDays, setSelectedDays] = useState<string[]>(['S']); // 'S' (Segunda) selected by default to match screenshot
  const [taskTime, setTaskTime] = useState('08:00');
  const [alarm, setAlarm] = useState(false);

  const availableDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'];
  const dayNames = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

  const handleToggleDay = (dayChar: string) => {
    setSelectedDays((prev) =>
      prev.includes(dayChar) ? prev.filter((d) => d !== dayChar) : [...prev, dayChar]
    );
  };

  const handleCreateTask = () => {
    if (!taskName.trim()) {
      alert('Por favor, informe o nome do afazer.');
      return;
    }
    // Add task
    addTask(taskName, selectedDays, taskTime, alarm);
    // Reset and feedback
    alert('Afazer criado com sucesso!');
    setTaskName('');
    setSelectedDays(['S']);
    setTaskTime('08:00');
    setAlarm(false);
  };

  return (
    <div className="min-h-screen bg-background pb-32 relative selection:bg-primary-container">
      {/* Decorative Atmosphere Glow */}
      <div className="fixed top-20 -left-16 w-64 h-64 bg-tertiary-fixed/20 blur-[80px] rounded-full -z-10 pointer-events-none"></div>
      <div className="fixed bottom-40 -right-20 w-80 h-80 bg-secondary-fixed/20 blur-[100px] rounded-full -z-10 pointer-events-none"></div>

      {/* TopAppBar */}
      <header className="w-full top-0 sticky z-40 bg-surface-bright/90 backdrop-blur-md flex justify-between items-center h-16 px-6 md:px-12 border-b border-outline-variant/30">
        <div className="flex items-center gap-3">
          <button
            onClick={() => goBack()}
            className="p-2 rounded-full hover:bg-surface-container transition-colors active:scale-95 cursor-pointer flex items-center"
          >
            <span className="material-symbols-outlined text-primary">arrow_back</span>
          </button>
          <h1 className="font-semibold text-lg text-primary tracking-tight">Criar Afazer</h1>
        </div>
        
        {/* Right side Profile snapshot */}
        <div className="flex items-center gap-2">
          <img
            alt="VitalTask Logo"
            className="w-8 h-8 object-contain"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgpriaqigN8DDQN4g64Ip44Shge2txL2Z4v64OHIyZ6qXiavInK1EztsePLqi3rVQ0Pq12wSi_u5xttdZpGy7pJPUu7OCs-EqEDJhiwUreFnw9h6zfY3K8hj4TqyVlEU6r-ciYsOgQJBe1xF4G-W5rAkFJhW3KrxIUo3ungnzRjQ2sSYddnRmyqUnPoRtxO0NGJeYah7LabSs2iqXpiaO3im2IrqE6VsfF4ZNEKpn9fihSSNHNlxt8w48LOplqFh8DByB4JI9qPttu"
          />
          <div
            onClick={() => navigate('Perfil Atualizado', 'none')}
            className="w-8 h-8 rounded-full overflow-hidden border border-outline-variant/60 cursor-pointer hover:border-primary transition-colors"
          >
            <img
              alt="User Profile"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuArM1_7ZXyl-Gwxdm4_JT90ZSoLi47UPWqVaN4kK5b0qNKE-q_cZaptpV5l1M920AM6tIeVTBD0GIsP8MrDWAOHxjxdPQc1mIgBlyKd-1VPcsWm4fGgMpOtvrAU8XzWCDgPoY7Wy_aLE6DDTlvv4mHEWetGZ7-QFUclo5I7bQP0ddItrEXmD9rH7tdJq6yrXJOafIAJZ7Yn0Rjwc1ymTGFKzMH6RopPoSbVFbStFi-QKVSFpBkron7AaDkjcjPm__tvdH5q0PeMS9p2"
            />
          </div>
        </div>
      </header>

      {/* Main Container */}
      <main className="w-full max-w-2xl px-6 py-6 mx-auto flex flex-col gap-8">
        
        {/* Form Section */}
        <section className="bg-surface-container-lowest rounded-2xl p-6 shadow-[0_4px_20px_rgba(62,92,82,0.04)] border border-outline-variant/30 flex flex-col gap-6">
          
          {/* Task Name Field */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider pl-1">
              Nome do novo afazer
            </label>
            <input
              type="text"
              className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-all text-sm font-sans"
              placeholder="Ex: Meditação matinal"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
            />
          </div>

          {/* Days bubbles */}
          <div className="flex flex-col gap-2">
            <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider pl-1 font-sans">
              Quais dias da semana:
            </label>
            <div className="flex flex-wrap gap-2 pt-1">
              {availableDays.map((day, idx) => {
                const isSelected = selectedDays.includes(day);
                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleToggleDay(day)}
                    className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold text-xs transition-all cursor-pointer ${
                      isSelected
                        ? 'bg-primary text-on-primary shadow-sm hover:bg-primary/90'
                        : 'bg-surface-container border border-outline-variant/60 text-outline hover:bg-primary-container/20'
                    }`}
                    title={dayNames[idx]}
                  >
                    {day}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Time & Alarm Fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider pl-1">
                Horário
              </label>
              <input
                type="time"
                className="w-full bg-surface-container-low border border-outline-variant rounded-xl px-4 py-3 focus:outline-none focus:border-primary transition-all text-sm"
                value={taskTime}
                onChange={(e) => setTaskTime(e.target.value)}
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-xs font-semibold text-on-surface-variant uppercase tracking-wider pl-1">
                Colocar Alarme
              </label>
              <div className="flex gap-6 items-center h-full pt-1.5 px-2">
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="radio"
                    name="alarm"
                    checked={alarm === true}
                    onChange={() => setAlarm(true)}
                    className="w-4 h-4 text-primary border-outline-variant focus:ring-primary"
                  />
                  <span className="text-sm font-medium text-on-surface">Sim</span>
                </label>
                <label className="flex items-center gap-2 cursor-pointer group">
                  <input
                    type="radio"
                    name="alarm"
                    checked={alarm === false}
                    onChange={() => setAlarm(false)}
                    className="w-4 h-4 text-primary border-outline-variant focus:ring-primary"
                  />
                  <span className="text-sm font-medium text-on-surface">Não</span>
                </label>
              </div>
            </div>
          </div>

        </section>

        {/* Existing Tasks List */}
        <section className="flex flex-col gap-4">
          <h2 className="text-lg font-bold text-primary pl-1 flex items-center gap-2">
            <span className="material-symbols-outlined text-xl">checklist</span>
            Todos os Afazeres
          </h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {tasks.map((task) => (
              <div
                key={task.id}
                onClick={() => toggleTask(task.id)}
                className={`flex items-center gap-4 rounded-xl p-4 border transition-all duration-150 cursor-pointer ${
                  task.completed
                    ? 'bg-surface-container-low border-primary/20 hover:bg-surface-container'
                    : 'bg-surface-container-lowest border-outline-variant/50 hover:bg-surface-container-low/55'
                }`}
              >
                <div
                  className={`w-6 h-6 rounded flex items-center justify-center border transition-all ${
                    task.completed
                      ? 'border-primary bg-primary text-on-primary'
                      : 'border-outline/50 bg-transparent'
                  }`}
                >
                  {task.completed && (
                    <span className="material-symbols-outlined text-sm leading-0 font-bold select-none">
                      check
                    </span>
                  )}
                </div>
                
                <div className="flex flex-col">
                  <span
                    className={`text-sm font-semibold transition-all ${
                      task.completed ? 'text-primary/70 line-through' : 'text-on-surface'
                    }`}
                  >
                    {task.name}
                  </span>
                  <span className="text-[10px] text-on-surface-variant uppercase tracking-widest font-semibold mt-0.5">
                    {task.scheduleDescription || 'Personalizado'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Empty status mockup */}
        <div className="mt-2 flex justify-center">
          <div className="relative w-40 h-40 flex items-center justify-center rounded-full bg-primary-container/10">
            <span className="material-symbols-outlined text-primary/10 text-8xl select-none animate-pulse">
              add_task
            </span>
          </div>
        </div>

      </main>

      {/* Floating Action Button */}
      <div className="fixed bottom-24 right-5 z-40">
        <button
          onClick={handleCreateTask}
          className="bg-primary text-on-primary flex items-center gap-2 px-6 py-4 rounded-2xl shadow-lg hover:scale-105 active:scale-95 transition-all group cursor-pointer"
        >
          <span className="material-symbols-outlined leading-none font-bold">add</span>
          <span className="text-xs font-semibold uppercase tracking-wider">Criar Afazer</span>
        </button>
      </div>

      {/* Shared Bottom Navigation Bar */}
      <BottomNavBar activeTab="calendar" />
    </div>
  );
};
export default CriarAfazerScreen;
