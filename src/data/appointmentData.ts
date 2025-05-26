export interface Appointment {
  id: string;
  title: string;
  time: string;
  date: string;
  day: 'Monday' | 'Thuresday';
  icon: 'check' | 'ear' | 'heart' | 'brain';
}

export const appointments: Appointment[] = [
  {
    id: 'checkup',
    title: 'Health checkup',
    time: '9:00 AM',
    day: 'Monday',
    date: 'Date: 25/05/2025',
    icon: 'check'
  },
  {
    id: 'otolaryngologist',
    title: 'Otolaryngologist',
    time: '2:00 PM',
    date: 'Date: 29/05/2025',
    day: 'Thuresday',
    icon: 'ear'
  },
  {
    id: 'cardiologist',
    title: 'Cardiologist',
    time: '10:00 AM',
    date: 'Date: 29/05/2025',
    day: 'Thuresday',
    icon: 'heart'
  },
  {
    id: 'neurologist',
    title: 'Neurologist',
    time: '4:00 PM',
    date: 'Date: 25/05/2025',
    day: 'Monday',
    icon: 'brain'
  }
];

export const activityData = {
  title: 'Activity',
  count: '3 appointments on this week',
  days: ['Mon', 'Tues', 'Wed', 'Thurs', 'Fri', 'Sat', 'Sun']
};