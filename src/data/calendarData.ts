export interface CalendarDay {
  day: number;
  dayName: string;
  appointments: {
    time: string;
    booked: boolean;
  }[];
}

export const calendarData = {
  month: 'May',
  year: 2025,
  days: [
    {
      day: 25,
      dayName: 'Sun',
      appointments: [
        { time: '10:00', booked: true },
        { time: '11:00', booked: true },
        { time: '12:00', booked: true },
      ]
    },
    {
      day: 26,
      dayName: 'Mon',
      appointments: [
        { time: '08:00', booked: true },
        { time: '09:00', booked: true },
        { time: '10:00', booked: true },
      ]
    },
    {
      day: 27,
      dayName: 'Tues',
      appointments: [
        { time: '12:00', booked: true },
        { time: '13:00', booked: true },
      ]
    },
    {
      day: 28,
      dayName: 'Wed',
      appointments: [
        { time: '10:00', booked: true },
      ]
    },
    {
      day: 29,
      dayName: 'Thurs',
      appointments: [
        { time: '14:00', booked: true },
        { time: '15:00', booked: true },
        { time: '16:00', booked: true },
      ]
    },
    {
      day: 30,
      dayName: 'Fri',
      appointments: [
        { time: '12:00', booked: true },
        { time: '14:00', booked: true },
        { time: '15:00', booked: true },
      ]
    },
    {
      day: 31,
      dayName: 'Sat',
      appointments: [
        { time: '09:00', booked: true },
        { time: '10:00', booked: true },
        { time: '11:00', booked: true },
      ]
    }
  ],
  scheduledAppointments: [
    {
      id: 'neurology',
      title: 'Neurology',
      time: '10:00AM - 4:00PM',
      doctor: 'Dr. Arun Saroha',
      icon: 'tooth'
    },
    {
      id: 'physio',
      title: 'Physiotherapy',
      time: '9:00AM - 2:00PM ',
      doctor: 'Sandeep Vaishya',
      icon: 'activity'
    }
  ]
};