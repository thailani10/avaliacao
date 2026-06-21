export type ScreenName =
  | 'Login'
  | 'Cadastrar'
  | 'Criar Afazer'
  | 'Progresso Semanal'
  | 'Criar Evento'
  | 'Dicas de Exercícios Expandida'
  | 'Progresso Mensal'
  | 'Calendário'
  | 'Perfil Atualizado'
  | 'Dicas de Exercícios'
  | 'Dicas de Meditação'
  | 'Dicas de Estudo';

export interface Task {
  id: string;
  name: string;
  days: string[];
  time: string;
  alarm: boolean;
  completed: boolean;
  scheduleDescription?: string;
}

export interface AppEvent {
  id: string;
  name: string;
  day: number;
  time: string;
  alarm: boolean;
  locationOrCategory: string;
}

export interface UserProfile {
  username: string;
  bio: string;
}

export type TransitionType = 'push' | 'push_back' | 'slide_up' | 'none';
