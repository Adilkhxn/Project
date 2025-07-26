import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import hijabImage from "@/assets/hijab-collection.jpg";
import accessoriesImage from "@/assets/accessories-collection.jpg";

const collections = [
  {
    title: "Premium Abayas",
    description: "Luxurious flowing abayas crafted with finest fabrics",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158",
    items: "120+ Styles"
  },
  {
    title: "Elegant Hijabs",
    description: "Soft, comfortable hijabs in beautiful colors and textures",
    image: hijabImage,
    items: "80+ Colors"
  },
  {
    title: "Modest Accessories",
    description: "Complete your look with our curated accessories",
    image: accessoriesImage,
    items: "50+ Pieces"
  }
];

const FeaturedCollections = () => {
  const handleExploreCollection = (collectionName: string) => {
    toast.success(`Exploring ${collectionName}...`, {
      description: 'Collection page coming soon!'
    });
  };

  return (
    <section className="py-20 px-4 lg:px-8">
      <div className="container mx-auto max-w-7xl">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold font-poppins mb-6">
            Featured Collections
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our carefully curated collections designed for the modern modest woman
          </p>
        </div>

        {/* Collections Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <Card 
              key={index} 
              className="group gradient-card border-border hover:shadow-luxury transition-all duration-500 cursor-pointer overflow-hidden"
            >
              <div className="relative h-80 overflow-hidden">
                <img
                  src={collection.image}
                  alt={collection.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-sm text-primary font-semibold">{collection.items}</span>
                </div>
              </div>
              
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold font-poppins mb-3">{collection.title}</h3>
                <p className="text-muted-foreground mb-6">{collection.description}</p>
                <Button 
                  variant="outline" 
                  className="w-full border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                  onClick={() => handleExploreCollection(collection.title)}
                >
                  Explore Collection
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedCollections;