import React from 'react';
import { useAdmin } from '@/contexts/AdminContext';
import AdminDashboard from '@/components/admin/AdminDashboard';
import AdminProtectedRoute from '@/components/admin/AdminProtectedRoute';

const AdminDashboardPage = () => {
  const { admin, logout } = useAdmin();

  return (
    <AdminProtectedRoute>
      <AdminDashboard admin={admin!} onLogout={logout} />
    </AdminProtectedRoute>
  );
};

export default AdminDashboardPage;