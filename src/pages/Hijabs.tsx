import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

const Hijabs = () => {
  const hijabs = [
    {
      id: 1,
      name: 'Premium Silk Hijab',
      price: '$24.99',
      originalPrice: '$34.99',
      image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 89,
      isNew: false,
      isSale: true,
      colors: ['Black', 'Navy', 'Burgundy']
    },
    {
      id: 2,
      name: 'Cotton Jersey Hijab',
      price: '$18.99',
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=400&fit=crop',
      rating: 4.7,
      reviews: 156,
      isNew: true,
      isSale: false,
      colors: ['White', 'Beige', 'Grey']
    },
    {
      id: 3,
      name: 'Chiffon Evening Hijab',
      price: '$32.99',
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 124,
      isNew: false,
      isSale: false,
      colors: ['Rose Gold', 'Champagne', 'Silver']
    },
    {
      id: 4,
      name: 'Modal Blend Hijab',
      price: '$21.99',
      originalPrice: '$28.99',
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 203,
      isNew: false,
      isSale: true,
      colors: ['Dusty Pink', 'Sage Green', 'Lavender']
    },
    {
      id: 5,
      name: 'Luxury Cashmere Hijab',
      price: '$89.99',
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=400&fit=crop',
      rating: 5.0,
      reviews: 45,
      isNew: true,
      isSale: false,
      colors: ['Cream', 'Camel', 'Charcoal']
    },
    {
      id: 6,
      name: 'Everyday Cotton Hijab',
      price: '$15.99',
      originalPrice: '$19.99',
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=400&fit=crop',
      rating: 4.5,
      reviews: 278,
      isNew: false,
      isSale: true,
      colors: ['Black', 'White', 'Navy', 'Brown']
    }
  ];

  const handleAddToCart = (hijab: any) => {
    toast.success(`${hijab.name} added to cart!`);
  };

  const handleAddToWishlist = (hijab: any) => {
    toast.success(`${hijab.name} added to wishlist!`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Beautiful Hijabs
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our stunning collection of hijabs in premium fabrics, perfect for every occasion and style
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between mb-8 p-4 gradient-card rounded-lg border border-border">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <span className="text-sm font-medium">Filter by:</span>
            <Button variant="outline" size="sm">Material</Button>
            <Button variant="outline" size="sm">Color</Button>
            <Button variant="outline" size="sm">Price</Button>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Showing {hijabs.length} products</span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {hijabs.map((hijab) => (
            <Card key={hijab.id} className="group gradient-card border-border hover:shadow-luxury transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={hijab.image}
                  alt={hijab.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                  {hijab.isNew && (
                    <Badge className="bg-primary text-primary-foreground">New</Badge>
                  )}
                  {hijab.isSale && (
                    <Badge className="bg-destructive text-destructive-foreground">Sale</Badge>
                  )}
                </div>

                {/* Wishlist Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-background/80 hover:bg-background"
                  onClick={() => handleAddToWishlist(hijab)}
                >
                  <Heart className="h-4 w-4" />
                </Button>

                {/* Quick Add to Cart */}
                <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    className="w-full"
                    onClick={() => handleAddToCart(hijab)}
                  >
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-lg font-semibold font-poppins mb-2">{hijab.name}</h3>
                
                {/* Rating */}
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(hijab.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {hijab.rating} ({hijab.reviews} reviews)
                  </span>
                </div>

                {/* Colors */}
                <div className="mb-3">
                  <span className="text-sm text-muted-foreground">
                    Available in: {hijab.colors.join(', ')}
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-xl font-bold">{hijab.price}</span>
                  {hijab.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {hijab.originalPrice}
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => handleAddToCart(hijab)}
                >
                  Add to Cart
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg" onClick={() => toast.info('Loading more products...')}>
            Load More Products
          </Button>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Hijabs;