import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

const Abayas = () => {
  const abayas = [
    {
      id: 1,
      name: 'Elegant Black Abaya',
      price: '$89.99',
      originalPrice: '$119.99',
      image: 'https://images.unsplash.com/photo-1583391733956-6c78276477e2?w=400&h=600&fit=crop',
      rating: 4.8,
      reviews: 124,
      isNew: false,
      isSale: true
    },
    {
      id: 2,
      name: 'Royal Blue Abaya',
      price: '$95.99',
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1594736797933-d0401ba2fe65?w=400&h=600&fit=crop',
      rating: 4.9,
      reviews: 89,
      isNew: true,
      isSale: false
    },
    {
      id: 3,
      name: 'Embroidered Grey Abaya',
      price: '$129.99',
      originalPrice: '$159.99',
      image: 'https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=600&fit=crop',
      rating: 4.7,
      reviews: 156,
      isNew: false,
      isSale: true
    },
    {
      id: 4,
      name: 'Modern Cut Abaya',
      price: '$79.99',
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=600&fit=crop',
      rating: 4.6,
      reviews: 203,
      isNew: false,
      isSale: false
    },
    {
      id: 5,
      name: 'Luxury Silk Abaya',
      price: '$199.99',
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=400&h=600&fit=crop',
      rating: 5.0,
      reviews: 67,
      isNew: true,
      isSale: false
    },
    {
      id: 6,
      name: 'Casual Daily Abaya',
      price: '$65.99',
      originalPrice: '$85.99',
      image: 'https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=600&fit=crop',
      rating: 4.5,
      reviews: 178,
      isNew: false,
      isSale: true
    }
  ];

  const handleAddToCart = (abaya: any) => {
    toast.success(`${abaya.name} added to cart!`);
  };

  const handleAddToWishlist = (abaya: any) => {
    toast.success(`${abaya.name} added to wishlist!`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Elegant Abayas
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover our exquisite collection of modest abayas, crafted with premium fabrics and timeless elegance
          </p>
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between mb-8 p-4 gradient-card rounded-lg border border-border">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <span className="text-sm font-medium">Filter by:</span>
            <Button variant="outline" size="sm">Price</Button>
            <Button variant="outline" size="sm">Color</Button>
            <Button variant="outline" size="sm">Size</Button>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">Showing {abayas.length} products</span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {abayas.map((abaya) => (
            <Card key={abaya.id} className="group gradient-card border-border hover:shadow-luxury transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={abaya.image}
                  alt={abaya.name}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                  {abaya.isNew && (
                    <Badge className="bg-primary text-primary-foreground">New</Badge>
                  )}
                  {abaya.isSale && (
                    <Badge className="bg-destructive text-destructive-foreground">Sale</Badge>
                  )}
                </div>

                {/* Wishlist Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-background/80 hover:bg-background"
                  onClick={() => handleAddToWishlist(abaya)}
                >
                  <Heart className="h-4 w-4" />
                </Button>

                {/* Quick Add to Cart */}
                <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    className="w-full"
                    onClick={() => handleAddToCart(abaya)}
                  >
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-lg font-semibold font-poppins mb-2">{abaya.name}</h3>
                
                {/* Rating */}
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(abaya.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {abaya.rating} ({abaya.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-xl font-bold">{abaya.price}</span>
                  {abaya.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {abaya.originalPrice}
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => handleAddToCart(abaya)}
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

export default Abayas;