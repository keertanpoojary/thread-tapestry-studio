import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Scissors, 
  Shirt, 
  Sparkles, 
  Package, 
  Ruler, 
  Clock,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import servicesImage from '@/assets/services-showcase.jpg';

const Services = () => {
  const services = [
    {
      icon: Scissors,
      title: "Custom Tailoring",
      description: "Bespoke suits, dresses, and formal wear tailored to your exact measurements and style preferences.",
      features: ["Perfect fit guarantee", "Premium fabrics", "Multiple fittings", "Style consultation"],
      price: "Starting at $299",
      popular: true
    },
    {
      icon: Shirt,
      title: "Alterations & Repairs",
      description: "Professional alterations for all types of clothing, from hemming to major reconstructions.",
      features: ["Same-day service", "All garment types", "Invisible repairs", "Size adjustments"],
      price: "Starting at $25",
      popular: false
    },
    {
      icon: Sparkles,
      title: "Laundry & Care",
      description: "Premium laundry services with pickup and delivery, including dry cleaning and special care.",
      features: ["Pickup & delivery", "Eco-friendly products", "Delicate handling", "Express service"],
      price: "Starting at $15",
      popular: false
    },
    {
      icon: Package,
      title: "Wardrobe Consultation",
      description: "Personal styling and wardrobe organization services to maximize your clothing potential.",
      features: ["Style assessment", "Color analysis", "Shopping guidance", "Organization tips"],
      price: "Starting at $150",
      popular: false
    }
  ];

  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Ruler className="w-6 h-6 text-accent" />
            <span className="text-accent font-semibold text-sm tracking-wide uppercase">
              Our Services
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-gradient-primary">Professional Services</span>
            <br />
            <span className="text-foreground">Delivered at Home</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            From custom tailoring to laundry services, we provide comprehensive clothing care 
            solutions with the convenience of home service.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-4 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={service.title} className="card-service p-6 relative animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
              {service.popular && (
                <div className="absolute -top-3 left-6 bg-gradient-accent text-accent-foreground px-3 py-1 rounded-full text-xs font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className="flex items-center space-x-3 mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <service.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold">{service.title}</h3>
              </div>
              
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center space-x-2">
                    <CheckCircle className="w-4 h-4 text-accent flex-shrink-0" />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>
              
              <div className="mt-auto">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-bold text-gradient-primary">{service.price}</span>
                </div>
                
                <Button className="w-full btn-accent group">
                  Book Service
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </Card>
          ))}
        </div>

        {/* Service Process */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 animate-fade-in">
            <h3 className="text-3xl font-bold">
              <span className="text-gradient-primary">How It Works</span>
            </h3>
            
            <div className="space-y-6">
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                  1
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Book Your Appointment</h4>
                  <p className="text-muted-foreground">Schedule a convenient time for our visit to your home.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                  2
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Consultation & Measurement</h4>
                  <p className="text-muted-foreground">We assess your needs and take precise measurements.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm flex-shrink-0">
                  3
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Professional Service</h4>
                  <p className="text-muted-foreground">Expert craftsmanship with attention to every detail.</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <div className="w-8 h-8 bg-gradient-accent rounded-full flex items-center justify-center text-accent-foreground font-bold text-sm flex-shrink-0">
                  4
                </div>
                <div>
                  <h4 className="font-semibold mb-1">Delivery & Follow-up</h4>
                  <p className="text-muted-foreground">We deliver the finished work and ensure your satisfaction.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-scale-in">
            <img 
              src={servicesImage} 
              alt="Professional tailoring services" 
              className="w-full rounded-2xl shadow-premium hover-glow"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;