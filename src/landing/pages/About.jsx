import { motion } from 'framer-motion';
import { HiOutlineLightBulb, HiOutlineUserGroup, HiOutlineGlobeAlt, HiOutlinePresentationChartLine } from 'react-icons/hi';
import logo from '../../assets/logo.png';
import heroImg from '../../assets/hero_image_carousel2.jpg';

const About = () => {
  const values = [
    {
      title: 'Data-Driven',
      desc: 'We rely on analytics and testing, not guesses, to drive our strategies.',
      icon: <HiOutlinePresentationChartLine />
    },
    {
      title: 'Growth Focused',
      desc: 'Our primary goal is the sustainable growth and ROI of our clients.',
      icon: <HiOutlineLightBulb />
    },
    {
      title: 'Transparent',
      desc: 'Clear reporting and honest communication are at our core.',
      icon: <HiOutlineGlobeAlt />
    },
    {
      title: 'Collaborative',
      desc: 'We work as an extension of your team, not just a service provider.',
      icon: <HiOutlineUserGroup />
    }
  ];

  return (
    <div className="overflow-hidden bg-black min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden bg-black">
        {/* Background Image with Homepage Overlays */}
        <div className="absolute inset-0 z-0">
          <img 
            src={heroImg} 
            alt="Fashdigitals Team" 
            className="w-full h-full object-cover opacity-60"
          />
          {/* Multi-layered Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/90 via-black/75 to-black/90 z-10"></div>
          <div className="absolute inset-0 bg-primary/30 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-black/20 z-10"></div>
        </div>

        <div className="container mx-auto px-4 md:px-8 relative z-20">
          <div className="w-full text-center flex flex-col items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-primary-light uppercase bg-primary/20 backdrop-blur-md rounded-full border border-primary/30">
                Our Story & Vision
              </span>
              <h1 className="text-4xl md:text-7xl font-extrabold mb-8 leading-tight text-white">
                Empowering Brands to <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-light to-accent">Win Digital</span>
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed mb-10 max-w-2xl text-center mx-auto">
                Fashdigitals was founded on a simple principle: digital marketing should be measurable, transparent, and focused on growth. We combine creative design with technical excellence to deliver results that matter.
              </p>
              
              <div className="w-full flex flex-wrap gap-12 justify-center">
                <div className="glass-card bg-white/5 border-white/10 p-6 flex flex-col items-center min-w-[140px]">
                  <div className="text-4xl font-extrabold text-accent mb-1">5+</div>
                  <p className="text-white/60 text-sm font-medium">Years Experience</p>
                </div>
                <div className="glass-card bg-white/5 border-white/10 p-6 flex flex-col items-center min-w-[140px]">
                  <div className="text-4xl font-extrabold text-accent mb-1">150+</div>
                  <p className="text-white/60 text-sm font-medium">Happy Clients</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 md:px-8 py-20 bg-black">
        {/* Our Values */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold mb-6 text-white">The Values That Drive Us</h2>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto">
            These core principles guide every campaign we launch and every website we build.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((v, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-8 border-t-4 border-t-accent bg-white/5 border-white/10"
            >
              <div className="text-4xl text-accent mb-6">{v.icon}</div>
              <h3 className="text-xl font-bold mb-4 text-white">{v.title}</h3>
              <p className="text-gray-400 leading-relaxed">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
