export interface HealthStatus {
  id: string;
  name: string;
  status: 'healthy' | 'warning' | 'critical';
  date: string;
  position?: {
    top?: string;
    left?: string;
    right?: string;
    bottom?: string;
  };
}

export const healthStatuses: HealthStatus[] = [
  {
    id: 'heart',
    name: 'Heart',
    status: 'critical',
    date: 'Date: 24 May 2025',
    position: {
      top: '38%',
      left: '50%',
    }
  },
  {
    id: 'lungs',
    name: 'Lungs',
    status: 'critical',
    date: 'Date: 24 May 2025',
    position: {
      top: '30%',
      right: '20%',
    }
  },
  {
    id: 'brain',
    name: 'brain',
    status: 'healthy',
    date: 'Date: 25 May 2025',
    position: {
      top: '48%',
      right: '20%',
    }
  },
  {
    id: 'bone',
    name: 'Bone',
    status: 'warning',
    date: 'Date: 26 May 2025',
    position: {
      top: '65%',
      right: '20%',
    }
  },
  {
    id: 'leg',
    name: 'Healthy Leg',
    status: 'healthy',
    date: '',
    position: {
      bottom: '25%',
      left: '30%',
    }
  }
];