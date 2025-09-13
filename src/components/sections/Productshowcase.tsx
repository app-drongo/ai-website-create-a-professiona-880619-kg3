import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  Calendar,
  Heart,
  Star,
  Wifi,
  Car,
  Coffee,
  Plus,
  Minus,
  Check,
  MapPin,
  Users,
  Bed,
  Bath,
  Home,
} from 'lucide-react';

export default function ProductShowcase() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Property Images */}
          <div className="space-y-4">
            <div className="aspect-[4/3] rounded-2xl bg-muted overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1920&auto=format&fit=crop"
                alt="Downtown Executive Suite living room"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[
                'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=400&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?q=80&w=400&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&w=400&auto=format&fit=crop',
                'https://images.unsplash.com/photo-1571624436279-b272aff752b5?q=80&w=400&auto=format&fit=crop',
              ].map((src, i) => (
                <div
                  key={i}
                  className="aspect-square rounded-lg bg-muted overflow-hidden cursor-pointer hover:opacity-80 transition-opacity"
                >
                  <img
                    src={src}
                    alt={`Property view ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Property Details */}
          <div className="space-y-6">
            {/* Badges */}
            <div className="flex gap-2">
              <Badge variant="secondary" className="bg-primary/10 text-primary">
                Superhost
              </Badge>
              <Badge variant="outline">Instant Book</Badge>
            </div>

            {/* Title & Rating */}
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-2">
                Downtown Executive Suite
              </h1>
              <div className="flex items-center gap-4 mb-3">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`size-5 ${i < 5 ? 'fill-primary text-primary' : 'text-muted'}`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground">4.9 (47 reviews)</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="size-4" />
                <span>Downtown Financial District</span>
              </div>
            </div>

            {/* Property Details */}
            <div className="flex items-center gap-6 text-muted-foreground">
              <div className="flex items-center gap-2">
                <Users className="size-4" />
                <span>4 guests</span>
              </div>
              <div className="flex items-center gap-2">
                <Bed className="size-4" />
                <span>2 bedrooms</span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="size-4" />
                <span>2 bathrooms</span>
              </div>
            </div>

            {/* Price */}
            <div className="space-y-1">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold text-foreground">$189</span>
                <span className="text-muted-foreground">per night</span>
              </div>
              <p className="text-sm text-muted-foreground">$25 cleaning fee • $15 service fee</p>
            </div>

            {/* Description */}
            <p className="text-muted-foreground leading-relaxed">
              Luxurious downtown apartment perfect for business travelers and city explorers.
              Walking distance to major attractions, restaurants, and public transit. Features
              modern amenities, high-speed WiFi, and stunning city views.
            </p>

            {/* Guest Count & Dates */}
            <div className="space-y-4">
              <div className="space-y-2">
                <span className="text-sm font-medium">Guests</span>
                <div className="flex items-center border rounded-lg w-fit">
                  <Button variant="ghost" size="icon" className="rounded-r-none">
                    <Minus className="size-4" />
                  </Button>
                  <span className="px-4 py-2 min-w-[50px] text-center">2</span>
                  <Button variant="ghost" size="icon" className="rounded-l-none">
                    <Plus className="size-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Book Now & Save */}
            <div className="flex items-center gap-4">
              <Button size="lg" className="flex-1 gap-2">
                <Calendar className="size-5" />
                Check Availability
              </Button>
              <Button size="lg" variant="outline">
                <Heart className="size-5" />
              </Button>
            </div>

            {/* Amenities */}
            <div className="grid grid-cols-2 gap-4 py-4 border-y">
              <div className="flex items-center gap-2">
                <Wifi className="size-5 text-primary" />
                <span className="text-sm">High-Speed WiFi</span>
              </div>
              <div className="flex items-center gap-2">
                <Car className="size-5 text-primary" />
                <span className="text-sm">Free Parking</span>
              </div>
              <div className="flex items-center gap-2">
                <Coffee className="size-5 text-primary" />
                <span className="text-sm">Full Kitchen</span>
              </div>
              <div className="flex items-center gap-2">
                <Check className="size-5 text-primary" />
                <span className="text-sm">Self Check-in</span>
              </div>
            </div>

            {/* Property Tabs */}
            <Tabs defaultValue="amenities" className="w-full">
              <TabsList className="grid w-full grid-cols-3">
                <TabsTrigger value="amenities">Amenities</TabsTrigger>
                <TabsTrigger value="location">Location</TabsTrigger>
                <TabsTrigger value="policies">Policies</TabsTrigger>
              </TabsList>
              <TabsContent value="amenities" className="mt-4 space-y-2">
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <Check className="size-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">
                      Fully equipped kitchen with dishwasher
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">In-unit washer and dryer</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Smart TV with streaming services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="size-5 text-primary mt-0.5" />
                    <span className="text-muted-foreground">Air conditioning and heating</span>
                  </li>
                </ul>
              </TabsContent>
              <TabsContent value="location" className="mt-4">
                <div className="space-y-2 text-sm">
                  <p className="text-muted-foreground">
                    Prime downtown location with easy access to:
                  </p>
                  <ul className="space-y-1 ml-4">
                    <li className="text-muted-foreground">• Financial District (2 min walk)</li>
                    <li className="text-muted-foreground">• Metro Station (5 min walk)</li>
                    <li className="text-muted-foreground">• Restaurants & Shopping (1 block)</li>
                    <li className="text-muted-foreground">• Convention Center (10 min drive)</li>
                  </ul>
                </div>
              </TabsContent>
              <TabsContent value="policies" className="mt-4">
                <div className="space-y-2 text-sm">
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Check-in:</dt>
                    <dd className="font-medium">3:00 PM - 10:00 PM</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Check-out:</dt>
                    <dd className="font-medium">11:00 AM</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">Cancellation:</dt>
                    <dd className="font-medium">Free until 48h before</dd>
                  </div>
                  <div className="flex justify-between">
                    <dt className="text-muted-foreground">House Rules:</dt>
                    <dd className="font-medium">No smoking, No parties</dd>
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </section>
  );
}
