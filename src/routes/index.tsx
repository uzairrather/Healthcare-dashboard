import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import AppLayout from '../components/Layout/AppLayout';
import DashboardPage from '../pages/DashboardPage';
import HistoryPage from '../pages/HistoryPage';
import CalendarPage from '../pages/CalendarPage';
import AppointmentsPage from '../pages/AppointmentsPage';
import StatisticsPage from '../pages/StatisticsPage';
import TestsPage from '../pages/TestsPage';
import ChatPage from '../pages/ChatPage';
import SupportPage from '../pages/SupportPage';
import SettingPage from '../pages/SettingPage';

const AppRoutes: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" replace />} />
        <Route path="/" element={<AppLayout />}>
          <Route path="dashboard" element={<DashboardPage />} />
          <Route path="history" element={<HistoryPage />} />
          <Route path="calendar" element={<CalendarPage />} />
          <Route path="appointments" element={<AppointmentsPage />} />
          <Route path="statistics" element={<StatisticsPage />} />
          <Route path="tests" element={<TestsPage />} />
          <Route path="chat" element={<ChatPage />} />
          <Route path="support" element={<SupportPage />} />
          <Route path="setting" element={<SettingPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;