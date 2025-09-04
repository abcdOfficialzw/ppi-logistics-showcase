const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 md:col-span-2">
            <div className="text-2xl font-bold mb-4">PPI Truck & Logistics</div>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed">
              Your trusted partner for comprehensive logistics solutions. 
              Delivering excellence in freight management, fleet operations, 
              and supply chain optimization since 1998.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <span className="text-sm font-bold">Li</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <span className="text-sm font-bold">Tw</span>
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-accent transition-colors">
                <span className="text-sm font-bold">Fb</span>
              </a>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-primary-foreground/80 hover:text-accent transition-colors">About Us</a></li>
              <li><a href="#services" className="text-primary-foreground/80 hover:text-accent transition-colors">Services</a></li>
              <li><a href="#testimonials" className="text-primary-foreground/80 hover:text-accent transition-colors">Testimonials</a></li>
              <li><a href="#contact" className="text-primary-foreground/80 hover:text-accent transition-colors">Contact</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Careers</a></li>
            </ul>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Freight Management</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Fleet Solutions</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Express Delivery</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Cargo Storage</a></li>
              <li><a href="#" className="text-primary-foreground/80 hover:text-accent transition-colors">Supply Chain Analytics</a></li>
            </ul>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-primary-foreground/60 text-sm">
            © 2024 PPI Truck & Logistics. All rights reserved.
          </div>
          <div className="flex space-x-6 text-sm mt-4 md:mt-0">
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">Privacy Policy</a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">Terms of Service</a>
            <a href="#" className="text-primary-foreground/60 hover:text-accent transition-colors">Safety Standards</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;