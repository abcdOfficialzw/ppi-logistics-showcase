const Testimonials = () => {
  const testimonials = [
    {
      quote: "PPI Truck & Logistics has transformed our supply chain operations. Their reliability and attention to detail is unmatched. We've seen a 40% improvement in delivery times.",
      author: "Sarah Mitchell",
      position: "Supply Chain Director",
      company: "TechCorp Industries"
    },
    {
      quote: "Outstanding service quality and professional approach. They handle our most critical shipments with care and always deliver on their promises. Highly recommended.",
      author: "Michael Rodriguez",
      position: "Logistics Manager",
      company: "Global Manufacturing Inc."
    },
    {
      quote: "The team at PPI goes above and beyond. Their real-time tracking and communication keeps us informed every step of the way. True logistics partners.",
      author: "Jennifer Chen",
      position: "Operations Director",
      company: "Metro Distribution"
    }
  ];

  const stats = [
    { number: "99.8%", label: "On-Time Delivery" },
    { number: "2,500+", label: "Satisfied Clients" },
    { number: "25+", label: "Years Experience" },
    { number: "500+", label: "Fleet Vehicles" }
  ];

  return (
    <section id="testimonials" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-6">
        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-accent mb-2">
                {stat.number}
              </div>
              <div className="text-muted-foreground font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials Header */}
        <div className="text-center mb-16">
          <h2 className="section-header">
            What Our
            <span className="gradient-text"> Clients Say</span>
          </h2>
          <p className="section-subheader">
            Don't just take our word for it. Here's what industry leaders 
            say about our logistics services.
          </p>
        </div>
        
        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="testimonial-card">
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <svg key={i} className="w-5 h-5 text-trust" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
                ))}
              </div>
              
              <blockquote className="text-muted-foreground mb-6 italic leading-relaxed">
                "{testimonial.quote}"
              </blockquote>
              
              <div className="border-t border-border pt-4">
                <div className="font-semibold text-primary">
                  {testimonial.author}
                </div>
                <div className="text-sm text-muted-foreground">
                  {testimonial.position}
                </div>
                <div className="text-sm font-medium text-accent">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-8">Trusted by industry leaders and certified by:</p>
          <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
            <div className="text-primary font-bold text-xl">DOT CERTIFIED</div>
            <div className="text-primary font-bold text-xl">ISO 9001</div>
            <div className="text-primary font-bold text-xl">FMCSA APPROVED</div>
            <div className="text-primary font-bold text-xl">HAZMAT LICENSED</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;