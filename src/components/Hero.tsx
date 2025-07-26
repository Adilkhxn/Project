import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";
import heroImage from "@/assets/hero-abaya.jpg";

const Hero = () => {
  const handleShopCollection = () => {
    toast.success('Welcome to our collection!', {
      description: 'Shop page coming soon with beautiful modest wear.'
    });
  };

  const handleViewLookbook = () => {
    toast.info('Lookbook coming soon!', {
      description: 'Discover our latest styling inspiration.'
    });
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Elegant Modest Fashion"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <h1 className="text-5xl md:text-7xl font-bold font-poppins mb-6 animate-fade-in">
          Elegant
          <span className="block text-muted-foreground">Modesty</span>
        </h1>
        
        <p className="text-xl md:text-2xl text-foreground/80 mb-8 max-w-2xl mx-auto animate-slide-up">
          Discover timeless beauty in our curated collection of abayas, hijabs, and modest wear accessories
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
          <Button 
            size="lg" 
            className="text-lg px-8 py-6 shadow-elegant hover:shadow-luxury transition-all duration-300"
            onClick={handleShopCollection}
          >
            Shop Collection
          </Button>
          <Button 
            variant="outline" 
            size="lg" 
            className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all duration-300"
            onClick={handleViewLookbook}
          >
            View Lookbook
          </Button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex justify-center">
          <div className="w-1 h-3 bg-primary rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;