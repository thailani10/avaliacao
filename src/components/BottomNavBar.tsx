import React from 'react';
import { useApp } from '../AppContext';
import { ScreenName } from '../types';

interface BottomNavBarProps {
  activeTab: 'home' | 'progress' | 'calendar' | 'profile';
  isStudyTips?: boolean;
}

export const BottomNavBar: React.FC<BottomNavBarProps> = ({ activeTab, isStudyTips = false }) => {
  const { navigate } = useApp();

  return (
    <nav className="fixed bottom-0 left-0 w-full z-50 rounded-t-xl bg-surface-container-lowest dark:bg-inverse-surface shadow-[0_-4px_12px_rgba(50,106,52,0.06)] flex justify-around items-center h-20 pb-safe px-4 border-t border-outline-variant/30">
      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          navigate('Progresso Semanal', 'none');
        }}
        className={`flex flex-col items-center justify-center px-4 py-1.5 transition-all rounded-full group ${
          activeTab === 'home'
            ? 'bg-primary-container/25 text-primary font-semibold'
            : 'text-on-surface-variant hover:bg-surface-container-low'
        }`}
      >
        <span className="material-symbols-outlined mb-0.5">
          {isStudyTips ? 'home' : 'home_health'}
        </span>
        <span className="text-xs tracking-wider">Home</span>
      </a>

      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          navigate('Progresso Mensal', 'none');
        }}
        className={`flex flex-col items-center justify-center px-4 py-1.5 transition-all rounded-full group ${
          activeTab === 'progress'
            ? 'bg-primary-container/25 text-primary font-semibold'
            : 'text-on-surface-variant hover:bg-surface-container-low'
        }`}
      >
        <span className="material-symbols-outlined mb-0.5" style={{ fontVariationSettings: activeTab === 'progress' ? "'FILL' 1" : undefined }}>
          equalizer
        </span>
        <span className="text-xs tracking-wider">Progresso</span>
      </a>

      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          navigate('Calendário', 'none');
        }}
        className={`flex flex-col items-center justify-center px-4 py-1.5 transition-all rounded-full group ${
          activeTab === 'calendar'
            ? 'bg-primary-container/25 text-primary font-semibold'
            : 'text-on-surface-variant hover:bg-surface-container-low'
        }`}
      >
        <span className="material-symbols-outlined mb-0.5" style={{ fontVariationSettings: activeTab === 'calendar' ? "'FILL' 1" : undefined }}>
          calendar_today
        </span>
        <span className="text-xs tracking-wider">Calendário</span>
      </a>

      <a
        href="#"
        onClick={(e) => {
          e.preventDefault();
          navigate('Perfil Atualizado', 'none');
        }}
        className={`flex flex-col items-center justify-center px-4 py-1.5 transition-all rounded-full group ${
          activeTab === 'profile'
            ? 'bg-primary-container/25 text-primary font-semibold'
            : 'text-on-surface-variant hover:bg-surface-container-low'
        }`}
      >
        <span className="material-symbols-outlined mb-0.5" style={{ fontVariationSettings: activeTab === 'profile' ? "'FILL' 1" : undefined }}>
          person
        </span>
        <span className="text-xs tracking-wider">Perfil</span>
      </a>
    </nav>
  );
};
export default BottomNavBar;
