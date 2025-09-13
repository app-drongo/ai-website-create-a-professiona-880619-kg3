import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Wifi, Car, Coffee, Tv, Wind, Utensils, Waves, Dumbbell, Shield } from 'lucide-react';

export default function Features() {
  const features = [
    {
      icon: Wifi,
      title: 'High-Speed WiFi',
      description:
        'Complimentary fiber internet with speeds up to 100 Mbps, perfect for remote work and streaming.',
      badge: 'Connectivity',
    },
    {
      icon: Car,
      title: 'Free Parking',
      description:
        'Dedicated parking space included with every rental - no need to search for street parking.',
      badge: 'Convenience',
    },
    {
      icon: Coffee,
      title: 'Fully Equipped Kitchen',
      description:
        'Complete kitchen with appliances, cookware, and dining essentials for home-cooked meals.',
      badge: 'Amenities',
    },
    {
      icon: Tv,
      title: 'Smart Entertainment',
      description:
        '55-inch smart TV with Netflix, streaming services, and premium cable channels included.',
      badge: 'Entertainment',
    },
    {
      icon: Wind,
      title: 'Climate Control',
      description:
        'Individual heating and air conditioning units in every room for year-round comfort.',
      badge: 'Comfort',
    },
    {
      icon: Utensils,
      title: 'Premium Linens',
      description:
        'Hotel-quality bedding, towels, and bathroom amenities refreshed between each stay.',
      badge: 'Quality',
    },
    {
      icon: Waves,
      title: 'Weekly Housekeeping',
      description:
        'Professional cleaning service available for extended stays of 7+ nights at no extra charge.',
      badge: 'Service',
    },
    {
      icon: Dumbbell,
      title: 'Fitness Access',
      description:
        'Complimentary access to building fitness center and rooftop terrace (select properties).',
      badge: 'Wellness',
    },
    {
      icon: Shield,
      title: '24/7 Host Support',
      description:
        'Direct contact with local host team for immediate assistance and local recommendations.',
      badge: 'Support',
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            Property Features
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Everything Included for
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Your Perfect Stay
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Each City Stay Rentals apartment comes fully furnished with premium amenities and
            thoughtful touches to make you feel at home.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border-border/50 hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5"
              >
                {/* Background Gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <CardHeader className="relative">
                  <div className="flex items-center gap-4 mb-2">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors duration-300">
                      <Icon className="size-6 text-primary" />
                    </div>
                    <Badge variant="secondary" className="text-xs">
                      {feature.badge}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </CardTitle>
                </CardHeader>

                <CardContent className="relative">
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>

                {/* Hover Effect Border */}
                <div className="absolute inset-0 rounded-lg border border-transparent group-hover:border-primary/20 transition-colors duration-300" />
              </Card>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-4">
            Ready to experience premium short-term living?
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors">
              Book Now
            </button>
            <button className="px-6 py-3 border border-border rounded-lg font-medium hover:bg-accent transition-colors">
              View All Properties
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
