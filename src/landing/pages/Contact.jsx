import { motion } from 'framer-motion';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiChevronRight } from 'react-icons/hi';
import heroImg from '../../assets/hero_image_carousel4.jpg';

const Contact = () => {
  return (
    <div className="overflow-hidden bg-surface">
      {/* Hero Section */}
      <section className="relative min-h-[50vh] flex items-center pt-32 pb-20 overflow-hidden bg-black">
        {/* Background Image with Homepage Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Contact Fashdigitals" 
            className="w-full h-full object-cover opacity-60"
          />
          {/* Multi-layered Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black/90 z-10"></div>
          <div className="absolute inset-0 bg-primary/30 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-black/20 z-10"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-20 text-center">
          <div className="max-w-4xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-primary-light uppercase bg-primary/20 backdrop-blur-md rounded-full border border-primary/30">
                Get In Touch
              </span>
              <h1 className="text-4xl md:text-7xl font-extrabold mb-8 leading-tight text-white">
                Partner with Us for <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent">Digital Excellence</span>
              </h1>
              <p className="text-xl text-white/80 leading-relaxed max-w-2xl mx-auto">
                Ready to take your digital presence to the next level? Our experts are here to help you navigate your growth journey and build something extraordinary.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-extrabold mb-8 text-primary-dark">
                Reach Out to Us
              </h2>

              <div className="space-y-8">
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-primary/10 rounded-2xl text-primary text-2xl">
                    <HiOutlineMail />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Email Us</h4>
                    <p className="text-text-muted">hello@fashdigitals.com</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-accent/10 rounded-2xl text-accent text-2xl">
                    <HiOutlinePhone />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Call Us</h4>
                    <p className="text-text-muted">+234 (0) 123 456 7890</p>
                  </div>
                </div>
                <div className="flex items-start gap-6">
                  <div className="p-4 bg-primary/10 rounded-2xl text-primary text-2xl">
                    <HiOutlineLocationMarker />
                  </div>
                  <div>
                    <h4 className="text-lg font-bold mb-1">Visit Us</h4>
                    <p className="text-text-muted">Digital Hub, Lagos, Nigeria</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-8 md:p-12 order-1 lg:order-2"
            >
              <form className="space-y-6">
                <div className="grid grid-cols-2 gap-6">
                  <div className="space-y-2 col-span-2 md:col-span-1">
                    <label className="text-sm font-bold text-primary-dark">First Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none" placeholder="John" />
                  </div>
                  <div className="space-y-2 col-span-2 md:col-span-1">
                    <label className="text-sm font-bold text-primary-dark">Last Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none" placeholder="Doe" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary-dark">Work Email</label>
                  <input type="email" className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none" placeholder="john@company.com" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary-dark">Service Needed</label>
                  <select className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none">
                    <option>Performance Marketing</option>
                    <option>SEO Optimization</option>
                    <option>Web Development</option>
                    <option>Other Services</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-primary-dark">Project Details</label>
                  <textarea rows="4" className="w-full px-4 py-3 bg-gray-50 border-none rounded-xl focus:ring-2 focus:ring-primary focus:bg-white transition-all outline-none" placeholder="Tell us about your goals..."></textarea>
                </div>
                <button type="submit" className="btn-primary w-full py-4 text-lg group">
                  Send Message <HiChevronRight className="group-hover:translate-x-1 transition-transform" />
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
