
import { useState } from "react";
import { Search, ShoppingBag, User } from "lucide-react";
import HamburgerIcon from "@/components/ui/HamburgerIcon";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import DrawerSidebar from "@/components/DrawerSidebar";

const Header = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  return (
    <>
      <header className="sticky top-0 z-50 glass-effect border-b border-border">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold font-poppins tracking-tight">
              Husn<span className="text-muted-foreground">Modesty</span>
            </h1>
          </div>

          {/* Navigation - Desktop */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Abayas
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Hijabs
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              Accessories
            </a>
            <a href="#" className="text-foreground hover:text-primary transition-colors font-medium">
              New Arrivals
            </a>
          </nav>

          {/* Search Bar - Desktop */}
          <div className="hidden lg:flex items-center relative max-w-sm">
            <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Search for modest wear..."
              className="pl-10 bg-secondary border-border focus:ring-primary"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="icon" className="hidden lg:flex">
              <Search className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="h-5 w-5" />
              <span className="absolute -top-1 -right-1 h-4 w-4 bg-primary text-primary-foreground text-xs rounded-full flex items-center justify-center">
                0
              </span>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setDrawerOpen(true)}
              aria-label="Open sidebar menu"
            >
              <HamburgerIcon className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
      </header>
      <DrawerSidebar isOpen={drawerOpen} onClose={() => setDrawerOpen(false)} />
    </>
  );
};

export default Header;