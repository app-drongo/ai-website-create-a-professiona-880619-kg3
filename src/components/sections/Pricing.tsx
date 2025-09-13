import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check, Star, Calendar, Users, Wifi, Car, Coffee, Tv, Utensils, Waves } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Pricing() {
  const apartments = [
    {
      name: 'Downtown Studio',
      description: 'Modern studio in the heart of the city',
      price: '$89',
      period: '/night',
      badge: 'City Center',
      features: [
        '1 guest maximum',
        'High-speed WiFi included',
        'Smart TV with streaming',
        'Full kitchenette',
        '24/7 building security',
        'Walking distance to attractions',
        'Public transit nearby',
      ],
      amenities: [Wifi, Tv, Coffee, Utensils],
      cta: 'Book Now',
      popular: false,
      cleaningFee: 25,
    },
    {
      name: 'Executive 1-Bedroom',
      description: 'Premium apartment with city views and luxury amenities',
      price: '$149',
      period: '/night',
      badge: 'Most Booked',
      features: [
        'Up to 3 guests',
        'Separate bedroom & living area',
        'Premium furnishings',
        'Full kitchen with dishwasher',
        'In-unit washer/dryer',
        'Balcony with city views',
        'Concierge services',
        'Gym access included',
      ],
      amenities: [Wifi, Tv, Coffee, Utensils, Waves],
      cta: 'Book Now',
      popular: true,
      cleaningFee: 35,
    },
    {
      name: 'Family 2-Bedroom',
      description: 'Spacious apartment perfect for families and groups',
      price: '$199',
      period: '/night',
      badge: 'Best for Groups',
      features: [
        'Up to 6 guests',
        '2 bedrooms, 2 bathrooms',
        'Full kitchen & dining area',
        'Living room with sofa bed',
        'Free parking included',
        'Child-friendly amenities',
        'Quiet residential area',
        'Near parks and schools',
      ],
      amenities: [Wifi, Tv, Coffee, Utensils, Car],
      cta: 'Book Now',
      popular: false,
      cleaningFee: 45,
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <Calendar className="size-3 mr-2" />
            Available Properties
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Choose Your Perfect
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              City Stay
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed mb-8">
            Direct booking with no platform fees. All apartments are professionally managed, fully
            furnished, and ready for your stay.
          </p>

          {/* Stay Duration Toggle */}
          <div className="inline-flex items-center p-1 bg-muted rounded-lg">
            <button className="px-4 py-2 text-sm font-medium bg-background text-foreground rounded-md shadow-sm">
              Nightly Rate
            </button>
            <button className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Weekly Stay
              <Badge variant="secondary" className="ml-2 text-xs">
                15% Off
              </Badge>
            </button>
          </div>
        </div>

        {/* Property Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {apartments.map((apartment, index) => (
            <Card
              key={index}
              className={cn(
                'relative overflow-hidden transition-all duration-300 hover:shadow-lg',
                apartment.popular
                  ? 'border-primary/50 shadow-lg shadow-primary/10 scale-105'
                  : 'border-border/50 hover:border-primary/20'
              )}
            >
              {/* Popular Badge */}
              {apartment.popular && (
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <Badge className="bg-primary text-primary-foreground px-4 py-1">
                    <Star className="size-3 mr-1" />
                    {apartment.badge}
                  </Badge>
                </div>
              )}

              {/* Background Gradient */}
              {apartment.popular && (
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
              )}

              <CardHeader className="relative text-center pb-8">
                {apartment.badge && !apartment.popular && (
                  <Badge variant="outline" className="mb-4 mx-auto w-fit">
                    {apartment.badge}
                  </Badge>
                )}

                <CardTitle className="text-2xl mb-2">{apartment.name}</CardTitle>
                <CardDescription className="text-base mb-6">
                  {apartment.description}
                </CardDescription>

                <div className="flex items-end justify-center gap-1 mb-2">
                  <span className="text-4xl font-bold">{apartment.price}</span>
                  <span className="text-muted-foreground mb-1">{apartment.period}</span>
                </div>
                <p className="text-sm text-muted-foreground">
                  + ${apartment.cleaningFee} cleaning fee
                </p>
              </CardHeader>

              <CardContent className="relative space-y-6">
                {/* Amenities Icons */}
                <div className="flex justify-center gap-3 pb-4 border-b border-border/50">
                  {apartment.amenities.map((Icon, iconIndex) => (
                    <div
                      key={iconIndex}
                      className="size-8 rounded-full bg-primary/10 flex items-center justify-center"
                    >
                      <Icon className="size-4 text-primary" />
                    </div>
                  ))}
                </div>

                {/* Features List */}
                <ul className="space-y-3">
                  {apartment.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-3">
                      <div className="size-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Check className="size-3 text-primary" />
                      </div>
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA Button */}
                <Button
                  className={cn(
                    'w-full text-base py-6',
                    apartment.popular ? 'bg-primary hover:bg-primary/90' : ''
                  )}
                  variant={apartment.popular ? 'default' : 'outline'}
                >
                  {apartment.popular && <Calendar className="size-4 mr-2" />}
                  {apartment.cta}
                </Button>

                <p className="text-center text-sm text-muted-foreground">
                  Free cancellation • Instant confirmation
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="text-center mt-16 max-w-2xl mx-auto">
          <h3 className="text-xl font-semibold mb-4">Extended Stay Discounts Available</h3>
          <p className="text-muted-foreground mb-6">
            Planning a longer visit? We offer special rates for weekly and monthly stays. Contact us
            directly for custom pricing on extended bookings.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg">
              <Users className="size-4 mr-2" />
              View All Properties
            </Button>
            <Button size="lg">Check Availability</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
