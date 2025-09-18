import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageCircle,
  Calendar
} from 'lucide-react';

const Contact = () => {
  const contactInfo = [
    {
      icon: Phone,
      title: "Call Us",
      info: "+91 98765 43210",
      subtext: "Available 9 AM to 7 PM"
    },
    {
      icon: Mail,
      title: "Email Us",
      info: "priya.tailor@gmail.com",
      subtext: "Reply guaranteed within 2 hours"
    },
    {
      icon: MapPin,
      title: "Service Area",
      info: "Mumbai & Thane",
      subtext: "Free visit within 20 km radius"
    },
    {
      icon: Clock,
      title: "Working Hours",
      info: "Mon - Sat: 9 AM - 7 PM",
      subtext: "Sunday: Emergency work only"
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <MessageCircle className="w-6 h-6 text-accent" />
            <span className="text-accent font-semibold text-sm tracking-wide uppercase">
              Get In Touch
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Ready to Get </span>
            <span className="text-gradient-primary">Started?</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contact us today to schedule your free consultation and discover how 
            we can help you look and feel your best.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <h3 className="text-2xl font-bold mb-6 text-gradient-primary">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                {contactInfo.map((contact, index) => (
                  <div 
                    key={contact.title} 
                    className="flex items-start space-x-4 animate-slide-up"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                      <contact.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{contact.title}</h4>
                      <p className="text-foreground font-medium">{contact.info}</p>
                      <p className="text-sm text-muted-foreground">{contact.subtext}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Actions */}
            <Card className="card-premium p-6">
              <h4 className="font-bold mb-4">Quick Actions</h4>
              <div className="space-y-3">
                <Button className="w-full btn-hero justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Schedule Appointment
                </Button>
                <Button variant="outline" className="w-full justify-start border-2">
                  <Phone className="w-4 h-4 mr-2" />
                  Call Now
                </Button>
                <Button variant="outline" className="w-full justify-start border-2">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Email
                </Button>
              </div>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="card-premium p-8 animate-scale-in">
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">First Name</label>
                    <Input 
                      placeholder="Your first name" 
                      className="w-full p-3 border-2 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Last Name</label>
                    <Input 
                      placeholder="Your last name" 
                      className="w-full p-3 border-2 focus:border-primary"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Email Address</label>
                    <Input 
                      type="email" 
                      placeholder="your.email@example.com" 
                      className="w-full p-3 border-2 focus:border-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone Number</label>
                    <Input 
                      type="tel" 
                      placeholder="(555) 123-4567" 
                      className="w-full p-3 border-2 focus:border-primary"
                    />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Service Needed</label>
                  <select className="w-full p-3 border-2 border-input rounded-lg focus:border-primary bg-background">
                    <option value="">Select a service...</option>
                    <option value="custom-tailoring">Custom Tailoring</option>
                    <option value="alterations">Alterations & Repairs</option>
                    <option value="laundry">Laundry & Care</option>
                    <option value="consultation">Wardrobe Consultation</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <Textarea 
                    placeholder="Tell us about your project or questions..." 
                    rows={5}
                    className="w-full p-3 border-2 focus:border-primary resize-none"
                  />
                </div>
                
                <div className="flex items-start space-x-3">
                  <input 
                    type="checkbox" 
                    id="newsletter" 
                    className="mt-1 w-4 h-4 text-primary border-2 border-border rounded focus:ring-primary"
                  />
                  <label htmlFor="newsletter" className="text-sm text-muted-foreground">
                    I'd like to receive updates about services and special offers via email.
                  </label>
                </div>
                
                <Button className="btn-hero w-full text-lg">
                  <Send className="w-5 h-5 mr-2" />
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>

        {/* Service Areas */}
        <div className="mt-16 animate-fade-in">
          <Card className="card-premium p-8 text-center">
            <h3 className="text-2xl font-bold mb-4 text-gradient-primary">We Serve These Areas</h3>
            <p className="text-muted-foreground mb-6">
              Currently providing home services within a 15-mile radius of downtown
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm">
              <span>Andheri</span>
              <span>Bandra</span>
              <span>Juhu</span>
              <span>Malad</span>
              <span>Borivali</span>
              <span>Kandivali</span>
              <span>Thane</span>
              <span>Ghatkopar</span>
              <span>Powai</span>
              <span>Vikhroli</span>
              <span>Kurla</span>
              <span>Chembur</span>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              Don't see your area? Contact us - we may be able to arrange special service.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;