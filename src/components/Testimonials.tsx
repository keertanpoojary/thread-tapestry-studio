import { Card } from '@/components/ui/card';
import { Star, Quote } from 'lucide-react';
import customerImage from '@/assets/customer-1.jpg';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sunita Gupta",
      role: "Working Professional",
      image: customerImage,
      rating: 5,
      text: "Priya made my old office suits look completely new! She comes home for fittings and the prices are very reasonable. Now I feel confident at the office.",
      service: "Alterations & Fitting"
    },
    {
      name: "Rohit & Kavya",
      role: "Newly Married Couple",
      image: customerImage,
      rating: 5,
      text: "Got perfect lehenga and sherwani made for our wedding! Multiple fittings were free and quality was amazing! You can't get such good service within budget anywhere else.",
      service: "Custom Stitching"
    },
    {
      name: "Meera Joshi",
      role: "Busy Mom",
      image: customerImage,
      rating: 5,
      text: "From children's school uniforms to family clothes - everything gets done sitting at home! Free pickup-delivery and very reasonable prices. Saves both time and money!",
      service: "Laundry Services"
    },
    {
      name: "Amit Sharma",
      role: "Small Business Owner",
      image: customerImage,
      rating: 5,
      text: "Needed a perfect shirt for office presentation. Priya gave styling tips after seeing my existing wardrobe - saved money and upgraded my look too!",
      service: "Style Consultation"
    },
    {
      name: "Pooja Mishra",
      role: "College Student",
      image: customerImage,
      rating: 5,
      text: "Wanted to get custom kurti made on student budget. Even gave EMI option! Quality is so good it looked better than branded store clothes. Highly recommend for young people!",
      service: "Custom Stitching"
    },
    {
      name: "Rajesh Uncle",
      role: "Senior Citizen",
      image: customerImage,
      rating: 5,
      text: "My size had changed with age. Priya came home and adjusted all my clothes. She's very patient and talks lovingly with senior citizens.",
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