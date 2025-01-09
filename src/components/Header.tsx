import React from 'react';
import { Button } from '@/components/ui/button';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList } from '@/components/ui/navigation-menu';

const Header = () => {
  return (
    <header className="bg-primary text-primary-foreground py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">FitTrack Pro</div>
        <NavigationMenu>
          <NavigationMenuList className="flex items-center gap-x-6">
            <NavigationMenuItem>
              <NavigationMenuLink className="hover:text-accent-foreground transition-colors" href="#features">Features</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="hover:text-accent-foreground transition-colors" href="#testimonials">Testimonials</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <NavigationMenuLink className="hover:text-accent-foreground transition-colors" href="#pricing">Pricing</NavigationMenuLink>
            </NavigationMenuItem>
            <NavigationMenuItem>
              <Button variant="secondary">Download App</Button>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
      </div>
    </header>
  );
};

export default Header;