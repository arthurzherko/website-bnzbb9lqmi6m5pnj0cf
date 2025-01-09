import React from 'react';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const TestimonialCard = ({ name, avatar, role, content, rating }) => (
  <Card className="flex flex-col h-full">
    <CardContent className="flex-grow pt-6">
      <div className="flex items-center mb-4">
        {[...Array(5)].map((_, i) => (
          <Star key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} fill="currentColor" />
        ))}
      </div>
      <p className="text-muted-foreground mb-4">&quot;{content}&quot;</p>
    </CardContent>
    <CardFooter className="flex items-center">
      <Avatar className="mr-4">
        <AvatarImage src={avatar} alt={name} />
        <AvatarFallback>{name.split(' ').map(n => n[0]).join('')}</AvatarFallback>
      </Avatar>
      <div>
        <p className="font-semibold">{name}</p>
        <p className="text-sm text-muted-foreground">{role}</p>
      </div>
    </CardFooter>
  </Card>
);

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Sarah Johnson',
      avatar: '/avatars/sarah.jpg',
      role: 'Fitness Enthusiast',
      content: 'FitTrack Pro has revolutionized my workout routine. The personalized plans and progress tracking keep me motivated every day!',
      rating: 5
    },
    {
      name: 'Mike Chen',
      avatar: '/avatars/mike.jpg',
      role: 'Marathon Runner',
      content: 'As a runner, I love how FitTrack Pro integrates with my other devices and provides detailed analytics on my performance.',
      rating: 4
    },
    {
      name: 'Emily Rodriguez',
      avatar: '/avatars/emily.jpg',
      role: 'Yoga Instructor',
      content: 'The community features in FitTrack Pro are amazing. It&apos;s great to connect with like-minded fitness enthusiasts and share our journeys.',
      rating: 5
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-secondary">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard key={index} {...testimonial} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;