import { Shield, Truck, Heart, Sparkles } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Quality Guarantee",
    description: "Premium fabrics and impeccable craftsmanship in every piece"
  },
  {
    icon: Truck,
    title: "Free Shipping",
    description: "Complimentary shipping on orders above $99"
  },
  {
    icon: Heart,
    title: "Thoughtful Design",
    description: "Modest fashion that celebrates your style and values"
  },
  {
    icon: Sparkles,
    title: "New Arrivals",
    description: "Fresh styles added weekly to keep your wardrobe current"
  }
];

const Features = () => {
  return (
    <section className="py-20 px-4 lg:px-8 bg-secondary/20">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="text-center group hover:scale-105 transition-transform duration-300"
            >
              <div className="w-16 h-16 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-6 shadow-elegant group-hover:shadow-luxury transition-all duration-300">
                <feature.icon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold font-poppins mb-3">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;