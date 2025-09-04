import heroImage from '@/assets/logistics-hero.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img 
          src={heroImage} 
          alt="Professional logistics and transport services" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 hero-bg opacity-85"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center text-white">
        <div className="fade-in visible">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Professional
            <span className="block gradient-text">Logistics Solutions</span>
          </h1>
          
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed opacity-90">
            Reliable freight management, advanced fleet solutions, and seamless logistics 
            operations that drive your business forward.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="btn-hero">
              Request Quote
            </button>
            <button className="btn-hero-outline">
              Learn More
            </button>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
          <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;