import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MapPin, Users, Bed, Wifi, Car, Star, Filter, ChevronDown } from 'lucide-react';

export default function ProductGrid() {
  const properties = [
    {
      id: 1,
      name: 'Downtown Executive Studio',
      pricePerNight: 89,
      originalPrice: 109,
      image: 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 47,
      badge: 'Popular',
      location: 'Downtown Core',
      guests: 2,
      bedrooms: 'Studio',
      amenities: ['Wifi', 'Kitchen', 'Workspace'],
    },
    {
      id: 2,
      name: 'Riverside One-Bedroom Retreat',
      pricePerNight: 125,
      image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 63,
      badge: 'Superhost',
      location: 'Riverside District',
      guests: 4,
      bedrooms: '1 Bedroom',
      amenities: ['Wifi', 'Parking', 'Balcony'],
    },
    {
      id: 3,
      name: 'Historic District Two-Bedroom',
      pricePerNight: 165,
      image: 'https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=400&h=400&fit=crop',
      rating: 4.7,
      reviews: 38,
      location: 'Historic Quarter',
      guests: 6,
      bedrooms: '2 Bedrooms',
      amenities: ['Wifi', 'Kitchen', 'Washer'],
    },
    {
      id: 4,
      name: 'Modern Loft Studio',
      pricePerNight: 95,
      originalPrice: 115,
      image: 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=400&fit=crop',
      rating: 4.6,
      reviews: 29,
      badge: 'Recently Renovated',
      location: 'Arts District',
      guests: 2,
      bedrooms: 'Studio',
      amenities: ['Wifi', 'Gym Access', 'Rooftop'],
    },
    {
      id: 5,
      name: 'Garden View One-Bedroom',
      pricePerNight: 135,
      image: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
      rating: 4.8,
      reviews: 52,
      location: 'Garden District',
      guests: 4,
      bedrooms: '1 Bedroom',
      amenities: ['Wifi', 'Parking', 'Garden'],
    },
    {
      id: 6,
      name: 'Executive Two-Bedroom Suite',
      pricePerNight: 195,
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=400&h=400&fit=crop',
      rating: 4.9,
      reviews: 71,
      badge: 'Premium',
      location: 'Business District',
      guests: 6,
      bedrooms: '2 Bedrooms',
      amenities: ['Wifi', 'Parking', 'Concierge'],
    },
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Our Premium Apartments
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Discover our collection of professionally managed vacation rentals in prime city
            locations
          </p>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="size-4" />
              Filters
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              Neighborhood
              <ChevronDown className="size-4" />
            </Button>
            <Button variant="ghost" size="sm" className="gap-2">
              Price Range
              <ChevronDown className="size-4" />
            </Button>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>All 6 properties available</span>
            <Button variant="ghost" size="sm" className="gap-2">
              Sort by: Rating
              <ChevronDown className="size-4" />
            </Button>
          </div>
        </div>

        {/* Property Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map(property => (
            <Card
              key={property.id}
              className="group overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="relative aspect-[4/3] bg-muted">
                {property.badge && (
                  <Badge
                    className="absolute top-4 left-4 z-10"
                    variant={
                      property.badge === 'Popular'
                        ? 'default'
                        : property.badge === 'Premium'
                          ? 'secondary'
                          : 'outline'
                    }
                  >
                    {property.badge}
                  </Badge>
                )}
                <img
                  src={property.image}
                  alt={property.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>

              <CardContent className="p-4">
                <div className="flex items-center gap-1 text-sm text-muted-foreground mb-2">
                  <MapPin className="size-3" />
                  <span>{property.location}</span>
                </div>

                <h3 className="font-semibold text-foreground mb-3 line-clamp-2">{property.name}</h3>

                {/* Property Details */}
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Users className="size-3" />
                    <span>{property.guests} guests</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Bed className="size-3" />
                    <span>{property.bedrooms}</span>
                  </div>
                </div>

                {/* Amenities */}
                <div className="flex items-center gap-2 mb-3">
                  {property.amenities.slice(0, 3).map((amenity, index) => (
                    <div key={index} className="flex items-center gap-1">
                      {amenity === 'Wifi' && <Wifi className="size-3 text-muted-foreground" />}
                      {amenity === 'Parking' && <Car className="size-3 text-muted-foreground" />}
                      <span className="text-xs text-muted-foreground">{amenity}</span>
                    </div>
                  ))}
                </div>

                {/* Rating */}
                <div className="flex items-center gap-2 mb-3">
                  <div className="flex items-center gap-1">
                    <Star className="size-4 fill-primary text-primary" />
                    <span className="font-medium text-foreground">{property.rating}</span>
                  </div>
                  <span className="text-sm text-muted-foreground">
                    ({property.reviews} reviews)
                  </span>
                </div>

                {/* Price */}
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-foreground">
                    ${property.pricePerNight}
                  </span>
                  <span className="text-sm text-muted-foreground">per night</span>
                  {property.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through ml-2">
                      ${property.originalPrice}
                    </span>
                  )}
                </div>
              </CardContent>

              <CardFooter className="p-4 pt-0">
                <Button className="w-full group/btn" size="sm">
                  Check Availability
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            All properties include professional cleaning, 24/7 support, and flexible check-in
          </p>
          <Button variant="outline" size="lg">
            View Booking Calendar
          </Button>
        </div>
      </div>
    </section>
  );
}
