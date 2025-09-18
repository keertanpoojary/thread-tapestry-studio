import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Award, 
  Heart, 
  Users, 
  Clock, 
  Sparkles,
  ArrowRight
} from 'lucide-react';

const About = () => {
  const achievements = [
    {
      icon: Award,
      title: "15+ Years Experience",
      description: "Master craftsman with extensive training in traditional and modern tailoring techniques"
    },
    {
      icon: Users,
      title: "500+ Happy Customers",
      description: "Building lasting relationships through quality service and personal attention"
    },
    {
      icon: Heart,
      title: "Passion for Perfection",
      description: "Every piece is crafted with love and attention to the finest details"
    },
    {
      icon: Clock,
      title: "Reliable Service",
      description: "Punctual, professional, and committed to meeting your timeline needs"
    }
  ];

  return (
    <section id="about" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Sparkles className="w-6 h-6 text-accent" />
            <span className="text-accent font-semibold text-sm tracking-wide uppercase">
              About Me
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">Meet Your </span>
            <span className="text-gradient-primary">Master Tailor</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Bringing decades of expertise and passion for perfect fit directly to your doorstep.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
          {/* Story Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-gradient-primary">
                Sarah Martinez
              </h3>
              
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Welcome to TailorCraft! I'm Sarah, and I've been passionate about the art of tailoring 
                  for over 15 years. What started as a childhood fascination with my grandmother's sewing 
                  machine has evolved into a thriving home-based business that serves families across the city.
                </p>
                
                <p>
                  I believe that every person deserves clothing that fits perfectly and makes them feel 
                  confident. That's why I brought my services directly to your home - because I understand 
                  that your time is valuable, and comfort matters when discussing your personal style needs.
                </p>
                
                <p>
                  From custom wedding dresses to everyday alterations, from business suits to casual wear, 
                  I approach each project with the same dedication to craftsmanship and attention to detail 
                  that my mentors taught me years ago.
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-hero">
                Schedule Consultation
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
              <Button variant="outline" className="border-2 hover:bg-secondary">
                View Portfolio
              </Button>
            </div>
          </div>

          {/* Professional Photo Placeholder */}
          <div className="animate-scale-in">
            <Card className="card-premium p-8 text-center">
              <div className="w-48 h-48 mx-auto mb-6 bg-gradient-primary rounded-full flex items-center justify-center">
                <div className="w-40 h-40 bg-primary-foreground rounded-full flex items-center justify-center">
                  <span className="text-6xl font-bold text-primary">SM</span>
                </div>
              </div>
              
              <h4 className="text-2xl font-bold mb-2">Sarah Martinez</h4>
              <p className="text-accent font-semibold mb-4">Master Tailor & Entrepreneur</p>
              
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>Certified Master Tailor</p>
                <p>Fashion Design Graduate</p>
                <p>Home Service Specialist</p>
              </div>
            </Card>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {achievements.map((achievement, index) => (
            <Card 
              key={achievement.title} 
              className="card-service p-6 text-center animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-16 h-16 bg-gradient-accent rounded-2xl flex items-center justify-center mx-auto mb-4">
                <achievement.icon className="w-8 h-8 text-accent-foreground" />
              </div>
              
              <h3 className="text-lg font-bold mb-3">{achievement.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {achievement.description}
              </p>
            </Card>
          ))}
        </div>

        {/* Mission Statement */}
        <div className="mt-16 text-center animate-fade-in">
          <Card className="card-premium p-12 max-w-4xl mx-auto">
            <h3 className="text-3xl font-bold mb-6 text-gradient-primary">Our Mission</h3>
            <p className="text-xl text-foreground leading-relaxed mb-8">
              "To make professional tailoring accessible and convenient for everyone, while 
              preserving the traditional craftsmanship that makes each piece truly special. 
              Your satisfaction and comfort are my top priorities."
            </p>
            <div className="w-16 h-1 bg-gradient-accent mx-auto rounded-full"></div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;