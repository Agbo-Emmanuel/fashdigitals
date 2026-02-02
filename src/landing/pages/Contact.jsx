import { motion } from 'framer-motion';
import { HiOutlineMail, HiOutlinePhone, HiOutlineLocationMarker, HiChevronRight } from 'react-icons/hi';

const Contact = () => {
  return (
    <div className="pt-32 pb-20">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Info */}
            <div>
              <motion.h1 
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-6xl font-extrabold mb-8"
              >
                Let's Build Something <span className="text-primary">Extraordinary</span>
              </motion.h1>
              <p className="text-xl text-text-muted mb-12 leading-relaxed">
                Ready to take your digital presence to the next level? Our experts are here to help you navigate your growth journey.
              </p>

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
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="glass-card p-8 md:p-12"
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
