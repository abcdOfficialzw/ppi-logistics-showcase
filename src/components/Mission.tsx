const Mission = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-muted to-background">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="section-header text-left mb-8">
              Our Mission &
              <span className="gradient-text"> Values</span>
            </h2>
            
            <div className="space-y-8">
              <div className="border-l-4 border-accent pl-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Mission Statement</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To revolutionize logistics through innovative solutions, exceptional service, 
                  and unwavering commitment to our clients' success, while maintaining the highest 
                  standards of safety and reliability in every operation.
                </p>
              </div>
              
              <div className="border-l-4 border-trust pl-6">
                <h3 className="text-xl font-semibold text-primary mb-3">Our Vision</h3>
                <p className="text-muted-foreground leading-relaxed">
                  To be the leading logistics partner that businesses trust for their most critical 
                  transportation needs, setting industry standards for efficiency, sustainability, 
                  and customer satisfaction.
                </p>
              </div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-6">
            <div className="bg-card p-6 rounded-xl shadow-[var(--shadow-soft)] border border-border text-center">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-primary mb-2">Integrity</h4>
              <p className="text-sm text-muted-foreground">Honest, transparent, and ethical in all our dealings</p>
            </div>
            
            <div className="bg-card p-6 rounded-xl shadow-[var(--shadow-soft)] border border-border text-center">
              <div className="w-12 h-12 bg-trust rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-trust-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h4 className="font-semibold text-primary mb-2">Excellence</h4>
              <p className="text-sm text-muted-foreground">Continuous improvement and superior service delivery</p>
            </div>
            
            <div className="bg-card p-6 rounded-xl shadow-[var(--shadow-soft)] border border-border text-center">
              <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h4 className="font-semibold text-primary mb-2">Partnership</h4>
              <p className="text-sm text-muted-foreground">Building lasting relationships with our clients</p>
            </div>
            
            <div className="bg-card p-6 rounded-xl shadow-[var(--shadow-soft)] border border-border text-center">
              <div className="w-12 h-12 bg-accent rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h4 className="font-semibold text-primary mb-2">Safety</h4>
              <p className="text-sm text-muted-foreground">Uncompromising commitment to safe operations</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Mission;