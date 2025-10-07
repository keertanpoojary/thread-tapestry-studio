import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Scissors, Clock, Home, Star } from 'lucide-react';
import heroImage from '@/assets/hero-tailoring.jpg';
import BookingDialog from './BookingDialog';

const Hero = () => {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isServiceOpen, setIsServiceOpen] = useState(false);

  return (
    <>
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Professional tailoring workspace" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/80 to-background/60"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center">
                  <Scissors className="w-4 h-4 text-accent-foreground" />
                </div>
                <span className="text-accent font-semibold text-sm tracking-wide uppercase">
                  Premium Home Tailoring
                </span>
              </div>
              
              <h1 className="text-5xl lg:text-6xl font-bold leading-tight">
                <span className="text-foreground">Expert </span>
                <span className="text-gradient-primary">Tailoring</span>
                <br />
                <span className="text-foreground">At Your </span>
                <span className="text-gradient-accent">Doorstep</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                Mumbai's most affordable and quality tailoring service! From suits and shirts to saree blouses - 
                all types of stitching work. Home measurements and fittings - starting from just ₹99!
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button 
                className="btn-hero text-lg px-8 py-4"
                onClick={() => setIsBookingOpen(true)}
              >
                Book Home Visit
              </Button>
              <Button 
                variant="outline" 
                className="text-lg px-8 py-4 border-2 hover:bg-secondary"
                onClick={() => setIsServiceOpen(true)}
              >
                View Services
              </Button>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <Home className="w-6 h-6 text-primary" />
                </div>
                <span className="font-semibold">Home Service</span>
                <span className="text-sm text-muted-foreground">We come to you</span>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <Scissors className="w-6 h-6 text-primary" />
                </div>
                <span className="font-semibold">Expert Craft</span>
                <span className="text-sm text-muted-foreground">Professional quality</span>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-primary" />
                </div>
                <span className="font-semibold">Quick Service</span>
                <span className="text-sm text-muted-foreground">Fast turnaround</span>
              </div>
              
              <div className="flex flex-col items-center text-center space-y-2">
                <div className="w-12 h-12 bg-secondary rounded-xl flex items-center justify-center">
                  <Star className="w-6 h-6 text-primary" />
                </div>
                <span className="font-semibold">5-Star Rated</span>
                <span className="text-sm text-muted-foreground">Trusted service</span>
              </div>
            </div>
          </div>

          {/* Right Column - Stats Card */}
          <div className="space-y-6 animate-slide-up">
            <div className="card-premium p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-gradient-primary">Why Choose Us?</h3>
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Happy Customers</span>
                  <span className="text-2xl font-bold text-accent">500+</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Years Experience</span>
                  <span className="text-2xl font-bold text-accent">15+</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Home Visits</span>
                  <span className="text-2xl font-bold text-accent">1000+</span>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-muted-foreground">Custom Pieces Made</span>
                  <span className="text-2xl font-bold text-accent">2500+</span>
                </div>
              </div>
              
              <div className="mt-8 p-4 bg-accent/10 rounded-lg border border-accent/20">
                <p className="text-sm text-center">
                  <span className="font-semibold text-accent">Free home visit</span> - Absolutely free for first-time customers!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <BookingDialog 
        open={isBookingOpen} 
        onOpenChange={setIsBookingOpen}
        bookingType="home_visit"
      />
      
      <BookingDialog 
        open={isServiceOpen} 
        onOpenChange={setIsServiceOpen}
        bookingType="service"
      />
    </section>
    </>
  );
};

export default Hero;