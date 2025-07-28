import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAdmin } from '@/contexts/AdminContext';
import AdminLogin from '@/components/admin/AdminLogin';

const AdminLoginPage = () => {
  const { admin, login, isAuthenticated } = useAdmin();

  // Redirect to dashboard if already authenticated
  if (isAuthenticated) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return <AdminLogin onLogin={login} />;
};

export default AdminLoginPage;