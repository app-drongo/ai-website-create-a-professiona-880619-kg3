import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { ArrowRight, MapPin, Calendar, Star, Shield } from 'lucide-react';

export default function CTA() {
  const stats = [
    { value: '6', label: 'Premium Apartments', icon: MapPin },
    { value: '4.9', label: 'Guest Rating', icon: Star },
    { value: '100%', label: 'Direct Booking', icon: Shield },
    { value: '24/7', label: 'Guest Support', icon: Calendar },
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-accent/10" />
      <div className="absolute top-0 left-1/4 size-96 bg-primary/20 rounded-full blur-3xl opacity-20" />
      <div className="absolute bottom-0 right-1/4 size-96 bg-accent/20 rounded-full blur-3xl opacity-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Main CTA */}
        <Card className="border-primary/20 bg-background/80 backdrop-blur-sm shadow-2xl shadow-primary/10 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />

          <CardContent className="relative p-12 lg:p-16">
            <div className="text-center max-w-4xl mx-auto">
              {/* Badge */}
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 border border-primary/20 rounded-full text-sm font-medium text-primary mb-8">
                <Star className="size-4 mr-2" />
                Direct Booking - No Platform Fees
              </div>

              {/* Main Heading */}
              <h2 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
                Ready to Experience
                <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                  Premium City Living?
                </span>
              </h2>

              <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
                Book directly with City Stay Rentals and save on platform fees while enjoying
                personalized service and our carefully curated collection of downtown apartments.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
                <Button size="lg" className="group text-base px-8 py-4">
                  Book Now
                  <ArrowRight className="ml-2 size-5 transition-transform group-hover:translate-x-1" />
                </Button>
                <Button size="lg" variant="outline" className="text-base px-8 py-4">
                  View All Properties
                </Button>
              </div>

              {/* Trust Indicators */}
              <div className="text-center mb-12">
                <p className="text-sm text-muted-foreground mb-6">
                  Trusted by travelers from around the world
                </p>
                <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
                  {/* Guest origin indicators */}
                  {['🇺🇸 USA', '🇨🇦 Canada', '🇬🇧 UK', '🇩🇪 Germany', '🇫🇷 France'].map((country, i) => (
                    <div key={i} className="text-sm text-muted-foreground/70 font-medium">
                      {country}
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <div key={index} className="text-center">
                      <div className="size-12 mx-auto mb-3 rounded-full bg-primary/10 flex items-center justify-center">
                        <Icon className="size-6 text-primary" />
                      </div>
                      <div className="text-2xl lg:text-3xl font-bold text-foreground mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-muted-foreground">{stat.label}</div>
                    </div>
                  );
                })}
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Bottom Section */}
        <div className="text-center mt-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="space-y-2">
              <div className="size-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <Calendar className="size-6 text-primary" />
              </div>
              <h3 className="font-semibold">Instant Availability</h3>
              <p className="text-sm text-muted-foreground">
                Real-time calendar updates and immediate confirmation
              </p>
            </div>

            <div className="space-y-2">
              <div className="size-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <Shield className="size-6 text-primary" />
              </div>
              <h3 className="font-semibold">Verified Properties</h3>
              <p className="text-sm text-muted-foreground">
                Professionally managed and regularly inspected apartments
              </p>
            </div>

            <div className="space-y-2">
              <div className="size-12 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-3">
                <MapPin className="size-6 text-primary" />
              </div>
              <h3 className="font-semibold">Prime Locations</h3>
              <p className="text-sm text-muted-foreground">
                Downtown and residential areas with easy city access
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
