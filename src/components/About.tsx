const About = () => {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-background to-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="section-header">
            Leading the Future of
            <span className="gradient-text"> Logistics</span>
          </h2>
          <p className="section-subheader">
            With decades of experience and cutting-edge technology, we deliver 
            comprehensive logistics solutions that exceed expectations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-accent rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Fast & Reliable</h3>
                <p className="text-muted-foreground">
                  Our advanced fleet and optimized routes ensure your cargo reaches its destination on time, every time.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-trust rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-trust-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Trusted Expertise</h3>
                <p className="text-muted-foreground">
                  Over 25 years of industry experience with a proven track record of successful logistics operations.
                </p>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="flex-shrink-0 w-12 h-12 bg-primary rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                </svg>
              </div>
              <div>
                <h3 className="text-xl font-semibold text-primary mb-2">Global Network</h3>
                <p className="text-muted-foreground">
                  Extensive network coverage with strategic partnerships across key transportation corridors.
                </p>
              </div>
            </div>
          </div>
          
          <div className="bg-card p-8 rounded-2xl shadow-[var(--shadow-medium)] border border-border">
            <h3 className="text-2xl font-bold text-primary mb-6">Company Profile</h3>
            <div className="space-y-4">
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Founded</span>
                <span className="font-semibold text-primary">1998</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Fleet Size</span>
                <span className="font-semibold text-primary">500+ Vehicles</span>
              </div>
              <div className="flex justify-between items-center py-2 border-b border-border">
                <span className="text-muted-foreground">Coverage</span>
                <span className="font-semibold text-primary">Nationwide</span>
              </div>
              <div className="flex justify-between items-center py-2">
                <span className="text-muted-foreground">Clients Served</span>
                <span className="font-semibold text-primary">2,500+</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;