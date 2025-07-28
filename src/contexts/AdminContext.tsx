import React, { createContext, useContext, useState, useEffect } from 'react';

interface Admin {
  email: string;
  name: string;
}

interface AdminContextType {
  admin: Admin | null;
  login: (adminData: Admin) => void;
  logout: () => void;
  isAuthenticated: boolean;
}

const AdminContext = createContext<AdminContextType | undefined>(undefined);

export const useAdmin = () => {
  const context = useContext(AdminContext);
  if (context === undefined) {
    throw new Error('useAdmin must be used within an AdminProvider');
  }
  return context;
};

export const AdminProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [admin, setAdmin] = useState<Admin | null>(null);

  useEffect(() => {
    // Check for existing admin token on app load
    const token = localStorage.getItem('admin_token');
    const adminData = localStorage.getItem('admin_data');
    
    if (token && adminData) {
      try {
        const parsedAdminData = JSON.parse(adminData);
        setAdmin(parsedAdminData);
      } catch (error) {
        // Clear invalid data
        localStorage.removeItem('admin_token');
        localStorage.removeItem('admin_data');
      }
    }
  }, []);

  const login = (adminData: Admin) => {
    setAdmin(adminData);
  };

  const logout = () => {
    setAdmin(null);
    localStorage.removeItem('admin_token');
    localStorage.removeItem('admin_data');
  };

  const value = {
    admin,
    login,
    logout,
    isAuthenticated: !!admin
  };

  return (
    <AdminContext.Provider value={value}>
      {children}
    </AdminContext.Provider>
  );
};