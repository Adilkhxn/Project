import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingBag, Star, Clock } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

const NewArrivals = () => {
  const newArrivals = [
    {
      id: 1,
      name: 'Limited Edition Abaya',
      price: '$149.99',
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=600&fit=crop',
      rating: 5.0,
      reviews: 23,
      category: 'Abayas',
      arrivedDate: '2024-01-15',
      isLimited: true
    },
    {
      id: 2,
      name: 'Silk Blend Hijab Collection',
      price: '$34.99',
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 45,
      category: 'Hijabs',
      arrivedDate: '2024-01-12',
      isLimited: false
    },
    {
      id: 3,
      name: 'Designer Prayer Set',
      price: '$89.99',
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 18,
      category: 'Accessories',
      arrivedDate: '2024-01-10',
      isLimited: true
    },
    {
      id: 4,
      name: 'Modern Cut Kaftan',
      price: '$119.99',
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=600&fit=crop',
      rating: 4.7,
      reviews: 31,
      category: 'Abayas',
      arrivedDate: '2024-01-08',
      isLimited: false
    },
    {
      id: 5,
      name: 'Premium Jewelry Set',
      price: '$79.99',
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 27,
      category: 'Accessories',
      arrivedDate: '2024-01-05',
      isLimited: true
    },
    {
      id: 6,
      name: 'Everyday Comfort Hijab',
      price: '$22.99',
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 52,
      category: 'Hijabs',
      arrivedDate: '2024-01-03',
      isLimited: false
    }
  ];

  const handleAddToCart = (item: any) => {
    toast.success(`${item.name} added to cart!`);
  };

  const handleAddToWishlist = (item: any) => {
    toast.success(`${item.name} added to wishlist!`);
  };

  const getDaysAgo = (dateString: string) => {
    const date = new Date(dateString);
    const today = new Date();
    const diffTime = Math.abs(today.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Clock className="h-8 w-8 text-primary mr-3" />
            <h1 className="text-4xl md:text-5xl font-bold font-poppins">
              New Arrivals
            </h1>
          </div>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the latest additions to our modest fashion collection, featuring fresh designs and trending styles
          </p>
        </div>

        {/* Stats Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="gradient-card border-border text-center p-6">
            <h3 className="text-2xl font-bold text-primary">{newArrivals.length}</h3>
            <p className="text-muted-foreground">New Products</p>
          </Card>
          <Card className="gradient-card border-border text-center p-6">
            <h3 className="text-2xl font-bold text-primary">
              {newArrivals.filter(item => item.isLimited).length}
            </h3>
            <p className="text-muted-foreground">Limited Edition</p>
          </Card>
          <Card className="gradient-card border-border text-center p-6">
            <h3 className="text-2xl font-bold text-primary">This Week</h3>
            <p className="text-muted-foreground">Latest Drops</p>
          </Card>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between mb-8 p-4 gradient-card rounded-lg border border-border">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <span className="text-sm font-medium">Filter by:</span>
            <Button variant="outline" size="sm">Category</Button>
            <Button variant="outline" size="sm">Date Added</Button>
            <Button variant="outline" size="sm">Limited Edition</Button>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">
              Showing {newArrivals.length} new products
            </span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newArrivals.map((item) => (
            <Card key={item.id} className="group gradient-card border-border hover:shadow-luxury transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                  <Badge className="bg-primary text-primary-foreground">
                    New
                  </Badge>
                  {item.isLimited && (
                    <Badge className="bg-destructive text-destructive-foreground">
                      Limited
                    </Badge>
                  )}
                  <Badge variant="outline" className="bg-background/80">
                    {item.category}
                  </Badge>
                </div>

                {/* Days Ago */}
                <div className="absolute top-4 right-4 bg-background/80 rounded-full px-3 py-1">
                  <span className="text-xs font-medium">
                    {getDaysAgo(item.arrivedDate)} days ago
                  </span>
                </div>

                {/* Wishlist Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-16 right-4 bg-background/80 hover:bg-background"
                  onClick={() => handleAddToWishlist(item)}
                >
                  <Heart className="h-4 w-4" />
                </Button>

                {/* Quick Add to Cart */}
                <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    className="w-full"
                    onClick={() => handleAddToCart(item)}
                  >
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-lg font-semibold font-poppins mb-2">{item.name}</h3>
                
                {/* Rating */}
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(item.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {item.rating} ({item.reviews} reviews)
                  </span>
                </div>

                {/* Arrival Date */}
                <div className="flex items-center space-x-2 mb-3">
                  <Clock className="h-4 w-4 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Added {getDaysAgo(item.arrivedDate)} days ago
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-xl font-bold">{item.price}</span>
                  {item.isLimited && (
                    <span className="text-xs text-destructive font-medium">
                      Limited Stock
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => handleAddToCart(item)}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Newsletter Signup */}
        <Card className="mt-12 gradient-card border-border">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold font-poppins mb-4">
              Stay Updated with New Arrivals
            </h3>
            <p className="text-muted-foreground mb-6">
              Be the first to know about our latest collections and exclusive releases
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-md border border-border bg-background"
              />
              <Button onClick={() => toast.success('Subscribed to new arrivals!')}>
                Subscribe
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>

      <Footer />
    </div>
  );
};

export default NewArrivals;