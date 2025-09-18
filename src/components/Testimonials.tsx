import { Card } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import customerImage from '@/assets/customer-1.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Jennifer Wilson",
      role: "Marketing Executive",
      image: customerImage,
      rating: 5,
      text: "Sarah transformed my old business suits into perfectly fitted pieces that make me feel confident every day. The home service was incredibly convenient, and her attention to detail is unmatched.",
      service: "Alterations & Fitting"
    },
    {
      name: "Michael Chen",
      role: "Wedding Groom",
      image: customerImage,
      rating: 5,
      text: "For our wedding, Sarah created the most beautiful custom suit. She came to our home multiple times for fittings and made sure everything was perfect. The quality exceeded our expectations!",
      service: "Custom Tailoring"
    },
    {
      name: "Lisa Rodriguez",
      role: "Busy Professional",
      image: customerImage,
      rating: 5,
      text: "The laundry pickup and delivery service has been a game-changer for my schedule. Sarah takes such good care of my clothes, and they always come back looking brand new. Highly recommend!",
      service: "Laundry Services"
    },
    {
      name: "David Thompson",
      role: "Businessman",
      image: customerImage,
      rating: 5,
      text: "Sarah's wardrobe consultation opened my eyes to so many possibilities with my existing clothes. She helped me create dozens of new outfit combinations I never thought of. Amazing value!",
      service: "Wardrobe Consultation"
    },
    {
      name: "Emily Parker",
      role: "Teacher",
      image: customerImage,
      rating: 5,
      text: "As a teacher on a budget, I thought custom tailoring was out of reach. Sarah's affordable prices and payment plans made it possible for me to have beautifully fitted professional clothes.",
      service: "Custom Tailoring"
    },
    {
      name: "Robert Kim",
      role: "Retiree",
      image: customerImage,
      rating: 5,
      text: "After losing weight, none of my clothes fit properly. Sarah came to my home and altered everything perfectly. She's patient, professional, and truly cares about her customers' satisfaction.",
      service: "Alterations"
    }
  ];

  return (
    <section id="reviews" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Star className="w-6 h-6 text-accent fill-current" />
            <span className="text-accent font-semibold text-sm tracking-wide uppercase">
              Customer Reviews
            </span>
          </div>
          
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-foreground">What Our </span>
            <span className="text-gradient-primary">Customers Say</span>
          </h2>
          
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied customers 
            have to say about their experience with TailorCraft.
          </p>
        </div>

        {/* Overall Rating */}
        <div className="flex justify-center mb-16">
          <Card className="card-premium p-8 text-center">
            <div className="flex items-center justify-center space-x-2 mb-4">
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-8 h-8 text-accent fill-current" />
                ))}
              </div>
            </div>
            <div className="text-4xl font-bold text-gradient-primary mb-2">4.9/5</div>
            <p className="text-muted-foreground">Based on 127+ reviews</p>
            <p className="text-sm text-accent font-semibold mt-2">500+ Happy Customers</p>
          </Card>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={testimonial.name} 
              className="card-service p-6 animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Quote Icon */}
              <div className="w-12 h-12 bg-gradient-accent rounded-xl flex items-center justify-center mb-4">
                <Quote className="w-6 h-6 text-accent-foreground" />
              </div>

              {/* Rating */}
              <div className="flex space-x-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-accent fill-current" />
                ))}
              </div>

              {/* Testimonial Text */}
              <p className="text-muted-foreground leading-relaxed mb-6 italic">
                "{testimonial.text}"
              </p>

              {/* Customer Info */}
              <div className="flex items-center space-x-4">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-accent/20"
                />
                <div className="flex-1">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>

              {/* Service Tag */}
              <div className="mt-4 pt-4 border-t border-border/50">
                <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
                  {testimonial.service}
                </span>
              </div>
            </Card>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center animate-fade-in">
          <Card className="card-premium p-12 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Happy Customers?</h3>
            <p className="text-muted-foreground mb-8">
              Experience the same level of quality and service that has earned us these amazing reviews.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-hero">
                Book Your Service Today
              </button>
              <button className="btn-accent">
                Get Free Consultation
              </button>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;