import React, { createContext, useContext, useState, useEffect } from 'react';
import { ScreenName, Task, AppEvent, UserProfile, TransitionType } from './types';

interface AppContextProps {
  currentScreen: ScreenName;
  transitionType: TransitionType;
  tasks: Task[];
  events: AppEvent[];
  user: UserProfile;
  navigate: (screen: ScreenName, transition?: TransitionType) => void;
  goBack: () => void;
  addTask: (name: string, days: string[], time: string, alarm: boolean) => void;
  toggleTask: (id: string) => void;
  addEvent: (name: string, day: number, time: string, alarm: boolean, category: string) => void;
  updateUser: (username: string, bio: string) => void;
}

const AppContext = createContext<AppContextProps | undefined>(undefined);

const DEFAULT_TASKS: Task[] = [
  {
    id: '1',
    name: 'Arrumar a cama',
    days: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
    time: '08:00',
    alarm: false,
    completed: true,
    scheduleDescription: 'DIARIAMENTE',
  },
  {
    id: '2',
    name: 'Lavar a louça',
    days: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'],
    time: '13:00',
    alarm: false,
    completed: true,
    scheduleDescription: 'PÓS REFEIÇÕES',
  },
  {
    id: '3',
    name: 'Estudar',
    days: ['S', 'T', 'Q', 'Q', 'S'],
    time: '14:00',
    alarm: false,
    completed: true,
    scheduleDescription: '14:00 - 16:00',
  },
  {
    id: '4',
    name: 'Fazer exercício',
    days: ['S', 'T', 'Q', 'Q', 'S'],
    time: '18:00',
    alarm: false,
    completed: true,
    scheduleDescription: 'SEG, QUA, SEX',
  },
  {
    id: '5',
    name: 'Jogar Volêi',
    days: ['S'],
    time: '09:00',
    alarm: true,
    completed: false,
    scheduleDescription: 'SÁB, DOM',
  }
];

const DEFAULT_EVENTS: AppEvent[] = [
  {
    id: 'e1',
    name: 'Paixão de Cristo',
    day: 3,
    time: '00:00',
    alarm: false,
    locationOrCategory: 'Feriado Nacional',
  },
  {
    id: 'e2',
    name: 'Domingo de Páscoa',
    day: 5,
    time: '00:00',
    alarm: false,
    locationOrCategory: 'Dia Inteiro',
  },
  {
    id: 'e3',
    name: 'Tiradentes',
    day: 21,
    time: '00:00',
    alarm: false,
    locationOrCategory: 'Brasil',
  },
  {
    id: 'e4',
    name: 'Consulta Dermatologista',
    day: 28,
    time: '15:30',
    alarm: true,
    locationOrCategory: 'Clínica Revitalize',
  }
];

export const AppProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentScreen, setCurrentScreen] = useState<ScreenName>('Login');
  const [transitionType, setTransitionType] = useState<TransitionType>('none');
  const [history, setHistory] = useState<ScreenName[]>(['Login']);

  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem('vitaltask_tasks');
    return saved ? JSON.parse(saved) : DEFAULT_TASKS;
  });

  const [events, setEvents] = useState<AppEvent[]>(() => {
    const saved = localStorage.getItem('vitaltask_events');
    return saved ? JSON.parse(saved) : DEFAULT_EVENTS;
  });

  const [user, setUser] = useState<UserProfile>(() => {
    const saved = localStorage.getItem('vitaltask_user');
    return saved ? JSON.parse(saved) : { username: 'Usuário', bio: 'Bem-Vindo(a) ao nosso app. A melhor forma de organizar seu afazeres sem estresse.' };
  });

  useEffect(() => {
    localStorage.setItem('vitaltask_tasks', JSON.stringify(tasks));
  }, [tasks]);

  useEffect(() => {
    localStorage.setItem('vitaltask_events', JSON.stringify(events));
  }, [events]);

  useEffect(() => {
    localStorage.setItem('vitaltask_user', JSON.stringify(user));
  }, [user]);

  const navigate = (screen: ScreenName, transition: TransitionType = 'none') => {
    setTransitionType(transition);
    setCurrentScreen(screen);
    setHistory((prev) => [...prev, screen]);
  };

  const goBack = () => {
    if (history.length > 1) {
      const newHistory = [...history];
      newHistory.pop(); // remove current
      const prevScreen = newHistory[newHistory.length - 1];
      setTransitionType('push_back');
      setCurrentScreen(prevScreen);
      setHistory(newHistory);
    } else {
      // Default safety back fallback
      setTransitionType('push_back');
      setCurrentScreen('Login');
    }
  };

  const addTask = (name: string, days: string[], time: string, alarm: boolean) => {
    const scheduleDescription = days.length === 7 ? 'DIARIAMENTE' : days.join(', ');
    const newTask: Task = {
      id: Date.now().toString(),
      name,
      days,
      time,
      alarm,
      completed: false,
      scheduleDescription: scheduleDescription || 'Personalizado',
    };
    setTasks((prev) => [newTask, ...prev]);
  };

  const toggleTask = (id: string) => {
    setTasks((prev) =>
      prev.map((t) => (t.id === id ? { ...t, completed: !t.completed } : t))
    );
  };

  const addEvent = (name: string, day: number, time: string, alarm: boolean, category: string) => {
    const newEvent: AppEvent = {
      id: Date.now().toString(),
      name,
      day,
      time,
      alarm,
      locationOrCategory: category || 'Geral',
    };
    setEvents((prev) => [...prev, newEvent]);
  };

  const updateUser = (username: string, bio: string) => {
    setUser({ username, bio });
  };

  return (
    <AppContext.Provider
      value={{
        currentScreen,
        transitionType,
        tasks,
        events,
        user,
        navigate,
        goBack,
        addTask,
        toggleTask,
        addEvent,
        updateUser,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within an AppProvider');
  }
  return context;
};
