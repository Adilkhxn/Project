import React from 'react';
import { useAuth } from '@/contexts/AuthContext';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Users, 
  Package, 
  ShoppingCart, 
  TrendingUp, 
  Settings,
  BarChart3,
  Plus,
  Edit,
  Trash2
} from 'lucide-react';
import { toast } from '@/components/ui/sonner';

const AdminPanel = () => {
  const { user } = useAuth();

  const stats = [
    {
      title: 'Total Orders',
      value: '1,234',
      change: '+12%',
      icon: ShoppingCart,
      color: 'text-blue-600'
    },
    {
      title: 'Products',
      value: '456',
      change: '+5%',
      icon: Package,
      color: 'text-green-600'
    },
    {
      title: 'Customers',
      value: '2,890',
      change: '+18%',
      icon: Users,
      color: 'text-purple-600'
    },
    {
      title: 'Revenue',
      value: '$45,678',
      change: '+23%',
      icon: TrendingUp,
      color: 'text-orange-600'
    }
  ];

  const recentOrders = [
    { id: '#1234', customer: 'Sarah Ahmed', product: 'Elegant Black Abaya', status: 'Processing', amount: '$89.99' },
    { id: '#1235', customer: 'Fatima Khan', product: 'Silk Hijab Set', status: 'Shipped', amount: '$45.99' },
    { id: '#1236', customer: 'Aisha Ali', product: 'Prayer Accessories', status: 'Delivered', amount: '$29.99' },
    { id: '#1237', customer: 'Mariam Hassan', product: 'Designer Abaya', status: 'Processing', amount: '$129.99' },
  ];

  const handleAction = (action: string) => {
    toast.info(`${action} functionality coming soon!`);
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold font-poppins">Admin Dashboard</h1>
              <p className="text-muted-foreground mt-2">
                Welcome back, {user?.name}
              </p>
            </div>
            <Badge variant="outline" className="px-3 py-1">
              Administrator
            </Badge>
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="gradient-card border-border">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">{stat.title}</p>
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="text-sm text-green-600">{stat.change}</p>
                  </div>
                  <stat.icon className={`h-8 w-8 ${stat.color}`} />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Orders */}
          <Card className="lg:col-span-2 gradient-card border-border">
            <CardHeader>
              <CardTitle>Recent Orders</CardTitle>
              <CardDescription>Latest customer orders and their status</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {recentOrders.map((order) => (
                  <div key={order.id} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                    <div className="flex-1">
                      <div className="flex items-center space-x-4">
                        <div>
                          <p className="font-medium">{order.id}</p>
                          <p className="text-sm text-muted-foreground">{order.customer}</p>
                        </div>
                        <div className="flex-1">
                          <p className="text-sm">{order.product}</p>
                          <Badge 
                            variant={order.status === 'Delivered' ? 'default' : 'secondary'}
                            className="mt-1"
                          >
                            {order.status}
                          </Badge>
                        </div>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{order.amount}</p>
                      <Button variant="ghost" size="sm" onClick={() => handleAction('View Order')}>
                        View
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card className="gradient-card border-border">
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Manage your store efficiently</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <Button className="w-full justify-start" onClick={() => handleAction('Add Product')}>
                <Plus className="h-4 w-4 mr-2" />
                Add New Product
              </Button>
              <Button variant="outline" className="w-full justify-start" onClick={() => handleAction('Manage Inventory')}>
                <Package className="h-4 w-4 mr-2" />
                Manage Inventory
              </Button>
              <Button variant="outline" className="w-full justify-start" onClick={() => handleAction('View Analytics')}>
                <BarChart3 className="h-4 w-4 mr-2" />
                View Analytics
              </Button>
              <Button variant="outline" className="w-full justify-start" onClick={() => handleAction('Settings')}>
                <Settings className="h-4 w-4 mr-2" />
                Store Settings
              </Button>
            </CardContent>
          </Card>
        </div>

        {/* Product Management */}
        <Card className="mt-8 gradient-card border-border">
          <CardHeader>
            <div className="flex items-center justify-between">
              <div>
                <CardTitle>Product Management</CardTitle>
                <CardDescription>Manage your product catalog</CardDescription>
              </div>
              <Button onClick={() => handleAction('Add Product')}>
                <Plus className="h-4 w-4 mr-2" />
                Add Product
              </Button>
            </div>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {['Elegant Black Abaya', 'Silk Hijab Collection', 'Prayer Accessories Set', 'Designer Modest Wear'].map((product, index) => (
                <div key={index} className="flex items-center justify-between p-4 rounded-lg bg-secondary/50">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-muted rounded-lg flex items-center justify-center">
                      <Package className="h-6 w-6 text-muted-foreground" />
                    </div>
                    <div>
                      <p className="font-medium">{product}</p>
                      <p className="text-sm text-muted-foreground">In Stock: {Math.floor(Math.random() * 50) + 10}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="sm" onClick={() => handleAction('Edit Product')}>
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" onClick={() => handleAction('Delete Product')}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default AdminPanel;