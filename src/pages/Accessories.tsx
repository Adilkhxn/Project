import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Heart, ShoppingBag, Star } from 'lucide-react';
import { toast } from '@/components/ui/sonner';

const Accessories = () => {
  const accessories = [
    {
      id: 1,
      name: 'Prayer Beads Set',
      price: '$19.99',
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 156,
      isNew: false,
      isSale: false,
      category: 'Prayer'
    },
    {
      id: 2,
      name: 'Elegant Brooch Collection',
      price: '$29.99',
      originalPrice: '$39.99',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 89,
      isNew: true,
      isSale: true,
      category: 'Jewelry'
    },
    {
      id: 3,
      name: 'Modest Handbag',
      price: '$79.99',
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop',
      rating: 4.7,
      reviews: 124,
      isNew: false,
      isSale: false,
      category: 'Bags'
    },
    {
      id: 4,
      name: 'Hijab Pins Set',
      price: '$12.99',
      originalPrice: '$16.99',
      image: 'https://images.unsplash.com/photo-1506629905607-d9c297d3f5f5?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 203,
      isNew: false,
      isSale: true,
      category: 'Pins'
    },
    {
      id: 5,
      name: 'Prayer Mat Luxury',
      price: '$89.99',
      originalPrice: null,
      image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
      rating: 5.0,
      reviews: 67,
      isNew: true,
      isSale: false,
      category: 'Prayer'
    },
    {
      id: 6,
      name: 'Modest Jewelry Set',
      price: '$45.99',
      originalPrice: '$59.99',
      image: 'https://images.unsplash.com/photo-1515562141207-7a88fb7ce338?w=400&h=400&fit=crop',
      rating: 4.5,
      reviews: 178,
      isNew: false,
      isSale: true,
      category: 'Jewelry'
    }
  ];

  const categories = ['All', 'Prayer', 'Jewelry', 'Bags', 'Pins'];
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredAccessories = selectedCategory === 'All' 
    ? accessories 
    : accessories.filter(item => item.category === selectedCategory);

  const handleAddToCart = (accessory: any) => {
    toast.success(`${accessory.name} added to cart!`);
  };

  const handleAddToWishlist = (accessory: any) => {
    toast.success(`${accessory.name} added to wishlist!`);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold font-poppins mb-4">
            Modest Accessories
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Complete your modest look with our carefully curated collection of accessories and essentials
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="px-6"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Filter Bar */}
        <div className="flex flex-wrap items-center justify-between mb-8 p-4 gradient-card rounded-lg border border-border">
          <div className="flex items-center space-x-4 mb-4 md:mb-0">
            <span className="text-sm font-medium">Filter by:</span>
            <Button variant="outline" size="sm">Price</Button>
            <Button variant="outline" size="sm">Brand</Button>
            <Button variant="outline" size="sm">Rating</Button>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm text-muted-foreground">
              Showing {filteredAccessories.length} products
            </span>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredAccessories.map((accessory) => (
            <Card key={accessory.id} className="group gradient-card border-border hover:shadow-luxury transition-all duration-300 overflow-hidden">
              <div className="relative">
                <img
                  src={accessory.image}
                  alt={accessory.name}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Badges */}
                <div className="absolute top-4 left-4 flex flex-col space-y-2">
                  {accessory.isNew && (
                    <Badge className="bg-primary text-primary-foreground">New</Badge>
                  )}
                  {accessory.isSale && (
                    <Badge className="bg-destructive text-destructive-foreground">Sale</Badge>
                  )}
                  <Badge variant="outline" className="bg-background/80">
                    {accessory.category}
                  </Badge>
                </div>

                {/* Wishlist Button */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute top-4 right-4 bg-background/80 hover:bg-background"
                  onClick={() => handleAddToWishlist(accessory)}
                >
                  <Heart className="h-4 w-4" />
                </Button>

                {/* Quick Add to Cart */}
                <div className="absolute inset-x-4 bottom-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Button 
                    className="w-full"
                    onClick={() => handleAddToCart(accessory)}
                  >
                    <ShoppingBag className="h-4 w-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
              </div>

              <CardContent className="p-6">
                <h3 className="text-lg font-semibold font-poppins mb-2">{accessory.name}</h3>
                
                {/* Rating */}
                <div className="flex items-center space-x-2 mb-3">
                  <div className="flex items-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(accessory.rating)
                            ? 'text-yellow-400 fill-current'
                            : 'text-muted-foreground'
                        }`}
                      />
                    ))}
                  </div>
                  <span className="text-sm text-muted-foreground">
                    {accessory.rating} ({accessory.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-center space-x-2 mb-4">
                  <span className="text-xl font-bold">{accessory.price}</span>
                  {accessory.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      {accessory.originalPrice}
                    </span>
                  )}
                </div>

                {/* Add to Cart Button */}
                <Button 
                  variant="outline" 
                  className="w-full"
                  onClick={() => handleAddToCart(accessory)}
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

export default Accessories;