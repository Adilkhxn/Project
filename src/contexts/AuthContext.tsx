import React, { createContext, useContext, useState, useEffect } from 'react';

interface User {
  id: string;
  email: string;
  name: string;
  role: 'user' | 'admin';
}

interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<boolean>;
  signup: (name: string, email: string, password: string) => Promise<boolean>;
  logout: () => void;
  isLoading: boolean;
  error: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Check for existing token on app load
    const token = localStorage.getItem('auth_token');
    if (token) {
      // In a real app, you'd validate the token with your backend
      try {
        const userData = JSON.parse(localStorage.getItem('user_data') || '');
        setUser(userData);
      } catch (error) {
        localStorage.removeItem('auth_token');
        localStorage.removeItem('user_data');
      }
    }
  }, []);

  const login = async (email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulate API call - replace with actual backend call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock authentication - replace with real API
      if (email === 'admin@husnmodesty.com' && password === 'admin123') {
        const userData = {
          id: '1',
          email,
          name: 'Admin User',
          role: 'admin' as const
        };
        
        localStorage.setItem('auth_token', 'mock_jwt_token');
        localStorage.setItem('user_data', JSON.stringify(userData));
        setUser(userData);
        return true;
      } else if (email.includes('@') && password.length >= 6) {
        const userData = {
          id: '2',
          email,
          name: email.split('@')[0],
          role: 'user' as const
        };
        
        localStorage.setItem('auth_token', 'mock_jwt_token');
        localStorage.setItem('user_data', JSON.stringify(userData));
        setUser(userData);
        return true;
      } else {
        setError('Invalid email or password');
        return false;
      }
    } catch (error) {
      setError('Login failed. Please try again.');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const signup = async (name: string, email: string, password: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      // Mock signup - replace with real API
      const userData = {
        id: Date.now().toString(),
        email,
        name,
        role: 'user' as const
      };
      
      localStorage.setItem('auth_token', 'mock_jwt_token');
      localStorage.setItem('user_data', JSON.stringify(userData));
      setUser(userData);
      return true;
    } catch (error) {
      setError('Signup failed. Please try again.');
      return false;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = () => {
    localStorage.removeItem('auth_token');
    localStorage.removeItem('user_data');
    setUser(null);
    setError(null);
  };

  const value = {
    user,
    login,
    signup,
    logout,
    isLoading,
    error
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};