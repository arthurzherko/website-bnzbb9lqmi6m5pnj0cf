import React from 'react';
import { Separator } from '@/components/ui/separator';
import { Facebook, Twitter, Instagram, Youtube } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">FitTrack Pro</h3>
            <p className="text-sm">Transform your fitness journey with smart tracking and personalized workouts.</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#features" className="hover:underline">Features</a></li>
              <li><a href="#testimonials" className="hover:underline">Testimonials</a></li>
              <li><a href="#pricing" className="hover:underline">Pricing</a></li>
              <li><a href="#" className="hover:underline">Download App</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:underline">FAQ</a></li>
              <li><a href="#" className="hover:underline">Contact Us</a></li>
              <li><a href="#" className="hover:underline">Privacy Policy</a></li>
              <li><a href="#" className="hover:underline">Terms of Service</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-accent-foreground transition-colors"><Facebook size={24} /></a>
              <a href="#" className="hover:text-accent-foreground transition-colors"><Twitter size={24} /></a>
              <a href="#" className="hover:text-accent-foreground transition-colors"><Instagram size={24} /></a>
              <a href="#" className="hover:text-accent-foreground transition-colors"><Youtube size={24} /></a>
            </div>
          </div>
        </div>
        <Separator className="mb-8" />
        <div className="text-center text-sm">
          <p>&copy; 2023 FitTrack Pro. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;