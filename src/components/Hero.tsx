import React from 'react';
import { Button } from '@/components/ui/button';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="bg-gradient-to-r from-primary to-secondary py-20 text-primary-foreground">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="md:w-1/2 mb-10 md:mb-0"
        >
          <h1 className="text-5xl font-bold mb-4">Transform Your Fitness Journey</h1>
          <p className="text-xl mb-6">Track workouts, set goals, and achieve results with FitTrack Pro. Your personal fitness companion, right in your pocket.</p>
          <Button size="lg" className="mr-4">Get Started</Button>
          <Button variant="outline" size="lg">Learn More</Button>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="md:w-1/2"
        >
          <img src="/app-preview.png" alt="FitTrack Pro App Preview" className="rounded-lg shadow-2xl" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;