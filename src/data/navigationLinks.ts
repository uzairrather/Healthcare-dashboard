import { 
  LayoutDashboard, 
  History, 
  Calendar, 
  ClipboardList, 
  BarChart2, 
  FlaskConical, 
  MessageSquare, 
  LifeBuoy, 
  Settings 
} from 'lucide-react';

export interface NavLink {
  id: string;
  title: string;
  icon: any;
  path: string;
}

export const generalLinks: NavLink[] = [
  {
    id: 'dashboard',
    title: 'Dashboard',
    icon: LayoutDashboard,
    path: '/dashboard',
  },
  {
    id: 'history',
    title: 'History',
    icon: History,
    path: '/history',
  },
  {
    id: 'calendar',
    title: 'Calendar',
    icon: Calendar,
    path: '/calendar',
  },
  {
    id: 'appointments',
    title: 'Appointments',
    icon: ClipboardList,
    path: '/appointments',
  },
  {
    id: 'statistics',
    title: 'Statistics',
    icon: BarChart2,
    path: '/statistics',
  },
  {
    id: 'tests',
    title: 'Tests',
    icon: FlaskConical,
    path: '/tests',
  },
];

export const toolsLinks: NavLink[] = [
  {
    id: 'chat',
    title: 'Chat',
    icon: MessageSquare,
    path: '/chat',
  },
  {
    id: 'support',
    title: 'Support',
    icon: LifeBuoy,
    path: '/support',
  },
  {
    id: 'setting',
    title: 'Setting',
    icon: Settings,
    path: '/setting',
  },
];