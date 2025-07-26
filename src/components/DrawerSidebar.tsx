import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { 
  X, 
  User, 
  Package, 
  Heart, 
  Truck, 
  LogOut, 
  Settings,
  HelpCircle,
  ShoppingBag
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { useAuth } from '@/contexts/AuthContext';
import { toast } from '@/components/ui/sonner';

interface DrawerSidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const DrawerSidebar: React.FC<DrawerSidebarProps> = ({ isOpen, onClose }) => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    onClose();
    toast.success('Logged out successfully');
  };

  const handleSignIn = () => {
    onClose();
    navigate('/login');
  };

  const handleCreateAccount = () => {
    onClose();
    navigate('/signup');
  };
  const menuItems = [
    {
      icon: User,
      label: 'Profile',
      onClick: () => {
        toast.info('Profile page coming soon');
        onClose();
      }
    },
    {
      icon: Package,
      label: 'Order History',
      onClick: () => {
        toast.info('Order history coming soon');
        onClose();
      }
    },
    {
      icon: Heart,
      label: 'Wishlist',
      onClick: () => {
        toast.info('Wishlist coming soon');
        onClose();
      }
    },
    {
      icon: Truck,
      label: 'Track Order',
      onClick: () => {
        toast.info('Order tracking coming soon');
        onClose();
      }
    },
    {
      icon: Settings,
      label: 'Settings',
      onClick: () => {
        toast.info('Settings coming soon');
        onClose();
      }
    },
    {
      icon: HelpCircle,
      label: 'Support',
      onClick: () => {
        toast.info('Support page coming soon');
        onClose();
      }
    }
  ];

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        {/* Backdrop */}
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden">
            <div className="pointer-events-none fixed inset-y-0 right-0 flex max-w-full pl-10">
              <Transition.Child
                as={Fragment}
                enter="transform transition ease-in-out duration-300"
                enterFrom="translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition ease-in-out duration-300"
                leaveFrom="translate-x-0"
                leaveTo="translate-x-full"
              >
                <Dialog.Panel className="pointer-events-auto w-screen max-w-sm">
                  <motion.div
                    initial={{ x: '100%' }}
                    animate={{ x: 0 }}
                    exit={{ x: '100%' }}
                    transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                    className="flex h-full flex-col gradient-card border-l border-border shadow-luxury"
                  >
                    {/* Header */}
                    <div className="flex items-center justify-between p-6 border-b border-border">
                      <Dialog.Title className="text-lg font-semibold font-poppins">
                        Account
                      </Dialog.Title>
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={onClose}
                        className="hover:bg-secondary"
                      >
                        <X className="h-5 w-5" />
                      </Button>
                    </div>

                    {/* User Profile Section */}
                    {user && (
                      <div className="p-6 border-b border-border">
                        <div className="flex items-center space-x-4">
                          <Avatar className="h-12 w-12">
                            <AvatarImage src="" alt={user.name} />
                            <AvatarFallback className="bg-primary text-primary-foreground">
                              {user.name.charAt(0).toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                          <div className="flex-1 min-w-0">
                            <p className="text-sm font-medium truncate">
                              {user.name}
                            </p>
                            <p className="text-sm text-muted-foreground truncate">
                              {user.email}
                            </p>
                            {user.role === 'admin' && (
                              <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-primary text-primary-foreground mt-1">
                                Admin
                              </span>
                            )}
                          </div>
                        </div>
                      </div>
                    )}

                    {/* Menu Items */}
                    <div className="flex-1 overflow-y-auto">
                      <nav className="p-4 space-y-2">
                        {menuItems.map((item, index) => (
                          <motion.button
                            key={item.label}
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 }}
                            onClick={item.onClick}
                            className="w-full flex items-center space-x-3 px-4 py-3 text-left rounded-lg hover:bg-secondary transition-colors group"
                          >
                            <item.icon className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                            <span className="text-sm font-medium">{item.label}</span>
                          </motion.button>
                        ))}
                      </nav>
                    </div>

                    {/* Footer */}
                    <div className="p-6 border-t border-border">
                      {user ? (
                        <Button
                          onClick={handleLogout}
                          variant="outline"
                          className="w-full justify-start"
                        >
                          <LogOut className="h-4 w-4 mr-2" />
                          Logout
                        </Button>
                      ) : (
                        <div className="space-y-2">
                          <Button className="w-full" onClick={handleSignIn}>
                            <User className="h-4 w-4 mr-2" />
                            Sign In
                          </Button>
                          <Button variant="outline" className="w-full" onClick={handleCreateAccount}>
                            Create Account
                          </Button>
                        </div>
                      )}
                    </div>
                  </motion.div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default DrawerSidebar;