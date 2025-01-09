import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Activity, BarChart2, Users, Award } from 'lucide-react';

const FeatureCard = ({ icon: Icon, title, description }) => (
  <Card className="flex flex-col items-center text-center hover:shadow-lg transition-shadow">
    <CardHeader>
      <Icon className="w-12 h-12 text-primary mb-2" />
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <CardDescription>{description}</CardDescription>
    </CardContent>
  </Card>
);

const Features = () => {
  const features = [
    {
      icon: Activity,
      title: 'Smart Workout Tracking',
      description: 'Automatically log your exercises, sets, and reps with our intelligent tracking system.'
    },
    {
      icon: BarChart2,
      title: 'Progress Analytics',
      description: 'Visualize your fitness journey with detailed charts and insights on your performance.'
    },
    {
      icon: Users,
      title: 'Community Challenges',
      description: 'Join fitness challenges and compete with friends to stay motivated and accountable.'
    },
    {
      icon: Award,
      title: 'Personalized Goals',
      description: 'Set and achieve custom fitness goals tailored to your individual needs and preferences.'
    }
  ];

  return (
    <section id="features" className="py-20 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Powerful Features to Boost Your Fitness</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;