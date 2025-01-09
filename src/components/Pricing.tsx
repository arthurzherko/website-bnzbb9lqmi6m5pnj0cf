import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Check } from 'lucide-react';

const PricingCard = ({ title, price, description, features, isPopular }) => (
  <Card className={`flex flex-col ${isPopular ? 'border-primary shadow-lg' : ''}`}>
    <CardHeader>
      <CardTitle className="text-2xl">{title}</CardTitle>
      <CardDescription>{description}</CardDescription>
    </CardHeader>
    <CardContent className="flex-grow">
      <p className="text-4xl font-bold mb-4">${price}<span className="text-xl font-normal text-muted-foreground">/mo</span></p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center">
            <Check className="mr-2 h-4 w-4 text-primary" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </CardContent>
    <CardFooter>
      <Button className="w-full" variant={isPopular ? 'default' : 'outline'}>
        {isPopular ? 'Start Free Trial' : 'Choose Plan'}
      </Button>
    </CardFooter>
  </Card>
);

const Pricing = () => {
  const plans = [
    {
      title: 'Basic',
      price: 0,
      description: 'For casual fitness enthusiasts',
      features: ['Workout tracking', 'Basic analytics', 'Community access'],
      isPopular: false
    },
    {
      title: 'Pro',
      price: 9.99,
      description: 'For serious fitness goals',
      features: ['Advanced tracking', 'Detailed analytics', 'Personalized plans', 'Priority support'],
      isPopular: true
    },
    {
      title: 'Elite',
      price: 19.99,
      description: 'For athletes and professionals',
      features: ['All Pro features', 'One-on-one coaching', 'Custom workout creation', 'Nutrition planning'],
      isPopular: false
    }
  ];

  return (
    <section id="pricing" className="py-20 bg-background">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12">Choose Your Plan</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <PricingCard key={index} {...plan} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;