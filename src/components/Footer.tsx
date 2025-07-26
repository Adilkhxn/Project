import { Instagram, Facebook, Twitter, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/sonner";

const Footer = () => {
  return (
    <footer className="gradient-card border-t border-border">
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <h3 className="text-2xl font-bold font-poppins mb-4">
              Husn<span className="text-muted-foreground">Modesty</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              Elevating modest fashion with elegance, style, and timeless beauty for the modern woman.
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-primary hover:text-primary-foreground"
                onClick={() => toast.info('Follow us on Instagram @husnmodesty')}
              >
                <Instagram className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-primary hover:text-primary-foreground"
                onClick={() => toast.info('Follow us on Facebook')}
              >
                <Facebook className="h-5 w-5" />
              </Button>
              <Button 
                variant="ghost" 
                size="icon" 
                className="hover:bg-primary hover:text-primary-foreground"
                onClick={() => toast.info('Follow us on Twitter')}
              >
                <Twitter className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold font-poppins mb-4">Shop</h4>
            <ul className="space-y-2">
              <li><button onClick={() => toast.info('Abayas collection coming soon')} className="text-muted-foreground hover:text-primary transition-colors">Abayas</button></li>
              <li><button onClick={() => toast.info('Hijabs collection coming soon')} className="text-muted-foreground hover:text-primary transition-colors">Hijabs</button></li>
              <li><button onClick={() => toast.info('Accessories collection coming soon')} className="text-muted-foreground hover:text-primary transition-colors">Accessories</button></li>
              <li><button onClick={() => toast.info('New arrivals coming soon')} className="text-muted-foreground hover:text-primary transition-colors">New Arrivals</button></li>
              <li><button onClick={() => toast.info('Sale section coming soon')} className="text-muted-foreground hover:text-primary transition-colors">Sale</button></li>
            </ul>
          </div>

          {/* Customer Care */}
          <div>
            <h4 className="text-lg font-semibold font-poppins mb-4">Customer Care</h4>
            <ul className="space-y-2">
              <li><button onClick={() => toast.info('Size guide coming soon')} className="text-muted-foreground hover:text-primary transition-colors">Size Guide</button></li>
              <li><button onClick={() => toast.info('Shipping info coming soon')} className="text-muted-foreground hover:text-primary transition-colors">Shipping Info</button></li>
              <li><button onClick={() => toast.info('Returns policy coming soon')} className="text-muted-foreground hover:text-primary transition-colors">Returns</button></li>
              <li><button onClick={() => toast.info('Contact page coming soon')} className="text-muted-foreground hover:text-primary transition-colors">Contact Us</button></li>
              <li><button onClick={() => toast.info('FAQ page coming soon')} className="text-muted-foreground hover:text-primary transition-colors">FAQ</button></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold font-poppins mb-4">Stay Updated</h4>
            <p className="text-muted-foreground mb-4">
              Subscribe to receive updates on new collections and exclusive offers.
            </p>
            <div className="flex space-x-2">
              <Input 
                placeholder="Your email" 
                className="bg-secondary border-border focus:ring-primary"
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    toast.success('Thank you for subscribing!', {
                      description: 'Newsletter functionality coming soon.'
                    });
                  }
                }}
              />
              <Button 
                className="px-6"
                onClick={() => toast.success('Thank you for subscribing!', {
                  description: 'Newsletter functionality coming soon.'
                })}
              >
                <Mail className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-muted-foreground text-sm">
            © 2024 HusnModesty. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <button onClick={() => toast.info('Privacy policy coming soon')} className="text-muted-foreground hover:text-primary text-sm transition-colors">Privacy Policy</button>
            <button onClick={() => toast.info('Terms of service coming soon')} className="text-muted-foreground hover:text-primary text-sm transition-colors">Terms of Service</button>
            <button onClick={() => toast.info('Cookie policy coming soon')} className="text-muted-foreground hover:text-primary text-sm transition-colors">Cookie Policy</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;