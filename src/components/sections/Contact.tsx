'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  MessageSquare,
  Calendar,
  Home,
  Shield,
  CheckCircle,
} from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    property: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Booking inquiry submitted:', formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const contactMethods = [
    {
      icon: Phone,
      title: 'Direct Booking Line',
      description: 'Speak with your host directly',
      contact: '+1 (555) 789-2468',
      action: 'Call for Instant Booking',
    },
    {
      icon: Mail,
      title: 'Booking Inquiries',
      description: 'Email for availability & rates',
      contact: 'bookings@citystayrentals.com',
      action: 'Send Inquiry',
    },
    {
      icon: MessageSquare,
      title: 'WhatsApp Support',
      description: 'Quick responses via WhatsApp',
      contact: 'Available 8AM - 10PM',
      action: 'Message Now',
    },
  ];

  const properties = [
    'Downtown Loft - 1BR',
    'Executive Suite - 2BR',
    'Modern Studio - Studio',
    'Garden Apartment - 1BR',
    'Penthouse View - 2BR',
    'Cozy Corner - Studio',
  ];

  const supportHours = [
    { day: 'Monday - Friday', hours: '8:00 AM - 10:00 PM' },
    { day: 'Saturday - Sunday', hours: '9:00 AM - 9:00 PM' },
    { day: 'Holidays', hours: '10:00 AM - 6:00 PM' },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/20 to-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <Badge variant="outline" className="mb-4 px-4 py-2">
            <Home className="size-4 mr-2" />
            Direct Booking Support
          </Badge>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Book Your
            <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Perfect Stay?
            </span>
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Get personalized assistance with your booking. No platform fees, direct communication
            with your host, and instant confirmation available.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-7xl mx-auto">
          {/* Booking Inquiry Form */}
          <Card className="border-border/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Calendar className="size-6 text-primary" />
                Booking Inquiry Form
              </CardTitle>
              <CardDescription>
                Tell us about your stay and we'll check availability and provide instant pricing.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2">
                      Guest Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="Sarah Johnson"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                      placeholder="sarah@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="property" className="block text-sm font-medium mb-2">
                    Preferred Property
                  </label>
                  <select
                    id="property"
                    name="property"
                    value={formData.property}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors"
                  >
                    <option value="">Any available property</option>
                    {properties.map((property, index) => (
                      <option key={index} value={property}>
                        {property}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Booking Details *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-border rounded-lg bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-colors resize-none"
                    placeholder="Check-in: March 15, 2024&#10;Check-out: March 20, 2024&#10;Guests: 2 adults&#10;Special requests: Early check-in if possible"
                  />
                </div>

                <Button type="submit" className="w-full text-base py-6 group">
                  Send Booking Inquiry
                  <Send className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
                </Button>

                <div className="flex items-center gap-2 text-sm text-muted-foreground">
                  <CheckCircle className="size-4 text-primary" />
                  <span>Typical response time: Within 2 hours</span>
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8">
            {/* Direct Contact Methods */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <Phone className="size-5 text-primary" />
                Direct Host Contact
              </h3>
              <div className="grid gap-4">
                {contactMethods.map((method, index) => {
                  const Icon = method.icon;
                  return (
                    <Card
                      key={index}
                      className="border-border/50 hover:border-primary/20 transition-colors cursor-pointer group"
                    >
                      <CardContent className="p-6">
                        <div className="flex items-start gap-4">
                          <div className="size-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                            <Icon className="size-6 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold mb-1">{method.title}</h4>
                            <p className="text-sm text-muted-foreground mb-2">
                              {method.description}
                            </p>
                            <p className="font-medium text-primary">{method.contact}</p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>

            {/* Property Location */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold flex items-center gap-2">
                <MapPin className="size-5 text-primary" />
                Property Locations
              </h3>
              <Card className="border-border/50">
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Badge variant="secondary" className="mt-1">
                        Downtown
                      </Badge>
                      <div>
                        <p className="font-medium">Financial District Area</p>
                        <p className="text-sm text-muted-foreground">
                          Walking distance to restaurants, shopping, and transit
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Badge variant="secondary" className="mt-1">
                        Residential
                      </Badge>
                      <div>
                        <p className="font-medium">Quiet Neighborhood</p>
                        <p className="text-sm text-muted-foreground">
                          Family-friendly area with parks and local amenities
                        </p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Support Hours */}
            <Card className="border-border/50">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold flex items-center gap-2 mb-4">
                  <Clock className="size-5 text-primary" />
                  Host Availability
                </h3>
                <div className="space-y-3">
                  {supportHours.map((schedule, index) => (
                    <div key={index} className="flex justify-between items-center">
                      <span className="text-muted-foreground">{schedule.day}</span>
                      <span className="font-medium">{schedule.hours}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-4 p-3 bg-primary/10 rounded-lg">
                  <p className="text-sm text-primary font-medium flex items-center gap-2">
                    <Shield className="size-4" />
                    Emergency contact available 24/7 for current guests
                  </p>
                </div>
              </CardContent>
            </Card>

            {/* Booking Benefits */}
            <Card className="border-border/50 bg-accent/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold mb-4">Why Book Direct?</h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="size-5 text-primary flex-shrink-0" />
                    <span className="text-sm">No platform fees - save 10-15%</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="size-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Direct communication with host</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="size-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Flexible check-in arrangements</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="size-5 text-primary flex-shrink-0" />
                    <span className="text-sm">Personalized local recommendations</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
